import type { CaseRecord } from "@/lib/cases";

export type CaseAnalysis = {
  institutionalProblem: string;
  economicAnalysis: string;
  alternativesAndLimits: string;
  researchQuestions: string[];
};

const ANALYSES: Record<string, CaseAnalysis> = {
  "dodge-v-ford-motor-co-1919": {
    institutionalProblem:
      "The dispute concerns who may define corporate objectives when directors control retained earnings but minority shareholders bear the consequences of that decision.",
    economicAnalysis:
      "Retained earnings can finance productive investment without repeated capital-market transactions, but managerial control over free cash flow can also increase agency costs. Dividend review may protect minority investors while judicial substitution for business judgment can discourage long-horizon investment and require courts to value projects with limited information.",
    alternativesAndLimits:
      "Possible governance responses include voting and board replacement, disclosure of capital-allocation policy, fiduciary review, appraisal or exit, and charter design. The case should not be treated as a complete modern statement of shareholder primacy; its doctrinal reach and the legal significance of its corporate-purpose language must be assessed in the relevant jurisdiction and period.",
    researchQuestions: [
      "When does retention of surplus indicate productive investment rather than managerial preference?",
      "Which institution—board, shareholders, or court—has the best information to review capital allocation?"
    ]
  },
  "smith-v-van-gorkom-1985": {
    institutionalProblem:
      "The case allocates responsibility for information production and deliberation when a board approves a control transaction under time and valuation uncertainty.",
    economicAnalysis:
      "A process-based duty of care can induce boards to obtain valuations, test assumptions, and document alternatives. Those benefits must be compared with delay, advisory costs, hindsight bias, and defensive process. The rule also affects bargaining: a credible review process may improve price discovery, while rigid procedure can reduce a board’s ability to act quickly on valuable offers.",
    alternativesAndLimits:
      "Independent committees, financial advice, market checks, disclosure, shareholder approval, insurance, indemnification, and charter exculpation distribute monitoring and liability differently. The decision establishes a legal standard for informed approval; it does not show that any particular volume of documentation is economically optimal.",
    researchQuestions: [
      "Which board procedures generate decision-relevant information rather than litigation records?",
      "How do liability limits alter director care, recruitment, insurance, and settlement?"
    ]
  },
  "weinberger-v-uop-1983": {
    institutionalProblem:
      "A controller can influence both sides of a transaction, creating an information and bargaining asymmetry that ordinary shareholder voting may not correct.",
    economicAnalysis:
      "Entire-fairness review addresses private-benefit extraction by scrutinizing process and price. Independent approval and disclosure can improve bargaining and information, while valuation litigation is costly and courts may have difficulty reconstructing a counterfactual arm’s-length price. Procedural protections can also be formal rather than effective when committee incentives or information remain weak.",
    alternativesAndLimits:
      "Special committees, informed minority approval, appraisal, market testing, disclosure, and ex ante charter constraints are alternative or complementary protections. Fair price and fair dealing are legal inquiries; economic valuation assists but does not replace the court’s fiduciary analysis.",
    researchQuestions: [
      "When does minority approval replicate arm’s-length bargaining?",
      "How should courts handle valuation uncertainty without turning appraisal into guaranteed deal insurance?"
    ]
  },
  "in-re-caremark-1996": {
    institutionalProblem:
      "The case addresses how much firms should invest in systems that transmit legal and operational risk information to the board.",
    economicAnalysis:
      "Monitoring can reduce expected violation and loss costs, but comprehensive surveillance is expensive and may overload directors with low-value information. A liability standard focused on sustained oversight failure can encourage baseline systems while preserving board discretion over design. Its effectiveness depends on whether boards can distinguish material risk signals from routine compliance data.",
    alternativesAndLimits:
      "Regulatory mandates, internal controls, whistleblower channels, audit and compliance functions, compensation, and public enforcement can complement fiduciary oversight. An adverse event does not itself establish inadequate monitoring, and an economically imperfect system is not necessarily a breach of fiduciary duty.",
    researchQuestions: [
      "Which information must reach the board, at what frequency, and through which independent channel?",
      "Does oversight liability improve detection or mainly increase defensive compliance expenditure?"
    ]
  },
  "sec-v-howey-1946": {
    institutionalProblem:
      "The investment-contract category determines when economically similar fundraising arrangements enter a mandatory disclosure and enforcement regime despite different legal forms.",
    economicAnalysis:
      "A functional test can reduce avoidance through relabeling and protect investors who depend on promoters for information and performance. Breadth also creates classification uncertainty and compliance costs for arrangements far from conventional securities. The boundary affects capital formation, intermediary design, and the allocation of verification duties.",
    alternativesAndLimits:
      "Bright-line categories, exemptions, tailored disclosure, registration, antifraud-only regimes, and activity-specific regulation allocate certainty and investor protection differently. Economic dependence helps explain the rule’s function, but the governing legal elements and later doctrinal applications remain controlling.",
    researchQuestions: [
      "Which features best identify dependence on managerial or entrepreneurial efforts?",
      "When would tailored disclosure outperform full securities regulation or no ex ante registration?"
    ]
  },
  "basic-v-levinson-1988": {
    institutionalProblem:
      "The case concerns how materiality and reliance should be proved when public statements may affect many investors through market price.",
    economicAnalysis:
      "The fraud-on-the-market presumption can reduce individualized proof costs and make dispersed losses enforceable. Its operation depends on price impact and the information environment, and it can create substantial class-litigation and settlement costs. The probability–magnitude approach to materiality recognizes that uncertain events may still matter when their potential consequences are large.",
    alternativesAndLimits:
      "Direct proof of reliance, public enforcement, price-impact rebuttal, event studies, and transaction-specific disclosure rules distribute error and enforcement costs differently. Market efficiency is an empirical premise used within the reliance analysis, not a universal claim that prices are always correct.",
    researchQuestions: [
      "What evidence best connects a statement to price impact at the relevant stage of litigation?",
      "How should enforcement balance aggregate recovery with error and settlement pressure?"
    ]
  },
  "united-states-v-winstar-1996": {
    institutionalProblem:
      "The dispute concerns how government contract commitments allocate regulatory-change risk when private parties act in reliance on a regulatory arrangement.",
    economicAnalysis:
      "Enforcing government commitments can reduce the cost of inducing private participation and protect reliance investments. Strong commitment may also constrain later regulation adopted for public purposes. The institutional problem is to distinguish compensable contractual risk allocation from an impermissible transfer of sovereign regulatory authority.",
    alternativesAndLimits:
      "Express change-in-law clauses, compensation formulas, limited guarantees, regulatory exit rights, and legislative funding can allocate transition risk more transparently. The economic value of commitment does not determine the antecedent legal question of what the government promised or whether a remedy is authorized.",
    researchQuestions: [
      "How does sovereign commitment affect the price private parties demand for regulatory cooperation?",
      "Which contractual language best separates commercial risk from general regulatory risk?"
    ]
  },
  "cuomo-v-clearing-house-2009": {
    institutionalProblem:
      "The case allocates enforcement authority between federal banking supervision and state law enforcement in a system with overlapping regulatory interests.",
    economicAnalysis:
      "Centralization can improve uniformity and reduce duplicative compliance, while decentralized enforcement can supply additional information, experimentation, and protection against underenforcement or capture. Overlap may also produce inconsistent commands and strategic forum selection. The optimal allocation depends on externalities, expertise, and coordination mechanisms.",
    alternativesAndLimits:
      "Exclusive federal supervision, concurrent enforcement, referral and information-sharing, minimum federal floors, and conflict-preemption rules offer different tradeoffs. Economic federalism helps compare institutions but cannot substitute for the statutory allocation of authority interpreted by the Court.",
    researchQuestions: [
      "When does concurrent enforcement correct underenforcement rather than duplicate it?",
      "Which coordination rules preserve local information while limiting inconsistent obligations?"
    ]
  },
  "hadley-v-baxendale-1854": {
    institutionalProblem:
      "The remoteness rule allocates the burden of communicating unusual loss exposure before breach and limits damages when that information was not shared.",
    economicAnalysis:
      "Limiting recovery to ordinary or communicated losses can induce the party with private information about exceptional consequences to disclose and, where useful, pay for additional protection. The rule may reduce precaution and insurance costs for ordinary transactions. It may undercompensate when communication is costly, bargaining is standardized, or the breaching party is already the cheaper risk bearer.",
    alternativesAndLimits:
      "Default damages, liquidated-damages clauses, carrier liability limits, insurance, and mandatory consumer protections allocate information and risk differently. The information-forcing account is an economic interpretation; the legal test remains grounded in the governing doctrine of recoverable contractual loss.",
    researchQuestions: [
      "Which party can identify and insure the unusual loss at lower cost?",
      "When do standardized contracts prevent meaningful disclosure or bargaining?"
    ]
  },
  "united-states-v-carroll-towing-1947": {
    institutionalProblem:
      "The case provides a structured way to ask whether the burden of precaution was justified by the probability and gravity of expected loss.",
    economicAnalysis:
      "The burden–probability–loss formulation makes the precaution tradeoff explicit and can direct attention to marginal accident avoidance. Its variables are often uncertain, interdependent, and difficult for courts to quantify. It also does not decide how rights, statutory duties, distribution, or reciprocal precautions should affect liability.",
    alternativesAndLimits:
      "Specific safety rules, industry custom, strict liability, insurance, comparative fault, and administrative regulation can outperform case-by-case balancing in some settings. The formula is an analytical aid within negligence reasoning, not a complete mathematical rule for every accident case.",
    researchQuestions: [
      "Which actor could alter accident probability at the lowest total cost?",
      "When does a clear safety rule outperform ex post judicial balancing?"
    ]
  },
  "boomer-v-atlantic-cement-1970": {
    institutionalProblem:
      "The remedy must protect neighboring land interests while accounting for the cost and feasibility of stopping a productive but harmful activity.",
    economicAnalysis:
      "Damages can permit activity to continue when an injunction would impose very high shutdown costs, effectively converting protection from a property rule to a liability rule. That choice may reduce bilateral bargaining costs but asks the court to value continuing harm and may weaken incentives to innovate or reduce pollution.",
    alternativesAndLimits:
      "Injunctions, permanent damages, recurring damages, regulation, emissions pricing, relocation, and negotiated mitigation allocate bargaining power and valuation risk differently. Aggregate cost comparisons do not alone resolve entitlement, environmental justice, or statutory compliance questions.",
    researchQuestions: [
      "Who bears valuation error when a court prices continuing harm?",
      "Does a damages remedy preserve or weaken incentives for technological mitigation?"
    ]
  },
  "spur-industries-v-del-webb-1972": {
    institutionalProblem:
      "The case separates entitlement protection from relocation cost when a lawful activity and later residential development become incompatible.",
    economicAnalysis:
      "An injunction paired with indemnification can stop a public nuisance while placing some relocation cost on the developer whose expansion brought residents to the conflict. The remedy recognizes timing, reliance, and reciprocal causation. It may improve incentives for land-use planning but requires courts to define compensable costs and the relevant causal boundary.",
    alternativesAndLimits:
      "Zoning, buffers, disclosure to purchasers, negotiated easements, damages, relocation assistance, and prospective regulation may prevent or reallocate similar conflicts. The tailored remedy depends on the case’s equitable and public-nuisance setting and should not be generalized without attention to governing law.",
    researchQuestions: [
      "Which party had the lower-cost opportunity to anticipate and avoid incompatible land use?",
      "How should a remedy distinguish private reliance from broader public harm?"
    ]
  },
  "palsgraf-v-long-island-railroad-1928": {
    institutionalProblem:
      "Accident law needs a limiting principle when careless conduct initiates an extended causal chain whose ultimate victim and mechanism of injury were difficult to foresee.",
    economicAnalysis:
      "A scope-of-risk limit can reduce open-ended liability, insurance costs, and adjudication over remote harms, but an overly narrow limit may leave actors with too little incentive to account for low-probability spillovers. The rule also affects which party must investigate unusual risks and who bears residual loss.",
    alternativesAndLimits:
      "Foreseeability, directness, statutory safety rules, enterprise liability, insurance, and no-fault compensation allocate remoteness and error costs differently. Economic analysis does not determine the doctrinal choice between Cardozo's duty framework and Andrews's broader duty plus proximate-cause approach.",
    researchQuestions: [
      "Which risks could the defendant process at reasonable cost before acting?",
      "How should liability account for very low-probability but potentially large harms?"
    ]
  },
  "escola-v-coca-cola-bottling-1944": {
    institutionalProblem:
      "Consumers injured by mass-produced goods may be unable to identify the precise manufacturing failure even when the producer controls the relevant process and evidence.",
    economicAnalysis:
      "Res ipsa and strict liability can shift information and accident costs toward manufacturers that can monitor production, aggregate claims, insure, and reflect expected losses in prices. Liability may also increase product prices and litigation costs, and can create weak consumer-care incentives unless defenses preserve bilateral precaution.",
    alternativesAndLimits:
      "Negligence, warranty, strict products liability, regulation, recalls, insurance, and compensation funds offer different combinations of proof, prevention, and loss spreading. Traynor's concurrence supplied an influential policy argument, while the court's formal holding rested on res ipsa loquitur.",
    researchQuestions: [
      "Which actor can produce defect and precaution evidence at lower cost?",
      "How should liability preserve incentives for safe manufacturing and careful consumer use?"
    ]
  },
  "guth-v-loft-1939": {
    institutionalProblem:
      "Corporate law must distinguish legitimate personal entrepreneurship from a fiduciary's hidden appropriation of opportunities, assets, and information belonging to the corporation.",
    economicAnalysis:
      "A corporate-opportunity rule reduces monitoring costs and discourages fiduciaries from diverting valuable projects, but a vague rule can chill independent investment or force firms to evaluate opportunities they cannot use. Disclosure and disinterested approval can lower classification uncertainty.",
    alternativesAndLimits:
      "Advance waivers, line-of-business tests, interest-or-expectancy tests, board consent, compensation, and constructive trusts allocate opportunity and proof differently. The economic account does not replace the fact-sensitive fiduciary inquiry required by Delaware law.",
    researchQuestions: [
      "Which opportunity characteristics most reliably separate corporate assets from personal projects?",
      "When do advance waivers reduce transaction costs without weakening loyalty?"
    ]
  },
  "marchand-v-barnhill-2019": {
    institutionalProblem:
      "A board needs enough information to oversee a risk capable of destroying the firm's core business without converting directors into day-to-day operational managers.",
    economicAnalysis:
      "Board-level reporting can reduce the probability and duration of catastrophic compliance failures by creating escalation channels and independent attention. Oversight duties may also generate defensive reporting and information overload, so the value of monitoring depends on risk concentration, legal mandates, and the board's ability to act on signals.",
    alternativesAndLimits:
      "Dedicated committees, periodic dashboards, external audits, whistleblower channels, regulatory reporting, insurance, and executive incentives can complement fiduciary oversight. Marchand addresses a pleading-stage inference of bad faith and does not make directors insurers against every operational failure.",
    researchQuestions: [
      "How should firms identify which risks require regular board-level reporting?",
      "What evidence distinguishes a functioning information system from a paper compliance program?"
    ]
  },
  "sec-v-texas-gulf-sulphur-1968": {
    institutionalProblem:
      "Securities law must determine when informational advantage from corporate access becomes unlawful trading and when uncertain developments become material enough to disclose.",
    economicAnalysis:
      "Disclose-or-abstain rules can protect confidence and prevent insiders from privately appropriating information produced for the firm. Broad restrictions can reduce insider compensation through trading and affect incentives to produce information, while enforcement must distinguish valuable analysis from access-based advantage.",
    alternativesAndLimits:
      "Trading windows, preclearance, Rule 10b5-1 plans, disgorgement, issuer disclosure, and private or public enforcement distribute monitoring and error costs differently. Later Supreme Court doctrine supplies additional duty-based limits that must be considered alongside the case.",
    researchQuestions: [
      "How should probability and magnitude be operationalized for uncertain corporate events?",
      "Which trading restrictions deter appropriation without suppressing legitimate information production?"
    ]
  },
  "omnicare-v-laborers-2015": {
    institutionalProblem:
      "Issuers need to communicate judgments and beliefs, but investors also need protection when opinion language conceals contrary facts or a lack of genuine belief.",
    economicAnalysis:
      "A contextual opinion standard can reduce hindsight liability that would discourage useful forecasts while requiring disclosure of facts that materially undermine the impression conveyed. The standard shifts attention toward information sets, speaker belief, drafting cost, and reasonable-investor interpretation.",
    alternativesAndLimits:
      "Safe harbors, cautionary language, expert verification, factual disclosure, public enforcement, and scienter requirements offer different balances. The governing statutory text and the distinction between subjective falsity and misleading omission remain essential.",
    researchQuestions: [
      "Which omitted facts materially conflict with the basis a reasonable investor would infer?",
      "Does contextual liability improve disclosure or mainly encourage longer disclaimers?"
    ]
  },
  "lorenzo-v-sec-2019": {
    institutionalProblem:
      "Antifraud law must allocate responsibility among authors, supervisors, disseminators, and intermediaries who perform different steps in communicating a deception.",
    economicAnalysis:
      "Scheme liability can prevent actors from avoiding primary responsibility by dividing drafting and distribution functions. Overlap among antifraud provisions may also increase uncertainty and blur the distinction between primary and secondary liability, especially in private litigation with reliance and causation requirements.",
    alternativesAndLimits:
      "Aiding-and-abetting enforcement, control-person liability, gatekeeper duties, sanctions against the maker, and disclosure controls distribute responsibility differently. The decision concerned intentional dissemination and does not eliminate other statutory elements or private-action limits.",
    researchQuestions: [
      "Which forms of participation should trigger primary rather than secondary liability?",
      "How does liability affect compliance by brokers and other communication intermediaries?"
    ]
  },
  "sec-v-joiner-leasing-1943": {
    institutionalProblem:
      "Securities regulation must classify fundraising arrangements by their economic operation without making every sale of property accompanied by a promise a regulated security.",
    economicAnalysis:
      "Economic-reality review reduces form-based avoidance when promoters separate an investment into property and service components. A broad functional test can also increase classification uncertainty and compliance costs for ordinary commercial transactions, so the value of flexibility must be weighed against the cost of unclear boundaries.",
    alternativesAndLimits:
      "Bright-line definitions, activity-specific exemptions, tailored disclosure, antifraud-only rules, and no-action guidance offer different combinations of certainty and protection. Joiner concerned the integrated offer and promotional undertaking; it does not make the transfer of a lease by itself a security.",
    researchQuestions: [
      "Which promotional commitments transform a property transfer into an investment arrangement?",
      "How should legal design limit form arbitrage without regulating ordinary asset sales?"
    ]
  },
  "sec-v-ralston-purina-1953": {
    institutionalProblem:
      "The private-offering exemption must identify when investors can evaluate an issuer without the information and verification supplied by registration.",
    economicAnalysis:
      "An information-access test directs disclosure costs toward offerings in which offerees face material information disadvantages. Employee status is an unreliable proxy because workplace position may supply knowledge to executives but not to dispersed rank-and-file staff. A fact-intensive test improves fit while increasing ex ante uncertainty for issuers.",
    alternativesAndLimits:
      "Accredited-investor criteria, numerical safe harbors, information-delivery requirements, resale restrictions, and transaction caps can operationalize the exemption. Those rules do not erase the statutory inquiry into whether an offering is public, and sophistication should not be conflated automatically with access to issuer information.",
    researchQuestions: [
      "Should private-offering eligibility turn on wealth, sophistication, information access, or a combination?",
      "Who can produce and verify offering information at the lowest cost?"
    ]
  },
  "sec-v-capital-gains-research-bureau-1963": {
    institutionalProblem:
      "Investment advisers can influence client trading while holding positions that allow them to profit from the market response to their own recommendations.",
    economicAnalysis:
      "Conflict disclosure can reduce agency and information costs by allowing clients to discount advice or choose another adviser. A prophylactic fiduciary standard also reduces the SEC's burden of proving subjective intent and completed harm, though extensive compliance obligations may deter benign trading and produce disclosure that clients do not process.",
    alternativesAndLimits:
      "Trading bans, preclearance, personal-account reporting, restricted lists, separation of research and trading, and client consent address the conflict at different points. The case supports disclosure of a material practice; it does not establish that disclosure cures every adviser conflict.",
    researchQuestions: [
      "When is conflict disclosure sufficient, and when should proprietary trading be prohibited?",
      "How can enforcement distinguish informative recommendations from price effects exploited by an adviser?"
    ]
  },
  "sec-v-national-securities-1969": {
    institutionalProblem:
      "An insurer merger can implicate state supervision of insurance solvency and federal protection of shareholders, creating overlapping authority and potentially conflicting remedies.",
    economicAnalysis:
      "Concurrent regulation can combine state industry knowledge with federal antifraud expertise and reduce gaps created by narrow jurisdictional assignments. It can also generate duplicative review, inconsistent commands, and uncertainty about transaction finality. Compatibility depends on whether each regime protects a distinct relationship and whether remedies can be coordinated.",
    alternativesAndLimits:
      "Express preemption, primary-jurisdiction referral, coordinated review, information sharing, and remedy sequencing can manage overlap. The decision distinguished shareholder regulation from the insurer-policyholder relationship and should not be read as eliminating McCarran-Ferguson protection for the business of insurance.",
    researchQuestions: [
      "When does overlapping enforcement supply useful redundancy rather than costly duplication?",
      "How should courts coordinate remedies after a state regulator has approved a transaction?"
    ]
  },
  "aaron-v-sec-1980": {
    institutionalProblem:
      "Public antifraud enforcement must calibrate the defendant's required mental state across provisions that use different language and target different forms of misconduct.",
    economicAnalysis:
      "Scienter requirements can reduce false positives and protect useful but imperfect market communication, while negligence liability lowers detection and proof costs for materially misleading statements or practices. Differentiated standards allow enforcement to match culpability and conduct, but overlap can complicate charging, settlement, and compliance planning.",
    alternativesAndLimits:
      "Tiered sanctions, negligence-based conduct rules, supervisory duties, internal controls, and disclosure review can supplement intent-based fraud claims. Aaron interprets specific statutory clauses; it does not make negligence sufficient under Rule 10b-5 merely because the SEC is the plaintiff.",
    researchQuestions: [
      "How do different mental-state requirements change investigation, settlement, and deterrence?",
      "Which sanctions should depend on intent rather than the magnitude of investor harm?"
    ]
  },
  "sec-v-zandford-2002": {
    institutionalProblem:
      "Federal securities fraud must reach schemes implemented through securities transactions without converting every theft by a broker into a federal securities claim.",
    economicAnalysis:
      "A functional in-connection-with test prevents brokers from evading antifraud law by sequencing a sale and misappropriation as formally separate steps. Expansive coverage can duplicate state fraud, conversion, and fiduciary remedies, so the transaction must do meaningful work in the scheme rather than merely provide background.",
    alternativesAndLimits:
      "Custody segregation, account confirmations, independent audits, fidelity insurance, restitution, and state fiduciary enforcement can prevent or redress broker theft. The holding depended on securities sales being the mechanism of the continuing scheme and does not federalize misconduct unrelated to a purchase or sale.",
    researchQuestions: [
      "What causal relationship should connect a securities transaction to a fraudulent scheme?",
      "Which custody controls reduce broker misappropriation at lower cost than ex post litigation?"
    ]
  },
  "gabelli-v-sec-2013": {
    institutionalProblem:
      "The limitations rule must balance the government's difficulty in detecting concealed misconduct against defendants' interest in repose and reliable adjudication.",
    economicAnalysis:
      "Occurrence-based accrual encourages timely investigation and prevents open-ended penalty exposure, reducing stale evidence and long-tail compliance uncertainty. It may also weaken deterrence for fraud designed to remain hidden beyond the limitations period. The effect depends on detection technology, reporting incentives, and the availability of non-penalty remedies.",
    alternativesAndLimits:
      "Express discovery rules, statutory tolling, longer limitations periods, whistleblower incentives, recordkeeping mandates, and negotiated tolling agreements shift detection and repose costs. Gabelli concerned government civil penalties and did not decide every remedy or equitable tolling question.",
    researchQuestions: [
      "How should a limitations period reflect the agency's investigative capacity and the concealability of misconduct?",
      "Do fixed accrual rules improve enforcement effort or disproportionately reward successful concealment?"
    ]
  },
  "kokesh-v-sec-2017": {
    institutionalProblem:
      "A monetary remedy labeled disgorgement may function as compensation, deterrence, or punishment, and its classification determines how far back the SEC may reach.",
    economicAnalysis:
      "Applying a limitations period constrains stale claims and indefinite monetary exposure while increasing pressure on the SEC to identify and file cases promptly. The constraint may reduce recovery and deterrence for long-running concealed schemes. Remedy design also affects whether recovered value reaches investors or the Treasury.",
    alternativesAndLimits:
      "Civil penalties, injunctions, receiverships, investor actions, tolling agreements, and compensation-focused distributions serve different objectives. Kokesh classified disgorgement only for Section 2462 and expressly left its underlying equitable authority unresolved, a question later addressed in Liu.",
    researchQuestions: [
      "How does a five-year limit change the SEC's investigation and case-selection incentives?",
      "Which characteristics make a monetary sanction compensatory rather than punitive?"
    ]
  },
  "liu-v-sec-2020": {
    institutionalProblem:
      "SEC monetary relief must remove gains from wrongdoing without becoming an unauthorized penalty untethered to net profit or investor compensation.",
    economicAnalysis:
      "Limiting recovery to net profits reduces overdeterrence and aligns the remedy with unjust enrichment, while distribution to victims supports compensation and enforcement legitimacy. Calculating legitimate expenses and individual gains can be costly, and strict tracing or distribution requirements may make recovery impractical in diffuse-loss cases.",
    alternativesAndLimits:
      "Civil penalties can pursue punishment directly, while restitution, receiverships, Fair Fund distributions, individual liability, and expense-allocation rules can target compensation. Liu preserved a bounded equitable remedy and remanded unresolved questions about expenses, joint liability, and distribution; it did not validate every disgorgement practice.",
    researchQuestions: [
      "Which business expenses are legitimate when an enterprise combines lawful activity with fraud?",
      "When do victim-distribution costs justify a different monetary remedy or enforcement strategy?"
    ]
  },
  "sec-v-jarkesy-2024": {
    institutionalProblem:
      "The enforcement system must allocate securities-fraud penalty claims between specialized agency adjudication and Article III courts with juries.",
    economicAnalysis:
      "Agency adjudication can concentrate expertise and shorten some proceedings, but combining prosecution and adjudication can create perceived or actual procedural costs. Jury trials add independent fact-finding and legitimacy while increasing discovery, litigation expense, and case duration. Forum requirements may therefore change the SEC's charging and settlement mix.",
    alternativesAndLimits:
      "The SEC can seek fraud penalties in federal court, settle claims, use administrative proceedings for matters outside the holding, and employ non-penalty compliance tools where authorized. Jarkesy addressed civil penalties for claims analogous to common-law fraud; it did not categorically invalidate all SEC administrative adjudication or decide the other constitutional questions presented.",
    researchQuestions: [
      "How will jury-trial requirements alter SEC case selection, settlement, and enforcement delay?",
      "Which administrative remedies remain efficient and constitutionally available after Jarkesy?"
    ]
  },
  "fdic-v-philadelphia-gear-1986": {
    institutionalProblem:
      "Deposit insurance must separate protected money entrusted to banks from contingent commercial-credit claims that could expand the public guarantee beyond deposit funding.",
    economicAnalysis:
      "A clear insurance boundary can preserve confidence in transaction accounts while limiting subsidy, moral hazard, and strategic relabeling of uninsured credit. Formal distinctions may nevertheless invite regulatory arbitrage when instruments with similar economic functions receive different coverage.",
    alternativesAndLimits:
      "Risk-based premiums, explicit product disclosures, collateral rules, private guarantees, activity-based coverage, and resolution priority can supplement categorical definitions. The statutory definition and instrument's actual funding structure control the legal result.",
    researchQuestions: [
      "Which economic characteristics should distinguish insured deposits from contingent credit?",
      "How do coverage boundaries change bank and customer choices among funding instruments?"
    ]
  }
};

const FIELD_QUESTIONS: Record<CaseRecord["field"], string[]> = {
  "Foundations of Law and Economics": [
    "How does the rule allocate entitlements, precaution, information, or bargaining power?",
    "Would a different remedy change transaction, error, or enforcement costs?"
  ],
  "Corporate Law": [
    "Which corporate actor gains authority or bears monitoring responsibility under the rule?",
    "How does the rule affect agency costs without unduly impairing informed business judgment?"
  ],
  "Securities Regulation": [
    "How does the rule affect information production, investor reliance, and enforcement costs?",
    "What are the likely error costs for lawful market activity and for undetected misconduct?"
  ],
  "Financial Law": [
    "How does the allocation of regulatory authority affect coordination, expertise, and capture risk?",
    "Which private or systemic risks remain outside the court’s doctrinal inquiry?"
  ]
};

export function getCaseAnalysis(caseRecord: CaseRecord): CaseAnalysis | null {
  return ANALYSES[caseRecord.slug] ?? null;
}

export function getCaseResearchQuestions(caseRecord: CaseRecord): string[] {
  return ANALYSES[caseRecord.slug]?.researchQuestions ?? FIELD_QUESTIONS[caseRecord.field];
}
