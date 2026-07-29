export type ConceptEntry = {
  term: string;
  field: string;
  level: "Introductory" | "Intermediate" | "Advanced";
  definition: string;
  whyItMatters: string;
  related: string[];
  formula?: string;
  caution?: string;
  referenceLabel?: string;
  referenceHref?: string;
};

export const CONCEPT_ENTRIES: ConceptEntry[] = [
  {
    term: "Agency Costs",
    field: "Corporate Governance",
    level: "Introductory",
    definition:
      "The costs that arise when one party controls resources or makes decisions on behalf of another party whose interests may differ.",
    whyItMatters:
      "Agency costs explain why boards, fiduciary duties, disclosure, compensation design, shareholder voting, and monitoring institutions matter in corporate law.",
    related: ["monitoring", "bonding", "residual loss", "shareholder protection"]
  },
  {
    term: "Transaction Costs",
    field: "Institutional Analysis",
    level: "Introductory",
    definition:
      "The costs of using markets or legal institutions, including search, bargaining, drafting, monitoring, enforcement, and dispute resolution costs.",
    whyItMatters:
      "Transaction-cost reasoning helps compare firms, contracts, markets, regulation, and courts as alternative governance mechanisms.",
    related: ["Coase", "private ordering", "institutional choice", "contracting"]
  },
  {
    term: "Coase Theorem",
    field: "Foundations of Law and Economics",
    level: "Introductory",
    definition:
      "A proposition associated with Coasean analysis: when transaction costs are zero and rights are clearly assigned, voluntary bargaining can lead to an efficient allocation regardless of the initial legal entitlement.",
    whyItMatters:
      "The point is less that transaction costs are usually absent than that legal analysis should ask when bargaining is feasible, when it fails, and how legal rules affect the cost of reaching efficient arrangements.",
    related: ["transaction costs", "bargaining", "entitlements", "social cost"]
  },
  {
    term: "Externalities",
    field: "Foundations of Law and Economics",
    level: "Introductory",
    definition:
      "Costs or benefits of an activity that are not fully borne or captured by the actor making the decision.",
    whyItMatters:
      "Externalities are a basic reason legal systems define property rights, impose liability, require disclosure, regulate risk, or create public enforcement mechanisms.",
    related: ["social cost", "internalization", "property rights", "liability"]
  },
  {
    term: "Social Cost",
    field: "Foundations of Law and Economics",
    level: "Introductory",
    definition:
      "The total cost of an activity or institutional arrangement, including private costs, external harms, administrative costs, error costs, and the costs of avoiding or resolving conflicts.",
    whyItMatters:
      "Social-cost analysis shifts legal reasoning from identifying a single wrongdoer to comparing institutional arrangements for reducing the combined costs of harm, prevention, enforcement, and adjudication.",
    related: ["Coase", "externalities", "least-cost avoider", "institutional choice"]
  },
  {
    term: "Property Rules and Liability Rules",
    field: "Foundations of Law and Economics",
    level: "Intermediate",
    definition:
      "Two ways of protecting entitlements: property rules require the entitlement holder's consent to transfer, while liability rules allow transfer upon payment of an officially determined amount.",
    whyItMatters:
      "The distinction helps analyze injunctions, damages, nuisance, takings, contract remedies, corporate control rights, and regulatory compensation when bargaining costs or valuation problems differ.",
    related: ["entitlements", "injunctions", "damages", "Calabresi and Melamed"]
  },
  {
    term: "Least-Cost Avoider",
    field: "Foundations of Law and Economics",
    level: "Intermediate",
    definition:
      "The party or institution that can avoid a harm, reduce a risk, or produce relevant information at the lowest total cost.",
    whyItMatters:
      "Least-cost-avoider reasoning informs negligence, product liability, gatekeeper duties, corporate monitoring, and financial supervision by asking who can prevent losses most efficiently.",
    related: ["accident costs", "risk allocation", "deterrence", "information production"]
  },
  {
    term: "Expected Sanction",
    field: "Public Enforcement",
    level: "Intermediate",
    definition:
      "The expected cost of violating a rule, commonly understood as the probability of detection and punishment multiplied by the sanction imposed if enforcement succeeds.",
    whyItMatters:
      "Expected-sanction analysis is central to deterrence in securities enforcement, financial regulation, corporate compliance, and public enforcement design.",
    related: ["deterrence", "detection probability", "sanctions", "Becker"]
  },
  {
    term: "Kaldor-Hicks Efficiency",
    field: "Welfare Analysis",
    level: "Intermediate",
    definition:
      "A criterion under which a legal or policy change is efficient if the gains to winners are large enough that they could hypothetically compensate losers, even if compensation is not actually paid.",
    whyItMatters:
      "The criterion is often used in economic analysis of law, but it also makes distributional and normative limits visible because potential compensation does not itself settle questions of fairness or legitimacy.",
    related: ["welfare", "cost-benefit analysis", "distribution", "Pareto efficiency"]
  },
  {
    term: "Institutional Change",
    field: "Institutional Analysis",
    level: "Advanced",
    definition:
      "The process through which formal rules, informal norms, enforcement mechanisms, and organizational arrangements evolve over time.",
    whyItMatters:
      "Institutional-change analysis helps explain why legal transplants, corporate-governance reforms, securities regulation, and financial-law rules operate differently across jurisdictions and historical settings.",
    related: ["North", "path dependence", "formal rules", "informal constraints"]
  },
  {
    term: "Legal Entitlements",
    field: "Foundations of Law and Economics",
    level: "Introductory",
    definition:
      "Legally protected interests, claims, powers, or control positions assigned to persons or institutions, with protection supplied through rules such as injunctions, damages, or inalienability.",
    whyItMatters:
      "Entitlement analysis asks not only who has a right, but also how that right is protected, how it may be transferred, and which institution should value it when bargaining is costly.",
    related: ["property rules", "liability rules", "inalienability", "Calabresi and Melamed"]
  },
  {
    term: "Accident Costs",
    field: "Foundations of Law and Economics",
    level: "Introductory",
    definition:
      "The combined costs associated with accidents, including accident losses, prevention expenditures, administrative costs, risk-bearing costs, and the institutional costs of allocating losses.",
    whyItMatters:
      "Accident-cost analysis turns tort law into a comparative institutional problem: legal rules can be evaluated by how they reduce harms, allocate risk, preserve incentives, and administer compensation.",
    related: ["Calabresi", "least-cost avoider", "risk distribution", "tort law"]
  },
  {
    term: "Error Costs",
    field: "Legal Process",
    level: "Intermediate",
    definition:
      "The social costs generated when legal institutions make mistaken decisions, including false positives, false negatives, overdeterrence, underdeterrence, and reliance on inaccurate information.",
    whyItMatters:
      "Error costs are central to litigation, enforcement, and regulatory design because more accurate decision-making often requires additional procedure, investigation, or delay.",
    related: ["legal process", "public enforcement", "administrative costs", "deterrence"]
  },
  {
    term: "Marginal Deterrence",
    field: "Public Enforcement",
    level: "Intermediate",
    definition:
      "The design of sanctions so that more harmful violations face higher expected penalties than less harmful violations, preserving incentives to avoid additional social harm.",
    whyItMatters:
      "Marginal deterrence matters when actors can choose among violations of different severity, as in financial misconduct, repeat offenses, disclosure violations, or escalating forms of legal noncompliance.",
    related: ["expected sanction", "sanctions", "public enforcement", "Polinsky and Shavell"]
  },
  {
    term: "Positive and Normative Analysis",
    field: "Foundations of Law and Economics",
    level: "Introductory",
    definition:
      "Positive analysis explains or predicts legal rules and behavior, while normative analysis evaluates which legal rules or institutions should be adopted under specified criteria.",
    whyItMatters:
      "The distinction helps readers separate descriptive claims about how law affects incentives from evaluative claims about efficiency, welfare, distribution, legitimacy, or institutional design.",
    related: ["efficiency", "welfare", "institutional design", "legal policy"]
  },
  {
    term: "Wealth Maximization",
    field: "Welfare Analysis",
    level: "Advanced",
    definition:
      "A historically influential but contested normative criterion associated with economic analysis of law, especially Posner, that evaluates legal rules by their capacity to increase the value of resources.",
    whyItMatters:
      "The concept is important because it shaped early law-and-economics debates while also exposing disputes over distribution, rights, willingness to pay, and the relation between efficiency and welfare.",
    related: ["Kaldor-Hicks efficiency", "welfare", "Posner", "distribution"]
  },
  {
    term: "Behavioral Law and Economics",
    field: "Foundations of Law and Economics",
    level: "Introductory",
    definition:
      "An approach to legal analysis that uses evidence about bounded rationality, bounded willpower, social preferences, heuristics, and biases to study how people actually respond to legal rules.",
    whyItMatters:
      "It modifies standard incentive analysis by asking when legal actors, firms, investors, consumers, judges, and regulators deviate from rational-actor assumptions in systematic ways.",
    related: ["bounded rationality", "choice architecture", "prospect theory", "debiasing"]
  },
  {
    term: "Bounded Rationality",
    field: "Foundations of Law and Economics",
    level: "Introductory",
    definition:
      "A decision-making condition in which actors face limits of information, attention, cognition, time, or computational capacity.",
    whyItMatters:
      "Bounded rationality helps explain why legal rules may need to account for complexity, salience, defaults, contracting limits, administrative burdens, and institutional competence.",
    related: ["heuristics", "information costs", "contract complexity", "Williamson"]
  },
  {
    term: "Prospect Theory",
    field: "Foundations of Law and Economics",
    level: "Intermediate",
    definition:
      "A behavioral model of decision-making under risk in which people evaluate gains and losses relative to reference points and often weigh probabilities nonlinearly.",
    whyItMatters:
      "Prospect theory is used to analyze settlement behavior, damages, risk regulation, investor behavior, consumer contracts, and legal rules that change reference points.",
    related: ["loss aversion", "framing", "reference dependence", "litigation"]
  },
  {
    term: "Loss Aversion",
    field: "Foundations of Law and Economics",
    level: "Intermediate",
    definition:
      "The tendency for losses to matter more to decision makers than equivalent gains, measured relative to a reference point.",
    whyItMatters:
      "Loss aversion can affect bargaining, settlement, default-rule stickiness, investor trading, compensation demands, and resistance to legal or regulatory change.",
    related: ["prospect theory", "endowment effect", "status quo bias", "settlement"]
  },
  {
    term: "Endowment Effect",
    field: "Foundations of Law and Economics",
    level: "Intermediate",
    definition:
      "A pattern in which people often demand more to give up an entitlement or object than they would be willing to pay to acquire it.",
    whyItMatters:
      "The endowment effect complicates entitlement analysis because initial allocation may influence valuation, bargaining, waiver, damages, and default-rule effects.",
    related: ["legal entitlements", "loss aversion", "status quo bias", "property rules"]
  },
  {
    term: "Status Quo Bias",
    field: "Foundations of Law and Economics",
    level: "Introductory",
    definition:
      "A tendency to prefer an existing state or default position even when alternatives are available.",
    whyItMatters:
      "Status quo bias explains why default rules, opt-in and opt-out structures, disclosure design, retirement savings rules, and consumer-contract settings can strongly affect behavior.",
    related: ["default rules", "choice architecture", "endowment effect", "inertia"]
  },
  {
    term: "Choice Architecture",
    field: "Foundations of Law and Economics",
    level: "Intermediate",
    definition:
      "The institutional design of the environment in which choices are presented, including defaults, order, framing, timing, salience, and complexity.",
    whyItMatters:
      "Choice architecture matters because legal systems often structure decisions without banning options, especially in disclosure, consumer finance, corporate voting, savings, and administrative processes.",
    related: ["default rules", "nudges", "salience", "sludge"]
  },
  {
    term: "Nudge Design",
    field: "Foundations of Law and Economics",
    level: "Advanced",
    definition:
      "The design of defaults, reminders, framing, timing, and simplification to influence decisions without eliminating available options.",
    whyItMatters:
      "Nudge design provides a neutral framework for testing how small institutional changes affect savings, disclosure comprehension, consumer choice, voting, and administrative compliance.",
    related: ["choice architecture", "default rules", "bounded willpower", "empirical evaluation"],
    caution:
      "A nudge should not be assumed effective or welfare-improving. Evaluation should identify the objective, comparison condition, heterogeneous effects, opt-out costs, and the evidence supporting the intervention."
  },
  {
    term: "Debiasing through Law",
    field: "Foundations of Law and Economics",
    level: "Advanced",
    definition:
      "The use of legal rules, institutional design, or decision procedures to reduce predictable judgment errors or make decisions less vulnerable to bias.",
    whyItMatters:
      "The concept helps evaluate whether law should correct individual mistakes directly, design around them, or instead avoid interventions that may introduce regulator or judicial bias.",
    related: ["behavioral law and economics", "judicial bias", "choice architecture", "institutional competence"]
  },
  {
    term: "Behavioral Market Failure",
    field: "Foundations of Law and Economics",
    level: "Advanced",
    definition:
      "A market failure that arises when firms respond to consumers' systematic mistakes, limited attention, optimism, present bias, or misunderstanding of complex products.",
    whyItMatters:
      "Behavioral market failure is central to consumer finance, securities disclosure, standard-form contracts, product design, and debates over whether competition corrects or exploits mistakes.",
    related: ["consumer contracts", "disclosure", "salience", "present bias"]
  },
  {
    term: "Hohfeldian Incidents",
    field: "Legal Theory and Concepts",
    level: "Introductory",
    definition:
      "A framework that separates legal relations into eight basic positions: claim-right, duty, privilege, no-right, power, liability, immunity, and disability.",
    whyItMatters:
      "Hohfeldian analysis helps readers avoid treating every legal advantage as a generic right. It clarifies who owes a duty, who has liberty, who can alter legal relations, and who is protected from another person's legal power.",
    related: ["claim-right", "duty", "privilege", "no-right", "power", "liability", "immunity", "disability"]
  },
  {
    term: "Claim-Right",
    field: "Legal Theory and Concepts",
    level: "Introductory",
    definition:
      "A legal position in which one person is entitled to have another person act or refrain from acting in a specified way.",
    whyItMatters:
      "A claim-right is meaningful only by reference to a correlative duty. In corporate, securities, and financial law, the question is often whether a statute, contract, fiduciary rule, or regulatory standard gives an actor an enforceable claim against another actor.",
    related: ["duty", "no-right", "jural correlatives", "fiduciary duties", "investor protection"]
  },
  {
    term: "Duty",
    field: "Legal Theory and Concepts",
    level: "Introductory",
    definition:
      "A legal position in which one person is required to act or refrain from acting for the benefit of another person's claim-right.",
    whyItMatters:
      "Duty language is common in fiduciary law, securities disclosure, banking supervision, and contract. Hohfeld's point is that a duty should be tied to the specific person or institution holding the correlative claim-right.",
    related: ["claim-right", "privilege", "fiduciary duties", "disclosure duties", "standard of care"]
  },
  {
    term: "Privilege",
    field: "Legal Theory and Concepts",
    level: "Introductory",
    definition:
      "A legal liberty to act or refrain from acting because the actor is under no duty to do otherwise with respect to another person.",
    whyItMatters:
      "Privilege clarifies that not every protected legal position is a claim against someone else. Many corporate, market, and contractual freedoms are liberties rather than enforceable claims.",
    related: ["no-right", "duty", "legal liberty", "private ordering", "Hohfeldian incidents"]
  },
  {
    term: "No-Right",
    field: "Legal Theory and Concepts",
    level: "Introductory",
    definition:
      "The correlative position of another person's privilege: a person with a no-right lacks a claim that the privileged actor act otherwise.",
    whyItMatters:
      "No-right is useful because it marks the absence of an enforceable claim, not the absence of all legal relevance. It helps distinguish disappointment, economic loss, or exposure to competition from a legal wrong.",
    related: ["privilege", "claim-right", "competition", "legal entitlement", "Hohfeldian incidents"]
  },
  {
    term: "Power",
    field: "Legal Theory and Concepts",
    level: "Intermediate",
    definition:
      "A legal ability to change legal relations, whether by creating, modifying, extinguishing, or transferring legal positions.",
    whyItMatters:
      "Corporate voting, board authorization, contract formation, rescission, regulatory orders, and enforcement actions often matter because they exercise powers that alter legal relations.",
    related: ["liability", "disability", "authority", "corporate voting", "regulatory power"]
  },
  {
    term: "Liability",
    field: "Legal Theory and Concepts",
    level: "Intermediate",
    definition:
      "The correlative position of another person's power: being legally subject to a change in one's legal relations through that person's act.",
    whyItMatters:
      "In Hohfeld's usage, liability is broader than monetary responsibility for wrongdoing. Shareholders, directors, contracting parties, regulated firms, and defendants may all be liable in the sense that another actor can alter their legal position.",
    related: ["power", "immunity", "legal relations", "corporate voting", "regulatory authority"]
  },
  {
    term: "Immunity",
    field: "Legal Theory and Concepts",
    level: "Intermediate",
    definition:
      "A legal protection against another person's power to alter one's legal relations.",
    whyItMatters:
      "Immunity helps analyze limits on private ordering, constitutional constraints, corporate charter protections, procedural protections, and statutory restrictions on regulators or counterparties.",
    related: ["disability", "liability", "legal protection", "limits on power", "institutional constraints"]
  },
  {
    term: "Disability",
    field: "Legal Theory and Concepts",
    level: "Intermediate",
    definition:
      "The correlative position of another person's immunity: the absence of legal power to alter that person's legal relations.",
    whyItMatters:
      "Disability identifies limits on legal authority. It is useful when asking whether a board, shareholder, regulator, court, or contracting party has the legal power it purports to exercise.",
    related: ["immunity", "power", "authority", "ultra vires", "institutional competence"]
  },
  {
    term: "Jural Correlatives and Opposites",
    field: "Legal Theory and Concepts",
    level: "Intermediate",
    definition:
      "Hohfeldian correlatives are claim-right and duty, privilege and no-right, power and liability, and immunity and disability; opposites are claim-right and no-right, privilege and duty, power and disability, and immunity and liability.",
    whyItMatters:
      "The relationship map keeps legal analysis precise. It prevents a reader from asking whether someone has a generic right and instead asks which legal relation exists, who occupies the correlative position, and what legal change follows.",
    related: ["claim-right", "duty", "privilege", "no-right", "power", "liability", "immunity", "disability"]
  },
  {
    term: "Efficient Capital Markets",
    field: "Securities Regulation",
    level: "Intermediate",
    definition:
      "A theory that market prices can incorporate available information quickly, though the strength and legal implications of that claim vary by context.",
    whyItMatters:
      "The idea informs disclosure policy, fraud-on-the-market reasoning, event studies, market manipulation analysis, and securities damages.",
    related: ["disclosure", "event studies", "market prices", "information asymmetry"]
  },
  {
    term: "Private Enforcement",
    field: "Securities Regulation",
    level: "Intermediate",
    definition:
      "The use of private lawsuits, liability standards, and investor claims to enforce legal duties rather than relying only on public regulators.",
    whyItMatters:
      "Private enforcement shapes deterrence, litigation incentives, disclosure credibility, and the allocation of enforcement costs.",
    related: ["public enforcement", "liability standards", "class actions", "deterrence"]
  },
  {
    term: "Gatekeeper Liability",
    field: "Securities Regulation",
    level: "Intermediate",
    definition:
      "Liability imposed on intermediaries such as auditors, underwriters, lawyers, rating agencies, or sponsors who can verify information or constrain misconduct.",
    whyItMatters:
      "Gatekeeper rules try to improve information quality without turning intermediaries into insurers of every market loss.",
    related: ["verification", "auditors", "underwriters", "information production"]
  },
  {
    term: "Systemic Risk",
    field: "Financial Regulation",
    level: "Introductory",
    definition:
      "The risk that distress at one institution or market segment can spread through the financial system and impair broader economic activity.",
    whyItMatters:
      "Systemic-risk analysis explains capital rules, liquidity rules, stress testing, resolution planning, and macroprudential supervision.",
    related: ["bank runs", "contagion", "macroprudential regulation", "stress testing"]
  },
  {
    term: "Macroprudential Regulation",
    field: "Financial Regulation",
    level: "Advanced",
    definition:
      "Regulation aimed at the stability of the financial system as a whole rather than only the safety of individual institutions.",
    whyItMatters:
      "It reframes financial law around spillovers, correlated exposures, leverage, short-term funding, and procyclicality.",
    related: ["capital buffers", "liquidity", "systemic externalities", "financial stability"]
  },
  {
    term: "Difference-in-Differences",
    field: "Research Methods",
    level: "Advanced",
    definition:
      "A causal-inference design that compares changes over time between treated and comparison groups, usually around a policy or legal change.",
    whyItMatters:
      "It is widely used to study corporate-law reforms, securities enforcement changes, banking rules, and regulatory interventions.",
    related: ["parallel trends", "staggered adoption", "event studies", "policy evaluation"]
  },
  {
    term: "Residual Control Rights",
    field: "Corporate Governance",
    level: "Intermediate",
    definition:
      "Rights to decide how assets are used in states of the world not fully specified by contract.",
    whyItMatters:
      "Residual control rights connect incomplete-contract theory to corporate ownership, firm boundaries, voting rights, and the allocation of authority among investors, managers, and creditors.",
    related: ["incomplete contracts", "ownership", "firm boundaries", "control rights"]
  },
  {
    term: "Asset Partitioning",
    field: "Corporate Governance",
    level: "Advanced",
    definition:
      "The legal separation of pools of assets so that particular creditors or claimants have priority over specified assets.",
    whyItMatters:
      "Asset partitioning explains why legal entities matter: corporations can separate firm assets from personal assets and support enterprise finance, creditor monitoring, and organizational continuity.",
    related: ["legal personality", "limited liability", "organizational law", "creditors"]
  },
  {
    term: "Fiduciary Duties",
    field: "Corporate Governance",
    level: "Introductory",
    definition:
      "Legal duties that require decision-makers such as directors or officers to act loyally and carefully within the scope of their entrusted authority.",
    whyItMatters:
      "Fiduciary duties are a central legal response to agency costs, especially where contracts cannot specify every future conflict or managerial decision.",
    related: ["duty of loyalty", "duty of care", "agency costs", "board oversight"]
  },
  {
    term: "Controlling Shareholder",
    field: "Corporate Governance",
    level: "Intermediate",
    definition:
      "A shareholder with enough voting power, contractual influence, or practical control to shape corporate decisions even without owning all equity.",
    whyItMatters:
      "Controlling-shareholder analysis shifts corporate governance from manager-shareholder conflict to minority protection, tunneling, related-party transactions, and freeze-out regulation.",
    related: ["minority shareholders", "self-dealing", "tunneling", "private benefits of control"]
  },
  {
    term: "Private Benefits of Control",
    field: "Corporate Governance",
    level: "Advanced",
    definition:
      "Benefits that controlling shareholders or insiders can obtain from control but that are not shared pro rata with all investors.",
    whyItMatters:
      "The concept explains control premia, ownership concentration, minority-shareholder protection, and the design of takeover, disclosure, and fiduciary-duty rules.",
    related: ["control premia", "investor protection", "ownership concentration", "self-dealing"]
  },
  {
    term: "Market for Corporate Control",
    field: "Corporate Governance",
    level: "Intermediate",
    definition:
      "A market in which control over corporate assets can shift through takeovers, mergers, proxy contests, or other control transactions.",
    whyItMatters:
      "The concept explains why takeover law, defensive tactics, tender-offer rules, and voting rights can operate as external checks on managerial performance.",
    related: ["takeovers", "control premium", "managerial discipline", "shareholder voting"]
  },
  {
    term: "Tender Offer",
    field: "Corporate Governance",
    level: "Introductory",
    definition:
      "A public offer by a bidder to purchase shares directly from target shareholders, often as a route to acquiring corporate control.",
    whyItMatters:
      "Tender offers are central to takeover law because they shift attention from board negotiation to shareholder choice, market pricing, disclosure, coercion, and the design of defensive tactics.",
    related: ["takeovers", "shareholder choice", "board veto", "disclosure"]
  },
  {
    term: "Takeover Defenses",
    field: "Corporate Governance",
    level: "Intermediate",
    definition:
      "Legal, charter-based, contractual, or transactional devices that make an unsolicited acquisition more difficult, costly, delayed, or conditional.",
    whyItMatters:
      "Takeover defenses sit at the center of the debate over managerial entrenchment, bargaining power, shareholder choice, long-term value, and judicial review in corporate-control contests.",
    related: ["poison pill", "staggered board", "board veto", "Unocal"]
  },
  {
    term: "Poison Pill",
    field: "Corporate Governance",
    level: "Intermediate",
    definition:
      "A shareholder-rights plan that can dilute or otherwise penalize a hostile bidder if the bidder crosses a specified ownership threshold without board approval.",
    whyItMatters:
      "The poison pill gives boards powerful leverage in takeover contests and raises the core question whether boards should use that leverage to bargain, resist, or defer to shareholder choice.",
    related: ["takeover defenses", "board veto", "shareholder rights plan", "staggered board"]
  },
  {
    term: "Staggered Board",
    field: "Corporate Governance",
    level: "Intermediate",
    definition:
      "A board structure in which directors are divided into classes and only a portion of the board is elected in any given year.",
    whyItMatters:
      "Staggered boards can delay a bidder's ability to replace directors, especially when combined with a poison pill, making them a major antitakeover device in empirical and doctrinal debates.",
    related: ["classified board", "takeover defenses", "poison pill", "shareholder voting"]
  },
  {
    term: "Board Veto",
    field: "Corporate Governance",
    level: "Advanced",
    definition:
      "The practical or legal capacity of a target board to block a takeover bid even when shareholders might prefer to accept it.",
    whyItMatters:
      "Board-veto debates ask whether directors' information and bargaining role justify resistance, or whether takeover decisions should ultimately rest with shareholders once coercion and disclosure problems are controlled.",
    related: ["tender offer", "poison pill", "shareholder choice", "defensive tactics"]
  },
  {
    term: "Freeze-out Merger",
    field: "Corporate Governance",
    level: "Advanced",
    definition:
      "A transaction in which a controlling shareholder acquires the remaining minority shares, usually for cash or other consideration.",
    whyItMatters:
      "Freeze-out mergers test how corporate law protects minority shareholders when the buyer already controls the corporation and can influence process, timing, information, and valuation.",
    related: ["controlling shareholder", "minority shareholders", "entire fairness", "appraisal"]
  },
  {
    term: "Deal Protection",
    field: "Corporate Governance",
    level: "Advanced",
    definition:
      "Contractual or transactional provisions that protect an agreed merger from competing bids or deal failure, such as termination fees, match rights, lockups, and no-shop clauses.",
    whyItMatters:
      "Deal-protection analysis asks when such provisions preserve negotiated value and when they deter superior bids, distort auctions, or conflict with directors' sale-process duties.",
    related: ["Revlon duties", "termination fee", "match right", "lockup"]
  },
  {
    term: "Revlon Duties",
    field: "Corporate Governance",
    level: "Advanced",
    definition:
      "Enhanced fiduciary obligations that arise in sale-of-control settings and require directors to focus on obtaining the best value reasonably available for shareholders.",
    whyItMatters:
      "Revlon duties connect fiduciary law to auction design, deal protection, conflicts of interest, competing bids, and the institutional role of courts in reviewing sale processes.",
    related: ["sale of control", "deal protection", "fiduciary duties", "enhanced scrutiny"]
  },
  {
    term: "Contract Theory",
    field: "Corporate Governance",
    level: "Advanced",
    definition:
      "An analytical framework for studying how parties design agreements and governance structures when actions, information, or future states cannot be perfectly specified.",
    whyItMatters:
      "Contract theory connects corporate law to incomplete contracts, residual control rights, incentive pay, debt, bankruptcy, and firm boundaries.",
    related: ["incomplete contracts", "moral hazard", "residual control rights", "ownership"]
  },
  {
    term: "Moral Hazard",
    field: "Corporate Governance",
    level: "Intermediate",
    definition:
      "A problem that arises when one party's unobservable action affects another party's payoff after a contract or relationship has been formed.",
    whyItMatters:
      "Moral hazard underlies executive compensation, board monitoring, fiduciary duties, creditor protections, and prudential regulation of risk-taking institutions.",
    related: ["agency costs", "incentive contracts", "monitoring", "risk taking"]
  },
  {
    term: "Shareholder Activism",
    field: "Corporate Governance",
    level: "Intermediate",
    definition:
      "Efforts by shareholders to influence corporate strategy, governance, capital allocation, board composition, or transactions without necessarily acquiring full control.",
    whyItMatters:
      "Activism raises recurring questions about monitoring, short-termism, institutional-investor incentives, voting rules, disclosure, and the market for corporate control.",
    related: ["hedge funds", "institutional investors", "proxy contests", "agency capitalism"]
  },
  {
    term: "Mandatory Disclosure",
    field: "Securities Regulation",
    level: "Introductory",
    definition:
      "Legal requirements that issuers disclose specified financial, governance, risk, or transaction information to investors and markets.",
    whyItMatters:
      "Mandatory disclosure is the organizing device of modern securities law and is debated in terms of information asymmetry, agency costs, externalities, and regulatory error.",
    related: ["issuer disclosure", "information asymmetry", "market efficiency", "investor protection"]
  },
  {
    term: "Fraud-on-the-Market",
    field: "Securities Regulation",
    level: "Advanced",
    definition:
      "A securities-litigation theory under which investors may rely on the market price as incorporating public misstatements in an efficient market.",
    whyItMatters:
      "The doctrine links market efficiency to reliance, class certification, damages, and the economic logic of securities-fraud litigation.",
    related: ["efficient markets", "reliance", "class actions", "event studies"]
  },
  {
    term: "Materiality",
    field: "Securities Regulation",
    level: "Intermediate",
    definition:
      "A standard for deciding whether omitted or misstated information would matter to investors' decisions or to the total mix of available information.",
    whyItMatters:
      "Materiality limits disclosure and fraud liability by distinguishing legally significant information from immaterial detail, while leaving room for context-specific judgment.",
    related: ["disclosure", "securities fraud", "investor decision-making", "risk factors"]
  },
  {
    term: "Market Manipulation",
    field: "Securities Regulation",
    level: "Intermediate",
    definition:
      "Trading or information conduct that distorts market prices, trading volume, or perceived supply and demand rather than contributing genuine information or liquidity.",
    whyItMatters:
      "Manipulation analysis requires attention to market microstructure, intent, price impact, liquidity, and the boundary between legitimate trading and harmful distortion.",
    related: ["market microstructure", "price impact", "spoofing", "trading rules"]
  },
  {
    term: "Insider Trading",
    field: "Securities Regulation",
    level: "Intermediate",
    definition:
      "Trading in securities while possessing material nonpublic information, or trading under legal rules that restrict misuse of informational advantages.",
    whyItMatters:
      "Insider-trading debates connect market efficiency, liquidity, compensation, fiduciary duties, fairness, enforcement costs, and the boundary between public and private information.",
    related: ["materiality", "market efficiency", "information asymmetry", "enforcement"]
  },
  {
    term: "Issuer Disclosure",
    field: "Securities Regulation",
    level: "Introductory",
    definition:
      "Information supplied by securities issuers through registration statements, periodic reports, current reports, proxy materials, and other legally required filings.",
    whyItMatters:
      "Issuer disclosure is the central information-production mechanism in securities law. It shapes price accuracy, investor protection, liability exposure, compliance costs, and the boundary between public and private information.",
    related: ["mandatory disclosure", "materiality", "registration", "periodic reporting"]
  },
  {
    term: "Information Traders",
    field: "Securities Regulation",
    level: "Intermediate",
    definition:
      "Market participants who invest in gathering, verifying, and trading on information about securities values, including analysts, institutional investors, arbitrageurs, and other informed traders.",
    whyItMatters:
      "The information-trader account explains securities regulation as a system that lowers information-production and verification costs while protecting incentives to generate price-relevant information.",
    related: ["market efficiency", "analysts", "disclosure", "Goshen and Parchomovsky"]
  },
  {
    term: "Securities Class Actions",
    field: "Securities Regulation",
    level: "Intermediate",
    definition:
      "Representative lawsuits, commonly brought on behalf of investors who bought or sold securities during a period affected by alleged misstatements, omissions, manipulation, or other securities-law violations.",
    whyItMatters:
      "Securities class actions are a major private-enforcement mechanism, but they raise recurring questions about deterrence, compensation, attorney incentives, settlement pressure, and litigation costs.",
    related: ["private enforcement", "fraud-on-the-market", "loss causation", "PSLRA"]
  },
  {
    term: "Loss Causation",
    field: "Securities Regulation",
    level: "Advanced",
    definition:
      "A requirement in securities-fraud litigation that connects the alleged misstatement, omission, or misconduct to the investor's economic loss.",
    whyItMatters:
      "Loss causation separates price inflation or transaction reliance from recoverable loss, making it central to damages, event studies, corrective disclosures, and the economic design of antifraud liability.",
    related: ["securities fraud", "damages", "event studies", "corrective disclosure"]
  },
  {
    term: "Scienter",
    field: "Securities Regulation",
    level: "Advanced",
    definition:
      "A mental-state requirement in many securities-fraud claims, usually referring to intent to deceive, manipulate, or defraud, and in some contexts recklessness.",
    whyItMatters:
      "Scienter affects pleading burdens, enforcement strategy, settlement leverage, and the tradeoff between deterring fraud and avoiding excessive liability for ordinary business mistakes.",
    related: ["securities fraud", "pleading standards", "PSLRA", "deterrence"]
  },
  {
    term: "Due Diligence Defense",
    field: "Securities Regulation",
    level: "Intermediate",
    definition:
      "A defense available to specified participants in securities offerings when they can show a legally sufficient investigation and reasonable belief regarding the accuracy of offering disclosures.",
    whyItMatters:
      "The defense turns underwriters, directors, experts, and other participants into information verifiers, linking offering liability to gatekeeper incentives and disclosure quality.",
    related: ["underwriters", "gatekeeper liability", "registration statements", "offering liability"]
  },
  {
    term: "Information Overload",
    field: "Securities Regulation",
    level: "Intermediate",
    definition:
      "A condition in which legally required information becomes too voluminous, complex, or poorly organized for investors or intermediaries to process effectively.",
    whyItMatters:
      "Information overload challenges the simple assumption that more disclosure is always better and links securities regulation to behavioral economics, disclosure design, and investor comprehension.",
    related: ["mandatory disclosure", "behavioral economics", "investor protection", "Paredes"]
  },
  {
    term: "Capital Adequacy",
    field: "Financial Regulation",
    level: "Introductory",
    definition:
      "The requirement that banks and other financial institutions maintain sufficient loss-absorbing capital relative to their risks.",
    whyItMatters:
      "Capital rules shape leverage, risk-taking, lending capacity, market discipline, and the resilience of institutions during stress.",
    related: ["Basel III", "leverage", "risk weights", "capital buffers"]
  },
  {
    term: "Liquidity Mismatch",
    field: "Financial Regulation",
    level: "Intermediate",
    definition:
      "A mismatch created when institutions fund longer-term or illiquid assets with short-term or demandable liabilities.",
    whyItMatters:
      "Liquidity mismatch explains bank runs, repo runs, lender-of-last-resort policy, liquidity regulation, and the fragility of shadow banking.",
    related: ["bank runs", "repo", "short-term funding", "liquidity coverage"]
  },
  {
    term: "Shadow Banking",
    field: "Financial Regulation",
    level: "Advanced",
    definition:
      "Credit intermediation involving bank-like maturity, liquidity, or leverage transformation outside the traditional deposit-taking banking sector.",
    whyItMatters:
      "Shadow banking is central to post-crisis financial law because repo markets, securitization, money-market funds, and bankruptcy safe harbors can create run-prone private money.",
    related: ["repo", "securitization", "systemic risk", "liquidity mismatch"]
  },
  {
    term: "Funding Liquidity",
    field: "Financial Regulation",
    level: "Advanced",
    definition:
      "The ability of traders or financial institutions to obtain financing, roll over liabilities, or meet margin and collateral requirements.",
    whyItMatters:
      "Funding liquidity helps explain liquidity spirals, fire sales, margin calls, repo runs, lender-of-last-resort policy, and macroprudential regulation.",
    related: ["market liquidity", "haircuts", "fire sales", "systemic risk"]
  },
  {
    term: "Resolution Planning",
    field: "Financial Regulation",
    level: "Advanced",
    definition:
      "Ex ante planning for the orderly failure or restructuring of financial institutions without severe systemic disruption.",
    whyItMatters:
      "Resolution planning addresses too-big-to-fail incentives, loss allocation, continuity of critical functions, and the credibility of non-bailout commitments.",
    related: ["living wills", "bail-in", "systemic risk", "too big to fail"]
  },
  {
    term: "Event Study",
    field: "Research Methods",
    level: "Intermediate",
    definition:
      "An empirical method that estimates abnormal market reactions around a specified event, usually using expected-return models.",
    whyItMatters:
      "Event studies are central in securities litigation, disclosure research, merger analysis, and empirical corporate-law studies that rely on market-price reactions.",
    related: ["abnormal returns", "efficient markets", "securities damages", "announcement effects"]
  },
  {
    term: "Instrumental Variables",
    field: "Research Methods",
    level: "Advanced",
    definition:
      "A causal-inference strategy that uses a variable affecting treatment or exposure but not directly affecting the outcome except through that treatment.",
    whyItMatters:
      "Instrumental variables can help address endogeneity in legal and institutional research, but only when relevance and exclusion restrictions are carefully defended.",
    related: ["endogeneity", "exclusion restriction", "causal inference", "identification"]
  },
  {
    term: "Credibility Revolution",
    field: "Research Methods",
    level: "Introductory",
    definition:
      "A shift in applied empirical research toward research designs that make causal identification assumptions explicit and empirically assessable.",
    whyItMatters:
      "For empirical legal studies, the idea encourages researchers to connect legal events to transparent identification strategies rather than rely only on uncontrolled correlations.",
    related: ["research design", "causal inference", "natural experiments", "policy evaluation"]
  },
  {
    term: "Treatment Effect Heterogeneity",
    field: "Research Methods",
    level: "Advanced",
    definition:
      "Variation in the effect of a treatment, reform, or legal intervention across units, time periods, institutional settings, or exposure intensities.",
    whyItMatters:
      "Heterogeneity is crucial in staggered difference-in-differences, event studies, and policy evaluation because a single average effect may mask timing, selection, or institutional variation.",
    related: ["difference-in-differences", "staggered adoption", "event studies", "causal inference"]
  },
  {
    term: "Synthetic Control",
    field: "Research Methods",
    level: "Advanced",
    definition:
      "A comparative-case method that constructs a weighted combination of untreated units to approximate the treated unit before an intervention.",
    whyItMatters:
      "Synthetic control is useful when a legal reform affects one jurisdiction or institution and ordinary before-after comparison would be too weak.",
    related: ["comparative case studies", "policy evaluation", "counterfactual", "legal reform"]
  },
  {
    term: "Pareto Efficiency",
    field: "Welfare Analysis",
    level: "Introductory",
    definition:
      "A condition in which no person can be made better off without making at least one other person worse off.",
    whyItMatters:
      "Pareto efficiency gives law-and-economics analysis a precise baseline for evaluating voluntary exchange, legal entitlements, contract enforcement, and welfare comparisons.",
    related: ["Kaldor-Hicks efficiency", "welfare economics", "voluntary exchange", "bargaining"]
  },
  {
    term: "Equilibrium",
    field: "Foundations of Law and Economics",
    level: "Introductory",
    definition:
      "A stable outcome in which actors have no reason, given their preferences, constraints, and expectations, to change their chosen behavior.",
    whyItMatters:
      "Equilibrium reasoning helps legal analysis predict how parties, firms, litigants, regulators, and offenders respond once a rule changes incentives.",
    related: ["maximization", "game theory", "market equilibrium", "behavioral response"]
  },
  {
    term: "Risk Aversion",
    field: "Foundations of Law and Economics",
    level: "Introductory",
    definition:
      "A preference for a certain outcome over a risky prospect with the same expected monetary value.",
    whyItMatters:
      "Risk aversion helps explain insurance, settlement, tort damages, investment behavior, portfolio choice, and legal rules that allocate uncertain losses.",
    related: ["insurance", "expected utility", "settlement", "uncertainty"]
  },
  {
    term: "Game Theory",
    field: "Foundations of Law and Economics",
    level: "Introductory",
    definition:
      "A framework for analyzing situations in which each actor's best choice depends on the anticipated choices of others.",
    whyItMatters:
      "Game theory clarifies bargaining, litigation strategy, corporate voting, repeated dealings, regulatory compliance, and coordination problems created by legal rules.",
    related: ["strategic behavior", "Prisoners' Dilemma", "repeated games", "bargaining"]
  },
  {
    term: "Prisoners' Dilemma",
    field: "Foundations of Law and Economics",
    level: "Introductory",
    definition:
      "A strategic setting in which individually rational choices can produce a collectively inferior result.",
    whyItMatters:
      "The concept explains why legal rules, contracts, firms, sanctions, and repeated interaction may be needed to sustain cooperation when private incentives point toward defection.",
    related: ["game theory", "cooperation", "collective action", "repeated games"]
  },
  {
    term: "Public Goods",
    field: "Property and Legal Institutions",
    level: "Introductory",
    definition:
      "Goods whose benefits are difficult to exclude nonpayers from enjoying and whose use by one person does not necessarily reduce availability to others.",
    whyItMatters:
      "Public-goods analysis explains why private markets may underproduce information, safety, enforcement, financial stability, and other legally relevant goods.",
    related: ["non-excludability", "nonrivalry", "free riding", "information production"]
  },
  {
    term: "Tragedy of the Commons",
    field: "Property and Legal Institutions",
    level: "Introductory",
    definition:
      "A resource-use problem in which open access gives each user an incentive to overuse a shared resource.",
    whyItMatters:
      "The concept helps evaluate property rights, regulation, collective governance, financial commons, information commons, and institutional responses to overuse.",
    related: ["open access", "property rights", "externalities", "collective action"]
  },
  {
    term: "Normative Coase Theorem",
    field: "Property and Legal Institutions",
    level: "Intermediate",
    definition:
      "A normative proposition that legal rules should be structured to remove obstacles to private bargaining when bargaining is the lowest-cost path to efficient allocation.",
    whyItMatters:
      "It directs attention from choosing substantive outcomes to lowering transaction costs, clarifying entitlements, and enabling parties to reach value-increasing agreements.",
    related: ["Coase theorem", "transaction costs", "private bargaining", "legal entitlements"]
  },
  {
    term: "Normative Hobbes Theorem",
    field: "Property and Legal Institutions",
    level: "Intermediate",
    definition:
      "A normative proposition that law should allocate rights to minimize harm from failed bargaining when private agreement is too costly or unreliable.",
    whyItMatters:
      "It complements Coasean bargaining by asking when courts, statutes, or regulators should allocate rights directly because bargaining will not solve the conflict.",
    related: ["transaction costs", "institutional choice", "property rights", "bargaining failure"]
  },
  {
    term: "Bargaining Surplus",
    field: "Property and Legal Institutions",
    level: "Introductory",
    definition:
      "The joint gain available when parties can move from a lower-valued allocation to a higher-valued allocation through agreement.",
    whyItMatters:
      "Bargaining surplus explains why legal rules matter for exchange, settlement, contract modification, corporate transactions, and the allocation of control rights.",
    related: ["Coase theorem", "private bargaining", "transaction costs", "settlement"]
  },
  {
    term: "Information Costs",
    field: "Institutional Analysis",
    level: "Introductory",
    definition:
      "The costs of obtaining, verifying, processing, and communicating information relevant to a legal or economic decision.",
    whyItMatters:
      "Information costs shape disclosure rules, property recording systems, contract design, litigation discovery, gatekeeper duties, and securities-market regulation.",
    related: ["search costs", "verification costs", "disclosure", "transaction costs"]
  },
  {
    term: "Hand Formula",
    field: "Tort and Accident Law",
    level: "Introductory",
    definition:
      "A negligence test associated with Judge Learned Hand that compares the burden of precaution with the probability and magnitude of expected harm.",
    whyItMatters:
      "The formula gives accident law a compact way to analyze whether precautions are cost-justified and how courts translate risk into standards of care.",
    related: ["negligence", "precaution", "expected harm", "reasonable care"]
  },
  {
    term: "Negligence Rule",
    field: "Tort and Accident Law",
    level: "Introductory",
    definition:
      "A liability rule under which an injurer is liable only if the injurer failed to take legally required or reasonable care.",
    whyItMatters:
      "Negligence rules create incentives to meet the legal standard of care while raising questions about courts' ability to measure risk, precaution costs, and causal responsibility.",
    related: ["Hand formula", "reasonable care", "precaution", "tort liability"]
  },
  {
    term: "Strict Liability",
    field: "Tort and Accident Law",
    level: "Introductory",
    definition:
      "A liability rule under which an injurer is responsible for legally recognized harm even without proof that the injurer failed to take due care.",
    whyItMatters:
      "Strict liability can give actors incentives to internalize accident costs, adjust activity levels, insure against losses, or avoid activities whose social costs exceed benefits.",
    related: ["accident costs", "activity level", "internalization", "tort liability"]
  },
  {
    term: "Bilateral Precaution",
    field: "Tort and Accident Law",
    level: "Intermediate",
    definition:
      "A situation in which both injurer and victim can take precautions that affect the probability or magnitude of harm.",
    whyItMatters:
      "Bilateral precaution matters because liability rules must preserve incentives for both sides, not only for the party most visibly associated with the accident.",
    related: ["negligence", "contributory negligence", "comparative negligence", "least-cost avoider"]
  },
  {
    term: "Activity Level",
    field: "Tort and Accident Law",
    level: "Intermediate",
    definition:
      "The amount or frequency of an activity that creates benefits but also increases expected accident costs or other external harms.",
    whyItMatters:
      "Activity-level analysis shows that legal rules may affect not only how carefully actors behave, but also how much risky activity they undertake.",
    related: ["strict liability", "accident costs", "deterrence", "risk regulation"]
  },
  {
    term: "Expectation Damages",
    field: "Contract and Private Ordering",
    level: "Introductory",
    definition:
      "A contract remedy designed to put the promisee in the position the promisee would have occupied had the contract been performed.",
    whyItMatters:
      "Expectation damages are central to the economic analysis of contract breach because they affect performance incentives, reliance, renegotiation, and efficient breach.",
    related: ["contract remedies", "efficient breach", "reliance damages", "specific performance"]
  },
  {
    term: "Reliance Damages",
    field: "Contract and Private Ordering",
    level: "Introductory",
    definition:
      "A contract remedy designed to reimburse costs incurred in reliance on a promise rather than to award the full expected benefit of performance.",
    whyItMatters:
      "Reliance damages help analyze investment incentives, evidentiary limits, incomplete agreements, and situations where expectation damages are difficult to measure.",
    related: ["expectation damages", "contract remedies", "reliance", "measurement costs"]
  },
  {
    term: "Efficient Breach",
    field: "Contract and Private Ordering",
    level: "Intermediate",
    definition:
      "A breach of contract that increases total value when the promisor's gain from nonperformance exceeds the promisee's loss, assuming appropriate compensation.",
    whyItMatters:
      "The concept explains why contract remedies often aim to protect expectations rather than compel performance in every case.",
    related: ["expectation damages", "specific performance", "opportunity cost", "renegotiation"]
  },
  {
    term: "Penalty Default Rule",
    field: "Contract and Private Ordering",
    level: "Advanced",
    definition:
      "A default rule designed to induce parties to disclose information or contract expressly by assigning an unfavorable fallback term to the better-informed party.",
    whyItMatters:
      "Penalty defaults connect contract doctrine to information economics by using default terms to encourage clearer drafting and reduce strategic nondisclosure.",
    related: ["default rules", "information forcing", "contract design", "incomplete contracts"]
  },
  {
    term: "Relational Contracts",
    field: "Contract and Private Ordering",
    level: "Intermediate",
    definition:
      "Long-term or repeat-dealing contracts whose performance depends partly on trust, reputation, adaptation, and informal governance rather than complete written terms.",
    whyItMatters:
      "Relational contracting helps explain why firms, repeat players, financial intermediaries, and business networks often rely on norms and renegotiation alongside formal legal enforcement.",
    related: ["repeated games", "reputation", "private ordering", "incomplete contracts"]
  },
  {
    term: "Settlement Bargaining",
    field: "Legal Process",
    level: "Introductory",
    definition:
      "Negotiation between disputing parties to resolve a claim before final adjudication.",
    whyItMatters:
      "Settlement analysis shows how litigation costs, risk preferences, information asymmetries, fee rules, and expected judgments shape whether disputes proceed to trial.",
    related: ["expected judgment", "litigation costs", "private information", "trial"]
  },
  {
    term: "Expected Judgment",
    field: "Legal Process",
    level: "Introductory",
    definition:
      "The expected monetary value of litigation, commonly based on the probability of prevailing and the likely award or liability if judgment is entered.",
    whyItMatters:
      "Expected judgment helps explain filing decisions, settlement ranges, litigation finance, securities class actions, and the incentives created by fee-shifting rules.",
    related: ["settlement bargaining", "expected value", "trial costs", "litigation"]
  },
  {
    term: "Standard of Proof",
    field: "Legal Process",
    level: "Intermediate",
    definition:
      "The degree of confidence a decision maker must have before treating a contested fact as legally established.",
    whyItMatters:
      "Standards of proof allocate error costs between false positives and false negatives, making them central to civil litigation, enforcement, and criminal punishment.",
    related: ["error costs", "Type I and Type II errors", "preponderance of evidence", "reasonable doubt"]
  },
  {
    term: "Selection Effect",
    field: "Legal Process",
    level: "Intermediate",
    definition:
      "The tendency for tried cases to be an unrepresentative subset of all disputes because parties settle cases whose expected outcomes are sufficiently clear.",
    whyItMatters:
      "Selection effects warn researchers not to infer the whole dispute system from litigated cases alone, a point especially important for empirical legal studies.",
    related: ["settlement", "trial", "empirical legal studies", "litigation data"]
  },
  {
    term: "Type I and Type II Errors",
    field: "Legal Process",
    level: "Intermediate",
    definition:
      "Type I errors are false positives, while Type II errors are false negatives in legal or regulatory decision-making.",
    whyItMatters:
      "The distinction helps compare liability rules, enforcement thresholds, pleading standards, sanctions, and procedural safeguards by the kinds of mistakes they make more or less likely.",
    related: ["standard of proof", "error costs", "false positives", "false negatives"]
  },
  {
    term: "Optimal Deterrence",
    field: "Public Enforcement",
    level: "Intermediate",
    definition:
      "The calibration of sanctions and enforcement probability so that actors internalize the expected social costs of wrongful conduct without excessive enforcement or overdeterrence.",
    whyItMatters:
      "Optimal deterrence links criminal law, securities enforcement, financial regulation, corporate compliance, and tort law through the design of expected sanctions.",
    related: ["expected sanction", "marginal deterrence", "enforcement probability", "sanctions"]
  },
  {
    term: "Rational Crime",
    field: "Public Enforcement",
    level: "Intermediate",
    definition:
      "A model of unlawful behavior in which potential offenders compare expected benefits with expected legal and nonlegal costs.",
    whyItMatters:
      "The model does not claim all offenders calculate perfectly; it provides a disciplined way to analyze detection, punishment, prevention, and substitution effects.",
    related: ["Becker", "optimal deterrence", "expected sanction", "crime and punishment"]
  },
  {
    term: "Efficient Punishment",
    field: "Public Enforcement",
    level: "Advanced",
    definition:
      "Punishment designed to reduce the total social cost of crime, enforcement, sanctioning, error, and incapacitation.",
    whyItMatters:
      "Efficient-punishment analysis distinguishes deterrence from retribution and asks how fines, imprisonment, monitoring, and regulatory sanctions compare institutionally.",
    related: ["optimal deterrence", "imprisonment", "fines", "social cost"]
  },
  {
    term: "Modularity",
    field: "Property and Legal Institutions",
    level: "Advanced",
    definition:
      "The organization of a complex legal system into relatively self-contained components whose internal details need not be known by every outside actor.",
    whyItMatters:
      "Modularity helps explain standardized property forms, entity boundaries, asset partitioning, and why legal systems often use stable interfaces instead of fully customized bilateral rights.",
    related: ["information costs", "property law", "asset partitioning", "legal architecture"]
  },
  {
    term: "Exclusion Strategy",
    field: "Property and Legal Institutions",
    level: "Intermediate",
    definition:
      "A property-law strategy that delegates a broad range of resource-use decisions to an owner and requires outsiders generally to keep off or obtain permission.",
    whyItMatters:
      "Exclusion economizes on information when lawmakers cannot cheaply specify every permitted and prohibited use, while leaving difficult boundary and spillover problems to more tailored rules.",
    related: ["property rights", "modularity", "right to exclude", "information costs"]
  },
  {
    term: "Governance Strategy",
    field: "Property and Legal Institutions",
    level: "Intermediate",
    definition:
      "A legal strategy that regulates particular uses of a resource or particular relations among parties more directly than a general right to exclude.",
    whyItMatters:
      "Governance rules such as nuisance standards, servitudes, and land-use restrictions become attractive when recurrent conflicts justify the additional information and administrative costs of tailoring.",
    related: ["exclusion strategy", "nuisance", "property governance", "information costs"]
  },
  {
    term: "Priest-Klein Hypothesis",
    field: "Legal Process",
    level: "Advanced",
    definition:
      "A litigation-selection model in which disputes close to the parties' decision threshold are disproportionately likely to reach judgment because clearer cases are more likely to settle.",
    whyItMatters:
      "The hypothesis warns that win rates in decided cases need not reveal the underlying distribution of claims or the substantive favorability of legal doctrine.",
    related: ["selection effect", "settlement bargaining", "trial", "litigation data"]
  },
  {
    term: "Deadline Effect",
    field: "Legal Process",
    level: "Intermediate",
    definition:
      "A pattern in which settlement activity concentrates near a trial or procedural deadline because delay, private information, and bargaining strategy shape the timing of agreement.",
    whyItMatters:
      "Deadline effects show that late settlement can arise from equilibrium behavior rather than simple irrationality and help evaluate scheduling, fee rules, and case-management interventions.",
    related: ["settlement bargaining", "pretrial negotiation", "delay", "private information"]
  },
  {
    term: "Proximate Cause",
    field: "Tort and Accident Law",
    level: "Intermediate",
    definition:
      "A legal limitation on responsibility that asks whether the connection between conduct and injury is sufficiently direct, foreseeable, or within the scope of the risk to justify liability.",
    whyItMatters:
      "Proximate-cause rules limit the potentially open-ended reach of accident liability and allocate error and administrative costs when causal chains extend beyond risks actors could reasonably process.",
    related: ["foreseeability", "scope of risk", "negligence", "Palsgraf"]
  },
  {
    term: "Enterprise Liability",
    field: "Tort and Accident Law",
    level: "Advanced",
    definition:
      "The allocation of accident losses to an enterprise that can spread, insure, price, or reduce risks associated with its products or activities.",
    whyItMatters:
      "Enterprise liability supports economic arguments for product liability when manufacturers can aggregate claims, improve safety, and distribute accident costs through prices more effectively than individual consumers.",
    related: ["strict liability", "product liability", "risk spreading", "accident costs"]
  },
  {
    term: "Corporate Opportunity",
    field: "Corporate Governance",
    level: "Intermediate",
    definition:
      "A business opportunity that a fiduciary may be required to present to the corporation rather than appropriate personally because of the corporation's interest, expectancy, resources, or line of business.",
    whyItMatters:
      "The doctrine constrains hidden appropriation while preserving room for entrepreneurial activity, making disclosure, consent, valuation, and institutional competence central to duty-of-loyalty analysis.",
    related: ["duty of loyalty", "conflicts of interest", "Guth v. Loft", "fiduciary duties"]
  },
  {
    term: "Mission-Critical Risk",
    field: "Corporate Governance",
    level: "Advanced",
    definition:
      "A compliance or operational risk central to a company's principal business whose failure can threaten the enterprise rather than merely cause an isolated loss.",
    whyItMatters:
      "Mission-critical risk helps identify areas where board-level reporting and oversight systems may have especially high value because concentrated operational failure can endanger the entire firm.",
    related: ["Caremark oversight", "board monitoring", "compliance", "Marchand v. Barnhill"]
  },
  {
    term: "Disclose or Abstain",
    field: "Securities Regulation",
    level: "Intermediate",
    definition:
      "An insider-trading principle requiring a person who possesses material nonpublic information and owes the relevant duty either to disclose it before trading or to refrain from trading.",
    whyItMatters:
      "The principle links informational advantage to trading restrictions and frames the tradeoff among market confidence, information production, enforcement cost, and the legal source of the duty.",
    related: ["insider trading", "materiality", "nonpublic information", "Texas Gulf Sulphur"]
  },
  {
    term: "Opinion Liability",
    field: "Securities Regulation",
    level: "Advanced",
    definition:
      "Liability for an opinion statement when the speaker does not genuinely hold the stated view or when omitted facts make the opinion misleading to a reasonable investor in context.",
    whyItMatters:
      "Opinion liability distinguishes falsity from disagreement or hindsight and affects how issuers communicate judgments, forecasts, legal compliance assessments, and valuation assumptions.",
    related: ["material omissions", "registration statements", "Omnicare", "reasonable investor"]
  },
  {
    term: "Scheme Liability",
    field: "Securities Regulation",
    level: "Advanced",
    definition:
      "Primary securities-fraud liability based on employing a deceptive device, scheme, practice, or course of business rather than solely on being the legal maker of a false statement.",
    whyItMatters:
      "Scheme liability determines whether actors who knowingly disseminate or operationalize deception can be reached when another person has ultimate authority over the underlying statement.",
    related: ["Rule 10b-5", "securities fraud", "Lorenzo v. SEC", "primary liability"]
  },
  {
    term: "Regulatory Arbitrage",
    field: "Financial Regulation",
    level: "Advanced",
    definition:
      "The redesign of transactions, entities, or instruments to obtain a more favorable regulatory treatment while preserving much of the same economic exposure.",
    whyItMatters:
      "Regulatory arbitrage can undermine rule-based regimes, move risk outside supervised institutions, and force lawmakers to compare activity-based, entity-based, and functional regulation.",
    related: ["financial innovation", "derivatives", "shadow banking", "functional regulation"]
  },
  {
    term: "Credit Rating Agencies",
    field: "Securities Regulation",
    level: "Intermediate",
    definition:
      "Intermediaries that assess credit risk and publish ratings used by investors, issuers, contracts, and sometimes regulatory rules.",
    whyItMatters:
      "Rating agencies illustrate how reputation, issuer payment, legal reliance, and barriers to entry interact in gatekeeper markets and can amplify correlated errors.",
    related: ["gatekeeper liability", "credit risk", "issuer-pays model", "regulatory license"]
  },
  {
    term: "Securitization",
    field: "Financial Regulation",
    level: "Intermediate",
    definition:
      "A financing process that pools receivables or other assets and issues securities whose payments depend on cash flows from the pool.",
    whyItMatters:
      "Securitization can diversify and fund assets, but it also separates origination from risk bearing and makes disclosure, servicing, bankruptcy isolation, and incentive design central to financial law.",
    related: ["asset-backed securities", "bankruptcy remoteness", "tranching", "risk retention"]
  },
  {
    term: "Bankruptcy Remoteness",
    field: "Financial Regulation",
    level: "Advanced",
    definition:
      "A legal and organizational design intended to reduce the likelihood that pooled assets become part of an originator's or special-purpose entity's insolvency estate.",
    whyItMatters:
      "Bankruptcy remoteness supports predictable cash-flow allocation in structured finance but raises questions about true sale, substantive consolidation, creditor rights, and the private ordering of insolvency risk.",
    related: ["securitization", "special-purpose entity", "true sale", "asset partitioning"]
  },
  {
    term: "Tranching",
    field: "Financial Regulation",
    level: "Intermediate",
    definition:
      "The division of a pooled asset structure into classes with different priorities, loss exposure, maturities, or payment rights.",
    whyItMatters:
      "Tranching reallocates risk among investors and can create securities suited to different preferences, while also increasing complexity, model dependence, and information costs.",
    related: ["securitization", "credit enhancement", "structured finance", "priority"]
  },
  {
    term: "Risk Retention",
    field: "Financial Regulation",
    level: "Intermediate",
    definition:
      "A requirement or contractual arrangement under which an originator, sponsor, or intermediary keeps part of the credit risk associated with transferred assets.",
    whyItMatters:
      "Risk retention seeks to reduce originate-to-distribute moral hazard, but its effectiveness depends on the retained slice, hedging, capital treatment, screening technology, and market structure.",
    related: ["moral hazard", "securitization", "screening", "skin in the game"]
  },
  {
    term: "Financial Contagion",
    field: "Financial Regulation",
    level: "Advanced",
    definition:
      "The transmission of distress across institutions or markets through contractual exposures, funding withdrawals, asset sales, common portfolios, or information-based runs.",
    whyItMatters:
      "Contagion analysis identifies channels through which individually rational defensive actions can destabilize the system and informs liquidity support, exposure limits, clearing, and resolution design.",
    related: ["systemic risk", "interbank networks", "fire sales", "liquidity"]
  },
  {
    term: "Deposit Insurance Boundary",
    field: "Financial Regulation",
    level: "Advanced",
    definition:
      "The legal line separating insured deposits from uninsured claims, contingent obligations, investment products, and other bank liabilities.",
    whyItMatters:
      "The boundary affects depositor confidence, moral hazard, funding costs, product design, and the public exposure created when economically similar claims receive different guarantees.",
    related: ["deposit insurance", "bank liabilities", "moral hazard", "Philadelphia Gear"]
  },
  {
    term: "Accrual Accounting",
    field: "Accounting and Corporate Finance",
    level: "Introductory",
    definition:
      "A reporting basis that recognizes economic activity when revenue is earned and expenses or obligations arise, rather than only when cash is received or paid.",
    whyItMatters:
      "Accruals connect operating activity to reported performance and make multi-period comparison possible, but they also introduce estimates and timing judgments. Corporate-finance analysis uses the reconciliation from net income to operating cash flow to identify how receivables, inventory, payables, provisions, and non-cash charges affect financing needs.",
    related: ["net income", "operating cash flow", "working capital", "earnings quality"],
    formula: "Net income = recognized revenue − recognized expenses",
    caution:
      "Profit is not cash. A profitable firm can face a liquidity shortage when customers have not paid, inventory absorbs cash, or obligations fall due before collections arrive.",
    referenceLabel: "SEC: Beginners' Guide to Financial Statements",
    referenceHref: "https://www.sec.gov/about/reports-publications/beginners-guide-financial-statements"
  },
  {
    term: "Revenue Recognition",
    field: "Accounting and Corporate Finance",
    level: "Intermediate",
    definition:
      "The accounting determination of when and in what amount consideration from customers enters reported revenue as promised goods or services are transferred.",
    whyItMatters:
      "Revenue timing affects margins, growth rates, receivables, contract assets or liabilities, valuation multiples, compensation, and debt covenants. Analysts should connect reported revenue to contract terms, performance obligations, collections, returns, and remaining obligations.",
    related: ["accrual accounting", "contract assets", "earnings quality", "disclosure"],
    caution:
      "Revenue growth does not establish cash collection or economic profitability. Changes in contract structure, estimates, gross-versus-net presentation, or recognition timing can impair comparability.",
    referenceLabel: "IFRS Foundation: IFRS 15 Revenue from Contracts with Customers",
    referenceHref:
      "https://www.ifrs.org/issued-standards/list-of-standards/ifrs-15-revenue-from-contracts-with-customers/"
  },
  {
    term: "Working Capital",
    field: "Accounting and Corporate Finance",
    level: "Introductory",
    definition:
      "The short-term resources and obligations used in a firm's operating cycle. The broad accounting measure is current assets minus current liabilities; corporate-finance models often focus more narrowly on operating items.",
    whyItMatters:
      "Growth can consume cash when receivables and inventory rise faster than trade credit and other operating liabilities. Working-capital policy therefore affects liquidity, short-term borrowing, supplier relations, covenant headroom, and the amount of cash available for investment or distribution.",
    related: ["receivables", "inventory", "payables", "liquidity"],
    formula: "Broad working capital = current assets − current liabilities",
    caution:
      "State the convention before comparing firms. Valuation models commonly exclude cash and interest-bearing debt from operating net working capital, while the balance-sheet ratio uses all current assets and liabilities.",
    referenceLabel: "SEC: Beginners' Guide to Financial Statements",
    referenceHref: "https://www.sec.gov/about/reports-publications/beginners-guide-financial-statements"
  },
  {
    term: "EBITDA",
    field: "Accounting and Corporate Finance",
    level: "Introductory",
    definition:
      "Earnings before interest, taxes, depreciation, and amortization, commonly used as a non-GAAP operating-performance measure and as an input to leverage ratios and valuation multiples.",
    whyItMatters:
      "EBITDA partly separates operating performance from financing, tax, and certain non-cash allocation choices. Credit agreements and transaction analyses often use it, but definitions—especially adjusted EBITDA—can change covenant capacity, reported leverage, executive compensation, and deal valuation.",
    related: ["operating income", "non-GAAP measures", "leverage", "enterprise value"],
    formula: "EBITDA = net income + interest + taxes + depreciation + amortization",
    caution:
      "EBITDA is not operating cash flow or free cash flow: it ignores working-capital investment, capital expenditure, taxes, interest, and potentially recurring adjustments. Always reconcile it to a GAAP or IFRS measure and inspect the definition used.",
    referenceLabel: "SEC: Non-GAAP Financial Measures",
    referenceHref:
      "https://www.sec.gov/rules-regulations/staff-guidance/corporation-finance-interpretations/non-gaap-financial-measures"
  },
  {
    term: "Free Cash Flow to Firm",
    field: "Accounting and Corporate Finance",
    level: "Intermediate",
    definition:
      "A valuation-oriented estimate of cash generated by operations after taxes and reinvestment but before payments to debt and equity providers.",
    whyItMatters:
      "Free cash flow to firm links operating performance to enterprise value and separates business investment from financing choice. It is also useful for studying payout policy, financing constraints, takeover valuation, and the agency costs of cash retained after positive-value investment needs are funded.",
    related: ["discounted cash flow", "capital expenditure", "working capital", "enterprise value"],
    formula: "FCFF ≈ EBIT × (1 − tax rate) + D&A − CapEx − Δ operating working capital",
    caution:
      "FCFF is an analytical construction rather than a standardized financial-statement subtotal. Tax, lease, restructuring, acquisition, and working-capital conventions must match the valuation model.",
    referenceLabel: "SEC: Beginners' Guide to Financial Statements",
    referenceHref: "https://www.sec.gov/about/reports-publications/beginners-guide-financial-statements"
  },
  {
    term: "Depreciation and Amortization",
    field: "Accounting and Corporate Finance",
    level: "Introductory",
    definition:
      "Non-cash expenses that allocate the carrying cost of tangible and finite-lived intangible assets across periods expected to benefit from their use.",
    whyItMatters:
      "These charges affect operating profit, taxes, asset carrying values, EBITDA reconciliation, and comparisons between asset-heavy and asset-light firms. Their assumptions also provide information about useful lives, capital intensity, and whether current investment is sufficient to maintain productive capacity.",
    related: ["capital expenditure", "EBITDA", "tax shield", "asset intensity"],
    caution:
      "Adding depreciation and amortization back to earnings does not make asset use free. A firm may need substantial maintenance investment even though the current-period charge is non-cash.",
    referenceLabel: "SEC: Beginners' Guide to Financial Statements",
    referenceHref: "https://www.sec.gov/about/reports-publications/beginners-guide-financial-statements"
  },
  {
    term: "Capital Expenditure",
    field: "Accounting and Corporate Finance",
    level: "Introductory",
    definition:
      "Cash or other consideration invested in long-lived productive assets, generally capitalized on the balance sheet rather than expensed entirely when acquired.",
    whyItMatters:
      "Capital expenditure reveals reinvestment intensity and helps distinguish maintenance of existing capacity from expansion. It reduces current free cash flow but may create future operating cash flow, so its interpretation is central to valuation, financing requirements, and board capital-allocation policy.",
    related: ["property plant and equipment", "free cash flow", "depreciation", "capital allocation"],
    caution:
      "A period's cash capital expenditure is not the same as the change in net fixed assets, which is also affected by depreciation, disposals, acquisitions, impairments, leases, and currency movements.",
    referenceLabel: "SEC: Beginners' Guide to Financial Statements",
    referenceHref: "https://www.sec.gov/about/reports-publications/beginners-guide-financial-statements"
  },
  {
    term: "Book Value of Equity",
    field: "Accounting and Corporate Finance",
    level: "Introductory",
    definition:
      "The residual accounting amount attributable to shareholders after recognized liabilities are deducted from recognized assets.",
    whyItMatters:
      "Book equity is used in leverage, profitability, and valuation ratios and helps trace retained earnings, distributions, share issuance, repurchases, and accumulated losses. It also supplies a contractual and regulatory reference point in some capital, solvency, and covenant settings.",
    related: ["shareholders' equity", "market capitalization", "return on equity", "leverage"],
    formula: "Book value of equity = recognized assets − recognized liabilities",
    caution:
      "Book value is not liquidation value or market value. Recognition rules, historical cost, internally generated intangibles, accumulated other comprehensive income, and impairment can create large differences.",
    referenceLabel: "SEC: Beginners' Guide to Financial Statements",
    referenceHref: "https://www.sec.gov/about/reports-publications/beginners-guide-financial-statements"
  },
  {
    term: "Goodwill",
    field: "Accounting and Corporate Finance",
    level: "Intermediate",
    definition:
      "An acquisition-related asset representing the residual purchase price after identifiable acquired assets and assumed liabilities are measured under the applicable business-combination rules.",
    whyItMatters:
      "Goodwill records part of the premium paid for expected synergies, assembled workforce, market position, and other benefits not recognized separately. It connects merger pricing to later accountability because underperformance may produce impairment, affect reported equity, and reveal that expected deal gains did not materialize.",
    related: ["business combinations", "purchase price allocation", "impairment", "acquisition premium"],
    formula: "Simplified goodwill = acquisition consideration − fair value of identifiable net assets acquired",
    caution:
      "Goodwill is not a separable pool of cash and does not prove that synergies exist. The full calculation can include non-controlling interests, previously held interests, and bargain-purchase rules.",
    referenceLabel: "IFRS Foundation: IFRS 3 Business Combinations",
    referenceHref: "https://www.ifrs.org/issued-standards/list-of-standards/ifrs-3-business-combinations/"
  },
  {
    term: "Impairment",
    field: "Accounting and Corporate Finance",
    level: "Intermediate",
    definition:
      "A reduction in an asset's carrying amount when the amount expected to be recovered under the applicable accounting test falls below that carrying amount.",
    whyItMatters:
      "Impairment can reveal deterioration in assets, acquisitions, or business units and can materially reduce reported earnings and equity. It also matters for managerial incentives because timing and valuation inputs may affect compensation, covenants, takeover accountability, and the appearance of later performance.",
    related: ["goodwill", "carrying amount", "recoverable amount", "earnings quality"],
    caution:
      "An impairment charge is often non-cash in the recognition period, but it may reflect a real earlier loss of economic value. Reversals, testing units, and measurement rules differ across standards and asset classes.",
    referenceLabel: "IFRS Foundation: IAS 36 Impairment of Assets",
    referenceHref:
      "https://www.ifrs.org/content/dam/ifrs/publications/pdf-standards/english/2021/issued/part-a/ias-36-impairment-of-assets.pdf"
  },
  {
    term: "Deferred Tax Assets and Liabilities",
    field: "Accounting and Corporate Finance",
    level: "Advanced",
    definition:
      "Balance-sheet amounts arising principally when accounting carrying amounts and tax bases differ temporarily, causing future tax deductions or taxable amounts if the underlying assumptions are realized.",
    whyItMatters:
      "Deferred taxes affect acquisition accounting, asset valuation, losses carried forward, effective tax rates, book equity, and the bridge from accounting earnings to cash taxes. Their recognition can depend on expectations about future taxable profit and therefore contains information as well as estimation risk.",
    related: ["tax base", "temporary differences", "cash taxes", "valuation allowance"],
    caution:
      "A deferred tax liability is not necessarily a near-term tax bill, and a deferred tax asset is not cash. Timing, jurisdiction, realization probability, and tax-law change must be assessed.",
    referenceLabel: "SEC: Beginners' Guide to Financial Statements",
    referenceHref: "https://www.sec.gov/about/reports-publications/beginners-guide-financial-statements"
  },
  {
    term: "Earnings Quality",
    field: "Accounting and Corporate Finance",
    level: "Intermediate",
    definition:
      "An analytical assessment of how faithfully and sustainably reported earnings reflect the firm's underlying performance and capacity to generate future cash flows.",
    whyItMatters:
      "High-quality earnings are generally less dependent on aggressive estimates, temporary gains, unusual adjustments, or working-capital reversals. The concept helps evaluate disclosure reliability, covenant design, executive incentives, valuation, and whether reported growth is supported by cash conversion.",
    related: ["accruals", "cash conversion", "revenue recognition", "financial reporting"],
    caution:
      "Earnings quality is not a standardized accounting line item or a single ratio. Industry economics, investment stage, accounting choices, and the reason for accruals must be examined before treating a difference from cash flow as manipulation.",
    referenceLabel: "SEC: Beginners' Guide to Financial Statements",
    referenceHref: "https://www.sec.gov/about/reports-publications/beginners-guide-financial-statements"
  },
  {
    term: "Cash Conversion Cycle",
    field: "Accounting and Corporate Finance",
    level: "Intermediate",
    definition:
      "An operating-cycle measure estimating how long cash is tied up between paying for inputs and collecting cash from customers, net of supplier financing.",
    whyItMatters:
      "The cycle connects inventory, receivables, payables, growth, and short-term finance. A longer cycle usually increases funding needs, while a shorter or negative cycle can release cash—though the economic meaning depends on bargaining power, business model, seasonality, and supply-chain resilience.",
    related: ["working capital", "inventory days", "receivable days", "payable days"],
    formula: "Cash conversion cycle = inventory days + receivable days − payable days",
    caution:
      "Use consistent averages and periods. A shorter cycle is not automatically better if it results from underinvestment in inventory, excessive collection pressure, or delayed supplier payment that damages operations.",
    referenceLabel: "SEC: Beginners' Guide to Financial Statements",
    referenceHref: "https://www.sec.gov/about/reports-publications/beginners-guide-financial-statements"
  },
  {
    term: "Return on Invested Capital",
    field: "Accounting and Corporate Finance",
    level: "Intermediate",
    definition:
      "A performance ratio comparing after-tax operating profit with the capital committed to the operating business.",
    whyItMatters:
      "ROIC links operating margins, asset use, reinvestment, and value creation. Comparing it with the firm's cost of capital helps evaluate competitive advantage, acquisition performance, capital allocation, and whether growth adds value before considering how the business is financed.",
    related: ["NOPAT", "invested capital", "cost of capital", "capital allocation"],
    formula: "ROIC ≈ NOPAT ÷ average invested capital",
    caution:
      "ROIC is not standardized. Goodwill, leases, excess cash, restructuring, tax normalization, and opening-versus-average capital can materially change the result, so numerator and denominator conventions must match.",
    referenceLabel: "SEC: Beginners' Guide to Financial Statements",
    referenceHref: "https://www.sec.gov/about/reports-publications/beginners-guide-financial-statements"
  },
  {
    term: "Diluted Earnings per Share",
    field: "Accounting and Corporate Finance",
    level: "Intermediate",
    definition:
      "Per-share earnings calculated after reflecting the dilutive effect of specified potential common shares such as options, warrants, or convertible instruments under the applicable accounting rules.",
    whyItMatters:
      "Diluted EPS connects profitability to the changing claim of each share and makes equity compensation, convertible financing, repurchases, and acquisition consideration visible in per-share analysis. It is often more informative than aggregate net income for existing shareholders.",
    related: ["basic EPS", "share dilution", "stock compensation", "convertible securities"],
    formula: "Diluted EPS = adjusted earnings available to common shareholders ÷ diluted weighted-average shares",
    caution:
      "Diluted EPS is not a forecast of the final share count, and anti-dilutive instruments may be excluded. Buybacks can increase EPS without improving operating performance or enterprise value.",
    referenceLabel: "SEC: Beginners' Guide to Financial Statements",
    referenceHref: "https://www.sec.gov/about/reports-publications/beginners-guide-financial-statements"
  },
  {
    term: "Net Debt",
    field: "Accounting and Corporate Finance",
    level: "Intermediate",
    definition:
      "An analytical measure that offsets selected cash and cash-equivalent balances against selected interest-bearing debt obligations.",
    whyItMatters:
      "Net debt is used to bridge enterprise value to equity value and to assess leverage, refinancing capacity, acquisition funding, and covenant headroom. Its usefulness depends on whether reported cash is accessible and whether leases, pensions, guarantees, or other debt-like claims are included.",
    related: ["enterprise value", "cash", "leverage", "debt-like items"],
    formula: "Net debt = included interest-bearing debt − included cash and cash equivalents",
    caution:
      "Net debt is not standardized. Restricted or trapped cash may not be available to repay debt, and analysts differ on leases, securitizations, pensions, derivatives, and other debt-like obligations.",
    referenceLabel: "SEC: Non-GAAP Financial Measures",
    referenceHref:
      "https://www.sec.gov/rules-regulations/staff-guidance/corporation-finance-interpretations/non-gaap-financial-measures"
  },
  {
    term: "Lease Liability",
    field: "Accounting and Corporate Finance",
    level: "Intermediate",
    definition:
      "The recognized obligation associated with a lessee's future lease payments under the applicable accounting model, accompanied by a right-of-use asset.",
    whyItMatters:
      "Leases are a form of financing and resource commitment. Their recognition affects leverage, asset intensity, EBITDA, operating cash-flow presentation, covenant calculations, valuation multiples, and comparisons between firms that lease productive assets and firms that own them.",
    related: ["right-of-use asset", "leverage", "EBITDA", "off-balance-sheet financing"],
    caution:
      "Accounting and cash-flow presentation differ across reporting frameworks and lease types. Valuation and covenant analysis should state whether lease liabilities are treated as debt and adjust the related earnings and cash-flow measures consistently.",
    referenceLabel: "IFRS Foundation: IFRS 16 Leases",
    referenceHref: "https://www.ifrs.org/issued-standards/list-of-standards/ifrs-16-leases.html"
  },
  {
    term: "Non-Controlling Interest",
    field: "Accounting and Corporate Finance",
    level: "Intermediate",
    definition:
      "The equity in a consolidated subsidiary that is attributable to owners other than the reporting parent.",
    whyItMatters:
      "Consolidated revenue, profit, assets, and liabilities can include one hundred percent of a controlled subsidiary even when the parent owns less than one hundred percent. Non-controlling interest is therefore essential when reconciling consolidated enterprise value, earnings attributable to the parent, and the economic claims of outside owners.",
    related: ["consolidation", "enterprise value", "business combinations", "equity attribution"],
    caution:
      "Do not combine fully consolidated operating results with an equity value that represents only the parent's ownership without adjusting for outside claims. Legal control, accounting consolidation, and economic ownership are related but distinct.",
    referenceLabel: "IFRS Foundation: IFRS 3 Business Combinations",
    referenceHref: "https://www.ifrs.org/issued-standards/list-of-standards/ifrs-3-business-combinations/"
  },
  {
    term: "Debt Overhang",
    field: "Accounting and Corporate Finance",
    level: "Intermediate",
    definition:
      "An underinvestment problem in which existing debt reduces the incentive to finance a positive-value project because part of the project's gains would accrue to existing creditors rather than equity holders.",
    whyItMatters:
      "Debt overhang helps explain financing constraints, covenant design, debt exchanges, priority disputes, and restructuring choices when a firm's legacy claims change the payoff from new investment.",
    related: ["investment incentives", "leverage", "creditor priority", "restructuring"],
    caution:
      "Not every failure to invest is debt overhang. The analysis should identify who receives the marginal gains, which financing alternatives are available, and whether information, agency, or liquidity constraints offer a better explanation.",
    referenceLabel: "Myers: Determinants of Corporate Borrowing",
    referenceHref: "https://doi.org/10.1016/0304-405X(77)90015-0"
  },
  {
    term: "Risk-Weighted Assets",
    field: "Banking Regulation",
    level: "Intermediate",
    definition:
      "The regulatory denominator produced by assigning exposures risk weights under standardized rules or approved internal models, rather than simply adding their accounting carrying amounts.",
    whyItMatters:
      "Risk-weighted assets determine risk-based capital ratios and can affect banks' portfolio choices, model incentives, capital planning, and opportunities for regulatory arbitrage.",
    related: ["capital adequacy", "Basel III", "leverage ratio", "regulatory arbitrage"],
    formula: "Risk-based capital ratio = qualifying regulatory capital ÷ risk-weighted assets",
    caution:
      "Risk-weighted assets are neither total accounting assets nor a complete measure of economic risk. Results depend on the applicable Basel implementation, exposure class, mitigation rules, and whether standardized or internal-model approaches are used.",
    referenceLabel: "Basel Committee: Basel Framework",
    referenceHref: "https://www.bis.org/basel_framework/"
  }
];

export function getAllConcepts() {
  return CONCEPT_ENTRIES;
}

export function getConceptSlug(term: string) {
  return term
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function getConceptBySlug(slug: string) {
  return CONCEPT_ENTRIES.find((concept) => getConceptSlug(concept.term) === slug) ?? null;
}

export function getConceptSearchTerms(concept: ConceptEntry) {
  return [concept.term, concept.field, ...concept.related].map(normalizeConceptText).filter(Boolean);
}

function normalizeConceptText(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function getConceptsForText(text: string, limit = 6) {
  const normalizedText = normalizeConceptText(text);

  return CONCEPT_ENTRIES.map((concept) => {
    const terms = [concept.term, concept.field, ...concept.related].map(normalizeConceptText);
    const score = terms.reduce((sum, term) => {
      if (!term) return sum;
      return normalizedText.includes(term) ? sum + (term === normalizeConceptText(concept.term) ? 3 : 1) : sum;
    }, 0);

    return { concept, score };
  })
    .filter((item) => item.score > 0)
    .sort((first, second) => second.score - first.score || first.concept.term.localeCompare(second.concept.term))
    .slice(0, limit)
    .map((item) => item.concept);
}
