export type GuideLink = {
  label: string;
  href: string;
};

export type TheoryLineage = {
  title: string;
  question: string;
  sequence: Array<{
    label: string;
    href: string;
    note: string;
  }>;
  archiveUse: string;
  anchors: GuideLink[];
};

export type DebateEntry = {
  title: string;
  coreClaim: string;
  critique: string;
  readingNote: string;
  anchors: GuideLink[];
};

export type ComparativeDimension = {
  slug: string;
  title: string;
  thesis: string;
  comparison: string;
  institutionalProblem: string;
  caution: string;
  image: {
    src: string;
    alt: string;
    caption: string;
    sourceHref: string;
    sourceLabel: string;
  };
  jurisdictions: string[];
  axes: Array<{
    label: string;
    note: string;
  }>;
  analyticFocus: string[];
  researchUse: string;
  portabilityQuestions: string[];
  anchors: GuideLink[];
};

export const THEORY_LINEAGES: TheoryLineage[] = [
  {
    title: "Transaction Costs and Institutional Choice",
    question: "Why do legal systems allocate activity among markets, firms, contracts, courts, and regulators?",
    sequence: [
      {
        label: "Ronald H. Coase",
        href: "/scholars/ronald-h-coase",
        note: "Frames firms and legal rules as institutional responses to positive transaction costs."
      },
      {
        label: "Harold Demsetz",
        href: "/readings/toward-a-theory-of-property-rights-1967",
        note: "Explains property rights as institutions that emerge when the gains from internalizing externalities rise."
      },
      {
        label: "Oliver E. Williamson",
        href: "/scholars/oliver-e-williamson",
        note: "Moves the analysis toward governance structures, asset specificity, and comparative institutional choice."
      }
    ],
    archiveUse:
      "Use this lineage when a legal problem turns on whether bargaining, ownership, adjudication, or regulation is the lower-cost institutional response.",
    anchors: [
      { label: "The Problem of Social Cost", href: "/readings/the-problem-of-social-cost-1960" },
      { label: "Transaction Costs", href: "/concepts/transaction-costs" },
      { label: "Sturges v. Bridgman", href: "/cases/sturges-v-bridgman-1879" }
    ]
  },
  {
    title: "Accident Costs, Deterrence, and Liability",
    question: "How should law allocate accident losses so that actors take cost-justified precautions?",
    sequence: [
      {
        label: "Guido Calabresi",
        href: "/scholars/guido-calabresi",
        note: "Treats accident law as a system for reducing the sum of accident, avoidance, and administrative costs."
      },
      {
        label: "A. Mitchell Polinsky",
        href: "/scholars/a-mitchell-polinsky",
        note: "Provides compact economic models of liability, enforcement, litigation, and damages."
      },
      {
        label: "Steven M. Shavell",
        href: "/scholars/steven-m-shavell",
        note: "Develops formal analysis of liability rules, enforcement, and legal error."
      }
    ],
    archiveUse:
      "Use this lineage for negligence, strict liability, sanctions, compliance, and litigation-design questions.",
    anchors: [
      { label: "The Cost of Accidents", href: "/readings/the-cost-of-accidents-a-legal-and-economic-analysis-1970" },
      { label: "Accident Costs", href: "/concepts/accident-costs" },
      { label: "United States v. Carroll Towing", href: "/cases/united-states-v-carroll-towing-1947" }
    ]
  },
  {
    title: "Property Rules, Liability Rules, and Remedies",
    question: "When should law protect entitlements by injunction, damages, bargaining, or inalienability?",
    sequence: [
      {
        label: "Coasean bargaining",
        href: "/readings/the-problem-of-social-cost-1960",
        note: "Shows why entitlement assignment and transaction costs must be analyzed together."
      },
      {
        label: "Calabresi and Melamed",
        href: "/readings/property-rules-liability-rules-and-inalienability-one-view-of-the-cathedral-1972",
        note: "Distinguishes property-rule, liability-rule, and inalienability protection."
      },
      {
        label: "Remedial tailoring",
        href: "/cases/spur-industries-v-del-webb-1972",
        note: "Illustrates how courts may separate entitlement protection from the allocation of transition costs."
      }
    ],
    archiveUse:
      "Use this lineage when the central issue is not who wins, but what remedy best governs future behavior.",
    anchors: [
      { label: "Property Rules and Liability Rules", href: "/concepts/property-rules-and-liability-rules" },
      { label: "Boomer v. Atlantic Cement", href: "/cases/boomer-v-atlantic-cement-1970" },
      { label: "Vincent v. Lake Erie", href: "/cases/vincent-v-lake-erie-transportation-1910" }
    ]
  },
  {
    title: "Agency Costs and Corporate Governance",
    question: "How do legal rules constrain managers, controllers, boards, and investors when control and cash-flow rights diverge?",
    sequence: [
      {
        label: "Jensen and Meckling",
        href: "/readings/theory-of-the-firm-managerial-behavior-agency-costs-and-ownership-structure-1976",
        note: "Defines agency costs as monitoring, bonding, and residual loss in organizational relationships."
      },
      {
        label: "Reinier H. Kraakman",
        href: "/scholars/reinier-h-kraakman",
        note: "Organizes corporate-law strategies around recurring agency problems."
      },
      {
        label: "Lucian A. Bebchuk",
        href: "/scholars/lucian-a-bebchuk",
        note: "Links shareholder power, takeover defenses, and governance design to agency-cost concerns."
      }
    ],
    archiveUse:
      "Use this lineage for fiduciary duties, board authority, shareholder voting, takeovers, and controller transactions.",
    anchors: [
      { label: "Agency Costs", href: "/concepts/agency-costs" },
      { label: "Kahn v. M&F Worldwide", href: "/cases/kahn-v-mf-worldwide-2014" },
      { label: "The Anatomy of Corporate Law", href: "/readings/the-anatomy-of-corporate-law-2017" }
    ]
  },
  {
    title: "Market Efficiency, Disclosure, and Securities Enforcement",
    question: "When can legal doctrine rely on market prices, and when must law improve information production?",
    sequence: [
      {
        label: "Eugene F. Fama",
        href: "/scholars/eugene-f-fama",
        note: "Supplies the efficient-capital-markets background for securities-law reliance and price-impact debates."
      },
      {
        label: "Ronald J. Gilson and Reinier H. Kraakman",
        href: "/readings/the-mechanisms-of-market-efficiency-1984",
        note: "Explains mechanisms through which information enters securities prices."
      },
      {
        label: "John C. Coffee Jr.",
        href: "/scholars/john-c-coffee-jr",
        note: "Connects mandatory disclosure, gatekeepers, and enforcement institutions."
      }
    ],
    archiveUse:
      "Use this lineage for fraud-on-the-market, disclosure duties, gatekeeper liability, and securities class actions.",
    anchors: [
      { label: "Efficient Capital Markets", href: "/readings/efficient-capital-markets-a-review-of-theory-and-empirical-work-1970" },
      { label: "Efficient Capital Markets", href: "/concepts/efficient-capital-markets" },
      { label: "Basic Inc. v. Levinson", href: "/cases/basic-v-levinson-1988" }
    ]
  },
  {
    title: "Behavioral Law and Economics",
    question: "What changes when legal actors do not behave like stable, fully informed rational maximizers?",
    sequence: [
      {
        label: "Daniel Kahneman",
        href: "/scholars/daniel-kahneman",
        note: "Provides the decision-theory background for loss aversion, framing, and judgment under uncertainty."
      },
      {
        label: "Christine Jolls",
        href: "/scholars/christine-jolls",
        note: "Brings bounded rationality and behavioral evidence into legal analysis."
      },
      {
        label: "Oren Bar-Gill",
        href: "/scholars/oren-bar-gill",
        note: "Applies behavioral analysis to consumer contracts, disclosure, and market design."
      }
    ],
    archiveUse:
      "Use this lineage when disclosure, contracting, settlement, investor choice, or consumer finance depends on biased or bounded decision-making.",
    anchors: [
      { label: "A Behavioral Approach to Law and Economics", href: "/readings/a-behavioral-approach-to-law-and-economics-1998" },
      { label: "Behavioral Law and Economics", href: "/concepts/behavioral-law-and-economics" },
      { label: "Prospect Theory", href: "/concepts/prospect-theory" }
    ]
  }
];

export const DEBATES_AND_CRITIQUES: DebateEntry[] = [
  {
    title: "The Coase theorem depends on institutional conditions",
    coreClaim:
      "The canonical Coasean claim is not that legal rules never matter; it is that zero transaction costs would make entitlement assignment irrelevant to efficient allocation.",
    critique:
      "Real disputes involve information costs, strategic behavior, wealth effects, legal uncertainty, and enforcement costs. The theorem is therefore most useful as a diagnostic device for asking which frictions make law matter.",
    readingNote:
      "Read nuisance and externality cases as institutional comparisons, not as simple lessons that bargaining can always solve the problem.",
    anchors: [
      { label: "Coase Theorem", href: "/concepts/coase-theorem" },
      { label: "The Problem of Social Cost", href: "/readings/the-problem-of-social-cost-1960" },
      { label: "Sturges v. Bridgman", href: "/cases/sturges-v-bridgman-1879" }
    ]
  },
  {
    title: "Efficiency analysis does not settle distribution",
    coreClaim:
      "Cost-benefit and welfare analysis discipline legal argument by forcing attention to consequences, tradeoffs, and institutional feasibility.",
    critique:
      "Efficiency criteria can understate distributional conflict, rights constraints, and democratic legitimacy. A rule can reduce aggregate costs while shifting losses to less organized or less informed parties.",
    readingNote:
      "Use welfare analysis as one layer of legal reasoning; do not treat it as a complete substitute for normative judgment.",
    anchors: [
      { label: "Fairness versus Welfare", href: "/readings/fairness-versus-welfare-2001" },
      { label: "Kaldor-Hicks Efficiency", href: "/concepts/kaldor-hicks-efficiency" },
      { label: "Boomer v. Atlantic Cement", href: "/cases/boomer-v-atlantic-cement-1970" }
    ]
  },
  {
    title: "Efficient markets are not a universal legal premise",
    coreClaim:
      "Securities doctrine often relies on the idea that public information is impounded into prices in developed markets.",
    critique:
      "Market efficiency varies by market, information type, time horizon, liquidity, and institutional setting. Treating price as a complete measure of truth can obscure fraud, noise, strategic disclosure, or market stress.",
    readingNote:
      "Read Basic and Halliburton as legal uses of market-efficiency theory under litigation constraints, not as final statements of finance theory.",
    anchors: [
      { label: "Efficient Capital Markets", href: "/readings/efficient-capital-markets-a-review-of-theory-and-empirical-work-1970" },
      { label: "Basic Inc. v. Levinson", href: "/cases/basic-v-levinson-1988" },
      { label: "Halliburton II", href: "/cases/halliburton-v-erica-p-john-fund-2014" }
    ]
  },
  {
    title: "Shareholder primacy has contested institutional limits",
    coreClaim:
      "Shareholder-oriented analysis treats residual claimants and capital-market discipline as important checks on managerial agency costs.",
    critique:
      "Corporate decisions also affect creditors, employees, consumers, communities, and systemic risk. The question is not whether shareholders matter, but which institution should mediate competing claims and under what legal standard.",
    readingNote:
      "Use corporate-purpose cases together with agency-cost literature so that normative claims do not collapse into a single slogan.",
    anchors: [
      { label: "Dodge v. Ford", href: "/cases/dodge-v-ford-motor-co-1919" },
      { label: "Agency Costs", href: "/concepts/agency-costs" },
      { label: "Lucian A. Bebchuk", href: "/scholars/lucian-a-bebchuk" }
    ]
  },
  {
    title: "Behavioral law and economics raises a governance problem",
    coreClaim:
      "Behavioral evidence can reveal systematic mistakes in contracting, investment, settlement, and consumer choice.",
    critique:
      "If legal actors are biased, regulators and judges may also be biased or institutionally constrained. Behavioral arguments therefore require attention to institutional competence, not merely evidence of private error.",
    readingNote:
      "Connect behavioral diagnosis to remedy design: disclosure, defaults, cooling-off periods, fiduciary duties, or enforcement may have different error profiles.",
    anchors: [
      { label: "Behavioral Law and Economics", href: "/concepts/behavioral-law-and-economics" },
      { label: "A Behavioral Approach", href: "/readings/a-behavioral-approach-to-law-and-economics-1998" },
      { label: "Oren Bar-Gill", href: "/scholars/oren-bar-gill" }
    ]
  },
  {
    title: "Law-and-finance measurement is powerful but contestable",
    coreClaim:
      "Comparative law-and-finance research links investor protection, enforcement, ownership, and financial development.",
    critique:
      "Legal indices can simplify complex institutional systems. Coding choices, enforcement variation, political economy, and informal practices may affect whether cross-country measures capture what they claim to measure.",
    readingNote:
      "Use legal-origin and investor-protection materials as research designs that require measurement scrutiny, not as automatic institutional rankings.",
    anchors: [
      { label: "Law and Finance", href: "/readings/law-and-finance-1998" },
      { label: "Holger Spamann", href: "/scholars/holger-spamann" }
    ]
  }
];

export const COMPARATIVE_DIMENSIONS: ComparativeDimension[] = [
  {
    slug: "delaware-specialized-corporate-law",
    title: "Delaware as a specialized corporate-law jurisdiction",
    thesis:
      "Delaware is useful as a comparator only when its legal doctrine is read together with its courts, bar, franchise-tax incentives, and litigation infrastructure.",
    comparison:
      "Delaware corporate law is often studied as a specialized judicial and statutory system rather than merely as one state's private law.",
    institutionalProblem:
      "The comparative question is how expertise, precedent, franchise-tax incentives, and litigation infrastructure shape corporate-law production.",
    caution:
      "Do not treat Delaware rules as globally generalizable without asking whether other systems have comparable courts, bar specialization, shareholder litigation, and market expectations.",
    image: {
      src: "/comparative-law/delaware-courtroom.jpg",
      alt: "Courtroom inside the New Castle Court House in Delaware",
      caption: "New Castle Court House courtroom, Delaware",
      sourceHref: "https://commons.wikimedia.org/wiki/File:New_Castle_Court_House_Courtroom.JPG",
      sourceLabel: "Wikimedia Commons · CC BY-SA 4.0"
    },
    jurisdictions: [
      "Delaware and other U.S. corporate-law jurisdictions",
      "UK and EU company-law systems",
      "Jurisdictions with concentrated ownership or weaker shareholder-litigation infrastructure"
    ],
    axes: [
      {
        label: "Institutional producer",
        note: "Specialized courts, repeat-player counsel, statutory revision, and chartering markets shape the supply of corporate law."
      },
      {
        label: "Governance problem",
        note: "The comparison turns on board authority, fiduciary standards, shareholder litigation, controller conflicts, and sale-of-control rules."
      },
      {
        label: "Economic mechanism",
        note: "Predictability, expertise, and competition for incorporations may lower transaction costs, but may also privilege repeat players."
      },
      {
        label: "Portability risk",
        note: "A Delaware rule may not travel well if courts, litigation finance, ownership structure, or professional practice are not comparable."
      }
    ],
    analyticFocus: [
      "Whether legal specialization improves predictability or entrenches repeat-player advantages.",
      "How fiduciary standards, precedent, and litigation procedure interact with chartering markets.",
      "Why corporate-law transplantation depends on courts, bar expertise, and investor expectations."
    ],
    researchUse:
      "Use this comparison when a paper asks whether Delaware-style corporate law is a model, a product of local institutional conditions, or a benchmark that becomes misleading outside its litigation and capital-market setting.",
    portabilityQuestions: [
      "Does the receiving jurisdiction have a specialized court or an equivalent source of corporate-law expertise?",
      "Are shareholder suits, settlement practice, and professional intermediaries institutionally comparable?",
      "Would a transplanted fiduciary standard operate similarly where ownership is concentrated or state-linked?"
    ],
    anchors: [
      { label: "Unocal", href: "/cases/unocal-v-mesa-petroleum-1985" },
      { label: "MFW", href: "/cases/kahn-v-mf-worldwide-2014" },
      { label: "Roberta Romano", href: "/scholars/roberta-romano" }
    ]
  },
  {
    slug: "mandatory-disclosure-market-systems",
    title: "Mandatory disclosure across market systems",
    thesis:
      "Disclosure regimes should be compared by asking who verifies information, who enforces accuracy, and which investors can use the information produced.",
    comparison:
      "U.S., UK, and EU securities regimes share disclosure commitments but differ in enforcement mix, supervisory structure, and private litigation exposure.",
    institutionalProblem:
      "The central question is which institution produces credible information: issuer liability, public supervision, gatekeepers, exchange rules, or private litigation.",
    caution:
      "Disclosure rules cannot be evaluated apart from enforcement capacity, investor base, market liquidity, and litigation procedure.",
    image: {
      src: "/comparative-law/esma-ibox-paris.jpg",
      alt: "The Ibox office building in Paris",
      caption: "Ibox building, Paris, associated with ESMA's institutional setting",
      sourceHref: "https://commons.wikimedia.org/wiki/File:Gecina_-_Ibox.jpg",
      sourceLabel: "Wikimedia Commons · CC BY-SA 4.0"
    },
    jurisdictions: [
      "United States federal securities regulation",
      "UK market-conduct and listing regulation",
      "EU capital-markets and supervisory-convergence regimes"
    ],
    axes: [
      {
        label: "Institutional producer",
        note: "Issuers, auditors, underwriters, exchanges, public supervisors, and private plaintiffs all participate in information production."
      },
      {
        label: "Governance problem",
        note: "The problem is not merely nondisclosure, but whether markets receive credible, comparable, and sanction-backed information."
      },
      {
        label: "Economic mechanism",
        note: "Disclosure can reduce information asymmetry and agency costs, but its effect depends on enforcement, processing capacity, and market liquidity."
      },
      {
        label: "Portability risk",
        note: "Similar disclosure rules may diverge when private litigation, supervisory capacity, or investor composition differs."
      }
    ],
    analyticFocus: [
      "How disclosure credibility is produced by a mix of issuer duties, regulator supervision, gatekeepers, exchanges, and litigation.",
      "Why similar disclosure texts may have different effects under different enforcement and procedure systems.",
      "How retail-investor protection and wholesale-market regulation place different demands on information law."
    ],
    researchUse:
      "Use this comparison when studying mandatory disclosure, prospectus liability, periodic reporting, market abuse, gatekeeper incentives, or the choice between public and private enforcement.",
    portabilityQuestions: [
      "Which institution actually verifies, disciplines, or prices the disclosed information?",
      "Does private litigation create deterrence, settlement pressure, or both?",
      "Are investors relying on disclosure directly, through intermediaries, or through market prices?"
    ],
    anchors: [
      { label: "John C. Coffee Jr.", href: "/scholars/john-c-coffee-jr" },
      { label: "Niamh Moloney", href: "/scholars/niamh-moloney" },
      { label: "Eilís Ferran", href: "/scholars/eilis-ferran" },
      { label: "Market Failure and Mandatory Disclosure", href: "/readings/market-failure-and-the-economic-case-for-a-mandatory-disclosure-system-1984" }
    ]
  },
  {
    slug: "ownership-concentration-investor-protection",
    title: "Ownership concentration and investor protection",
    thesis:
      "Investor protection cannot be evaluated without first identifying the dominant ownership structure and the agency conflict it creates.",
    comparison:
      "Dispersed ownership, controlling-shareholder systems, and state-influenced ownership structures create different agency problems.",
    institutionalProblem:
      "The comparison shifts from manager-shareholder agency costs to controller-minority conflicts, tunneling, related-party transactions, and enforcement credibility.",
    caution:
      "Investor protection should be read with actual enforcement and ownership structure, not only with formal statutory rights.",
    image: {
      src: "/comparative-law/tokyo-stock-exchange.jpg",
      alt: "Entrance of the Tokyo Stock Exchange Main Building",
      caption: "Tokyo Stock Exchange Main Building entrance",
      sourceHref: "https://commons.wikimedia.org/wiki/File:The_Entrance_of_Tokyo_Stock_Exchange_Main_Building_20240329.jpg",
      sourceLabel: "Wikimedia Commons · CC0 1.0"
    },
    jurisdictions: [
      "Dispersed-ownership public-company systems",
      "Controlling-shareholder and family-controlled systems",
      "State-influenced ownership structures and mixed public-private ownership"
    ],
    axes: [
      {
        label: "Institutional producer",
        note: "Corporate statutes, securities disclosure, courts, exchanges, institutional investors, and controllers jointly shape investor protection."
      },
      {
        label: "Governance problem",
        note: "The central agency conflict may involve managers, controllers, creditors, minority shareholders, or the state."
      },
      {
        label: "Economic mechanism",
        note: "Investor-protection rules affect tunneling, monitoring, capital costs, control premia, and the willingness of outside investors to supply capital."
      },
      {
        label: "Portability risk",
        note: "Formal rights may overstate protection where enforcement is weak or where ownership concentration changes the relevant conflict."
      }
    ],
    analyticFocus: [
      "How the dominant agency problem changes when control is held by managers, controlling shareholders, creditors, or the state.",
      "Why related-party transactions, tunneling, freezeouts, and disclosure rules become central in concentrated-ownership systems.",
      "How law-and-finance measures should be checked against enforcement, politics, and ownership data."
    ],
    researchUse:
      "Use this comparison when a project moves between agency-cost theory, law-and-finance indices, minority protection, controlling-shareholder duties, and empirical corporate-governance evidence.",
    portabilityQuestions: [
      "Which agency conflict is most important in the jurisdiction being studied?",
      "Can formal investor rights be enforced by courts, regulators, exchanges, or private suits?",
      "Do ownership data and enforcement practice support the doctrinal comparison?"
    ],
    anchors: [
      { label: "Law and Finance", href: "/readings/law-and-finance-1998" },
      { label: "Kahn v. Lynch", href: "/cases/kahn-v-lynch-1994" },
      { label: "Mandatory Disclosure", href: "/concepts/mandatory-disclosure" }
    ]
  },
  {
    slug: "financial-crisis-law-institutional-elasticity",
    title: "Financial crisis law and institutional elasticity",
    thesis:
      "Crisis law should be compared through the gap between ordinary legal commitments and the discretionary powers used when financial stress threatens the system.",
    comparison:
      "Crisis governance changes the relationship among private rights, public guarantees, liquidity support, resolution, and regulatory discretion.",
    institutionalProblem:
      "The comparative issue is how legal systems allocate losses under stress while preserving credible commitments in ordinary times.",
    caution:
      "Crisis rules should not be inferred only from statutes; central-bank practice, supervisory discretion, and political constraints often shape outcomes.",
    image: {
      src: "/comparative-law/lehman-brothers-2008.jpg",
      alt: "Lehman Brothers headquarters in New York City on September 15, 2008",
      caption: "Lehman Brothers headquarters, September 15, 2008",
      sourceHref: "https://commons.wikimedia.org/wiki/File:Lehman_Brothers-20080915.jpg",
      sourceLabel: "Wikimedia Commons · CC BY 2.0"
    },
    jurisdictions: [
      "United States crisis-management and resolution institutions",
      "UK and EU bank-resolution and supervisory frameworks",
      "Cross-border financial groups and internationally coordinated standards"
    ],
    axes: [
      {
        label: "Institutional producer",
        note: "Central banks, finance ministries, bank supervisors, resolution authorities, courts, and international standard-setters all shape crisis law."
      },
      {
        label: "Governance problem",
        note: "The problem is how to allocate losses, liquidity, priority, and public guarantees when ordinary market discipline may become destabilizing."
      },
      {
        label: "Economic mechanism",
        note: "Crisis rules affect run incentives, creditor expectations, moral hazard, fiscal exposure, and the credibility of resolution commitments."
      },
      {
        label: "Portability risk",
        note: "Statutory tools may operate differently depending on central-bank capacity, fiscal space, cross-border coordination, and political constraints."
      }
    ],
    analyticFocus: [
      "How ordinary private-law commitments change under liquidity stress and systemic-risk conditions.",
      "Why resolution, lender-of-last-resort support, guarantees, and bail-in tools require institutional rather than purely textual comparison.",
      "How legal credibility depends on the gap between ex ante rules and ex post emergency discretion."
    ],
    researchUse:
      "Use this comparison when studying financial crisis governance, systemic risk, bank resolution, liquidity support, regulatory discretion, or the legal theory of finance.",
    portabilityQuestions: [
      "Who can move liquidity, impose losses, or suspend ordinary entitlements in a crisis?",
      "Are emergency powers constrained by credible legal procedures or primarily by political economy?",
      "Does the comparison distinguish ordinary solvency rules from stress-period institutional practice?"
    ],
    anchors: [
      { label: "Katharina Pistor", href: "/scholars/katharina-pistor" },
      { label: "Eilís Ferran", href: "/scholars/eilis-ferran" },
      { label: "United States v. Winstar", href: "/cases/united-states-v-winstar-1996" },
      { label: "Systemic Risk", href: "/concepts/systemic-risk" }
    ]
  },
  {
    slug: "banking-preemption-regulatory-federalism",
    title: "Banking preemption and regulatory federalism",
    thesis:
      "Regulatory federalism should be assessed as a choice about information, enforcement capacity, uniformity, and opportunities for regulatory arbitrage.",
    comparison:
      "Financial regulation often divides authority among national supervisors, state enforcement, courts, and market actors.",
    institutionalProblem:
      "The comparison asks whether centralization improves scale and uniformity or whether it weakens local enforcement and consumer protection.",
    caution:
      "Preemption cases should be read together with institutional capacity and regulatory-arbitrage incentives.",
    image: {
      src: "/comparative-law/us-treasury-building.jpg",
      alt: "United States Treasury building in Washington, D.C.",
      caption: "United States Treasury building, Washington, D.C.",
      sourceHref: "https://commons.wikimedia.org/wiki/File:Us-treasury-building.jpg",
      sourceLabel: "Wikimedia Commons · CC BY 4.0"
    },
    jurisdictions: [
      "U.S. national-bank preemption and state enforcement",
      "Federal and state consumer-finance enforcement structures",
      "Single-market or supervisory-network settings where authority is divided across levels"
    ],
    axes: [
      {
        label: "Institutional producer",
        note: "National supervisors, state authorities, courts, consumer-protection agencies, and regulated firms all influence how authority is allocated."
      },
      {
        label: "Governance problem",
        note: "The comparison asks whether centralization improves uniformity and scale or weakens locally informed enforcement."
      },
      {
        label: "Economic mechanism",
        note: "Preemption changes compliance costs, enforcement incentives, charter choice, regulatory arbitrage, and the location of consumer-protection authority."
      },
      {
        label: "Portability risk",
        note: "A federal allocation of authority cannot be assessed without the market structure and administrative capacity of each level of government."
      }
    ],
    analyticFocus: [
      "How centralized supervision can create uniformity while altering local enforcement incentives.",
      "Why preemption doctrine should be evaluated with regulatory capacity, information, and arbitrage incentives.",
      "How courts mediate conflicts between national banking powers and subnational consumer-protection rules."
    ],
    researchUse:
      "Use this comparison when a project concerns banking preemption, supervisory allocation, consumer financial protection, regulatory arbitrage, or multi-level financial governance.",
    portabilityQuestions: [
      "Does centralization solve fragmentation, or does it remove locally informed enforcement?",
      "Which regulator has information, authority, and incentives to act before harm becomes systemic?",
      "Can regulated firms choose legal forms or jurisdictions to exploit the allocation of authority?"
    ],
    anchors: [
      { label: "Marquette", href: "/cases/marquette-national-bank-v-first-of-omaha-1978" },
      { label: "Barnett Bank", href: "/cases/barnett-bank-v-nelson-1996" },
      { label: "Cuomo", href: "/cases/cuomo-v-clearing-house-2009" }
    ]
  }
];

export function getComparativeDimensionBySlug(slug: string) {
  return COMPARATIVE_DIMENSIONS.find((dimension) => dimension.slug === slug);
}
