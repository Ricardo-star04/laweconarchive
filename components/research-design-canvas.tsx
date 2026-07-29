"use client";

import { useEffect, useMemo, useState } from "react";
import { CopyButton } from "@/components/copy-button";

type FieldKey =
  | "question"
  | "unitAndScope"
  | "mechanism"
  | "rivalExplanation"
  | "outcome"
  | "exposure"
  | "dataAndSample"
  | "constructValidity"
  | "comparison"
  | "assumptions"
  | "threats"
  | "inference"
  | "robustness"
  | "heterogeneity"
  | "externalValidity"
  | "normativeBoundary"
  | "reproducibilityPlan"
  | "governancePlan";

type FieldDefinition = {
  key: FieldKey;
  label: string;
  prompt: string;
  placeholder: string;
  output: string;
  wide?: boolean;
};

const fields: FieldDefinition[] = [
  {
    key: "question",
    label: "Research question and claim",
    prompt: "State one answerable question and classify it as descriptive, associational, causal, or interpretive.",
    placeholder: "Did [legal change] affect [outcome] for [population] during [period]?",
    output: "Question + claim type",
    wide: true
  },
  {
    key: "unitAndScope",
    label: "Unit, legal population, and scope",
    prompt: "Define one observation, the population to which the claim refers, jurisdictions, and relevant dates.",
    placeholder: "Firm-year; all published enforcement actions; listed issuers in jurisdiction X, 2015–2025...",
    output: "Scope rule"
  },
  {
    key: "mechanism",
    label: "Legal and behavioral mechanism",
    prompt: "Connect the legal rule to an affected actor, decision margin, incentive or information change, and outcome.",
    placeholder: "Rule → actor → changed constraint/information → behavior → measured outcome",
    output: "Mechanism chain"
  },
  {
    key: "rivalExplanation",
    label: "Rival explanation and refutation",
    prompt: "Name the strongest competing account and state which observation would distinguish it from the proposed mechanism.",
    placeholder: "The observed change may instead reflect... Evidence against the proposed mechanism would be...",
    output: "Falsification target",
    wide: true
  },
  {
    key: "outcome",
    label: "Outcome and measurement",
    prompt: "Define the dependent variable, unit, source, coding rule, timing, and whether it is a proxy.",
    placeholder: "Specify numerator, denominator, scale, transformation, observation date, and known blind spots.",
    output: "Outcome definition"
  },
  {
    key: "exposure",
    label: "Treatment or focal variable",
    prompt: "Record the legal source, construction rule, exemptions, expected direction, and all relevant dates.",
    placeholder: "Separate enactment, publication, effective, compliance, and enforcement dates.",
    output: "Exposure rule"
  },
  {
    key: "dataAndSample",
    label: "Sources, sample, and exclusions",
    prompt: "List source files, collection dates, linkage keys, inclusion rules, exclusions, duplicates, missingness, and access limits.",
    placeholder: "Preserve raw data; document the sample flow and each restriction separately.",
    output: "Sample protocol",
    wide: true
  },
  {
    key: "constructValidity",
    label: "Construct validity and coding audit",
    prompt: "Explain why each measure represents the legal or behavioral concept and how coding judgment will be checked.",
    placeholder: "Alternative measures, double coding, adjudication rule, label validation, measurement invariance...",
    output: "Validity evidence",
    wide: true
  },
  {
    key: "comparison",
    label: "Estimand and counterfactual",
    prompt: "State the population-level quantity sought and the comparison that represents the untreated or alternative state.",
    placeholder: "Average effect for which units, under which exposure contrast, relative to what counterfactual?",
    output: "Estimand statement",
    wide: true
  },
  {
    key: "assumptions",
    label: "Identification assumptions",
    prompt: "Write each condition required for the proposed interpretation and distinguish assessable implications from untestable claims.",
    placeholder: "Parallel trends, continuity, exclusion, no anticipation, no interference, conditional exchangeability...",
    output: "Assumption register"
  },
  {
    key: "threats",
    label: "Bias and dependence threats",
    prompt: "Audit selection, omitted variables, reverse causality, measurement error, spillovers, attrition, and dependence.",
    placeholder: "Include the treatment-assignment level and the proposed clustering or randomization-inference level.",
    output: "Threat register"
  },
  {
    key: "inference",
    label: "Estimator and inference plan",
    prompt: "Specify the estimator, functional form, fixed effects, weights, uncertainty method, and the level of independent variation.",
    placeholder: "Record the exact model only after the estimand and comparison are fixed.",
    output: "Analysis specification",
    wide: true
  },
  {
    key: "robustness",
    label: "Diagnostics and robustness",
    prompt: "Pair each planned diagnostic or sensitivity analysis with the particular threat it is intended to probe.",
    placeholder: "Threat → diagnostic → expected pattern → consequence if the check fails",
    output: "Threat-check map",
    wide: true
  },
  {
    key: "heterogeneity",
    label: "Heterogeneity and multiplicity",
    prompt: "Identify theoretically motivated subgroups, define aggregation choices, and state how multiple testing or researcher discretion will be handled.",
    placeholder: "Pre-specify subgroup logic, interaction scale, family of outcomes, and exploratory analyses.",
    output: "Heterogeneity plan"
  },
  {
    key: "externalValidity",
    label: "External validity and transport",
    prompt: "State which populations, periods, institutions, and implementation settings fall outside the evidence.",
    placeholder: "Explain which institutional complements or selection rules limit portability.",
    output: "Transport boundary"
  },
  {
    key: "normativeBoundary",
    label: "Interpretive and normative boundary",
    prompt: "Separate empirical findings from conclusions about welfare, rights, legality, distribution, and policy choice.",
    placeholder: "The evidence can establish... It cannot by itself establish...",
    output: "Bounded conclusion",
    wide: true
  },
  {
    key: "reproducibilityPlan",
    label: "Reproducible workflow and change log",
    prompt: "Define the scripted data-to-output sequence, computational environment, file separation, and record for specification or sample changes.",
    placeholder: "raw data → cleaning → merge → variables → descriptives → models → tables; environment lock; dated deviation log",
    output: "Reproduction plan",
    wide: true
  },
  {
    key: "governancePlan",
    label: "Data, team, and release governance",
    prompt: "Record legal authority, access controls, privacy protections, team responsibilities, conflicts, authorship rules, and release review.",
    placeholder: "Access basis; sensitive fields; retention; role owners; approval gates; disclosure and archive plan",
    output: "Governance record",
    wide: true
  }
];

const fieldGroups: { title: string; description: string; keys: FieldKey[] }[] = [
  {
    title: "Question and mechanism",
    description: "Define the claim, population, legal setting, mechanism, and the observation that could challenge it.",
    keys: ["question", "unitAndScope", "mechanism", "rivalExplanation"]
  },
  {
    title: "Measurement and sources",
    description: "Translate legal concepts into auditable variables, sources, sample rules, and validation evidence.",
    keys: ["outcome", "exposure", "dataAndSample", "constructValidity"]
  },
  {
    title: "Identification and inference",
    description: "Fix the estimand and counterfactual before choosing the estimator, assumptions, or uncertainty procedure.",
    keys: ["comparison", "assumptions", "threats", "inference"]
  },
  {
    title: "Diagnostics and boundaries",
    description: "Pre-specify threat-specific checks and limit heterogeneity, transport, and normative claims.",
    keys: ["robustness", "heterogeneity", "externalValidity", "normativeBoundary"]
  },
  {
    title: "Reproducibility and governance",
    description: "Plan the data-to-output pipeline, change record, permissions, responsibilities, and release controls.",
    keys: ["reproducibilityPlan", "governancePlan"]
  }
];

const fieldsByKey = Object.fromEntries(fields.map((field) => [field.key, field])) as Record<
  FieldKey,
  FieldDefinition
>;

const initialValues = Object.fromEntries(fields.map((field) => [field.key, ""])) as Record<FieldKey, string>;
const storageKey = "law-economics-research-design-canvas-v2";

function buildMemo(values: Record<FieldKey, string>) {
  const lines = [
    "# Empirical Legal Research Design Memo",
    "",
    "> Working draft. Unresolved items are marked TODO.",
    ""
  ];

  for (const group of fieldGroups) {
    lines.push(`## ${group.title}`, "");
    for (const key of group.keys) {
      const field = fieldsByKey[key];
      lines.push(`### ${field.label}`, values[key].trim() || "TODO", "");
    }
  }

  return lines.join("\n").trim();
}

function isStoredCanvas(value: unknown): value is Partial<Record<FieldKey, string>> {
  return Boolean(value) && typeof value === "object";
}

export function ResearchDesignCanvas() {
  const [values, setValues] = useState<Record<FieldKey, string>>(initialValues);
  const [activeGroup, setActiveGroup] = useState(0);
  const [storageReady, setStorageReady] = useState(false);
  const memo = useMemo(() => buildMemo(values), [values]);
  const completed = fields.filter((field) => values[field.key].trim()).length;
  const active = fieldGroups[activeGroup];
  const activeCompleted = active.keys.filter((key) => values[key].trim()).length;
  const completionRate = Math.round((completed / fields.length) * 100);

  useEffect(() => {
    const restoreDraft = window.setTimeout(() => {
      try {
        const stored = window.localStorage.getItem(storageKey);
        if (stored) {
          const parsed: unknown = JSON.parse(stored);
          if (isStoredCanvas(parsed)) {
            setValues((current) => {
              const restored = { ...current };
              for (const field of fields) {
                const candidate = parsed[field.key];
                if (typeof candidate === "string") restored[field.key] = candidate;
              }
              return restored;
            });
          }
        }
      } catch {
        // Storage may be unavailable in restricted browsing contexts.
      } finally {
        setStorageReady(true);
      }
    }, 0);

    return () => window.clearTimeout(restoreDraft);
  }, []);

  useEffect(() => {
    if (!storageReady) return;
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(values));
    } catch {
      // The memo remains available for copying or download when storage is unavailable.
    }
  }, [storageReady, values]);

  function reset() {
    if (!window.confirm("Clear all fields in this local research-design draft?")) return;
    setValues({ ...initialValues });
    setActiveGroup(0);
    try {
      window.localStorage.removeItem(storageKey);
    } catch {
      // State has already been cleared in memory.
    }
  }

  function downloadMemo() {
    const blob = new Blob([memo], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "empirical-legal-research-design-memo.md";
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="border-y border-border/70 bg-white">
      <div className="grid gap-5 border-b border-border/70 px-4 py-5 sm:px-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
        <div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <p className="text-xs uppercase tracking-[0.14em] text-signal">Local working draft</p>
            <p className="text-xs text-muted">{storageReady ? "Saved in this browser" : "Preparing local draft"}</p>
          </div>
          <div className="mt-3 flex items-end gap-3">
            <p className="font-serifCn text-3xl leading-none text-accent">{completionRate}%</p>
            <p className="text-sm text-muted">{completed} of {fields.length} decisions recorded</p>
          </div>
          <div
            className="mt-3 h-1.5 max-w-xl overflow-hidden bg-paper"
            role="progressbar"
            aria-label="Research design memo completion"
            aria-valuemin={0}
            aria-valuemax={fields.length}
            aria-valuenow={completed}
          >
            <div className="h-full bg-institute transition-[width]" style={{ width: `${completionRate}%` }} />
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={reset}
            className="px-3 py-1.5 text-xs uppercase tracking-[0.12em] text-muted underline underline-offset-2"
          >
            Reset
          </button>
          <button
            type="button"
            onClick={downloadMemo}
            className="border border-border px-3 py-1.5 text-xs uppercase tracking-[0.12em] text-muted hover:border-institute hover:text-accent"
          >
            Download .md
          </button>
          <CopyButton value={memo} label="Copy memo" />
        </div>
      </div>

      <div className="grid lg:grid-cols-[250px_minmax(0,1fr)]">
        <nav aria-label="Research design stages" className="border-b border-border/70 bg-paper/55 p-3 lg:border-b-0 lg:border-r">
          <ol className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
            {fieldGroups.map((group, index) => {
              const groupCompleted = group.keys.filter((key) => values[key].trim()).length;
              const selected = activeGroup === index;
              return (
                <li key={group.title}>
                  <button
                    type="button"
                    onClick={() => setActiveGroup(index)}
                    aria-current={selected ? "step" : undefined}
                    className={[
                      "grid w-full grid-cols-[30px_minmax(0,1fr)_auto] items-start gap-2 border px-3 py-3 text-left",
                      selected ? "border-institute bg-white text-accent" : "border-transparent text-muted hover:border-border"
                    ].join(" ")}
                  >
                    <span className="font-serifCn text-lg leading-5 text-signal">{String(index + 1).padStart(2, "0")}</span>
                    <span className="text-sm font-medium leading-5">{group.title}</span>
                    <span className="text-xs leading-5">{groupCompleted}/{group.keys.length}</span>
                  </button>
                </li>
              );
            })}
          </ol>
        </nav>

        <section aria-labelledby={`canvas-stage-${activeGroup}`} className="min-w-0 px-4 py-6 sm:px-6">
          <div className="flex flex-wrap items-start justify-between gap-3 border-b border-border/70 pb-4">
            <div>
              <p className="text-xs uppercase tracking-[0.14em] text-signal">Stage {activeGroup + 1}</p>
              <h3 id={`canvas-stage-${activeGroup}`} className="mt-1 font-serifCn text-2xl text-accent">
                {active.title}
              </h3>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted">{active.description}</p>
            </div>
            <p className="bg-paper px-2.5 py-1.5 text-xs text-muted">
              {activeCompleted} of {active.keys.length} recorded
            </p>
          </div>

          <div className="mt-6 grid gap-x-6 gap-y-6 lg:grid-cols-2">
            {active.keys.map((key) => {
              const field = fieldsByKey[key];
              return (
                <label key={field.key} className={field.wide ? "lg:col-span-2" : ""}>
                  <span className="flex flex-wrap items-baseline justify-between gap-2">
                    <span className="font-serifCn text-lg text-accent">{field.label}</span>
                    <span className="text-[11px] uppercase tracking-[0.1em] text-muted">Output: {field.output}</span>
                  </span>
                  <span className="mt-1 block text-xs leading-5 text-muted">{field.prompt}</span>
                  <textarea
                    value={values[field.key]}
                    onChange={(event) => setValues((current) => ({ ...current, [field.key]: event.target.value }))}
                    placeholder={field.placeholder}
                    rows={field.wide ? 4 : 5}
                    className="mt-2 w-full resize-y border border-border bg-white px-3 py-2.5 text-sm leading-6 text-ink placeholder:text-muted/70 focus:border-institute focus:outline-none"
                  />
                </label>
              );
            })}
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-border/70 pt-4">
            <p className="text-xs leading-5 text-muted">Blank fields remain TODO in the exported memo.</p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setActiveGroup((current) => Math.max(0, current - 1))}
                disabled={activeGroup === 0}
                className="border border-border px-3 py-1.5 text-xs uppercase tracking-[0.12em] text-muted disabled:cursor-not-allowed disabled:opacity-40"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={() => setActiveGroup((current) => Math.min(fieldGroups.length - 1, current + 1))}
                disabled={activeGroup === fieldGroups.length - 1}
                className="border border-institute bg-institute px-3 py-1.5 text-xs uppercase tracking-[0.12em] text-white disabled:cursor-not-allowed disabled:opacity-40"
              >
                Next stage
              </button>
            </div>
          </div>
        </section>
      </div>

      <p className="border-t border-border/70 px-4 py-4 text-xs leading-6 text-muted sm:px-6">
        Browser storage is a convenience copy, not a project archive. Download or copy the memo into the versioned project documentation before analysis or team review.
      </p>
    </div>
  );
}
