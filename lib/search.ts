import { getAllArticles } from "@/lib/content";
import { getAllCases } from "@/lib/cases";
import { getAllConcepts, getConceptSlug } from "@/lib/concepts";
import { getAllScholars } from "@/lib/field-history";
import { getFieldEssay } from "@/lib/field-essays";
import { COMPARATIVE_DIMENSIONS } from "@/lib/research-guides";
import { getAllReadings, getAllTopics } from "@/lib/topics";

export type SearchItem = {
  title: string;
  href: string;
  type: "Page" | "Field" | "Reading" | "Case" | "Concept" | "Scholar" | "Article";
  description: string;
  keywords: string[];
};

export function getSearchIndex(): SearchItem[] {
  const staticPages: SearchItem[] = [
    {
      title: "Orientation",
      href: "/start-here",
      type: "Page",
      description: "Editorial scope, reading frames, and disciplinary points of entry.",
      keywords: ["orientation", "scope", "reading frame"]
    },
    {
      title: "Readings",
      href: "/literature",
      type: "Page",
      description: "A compact index of study notes and representative readings.",
      keywords: ["bibliography", "citation", "bibtex", "doi"]
    },
    {
      title: "Cases",
      href: "/cases",
      type: "Page",
      description: "Classic foundational, corporate, securities, and financial-law cases.",
      keywords: ["cases", "foundations", "corporate law", "securities regulation", "financial law"]
    },
    {
      title: "History and Theory Lineages",
      href: "/history",
      type: "Page",
      description: "A chronological field history combined with conceptual lineages linking scholars, readings, concepts, and cases.",
      keywords: ["history", "theory", "lineages", "coase", "calabresi", "agency costs", "behavioral law and economics"]
    },
    {
      title: "Debates and Critiques",
      href: "/debates",
      type: "Page",
      description: "Recurring critiques, limits, and assumptions in law-and-economics arguments.",
      keywords: ["debates", "critique", "efficiency", "distribution", "market efficiency", "shareholder primacy"]
    },
    {
      title: "Comparative Dimensions",
      href: "/comparative-law",
      type: "Page",
      description: "Comparative law-and-economics themes for institutional analysis.",
      keywords: ["comparative law", "delaware", "mandatory disclosure", "law and finance", "financial regulation"]
    },
    {
      title: "Law and Economics Research Weekly",
      href: "/weekly-report",
      type: "Page",
      description: "New law-and-economics articles and working papers with methods, findings, dates, and primary sources.",
      keywords: ["weekly report", "research weekly", "latest research", "new scholarship", "working papers", "journal articles"]
    },
    {
      title: "Methods Toolkit",
      href: "/methods",
      type: "Page",
      description: "Research design and empirical legal studies resources.",
      keywords: [
        "methods",
        "empirical",
        "empirical legal research",
        "empirical legal studies",
        "legal data",
        "coding rules",
        "variables",
        "sample restrictions",
        "causal inference",
        "difference-in-differences",
        "event study",
        "regression discontinuity",
        "matching",
        "synthetic control"
      ]
    },
    {
      title: "Scholar Match",
      href: "/scholar-match",
      type: "Page",
      description: "A short orientation exercise that suggests a nearby scholar profile.",
      keywords: ["scholar match", "quiz", "orientation", "research affinity", "scholars"]
    },
    {
      title: "Source Policy",
      href: "/source-policy",
      type: "Page",
      description: "Editorial and source standards for the archive.",
      keywords: ["source policy", "verification", "citations", "images"]
    },
    {
      title: "Citation and Versioning",
      href: "/citation",
      type: "Page",
      description: "Suggested citation practice, versioning, and correction standards for archive pages.",
      keywords: ["citation", "versioning", "corrections", "access date", "archive citation"]
    }
  ];

  const topics = getAllTopics();
  const topicItems = topics.map<SearchItem>((topic) => {
    const fieldEssay = getFieldEssay(topic.slug);

    return {
      title: topic.title,
      href: `/topics/${topic.slug}`,
      type: "Field",
      description: topic.description,
      keywords: [
        ...topic.researchQuestions,
        fieldEssay?.thesis ?? "",
        ...(fieldEssay?.readingPath ?? []),
        ...(fieldEssay?.tensions ?? [])
      ]
    };
  });

  const readingItems = getAllReadings().map<SearchItem>((reading) => ({
    title: reading.title,
    href: `/readings/${reading.slug}`,
    type: "Reading",
    description: `${reading.authors}, ${reading.year}. ${reading.venue}.`,
    keywords: [reading.summary, reading.sourceLabel, reading.level, reading.topicTitle, reading.authors]
  }));

  const caseItems = getAllCases().map<SearchItem>((caseRecord) => ({
    title: caseRecord.title,
    href: `/cases/${caseRecord.slug}`,
    type: "Case",
    description: `${caseRecord.citation}. ${caseRecord.issue}`,
    keywords: [caseRecord.field, caseRecord.court, caseRecord.holding, caseRecord.significance, ...caseRecord.concepts]
  }));

  const conceptItems = getAllConcepts().map<SearchItem>((concept) => ({
    title: concept.term,
    href: `/concepts/${getConceptSlug(concept.term)}`,
    type: "Concept",
    description: concept.definition,
    keywords: [concept.field, concept.level, concept.whyItMatters, ...concept.related]
  }));

  const scholarItems = getAllScholars().map<SearchItem>((scholar) => ({
    title: scholar.name,
    href: `/scholars/${scholar.slug}`,
    type: "Scholar",
    description: scholar.summary,
    keywords: [
      scholar.role,
      scholar.relevance,
      scholar.surname,
      scholar.sortLetter,
      scholar.officialProfileSource,
      ...scholar.fields,
      ...scholar.majorWorks
    ]
  }));

  const articleItems = getAllArticles().map<SearchItem>((article) => ({
    title: article.title,
    href: `/articles/${article.slug}`,
    type: "Article",
    description: article.summary,
    keywords: [article.category, article.subtitle, ...article.tags, ...article.keywords]
  }));

  const comparativeItems = COMPARATIVE_DIMENSIONS.map<SearchItem>((dimension) => ({
    title: dimension.title,
    href: `/comparative-law/${dimension.slug}`,
    type: "Page",
    description: dimension.comparison,
    keywords: [
      "comparative law",
      "comparative law and economics",
      dimension.thesis,
      dimension.institutionalProblem,
      dimension.caution,
      ...dimension.jurisdictions,
      ...dimension.axes.flatMap((axis) => [axis.label, axis.note]),
      ...dimension.analyticFocus,
      ...dimension.portabilityQuestions
    ]
  }));

  return [
    ...staticPages,
    ...topicItems,
    ...readingItems,
    ...caseItems,
    ...conceptItems,
    ...scholarItems,
    ...articleItems,
    ...comparativeItems
  ];
}
