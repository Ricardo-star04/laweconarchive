export type TopicReading = {
  title: string;
  authors: string;
  year: string;
  venue: string;
  sourceLabel: string;
  sourceHref: string;
  summary: string;
};

export type ReadingCitationData = {
  citation: string;
  doi: string | null;
  bibtex: string;
};

export type ReadingLevel = "Introductory" | "Intermediate" | "Advanced";
export type ReadingPublicationType = "Article" | "Book" | "Chapter" | "Report";

export type IndexedReading = TopicReading & {
  slug: string;
  topicSlug: string;
  topicTitle: string;
  topicHref: string;
  level: ReadingLevel;
  order: number;
  topicOrder: number;
  sortYear: number;
};

export type TopicSection = {
  slug: string;
  title: string;
  description: string;
  researchQuestions: string[];
  readings: TopicReading[];
};

export const TOPIC_SECTIONS: TopicSection[] = [
  {
    slug: "foundations-of-law-and-economics",
    title: "Foundations of Law and Economics",
    description:
      "Foundational theories of legal rules as institutional devices for allocating entitlements, shaping incentives, reducing social costs, and structuring private ordering.",
    researchQuestions: [
      "How do transaction costs, externalities, bargaining, and information problems affect the choice between legal rules, markets, firms, and regulation?",
      "When should legal analysis emphasize welfare, deterrence, entitlement protection, institutional competence, or distributional concerns?"
    ],
    readings: [
      {
        title: "The Nature of the Firm",
        authors: "Ronald H. Coase",
        year: "1937",
        venue: "Economica",
        sourceLabel: "Wiley Online Library",
        sourceHref: "https://doi.org/10.1111/j.1468-0335.1937.tb00002.x",
        summary:
          "Asks why firms exist in an economy coordinated partly by prices and market exchange. The article explains the firm as an institutional response to the costs of using the price mechanism, including discovering prices, negotiating contracts, and repeatedly arranging transactions, while also asking why internal organization itself has limits."
      },
      {
        title: "The Problem of Social Cost",
        authors: "Ronald H. Coase",
        year: "1960",
        venue: "Journal of Law and Economics",
        sourceLabel: "University of Chicago Press Journals",
        sourceHref: "https://www.journals.uchicago.edu/doi/10.1086/466560",
        summary:
          "Reframes externality problems as reciprocal conflicts over resource use rather than one-sided harms. The article argues that, when bargaining is costly, legal rules affect the allocation of resources by assigning entitlements, shaping negotiation, and determining which institutional arrangement can reduce the total social cost of conflicting activities."
      },
      {
        title: "The Theory of Economic Regulation",
        authors: "George J. Stigler",
        year: "1971",
        venue: "Bell Journal of Economics and Management Science",
        sourceLabel: "IDEAS/RePEc",
        sourceHref: "https://ideas.repec.org/a/rje/bellje/v2y1971ispringp3-21.html",
        summary:
          "Develops an economic theory of regulation in which regulation is treated as a product supplied through political processes and demanded by organized interests. The article is a foundation for studying regulatory capture, interest-group pressure, entry barriers, and the political economy of legal and administrative institutions."
      },
      {
        title: "Some Thoughts on Risk Distribution and the Law of Torts",
        authors: "Guido Calabresi",
        year: "1961",
        venue: "Yale Law Journal",
        sourceLabel: "JSTOR",
        sourceHref: "https://www.jstor.org/stable/794261",
        summary:
          "Develops an economic account of accident law by connecting liability rules to risk distribution, insurance, administrative costs, and incentives for accident prevention. The article helped shift tort analysis from moral blame alone toward institutional questions about who can avoid, spread, or internalize accident costs at lower cost."
      },
      {
        title: "Crime and Punishment: An Economic Approach",
        authors: "Gary S. Becker",
        year: "1968",
        venue: "Journal of Political Economy",
        sourceLabel: "University of Chicago Press Journals",
        sourceHref: "https://www.journals.uchicago.edu/doi/10.1086/259394",
        summary:
          "Models unlawful behavior, enforcement probability, sanctions, and public enforcement costs within an economic framework. The article treats deterrence as a problem of expected costs and benefits, while leaving institutional design to balance harm reduction, sanctioning costs, error costs, and the social cost of enforcement."
      },
      {
        title: "Property Rules, Liability Rules, and Inalienability: One View of the Cathedral",
        authors: "Guido Calabresi and A. Douglas Melamed",
        year: "1972",
        venue: "Harvard Law Review",
        sourceLabel: "JSTOR",
        sourceHref: "https://www.jstor.org/stable/1340059",
        summary:
          "Organizes legal protection of entitlements into property rules, liability rules, and inalienability rules. The article gives readers a durable vocabulary for comparing bargaining, damages, injunctions, public valuation, and mandatory limits on transfer across property, tort, contract, and regulatory contexts."
      },
      {
        title: "Toward a Theory of Property Rights",
        authors: "Harold Demsetz",
        year: "1967",
        venue: "American Economic Review",
        sourceLabel: "JSTOR",
        sourceHref: "https://www.jstor.org/stable/1821637",
        summary:
          "Explains property rights as social instruments that help internalize externalities when the gains from defining and enforcing rights exceed the relevant costs. The paper connects resource values, technological change, exclusion costs, and institutional evolution, making property law central to economic organization."
      },
      {
        title: "Transaction-Cost Economics: The Governance of Contractual Relations",
        authors: "Oliver E. Williamson",
        year: "1979",
        venue: "Journal of Law and Economics",
        sourceLabel: "University of Chicago Press Journals",
        sourceHref: "https://www.journals.uchicago.edu/doi/10.1086/466942",
        summary:
          "Develops transaction-cost economics as a comparative approach to governance. The article links opportunism, bounded rationality, asset specificity, uncertainty, and frequency to the choice among markets, hybrids, and hierarchical organization, making contract governance a central legal-institutional question."
      },
      {
        title: "Institutions",
        authors: "Douglass C. North",
        year: "1991",
        venue: "Journal of Economic Perspectives",
        sourceLabel: "American Economic Association",
        sourceHref: "https://www.aeaweb.org/articles?id=10.1257/jep.5.1.97",
        summary:
          "Defines institutions as humanly devised constraints that structure political, economic, and social interaction. The article explains how formal rules, informal constraints, enforcement, transaction costs, and institutional change shape economic performance, making legal design part of a broader institutional environment."
      },
      {
        title: "Fairness versus Welfare",
        authors: "Louis Kaplow and Steven M. Shavell",
        year: "2001",
        venue: "Harvard Law Review",
        sourceLabel: "Harvard Law School",
        sourceHref: "https://hls.harvard.edu/bibliography/fairness-versus-welfare/",
        summary:
          "Argues that legal-policy assessment should be based on effects on individuals' well-being rather than independent fairness criteria, while distinguishing welfare analysis from separate questions of income distribution. The article is a central reference for debates over welfarism, corrective justice, policy evaluation, and the normative limits of economic analysis."
      },
      {
        title: "The Cost of Accidents: A Legal and Economic Analysis",
        authors: "Guido Calabresi",
        year: "1970",
        venue: "Yale University Press",
        sourceLabel: "Yale University Press",
        sourceHref: "https://yalebooks.yale.edu/9780300011159/the-cost-of-accidents/",
        summary:
          "Develops a general framework for accident law by treating accident losses, accident-prevention expenditures, administrative costs, and fairness constraints as connected institutional choices. The book asks who should bear accident costs, how those costs should be valued, and which liability or insurance arrangements can reduce total accident costs without ignoring distributional and moral limits."
      },
      {
        title: "Economic Analysis of Law",
        authors: "Richard A. Posner",
        year: "1973",
        venue: "Little, Brown; later Aspen Publishing editions",
        sourceLabel: "Aspen Publishing",
        sourceHref: "https://aspenpublishing.com/products/posner-economic-analysis-of-law-9e",
        summary:
          "Systematizes the economic analysis of legal doctrine across property, contract, tort, criminal law, procedure, regulation, organizations, and constitutional questions. The book made economic reasoning accessible to legal audiences by treating legal rules as incentive structures and by distinguishing positive explanation from normative evaluation."
      },
      {
        title: "Law and Economics, 6th edition",
        authors: "Robert Cooter and Thomas Ulen",
        year: "2016",
        venue: "Berkeley Law Scholarship Repository",
        sourceLabel: "Berkeley Law",
        sourceHref: "https://lawcat.berkeley.edu/record/1127400",
        summary:
          "Provides an integrated textbook treatment of economic analysis across property, torts, contracts, legal process, crime, and public law. The freely available sixth edition is useful as an entry point because it explains core microeconomic tools, doctrinal applications, and institutional questions without treating economic efficiency as the only value at stake."
      },
      {
        title: "An Introduction to Law and Economics",
        authors: "A. Mitchell Polinsky",
        year: "2019",
        venue: "Wolters Kluwer",
        sourceLabel: "WorldCat",
        sourceHref: "https://search.worldcat.org/title/1039897491",
        summary:
          "Introduces the basic analytical toolkit of law and economics for readers approaching legal doctrine through incentives, efficiency, bargaining, remedies, liability, and enforcement. The book is especially useful as a concise bridge between introductory microeconomic ideas and legal applications."
      },
      {
        title: "Foundations of Economic Analysis of Law",
        authors: "Steven M. Shavell",
        year: "2004",
        venue: "Harvard University Press",
        sourceLabel: "Harvard University Press DOI",
        sourceHref: "https://doi.org/10.4159/9780674043497",
        summary:
          "Synthesizes the economic analysis of property, torts, contracts, litigation, public enforcement, criminal law, and legal procedure. The book is foundational because it gives each field a common structure built around incentives, information, litigation costs, sanctions, risk, and welfare."
      },
      {
        title: "Prospect Theory: An Analysis of Decision under Risk",
        authors: "Daniel Kahneman and Amos Tversky",
        year: "1979",
        venue: "Econometrica",
        sourceLabel: "JSTOR",
        sourceHref: "https://www.jstor.org/stable/1914185",
        summary:
          "Develops a descriptive alternative to expected-utility theory for decisions under risk. The article introduces reference dependence, loss aversion, and probability weighting, giving behavioral law-and-economics scholars a foundation for studying settlement, default rules, investor choice, consumer contracting, and legal responses to risk."
      },
      {
        title: "A Behavioral Approach to Law and Economics",
        authors: "Christine Jolls, Cass R. Sunstein, and Richard H. Thaler",
        year: "1998",
        venue: "Stanford Law Review",
        sourceLabel: "SSRN",
        sourceHref: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2292029",
        summary:
          "Sets out behavioral law and economics as a program for legal analysis that relaxes neoclassical assumptions about rationality, willpower, and self-interest. The article organizes the field around positive prediction, prescriptive legal design, and normative evaluation, asking how legal rules should respond when real actors depart from the rational-actor model."
      },
      {
        title: "Law and Behavioral Science: Removing the Rationality Assumption from Law and Economics",
        authors: "Russell B. Korobkin and Thomas S. Ulen",
        year: "2000",
        venue: "California Law Review",
        sourceLabel: "Berkeley Law Scholarship Repository",
        sourceHref: "https://lawcat.berkeley.edu/record/1117267",
        summary:
          "Argues that law and economics should replace its strong rationality assumption with a more empirically grounded account of human behavior. The article surveys evidence from cognitive psychology and related behavioral sciences, then explains how legal policy analysis changes when bounded rationality, framing, heuristics, and social preferences are taken seriously."
      },
      {
        title: "Anomalies: The Endowment Effect, Loss Aversion, and Status Quo Bias",
        authors: "Daniel Kahneman, Jack L. Knetsch, and Richard H. Thaler",
        year: "1991",
        venue: "Journal of Economic Perspectives",
        sourceLabel: "American Economic Association",
        sourceHref: "https://www.aeaweb.org/articles?id=10.1257/jep.5.1.193",
        summary:
          "Documents evidence that ownership, reference points, and the current state affect valuation and choice. The article is important for legal analysis because endowment effects and status quo bias can alter bargaining behavior, default-rule effects, damage valuation, settlement incentives, and responses to legal entitlements."
      },
      {
        title: "Save More Tomorrow: Using Behavioral Economics to Increase Employee Saving",
        authors: "Richard H. Thaler and Shlomo Benartzi",
        year: "2004",
        venue: "Journal of Political Economy",
        sourceLabel: "University of Chicago Press DOI",
        sourceHref: "https://doi.org/10.1086/380085",
        summary:
          "Studies a retirement-savings program that lets employees commit future salary increases to higher contribution rates. The article connects present bias, inertia, commitment, and default design to the empirical evaluation of workplace savings arrangements."
      },
      {
        title: "Gains, Losses, and the Psychology of Litigation",
        authors: "Jeffrey J. Rachlinski",
        year: "1996",
        venue: "Southern California Law Review",
        sourceLabel: "Cornell Law Scholarship Repository",
        sourceHref: "https://scholarship.law.cornell.edu/facpub/795/",
        summary:
          "Applies prospect theory to litigation behavior by showing how perceived gains and losses can shape risk attitudes in settlement. The article links framing and loss aversion to plaintiff and defendant strategy, fee shifting, attorney counseling, and the limits of models that treat litigation choices as wealth-based expected-value calculations."
      },
      {
        title: "Seduction by Contract: Law, Economics, and Psychology in Consumer Markets",
        authors: "Oren Bar-Gill",
        year: "2012",
        venue: "Oxford University Press",
        sourceLabel: "Oxford Academic",
        sourceHref: "https://academic.oup.com/book/4883",
        summary:
          "Explains consumer contracts as products of market competition interacting with consumer psychology. The book analyzes contract complexity, short-term benefits, long-term costs, hidden fees, optimism, and limited attention, arguing that behavioral market failures can justify carefully designed disclosure and consumer-protection interventions."
      },
      {
        title: "Governing the Commons: The Evolution of Institutions for Collective Action",
        authors: "Elinor Ostrom",
        year: "1990",
        venue: "Cambridge University Press",
        sourceLabel: "Cambridge University Press DOI",
        sourceHref: "https://doi.org/10.1017/CBO9780511807763",
        summary:
          "Uses comparative institutional evidence to examine how communities govern common-pool resources. The book identifies recurring features of durable self-governance, including rule fit, participation, monitoring, graduated sanctions, dispute resolution, and recognition of users' capacity to organize."
      },
      {
        title: "Order Without Law: How Neighbors Settle Disputes",
        authors: "Robert C. Ellickson",
        year: "1991",
        venue: "Harvard University Press",
        sourceLabel: "Open Library",
        sourceHref: "https://openlibrary.org/books/OL1867499M/Order_without_law",
        summary:
          "Studies cattle-trespass disputes and neighbor relations in Shasta County to investigate when informal norms, reputational sanctions, and repeat interaction organize conduct outside formal legal processes. The book is a foundational empirical study of social norms and decentralized order."
      },
      {
        title: "Opting Out of the Legal System: Extralegal Contractual Relations in the Diamond Industry",
        authors: "Lisa Bernstein",
        year: "1992",
        venue: "Journal of Legal Studies",
        sourceLabel: "University of Chicago Press Journals",
        sourceHref: "https://doi.org/10.1086/467902",
        summary:
          "Examines the diamond industry's private rules, arbitration institutions, and reputational sanctions. The article asks why sophisticated traders may prefer extralegal agreements and specialized enforcement when secrecy, speed, repeat dealing, and industry membership alter the relative costs of public adjudication."
      },
      {
        title: "The Economics of Information",
        authors: "George J. Stigler",
        year: "1961",
        venue: "Journal of Political Economy",
        sourceLabel: "University of Chicago Press Journals",
        sourceHref: "https://doi.org/10.1086/258464",
        summary:
          "Treats information acquisition as a costly economic activity rather than an automatic feature of markets. The article develops search-cost reasoning and helps legal researchers analyze disclosure, advertising, price dispersion, market transparency, and the institutional allocation of information-production costs."
      },
      {
        title: "Filling Gaps in Incomplete Contracts: An Economic Theory of Default Rules",
        authors: "Ian Ayres and Robert Gertner",
        year: "1989",
        venue: "Yale Law Journal",
        sourceLabel: "Yale Law School Open Scholarship Repository",
        sourceHref: "https://openyls.law.yale.edu/bitstream/20.500.13051/781/2/Filling_Gaps_in_Incomplete_Contracts___An_Economic_Theory_of_Default_Rules.pdf",
        summary:
          "Distinguishes majoritarian defaults from penalty defaults that encourage better-informed parties to reveal information. The article turns the choice of background contract rules into a problem of strategic information design."
      },
      {
        title: "The Dynamics of Pretrial Negotiation",
        authors: "Kathryn E. Spier",
        year: "1992",
        venue: "Review of Economic Studies",
        sourceLabel: "Oxford Academic",
        sourceHref: "https://academic.oup.com/restud/article/59/1/93/1516746",
        summary:
          "Models sequential settlement bargaining under one-sided incomplete information. The resulting deadline effects, delay, and inefficient trial outcomes show why adjudicated cases are a selected subset of underlying disputes."
      },
      {
        title: "Property as the Law of Things",
        authors: "Henry E. Smith",
        year: "2012",
        venue: "Harvard Law Review",
        sourceLabel: "Harvard Law Review",
        sourceHref: "https://harvardlawreview.org/print/vol-125/property-as-the-law-of-things/",
        summary:
          "Explains property as a modular system that uses thing-based boundaries to manage the information costs of legal relations that bind large and indefinite groups. The article connects exclusion strategies, governance rules, and private-law architecture."
      },
      {
        title: "Contract Theory and the Limits of Contract Law",
        authors: "Alan Schwartz and Robert E. Scott",
        year: "2003",
        venue: "Yale Law Journal",
        sourceLabel: "Yale Law Journal",
        sourceHref: "https://yalelawjournal.org/article/contract-theory-and-the-limits-of-contract-law",
        summary:
          "Develops a normative theory for contracts between firms and asks when courts should enforce party-created terms, supply defaults, or decline broader regulation. The analysis ties legal intervention to information, verification, and institutional competence."
      },
      {
        title: "The Selection of Disputes for Litigation",
        authors: "George L. Priest and Benjamin Klein",
        year: "1984",
        venue: "Journal of Legal Studies",
        sourceLabel: "University of Chicago Press Journals",
        sourceHref: "https://doi.org/10.1086/467732",
        summary:
          "Shows how settlement selects disputes for trial and why observed plaintiff win rates cannot be read as an unfiltered measure of the underlying legal standard. The selection model remains essential for empirical research using litigated cases."
      },
      {
        title: "Conceptualizing Contractual Interpretation",
        authors: "Alan Schwartz and Joel Watson",
        year: "2013",
        venue: "Journal of Legal Studies",
        sourceLabel: "University of Chicago Press Journals",
        sourceHref: "https://www.journals.uchicago.edu/doi/10.1086/668608",
        summary:
          "Models the welfare tradeoffs among interpretive accuracy, contract-writing costs, investment incentives, and litigation. It clarifies when textual rules, contextual inquiry, and arbitration may serve different transactional environments."
      },
      {
        title: "A Behavioral Model of Rational Choice",
        authors: "Herbert A. Simon",
        year: "1955",
        venue: "Quarterly Journal of Economics",
        sourceLabel: "JSTOR",
        sourceHref: "https://www.jstor.org/stable/1884852",
        summary:
          "Replaces fully optimizing behavior with models of bounded rationality and satisficing. The article supplies a foundation for analyzing how limited information and computational capacity affect legal choice and institutional design."
      },
      {
        title: "The Market for 'Lemons': Quality Uncertainty and the Market Mechanism",
        authors: "George A. Akerlof",
        year: "1970",
        venue: "Quarterly Journal of Economics",
        sourceLabel: "JSTOR",
        sourceHref: "https://www.jstor.org/stable/1879431",
        summary:
          "Shows how asymmetric information about quality can drive valuable transactions from a market. The model is central to legal analysis of disclosure, warranties, certification, gatekeeping, and other institutions that make credible information available."
      },
      {
        title: "The Economic Institutions of Capitalism",
        authors: "Oliver E. Williamson",
        year: "1985",
        venue: "Free Press",
        sourceLabel: "WorldCat",
        sourceHref:
          "https://search.worldcat.org/title/The-economic-institutions-of-capitalism-%3A-firms-markets-relational-contracting/oclc/1438949776",
        summary:
          "Develops a comparative framework for markets, firms, and relational contracting based on transaction costs. The book links asset specificity, opportunism, adaptation, and governance safeguards to the institutional organization of exchange."
      },
      {
        title: "Institutions as a Fundamental Cause of Long-Run Growth",
        authors: "Daron Acemoglu, Simon Johnson, and James A. Robinson",
        year: "2005",
        venue: "Handbook of Economic Growth",
        sourceLabel: "Elsevier DOI",
        sourceHref: "https://doi.org/10.1016/S1574-0684(05)01006-3",
        summary:
          "Surveys the proposition that economic institutions shape investment incentives and long-run development. The chapter connects property rights, political power, distributional conflict, and institutional persistence while clarifying the difficulty of identifying causal effects."
      }
    ]
  },
  {
    slug: "corporate-law-governance",
    title: "Corporate Law and Corporate Governance",
    description:
      "Research on ownership structure, agency costs, control rights, fiduciary duties, board oversight, and comparative corporate-law institutions.",
    researchQuestions: [
      "How should corporate law allocate control rights among managers, controlling shareholders, boards, and dispersed investors?",
      "How do fiduciary duties, shareholder litigation, disclosure rules, and board design reduce agency costs?"
    ],
    readings: [
      {
        title: "Production, Information Costs, and Economic Organization",
        authors: "Armen A. Alchian and Harold Demsetz",
        year: "1972",
        venue: "American Economic Review",
        sourceLabel: "EconPapers",
        sourceHref: "https://econpapers.repec.org/article/aeaaecrev/v_3a62_3ay_3a1972_3ai_3a5_3ap_3a777-95.htm",
        summary:
          "Explains the firm through team production, metering costs, shirking, and monitoring rather than through authority alone. The article links ownership, residual claims, and the monitor's role to information costs, making it central to agency-cost analysis and the economic theory of corporate organization."
      },
      {
        title: "Theory of the Firm: Managerial Behavior, Agency Costs and Ownership Structure",
        authors: "Michael C. Jensen and William H. Meckling",
        year: "1976",
        venue: "Journal of Financial Economics",
        sourceLabel: "ScienceDirect",
        sourceHref: "https://www.sciencedirect.com/science/article/pii/0304405X7690026X",
        summary:
          "Develops a theory of firm ownership structure by combining agency theory, property-rights theory, and finance. The paper defines agency costs, explains their relation to the separation of ownership and control, and treats debt and equity claims as contractual responses to incentive conflicts."
      },
      {
        title: "Vertical Integration, Appropriable Rents, and the Competitive Contracting Process",
        authors: "Benjamin Klein, Robert G. Crawford, and Armen A. Alchian",
        year: "1978",
        venue: "Journal of Law and Economics",
        sourceLabel: "IDEAS/RePEc",
        sourceHref: "https://ideas.repec.org/a/ucp/jlawec/v21y1978i2p297-326.html",
        summary:
          "Analyzes vertical integration as a response to appropriable quasi-rents created by relationship-specific investments. The article explains how post-contractual opportunism, asset specificity, and incomplete contracting can make ownership or integration preferable to repeated market contracting."
      },
      {
        title: "A Survey of Corporate Governance",
        authors: "Andrei Shleifer and Robert W. Vishny",
        year: "1997",
        venue: "Journal of Finance",
        sourceLabel: "Wiley Online Library",
        sourceHref: "https://onlinelibrary.wiley.com/doi/10.1111/j.1540-6261.1997.tb04820.x",
        summary:
          "Surveys corporate-governance research by asking how suppliers of finance secure returns from corporate insiders. The paper emphasizes investor legal protection and ownership concentration as central institutional mechanisms across governance systems."
      },
      {
        title: "The Anatomy of Corporate Law",
        authors: "Reinier Kraakman et al.",
        year: "2017",
        venue: "Oxford University Press",
        sourceLabel: "Oxford University Press",
        sourceHref: "https://global.oup.com/academic/product/the-anatomy-of-corporate-law-9780198739630",
        summary:
          "Sets out a functional and comparative account of corporate law across major jurisdictions. The book explains how legal personality, limited liability, delegated management, transferable shares, and investor ownership support enterprise organization while generating agency problems that corporate law must address."
      },
      {
        title: "Mergers and the Market for Corporate Control",
        authors: "Henry G. Manne",
        year: "1965",
        venue: "Journal of Political Economy",
        sourceLabel: "JSTOR",
        sourceHref: "https://www.jstor.org/stable/1829523",
        summary:
          "Develops the market for corporate control as an external governance mechanism. The article argues that takeover threats can discipline inefficient management, links share prices to managerial performance, and frames mergers as a mechanism for reallocating control over corporate assets."
      },
      {
        title: "Corporate Control Transactions",
        authors: "Frank H. Easterbrook and Daniel R. Fischel",
        year: "1981",
        venue: "Yale Law Journal",
        sourceLabel: "Chicago Unbound",
        sourceHref: "https://chicagounbound.uchicago.edu/journal_articles/1165/",
        summary:
          "Applies an economic account of corporate law to transactions that transfer control. The article examines tender offers, mergers, defensive tactics, and fiduciary constraints through the allocation of gains from control changes and the incentives of managers, bidders, and shareholders."
      },
      {
        title: "Value Creation by Business Lawyers: Legal Skills and Asset Pricing",
        authors: "Ronald J. Gilson",
        year: "1984",
        venue: "Yale Law Journal",
        sourceLabel: "Yale Law School Open Scholarship Repository",
        sourceHref: "https://openyls.law.yale.edu/entities/publication/5287108a-2e77-47ce-a3a4-5876c6ec4cbb",
        summary:
          "Explains how business lawyers can create value in corporate transactions by reducing transaction costs, structuring contingent terms, allocating risk, and designing mechanisms that allow parties with different information, time horizons, or risk preferences to complete value-increasing deals."
      },
      {
        title: "Explaining Variation in Takeover Defenses: Blame the Lawyers",
        authors: "John C. Coates IV",
        year: "2001",
        venue: "California Law Review",
        sourceLabel: "Harvard DASH",
        sourceHref: "https://dash.harvard.edu/entities/publication/73120378-d4ff-6bd4-e053-0100007fdf3b",
        summary:
          "Studies variation in takeover defenses among IPO firms and argues that legal advice helps explain why companies adopt different antitakeover arrangements. The article connects deal structure, lawyer expertise, charter terms, underwriter quality, venture-capital backing, and the market for corporate legal services."
      },
      {
        title: "The Case Against Board Veto in Corporate Takeovers",
        authors: "Lucian A. Bebchuk",
        year: "2002",
        venue: "University of Chicago Law Review",
        sourceLabel: "Chicago Unbound",
        sourceHref: "https://chicagounbound.uchicago.edu/uclrev/vol69/iss3/10/",
        summary:
          "Argues that target boards should not retain veto power over takeover bids once shareholders can make an undistorted choice. The article evaluates board-veto arguments based on director information, bargaining, long-term value, stakeholder protection, and shareholder wealth, then connects the analysis to judicial review of defensive tactics."
      },
      {
        title: "The Powerful Antitakeover Force of Staggered Boards: Theory, Evidence, and Policy",
        authors: "Lucian A. Bebchuk, John C. Coates IV, and Guhan Subramanian",
        year: "2002",
        venue: "Stanford Law Review",
        sourceLabel: "SSRN",
        sourceHref: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=304388",
        summary:
          "Shows how effective staggered boards can sharply reduce the success of hostile bids by forcing bidders to win multiple elections over time. The article combines theory and evidence from hostile bids to evaluate staggered boards, poison pills, shareholder choice, and the costs of antitakeover protection."
      },
      {
        title: "Agency Problems and the Theory of the Firm",
        authors: "Eugene F. Fama",
        year: "1980",
        venue: "Journal of Political Economy",
        sourceLabel: "JSTOR",
        sourceHref: "https://www.jstor.org/stable/1837292",
        summary:
          "Recasts the firm as a nexus of contracts in which ownership of the firm is not necessary for control of productive activity. The article explains how labor, capital, managerial services, and risk bearing can be separated, and how managerial discipline can arise through managerial labor markets and capital markets."
      },
      {
        title: "Moral Hazard and Observability",
        authors: "Bengt Holmstrom",
        year: "1979",
        venue: "Bell Journal of Economics",
        sourceLabel: "JSTOR",
        sourceHref: "https://www.jstor.org/stable/3003320",
        summary:
          "Analyzes incentive contracts when an agent's action cannot be directly observed but signals about performance are available. The article develops the informativeness principle, showing how optimal compensation should use performance measures that provide information about the agent's effort."
      },
      {
        title: "Separation of Ownership and Control",
        authors: "Eugene F. Fama and Michael C. Jensen",
        year: "1983",
        venue: "Journal of Law and Economics",
        sourceLabel: "University of Chicago Press Journals",
        sourceHref: "https://www.journals.uchicago.edu/doi/10.1086/467037",
        summary:
          "Explains why complex organizations separate decision management from decision control. The paper links residual claims, risk bearing, monitoring, and board-like control structures to the survival of organizations in which ownership and control are divided."
      },
      {
        title: "Investor Protection and Corporate Governance",
        authors: "Rafael La Porta, Florencio Lopez-de-Silanes, Andrei Shleifer, and Robert W. Vishny",
        year: "2000",
        venue: "Journal of Financial Economics",
        sourceLabel: "ScienceDirect",
        sourceHref: "https://www.sciencedirect.com/science/article/pii/S0304405X00000659",
        summary:
          "Reviews cross-country evidence on ownership concentration, capital-market depth, dividend policy, and access to external finance. The paper argues that legal protection of shareholders and creditors from insider expropriation offers a common explanation for these differences and is more informative than a simple bank-centered versus market-centered classification."
      },
      {
        title: "Fixing Freezeouts",
        authors: "Guhan Subramanian",
        year: "2005",
        venue: "Yale Law Journal",
        sourceLabel: "Yale Law Journal",
        sourceHref: "https://www.yalelawjournal.org/article/fixing-freezeouts",
        summary:
          "Analyzes freeze-out transactions in which controlling shareholders buy out minority shareholders. The article evaluates doctrinal differences across transactional forms, minority-protection devices, special committees, majority-of-the-minority approval, judicial review, and the incentives created by Delaware doctrine."
      },
      {
        title: "Corporate Governance and Equity Prices",
        authors: "Paul Gompers, Joy Ishii, and Andrew Metrick",
        year: "2003",
        venue: "Quarterly Journal of Economics",
        sourceLabel: "Oxford Academic",
        sourceHref: "https://academic.oup.com/qje/article/118/1/107/1917018",
        summary:
          "Constructs a governance index from twenty-four takeover-defense and shareholder-rights provisions for a large panel of U.S. firms in the 1990s. The paper finds that stronger shareholder rights are associated with higher firm value and abnormal stock returns, while weaker rights are associated with lower valuation."
      },
      {
        title: "What Matters in Corporate Governance?",
        authors: "Lucian A. Bebchuk, Alma Cohen, and Allen Ferrell",
        year: "2009",
        venue: "Review of Financial Studies",
        sourceLabel: "Oxford Academic",
        sourceHref: "https://doi.org/10.1093/rfs/hhn099",
        summary:
          "Reassesses broad governance indices by isolating six entrenchment provisions with the strongest association to firm value and stock returns. The paper proposes an entrenchment index and shows that these provisions carry much of the explanatory power attributed to larger governance measures."
      },
      {
        title: "Pay Without Performance: The Unfulfilled Promise of Executive Compensation",
        authors: "Lucian A. Bebchuk and Jesse M. Fried",
        year: "2004",
        venue: "Harvard University Press",
        sourceLabel: "Harvard Law School",
        sourceHref: "https://hls.harvard.edu/bibliography/pay-without-performance-the-unfulfilled-promise-of-executive-compensation/",
        summary:
          "Challenges the view that executive compensation is set through arm's-length bargaining between boards and managers. The book argues that managerial influence over pay arrangements can weaken the link between compensation and performance and can generate governance costs for shareholders."
      },
      {
        title: "The Costs and Benefits of Ownership: A Theory of Vertical and Lateral Integration",
        authors: "Sanford J. Grossman and Oliver D. Hart",
        year: "1986",
        venue: "Journal of Political Economy",
        sourceLabel: "DOI",
        sourceHref: "https://doi.org/10.1086/261404",
        summary:
          "Develops a property-rights theory of ownership by asking how residual control rights should be allocated when contracts are incomplete. The paper explains integration as a governance response to investment incentives and hold-up problems."
      },
      {
        title: "Property Rights and the Nature of the Firm",
        authors: "Oliver Hart and John Moore",
        year: "1990",
        venue: "Journal of Political Economy",
        sourceLabel: "DOI",
        sourceHref: "https://doi.org/10.1086/261729",
        summary:
          "Extends the incomplete-contracts approach to firm boundaries by focusing on residual rights of control over assets. The paper shows how ownership can shape ex ante investment incentives and the allocation of authority inside and across firms."
      },
      {
        title: "Firms, Contracts, and Financial Structure",
        authors: "Oliver Hart",
        year: "1995",
        venue: "Oxford University Press",
        sourceLabel: "Oxford Academic",
        sourceHref: "https://academic.oup.com/book/3631",
        summary:
          "Presents an incomplete-contracting account of firms, ownership, debt, bankruptcy, and financial structure. The book links residual control rights, renegotiation, asset ownership, and capital structure to the allocation of authority and incentives inside economic organizations."
      },
      {
        title: "Hedge Funds in Corporate Governance and Corporate Control",
        authors: "Marcel Kahan and Edward B. Rock",
        year: "2007",
        venue: "University of Pennsylvania Law Review",
        sourceLabel: "University of Pennsylvania Carey Law Scholarship Repository",
        sourceHref: "https://scholarship.law.upenn.edu/penn_law_review/vol155/iss5/1/",
        summary:
          "Analyzes hedge funds as active monitors and participants in corporate control contests. The article explains why hedge funds differ from traditional institutional investors and how their incentives affect voting, activism, mergers, and governance outcomes."
      },
      {
        title: "The New Look of Deal Protection",
        authors: "Fernan Restrepo and Guhan Subramanian",
        year: "2017",
        venue: "Stanford Law Review",
        sourceLabel: "Stanford Law Review",
        sourceHref: "https://review.law.stanford.edu/wp-content/uploads/sites/3/2017/04/69-Stan-L-Rev-1013.pdf",
        summary:
          "Studies how deal-protection devices in M&A practice changed from 2003 to 2015, including termination fees, match rights, asset lockups, and side agreements with deal-protection effects. The article connects transactional practice to Delaware doctrine, game theory, and judicial review of provisions that deter competing bids."
      },
      {
        title: "Agency Problems and Legal Strategies",
        authors: "John Armour, Henry Hansmann, and Reinier Kraakman",
        year: "2017",
        venue: "The Anatomy of Corporate Law",
        sourceLabel: "Oxford Academic DOI",
        sourceHref: "https://doi.org/10.1093/acprof:oso/9780198739630.003.0002",
        summary:
          "Organizes corporate-law doctrine around recurring agency problems and legal strategies. The chapter offers a learning framework for connecting fiduciary duties, voting rights, disclosure, board structures, and enforcement mechanisms."
      },
      {
        title: "The Essential Role of Organizational Law",
        authors: "Henry Hansmann and Reinier Kraakman",
        year: "2000",
        venue: "Yale Law Journal",
        sourceLabel: "Yale Law School Open Scholarship Repository",
        sourceHref: "https://openyls.law.yale.edu/handle/20.500.13051/8820",
        summary:
          "Argues that organizational law's core economic function is asset partitioning: separating pools of assets and creditors' claims in ways that ordinary contract cannot easily replicate. The article explains why legal entities matter for enterprise organization, creditor protection, and the structure of firm finance."
      },
      {
        title: "The End of History for Corporate Law",
        authors: "Henry Hansmann and Reinier H. Kraakman",
        year: "2001",
        venue: "Georgetown Law Journal",
        sourceLabel: "Yale Law School Open Scholarship Repository",
        sourceHref: "https://openyls.law.yale.edu/handle/20.500.13051/4602",
        summary:
          "Argues that developed-market corporate law was converging around a shareholder-oriented model of the corporation. The essay is important not because the convergence claim is uncontested, but because it frames corporate-law comparison around ownership, capital markets, labor, state influence, and the normative force of shareholder value."
      },
      {
        title: "The Economic Structure of Corporate Law",
        authors: "Frank H. Easterbrook and Daniel R. Fischel",
        year: "1991",
        venue: "Harvard University Press",
        sourceLabel: "Harvard University Press",
        sourceHref: "https://www.hup.harvard.edu/books/9780674235397",
        summary:
          "Develops a contractual and economic account of corporate law as a set of default and mandatory terms for organizing business associations. The book analyzes limited liability, fiduciary duties, voting, takeovers, disclosure, and corporate litigation through incentives, risk allocation, and market constraints."
      },
      {
        title: "The Agency Costs of Agency Capitalism: Activist Investors and the Revaluation of Governance Rights",
        authors: "Ronald J. Gilson and Jeffrey N. Gordon",
        year: "2013",
        venue: "Columbia Law Review",
        sourceLabel: "Columbia Law Review",
        sourceHref: "https://columbialawreview.org/content/the-agency-costs-of-agency-capitalism-activist-investors-and-the-revaluation-of-governance-rights/",
        summary:
          "Analyzes governance under institutional shareholding and dispersed beneficial ownership. The article explains how activist investors can supply monitoring and information that diversified institutional investors may not produce themselves, while also raising questions about incentives, time horizons, and governance-right valuation."
      },
      {
        title: "Agency Costs of Free Cash Flow, Corporate Finance, and Takeovers",
        authors: "Michael C. Jensen",
        year: "1986",
        venue: "American Economic Review",
        sourceLabel: "SSRN",
        sourceHref: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=99580",
        summary:
          "Develops the free-cash-flow account of managerial agency costs. The article explains why managers may retain and invest excess cash rather than distribute it, and why debt, takeovers, and organizational restructuring can constrain discretion while creating their own risks and costs."
      },
      {
        title: "Are CEOs Rewarded for Luck? The Ones Without Principals Are",
        authors: "Marianne Bertrand and Sendhil Mullainathan",
        year: "2001",
        venue: "Quarterly Journal of Economics",
        sourceLabel: "Oxford Academic handle",
        sourceHref: "https://hdl.handle.net/10.1162/00335530152466269",
        summary:
          "Tests whether executive compensation responds to observable shocks outside a chief executive's control. The paper reports that pay responds to luck and that this relationship is weaker where governance is stronger, contributing evidence to debates between optimal contracting and managerial influence."
      },
      {
        title: "Management Ownership and Market Valuation: An Empirical Analysis",
        authors: "Randall Morck, Andrei Shleifer, and Robert W. Vishny",
        year: "1988",
        venue: "Journal of Financial Economics",
        sourceLabel: "ScienceDirect DOI",
        sourceHref: "https://doi.org/10.1016/0304-405X(88)90048-7",
        summary:
          "Examines the relationship between management ownership and Tobin's Q in large U.S. firms. The reported nonmonotonic association is important for corporate-governance research because it distinguishes incentive alignment from the possibility that higher control can entrench managers."
      },
      {
        title: "Higher Market Valuation of Companies with a Small Board of Directors",
        authors: "David Yermack",
        year: "1996",
        venue: "Journal of Financial Economics",
        sourceLabel: "ScienceDirect DOI",
        sourceHref: "https://doi.org/10.1016/0304-405X(95)00844-5",
        summary:
          "Studies board size and firm value in a sample of large U.S. industrial companies. The article reports an inverse association between board size and Tobin's Q and is a canonical reference for empirical debates over board coordination, monitoring, and governance effectiveness."
      },
      {
        title: "Corporate Governance and Control",
        authors: "Marco Becht, Patrick Bolton, and Ailsa Röell",
        year: "2003",
        venue: "Handbook of the Economics of Finance",
        sourceLabel: "ScienceDirect",
        sourceHref: "https://www.sciencedirect.com/science/article/abs/pii/S1574010203010057",
        summary:
          "Surveys the economic problems created by the separation of ownership and control and compares governance mechanisms across legal and financial systems. The chapter links blockholding, boards, takeovers, investor protection, and political constraints to the allocation of control."
      },
      {
        title: "Returns to Shareholder Activism: Evidence from a Clinical Study of the Hermes UK Focus Fund",
        authors: "Marco Becht, Julian Franks, Colin Mayer, and Stefano Rossi",
        year: "2009",
        venue: "Review of Financial Studies",
        sourceLabel: "Oxford Academic DOI",
        sourceHref: "https://doi.org/10.1093/rfs/hhn054",
        summary:
          "Uses a clinical study of a UK activist fund to examine private engagement with portfolio companies. The article connects intervention records and outcomes to the mechanisms, costs, and returns of institutional shareholder activism."
      },
      {
        title: "Rethinking Corporate Governance: The Law and Economics of Control Powers",
        authors: "Alessio M. Pacces",
        year: "2012",
        venue: "Routledge",
        sourceLabel: "Routledge",
        sourceHref: "https://www.routledge.com/Rethinking-Corporate-Governance-The-Law-and-Economics-of-Control-Powers/Pacces/p/book/9781138191259",
        summary:
          "Develops a comparative law-and-economics account of corporate control powers and private benefits of control. The book examines distributions of corporate authority, self-dealing, and takeover regulation in the United States, United Kingdom, Italy, Sweden, and the Netherlands."
      },
      {
        title: "Comparative Law",
        authors: "Mathias Siems",
        year: "2022",
        venue: "Cambridge University Press",
        sourceLabel: "Cambridge University Press",
        sourceHref: "https://www.cambridge.org/highereducation/books/comparative-law/1CCBDFCE1ADB48DD34E56DB72E5D9022",
        summary:
          "Presents comparative law as a contextual and interdisciplinary method rather than a catalogue of national rules. The third edition connects legal comparison to economics and other social sciences and evaluates competing methods for studying institutions across jurisdictions."
      },
      {
        title: "The Cambridge Handbook of Comparative Law",
        authors: "Mathias Siems and Po Jen Yap, editors",
        year: "2024",
        venue: "Cambridge University Press",
        sourceLabel: "Cambridge University Press",
        sourceHref: "https://www.cambridge.org/core/books/cambridge-handbook-of-comparative-law/4A8AE948DE282BB5E73BF9B0519C9B19",
        summary:
          "Organizes comparative-law scholarship around method, legal families, substantive fields, and law beyond the state. The volume helps corporate-law researchers distinguish functional comparison from historical, cultural, empirical, and transnational approaches."
      },
      {
        title: "Ownership and Control of German Corporations",
        authors: "Julian Franks and Colin Mayer",
        year: "2001",
        venue: "Review of Financial Studies",
        sourceLabel: "Oxford Academic",
        sourceHref: "https://academic.oup.com/rfs/article/14/4/943/1595587",
        summary:
          "Studies ownership, board turnover, block transfers, and private benefits of control in German corporations. The findings separate static ownership concentration from the dynamic market for control and provide a benchmark for comparing continental European and Anglo-American governance."
      },
      {
        title: "Firm Commitment: Why the Corporation Is Failing Us and How to Restore Trust in It",
        authors: "Colin Mayer",
        year: "2013",
        venue: "Oxford University Press",
        sourceLabel: "Oxford University Press",
        sourceHref: "https://blog.oup.com/2013/02/the-corporation-colin-mayer/",
        summary:
          "Examines how ownership, governance, and corporate purpose affect trust and long-term commitment. The book broadens governance analysis beyond agency costs by asking how corporations credibly protect the parties and social interests on which productive enterprise depends."
      },
      {
        title: "The Theory of Corporate Finance",
        authors: "Jean Tirole",
        year: "2006",
        venue: "Princeton University Press",
        sourceLabel: "Princeton University Press",
        sourceHref: "https://assets.press.princeton.edu/tirole/chap1.pdf",
        summary:
          "Provides a unified incentive-based treatment of corporate finance. The book connects financing constraints, control rights, governance, liquidity, takeovers, and investor protection through agency problems and asymmetric information."
      },
      {
        title: "A Theory of Friendly Boards",
        authors: "Renée B. Adams and Daniel Ferreira",
        year: "2007",
        venue: "Journal of Finance",
        sourceLabel: "Wiley DOI",
        sourceHref: "https://doi.org/10.1111/j.1540-6261.2007.01206.x",
        summary:
          "Models the board's dual role as monitor and adviser when management controls access to firm-specific information. The article explains why board independence can improve monitoring yet weaken communication and advice."
      },
      {
        title: "Women in the Boardroom and Their Impact on Governance and Performance",
        authors: "Renée B. Adams and Daniel Ferreira",
        year: "2009",
        venue: "Journal of Financial Economics",
        sourceLabel: "Elsevier DOI",
        sourceHref: "https://doi.org/10.1016/j.jfineco.2008.10.007",
        summary:
          "Studies gender-diverse boards, director attendance, monitoring, and firm outcomes in U.S. public companies. It is a useful model of how board-composition evidence should be separated from universal claims about optimal mandates."
      },
      {
        title: "Optimal Debt Structure and the Number of Creditors",
        authors: "Patrick Bolton and David S. Scharfstein",
        year: "1996",
        venue: "Journal of Political Economy",
        sourceLabel: "University of Chicago Press DOI",
        sourceHref: "https://doi.org/10.1086/262030",
        summary:
          "Models debt structure as a tradeoff between deterring strategic default and limiting inefficient liquidation. The analysis shows how creditor number and claim structure can change bargaining and control in financial distress."
      },
      {
        title: "Contract Theory",
        authors: "Patrick Bolton and Mathias Dewatripont",
        year: "2005",
        venue: "MIT Press",
        sourceLabel: "MIT Press",
        sourceHref: "https://mitpress.mit.edu/9780262025768/contract-theory/",
        summary:
          "Synthesizes adverse selection, moral hazard, multilateral contracting, incomplete contracts, and control rights. The book provides the analytical foundations for studying firms and financing arrangements as incentive and information systems."
      },
      {
        title: "Ownership: Evolution and Regulation",
        authors: "Julian Franks, Colin Mayer, and Stefano Rossi",
        year: "2009",
        venue: "Review of Financial Studies",
        sourceLabel: "Oxford Academic DOI",
        sourceHref: "https://doi.org/10.1093/rfs/hhn108",
        summary:
          "Uses the long-run evolution of British corporate ownership to study how investor protection, stock markets, and informal relations developed together. The article cautions against treating present ownership structures as the immediate product of formal law."
      },
      {
        title: "The Foundations of Anglo-American Corporate Fiduciary Law",
        authors: "David Kershaw",
        year: "2018",
        venue: "Cambridge University Press",
        sourceLabel: "LSE author profile",
        sourceHref: "https://www.lse.ac.uk/people/david-kershaw",
        summary:
          "Reconstructs the historical development of corporate fiduciary law in the United Kingdom and United States. The book shows how doctrinal categories and institutional settings produced paths that resist simple functional equivalence."
      },
      {
        title: "Determinants of Corporate Borrowing",
        authors: "Stewart C. Myers",
        year: "1977",
        venue: "Journal of Financial Economics",
        sourceLabel: "Elsevier DOI",
        sourceHref: "https://doi.org/10.1016/0304-405X(77)90015-0",
        summary:
          "Explains how debt can distort later investment when part of a project's value accrues to existing creditors. The article supplies the classic debt-overhang mechanism used in corporate finance, restructuring, and covenant analysis."
      }
    ]
  },
  {
    slug: "securities-regulation",
    title: "Securities Regulation",
    description:
      "Research on disclosure, investor protection, enforcement probability, sanctions, gatekeeper liability, and capital-market information quality.",
    researchQuestions: [
      "How should securities enforcement balance detection probability, sanction magnitude, and compliance costs?",
      "How do investor protection, disclosure, and gatekeeper liability affect information production and financing costs?"
    ],
    readings: [
      {
        title: "Law and Finance",
        authors: "Rafael La Porta, Florencio Lopez-de-Silanes, Andrei Shleifer, and Robert W. Vishny",
        year: "1998",
        venue: "Journal of Political Economy",
        sourceLabel: "University of Chicago Press Journals",
        sourceHref: "https://www.journals.uchicago.edu/doi/10.1086/250042",
        summary:
          "Examines shareholder and creditor protection, legal origin, and enforcement quality across forty-nine countries. The paper finds stronger investor protections in common-law systems, weaker protections in French civil-law systems, and a negative relation between investor protection and ownership concentration in large public firms."
      },
      {
        title: "Efficient Capital Markets: A Review of Theory and Empirical Work",
        authors: "Eugene F. Fama",
        year: "1970",
        venue: "Journal of Finance",
        sourceLabel: "JSTOR",
        sourceHref: "https://www.jstor.org/stable/2325486",
        summary:
          "Reviews theoretical and empirical work on efficient capital markets and organizes the literature around weak-form, semi-strong-form, and strong-form tests. The article supplies the background for later legal debates over disclosure, reliance, price accuracy, and securities-fraud damages."
      },
      {
        title: "On the Impossibility of Informationally Efficient Markets",
        authors: "Sanford J. Grossman and Joseph E. Stiglitz",
        year: "1980",
        venue: "American Economic Review",
        sourceLabel: "EconPapers",
        sourceHref: "https://econpapers.repec.org/RePEc:aea:aecrev:v:70:y:1980:i:3:p:393-408",
        summary:
          "Shows why perfectly informationally efficient markets are inconsistent with costly information acquisition. The article argues that prices must remain sufficiently noisy or incomplete to compensate informed traders, making it central to legal debates over disclosure, informed trading, market efficiency, and the economics of price discovery."
      },
      {
        title: "The Economic Theory of Public Enforcement of Law",
        authors: "A. Mitchell Polinsky and Steven Shavell",
        year: "2000",
        venue: "Journal of Economic Literature",
        sourceLabel: "American Economic Association",
        sourceHref: "https://www.aeaweb.org/articles?id=10.1257/jel.38.1.45",
        summary:
          "Surveys the economic theory of public enforcement by public agents such as inspectors, auditors, police, and prosecutors. The article analyzes detection probability, sanction magnitude and form, liability rules, enforcement errors, settlement, self-reporting, repeat offenders, marginal deterrence, and principal-agent problems in enforcement."
      },
      {
        title: "The Law and Economics of Self-Dealing",
        authors: "Simeon Djankov, Rafael La Porta, Florencio Lopez-de-Silanes, and Andrei Shleifer",
        year: "2008",
        venue: "Journal of Financial Economics",
        sourceLabel: "ScienceDirect",
        sourceHref: "https://www.sciencedirect.com/science/article/pii/S0304405X08000679",
        summary:
          "Builds an anti-self-dealing index to measure minority-shareholder protection against insider expropriation in seventy-two countries. Using a standardized related-party transaction, the study compares disclosure, approval, and litigation mechanisms and finds that the index predicts stock-market outcomes better than earlier anti-director-rights measures."
      },
      {
        title: "Mandatory Disclosure and the Protection of Investors",
        authors: "Frank H. Easterbrook and Daniel R. Fischel",
        year: "1984",
        venue: "Virginia Law Review",
        sourceLabel: "Chicago Unbound",
        sourceHref: "https://chicagounbound.uchicago.edu/journal_articles/1177/",
        summary:
          "Evaluates the investor-protection case for mandatory securities disclosure from an economic perspective. The article questions whether public disclosure mandates outperform market and contractual information-production mechanisms, emphasizing information costs, price formation, and the possibility of regulatory failure."
      },
      {
        title: "Market Failure and the Economic Case for a Mandatory Disclosure System",
        authors: "John C. Coffee Jr.",
        year: "1984",
        venue: "Virginia Law Review",
        sourceLabel: "JSTOR DOI",
        sourceHref: "https://doi.org/10.2307/1073083",
        summary:
          "Presents the economic case for a mandatory disclosure system in securities markets. The article argues that market failures, information asymmetries, and external benefits from standardized issuer disclosure can justify legal requirements that cannot be fully replicated by private contracting alone."
      },
      {
        title: "What Works in Securities Laws?",
        authors: "Rafael La Porta, Florencio Lopez-de-Silanes, and Andrei Shleifer",
        year: "2006",
        venue: "Journal of Finance",
        sourceLabel: "Wiley DOI",
        sourceHref: "https://doi.org/10.1111/j.1540-6261.2006.00828.x",
        summary:
          "Compares securities laws in forty-nine countries to assess their relationship with stock-market development. The paper finds strong evidence that disclosure rules and liability standards facilitating private enforcement support market development, while public enforcement measures show weaker and more limited associations."
      },
      {
        title: "Securities Regulation",
        authors: "Louis Loss, Joel Seligman, and Troy A. Paredes",
        year: "2017",
        venue: "Wolters Kluwer",
        sourceLabel: "Berkeley Law Library",
        sourceHref: "https://lawcat.berkeley.edu/record/90523",
        summary:
          "A multi-volume treatise that organizes federal securities regulation across registration, disclosure, trading markets, antifraud rules, enforcement, administrative practice, and comparative materials. It is included as a doctrinal anchor because serious economic or empirical analysis of securities law still depends on accurate knowledge of the statutory and regulatory architecture."
      },
      {
        title: "The Transformation of Wall Street: A History of the Securities and Exchange Commission and Modern Corporate Finance",
        authors: "Joel Seligman",
        year: "1995",
        venue: "Northeastern University Press",
        sourceLabel: "Berkeley Law Library",
        sourceHref: "https://lawcat.berkeley.edu/record/157685",
        summary:
          "Traces the institutional development of the Securities and Exchange Commission and the relation between federal securities regulation, market structure, and modern corporate finance. The book is useful for readers who need to understand securities law as an administrative and historical project rather than only a set of liability rules."
      },
      {
        title: "Public and Private Enforcement of Securities Laws: Resource-Based Evidence",
        authors: "Howell E. Jackson and Mark J. Roe",
        year: "2009",
        venue: "Journal of Financial Economics",
        sourceLabel: "ScienceDirect",
        sourceHref: "https://www.sciencedirect.com/science/article/abs/pii/S0304405X09000786",
        summary:
          "Reexamines the role of public and private securities enforcement using resource-based measures of public regulators. The article tests whether regulatory budgets, staffing, and enforcement resources help explain securities-market development beyond private liability and disclosure rules."
      },
      {
        title: "Behavioral Economics and the SEC",
        authors: "Stephen J. Choi and A. C. Pritchard",
        year: "2003",
        venue: "Stanford Law Review",
        sourceLabel: "University of Michigan Law Repository",
        sourceHref: "https://repository.law.umich.edu/facarticles/1576/",
        summary:
          "Examines how behavioral biases among retail and institutional investors complicate securities regulation. The article uses behavioral law and economics to assess disclosure, antifraud enforcement, investor education, cooling-off rules, and regulatory interventions that assume investors can process information rationally."
      },
      {
        title: "The Essential Role of Securities Regulation",
        authors: "Zohar Goshen and Gideon Parchomovsky",
        year: "2006",
        venue: "Duke Law Journal",
        sourceLabel: "Duke Law Scholarship Repository",
        sourceHref: "https://scholarship.law.duke.edu/dlj/vol55/iss4/1/",
        summary:
          "Argues that securities regulation should be understood as creating and protecting a competitive market for sophisticated information traders. The article links disclosure duties, antifraud rules, manipulation restrictions, and insider-trading regulation to the production and verification of market information."
      },
      {
        title: "Stock Market Manipulation and Its Regulation",
        authors: "Merritt B. Fox, Lawrence R. Glosten, and Gabriel V. Rauterberg",
        year: "2018",
        venue: "Yale Journal on Regulation",
        sourceLabel: "Yale Law School Open Scholarship Repository",
        sourceHref: "https://openyls.law.yale.edu/entities/publication/5be93c09-b916-4d8d-a063-3f06db45d68e",
        summary:
          "Develops an economic and market-microstructure account of stock-market manipulation. The article distinguishes different manipulative strategies, analyzes their effects on prices, liquidity, and welfare, and uses that framework to assess how regulation should identify and deter harmful trading conduct."
      },
      {
        title: "The Mechanisms of Market Efficiency",
        authors: "Ronald J. Gilson and Reinier H. Kraakman",
        year: "1984",
        venue: "Virginia Law Review",
        sourceLabel: "JSTOR",
        sourceHref: "https://www.jstor.org/stable/1073085",
        summary:
          "Explains market efficiency through the mechanisms by which information becomes reflected in securities prices. The article remains central for understanding disclosure policy, informed trading, market intermediaries, and the legal significance of price accuracy."
      },
      {
        title: "The Economics of Disclosure and Financial Reporting Regulation: Evidence and Suggestions for Future Research",
        authors: "Christian Leuz and Peter D. Wysocki",
        year: "2016",
        venue: "Journal of Accounting Research",
        sourceLabel: "DOI",
        sourceHref: "https://doi.org/10.1111/1475-679X.12115",
        summary:
          "Reviews empirical evidence on disclosure and financial-reporting regulation, including transparency, reporting standards, cost-benefit analysis, real effects, and institutional variation. The article is useful for securities-law readers because it connects legal disclosure mandates to capital-market evidence and regulatory evaluation."
      },
      {
        title: "Mandatory Disclosure as a Solution to Agency Problems",
        authors: "Paul G. Mahoney",
        year: "1995",
        venue: "University of Chicago Law Review",
        sourceLabel: "Chicago Unbound",
        sourceHref: "https://chicagounbound.uchicago.edu/uclrev/vol62/iss3/3/",
        summary:
          "Reframes mandatory disclosure as a response to agency problems between managers and investors rather than only as a cure for market-wide information failure. The article is useful for comparing disclosure mandates with private contracting and governance mechanisms."
      },
      {
        title: "Empowering Investors: A Market Approach to Securities Regulation",
        authors: "Roberta Romano",
        year: "1998",
        venue: "Yale Law Journal",
        sourceLabel: "Yale Law School Legal Scholarship Repository",
        sourceHref: "https://digitalcommons.law.yale.edu/fss_papers/1919/",
        summary:
          "Develops a market-oriented critique of centralized securities regulation and argues for more issuer choice in regulatory regimes. The article is a key reference for debates over regulatory competition, investor protection, and federal securities law."
      },
      {
        title: "Promoting Issuer Choice in Securities Regulation",
        authors: "Stephen J. Choi",
        year: "2001",
        venue: "Virginia Journal of International Law",
        sourceLabel: "NYU Law Scholarship Repository",
        sourceHref: "https://gretchen.law.nyu.edu/fac-articles/1384/",
        summary:
          "Develops an issuer-choice approach to securities regulation in the context of regulatory competition and cross-border capital markets. The article asks when investors can price legal protections and when portable regulatory choice might discipline or fragment securities-law design."
      },
      {
        title: "The Legal and Institutional Preconditions for Strong Securities Markets",
        authors: "Bernard S. Black",
        year: "2001",
        venue: "UCLA Law Review",
        sourceLabel: "Northwestern Law Faculty Repository",
        sourceHref: "https://scholarlycommons.law.northwestern.edu/facultyworkingpapers/66/",
        summary:
          "Identifies the legal and institutional conditions needed for strong public securities markets. The article emphasizes disclosure, enforcement, accounting, market intermediaries, and institutional credibility as complements rather than isolated rules."
      },
      {
        title: "How to Fix Wall Street: A Voucher Financing Proposal for Securities Intermediaries",
        authors: "Stephen J. Choi and Jill E. Fisch",
        year: "2003",
        venue: "Yale Law Journal",
        sourceLabel: "Yale Law Journal",
        sourceHref: "https://www.yalelawjournal.org/pdf/394_35j1tgr6.pdf",
        summary:
          "Proposes a voucher-financing mechanism for securities intermediaries such as analysts, auditors, proxy advisers, and institutional monitors. The article treats information intermediaries as a collective-action problem and asks how legal design might finance monitoring without relying only on issuer-paid or investor-paid models."
      },
      {
        title: "EU Securities and Financial Markets Regulation",
        authors: "Niamh Moloney",
        year: "2023",
        venue: "Oxford University Press",
        sourceLabel: "Oxford Academic",
        sourceHref: "https://academic.oup.com/oxford-law-pro/book/57973",
        summary:
          "Provides a comprehensive account of the EU securities and financial-markets regulatory regime after the global financial crisis and subsequent reforms. The fourth edition places EU market regulation in its market, political, institutional, and international context, including Capital Markets Union, sustainable finance, Brexit, supervision, enforcement, and the role of ESMA."
      },
      {
        title: "How to Protect Investors: Lessons from the EC and the UK",
        authors: "Niamh Moloney",
        year: "2010",
        venue: "Cambridge University Press",
        sourceLabel: "LSE Research Online",
        sourceHref: "https://eprints.lse.ac.uk/27136/",
        summary:
          "Studies retail investor protection through the experience of the EC and the UK. The book treats investor protection as an institutional design problem involving product distribution, investment advice, disclosure, conduct regulation, regulatory capacity, and the limits of harmonized rules in retail investment markets."
      },
      {
        title: "The Scope of Private Securities Litigation: In Search of Liability Standards for Secondary Defendants",
        authors: "Jill E. Fisch",
        year: "1999",
        venue: "Columbia Law Review",
        sourceLabel: "Penn Carey Law Scholarship Repository",
        sourceHref: "https://scholarship.law.upenn.edu/faculty_scholarship/1218/",
        summary:
          "Analyzes liability standards for secondary actors after Central Bank and later statutory developments. The article is important for understanding how private securities litigation allocates responsibility among issuers, lawyers, auditors, underwriters, and other professionals whose conduct affects market integrity."
      },
      {
        title: "Top Cop or Regulatory Flop? The SEC at 75",
        authors: "Jill E. Fisch",
        year: "2009",
        venue: "Virginia Law Review",
        sourceLabel: "SSRN",
        sourceHref: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1392284",
        summary:
          "Evaluates the Securities and Exchange Commission after the financial crisis by focusing on enforcement, financial transparency, investor protection, market complexity, and self-regulation. The article frames SEC reform as a question of institutional capacity rather than merely agency consolidation."
      },
      {
        title: "The Regulation of Insider Trading",
        authors: "Dennis W. Carlton and Daniel R. Fischel",
        year: "1983",
        venue: "Stanford Law Review",
        sourceLabel: "JSTOR",
        sourceHref: "https://www.jstor.org/stable/1228706",
        summary:
          "Presents an economic analysis of insider-trading regulation by asking whether trading by informed corporate insiders is better addressed through public prohibition, private contracting, or firm-level governance arrangements. The article remains a key reference for debates over information, incentives, compensation, and market fairness."
      },
      {
        title: "Insider Trading: Should It Be Prohibited?",
        authors: "Hayne E. Leland",
        year: "1992",
        venue: "Journal of Political Economy",
        sourceLabel: "University of Chicago Press DOI",
        sourceHref: "https://doi.org/10.1086/261843",
        summary:
          "Models insider trading in competitive financial markets and evaluates its effects on investment, price informativeness, market liquidity, and welfare. The paper identifies conditions under which insider trading can improve price discovery while also reducing liquidity and altering real investment incentives."
      },
      {
        title: "Takeover Bids, the Free-Rider Problem, and the Theory of the Corporation",
        authors: "Sanford J. Grossman and Oliver D. Hart",
        year: "1980",
        venue: "Bell Journal of Economics",
        sourceLabel: "JSTOR",
        sourceHref: "https://www.jstor.org/stable/3003400",
        summary:
          "Develops the free-rider problem in takeover bids and explains why dispersed shareholders may not tender even when a takeover would improve firm value. The paper is central for understanding tender-offer rules, control premiums, defensive tactics, and the market for corporate control."
      },
      {
        title: "Accuracy of Predictions in the Event Study Methodology",
        authors: "Stephen J. Brown and Jerold B. Warner",
        year: "1980",
        venue: "Journal of Financial Economics",
        sourceLabel: "ScienceDirect",
        sourceHref: "https://www.sciencedirect.com/science/article/pii/0304405X80900132",
        summary:
          "Examines the properties of event-study methods for measuring stock-price reactions to firm-specific events. The paper is a methodological foundation for securities litigation, disclosure research, merger studies, and empirical analysis of legal events reflected in market prices."
      },
      {
        title: "Continuous Auctions and Insider Trading",
        authors: "Albert S. Kyle",
        year: "1985",
        venue: "Econometrica",
        sourceLabel: "JSTOR DOI",
        sourceHref: "https://doi.org/10.2307/1913210",
        summary:
          "Models sequential trading among an informed trader, noise traders, and competitive market makers. The paper links private information to price formation, trading profits, volatility, and market depth, making it foundational for legal analysis of insider trading and market microstructure."
      },
      {
        title: "Bid, Ask and Transaction Prices in a Specialist Market with Heterogeneously Informed Traders",
        authors: "Lawrence R. Glosten and Paul R. Milgrom",
        year: "1985",
        venue: "Journal of Financial Economics",
        sourceLabel: "ScienceDirect DOI",
        sourceHref: "https://doi.org/10.1016/0304-405X(85)90044-3",
        summary:
          "Explains bid-ask spreads as a response to adverse selection when market makers trade with both informed and uninformed participants. The model connects information asymmetry to liquidity costs and shows why market design and trading regulation affect the distribution of those costs."
      },
      {
        title: "Disclosure, Liquidity, and the Cost of Capital",
        authors: "Douglas W. Diamond and Robert E. Verrecchia",
        year: "1991",
        venue: "Journal of Finance",
        sourceLabel: "Wiley Online Library",
        sourceHref: "https://doi.org/10.1111/j.1540-6261.1991.tb04620.x",
        summary:
          "Models how public disclosure can reduce information asymmetry, improve securities liquidity, and lower financing costs. The paper also identifies countervailing effects through market-making capacity, making the relation between disclosure and firm value an institutional rather than automatic result."
      },
      {
        title: "The Economic Consequences of Increased Disclosure",
        authors: "Christian Leuz and Robert E. Verrecchia",
        year: "2000",
        venue: "Journal of Accounting Research",
        sourceLabel: "JSTOR DOI",
        sourceHref: "https://doi.org/10.2307/2672910",
        summary:
          "Studies firms that committed to higher disclosure levels and evaluates market consequences associated with information asymmetry. The article is useful for connecting reporting choices to liquidity, trading costs, and the empirical assessment of disclosure regulation."
      },
      {
        title: "Financial Derivatives and the Costs of Regulatory Arbitrage",
        authors: "Frank Partnoy",
        year: "1997",
        venue: "Journal of Corporation Law",
        sourceLabel: "UC Berkeley Law faculty CV",
        sourceHref: "https://www.law.berkeley.edu/law-library/resources/cvs/Partnoy.pdf",
        summary:
          "Examines how derivatives can reproduce regulated economic positions while changing their formal legal classification. The article makes the compliance costs, distributional effects, and institutional limits of rule-based financial regulation visible."
      },
      {
        title: "The Siskel and Ebert of Financial Markets: Two Thumbs Down for the Credit Rating Agencies",
        authors: "Frank Partnoy",
        year: "1999",
        venue: "Washington University Law Quarterly",
        sourceLabel: "UC Berkeley Law faculty CV",
        sourceHref: "https://www.law.berkeley.edu/law-library/resources/cvs/Partnoy.pdf",
        summary:
          "Critiques the informational and regulatory roles assigned to credit-rating agencies. The article helps distinguish reputational discipline from legal dependence on ratings and frames rating agencies as market gatekeepers shaped by regulation."
      },
      {
        title: "Barbarians at the Gatekeepers?: A Proposal for a Modified Strict Liability Regime",
        authors: "Frank Partnoy",
        year: "2001",
        venue: "Washington University Law Quarterly",
        sourceLabel: "Washington University Open Scholarship",
        sourceHref: "https://openscholarship.wustl.edu/law_lawreview/vol79/iss2/3/",
        summary:
          "Proposes a modified strict-liability regime for securities gatekeepers and lets them disclose negotiated limits on exposure. The proposal reframes due diligence around price, liability allocation, and investor information."
      },
      {
        title: "Financial Intermediation in the Securities Markets: Law and Economics of Conduct of Business Regulation",
        authors: "Alessio M. Pacces",
        year: "2000",
        venue: "International Review of Law and Economics",
        sourceLabel: "ScienceDirect",
        sourceHref: "https://www.sciencedirect.com/science/article/abs/pii/S0144818800000478",
        summary:
          "Analyzes suitability and anti-churning rules through asymmetric information, agency costs, and the role of securities intermediaries in price formation. The article combines European and U.S. regulation in a functional comparison of investor protection."
      },
      {
        title: "The Illusion of Importance: Reconsidering the UK's Takeover Defence Prohibition",
        authors: "David Kershaw",
        year: "2007",
        venue: "International and Comparative Law Quarterly",
        sourceLabel: "LSE Research Online",
        sourceHref: "https://eprints.lse.ac.uk/23662/",
        summary:
          "Reassesses the United Kingdom's prohibition on board-created takeover defences against the background allocation of corporate powers and directors' duties. The article illustrates how a prominent rule can matter less once the surrounding legal system is taken into account."
      },
      {
        title: "Law and Finance: Why Does Legal Origin Matter?",
        authors: "Thorsten Beck, Asli Demirgüç-Kunt, and Ross Levine",
        year: "2003",
        venue: "Journal of Comparative Economics",
        sourceLabel: "Elsevier DOI",
        sourceHref: "https://doi.org/10.1016/S0147-5967(03)00028-4",
        summary:
          "Compares explanations for the association between legal traditions and financial development. The article tests whether political structures and legal adaptability provide more informative mechanisms than legal-origin labels alone."
      },
      {
        title: "Law, Endowments, and Finance",
        authors: "Thorsten Beck, Asli Demirgüç-Kunt, and Ross Levine",
        year: "2003",
        venue: "Journal of Financial Economics",
        sourceLabel: "Elsevier DOI",
        sourceHref: "https://doi.org/10.1016/S0304-405X(03)00144-2",
        summary:
          "Evaluates legal-origin and endowment-based explanations of cross-country financial development. The article is useful both for its comparative institutional hypotheses and for its treatment of competing historical channels."
      },
      {
        title: "The Separation of Ownership and Control in East Asian Corporations",
        authors: "Stijn Claessens, Simeon Djankov, and Larry H. P. Lang",
        year: "2000",
        venue: "Journal of Financial Economics",
        sourceLabel: "Elsevier DOI",
        sourceHref: "https://doi.org/10.1016/S0304-405X(00)00067-2",
        summary:
          "Traces ultimate ownership and control across publicly traded corporations in nine East Asian economies. The article documents how pyramids, cross-holdings, and family control can separate voting rights from cash-flow rights and reshape minority-investor agency problems."
      },
      {
        title: "Law, Finance, and Economic Growth in China",
        authors: "Franklin Allen, Jun Qian, and Meijun Qian",
        year: "2005",
        venue: "Journal of Financial Economics",
        sourceLabel: "Elsevier DOI",
        sourceHref: "https://doi.org/10.1016/j.jfineco.2004.06.010",
        summary:
          "Compares China's formal legal and financial systems with alternative financing and governance arrangements. The article provides a prominent counterexample to simple claims that strong formal investor-protection institutions must precede private-sector growth."
      }
    ]
  },
  {
    slug: "financial-law-risk-control",
    title: "Financial Law and Risk Control",
    description:
      "Research on bank runs, systemic risk, stress testing, prudential supervision, capital requirements, resolution, and financial stability.",
    researchQuestions: [
      "How should financial law balance systemic-risk prevention, market discipline, and institutional resilience?",
      "How do stress testing, capital requirements, disclosure rules, and resolution regimes shape financial institutions' risk choices?"
    ],
    readings: [
      {
        title: "Bank Runs, Deposit Insurance, and Liquidity",
        authors: "Douglas W. Diamond and Philip H. Dybvig",
        year: "1983",
        venue: "Journal of Political Economy",
        sourceLabel: "University of Chicago Press Journals",
        sourceHref: "https://www.journals.uchicago.edu/doi/10.1086/261155",
        summary:
          "Models banks as institutions that provide liquidity insurance through demand deposits while holding illiquid assets. The paper shows how such contracts can generate multiple equilibria, including self-fulfilling bank runs, and explains why deposit insurance can eliminate inefficient runs."
      },
      {
        title: "Nonmonetary Effects of the Financial Crisis in the Propagation of the Great Depression",
        authors: "Ben S. Bernanke",
        year: "1983",
        venue: "American Economic Review",
        sourceLabel: "JSTOR",
        sourceHref: "https://www.jstor.org/stable/1808111",
        summary:
          "Argues that the financial crisis intensified the Great Depression through nonmonetary channels by disrupting credit intermediation. The article emphasizes how banking distress, borrower quality information, and the cost of credit allocation affected output beyond changes in the money supply."
      },
      {
        title: "Principles for sound stress testing practices and supervision",
        authors: "Basel Committee on Banking Supervision",
        year: "2009",
        venue: "Bank for International Settlements",
        sourceLabel: "BIS",
        sourceHref: "https://www.bis.org/publ/bcbs155.htm",
        summary:
          "Sets out supervisory principles for bank stress-testing programmes after weaknesses revealed by the financial crisis. The guidance covers governance, scenario design, implementation, capital planning, supervisory assessment, and the responsibilities of supervisors in evaluating stress-testing practices."
      },
      {
        title: "Regulating Wall Street: The Dodd-Frank Act and the New Architecture of Global Finance",
        authors: "Viral V. Acharya, Thomas F. Cooley, Matthew Richardson, and Ingo Walter",
        year: "2010",
        venue: "Wiley",
        sourceLabel: "Wiley",
        sourceHref: "https://www.wiley.com/en-us/Regulating+Wall+Street%3A+The+Dodd+Frank+Act+and+the+New+Architecture+of+Global+Finance-p-9780470768778",
        summary:
          "Analyzes the post-crisis redesign of financial regulation associated with the Dodd-Frank Act. The volume examines systemic risk oversight, resolution authority, derivatives regulation, capital and liquidity requirements, consumer protection, and the institutional architecture of financial supervision."
      },
      {
        title: "The Fundamental Principles of Financial Regulation",
        authors: "Markus Brunnermeier, Andrew Crockett, Charles Goodhart, Avinash Persaud, and Hyun Song Shin",
        year: "2009",
        venue: "Geneva Reports on the World Economy",
        sourceLabel: "CEPR",
        sourceHref: "https://cepr.org/publications/books-and-reports/geneva-11-fundamental-principles-financial-regulation",
        summary:
          "Argues that financial regulation must address system-wide externalities rather than only the solvency of individual institutions. The report develops principles for macroprudential policy, procyclicality, liquidity regulation, capital standards, and the institutional design of supervision."
      },
      {
        title: "A Macroprudential Approach to Financial Regulation",
        authors: "Samuel G. Hanson, Anil K. Kashyap, and Jeremy C. Stein",
        year: "2011",
        venue: "Journal of Economic Perspectives",
        sourceLabel: "American Economic Association",
        sourceHref: "https://www.aeaweb.org/articles?id=10.1257%2Fjep.25.1.3",
        summary:
          "Contrasts microprudential regulation aimed at individual institutions with macroprudential regulation aimed at the financial system as a whole. The article identifies market failures behind modern financial crises and proposes regulatory tools to reduce fragility created by leverage, short-term funding, and system-wide spillovers."
      },
      {
        title: "Securitized Banking and the Run on Repo",
        authors: "Gary Gorton and Andrew Metrick",
        year: "2012",
        venue: "Journal of Financial Economics",
        sourceLabel: "ScienceDirect DOI",
        sourceHref: "https://doi.org/10.1016/j.jfineco.2011.03.016",
        summary:
          "Interprets the 2007-2008 panic as a run on the repo market supporting securitized banking. Using data on securitized bonds, repo rates, haircuts, and credit spreads, the paper traces how concerns about collateral value and counterparty risk transmitted stress beyond subprime housing assets."
      },
      {
        title: "Measuring Systemic Risk",
        authors: "Viral V. Acharya, Lasse H. Pedersen, Thomas Philippon, and Matthew Richardson",
        year: "2017",
        venue: "Review of Financial Studies",
        sourceLabel: "Oxford Academic",
        sourceHref: "https://academic.oup.com/rfs/article-lookup/doi/10.1093/rfs/hhw088",
        summary:
          "Develops a measure of each financial firm's contribution to systemic risk based on expected capital shortfall in a crisis. The paper connects firm-level leverage, size, and marginal expected shortfall to the expected undercapitalization of the financial system."
      },
      {
        title: "The Role of Demandable Debt in Structuring Optimal Banking Arrangements",
        authors: "Charles W. Calomiris and Charles M. Kahn",
        year: "1991",
        venue: "American Economic Review",
        sourceLabel: "JSTOR",
        sourceHref: "https://www.jstor.org/stable/2006865",
        summary:
          "Explains demandable debt as a governance mechanism that can discipline banks and constrain managers. The article is useful for understanding why fragile funding structures may also perform monitoring and incentive functions."
      },
      {
        title: "Interbank Lending and Systemic Risk",
        authors: "Jean-Charles Rochet and Jean Tirole",
        year: "1996",
        venue: "Journal of Money, Credit and Banking",
        sourceLabel: "JSTOR",
        sourceHref: "https://www.jstor.org/stable/2078018",
        summary:
          "Models interbank lending as a source of both monitoring incentives and contagion risk. The paper helps connect payment-system design, supervisory policy, and systemic-risk externalities."
      },
      {
        title: "Basel III: A global regulatory framework for more resilient banks and banking systems",
        authors: "Basel Committee on Banking Supervision",
        year: "2011",
        venue: "Bank for International Settlements",
        sourceLabel: "BIS",
        sourceHref: "https://www.bis.org/publ/bcbs189.htm",
        summary:
          "Sets out the Basel III capital framework developed after the global financial crisis. The document is a core institutional source for learning about capital quality, capital buffers, leverage, and resilience-oriented banking regulation."
      },
      {
        title: "Key Attributes of Effective Resolution Regimes for Financial Institutions",
        authors: "Financial Stability Board",
        year: "2014",
        venue: "Financial Stability Board",
        sourceLabel: "FSB",
        sourceHref: "https://www.fsb.org/2014/10/r_141015/",
        summary:
          "Provides international standards for resolution regimes intended to handle failing financial institutions without severe systemic disruption or taxpayer bailout expectations. The document is central for studying resolution authority, loss allocation, and financial-stability governance."
      },
      {
        title: "The Age of ESMA: Governing EU Financial Markets",
        authors: "Niamh Moloney",
        year: "2018",
        venue: "Hart Publishing",
        sourceLabel: "Bloomsbury",
        sourceHref: "https://www.bloomsbury.com/uk/age-of-esma-9781509921775/",
        summary:
          "Examines the European Securities and Markets Authority as a central actor in EU financial-market governance. The book analyzes ESMA's rule-making, supervisory convergence, direct supervision, network role, institutional design, technocratic influence, effectiveness, and legitimacy in the post-crisis and Brexit-era regulatory setting."
      },
      {
        title: "The Bankers' New Clothes: What's Wrong with Banking and What to Do about It",
        authors: "Anat Admati and Martin Hellwig",
        year: "2013",
        venue: "Princeton University Press",
        sourceLabel: "Princeton University Press",
        sourceHref: "https://press.princeton.edu/books/hardcover/9780691156842/the-bankers-new-clothes",
        summary:
          "Argues for substantially stronger bank equity requirements and challenges common claims that higher equity capital is socially too costly. The book connects bank leverage, fragility, subsidies, risk-taking incentives, and the political economy of financial regulation."
      },
      {
        title: "Deciphering the Liquidity and Credit Crunch 2007-2008",
        authors: "Markus K. Brunnermeier",
        year: "2009",
        venue: "Journal of Economic Perspectives",
        sourceLabel: "American Economic Association",
        sourceHref: "https://www.aeaweb.org/articles?id=10.1257/jep.23.1.77",
        summary:
          "Explains the mechanisms of the 2007-2008 liquidity and credit crisis, including funding liquidity, market liquidity, leverage, securitization, and amplification channels. The article is useful for connecting crisis dynamics to prudential supervision and systemic-risk regulation."
      },
      {
        title: "Market Liquidity and Funding Liquidity",
        authors: "Markus K. Brunnermeier and Lasse Heje Pedersen",
        year: "2009",
        venue: "Review of Financial Studies",
        sourceLabel: "Oxford Academic DOI",
        sourceHref: "https://doi.org/10.1093/rfs/hhn098",
        summary:
          "Develops a model in which market liquidity and traders' funding liquidity reinforce each other. The paper explains liquidity spirals, margin constraints, flight to liquidity, and the conditions under which shocks to funding constraints can reduce market liquidity and amplify financial stress."
      },
      {
        title: "Regulating the Shadow Banking System",
        authors: "Gary Gorton and Andrew Metrick",
        year: "2010",
        venue: "Brookings Papers on Economic Activity",
        sourceLabel: "Brookings",
        sourceHref: "https://www.brookings.edu/articles/regulating-the-shadow-banking-system-with-comments-and-discussion/",
        summary:
          "Examines the rise of shadow banking and proposes regulatory principles for money-market funds, securitization, and repos. The article emphasizes privately created money, bankruptcy safe harbors, collateral rules, and public guarantees as institutional levers for controlling run-prone financial intermediation."
      },
      {
        title: "Financial Regulation: Why, How and Where Now?",
        authors: "Charles Goodhart",
        year: "1998",
        venue: "Routledge",
        sourceLabel: "Routledge",
        sourceHref: "https://www.routledge.com/Financial-Regulation-Why-How-and-Where-Now/Goodhart/p/book/9780415185790",
        summary:
          "Examines the purposes and institutional design of financial regulation, including prudential supervision, systemic stability, consumer protection, and the allocation of regulatory responsibilities. The book remains a useful reference for distinguishing financial regulation from ordinary market regulation."
      },
      {
        title: "Financial Intermediation and Delegated Monitoring",
        authors: "Douglas W. Diamond",
        year: "1984",
        venue: "Review of Economic Studies",
        sourceLabel: "Oxford Academic",
        sourceHref: "https://doi.org/10.2307/2297430",
        summary:
          "Develops a theory of financial intermediaries as delegated monitors. The paper explains how diversification can reduce the cost of providing monitoring incentives and connects debt contracts, bankruptcy costs, portfolio structure, and bank capital structure to information problems in lending."
      },
      {
        title: "Liquidity Risk, Liquidity Creation, and Financial Fragility: A Theory of Banking",
        authors: "Douglas W. Diamond and Raghuram G. Rajan",
        year: "2001",
        venue: "Journal of Political Economy",
        sourceLabel: "University of Chicago Press Journals",
        sourceHref: "https://doi.org/10.1086/319552",
        summary:
          "Explains how banks can create liquidity while financing relationship-specific loans, and why the fragile funding structure that supports this function also creates run risk. The model clarifies tradeoffs surrounding bank capital, narrow banking, and suspension of convertibility."
      },
      {
        title: "Financial Contagion",
        authors: "Franklin Allen and Douglas Gale",
        year: "2000",
        venue: "Journal of Political Economy",
        sourceLabel: "University of Chicago Press Journals",
        sourceHref: "https://doi.org/10.1086/262109",
        summary:
          "Models contagion through interregional claims among banks that share liquidity risk. The paper shows how a local liquidity shock can propagate through an incomplete network of claims and makes network structure central to the legal design of interbank markets and systemic safeguards."
      },
      {
        title: "Liquidity and Leverage",
        authors: "Tobias Adrian and Hyun Song Shin",
        year: "2010",
        venue: "Journal of Financial Intermediation",
        sourceLabel: "ScienceDirect DOI",
        sourceHref: "https://doi.org/10.1016/j.jfi.2008.12.002",
        summary:
          "Documents procyclical leverage among marked-to-market financial intermediaries and links aggregate balance-sheet growth to market risk. The article gives macroprudential regulation a mechanism connecting leverage management, repo funding, risk appetite, and system-wide liquidity."
      },
      {
        title: "The Alchemy of Asset Securitization",
        authors: "Steven L. Schwarcz",
        year: "1994",
        venue: "Stanford Journal of Law, Business & Finance",
        sourceLabel: "Duke Law Scholarship Repository",
        sourceHref: "https://scholarship.law.duke.edu/faculty_scholarship/988/",
        summary:
          "Explains how securitization transforms pools of receivables into marketable securities through bankruptcy remoteness, credit enhancement, and risk allocation. The article is a transactional foundation for analyzing structured finance."
      },
      {
        title: "Systemic Risk",
        authors: "Steven L. Schwarcz",
        year: "2008",
        venue: "Georgetown Law Journal",
        sourceLabel: "Duke Law Scholarship Repository",
        sourceHref: "https://scholarship.law.duke.edu/faculty_scholarship/1903/",
        summary:
          "Develops a legal and economic framework for identifying systemic risk beyond individual banks. It links disintermediated markets, tragedy-of-the-commons incentives, transmission channels, and the case for regulation."
      },
      {
        title: "Systematic Regulation of Systemic Risk",
        authors: "Steven L. Schwarcz",
        year: "2019",
        venue: "Wisconsin Law Review",
        sourceLabel: "Duke Law Scholarship Repository",
        sourceHref: "https://scholarship.law.duke.edu/faculty_scholarship/4583/",
        summary:
          "Organizes financial-stability regulation around market failures that trigger and transmit shocks rather than around isolated institutions or punitive responses. The article offers a coherent framework for evaluating macroprudential tools."
      },
      {
        title: "Systemic Risk in the Financial Sector: An Analysis of the Subprime-Mortgage Financial Crisis",
        authors: "Martin F. Hellwig",
        year: "2009",
        venue: "De Economist",
        sourceLabel: "Springer Nature",
        sourceHref: "https://link.springer.com/article/10.1007/s10645-009-9110-0",
        summary:
          "Traces how securitization, excessive maturity transformation, market breakdown, fair-value accounting, thin equity, and prudential rules interacted during the global financial crisis. The article argues that reform must address system architecture as well as individual incentives."
      },
      {
        title: "Capital Regulation after the Crisis: Business as Usual?",
        authors: "Martin F. Hellwig",
        year: "2010",
        venue: "ifo DICE Report",
        sourceLabel: "IDEAS/RePEc",
        sourceHref: "https://ideas.repec.org/p/mpg/wpaper/2010_31.html",
        summary:
          "Evaluates objections to materially higher bank-equity requirements after the crisis. The paper distinguishes private funding costs from social costs and explains why leverage incentives and implicit guarantees weaken arguments for preserving pre-crisis capital structures."
      },
      {
        title: "The Prudential Regulation of Banks",
        authors: "Mathias Dewatripont and Jean Tirole",
        year: "1994",
        venue: "MIT Press",
        sourceLabel: "MIT Press",
        sourceHref: "https://mitpress.mit.edu/9780262513869/the-prudential-regulation-of-banks/",
        summary:
          "Applies incentive theory to bank solvency and external intervention. The book models prudential regulation as delegated monitoring on behalf of dispersed depositors and evaluates capital requirements, intervention rights, accounting manipulation, deposit insurance, and alternative monitoring arrangements."
      },
      {
        title: "Microeconomics of Banking",
        authors: "Xavier Freixas and Jean-Charles Rochet",
        year: "2008",
        venue: "MIT Press, second edition",
        sourceLabel: "MIT Press",
        sourceHref: "https://mitpress.mit.edu/9780262062701/microeconomics-of-banking/",
        summary:
          "Provides a microeconomic theory of financial intermediation built around asymmetric information, competition, liquidity, capital regulation, and public intervention. The second edition connects core banking models to payments and prudential policy."
      },
      {
        title: "Systemic Risk, Interbank Relations, and Liquidity Provision by the Central Bank",
        authors: "Xavier Freixas, Bruno M. Parigi, and Jean-Charles Rochet",
        year: "2000",
        venue: "Journal of Money, Credit and Banking",
        sourceLabel: "JSTOR",
        sourceHref: "https://www.jstor.org/stable/2601188",
        summary:
          "Models interbank credit links, contagion, and central-bank liquidity assistance. The article clarifies why payment and settlement connections can distribute liquidity efficiently while creating channels for systemic loss."
      },
      {
        title: "Comparing Financial Systems",
        authors: "Franklin Allen and Douglas Gale",
        year: "2000",
        venue: "MIT Press",
        sourceLabel: "MIT Press",
        sourceHref: "https://mitpress.mit.edu/9780262011778/comparing-financial-systems/",
        summary:
          "Compares market-based and bank-based financial systems as different institutional responses to information, governance, risk sharing, and competition. The book rejects a single best architecture and emphasizes functional tradeoffs."
      },
      {
        title: "Understanding Financial Crises",
        authors: "Franklin Allen and Douglas Gale",
        year: "2007",
        venue: "Oxford University Press",
        sourceLabel: "Oxford Academic DOI",
        sourceHref: "https://doi.org/10.1093/acprof:oso/9780199251414.001.0001",
        summary:
          "Develops models of liquidity, banking panics, asset-price volatility, contagion, and crisis policy. The book situates financial instability within the structure of markets and intermediaries rather than treating crises as isolated institutional failures."
      },
      {
        title: "Bank Concentration, Competition, and Crises: First Results",
        authors: "Thorsten Beck, Asli Demirgüç-Kunt, and Ross Levine",
        year: "2006",
        venue: "Journal of Banking & Finance",
        sourceLabel: "Elsevier DOI",
        sourceHref: "https://doi.org/10.1016/j.jbankfin.2005.05.010",
        summary:
          "Examines banking concentration, competition, regulation, and systemic-crisis incidence across countries. The study distinguishes concentration from competitive conditions and provides a basis for testing prudential claims about banking structure."
      }
    ]
  },
  {
    slug: "research-methods",
    title: "Research Methods for Corporate, Securities, and Financial Law",
    description:
      "Research design resources for causal inference, empirical legal studies, institutional analysis, and law-and-economics writing in corporate, securities, and financial-law research.",
    researchQuestions: [
      "How can corporate, securities, or financial-law changes be transformed into credible empirical research designs?",
      "How can doctrinal analysis, theoretical mechanisms, and empirical evidence be integrated in one article?"
    ],
    readings: [
      {
        title: "Some Fundamental Legal Conceptions as Applied in Judicial Reasoning",
        authors: "Wesley Newcomb Hohfeld",
        year: "1913",
        venue: "Yale Law Journal",
        sourceLabel: "Yale Law School Open Scholarship Repository",
        sourceHref: "https://openyls.law.yale.edu/entities/publication/bc452662-31cb-4fdc-b094-acdff4ea6bb6",
        summary:
          "Introduces Hohfeld's analytical project for distinguishing legal conceptions from nonlegal conceptions and for separating fundamental jural relations from one another. The article organizes legal positions through opposites and correlatives, making it a durable method for reading rights, duties, privileges, powers, liabilities, and immunities with precision."
      },
      {
        title: "Fundamental Legal Conceptions as Applied in Judicial Reasoning",
        authors: "Wesley Newcomb Hohfeld",
        year: "1917",
        venue: "Yale Law Journal",
        sourceLabel: "Yale Law School Open Scholarship Repository",
        sourceHref: "https://openyls.law.yale.edu/entities/publication/717ebf99-6eeb-4a7e-9f12-381488441c3f",
        summary:
          "Continues the 1913 article and reproduces the scheme of opposites and correlatives as the basis for further analysis. The article is important for legal research because it turns broad language about rights into a structured inquiry into claims, privileges, powers, immunities, and their corresponding legal positions."
      },
      {
        title: "Mostly Harmless Econometrics: An Empiricist's Companion",
        authors: "Joshua D. Angrist and Jörn-Steffen Pischke",
        year: "2009",
        venue: "Princeton University Press",
        sourceLabel: "Princeton University Press",
        sourceHref: "https://press.princeton.edu/books/paperback/9780691120355/mostly-harmless-econometrics",
        summary:
          "Presents an applied econometric framework centered on credible causal inference in empirical research. The book explains how regression, instrumental variables, regression discontinuity, differences-in-differences, and related designs can be used to estimate causal effects under explicit identification assumptions."
      },
      {
        title: "The Credibility Revolution in Empirical Economics: How Better Research Design Is Taking the Con out of Econometrics",
        authors: "Joshua D. Angrist and Jörn-Steffen Pischke",
        year: "2010",
        venue: "Journal of Economic Perspectives",
        sourceLabel: "American Economic Association",
        sourceHref: "https://www.aeaweb.org/articles?id=10.1257/jep.24.2.3",
        summary:
          "Describes the shift in applied economics toward research designs that make causal claims more transparent and credible. The article discusses randomized trials, instrumental variables, regression discontinuity, differences-in-differences, and the importance of design-based inference for policy-relevant empirical work."
      },
      {
        title: "How Much Should We Trust Differences-in-Differences Estimates?",
        authors: "Marianne Bertrand, Esther Duflo, and Sendhil Mullainathan",
        year: "2004",
        venue: "Quarterly Journal of Economics",
        sourceLabel: "Oxford Academic",
        sourceHref: "https://academic.oup.com/qje/article-abstract/119/1/249/1876068",
        summary:
          "Studies inference problems in difference-in-differences research using placebo laws and state-level panel data. The paper shows that serial correlation can substantially overstate statistical significance and evaluates correction methods, including clustering and aggregation, for more reliable inference."
      },
      {
        title: "The State of Applied Econometrics: Causality and Policy Evaluation",
        authors: "Susan Athey and Guido W. Imbens",
        year: "2017",
        venue: "Journal of Economic Perspectives",
        sourceLabel: "American Economic Association",
        sourceHref: "https://www.aeaweb.org/articles?id=10.1257%2Fjep.31.2.3",
        summary:
          "Reviews the state of applied econometrics with a focus on causality and policy evaluation. The article discusses randomized experiments, observational designs, regression discontinuity, difference-in-differences, synthetic control, external validity, and the role of machine learning in empirical research."
      },
      {
        title: "Difference-in-Differences with Multiple Time Periods",
        authors: "Brantly Callaway and Pedro H. C. Sant'Anna",
        year: "2021",
        venue: "Journal of Econometrics",
        sourceLabel: "ScienceDirect DOI",
        sourceHref: "https://doi.org/10.1016/j.jeconom.2020.12.001",
        summary:
          "Develops identification, estimation, and inference procedures for difference-in-differences designs with multiple periods, staggered treatment timing, and conditional parallel trends. The paper defines group-time average treatment effects and aggregation methods suitable for heterogeneous treatment effects."
      },
      {
        title: "Difference-in-Differences with Variation in Treatment Timing",
        authors: "Andrew Goodman-Bacon",
        year: "2021",
        venue: "Journal of Econometrics",
        sourceLabel: "ScienceDirect DOI",
        sourceHref: "https://doi.org/10.1016/j.jeconom.2021.03.014",
        summary:
          "Derives the two-way fixed-effects difference-in-differences estimator as a weighted average of two-group, two-period comparisons when treatment timing varies. The paper shows how treatment-effect heterogeneity and timing can affect estimates and provides a decomposition useful for diagnosing legal-policy evaluations."
      },
      {
        title: "Estimating Dynamic Treatment Effects in Event Studies with Heterogeneous Treatment Effects",
        authors: "Liyang Sun and Sarah Abraham",
        year: "2021",
        venue: "Journal of Econometrics",
        sourceLabel: "ScienceDirect DOI",
        sourceHref: "https://doi.org/10.1016/j.jeconom.2020.09.006",
        summary:
          "Analyzes event-study regressions with leads and lags of an absorbing treatment under staggered adoption. The paper shows that conventional two-way fixed-effects coefficients can be contaminated by treatment effects from other periods and proposes an estimator designed to recover dynamic effects without that contamination."
      },
      {
        title: "Causal Inference: The Mixtape",
        authors: "Scott Cunningham",
        year: "2021",
        venue: "Yale University Press",
        sourceLabel: "Yale University Press",
        sourceHref: "https://yalebooks.yale.edu/9780300251685/causal-inference/",
        summary:
          "Introduces causal-inference tools through applied examples, code-oriented exposition, and research-design intuition. The book covers randomized experiments, matching, directed acyclic graphs, instrumental variables, regression discontinuity, difference-in-differences, synthetic control, and event-study designs."
      },
      {
        title: "Recent Developments in the Econometrics of Program Evaluation",
        authors: "Guido W. Imbens and Jeffrey M. Wooldridge",
        year: "2009",
        venue: "Journal of Economic Literature",
        sourceLabel: "American Economic Association",
        sourceHref: "https://www.aeaweb.org/articles?id=10.1257/jel.47.1.5",
        summary:
          "Surveys modern econometric methods for program evaluation, including matching, instrumental variables, control functions, regression discontinuity, and difference-in-differences. The article is a useful bridge between legal-policy questions and causal identification."
      },
      {
        title: "Synthetic Control Methods for Comparative Case Studies",
        authors: "Alberto Abadie, Alexis Diamond, and Jens Hainmueller",
        year: "2010",
        venue: "Journal of the American Statistical Association",
        sourceLabel: "DOI",
        sourceHref: "https://doi.org/10.1198/jasa.2009.ap08746",
        summary:
          "Introduces synthetic control methods for estimating policy effects in comparative case studies. The design is especially useful when a single jurisdiction or institution experiences a legal change and researchers need a transparent constructed comparison."
      },
      {
        title: "Regression Discontinuity Designs in Economics",
        authors: "David S. Lee and Thomas Lemieux",
        year: "2010",
        venue: "Journal of Economic Literature",
        sourceLabel: "American Economic Association",
        sourceHref: "https://www.aeaweb.org/articles?id=10.1257/jel.48.2.281",
        summary:
          "Provides a user-oriented survey of regression discontinuity designs. The article explains identification around thresholds, estimation choices, graphical analysis, and the assumptions needed to interpret local discontinuities as causal effects."
      },
      {
        title: "Causal Inference for Statistics, Social, and Biomedical Sciences",
        authors: "Guido W. Imbens and Donald B. Rubin",
        year: "2015",
        venue: "Cambridge University Press",
        sourceLabel: "Cambridge University Press",
        sourceHref: "https://www.cambridge.org/core/books/causal-inference-for-statistics-social-and-biomedical-sciences/71126BE90C58F1A431FE9B2DD07938AB",
        summary:
          "Presents the potential-outcomes framework for causal inference, with attention to assignment mechanisms, randomized experiments, observational studies, matching, and noncompliance. It is a rigorous reference for readers building empirical legal research designs."
      },
      {
        title: "Identification and Estimation of Local Average Treatment Effects",
        authors: "Guido W. Imbens and Joshua D. Angrist",
        year: "1994",
        venue: "Econometrica",
        sourceLabel: "JSTOR",
        sourceHref: "https://www.jstor.org/stable/2951620",
        summary:
          "Develops the local average treatment effect framework for instrumental-variables estimation when treatment effects are heterogeneous. The paper is central for understanding what IV estimates identify and why instrument validity requires more than a first-stage relationship."
      },
      {
        title: "A Practical Guide to Event Studies",
        authors: "A. Craig MacKinlay",
        year: "1997",
        venue: "Journal of Economic Literature",
        sourceLabel: "JSTOR",
        sourceHref: "https://www.jstor.org/stable/2729691",
        summary:
          "Provides a practical overview of event-study methodology, including abnormal-return measurement, expected-return models, event windows, and statistical testing. The article is especially useful for legal research involving disclosure, enforcement actions, mergers, and regulatory events."
      },
      {
        title: "Matching as Nonparametric Preprocessing for Reducing Model Dependence in Parametric Causal Inference",
        authors: "Daniel E. Ho, Kosuke Imai, Gary King, and Elizabeth A. Stuart",
        year: "2007",
        venue: "Political Analysis",
        sourceLabel: "Cambridge University Press",
        sourceHref: "https://doi.org/10.1093/pan/mpl013",
        summary:
          "Presents matching as a preprocessing step that can reduce model dependence in observational causal inference. The article is useful for empirical legal studies where treated and comparison units differ before a legal or regulatory intervention."
      },
      {
        title: "The Central Role of the Propensity Score in Observational Studies for Causal Effects",
        authors: "Paul R. Rosenbaum and Donald B. Rubin",
        year: "1983",
        venue: "Biometrika",
        sourceLabel: "Oxford Academic DOI",
        sourceHref: "https://doi.org/10.1093/biomet/70.1.41",
        summary:
          "Defines the propensity score as the conditional probability of treatment assignment given observed covariates and develops its role in matched and observational designs. Legal researchers should pair the method with explicit overlap, balance, and unconfoundedness assessments."
      },
      {
        title: "A Practitioner's Guide to Cluster-Robust Inference",
        authors: "A. Colin Cameron and Douglas L. Miller",
        year: "2015",
        venue: "Journal of Human Resources",
        sourceLabel: "University of California eScholarship",
        sourceHref: "https://doi.org/10.3368/jhr.50.2.317",
        summary:
          "Explains regression inference when errors may be correlated within clusters. The article covers cluster choice, fixed effects, few-cluster problems, multiway clustering, and extensions beyond ordinary least squares, making it directly useful for panel and policy research."
      },
      {
        title: "Estimating Standard Errors in Finance Panel Data Sets: Comparing Approaches",
        authors: "Mitchell A. Petersen",
        year: "2009",
        venue: "Review of Financial Studies",
        sourceLabel: "Oxford Academic DOI",
        sourceHref: "https://doi.org/10.1093/rfs/hhn053",
        summary:
          "Compares standard-error estimators used in corporate-finance and asset-pricing panels when residuals may be correlated across firms and time. The paper gives applied researchers guidance on firm clustering, time effects, Fama-MacBeth procedures, and two-dimensional dependence."
      },
      {
        title: "When Do Covariates Matter? And Which Ones, and How Much?",
        authors: "Jonah B. Gelbach",
        year: "2016",
        venue: "Journal of Labor Economics",
        sourceLabel: "University of Chicago Press Journals",
        sourceHref: "https://doi.org/10.1086/683668",
        summary:
          "Develops a decomposition for understanding why a coefficient changes when correlated covariates are added to a regression. The method avoids sequence-dependent explanations and is useful when empirical legal research attributes coefficient movement to particular controls or mechanisms."
      }
    ]
  }
];

export function getAllTopics() {
  return TOPIC_SECTIONS;
}

export function getTopicBySlug(slug: string) {
  return TOPIC_SECTIONS.find((topic) => topic.slug === slug) ?? null;
}

export function getTopicReadingsByYear(topic: TopicSection) {
  return [...topic.readings].sort((first, second) => {
    const firstYear = Number.parseInt(first.year, 10) || 0;
    const secondYear = Number.parseInt(second.year, 10) || 0;
    return firstYear - secondYear || first.title.localeCompare(second.title);
  });
}

export function getFeaturedReadings(limit = 4) {
  return TOPIC_SECTIONS.flatMap((topic) =>
    topic.readings.map((reading) => ({
      ...reading,
      topicTitle: topic.title,
      topicHref: `/topics/${topic.slug}`
    }))
  ).slice(0, limit);
}

export function getReadingSlug(reading: TopicReading) {
  return `${reading.title}-${reading.year}`
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function getAllReadings(): IndexedReading[] {
  return TOPIC_SECTIONS.flatMap((topic, topicIndex) =>
    topic.readings.map((reading, index) => ({
      ...reading,
      slug: getReadingSlug(reading),
      topicSlug: topic.slug,
      topicTitle: topic.title,
      topicHref: `/topics/${topic.slug}`,
      level: getReadingLevel(index),
      order: index + 1,
      topicOrder: topicIndex + 1,
      sortYear: Number.parseInt(reading.year, 10) || 0
    }))
  );
}

export function getReadingBySlug(slug: string) {
  return getAllReadings().find((reading) => reading.slug === slug) ?? null;
}

function normalizeAuthorText(value: string) {
  return value
    .toLowerCase()
    .replace(/jr\.?/g, "jr")
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function getReadingsByScholarName(name: string, surname: string) {
  const normalizedSurname = normalizeAuthorText(surname);
  const normalizedName = normalizeAuthorText(name)
    .split(" ")
    .filter((part) => part.length > 1)
    .join(" ");

  return getAllReadings()
    .filter((reading) => {
      const authors = normalizeAuthorText(reading.authors);
      const hasSurname = new RegExp(`(^| )${normalizedSurname.replaceAll(" ", " ")}( |$)`).test(authors);
      return authors.includes(normalizedName) || hasSurname;
    })
    .sort((first, second) => first.sortYear - second.sortYear || first.title.localeCompare(second.title));
}

function normalizeBibtexKey(reading: TopicReading) {
  const firstAuthor = reading.authors.split(",")[0]?.split(" and ")[0]?.trim().split(" ").pop() ?? "source";
  const titleWord = reading.title.match(/[A-Za-z0-9]+/)?.[0] ?? "reading";
  return `${firstAuthor}${reading.year}${titleWord}`.replace(/[^A-Za-z0-9]/g, "");
}

function inferBibtexType(reading: TopicReading) {
  const venue = reading.venue.toLowerCase();
  if (
    venue.includes("press") ||
    venue.includes("wiley") ||
    venue.includes("routledge") ||
    venue.includes("wolters kluwer") ||
    venue.includes("aspen") ||
    venue.includes("hart publishing") ||
    venue.includes("bloomsbury") ||
    venue.includes("pearson") ||
    venue.includes("little, brown") ||
    reading.title === "Law and Economics, 6th edition"
  ) {
    return "book";
  }
  if (venue.includes("bank for international settlements") || venue.includes("cepr") || venue.includes("basel")) return "techreport";
  return "article";
}

export function getReadingDoi(reading: TopicReading) {
  const decodedHref = decodeURIComponent(reading.sourceHref);
  const match = decodedHref.match(/10\.\d{4,9}\/[^\s?#&]+/);
  return match?.[0] ?? null;
}

export function getReadingLevel(index: number): ReadingLevel {
  if (index < 3) return "Introductory";
  if (index < 7) return "Intermediate";
  return "Advanced";
}

export function getReadingPublicationType(reading: TopicReading): ReadingPublicationType {
  const venue = reading.venue.toLowerCase();
  const source = reading.sourceLabel.toLowerCase();

  if (
    venue.includes("press") ||
    venue.includes("wiley") ||
    venue.includes("routledge") ||
    venue.includes("wolters kluwer") ||
    venue.includes("aspen") ||
    venue.includes("hart publishing") ||
    venue.includes("bloomsbury") ||
    venue.includes("pearson") ||
    venue.includes("little, brown") ||
    reading.title === "Law and Economics, 6th edition"
  ) {
    return "Book";
  }
  if (venue.includes("bank for international settlements") || venue.includes("financial stability board") || venue.includes("geneva reports")) {
    return "Report";
  }
  if (venue.includes("anatomy of corporate law") || source.includes("doi") && reading.title.includes("Agency Problems")) {
    return "Chapter";
  }
  return "Article";
}

export function getReadingCitation(reading: TopicReading) {
  return `${reading.authors}. "${reading.title}." ${reading.venue}, ${reading.year}.`;
}

export function getReadingBibtex(reading: TopicReading) {
  const doi = getReadingDoi(reading);
  const type = inferBibtexType(reading);
  const venueField = type === "article" ? "journal" : type === "techreport" ? "institution" : "publisher";
  const fields = [
    `  title = {${reading.title}}`,
    `  author = {${reading.authors}}`,
    `  year = {${reading.year}}`,
    `  ${venueField} = {${reading.venue}}`,
    doi ? `  doi = {${doi}}` : null,
    `  url = {${reading.sourceHref}}`
  ].filter(Boolean);

  return `@${type}{${normalizeBibtexKey(reading)},\n${fields.join(",\n")}\n}`;
}

export function getReadingCitationData(reading: TopicReading): ReadingCitationData {
  return {
    citation: getReadingCitation(reading),
    doi: getReadingDoi(reading),
    bibtex: getReadingBibtex(reading)
  };
}
