import type { CaseRecord } from "@/lib/cases";
import { getAllConcepts, getConceptSlug, type ConceptEntry } from "@/lib/concepts";
import { getCuratedReadingsForConcept } from "@/lib/concept-readings";
import type { IndexedReading } from "@/lib/topics";

function normalizeConnectionText(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function caseConnectionText(caseRecord: CaseRecord) {
  return [
    caseRecord.title,
    caseRecord.citation,
    caseRecord.field,
    caseRecord.issue,
    caseRecord.facts,
    caseRecord.holding,
    caseRecord.reasoning,
    caseRecord.significance,
    ...caseRecord.concepts
  ].join(" ");
}

function conceptTerms(concept: ConceptEntry) {
  return [concept.term, concept.field, ...concept.related].map(normalizeConnectionText).filter(Boolean);
}

export function getConceptsForCase(caseRecord: CaseRecord, limit = 5) {
  const normalizedCaseText = normalizeConnectionText(caseConnectionText(caseRecord));
  const explicitConceptSlugs = new Set(caseRecord.concepts.map((concept) => getConceptSlug(concept)));

  return getAllConcepts()
    .map((concept) => {
      const conceptSlug = getConceptSlug(concept.term);
      const terms = conceptTerms(concept);
      const score =
        (explicitConceptSlugs.has(conceptSlug) ? 8 : 0) +
        terms.reduce((sum, term) => {
          if (!term) return sum;
          return normalizedCaseText.includes(term) ? sum + (term === normalizeConnectionText(concept.term) ? 3 : 1) : sum;
        }, 0);

      return { concept, score };
    })
    .filter((item) => item.score > 0)
    .sort((first, second) => second.score - first.score || first.concept.term.localeCompare(second.concept.term))
    .slice(0, limit)
    .map((item) => item.concept);
}

export function getReadingsForCase(caseRecord: CaseRecord, readings: IndexedReading[], limit = 4) {
  const seen = new Set<string>();

  return getConceptsForCase(caseRecord, 4)
    .flatMap((concept) => getCuratedReadingsForConcept(concept, readings))
    .filter((reading) => {
      if (seen.has(reading.slug)) return false;
      seen.add(reading.slug);
      return true;
    })
    .slice(0, limit);
}

export function getCasesForConcept(concept: ConceptEntry, cases: CaseRecord[], limit = 4) {
  const terms = conceptTerms(concept);

  return cases
    .map((caseRecord) => {
      const normalizedCaseText = normalizeConnectionText(caseConnectionText(caseRecord));
      const score = terms.reduce((sum, term) => {
        if (!term) return sum;
        return normalizedCaseText.includes(term) ? sum + (term === normalizeConnectionText(concept.term) ? 3 : 1) : sum;
      }, 0);

      return { caseRecord, score };
    })
    .filter((item) => item.score > 0)
    .sort(
      (first, second) =>
        second.score - first.score ||
        Number.parseInt(first.caseRecord.year, 10) - Number.parseInt(second.caseRecord.year, 10) ||
        first.caseRecord.title.localeCompare(second.caseRecord.title)
    )
    .slice(0, limit)
    .map((item) => item.caseRecord);
}

export function getCasesForConcepts(concepts: ConceptEntry[], cases: CaseRecord[], limit = 3) {
  const caseScores = new Map<string, { caseRecord: CaseRecord; score: number }>();

  concepts.forEach((concept) => {
    getCasesForConcept(concept, cases, cases.length).forEach((caseRecord) => {
      const current = caseScores.get(caseRecord.slug);
      caseScores.set(caseRecord.slug, {
        caseRecord,
        score: (current?.score ?? 0) + 1
      });
    });
  });

  return [...caseScores.values()]
    .sort(
      (first, second) =>
        second.score - first.score ||
        Number.parseInt(first.caseRecord.year, 10) - Number.parseInt(second.caseRecord.year, 10) ||
        first.caseRecord.title.localeCompare(second.caseRecord.title)
    )
    .slice(0, limit)
    .map((item) => item.caseRecord);
}
