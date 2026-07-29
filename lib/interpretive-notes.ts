import type { CaseRecord } from "@/lib/cases";
import type { ConceptEntry } from "@/lib/concepts";
import { getReadingPublicationType, type IndexedReading } from "@/lib/topics";

type ReadingNote = {
  researchQuestion: string;
  contribution: string;
  methodOrMaterial: string;
  limits: string;
};

type ConceptNote = {
  analyticalQuestion: string;
  mechanism: string;
  misuseWarning: string;
};

type CaseNote = {
  lawAndEconomicsFrame: string;
  incentiveEffect: string;
  informationProblem: string;
  institutionalAlternative: string;
};

const topicFrames: Record<string, { question: string; contribution: string; limits: string }> = {
  "Foundations of Law and Economics": {
    question: "What institutional arrangement best addresses the relevant cost, incentive, bargaining, or information problem?",
    contribution: "The work helps turn legal doctrine into a comparison among feasible institutions rather than a choice between law and markets in the abstract.",
    limits: "Use the argument with attention to its assumptions about bargaining, information, institutional competence, and distribution."
  },
  "Corporate Law and Governance": {
    question: "How should corporate law allocate authority and accountability among managers, boards, shareholders, controllers, and other claimants?",
    contribution: "The work helps identify the agency problem, governance mechanism, or legal strategy that a corporate-law rule is designed to address.",
    limits: "The analysis should be checked against ownership structure, litigation procedure, fiduciary enforcement, and market context."
  },
  "Securities Regulation": {
    question: "Which institution can produce, verify, or discipline market information at tolerable cost?",
    contribution: "The work connects securities doctrine to information production, market pricing, enforcement design, and investor-protection institutions.",
    limits: "Market efficiency, investor reliance, and enforcement capacity should be treated as empirical and institutional questions, not as automatic premises."
  },
  "Financial Law and Risk Control": {
    question: "How should law allocate financial risk when private contracts, supervision, liquidity support, and systemic stability interact?",
    contribution: "The work links legal form to risk allocation, regulatory capacity, crisis governance, and the institutional design of financial markets.",
    limits: "Ordinary legal rules may operate differently under stress, so crisis practice and supervisory discretion should be considered alongside doctrine."
  },
  "Research Methods": {
    question: "What comparison or research design can support a credible claim about legal or regulatory effects?",
    contribution: "The work helps readers distinguish description, association, causal identification, measurement, and institutional interpretation.",
    limits: "Methodological tools do not supply legal meaning by themselves; coding choices, sample restrictions, and institutional context remain substantive decisions."
  }
};

const conceptFrames = [
  {
    matches: ["agency", "monitor", "fiduciary", "board", "shareholder", "controller", "takeover", "merger"],
    note: {
      analyticalQuestion:
        "Which party controls a decision, who bears the residual consequences, and what legal or market device can reduce the resulting agency problem?",
      mechanism:
        "The concept usually works through monitoring, bonding, disclosure, voting, fiduciary review, liability, or market discipline.",
      misuseWarning:
        "Do not treat every conflict inside the firm as the same agency problem; manager-shareholder, controller-minority, creditor-shareholder, and board-process problems require different institutional tools."
    }
  },
  {
    matches: ["disclosure", "market", "securities", "information", "price", "fraud", "investor"],
    note: {
      analyticalQuestion:
        "Who can produce reliable information, who can verify it, and how does the rule affect trading, pricing, reliance, and enforcement?",
      mechanism:
        "The concept often works through mandatory reporting, liability standards, gatekeeper incentives, market-price effects, and public or private enforcement.",
      misuseWarning:
        "Do not assume that more information always improves welfare; disclosure can be costly, strategically framed, ignored, or effective only when institutions can process it."
    }
  },
  {
    matches: ["systemic", "bank", "liquidity", "capital", "resolution", "risk", "macroprudential"],
    note: {
      analyticalQuestion:
        "How does the rule allocate risk across private parties, supervisors, creditors, taxpayers, and the wider financial system?",
      mechanism:
        "The concept often works through capital requirements, liquidity support, loss allocation, resolution powers, supervision, and limits on regulatory arbitrage.",
      misuseWarning:
        "Do not read financial-law rules only as private-law allocations; stress conditions and public backstops can change the operation of legal entitlements."
    }
  },
  {
    matches: ["transaction", "external", "entitlement", "property", "liability", "cost", "bargaining", "coase"],
    note: {
      analyticalQuestion:
        "What costs prevent private ordering, and which legal institution can reduce the total cost of conflict, prevention, valuation, and enforcement?",
      mechanism:
        "The concept works by assigning entitlements, changing bargaining conditions, internalizing externalities, choosing remedies, or shifting activity to firms, markets, courts, or regulators.",
      misuseWarning:
        "Do not use efficiency language as a shortcut for the result; identify the relevant friction, institutional alternative, and distributional implication."
    }
  },
  {
    matches: ["identification", "difference", "event", "matching", "synthetic", "regression", "causal", "empirical"],
    note: {
      analyticalQuestion:
        "What counterfactual is being constructed, and what assumptions make the comparison informative for a legal or institutional claim?",
      mechanism:
        "The concept works through research design, measurement, sample construction, coding rules, and transparent comparison between treated and comparison units.",
      misuseWarning:
        "Do not treat statistical significance as legal significance; interpretation still depends on institutional setting, measurement validity, and the scope of the sample."
    }
  }
];

export function getReadingInterpretiveNote(reading: IndexedReading): ReadingNote {
  const frame = topicFrames[reading.topicTitle] ?? topicFrames["Foundations of Law and Economics"];
  const publicationType = getReadingPublicationType(reading).toLowerCase();
  const materialByType = {
    article: "Read it as an article-length intervention: identify the problem it isolates, the assumptions it uses, and the later debates it made possible.",
    book: "Read it as a sustained framework rather than a single claim; track the conceptual vocabulary it supplies and the institutional comparisons it invites.",
    chapter: "Read it as part of a broader architecture; ask what function the chapter performs within the larger project.",
    report: "Read it as institutional material: note the sponsoring body, regulatory setting, and policy problem before extracting general propositions."
  } as const;

  return {
    researchQuestion: frame.question,
    contribution: `${frame.contribution} In this entry, the archive summary emphasizes: ${reading.summary}`,
    methodOrMaterial: materialByType[publicationType as keyof typeof materialByType] ?? materialByType.article,
    limits: frame.limits
  };
}

export function getConceptInterpretiveNote(concept: ConceptEntry): ConceptNote {
  const haystack = [concept.term, concept.field, concept.definition, concept.whyItMatters, ...concept.related]
    .join(" ")
    .toLowerCase();
  const match = conceptFrames.find((frame) => frame.matches.some((term) => haystack.includes(term)));

  return (
    match?.note ?? {
      analyticalQuestion:
        "What legal problem does this concept help isolate, and which institution is best placed to respond to it?",
      mechanism:
        "The concept should be connected to a specific channel such as incentives, information, risk allocation, enforcement cost, bargaining cost, or institutional competence.",
      misuseWarning:
        "Do not use the concept as a label alone; specify the mechanism, the relevant actors, and the institutional setting in which it operates."
    }
  );
}

export function getCaseInterpretiveNote(caseRecord: CaseRecord): CaseNote {
  const haystack = [caseRecord.field, caseRecord.issue, caseRecord.reasoning, caseRecord.significance, ...caseRecord.concepts]
    .join(" ")
    .toLowerCase();

  if (caseRecord.field === "Corporate Law") {
    return {
      lawAndEconomicsFrame:
        "Read the case as an allocation of decision authority inside the firm, usually among boards, managers, shareholders, controllers, bidders, or courts.",
      incentiveEffect:
        "The rule changes how future corporate actors structure process, disclosure, bargaining leverage, monitoring, or transaction design.",
      informationProblem:
        "The court often has to decide how much process or disclosure is needed before deferring to business judgment, market choice, or shareholder approval.",
      institutionalAlternative:
        "Compare judicial review with board process, shareholder voting, market discipline, appraisal, fiduciary litigation, and ex ante charter or contract design."
    };
  }

  if (caseRecord.field === "Securities Regulation" || haystack.includes("disclosure") || haystack.includes("market")) {
    return {
      lawAndEconomicsFrame:
        "Read the case as a choice about information production, investor reliance, market integrity, and the boundary between public enforcement and private litigation.",
      incentiveEffect:
        "The rule affects issuers, traders, gatekeepers, plaintiffs, defendants, and regulators by changing disclosure incentives, litigation exposure, or enforcement probability.",
      informationProblem:
        "The core difficulty is often whether courts can observe deception, materiality, price impact, scienter, or reliance without creating excessive error or litigation costs.",
      institutionalAlternative:
        "Compare private damages actions with SEC enforcement, exchange rules, gatekeeper duties, class-certification screens, and market-price discipline."
    };
  }

  if (caseRecord.field === "Financial Law" || haystack.includes("bank") || haystack.includes("preemption")) {
    return {
      lawAndEconomicsFrame:
        "Read the case as an allocation of authority among private financial contracts, federal or national supervisors, state enforcement, courts, and crisis-management institutions.",
      incentiveEffect:
        "The rule can affect charter choice, regulatory arbitrage, supervision intensity, consumer-protection enforcement, creditor expectations, or risk taking.",
      informationProblem:
        "Financial-law disputes often ask which institution has the information and capacity to respond before private losses become systemic or geographically dispersed.",
      institutionalAlternative:
        "Compare judicial enforcement with administrative supervision, ex ante regulation, resolution powers, centralization, and locally informed enforcement."
    };
  }

  return {
    lawAndEconomicsFrame:
      "Read the case as an institutional response to a conflict over entitlements, externalities, bargaining costs, remedies, or accident prevention.",
    incentiveEffect:
      "The decision matters because later actors will adjust precautions, bargaining behavior, information production, or litigation strategy in light of the rule.",
    informationProblem:
      "Ask what the court can observe reliably and what it must approximate through rules, standards, presumptions, damages, or injunctions.",
    institutionalAlternative:
      "Compare adjudication with bargaining, property rules, liability rules, regulation, insurance, private ordering, and legislative rulemaking."
  };
}
