export type FieldEssay = {
  topicSlug: string;
  thesis: string;
  paragraphs: string[];
  readingPath: string[];
  tensions: string[];
};

const FIELD_ESSAYS: FieldEssay[] = [
  {
    topicSlug: "foundations-of-law-and-economics",
    thesis:
      "The foundations of law and economics are best read as a set of institutional questions rather than as a single efficiency formula.",
    paragraphs: [
      "The field begins from a deceptively simple move: legal rules change the costs and benefits of action. That move becomes serious only when it is attached to institutions. Coasean analysis asks whether bargaining is possible and what legal rules do when bargaining is costly. Calabresian accident-cost analysis asks who can prevent, spread, or administer losses at lower cost. Public-enforcement theory asks how sanctions, detection probabilities, and enforcement costs interact. These are not interchangeable arguments; each makes a different institutional problem visible.",
      "A careful reading therefore treats efficiency as an organizing question, not a conclusion. Entitlements, liability rules, property rules, standards, sanctions, disclosure duties, and organizational forms are alternative ways of responding to transaction costs, externalities, information problems, agency costs, and enforcement limits. The field is most useful when it makes those alternatives explicit and least useful when it converts legal judgment into a slogan about markets or incentives.",
      "The later behavioral and institutional turns do not simply reject the older canon. They qualify it. Behavioral work asks whether legal actors perceive and process incentives in stable ways. New institutional economics asks why formal rules operate differently across settings. Together, these materials turn foundational law and economics into a comparative inquiry into courts, markets, firms, regulators, and private ordering."
    ],
    readingPath: [
      "Start with Coase to understand reciprocal harm, transaction costs, and the institutional meaning of entitlement assignment.",
      "Read Calabresi and Becker as complementary accounts of accident prevention and public enforcement, not as general solutions to every legal problem.",
      "Use behavioral and institutional readings to test the rationality, information, and institutional-competence assumptions behind the canonical models."
    ],
    tensions: [
      "Efficiency and distribution cannot be collapsed into the same question.",
      "Private bargaining may reduce conflict in some settings while failing under strategic behavior, high information costs, or dispersed parties.",
      "A rule that works in a stylized model may depend on courts, regulators, or markets having capacities they do not actually possess."
    ]
  },
  {
    topicSlug: "corporate-law-governance",
    thesis:
      "Corporate law is a system for organizing enterprise authority under persistent agency, information, and control problems.",
    paragraphs: [
      "The core corporate-law question is not merely who owns the firm. It is how law structures decision authority when investors, managers, directors, creditors, controllers, employees, and market actors hold different information and bear different risks. Agency-cost theory supplies the basic vocabulary, but corporate law extends beyond one agency relationship. Managerial discretion, board oversight, shareholder voting, controlling-shareholder transactions, takeover defenses, creditor protection, and organizational partitioning each respond to a different governance problem.",
      "The field also has a strong institutional dimension. Fiduciary duties do not operate in isolation; they depend on courts, litigation incentives, disclosure rules, transactional practice, financial advisers, institutional investors, and capital-market conditions. Delaware doctrine matters not only because of its rules but because it sits within a specialized legal and professional ecosystem. Comparative corporate law asks whether the same legal strategy has the same function when ownership is concentrated, litigation is rare, or state influence is substantial.",
      "For law-and-economics readers, the most productive approach is to connect doctrinal categories to governance functions. The business judgment rule manages judicial error and preserves delegated authority. Entire fairness review responds to conflicts involving control and information. Takeover law mediates between board authority, market discipline, and coercion. Organizational law protects asset partitions and supports contracting around the firm."
    ],
    readingPath: [
      "Begin with Jensen and Meckling, Fama and Jensen, and the functional corporate-law literature to establish the agency-cost frame.",
      "Move to takeover, freezeout, and board-process materials to see how doctrine allocates bargaining power in concrete transactions.",
      "Use comparative and empirical governance readings to test whether formal rights map onto ownership structure, enforcement, and market practice."
    ],
    tensions: [
      "Shareholder protection can reduce managerial agency costs while increasing litigation, short-term pressure, or controller-minority conflict.",
      "Board deference can preserve expertise and speed while creating space for entrenchment or conflicted process.",
      "A governance rule may look similar across jurisdictions while performing different functions under different ownership and enforcement conditions."
    ]
  },
  {
    topicSlug: "securities-regulation",
    thesis:
      "Securities regulation is an institutional response to information problems in public markets, but disclosure is only one part of that response.",
    paragraphs: [
      "The law-and-economics literature on securities regulation begins with information. Public markets depend on credible issuer information, price formation, intermediary verification, and enforcement against fraud and manipulation. Mandatory disclosure, antifraud liability, gatekeeper duties, exchange regulation, class actions, and public enforcement are different mechanisms for producing and disciplining information. The central question is not whether information is valuable, but which institution can produce it credibly and at what cost.",
      "Market-efficiency theory gives securities law one of its most influential premises, especially in fraud-on-the-market doctrine and price-impact analysis. Yet the literature also warns against turning market efficiency into a universal legal assumption. Prices may respond differently to different types of information; liquidity, analyst coverage, noise trading, strategic disclosure, and market stress all matter. A sophisticated securities-law analysis therefore treats market prices as institutional evidence, not as self-authenticating truth.",
      "Enforcement design is equally central. Public enforcement can supply expertise and deterrence but is constrained by resources and politics. Private litigation can supplement enforcement and compensate investors but may also generate settlement pressure and error costs. Comparative work on the United States, the United Kingdom, and the European Union shows that similar disclosure commitments can operate differently depending on procedure, supervision, investor base, and market structure."
    ],
    readingPath: [
      "Start with law-and-finance and market-efficiency readings to understand why investor protection and price formation became central research objects.",
      "Read disclosure and enforcement materials together, because disclosure duties depend on the institutions that verify and sanction them.",
      "Use behavioral and comparative securities-law materials to test assumptions about investor processing, litigation incentives, and supervisory capacity."
    ],
    tensions: [
      "Disclosure can inform markets, but it can also overwhelm investors or shift responsibility to actors unable to process complex information.",
      "Private enforcement can deter fraud while creating litigation costs, settlement leverage, and doctrinal screens that shape substantive law.",
      "Market prices may discipline issuers in some settings while failing to reveal manipulation, hidden risk, or thinly traded information."
    ]
  },
  {
    topicSlug: "financial-law-risk-control",
    thesis:
      "Financial law studies how legal form, supervision, private contracting, and public backstops allocate risk before and during stress.",
    paragraphs: [
      "Financial-law problems often look private in ordinary times and public in crisis. Deposits, repos, derivatives, bank capital, securitization, payment systems, and resolution regimes all rely on legal forms that allocate priority, liquidity, collateral, and loss. When confidence is stable, those forms support intermediation. When confidence breaks, the same forms can transmit runs, fire sales, and systemic losses. Law and economics therefore reads financial law as a problem of risk allocation across time and institutions.",
      "The literature on banking and systemic risk asks why privately rational balance-sheet choices may create socially costly fragility. Capital and liquidity rules, supervision, deposit insurance, lender-of-last-resort authority, resolution powers, and macroprudential regulation are not merely technical devices. They define who monitors risk, who absorbs losses, and when public authority may override ordinary private-law expectations. The legal theory of finance adds a further point: law may become elastic under stress, with public institutions deciding how far to stretch commitments in order to preserve the system.",
      "Comparative financial law must therefore look beyond statutes. Supervisory practice, central-bank capacity, political constraints, market structure, and cross-border coordination all affect how rules operate. A crisis regime that appears clear on paper may depend on discretion, credibility, and institutional timing."
    ],
    readingPath: [
      "Begin with classic banking and systemic-risk readings to understand liquidity transformation, bank runs, and contagion.",
      "Move to post-crisis regulatory materials to see how capital, liquidity, resolution, and macroprudential tools allocate risk.",
      "Use comparative and legal-theory materials to ask how emergency discretion changes private-law expectations under stress."
    ],
    tensions: [
      "Stability tools may reduce crisis risk while encouraging moral hazard or regulatory arbitrage.",
      "Private contracts can allocate risk precisely but may become unstable when many actors exercise similar rights at the same time.",
      "Legal certainty is valuable in ordinary times, while crisis governance may require discretion that undermines ex ante commitments."
    ]
  },
  {
    topicSlug: "research-methods",
    thesis:
      "Research methods matter because legal-institutional claims depend on measurement, comparison, and credible counterfactuals.",
    paragraphs: [
      "Empirical legal research is not a technical appendix to law and economics. It determines what kind of claim can be made. A study of securities enforcement, corporate governance, litigation, disclosure, or financial regulation must decide what the legal intervention is, which units are comparable, what outcome is meaningful, and what institutional mechanism links the rule to the measured effect. Without those decisions, quantitative evidence can appear more precise than the underlying legal question permits.",
      "The first design choice is conceptual rather than statistical. A researcher must identify the population of legal events or actors: cases, firms, issuers, directors, enforcement actions, transactions, regulatory filings, judges, agencies, or jurisdictions. The next step is measurement. Legal categories rarely arrive as clean variables. A fiduciary-duty claim, material misstatement, takeover defense, related-party transaction, sanction, or supervisory intervention must be translated into a coding rule that another researcher could in principle audit and reproduce.",
      "The second design choice concerns inference. Some empirical legal projects are descriptive: they map where enforcement occurs, how courts reason, or which firms adopt particular governance terms. Others are explanatory or predictive. Causal projects require a stronger design because they ask what would have happened without the legal change. Difference-in-differences, event studies, regression discontinuity, matching, synthetic control, and panel methods each solve some problems while introducing others. In legal research, reforms are often bundled, compliance is heterogeneous, actors may anticipate change, and formal law may diverge from enforcement practice.",
      "The best empirical legal work therefore combines design discipline with legal knowledge. It records sample restrictions, variable construction, coding choices, fixed effects, clustering, missing-data rules, and robustness checks, while also explaining why the estimated relationship matters for doctrine or institutional design. Method should sharpen the legal question rather than replace it. Empirical evidence can discipline legal argument, but it does not by itself settle whether a rule is legitimate, fair, administrable, or normatively desirable."
    ],
    readingPath: [
      "Start by distinguishing descriptive, associational, predictive, and causal legal research questions.",
      "Use general causal-inference materials to separate research design from regression output.",
      "Use event-study, difference-in-differences, matching, regression-discontinuity, and synthetic-control readings as tools for different legal research settings.",
      "Pair methodological readings with substantive law so that variables, treatment timing, and outcomes remain legally meaningful."
    ],
    tensions: [
      "A clean design may answer a narrow question that differs from the doctrinal or policy question of interest.",
      "Legal variables can be hard to code because statutes, enforcement, private ordering, and informal practice interact.",
      "Robustness checks improve credibility only when they test threats to the actual research design rather than merely adding specifications.",
      "Empirical evidence can inform normative legal judgment, but it cannot replace the need to articulate values, institutional competence, and distributional consequences."
    ]
  }
];

export function getFieldEssay(topicSlug: string) {
  return FIELD_ESSAYS.find((essay) => essay.topicSlug === topicSlug) ?? null;
}
