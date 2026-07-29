import type { Metadata } from "next";
import { MethodDecisionAid } from "@/components/method-decision-aid";
import { PageContents } from "@/components/page-contents";
import { ResearchDesignCanvas } from "@/components/research-design-canvas";
import { SectionTitle } from "@/components/section-title";

export const metadata: Metadata = {
  title: "Methods Toolkit",
  description: "An operational toolkit for empirical and comparative legal research design, measurement, identification, inference, and reporting."
};

function MethodsSectionHeading({
  number,
  label,
  title,
  description
}: {
  number: string;
  label: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-6 grid gap-3 border-t border-border/70 pt-4 lg:grid-cols-[220px_minmax(0,1fr)]">
      <div className="flex items-baseline gap-3">
        <span className="font-serifCn text-xl text-signal">{number}</span>
        <p className="text-xs uppercase tracking-[0.14em] text-muted">{label}</p>
      </div>
      <div>
        <h2 className="font-serifCn text-3xl leading-tight text-accent">{title}</h2>
        <p className="mt-2 max-w-4xl text-sm leading-7 text-muted">{description}</p>
      </div>
    </div>
  );
}

const workflow = [
  {
    step: "01",
    title: "Question and scope",
    action: "Classify the claim, then define jurisdiction, legal population, unit of analysis, and time window.",
    deliverable: "A research question and scope statement."
  },
  {
    step: "02",
    title: "Mechanism and measurement",
    action: "Connect the rule to behavior, then define outcomes, exposure, sources, coding rules, and missing values.",
    deliverable: "A mechanism chain and variable dictionary."
  },
  {
    step: "03",
    title: "Comparison and threats",
    action: "State the estimand and counterfactual, then audit selection, timing, spillovers, measurement, and dependence.",
    deliverable: "An identification and threat-to-inference statement."
  },
  {
    step: "04",
    title: "Checks and reporting",
    action: "Link diagnostics to named threats and state the empirical, external-validity, and normative boundaries.",
    deliverable: "A robustness plan and bounded conclusion."
  }
];

const governanceLanes = [
  {
    title: "Reproducibility controls",
    summary: "Make the path from source material to every reported table, figure, and claim inspectable and rerunnable.",
    items: [
      {
        control: "Source and provenance register",
        record: "Origin, collection date, access terms, coverage, versions, checksums where useful, and every transformation from raw to analytic data."
      },
      {
        control: "Scripted analysis sequence",
        record: "Separate scripts for cleaning, merging, variable construction, descriptives, estimation, diagnostics, and output generation."
      },
      {
        control: "Computational environment",
        record: "Software, package versions, seeds where relevant, locale or encoding dependencies, and the command or workflow that rebuilds outputs."
      },
      {
        control: "Decision and deviation log",
        record: "Dated changes to sample restrictions, variables, fixed effects, clustering, windows, estimators, and hypotheses, with reasons and owners."
      },
      {
        control: "Independent reproduction check",
        record: "A clean rerun by another team member or environment, with unresolved differences recorded before release."
      }
    ]
  },
  {
    title: "Research governance controls",
    summary: "Make legal authority, sensitive-data handling, responsibility, conflicts, and release decisions explicit.",
    items: [
      {
        control: "Authority and permitted use",
        record: "Legal or contractual basis for collection and analysis, platform restrictions, consent where applicable, and downstream-use limits."
      },
      {
        control: "Privacy and security",
        record: "Sensitive fields, minimization, pseudonymization, access groups, storage locations, retention periods, incident response, and deletion rules."
      },
      {
        control: "Roles and accountability",
        record: "Named responsibility for data custody, coding, analysis, verification, approvals, authorship decisions, and conflict resolution."
      },
      {
        control: "Conflicts and researcher discretion",
        record: "Funding, institutional interests, access-provider influence, analyst degrees of freedom, and separation between exploratory and confirmatory work."
      },
      {
        control: "Disclosure and release review",
        record: "Privacy, confidentiality, legal-risk, disclosure-control, licensing, documentation, and archive checks completed before sharing."
      }
    ]
  }
];

const projectStructure = [
  { path: "data/raw", rule: "Read-only source materials; never overwritten by cleaning or recoding." },
  { path: "data/processed", rule: "Script-generated intermediate and analytic datasets with documented lineage." },
  { path: "code", rule: "Ordered scripts for cleaning, merging, construction, analysis, diagnostics, and outputs." },
  { path: "output", rule: "Script-generated tables, figures, model objects, logs, and validation reports." },
  { path: "docs", rule: "Design memo, data dictionary, coding protocol, sample flow, decision log, and governance record." },
  { path: "paper", rule: "Manuscript sources that import generated outputs rather than manually copied estimates." }
];

const reviewGates = [
  {
    stage: "Before collection or access",
    question: "May the team obtain and use the material for the stated purpose?",
    evidence: "Scope note, authority or access basis, data-management plan, source register, role owners, and unresolved items marked TODO."
  },
  {
    stage: "Before estimation",
    question: "Can another researcher reconstruct the sample, measures, comparison, and planned inference?",
    evidence: "Frozen design memo, variable dictionary, sample-flow rules, coding audit, threat register, analysis sequence, and dated deviations."
  },
  {
    stage: "Before release",
    question: "Do the claims, files, and disclosures survive an independent verification and governance review?",
    evidence: "Clean rerun, output reconciliation, bounded conclusions, privacy and legal review, disclosure controls, documentation, and archive package."
  }
];

const methodSpecifications = [
  {
    category: "Data and measurement",
    title: "Legal data audit and structured coding",
    supports: "Description of doctrine, enforcement, case populations, institutional practices, and text features.",
    requires: "A defined source universe, unit of coding, inclusion rules, codebook, and an audit trail from source to variable.",
    assumptions: "Observed materials represent the stated population; coding categories preserve the legal concept; missingness is understood.",
    failure: "Convenience sampling, silent duplicate removal, unstable legal categories, or reporting percentages without denominators.",
    report: "Source coverage, search or collection rule, sample flow, coder training, agreement measure, conflict resolution, and missingness."
  },
  {
    category: "Observational analysis",
    title: "OLS, Logit, and cross-sectional association",
    supports: "Conditional means or probabilities associated with observed characteristics; not causation without additional design.",
    requires: "An outcome-appropriate functional form, legally meaningful measures, and enough variation in the focal variable.",
    assumptions: "Model specification is adequate for the stated association; observation dependence and influential cases are addressed.",
    failure: "Calling a controlled association an effect, controlling for post-treatment variables, or interpreting odds ratios as probability changes.",
    report: "Outcome scale, reference groups, functional form, uncertainty, missing-data treatment, dependence structure, and substantive magnitude."
  },
  {
    category: "Observational analysis",
    title: "Matching, weighting, and propensity scores",
    supports: "Adjusted comparison of observed groups when the estimand, covariate set, and region of overlap are defined; not control of unobserved confounding.",
    requires: "A treatment or exposure definition, pre-treatment covariates, adequate overlap, a target estimand, and balance diagnostics.",
    assumptions: "Conditional exchangeability given measured covariates, positivity, consistency, and sufficiently reliable measurement of treatment, outcome, and confounders.",
    failure: "Treating a propensity score as proof of causation, matching on post-treatment variables, retaining units without common support, or reporting only model fit.",
    report: "Target estimand, propensity model, matching or weighting algorithm, trimming rules, balance before and after adjustment, effective sample size, inference, and sensitivity to hidden bias."
  },
  {
    category: "Observational analysis",
    title: "Panel models and fixed effects",
    supports: "Within-unit associations after removing time-invariant unit differences and common time shocks.",
    requires: "Repeated observations, meaningful within-unit variation, correct time alignment, and a reason to use fixed effects.",
    assumptions: "Relevant time-varying confounding is addressed for the claimed interpretation; errors are handled at the dependence level.",
    failure: "Using fixed effects as automatic causal identification, including variables with no within-unit variation, or clustering below assignment.",
    report: "Panel balance, fixed effects, within variation, sample restrictions, treatment timing, clustering level, and dropped observations."
  },
  {
    category: "Causal identification",
    title: "Difference-in-differences and policy event studies",
    supports: "Effects of a legal change for an exposed population relative to a credible comparison under a parallel-trends argument.",
    requires: "Correct legal dates, repeated outcomes, treated and comparison units, pre-treatment periods, and transparent cohort timing.",
    assumptions: "Parallel counterfactual trends, no material anticipation, limited spillovers, stable measurement, and interpretable treatment timing.",
    failure: "A before-after comparison, an arbitrary control group, two-way fixed effects with unexamined staggered timing, or clustered errors at the wrong level.",
    report: "Estimand, estimator, cohort structure, event-time specification, pre-trends, anticipation window, spillovers, and assignment-level clustering."
  },
  {
    category: "Causal identification",
    title: "Synthetic control",
    supports: "A post-intervention effect for one or a few treated jurisdictions or institutions relative to a weighted untreated donor pool.",
    requires: "A discrete intervention, comparable donor units, repeated outcomes, a substantial pre-treatment period, and limited spillovers or concurrent treatment.",
    assumptions: "A weighted donor combination can approximate the treated unit's untreated path; pre-treatment fit is informative; donors remain uncontaminated.",
    failure: "Using a poor-fitting donor pool, hiding donor weights, selecting predictors after inspecting the result, or treating one placebo comparison as conventional significance.",
    report: "Intervention date, donor inclusion rules, predictors, pre-period, unit weights, pre-treatment fit, post-treatment gap, in-space and in-time placebos, and leave-one-out checks."
  },
  {
    category: "Causal identification",
    title: "Interrupted time series",
    supports: "A change in the level or trend of a repeatedly measured outcome after a clearly dated legal intervention.",
    requires: "A stable outcome definition, many pre- and post-intervention observations, a defensible intervention date, and information on seasonality and concurrent shocks.",
    assumptions: "The pre-intervention trend is a credible counterfactual after accounting for time structure; no coincident event fully explains the break.",
    failure: "Comparing only one pre and one post mean, ignoring autocorrelation or seasonality, choosing the break date after looking at the series, or omitting concurrent reforms.",
    report: "Outcome frequency, intervention and lag structure, trend specification, seasonality, autocorrelation correction, control series where available, alternative dates, and functional-form sensitivity."
  },
  {
    category: "Causal identification",
    title: "Short-window market event study",
    supports: "The market valuation response to new, identifiable information around a legal or regulatory event.",
    requires: "A precise event timestamp, liquid price data, an expected-return model, and a defensible short event window.",
    assumptions: "The event conveys unanticipated information and no material confounding news explains the same return window.",
    failure: "Long windows, overlapping events, data-snooped endpoints, or treating abnormal returns as direct welfare evidence.",
    report: "Event chronology, estimation window, event window, benchmark model, aggregation, inference method, and confounding-news screen."
  },
  {
    category: "Causal identification",
    title: "Regression discontinuity",
    supports: "A local causal effect for units near a legally generated eligibility or assignment cutoff.",
    requires: "A running variable, known cutoff, discontinuous treatment probability, dense observations near the threshold, and no precise manipulation.",
    assumptions: "Potential outcomes and relevant covariates are continuous at the cutoff absent treatment; sorting is limited.",
    failure: "Selecting a cutoff after inspecting outcomes, high-order global polynomials, sparse support, or generalizing far from the threshold.",
    report: "Assignment rule, bandwidth, local polynomial order, kernel, manipulation and continuity checks, plots, and local target population."
  },
  {
    category: "Causal identification",
    title: "Instrumental variables",
    supports: "A treatment effect for units whose exposure changes because of a valid external instrument, under strong assumptions.",
    requires: "A legally and institutionally defensible source of exposure variation, a first stage, and a defined affected population.",
    assumptions: "Relevance, exclusion, independence, and the monotonicity or effect-homogeneity conditions needed for interpretation.",
    failure: "Choosing an instrument because it predicts treatment, defending exclusion statistically, or ignoring direct institutional channels.",
    report: "Legal assignment mechanism, first stage, reduced form, exclusion argument, weak-instrument diagnostics, and the represented population."
  },
  {
    category: "Data and measurement",
    title: "Legal text analysis and NLP",
    supports: "Scalable measurement, description, classification, prediction, and pattern discovery in a defined legal corpus; not a causal effect by itself.",
    requires: "A documented corpus, unit of text, preprocessing pipeline, construct-valid labels or features, a validation set, and reproducible code and model settings.",
    assumptions: "Corpus coverage matches the stated population; labels and features represent the legal concept; train and test information do not leak across cases or time.",
    failure: "Using a convenience corpus, treating opaque embeddings as self-validating measures, reporting accuracy alone, ignoring class imbalance, or leaking later information into training.",
    report: "Corpus construction, exclusions, preprocessing, labeling protocol and reliability, model and version, split strategy, class distribution, validation metrics, error analysis, and temporal or jurisdictional transport limits."
  },
  {
    category: "Data and measurement",
    title: "Surveys, interviews, and mixed methods",
    supports: "Evidence on attitudes, implementation, professional practice, and mechanisms; mixed methods can test convergence and explain disagreement across evidence types.",
    requires: "A target population, sampling or recruitment strategy, instrument or interview protocol, consent and privacy plan, coding process, and an explicit integration design.",
    assumptions: "Participants can report the relevant experience; nonresponse, selection, recall, and social-desirability risks are bounded; qualitative interpretation is auditable.",
    failure: "Generalizing from convenience recruitment, using leading questions, cherry-picking quotations, claiming saturation without a transparent process, or placing qualitative and quantitative results side by side without integration.",
    report: "Sampling frame, recruitment, response or participation rate, instrument and pretest, ethics and access, interviewer role, coding and reliability, saturation if claimed, integration logic, and limits."
  },
  {
    category: "Institutional interpretation",
    title: "Comparative institutional analysis",
    supports: "Structured comparison of how courts, regulators, firms, and private ordering perform similar governance functions.",
    requires: "Functional comparability, source hierarchy, enforcement context, ownership or market structure, and a portability framework.",
    assumptions: "Legal labels do not substitute for institutional function; differences in implementation and complements are made explicit.",
    failure: "Comparing statutory text alone, treating one jurisdiction as a universal benchmark, or inferring effects from a few selected cases.",
    report: "Selection rationale, dimensions of comparison, legal sources, enforcement practice, institutional complements, and transfer limits."
  }
];

const methodGroups = [
  {
    title: "Data and measurement",
    description: "Build an auditable source universe and convert legal materials or field evidence into defensible measures."
  },
  {
    title: "Observational analysis",
    description: "Describe conditional relationships while keeping selection, overlap, dependence, and causal limits visible."
  },
  {
    title: "Causal identification",
    description: "Tie an effect claim to a legally grounded counterfactual, explicit assumptions, and design-specific diagnostics."
  },
  {
    title: "Institutional interpretation",
    description: "Explain doctrine and governance through source hierarchy, functional comparison, and bounded transfer."
  }
];

const reportingGroups = [
  {
    title: "Legal construct",
    items: [
      "Cite the rule, decision, regulatory action, or institutional source that defines exposure.",
      "Record enactment, publication, effective, compliance, and enforcement dates separately.",
      "Explain exemptions, thresholds, transitional rules, and changes in legal meaning over time."
    ]
  },
  {
    title: "Data and sample",
    items: [
      "Identify the source universe, collection date, unit of observation, linkage keys, and access restrictions.",
      "Report inclusion and exclusion rules, duplicate handling, missingness, attrition, and the final sample flow.",
      "Preserve raw data and separate cleaning, merging, variable construction, analysis, and output scripts."
    ]
  },
  {
    title: "Model and inference",
    items: [
      "State the estimand before the estimator and identify the comparison that supports it.",
      "Record fixed effects, controls, transformations, windows, weights, and every sample restriction.",
      "Cluster at the level implied by assignment or dependence; explain deviations and few-cluster limitations."
    ]
  },
  {
    title: "Robustness and interpretation",
    items: [
      "Link each robustness check to a named threat: measurement, timing, comparison, specification, or inference.",
      "Distinguish statistical significance, substantive magnitude, legal relevance, and external validity.",
      "Do not convert an empirical estimate directly into a welfare, rights, legality, or policy conclusion."
    ]
  },
  {
    title: "Reproducibility record",
    items: [
      "Provide an ordered, scripted path from unchanged raw sources to processed data, estimates, tables, and figures.",
      "Record software and package versions, random seeds where relevant, source versions, and the command or workflow used for a clean rerun.",
      "Keep a dated log of every change to samples, variables, windows, fixed effects, clustering, estimators, and planned analyses."
    ]
  },
  {
    title: "Governance and disclosure",
    items: [
      "State the authority and permitted purpose for data access, together with privacy, retention, security, and downstream-sharing limits.",
      "Identify responsibility for data custody, coding, analysis, verification, release approval, and resolution of discrepancies.",
      "Disclose funding, institutional interests, access-provider influence, conflicts, and any restriction that another researcher would need to assess."
    ]
  }
];

export default function MethodsPage() {
  return (
    <div className="space-y-16">
      <SectionTitle
        title="Methods Toolkit"
        subtitle="A working environment for turning legal questions into measurable claims, defensible comparisons, reproducible data rules, and bounded conclusions."
      />

      <div className="grid gap-px border border-border/70 bg-border/70 md:grid-cols-3">
        {[
          {
            number: "01",
            title: "Select",
            text: "Match the claim and data structure to a candidate design."
          },
          {
            number: "02",
            title: "Record",
            text: "Turn the research logic into a versioned design memo."
          },
          {
            number: "03",
            title: "Govern",
            text: "Control provenance, changes, access, responsibility, and release."
          }
        ].map((item) => (
          <div key={item.number} className="bg-white px-4 py-4">
            <div className="flex items-baseline gap-3">
              <p className="font-serifCn text-lg text-signal">{item.number}</p>
              <h2 className="font-serifCn text-xl text-accent">{item.title}</h2>
            </div>
            <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
          </div>
        ))}
      </div>

      <PageContents
        items={[
          { id: "workflow", label: "Workflow" },
          { id: "decision-aid", label: "Decision Aid" },
          { id: "design-canvas", label: "Design Canvas" },
          { id: "governance", label: "Reproducibility & Governance" },
          { id: "method-specifications", label: "Method Specifications" },
          { id: "reporting", label: "Reporting Checklist" }
        ]}
      />

      <section id="workflow" className="scroll-mt-36">
        <MethodsSectionHeading
          number="01"
          label="Orientation"
          title="From legal problem to auditable design"
          description="Method choice follows the claim, legal population, mechanism, measurement, and source of comparison. Complete each stage in order; unresolved matters remain TODO rather than being filled by inference."
        />
        <ol className="grid gap-px border-y border-border/70 bg-border/70 md:grid-cols-2 xl:grid-cols-4">
          {workflow.map((item) => (
            <li key={item.step} className="bg-white p-4">
              <div className="flex items-baseline gap-3">
                <p className="font-serifCn text-lg text-signal">{item.step}</p>
                <h3 className="font-serifCn text-lg text-accent">{item.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-7 text-ink">{item.action}</p>
              <p className="mt-3 border-t border-border/70 pt-3 text-xs leading-5 text-muted">
                <span className="uppercase tracking-[0.1em]">Output</span><br />
                {item.deliverable}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section id="decision-aid" className="scroll-mt-36">
        <MethodsSectionHeading
          number="02"
          label="Design selection"
          title="Choose a design by claim, data, and assignment"
          description="The result is a design starting point, not automatic methodological approval. The recommendation changes when the evidentiary claim, data structure, or source of treatment variation changes."
        />
        <MethodDecisionAid />
      </section>

      <section id="design-canvas" className="scroll-mt-36">
        <MethodsSectionHeading
          number="03"
          label="Design record"
          title="Build a methods memo before analysis"
          description="Work through five stages, preserve unresolved decisions as TODO, and export a structured Markdown record into the versioned project documentation."
        />
        <ResearchDesignCanvas />
      </section>

      <section id="governance" className="scroll-mt-36">
        <MethodsSectionHeading
          number="04"
          label="Project controls"
          title="Make the research reproducible and governable"
          description="Reproducibility concerns whether the evidence can be reconstructed. Governance concerns whether materials, discretion, responsibility, and release are handled under explicit authority and review."
        />

        <div className="grid gap-4 lg:grid-cols-2">
          {governanceLanes.map((lane) => (
            <article key={lane.title} className="border border-border/70 bg-white">
              <header className="border-b border-border/70 bg-paper px-4 py-4">
                <h3 className="font-serifCn text-2xl text-accent">{lane.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{lane.summary}</p>
              </header>
              <ol className="divide-y divide-border/70 px-4">
                {lane.items.map((item, index) => (
                  <li key={item.control} className="grid gap-2 py-4 sm:grid-cols-[28px_minmax(0,1fr)]">
                    <span className="font-serifCn text-lg text-signal">{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <h4 className="font-serifCn text-lg text-accent">{item.control}</h4>
                      <p className="mt-1 text-sm leading-6 text-muted">{item.record}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </article>
          ))}
        </div>

        <div className="mt-6 grid gap-4 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <article className="border border-institute bg-institute p-5 text-white">
            <p className="text-xs uppercase tracking-[0.14em] text-white/70">Minimum project structure</p>
            <h3 className="mt-2 font-serifCn text-2xl">Keep data, code, output, documentation, and paper separate</h3>
            <dl className="mt-5 divide-y divide-white/15 border-y border-white/15">
              {projectStructure.map((item) => (
                <div key={item.path} className="grid gap-1 py-3 sm:grid-cols-[120px_minmax(0,1fr)]">
                  <dt className="font-mono text-xs text-white/70">{item.path}</dt>
                  <dd className="text-sm leading-6 text-white/85">{item.rule}</dd>
                </div>
              ))}
            </dl>
          </article>

          <article className="border border-border/70 bg-white p-5">
            <p className="text-xs uppercase tracking-[0.14em] text-signal">Review gates</p>
            <h3 className="mt-2 font-serifCn text-2xl text-accent">Do not advance without a reviewable record</h3>
            <ol className="mt-5 space-y-4">
              {reviewGates.map((gate, index) => (
                <li key={gate.stage} className="grid gap-3 border-t border-border/70 pt-4 sm:grid-cols-[110px_minmax(0,1fr)]">
                  <div>
                    <p className="font-serifCn text-lg text-signal">Gate {index + 1}</p>
                    <p className="mt-1 text-xs leading-5 text-muted">{gate.stage}</p>
                  </div>
                  <div>
                    <h4 className="font-serifCn text-lg leading-6 text-accent">{gate.question}</h4>
                    <p className="mt-2 text-sm leading-6 text-muted">
                      <span className="text-xs uppercase tracking-[0.1em] text-signal">Exit evidence</span><br />
                      {gate.evidence}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </article>
        </div>
      </section>

      <section id="method-specifications" className="scroll-mt-36">
        <MethodsSectionHeading
          number="05"
          label="Method reference"
          title="Minimum conditions for defensible use"
          description="Thirteen specifications separate data construction, observational adjustment, causal identification, and institutional interpretation. Open a card to review its minimum evidence and reporting boundary."
        />
        <div className="space-y-9">
          {methodGroups.map((group, groupIndex) => (
            <section key={group.title} aria-labelledby={`method-group-${groupIndex}`}>
              <div className="mb-3 grid gap-2 border-t border-border/70 pt-4 md:grid-cols-[220px_minmax(0,1fr)]">
                <h3 id={`method-group-${groupIndex}`} className="font-serifCn text-xl text-accent">
                  {group.title}
                </h3>
                <p className="max-w-3xl text-sm leading-6 text-muted">{group.description}</p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {methodSpecifications
                  .filter((method) => method.category === group.title)
                  .map((method) => (
                    <details key={method.title} className="group h-fit border border-border/70 bg-white px-4 py-4">
                      <summary className="cursor-pointer list-none marker:hidden">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h4 className="font-serifCn text-xl leading-tight text-accent">{method.title}</h4>
                            <p className="mt-2 text-sm leading-6 text-muted">{method.supports}</p>
                          </div>
                          <span aria-hidden="true" className="text-lg text-signal group-open:rotate-45">+</span>
                        </div>
                      </summary>
                      <dl className="mt-5 grid gap-5 border-t border-border/70 pt-5 text-sm sm:grid-cols-2">
                        <div>
                          <dt className="text-xs uppercase tracking-[0.12em] text-signal">Requires</dt>
                          <dd className="mt-2 leading-7 text-ink">{method.requires}</dd>
                        </div>
                        <div>
                          <dt className="text-xs uppercase tracking-[0.12em] text-signal">Assumptions</dt>
                          <dd className="mt-2 leading-7 text-ink">{method.assumptions}</dd>
                        </div>
                        <div>
                          <dt className="text-xs uppercase tracking-[0.12em] text-signal">Common failure</dt>
                          <dd className="mt-2 leading-7 text-muted">{method.failure}</dd>
                        </div>
                        <div>
                          <dt className="text-xs uppercase tracking-[0.12em] text-signal">Report explicitly</dt>
                          <dd className="mt-2 leading-7 text-ink">{method.report}</dd>
                        </div>
                      </dl>
                    </details>
                  ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section id="reporting" className="scroll-mt-36">
        <MethodsSectionHeading
          number="06"
          label="Release checklist"
          title="What another researcher must be able to reconstruct"
          description="Use the final checklist to reconcile the legal construct, data lineage, model specification, inference, robustness record, and claim boundary before release."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {reportingGroups.map((group) => (
            <details key={group.title} className="group h-fit border border-border/70 bg-white px-4 py-4">
              <summary className="cursor-pointer list-none marker:hidden">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-serifCn text-xl text-accent">{group.title}</h3>
                  <span aria-hidden="true" className="text-lg text-signal group-open:rotate-45">+</span>
                </div>
              </summary>
              <ul className="mt-4 list-disc space-y-2 border-t border-border/70 pt-4 pl-5 text-sm leading-7 text-ink">
                {group.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
