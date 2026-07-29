"use client";

import { useMemo, useState } from "react";

type ClaimType = "describe" | "associate" | "causal" | "interpret";
type DataShape =
  | "documents"
  | "cross-section"
  | "repeated-cross-section"
  | "panel"
  | "time-series"
  | "market"
  | "comparative"
  | "survey-interview";
type Variation =
  | "none"
  | "timing-comparison"
  | "timing-donor"
  | "timing-series"
  | "market-event"
  | "cutoff"
  | "external"
  | "not-applicable";

const claimOptions: { value: ClaimType; label: string; detail: string }[] = [
  { value: "describe", label: "Describe", detail: "Map legal events, institutions, texts, attitudes, or outcomes." },
  { value: "associate", label: "Associate", detail: "Estimate conditional relationships without a causal claim." },
  { value: "causal", label: "Estimate an effect", detail: "Define a counterfactual for a legal intervention." },
  { value: "interpret", label: "Interpret institutions", detail: "Explain doctrine, authority, function, experience, and implementation." }
];

const dataOptions: { value: DataShape; label: string }[] = [
  { value: "documents", label: "Judgments, sanctions, statutes, or other texts" },
  { value: "cross-section", label: "One observation per unit or event" },
  { value: "repeated-cross-section", label: "Different sampled units observed across periods" },
  { value: "panel", label: "The same units observed repeatedly over time" },
  { value: "time-series", label: "One aggregate outcome observed over many periods" },
  { value: "market", label: "High-frequency market prices" },
  { value: "comparative", label: "Jurisdictions or institutions" },
  { value: "survey-interview", label: "Survey responses, interviews, or field materials" }
];

const variationOptions: { value: Variation; label: string; detail: string }[] = [
  {
    value: "none",
    label: "No defensible assignment variation",
    detail: "Exposure follows ordinary choice, status, or legal process."
  },
  {
    value: "timing-comparison",
    label: "Reform timing with comparison units",
    detail: "Treated and untreated units can be followed before and after a legal change."
  },
  {
    value: "timing-donor",
    label: "One treated unit with a donor pool",
    detail: "A jurisdiction or institution changes while credible donor units remain untreated."
  },
  {
    value: "timing-series",
    label: "One long pre/post time series",
    detail: "A population has many observations before and after a discrete intervention."
  },
  {
    value: "market-event",
    label: "Precisely timed information event",
    detail: "New legal information reaches a liquid market at an identifiable time."
  },
  {
    value: "cutoff",
    label: "Eligibility or assignment cutoff",
    detail: "Treatment changes at a legally meaningful score, age, size, or date threshold."
  },
  {
    value: "external",
    label: "External source of exposure",
    detail: "A plausibly exogenous instrument or assignment mechanism changes treatment."
  },
  { value: "not-applicable", label: "Not applicable", detail: "The project does not make a causal claim." }
];

type Recommendation = {
  primary: string;
  fit: string;
  supporting: string[];
  mustShow: string[];
  warning: string;
  compatible?: boolean;
};

function incompatible(primary: string, fit: string, mustShow: string[]): Recommendation {
  return {
    primary,
    fit,
    compatible: false,
    supporting: ["Recheck the data structure", "Recheck the assignment mechanism", "Narrow or reframe the claim"],
    mustShow,
    warning:
      "Method labels do not create identification. Change the selected data structure or variation only if the underlying legal process and available evidence support that change."
  };
}

function getRecommendation(claim: ClaimType, data: DataShape, variation: Variation): Recommendation {
  if (claim === "interpret") {
    if (data === "survey-interview") {
      return {
        primary: "Qualitative interview analysis or an integrated mixed-method design",
        fit: "Use interviews to explain experience and implementation; integrate them with quantitative evidence only through a stated sampling and inference logic.",
        supporting: ["Purposive sampling", "Protocol and coding frame", "Triangulation and deviant cases"],
        mustShow: [
          "Who can speak to the institutional process and how participants were recruited",
          "How questions, coding, consent, confidentiality, and researcher judgment were handled",
          "Where interview evidence corroborates, qualifies, or conflicts with other evidence"
        ],
        warning:
          "Interview depth does not establish population prevalence. Do not generalize beyond the sampling frame or use selected quotations as stand-alone proof."
      };
    }

    return {
      primary: data === "comparative" ? "Comparative institutional analysis" : "Structured doctrinal or content analysis",
      fit:
        data === "comparative"
          ? "The design compares institutional function, authority, implementation, and complements across selected systems."
          : "The design makes the source universe, interpretive categories, and treatment of contrary materials auditable.",
      supporting: ["Source hierarchy", "Explicit coding frame", "Negative or deviant cases"],
      mustShow: [
        "The legal population, jurisdiction, and time boundary",
        "How legal categories are translated across sources or jurisdictions",
        "Why the selected sources or institutions answer the stated interpretive question"
      ],
      warning:
        "Interpretive or institutional comparison can explain differences and mechanisms, but it does not estimate a causal effect without an additional identification strategy."
    };
  }

  if (claim === "describe") {
    if (data === "survey-interview") {
      return {
        primary: "Survey description or qualitative thematic mapping",
        fit: "The design can map reported attitudes, practices, or experiences when the target population and recruitment process are explicit.",
        supporting: ["Sampling and nonresponse audit", "Instrument pretest", "Transparent qualitative coding"],
        mustShow: [
          "The target population, sampling frame, recruitment, and response or participation pattern",
          "The questionnaire or interview protocol and how concepts were operationalized",
          "Weighted and unweighted denominators, or the qualitative boundary of the claims"
        ],
        warning:
          "A convenience sample cannot establish population prevalence. Nonresponse, social desirability, and recruitment channels must bound the conclusion."
      };
    }

    return {
      primary:
        data === "documents"
          ? "Reproducible legal coding and text analysis"
          : "Descriptive statistics and distributional mapping",
      fit:
        data === "documents"
          ? "The design turns a defined legal corpus into auditable categories, measures, or text features."
          : "The design summarizes levels, distributions, and change without attributing them to an intervention.",
      supporting: ["Sampling audit", "Missingness table", "Inter-coder reliability where judgment is required"],
      mustShow: [
        "The unit of analysis and source universe",
        "Inclusion, exclusion, duplicate, preprocessing, and missing-value rules",
        "Counts, denominators, uncertainty, and changes in observation coverage"
      ],
      warning: "Descriptive change is not evidence that a reform caused the change. Keep causal verbs out of the conclusion."
    };
  }

  if (claim === "associate") {
    if (data === "survey-interview") {
      return {
        primary: "Survey-weighted association or explanatory mixed-method analysis",
        fit: "The design can estimate conditional relationships in a defined survey population or use interviews to explain a quantitatively observed pattern.",
        supporting: ["Survey weights and design effects", "Nonresponse analysis", "Pre-specified integration logic"],
        mustShow: [
          "The target population, sampling design, response pattern, and effective sample size",
          "How weights, clustering, missing responses, and multiple items are handled",
          "Why qualitative and quantitative samples can inform the same research question"
        ],
        warning:
          "Survey controls do not remove self-selection or response bias. Mixed methods require an integration rule, not parallel sections that never inform one another."
      };
    }

    const isPanel = data === "panel" || data === "repeated-cross-section";
    return {
      primary: isPanel
        ? "Panel or repeated-cross-section association model"
        : data === "documents"
          ? "Coded or text-feature association model"
          : "OLS, Logit, or another outcome-appropriate association model",
      fit: isPanel
        ? "The model can represent time structure and repeated group-level observations while keeping the claim associational."
        : data === "documents"
          ? "Validated legal or textual measures can enter an outcome-appropriate association model."
          : "The design estimates a conditional relationship at the observed unit of analysis.",
      supporting: [
        "Bivariate description",
        "Alternative measures",
        "Overlap, balance, weighting, or matching checks where relevant"
      ],
      mustShow: [
        "Why each variable represents the legal concept claimed",
        "The functional form and level at which observations are independent",
        "Selection, omitted-variable, reverse-causality, and measurement risks"
      ],
      warning:
        "Controls, fixed effects, matching, and propensity weights address only specified observed differences. Describe estimates as associations unless assignment is separately defended."
    };
  }

  if (variation === "market-event") {
    if (data !== "market") {
      return incompatible(
        "The information-event design requires market data",
        "A short-window event study needs high-frequency prices aligned to a precise release time; the selected data structure does not provide that outcome.",
        [
          "Whether a liquid traded security and expected-return benchmark exist",
          "The precise information-release time and plausible event window",
          "Whether another design better matches the available non-market outcome"
        ]
      );
    }
    return {
      primary: "Short-window market event study",
      fit: "High-frequency prices and a precisely timed legal information event support a narrow market-response estimand.",
      supporting: ["Event chronology", "Expected-return model", "Confounding-news review"],
      mustShow: [
        "A legally precise event and information-release time",
        "The estimation and event windows",
        "Why other value-relevant information is unlikely to drive the result"
      ],
      warning:
        "An abnormal return measures a market response to information; it does not by itself establish long-run welfare or a real behavioral effect."
    };
  }

  if (variation === "timing-comparison") {
    if (data !== "panel" && data !== "repeated-cross-section") {
      return incompatible(
        "Difference-in-differences requires repeated treated and comparison observations",
        "The selected timing strategy needs outcomes for treated and comparison groups before and after the legal change.",
        [
          "Repeated outcomes at a stable unit or group level",
          "A legally credible comparison group and correctly coded treatment dates",
          "Enough pre-treatment periods to inspect counterfactual dynamics"
        ]
      );
    }
    return {
      primary: "Difference-in-differences with explicit cohort and timing structure",
      fit:
        data === "panel"
          ? "The same units can be compared over time across treatment cohorts."
          : "Repeated samples can identify group-by-time contrasts when composition and measurement remain comparable.",
      supporting: ["Event-study diagnostics", "Placebo timing", "Alternative comparison groups"],
      mustShow: [
        "Legally correct enactment, effective, compliance, and enforcement dates",
        "A credible untreated counterfactual and pre-treatment dynamics",
        "Treatment heterogeneity, anticipation, spillovers, composition, and the clustering level"
      ],
      warning:
        "A two-way fixed-effects coefficient may be misleading with staggered adoption and heterogeneous effects. State the estimator, cohort structure, and target effect."
    };
  }

  if (variation === "timing-donor") {
    if (data !== "panel" && data !== "repeated-cross-section" && data !== "comparative") {
      return incompatible(
        "Synthetic control requires a treated unit and an untreated donor pool",
        "The selected data do not yet provide comparable donor units observed over a sufficiently long pre-treatment period.",
        [
          "One or a small number of treated jurisdictions or institutions",
          "A donor pool not exposed to the intervention or its spillovers",
          "Comparable repeated outcomes and predictors over a long pre-period"
        ]
      );
    }
    return {
      primary: "Synthetic control or augmented synthetic control",
      fit: "A discrete intervention to one or a few units can be compared with a weighted combination of untreated donors.",
      supporting: ["Pre-treatment fit", "Leave-one-out analysis", "In-space and in-time placebos"],
      mustShow: [
        "Why the donor pool is comparable and uncontaminated by the intervention",
        "The predictor and pre-period outcome choices, weights, and fit",
        "How the post-treatment gap compares with placebo gaps and specification changes"
      ],
      warning:
        "Poor pre-treatment fit, a small or contaminated donor pool, and interference make the counterfactual fragile. Report the full donor and weight structure."
    };
  }

  if (variation === "timing-series") {
    if (data !== "time-series" && data !== "panel") {
      return incompatible(
        "Interrupted time series requires a long, consistently measured outcome series",
        "The selected data structure does not yet provide enough repeated observations around a discrete intervention.",
        [
          "A clearly dated intervention and stable outcome definition",
          "Enough pre- and post-intervention periods to model baseline level and trend",
          "Information on concurrent shocks, seasonality, and serial dependence"
        ]
      );
    }
    return {
      primary: "Interrupted time-series or comparative interrupted time-series design",
      fit: "A long outcome series can test whether level or trend changes at a legally defined intervention point.",
      supporting: ["Pre-trend and functional-form checks", "Seasonality and autocorrelation model", "Control series where available"],
      mustShow: [
        "The intervention date, anticipated lag, and whether implementation was abrupt or gradual",
        "The baseline trend, seasonality, serial dependence, and any concurrent events",
        "Sensitivity to alternative intervention dates, trend forms, and bandwidths"
      ],
      warning:
        "A break at the intervention date is not uniquely causal when other shocks or trend changes coincide. A credible control series materially strengthens the design."
    };
  }

  if (variation === "cutoff") {
    return {
      primary: "Regression discontinuity design",
      fit: "A legally generated threshold can support a local effect when treatment changes discontinuously and units cannot precisely sort around it.",
      supporting: ["Density test", "Covariate continuity", "Bandwidth and polynomial sensitivity"],
      mustShow: [
        "The legal rule generating the cutoff and whether actors can manipulate assignment",
        "Continuity of potential outcomes near the threshold",
        "The local population to which the estimate applies"
      ],
      warning: "The estimate is local to units near the cutoff and should not be generalized to the full legal population without further evidence."
    };
  }

  if (variation === "external") {
    return {
      primary: "Instrumental-variables design or another assignment-based design",
      fit: "A substantively external mechanism may isolate treatment exposure, but its institutional channels must be defended rather than assumed.",
      supporting: ["First-stage evidence", "Reduced form", "Sensitivity to exclusion violations"],
      mustShow: [
        "Why the external variation changes treatment exposure",
        "Why it affects the outcome only through the proposed treatment channel",
        "Which compliers or affected units the estimate represents"
      ],
      warning:
        "Instrument relevance is not enough. The exclusion restriction and the population represented by the estimate require substantive legal justification."
    };
  }

  return {
    primary: "Do not make a causal claim with the current design",
    fit: "The current selections do not identify a defensible counterfactual for the legal intervention.",
    compatible: false,
    supporting: ["Reframe as description or association", "Collect timing or assignment information", "Use qualitative mechanism evidence"],
    mustShow: [
      "What counterfactual is currently missing",
      "Which selection or reverse-causality process prevents identification",
      "What additional legal event, comparison, cutoff, or source could improve the design"
    ],
    warning:
      "A before-and-after comparison, a large sample, matching, or many control variables cannot substitute for a credible source of counterfactual variation."
  };
}

export function MethodDecisionAid() {
  const [claim, setClaim] = useState<ClaimType>("describe");
  const [data, setData] = useState<DataShape>("documents");
  const [variation, setVariation] = useState<Variation>("not-applicable");
  const recommendation = useMemo(() => getRecommendation(claim, data, variation), [claim, data, variation]);

  return (
    <div className="border-y border-border/70 bg-white px-4 py-6 sm:px-6">
      <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.82fr)]">
        <div className="space-y-7">
          <fieldset>
            <legend className="font-serifCn text-xl text-accent">1. What claim must the evidence support?</legend>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {claimOptions.map((option) => (
                <label
                  key={option.value}
                  className={[
                    "cursor-pointer border p-3",
                    claim === option.value ? "border-institute bg-paper" : "border-border"
                  ].join(" ")}
                >
                  <input
                    type="radio"
                    name="claim-type"
                    value={option.value}
                    checked={claim === option.value}
                    onChange={() => {
                      setClaim(option.value);
                      setVariation(option.value === "causal" ? "none" : "not-applicable");
                    }}
                    className="mr-2 accent-institute"
                  />
                  <span className="text-sm font-medium text-ink">{option.label}</span>
                  <span className="mt-1 block pl-5 text-xs leading-5 text-muted">{option.detail}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <label className="block">
            <span className="font-serifCn text-xl text-accent">2. What is the main data structure?</span>
            <select
              value={data}
              onChange={(event) => setData(event.target.value as DataShape)}
              className="mt-3 w-full border border-border bg-white px-3 py-2.5 text-sm text-ink focus:border-institute focus:outline-none"
            >
              {dataOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          {claim === "causal" ? (
            <fieldset>
              <legend className="font-serifCn text-xl text-accent">3. What creates treatment variation?</legend>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {variationOptions
                  .filter((option) => option.value !== "not-applicable")
                  .map((option) => (
                    <label
                      key={option.value}
                      className={[
                        "block cursor-pointer border px-3 py-3",
                        variation === option.value ? "border-institute bg-paper" : "border-border"
                      ].join(" ")}
                    >
                      <input
                        type="radio"
                        name="variation"
                        value={option.value}
                        checked={variation === option.value}
                        onChange={() => setVariation(option.value)}
                        className="mr-2 accent-institute"
                      />
                      <span className="text-sm font-medium">{option.label}</span>
                      <span className="mt-1 block pl-5 text-xs leading-5 text-muted">{option.detail}</span>
                    </label>
                  ))}
              </div>
            </fieldset>
          ) : null}
        </div>

        <aside
          aria-live="polite"
          className={[
            "h-fit border-l-4 p-5",
            recommendation.compatible === false ? "border-signal bg-[#fbf3ed]" : "border-institute bg-paper"
          ].join(" ")}
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-xs uppercase tracking-[0.16em] text-signal">Design recommendation</p>
            <span className="bg-white px-2 py-1 text-[10px] uppercase tracking-[0.12em] text-muted">
              {recommendation.compatible === false ? "Revise inputs" : "Candidate design"}
            </span>
          </div>
          <h3 className="mt-2 font-serifCn text-2xl leading-tight text-accent">{recommendation.primary}</h3>
          <p className="mt-3 text-sm leading-6 text-ink">{recommendation.fit}</p>
          <div className="mt-5">
            <p className="text-xs uppercase tracking-[0.12em] text-muted">Supporting checks</p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {recommendation.supporting.map((item) => (
                <li key={item} className="bg-white px-2.5 py-1.5 text-xs text-ink">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-5">
            <p className="text-xs uppercase tracking-[0.12em] text-muted">The paper must show</p>
            <ol className="mt-2 list-decimal space-y-2 pl-5 text-sm leading-6 text-ink">
              {recommendation.mustShow.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </div>
          <p className="mt-5 border-t border-border pt-4 text-sm leading-6 text-muted">{recommendation.warning}</p>
        </aside>
      </div>
    </div>
  );
}
