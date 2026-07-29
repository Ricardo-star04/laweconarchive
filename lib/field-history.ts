export type HistoryMilestone = {
  period: string;
  title: string;
  summary: string;
  themes: string[];
  works: string[];
};

export type ScholarProfile = {
  name: string;
  lifespan: string;
  role: string;
  fields: string[];
  imageUrl: string;
  imageAlt: string;
  imageSource: string;
  imageSourceHref: string;
  imagePosition?: string;
  summary: string;
  majorWorks: string[];
  relevance: string;
};

export type ScholarDetail = {
  officialProfileSource: string;
  officialProfileHref: string;
  institutionalProfile: string[];
};

export type ScholarRecord = ScholarProfile &
  ScholarDetail & {
    slug: string;
    surname: string;
    sortLetter: string;
  };

export const HISTORY_MILESTONES: HistoryMilestone[] = [
  {
    period: "1910s-1930s",
    title: "Analytical legal concepts before economic modeling",
    summary:
      "Law and economics did not begin only with price theory. A prior legal-analytical tradition clarified what legal relations are before asking how they affect incentives. Hohfeld's distinction between claims, privileges, powers, and immunities remains useful because economic analysis of entitlements, control rights, voting powers, and regulatory authority depends on knowing which legal position is being assigned.",
    themes: ["legal relations", "entitlements", "conceptual foundations"],
    works: [
      "Wesley Newcomb Hohfeld, Some Fundamental Legal Conceptions as Applied in Judicial Reasoning (1913)",
      "Wesley Newcomb Hohfeld, Fundamental Legal Conceptions as Applied in Judicial Reasoning (1917)"
    ]
  },
  {
    period: "1930s-1960s",
    title: "Institutional origins: firms, social cost, and property rights",
    summary:
      "The field's institutional foundation came from treating markets, firms, contracts, courts, and legal rules as alternative ways of organizing exchange. Coase shifted attention from frictionless markets to the costs of using markets and the reciprocal structure of externalities. Demsetz then connected property-right formation to the changing benefits and costs of internalizing external effects.",
    themes: ["transaction costs", "property rights", "institutional choice"],
    works: [
      "Ronald H. Coase, The Nature of the Firm (1937)",
      "Ronald H. Coase, The Problem of Social Cost (1960)",
      "Harold Demsetz, Toward a Theory of Property Rights (1967)"
    ]
  },
  {
    period: "1960s-1970s",
    title: "The legal system becomes an incentive system",
    summary:
      "A more general law-and-economics vocabulary emerged when tort, criminal law, remedies, and legal entitlements were analyzed through accident costs, deterrence, bargaining, sanctions, and institutional costs. The New Haven and Chicago strands differed in style and normative emphasis, but together they made legal rules legible as devices for shaping behavior under scarcity, risk, and information constraints.",
    themes: ["deterrence", "accident costs", "remedies"],
    works: [
      "Guido Calabresi, Some Thoughts on Risk Distribution and the Law of Torts (1961)",
      "Gary S. Becker, Crime and Punishment: An Economic Approach (1968)",
      "Guido Calabresi, The Cost of Accidents (1970)",
      "Guido Calabresi and A. Douglas Melamed, Property Rules, Liability Rules, and Inalienability (1972)"
    ]
  },
  {
    period: "1970s",
    title: "Economic analysis of law becomes a general legal method",
    summary:
      "During the 1970s economic analysis was organized as a general method for reading legal doctrine rather than a set of isolated applications. Posner's synthesis gave legal readers a portable grammar of incentives, costs, efficiency, and institutional behavior. At the same time, welfare analysis, public enforcement theory, and later textbook treatments made the field teachable and cumulative.",
    themes: ["general method", "welfare analysis", "legal education"],
    works: [
      "Richard A. Posner, Economic Analysis of Law (1973)",
      "Steven M. Shavell, Foundations of Economic Analysis of Law (2004)",
      "Robert Cooter and Thomas Ulen, Law and Economics, 6th ed. (2016)"
    ]
  },
  {
    period: "1960s-1980s",
    title: "Corporate control, agency costs, and the contractual theory of the firm",
    summary:
      "Corporate law became a central site for law-and-economics analysis because it connected legal form to control rights, agency costs, compensation, takeovers, monitoring, and capital structure. The firm was increasingly described as a governance arrangement for allocating decision authority and residual risk, while takeovers and securities markets were studied as mechanisms for disciplining managerial control.",
    themes: ["agency costs", "corporate control", "contract theory"],
    works: [
      "Henry G. Manne, Mergers and the Market for Corporate Control (1965)",
      "Michael C. Jensen and William H. Meckling, Theory of the Firm (1976)",
      "Eugene F. Fama, Agency Problems and the Theory of the Firm (1980)",
      "Frank H. Easterbrook and Daniel R. Fischel, The Economic Structure of Corporate Law (1991)"
    ]
  },
  {
    period: "1970s-1990s",
    title: "Capital-market theory reshapes securities regulation",
    summary:
      "Financial economics brought securities law into closer contact with theories of price formation, information incorporation, market efficiency, and disclosure. The central securities-law question became whether mandatory disclosure, antifraud rules, insider-trading limits, intermediaries, and private litigation improve information production and investor protection more effectively than market ordering alone.",
    themes: ["market efficiency", "disclosure", "investor protection"],
    works: [
      "Eugene F. Fama, Efficient Capital Markets (1970)",
      "Frank H. Easterbrook and Daniel R. Fischel, Mandatory Disclosure and the Protection of Investors (1984)",
      "John C. Coffee Jr., Market Failure and the Economic Case for a Mandatory Disclosure System (1984)",
      "Ronald J. Gilson and Reinier H. Kraakman, The Mechanisms of Market Efficiency (1984)"
    ]
  },
  {
    period: "1990s-2000s",
    title: "Comparative law and finance turn legal institutions into measurable variables",
    summary:
      "The law-and-finance literature moved the field from single-jurisdiction theory toward cross-country comparison. Investor protection, disclosure, liability standards, legal origin, ownership concentration, and enforcement resources became variables for studying securities-market development. This turn also created a methodological caution: legal indices and comparative coding must be read with attention to institutional context and measurement limits.",
    themes: ["law and finance", "comparative institutions", "measurement"],
    works: [
      "Rafael La Porta et al., Law and Finance (1998)",
      "Bernard S. Black, The Legal and Institutional Preconditions for Strong Securities Markets (2001)",
      "La Porta, Lopez-de-Silanes, and Shleifer, What Works in Securities Laws? (2006)",
      "Holger Spamann, The Antidirector Rights Index Revisited (2010)"
    ]
  },
  {
    period: "1990s-2010s",
    title: "Behavioral law and economics qualifies the rational-actor model",
    summary:
      "Behavioral law and economics did not reject incentive analysis; it asked when the standard model's behavioral assumptions predict poorly. Prospect theory, loss aversion, endowment effects, status quo bias, bounded rationality, and choice architecture entered legal analysis of settlement, defaults, consumer contracts, investor protection, judicial behavior, and regulatory design.",
    themes: ["bounded rationality", "prospect theory", "choice architecture"],
    works: [
      "Daniel Kahneman and Amos Tversky, Prospect Theory (1979)",
      "Kahneman, Knetsch, and Thaler, Anomalies: The Endowment Effect, Loss Aversion, and Status Quo Bias (1991)",
      "Christine Jolls, Cass R. Sunstein, and Richard H. Thaler, A Behavioral Approach to Law and Economics (1998)",
      "Russell B. Korobkin and Thomas S. Ulen, Law and Behavioral Science (2000)",
      "Richard H. Thaler and Shlomo Benartzi, Save More Tomorrow (2004)"
    ]
  },
  {
    period: "2000s-2010s",
    title: "Financial crises move the agenda toward systemic risk and regulatory architecture",
    summary:
      "The global financial crisis pushed law and economics beyond firm-level agency costs and issuer disclosure toward systemic externalities, bank runs, short-term funding, leverage, macroprudential supervision, stress testing, resolution, and central-bank governance. Financial law became a field about institutional resilience as much as market discipline.",
    themes: ["systemic risk", "macroprudential regulation", "resolution"],
    works: [
      "Diamond and Dybvig, Bank Runs, Deposit Insurance, and Liquidity (1983)",
      "Basel Committee, Principles for sound stress testing practices and supervision (2009)",
      "Brunnermeier et al., The Fundamental Principles of Financial Regulation (2009)",
      "Hanson, Kashyap, and Stein, A Macroprudential Approach to Financial Regulation (2011)"
    ]
  },
  {
    period: "2010s-present",
    title: "EU financial-market governance and supervisory networks become central",
    summary:
      "For international and comparative research, the post-crisis EU regime made financial-market law an institutional-governance problem. Capital Markets Union, ESMA, supervisory convergence, conduct regulation, sustainable finance, retail investor protection, and Brexit-era market fragmentation show how law and economics now studies not only rules and incentives, but also the administrative architecture through which financial markets are governed.",
    themes: ["EU financial markets", "ESMA", "supervisory governance"],
    works: [
      "Niamh Moloney, How to Protect Investors (2010)",
      "Niamh Moloney, The Age of ESMA (2018)",
      "Niamh Moloney, EU Securities and Financial Markets Regulation, 4th ed. (2023)"
    ]
  },
  {
    period: "2010s-present",
    title: "Empirical legal studies and institutional design discipline the field",
    summary:
      "Recent work increasingly asks how legal claims can be tested, measured, and compared. Event studies, difference-in-differences designs, disclosure evidence, enforcement-resource measures, and legal-index reassessment have made method part of the field's substance. The result is a more cautious law-and-economics style: institutional claims require attention to data quality, identification, legal coding, and external validity.",
    themes: ["empirical legal studies", "causal inference", "institutional evidence"],
    works: [
      "Howell E. Jackson and Mark J. Roe, Public and Private Enforcement of Securities Laws (2009)",
      "Christian Leuz and Peter D. Wysocki, The Economics of Disclosure and Financial Reporting Regulation (2016)",
      "Brown and Warner, Accuracy of Predictions in the Event Study Methodology (1980)",
      "Bertrand, Duflo, and Mullainathan, How Much Should We Trust Differences-in-Differences Estimates? (2004)"
    ]
  },
];

export const SCHOLAR_PROFILES: ScholarProfile[] = [
  {
    name: "Ronald H. Coase",
    lifespan: "1910-2013",
    role: "Economist and institutional theorist",
    fields: ["transaction costs", "property rights", "institutional economics"],
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Coase-b%26w.jpg",
    imageAlt: "Portrait of Ronald Coase",
    imageSource: "Wikimedia Commons",
    imageSourceHref: "https://commons.wikimedia.org/wiki/File:Coase-b%26w.jpg",
    summary:
      "Coase supplied the field's institutional vocabulary. His work on firms and social cost made transaction costs, bargaining, and institutional alternatives central to legal analysis.",
    majorWorks: ["The Nature of the Firm (1937)", "The Problem of Social Cost (1960)"],
    relevance:
      "For corporate and financial law, Coase helps explain why firms, markets, contracts, and legal rules are alternative governance mechanisms rather than isolated categories."
  },
  {
    name: "Gary S. Becker",
    lifespan: "1930-2014",
    role: "Economist of human behavior, public enforcement, and deterrence",
    fields: ["deterrence", "public enforcement", "human behavior"],
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Gary_Becker_close-up_%28cropped%29.jpg",
    imageAlt: "Portrait of Gary S. Becker",
    imageSource: "Wikimedia Commons",
    imageSourceHref: "https://commons.wikimedia.org/wiki/File:Gary_Becker_close-up_(cropped).jpg",
    summary:
      "Becker extended microeconomic analysis to crime, punishment, discrimination, family behavior, human capital, and other nonmarket domains. His enforcement model remains a basic reference for deterrence analysis.",
    majorWorks: ["Crime and Punishment: An Economic Approach (1968)", "The Economic Approach to Human Behavior (1976)", "A Treatise on the Family (1981)"],
    relevance:
      "For legal research, Becker supplies the expected-sanction framework behind public enforcement: legal compliance depends on detection probability, sanction magnitude, enforcement costs, and alternative behavior."
  },
  {
    name: "Oliver E. Williamson",
    lifespan: "1932-2020",
    role: "Economist of transaction-cost economics and economic governance",
    fields: ["transaction-cost economics", "economic governance", "contractual relations"],
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Oliver_E._Williamson.jpg",
    imageAlt: "Portrait of Oliver E. Williamson",
    imageSource: "Wikimedia Commons",
    imageSourceHref: "https://commons.wikimedia.org/wiki/File:Oliver_E._Williamson.jpg",
    summary:
      "Williamson developed transaction-cost economics as a comparative framework for studying governance. His work connects bounded rationality, opportunism, asset specificity, and private ordering to firms, contracts, and legal institutions.",
    majorWorks: ["Markets and Hierarchies (1975)", "Transaction-Cost Economics: The Governance of Contractual Relations (1979)", "The Economic Institutions of Capitalism (1985)"],
    relevance:
      "Williamson is central for readers asking when legal systems should rely on market exchange, contractual safeguards, hierarchy, relational governance, or regulatory intervention."
  },
  {
    name: "Douglass C. North",
    lifespan: "1920-2015",
    role: "Economic historian and theorist of institutions and institutional change",
    fields: ["institutions", "institutional change", "economic history"],
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Douglass_North.jpg",
    imageAlt: "Portrait of Douglass C. North",
    imageSource: "Wikimedia Commons",
    imageSourceHref: "https://commons.wikimedia.org/wiki/File:Douglass_North.jpg",
    summary:
      "North explained institutions as formal and informal constraints that structure exchange, enforcement, and long-run economic performance. His work made institutional change central to law, economics, and development.",
    majorWorks: ["Structure and Change in Economic History (1981)", "Institutions, Institutional Change and Economic Performance (1990)", "Institutions (1991)"],
    relevance:
      "North helps this archive connect legal rules to enforcement, informal norms, path dependence, and the institutional environment in which corporate, securities, and financial laws operate."
  },
  {
    name: "Guido Calabresi",
    lifespan: "1932-",
    role: "Judge and legal scholar of accident law and economic analysis of torts",
    fields: ["accident law", "tort law", "economic analysis of law"],
    imageUrl: "https://law.yale.edu/sites/default/files/styles/content_285x393_/public/images/Headshots/calabresi_guido_color.jpg?itok=iXf4Mh2f",
    imageAlt: "Portrait of Guido Calabresi",
    imageSource: "Yale Law School",
    imageSourceHref: "https://law.yale.edu/guido-calabresi",
    summary:
      "Calabresi helped establish law and economics by treating accident law as a problem of loss allocation, prevention incentives, insurance, administrative cost, and institutional choice.",
    majorWorks: [
      "Some Thoughts on Risk Distribution and the Law of Torts (1961)",
      "The Cost of Accidents (1970)",
      "Property Rules, Liability Rules, and Inalienability (with A. Douglas Melamed)"
    ],
    relevance:
      "Calabresi gives the archive a foundational account of accident costs, entitlement protection, risk distribution, and the limits of purely efficiency-based legal analysis."
  },
  {
    name: "Robert D. Cooter",
    lifespan: "Contemporary",
    role: "Law-and-economics scholar of legal institutions, development, and private law",
    fields: ["law and economics", "legal institutions", "property and tort theory"],
    imageUrl: "https://www.law.berkeley.edu/img/Cooter_rdax_440x330.JPG",
    imageAlt: "Portrait of Robert D. Cooter",
    imageSource: "UC Berkeley Law",
    imageSourceHref: "https://www.law.berkeley.edu/academics/doctoral-programs/jsp/our-faculty/robert-d-cooter/",
    summary:
      "Cooter is central to the teaching and development of law and economics, especially through work on legal institutions, property, torts, constitutional design, and economic development.",
    majorWorks: ["Law and Economics (with Thomas Ulen)", "The Strategic Constitution", "Solomon's Knot (with Hans-Bernd Schafer)"],
    relevance:
      "Cooter helps readers move from isolated doctrines to institutional models of cooperation, incentives, bargaining, enforcement, and legal development."
  },
  {
    name: "A. Mitchell Polinsky",
    lifespan: "1948-",
    role: "Law-and-economics scholar of public enforcement, sanctions, and liability",
    fields: ["public enforcement", "sanctions", "law and economics"],
    imageUrl: "https://siepr.stanford.edu/sites/g/files/sbiybj16606/files/styles/large_square/public/media/image/a._mitchell_polinsky_0.jpeg?h=169e40e6&itok=9pty1php",
    imageAlt: "Portrait of A. Mitchell Polinsky",
    imageSource: "Stanford Institute for Economic Policy Research",
    imageSourceHref: "https://siepr.stanford.edu/people/mitchell-polinsky",
    summary:
      "Polinsky's work gives law-and-economics readers a concise framework for liability, deterrence, damages, sanctions, and public enforcement.",
    majorWorks: [
      "An Introduction to Law and Economics",
      "The Economic Theory of Public Enforcement of Law (with Steven Shavell)",
      "Punitive Damages: An Economic Analysis"
    ],
    relevance:
      "Polinsky is especially useful for connecting basic microeconomic tools to enforcement design, expected sanctions, marginal deterrence, and the institutional cost of legal rules."
  },
  {
    name: "Thomas S. Ulen",
    lifespan: "1946-",
    role: "Law-and-economics scholar and teacher of legal institutions and regulation",
    fields: ["law and economics", "legal education", "regulation"],
    imageUrl: "https://law.illinois.edu/wp-content/uploads/2016/12/Ulen-Thomas.jpg",
    imageAlt: "Portrait of Thomas S. Ulen",
    imageSource: "University of Illinois College of Law",
    imageSourceHref: "https://law.illinois.edu/faculty-research/faculty-profiles/thomas-s-ulen/",
    summary:
      "Ulen helped make law and economics accessible to generations of legal readers, especially through teaching, institutional work, and the widely used textbook coauthored with Robert Cooter.",
    majorWorks: ["Law and Economics (with Robert Cooter)", "A Nobel Prize in Legal Science", "Law and Irrational Behavior"],
    relevance:
      "Ulen strengthens the archive's pedagogical foundation by linking doctrinal legal study to economic method, legal education, behavioral assumptions, and regulatory analysis."
  },
  {
    name: "Daniel Kahneman",
    lifespan: "1934-2024",
    role: "Psychologist and behavioral economist of judgment and decision-making",
    fields: ["behavioral economics", "prospect theory", "judgment and decision-making"],
    imageUrl: "https://www.nobelprize.org/images/kahneman-13673-portrait-medium.jpg",
    imageAlt: "Portrait of Daniel Kahneman",
    imageSource: "Nobel Prize",
    imageSourceHref: "https://www.nobelprize.org/prizes/economic-sciences/2002/kahneman/facts/",
    summary:
      "Kahneman's work with Amos Tversky supplied the behavioral foundations for studying judgment, heuristics, loss aversion, and decisions under risk. His research is not legal doctrine, but it is indispensable to behavioral law and economics.",
    majorWorks: ["Judgment under Uncertainty: Heuristics and Biases (1974)", "Prospect Theory (with Amos Tversky, 1979)", "Thinking, Fast and Slow (2011)"],
    relevance:
      "For legal analysis, Kahneman helps explain why actors may respond to legal rules through framing, reference points, salience, overconfidence, or loss aversion rather than through fully rational optimization."
  },
  {
    name: "Christine Jolls",
    lifespan: "Contemporary",
    role: "Legal scholar of behavioral law and economics, employment law, and regulation",
    fields: ["behavioral law and economics", "employment law", "regulation"],
    imageUrl: "https://law.yale.edu/sites/default/files/styles/content_285x393_/public/images/faculty/jolls_christine.jpg?h=40aa7471&itok=56T-vZaR",
    imageAlt: "Portrait of Christine Jolls",
    imageSource: "Yale Law School",
    imageSourceHref: "https://law.yale.edu/christine-jolls",
    summary:
      "Jolls is a central figure in behavioral law and economics. Her work examines how bounded rationality, bounded willpower, and bounded self-interest affect legal compliance, workplace regulation, and institutional design.",
    majorWorks: ["A Behavioral Approach to Law and Economics (with Cass Sunstein and Richard Thaler, 1998)", "Behavioral Law and Economics", "Debiasing through Law (with Cass Sunstein, 2006)"],
    relevance:
      "Jolls anchors the archive's behavioral-law layer by showing how legal analysis can remain economically disciplined while using more realistic assumptions about human behavior."
  },
  {
    name: "Russell B. Korobkin",
    lifespan: "Contemporary",
    role: "Legal scholar of behavioral law and economics, negotiation, and contracts",
    fields: ["behavioral law and economics", "contracts", "negotiation"],
    imageUrl: "https://apps.law.ucla.edu/FacultyPhoto/105.jpg",
    imageAlt: "Portrait of Russell B. Korobkin",
    imageSource: "UCLA School of Law",
    imageSourceHref: "https://law.ucla.edu/faculty/faculty-profiles/russell-korobkin",
    summary:
      "Korobkin's work connects behavioral decision theory to contract law, negotiation, dispute resolution, and legal policy. His article with Thomas Ulen is a major statement of why law and economics should relax the rationality assumption.",
    majorWorks: ["Law and Behavioral Science (with Thomas Ulen, 2000)", "Inertia and Preference in Contract Negotiation (1998)", "Stem Cell Century (2007)"],
    relevance:
      "Korobkin helps readers see behavioral law and economics as a method for analyzing bargaining, default rules, negotiation failures, and legal design under realistic cognitive constraints."
  },
  {
    name: "Jeffrey J. Rachlinski",
    lifespan: "Contemporary",
    role: "Legal scholar of behavioral law, litigation, and judicial decision-making",
    fields: ["behavioral law and economics", "judicial behavior", "litigation"],
    imageUrl: "https://www.lawschool.cornell.edu/wp-content/uploads/2021/02/Rachlinski_4x6.jpg",
    imageAlt: "Portrait of Jeffrey J. Rachlinski",
    imageSource: "Cornell Law School",
    imageSourceHref: "https://www.lawschool.cornell.edu/faculty-research/faculty-directory/jeffrey-rachlinski/",
    summary:
      "Rachlinski applies behavioral decision research to litigation, judging, settlement, and legal institutions. His work is especially important for understanding how framing and cognitive bias can affect legal process.",
    majorWorks: ["Gains, Losses, and the Psychology of Litigation (1996)", "Heuristics and Biases in the Courts (with Chris Guthrie and Andrew Wistrich)", "Judging the Judiciary by the Numbers"],
    relevance:
      "Rachlinski connects behavioral law and economics to courts: settlement behavior, judge and jury decision-making, and the institutional question of whether legal process can reduce or amplify bias."
  },
  {
    name: "Cass R. Sunstein",
    lifespan: "1954-",
    role: "Legal scholar of behavioral regulation, administrative law, and constitutional theory",
    fields: ["behavioral law and economics", "administrative law", "choice architecture"],
    imageUrl: "https://hls.harvard.edu/wp-content/uploads/faculty/images/10871.jpg?1780633293",
    imageAlt: "Portrait of Cass R. Sunstein",
    imageSource: "Harvard Law School",
    imageSourceHref: "https://hls.harvard.edu/faculty/cass-r-sunstein/",
    summary:
      "Sunstein helped translate behavioral economics into legal and regulatory analysis. His work on choice architecture, nudges, risk regulation, and administrative governance made behavioral insights part of mainstream public-law and law-and-economics debates.",
    majorWorks: ["A Behavioral Approach to Law and Economics (with Christine Jolls and Richard Thaler, 1998)", "Risk and Reason: Safety, Law, and the Environment (2002)", "Nudge (with Richard Thaler, 2008)"],
    relevance:
      "Sunstein is central for studying how legal institutions can structure decisions through defaults, disclosure, simplification, warnings, and regulatory design without relying only on command-and-control mandates."
  },
  {
    name: "Richard H. Thaler",
    lifespan: "1945-",
    role: "Behavioral economist of choice, markets, and policy design",
    fields: ["behavioral economics", "choice architecture", "behavioral finance"],
    imageUrl: "https://www.chicagobooth.edu/-/media/project/chicago-booth/faculty-and-insights/faculty/richard-h-thaler/chicago-booth-richard-h-thaler.jpg?w=1920&h=800&hash=D465DAD442413B62D94653CC5F224F1E",
    imageAlt: "Portrait of Richard H. Thaler",
    imageSource: "University of Chicago Booth School of Business",
    imageSourceHref: "https://www.chicagobooth.edu/faculty/emeriti/richard-h-thaler",
    summary:
      "Thaler's work made behavioral economics central to finance, consumer choice, savings, and policy design. His collaborations with Sunstein and Jolls helped define behavioral law and economics as a legal research program.",
    majorWorks: ["The Winner's Curse (1992)", "A Behavioral Approach to Law and Economics (with Christine Jolls and Cass Sunstein, 1998)", "Nudge (with Cass Sunstein, 2008)"],
    relevance:
      "Thaler gives legal readers a disciplined vocabulary for nudges, defaults, mental accounting, endowment effects, and behavioral finance in corporate, securities, and consumer-finance settings."
  },
  {
    name: "Oren Bar-Gill",
    lifespan: "Contemporary",
    role: "Legal scholar of contracts, behavioral economics, and consumer markets",
    fields: ["behavioral law and economics", "consumer contracts", "consumer finance"],
    imageUrl: "/scholar-portraits/oren-bar-gill.jpeg",
    imageAlt: "Portrait of Oren Bar-Gill",
    imageSource: "Harvard Law School",
    imageSourceHref: "https://hls.harvard.edu/today/oren-bar-gill-an-expert-on-law-and-economics-will-join-the-harvard-law-school-faculty/",
    imagePosition: "86% center",
    summary:
      "Bar-Gill studies how firms design contracts and products in response to consumer psychology. His work is especially important for behaviorally informed accounts of disclosure, contract complexity, and consumer financial regulation.",
    majorWorks: ["Seduction by Contract (2012)", "Consumer Contracts: Behavioral Economics vs. Neoclassical Economics (with Omri Ben-Shahar)", "Making Credit Safer (with Elizabeth Warren)"],
    relevance:
      "Bar-Gill connects behavioral law and economics to market design: competition may exploit limited attention, optimism, or misunderstanding, so legal policy must ask when disclosure or product regulation can improve consumer choice."
  },
  {
    name: "Wesley Newcomb Hohfeld",
    lifespan: "1879-1918",
    role: "Jurist and theorist of fundamental legal relations",
    fields: ["analytical jurisprudence", "legal relations", "rights analysis"],
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Wesley_Newcomb_Hohfeld%2C_circa_1916.jpg",
    imageAlt: "Portrait of Wesley Newcomb Hohfeld circa 1916",
    imageSource: "Wikimedia Commons",
    imageSourceHref: "https://commons.wikimedia.org/wiki/File:Wesley_Newcomb_Hohfeld,_circa_1916.jpg",
    summary:
      "Hohfeld supplied a precise vocabulary for legal relations by distinguishing claim-rights, privileges, powers, and immunities, together with their correlatives and opposites.",
    majorWorks: [
      "Some Fundamental Legal Conceptions as Applied in Judicial Reasoning (1913)",
      "Fundamental Legal Conceptions as Applied in Judicial Reasoning (1917)",
      "Fundamental Legal Conceptions as Applied in Judicial Reasoning and Other Legal Essays (1919)"
    ],
    relevance:
      "For law-and-economics research, Hohfeld's framework helps translate broad doctrinal language into analyzable legal positions: who has a claim, who bears a duty, who can change legal relations, and who is protected against another actor's power."
  },
  {
    name: "Richard A. Posner",
    lifespan: "1939-",
    role: "Judge, legal scholar, and systematizer of economic analysis of law",
    fields: ["economic analysis of law", "judicial behavior", "legal institutions"],
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Richard_Posner_at_Harvard_University.jpg",
    imageAlt: "Portrait of Richard Posner",
    imageSource: "Wikimedia Commons",
    imageSourceHref: "https://commons.wikimedia.org/wiki/File:Richard_Posner_at_Harvard_University.jpg",
    summary:
      "Posner made economic analysis legible across legal fields and helped turn law and economics into a general scholarly method in American legal academia.",
    majorWorks: ["Economic Analysis of Law (1973)", "The Economics of Justice (1981)"],
    relevance:
      "For this site's focus, Posner's contribution is methodological: securities enforcement, corporate governance, and financial supervision can all be studied through incentives, information, and institutional costs."
  },
  {
    name: "Eugene F. Fama",
    lifespan: "1939-",
    role: "Financial economist and theorist of capital markets",
    fields: ["efficient markets", "asset pricing", "corporate finance"],
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Eugene_Fama_%282x3_cropped%29.jpg",
    imageAlt: "Portrait of Eugene Fama",
    imageSource: "Wikimedia Commons",
    imageSourceHref: "https://commons.wikimedia.org/wiki/File:Eugene_Fama_(2x3_cropped).jpg",
    summary:
      "Fama's work on efficient capital markets shaped securities regulation, disclosure policy, event studies, and the empirical study of corporate and financial markets.",
    majorWorks: ["Efficient Capital Markets: A Review of Theory and Empirical Work (1970)", "Agency Problems and the Theory of the Firm (1980)"],
    relevance:
      "Fama's research connects legal rules to market prices, information processing, and empirical identification, especially in securities and financial-law research."
  },
  {
    name: "Andrei Shleifer",
    lifespan: "Contemporary",
    role: "Economist of law, finance, corporate governance, and institutions",
    fields: ["law and finance", "corporate governance", "behavioral finance"],
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Andrei_Shleifer_(cropped).jpg",
    imageAlt: "Portrait of Andrei Shleifer",
    imageSource: "Wikimedia Commons",
    imageSourceHref: "https://commons.wikimedia.org/wiki/File:Andrei_Shleifer_(cropped).jpg",
    summary:
      "Shleifer helped define the law-and-finance literature linking legal institutions, investor protection, ownership concentration, and financial development. His work also bridges behavioral finance and institutional economics.",
    majorWorks: ["A Survey of Corporate Governance (1997)", "Law and Finance (1998)", "The Economic Consequences of Legal Origins (2008)"],
    relevance:
      "For corporate and securities law, Shleifer's work supplies the comparative frame for asking how legal protection and enforcement shape capital markets and ownership structure."
  },
  {
    name: "Rafael La Porta",
    lifespan: "Contemporary",
    role: "Economist of law and finance",
    fields: ["investor protection", "legal origins", "financial development"],
    imageUrl: "https://economics.brown.edu/sites/default/files/styles/classic_xlrg/public/people/La-Porta-Rafael.jpg?h=d9a80cda&itok=UsCLrDR2",
    imageAlt: "Portrait of Rafael La Porta",
    imageSource: "Brown University Department of Economics",
    imageSourceHref: "https://economics.brown.edu/people/rafael-la-porta",
    summary:
      "La Porta's empirical work, often with Lopez-de-Silanes, Shleifer, and Vishny, made investor protection and legal origin central variables in comparative corporate governance and financial development.",
    majorWorks: ["Law and Finance (1998)", "Investor Protection and Corporate Governance (2000)", "What Works in Securities Laws? (2006)"],
    relevance:
      "His research is foundational for studying how securities law, creditor rights, disclosure, and private enforcement affect external finance and market development."
  },
  {
    name: "Lucian A. Bebchuk",
    lifespan: "Contemporary",
    role: "Corporate-law scholar and law-and-finance theorist",
    fields: ["corporate governance", "shareholder rights", "executive compensation"],
    imageUrl: "https://hls.harvard.edu/wp-content/uploads/faculty/images/10058.jpg?1780374226=",
    imageAlt: "Portrait of Lucian A. Bebchuk",
    imageSource: "Harvard Law School",
    imageSourceHref: "https://hls.harvard.edu/faculty/lucian-a-bebchuk/",
    summary:
      "Bebchuk is a leading scholar of corporate governance, law and finance, shareholder power, board insulation, and executive compensation. His work connects doctrinal corporate-law debates to incentives, valuation, and institutional design.",
    majorWorks: ["The Case for Increasing Shareholder Power (2005)", "Pay without Performance (2004)", "What Matters in Corporate Governance? (2009)"],
    relevance:
      "Bebchuk is central for debates over shareholder rights, board accountability, managerial power, and the economic consequences of corporate-law design."
  },
  {
    name: "Roberta Romano",
    lifespan: "Contemporary",
    role: "Corporate and securities-law scholar",
    fields: ["corporate federalism", "securities regulation", "empirical legal studies"],
    imageUrl: "https://law.yale.edu/sites/default/files/styles/content_285x393_/public/Groups/Centers/Center%20for%20Private%20Law/romano_roberta.jpg?itok=7qzeU3LB",
    imageAlt: "Portrait of Roberta Romano",
    imageSource: "Yale Law School",
    imageSourceHref: "https://law.yale.edu/roberta-romano",
    summary:
      "Romano's work examines state competition for corporate charters, takeover regulation, shareholder litigation, institutional investor activism, securities markets, and financial regulation.",
    majorWorks: ["The Genius of American Corporate Law (1993)", "The Advantage of Competitive Federalism for Securities Regulation (2002)", "Foundations of Corporate Law (2010)"],
    relevance:
      "Romano is essential for understanding competitive federalism, Delaware corporate law, securities regulation, and the empirical turn in corporate-law scholarship."
  },
  {
    name: "Howell E. Jackson",
    lifespan: "Contemporary",
    role: "Financial-regulation and securities-law scholar",
    fields: ["financial regulation", "securities enforcement", "consumer finance"],
    imageUrl: "https://hls.harvard.edu/wp-content/uploads/faculty/images/10423.jpg?1780287915=",
    imageAlt: "Portrait of Howell E. Jackson",
    imageSource: "Harvard Law School",
    imageSourceHref: "https://hls.harvard.edu/faculty/howell-e-jackson/",
    summary:
      "Jackson's scholarship and public work focus on financial regulation, consumer financial protection, securities regulation, public enforcement, and the institutional design of supervisory systems.",
    majorWorks: ["Financial Regulation: Law and Policy (2016)", "Regulation of Financial Institutions (1999)", "Public and Private Enforcement of Securities Laws (2009)"],
    relevance:
      "Jackson anchors the site's financial-law strand by linking legal doctrine, regulatory architecture, enforcement resources, and institutional accountability."
  },
  {
    name: "Mark J. Roe",
    lifespan: "Contemporary",
    role: "Corporate-law, bankruptcy, and political-economy scholar",
    fields: ["corporate finance", "bankruptcy", "political economy"],
    imageUrl: "https://hls.harvard.edu/wp-content/uploads/faculty/images/10725.jpg?1780287628=",
    imageAlt: "Portrait of Mark J. Roe",
    imageSource: "Harvard Law School",
    imageSourceHref: "https://hls.harvard.edu/faculty/mark-j-roe/",
    summary:
      "Roe studies corporate law, corporate finance, bankruptcy, and the political determinants of corporate governance. His work emphasizes how politics, institutions, and market structure condition corporate-law outcomes.",
    majorWorks: ["Strong Managers, Weak Owners (1994)", "Political Determinants of Corporate Governance (2003)", "Missing the Target (2022)"],
    relevance:
      "Roe is important for connecting corporate governance to political economy, comparative capitalism, bankruptcy, and systemic-risk debates."
  },
  {
    name: "Steven M. Shavell",
    lifespan: "Contemporary",
    role: "Economist and legal scholar of economic analysis of law",
    fields: ["law and economics", "public enforcement", "legal process"],
    imageUrl: "https://hls.harvard.edu/wp-content/uploads/faculty/images/10793.jpg?1780287610=",
    imageAlt: "Portrait of Steven M. Shavell",
    imageSource: "Harvard Law School",
    imageSourceHref: "https://hls.harvard.edu/faculty/steven-m-shavell/",
    summary:
      "Shavell systematized economic analysis across basic legal fields and legal process. His work on sanctions, enforcement, liability, and welfare provides a general toolkit for analyzing regulation.",
    majorWorks: ["Economic Analysis of Accident Law (1987)", "Foundations of Economic Analysis of Law (2004)", "Fairness versus Welfare (2001)"],
    relevance:
      "For securities and financial regulation, Shavell's framework helps analyze detection probability, sanctions, enforcement costs, and deterrence."
  },
  {
    name: "Katharina Pistor",
    lifespan: "Contemporary",
    role: "Comparative-law and law-and-finance scholar",
    fields: ["legal theory of finance", "comparative corporate governance", "financial systems"],
    imageUrl: "https://www.law.columbia.edu/sites/default/files/2020-02/20181030_katharinapistorportrait_001.jpg",
    imageAlt: "Portrait of Katharina Pistor",
    imageSource: "Columbia Law School",
    imageSourceHref: "https://www.law.columbia.edu/faculty/katharina-pistor",
    summary:
      "Pistor studies corporate governance, money and finance, property rights, comparative law, and legal institutions. Her work explains how legal coding turns assets and claims into capital.",
    majorWorks: ["The Code of Capital (2019)", "A Legal Theory of Finance (2013)", "How Law Affects Lending (2009)"],
    relevance:
      "Pistor extends law and economics toward the legal construction of capital, financial hierarchy, and comparative institutional analysis."
  },
  {
    name: "Merritt B. Fox",
    lifespan: "Contemporary",
    role: "Corporate and securities-law scholar",
    fields: ["securities regulation", "capital markets", "market manipulation"],
    imageUrl: "https://www.law.columbia.edu/sites/default/files/2020-02/merritt_fox.jpg",
    imageAlt: "Portrait of Merritt B. Fox",
    imageSource: "Columbia Law School",
    imageSourceHref: "https://www.law.columbia.edu/fac/Merritt_Fox",
    summary:
      "Fox's work in corporate and securities law focuses on disclosure regulation, international securities regulation, market structure, corporate finance, and capital-markets policy.",
    majorWorks: ["The New Stock Market (2019)", "Stock Market Manipulation and Its Regulation (2018)", "Securities Disclosure in a Globalizing Market (1997)"],
    relevance:
      "Fox is especially relevant for the site's securities-law materials on disclosure, manipulation, market microstructure, and the economic design of capital-market regulation."
  },
  {
    name: "Louis Loss",
    lifespan: "1914-1997",
    role: "Securities-law scholar and architect of the field's doctrinal vocabulary",
    fields: ["securities law", "securities regulation", "SEC administrative law"],
    imageUrl: "https://hls.harvard.edu/wp-content/uploads/2025/04/Loss.17.jpg",
    imageAlt: "Portrait of Louis Loss",
    imageSource: "Harvard Law School",
    imageSourceHref: "https://hls.harvard.edu/historical-faculty/louis-loss-1914-1997/",
    imagePosition: "63% center",
    summary:
      "Loss gave American securities law its canonical treatise structure and helped define securities regulation as a distinct field of study, doctrine, and administrative practice.",
    majorWorks: ["Securities Regulation", "Fundamentals of Securities Regulation", "Japanese Securities Regulation"],
    relevance:
      "Loss anchors the archive's securities-law materials because law-and-economics analysis of disclosure, trading, enforcement, and liability still depends on a reliable map of the doctrinal system."
  },
  {
    name: "James D. Cox",
    lifespan: "Contemporary",
    role: "Corporate and securities-law scholar of market regulation and securities litigation",
    fields: ["securities law", "market regulation", "securities litigation"],
    imageUrl: "https://law.duke.edu/sites/default/files/images/directory/hjdhtfghnvb.jpg",
    imageAlt: "Portrait of James D. Cox",
    imageSource: "Duke University School of Law",
    imageSourceHref: "https://law.duke.edu/fac/cox",
    imagePosition: "28% center",
    summary:
      "Cox writes across securities regulation, market reform, corporate governance, accounting, and securities litigation, with particular influence through casebooks, treatises, and congressional testimony.",
    majorWorks: ["Securities Regulation: Cases and Materials", "Financial Information, Accounting and the Law", "Cox and Hazen on Corporations"],
    relevance:
      "Cox strengthens the archive's coverage of public offerings, securities class actions, insider trading, market reform, and the institutional relation between securities doctrine and market practice."
  },
  {
    name: "Donald C. Langevoort",
    lifespan: "Contemporary",
    role: "Securities-law scholar of insider trading, disclosure, and behavioral regulation",
    fields: ["securities law", "insider trading", "behavioral economics"],
    imageUrl: "https://www.law.georgetown.edu/wp-content/uploads/2019/09/221103-09-Donald-Langevoort-21-scaled.jpg",
    imageAlt: "Portrait of Donald C. Langevoort",
    imageSource: "Georgetown Law",
    imageSourceHref: "https://www.law.georgetown.edu/faculty/donald-langevoort/",
    summary:
      "Langevoort connects securities doctrine to behavioral economics, market institutions, disclosure theory, insider-trading regulation, and the practical operation of SEC enforcement.",
    majorWorks: [
      "Insider Trading: Regulation, Enforcement and Prevention",
      "Securities Regulation: Cases and Materials",
      "The SEC, Retail Investors, and the Institutionalization of the Securities Markets"
    ],
    relevance:
      "Langevoort is especially useful for readers studying investor behavior, scienter, insider trading, disclosure design, professional gatekeepers, and the limits of purely rational-market assumptions."
  },
  {
    name: "Jill E. Fisch",
    lifespan: "Contemporary",
    role: "Securities-law and corporate-law scholar of regulation, litigation, and capital-market institutions",
    fields: ["securities law", "securities litigation", "capital markets"],
    imageUrl: "https://www.law.upenn.edu/live/image/gid/35/width/518/height/576/crop/1/src_region/761,0,2892,2134/711_jill_fisch.rev.1697476578.jpg",
    imageAlt: "Portrait of Jill E. Fisch",
    imageSource: "University of Pennsylvania Carey Law School",
    imageSourceHref: "https://www.law.upenn.edu/live/profiles/2959-jill-fisch",
    summary:
      "Fisch studies securities regulation, securities litigation, corporate governance, intermediaries, investor protection, and the changing role of capital-market institutions.",
    majorWorks: [
      "Top Cop or Regulatory Flop? The SEC at 75",
      "The Scope of Private Securities Litigation",
      "How to Fix Wall Street (with Stephen J. Choi)"
    ],
    relevance:
      "Fisch helps connect securities law to private enforcement, intermediary regulation, SEC institutional capacity, investor behavior, and the practical limits of capital-market discipline."
  },
  {
    name: "Stephen J. Choi",
    lifespan: "Contemporary",
    role: "Law-and-economics scholar of securities regulation, empirical legal studies, and capital markets",
    fields: ["securities regulation", "law and finance", "empirical legal scholarship"],
    imageUrl: "https://its.law.nyu.edu/facultyprofiles/photo_horizontal/index.cfm?personid=23843",
    imageAlt: "Portrait of Stephen J. Choi",
    imageSource: "NYU School of Law",
    imageSourceHref: "https://its.law.nyu.edu/facultyprofiles/index.cfm?fuseaction=profile.overview&personid=23843",
    imagePosition: "31% center",
    summary:
      "Choi applies theoretical and empirical analysis to corporations, securities markets, regulatory choice, enforcement, investor behavior, and securities-market intermediaries.",
    majorWorks: ["Securities Regulation: Cases and Analysis", "Behavioral Economics and the SEC", "Promoting Issuer Choice in Securities Regulation"],
    relevance:
      "Choi expands the site's securities-law materials toward empirical enforcement data, issuer choice, behavioral regulation, and the economics of disclosure and market intermediaries."
  },
  {
    name: "Zohar Goshen",
    lifespan: "Contemporary",
    role: "Corporate and securities-law scholar of information traders and market institutions",
    fields: ["securities regulation", "corporate finance", "information traders"],
    imageUrl: "https://www.law.columbia.edu/sites/default/files/2024-06/zohar-goshen-2024-portrait.jpg",
    imageAlt: "Portrait of Zohar Goshen",
    imageSource: "Columbia Law School",
    imageSourceHref: "https://www.law.columbia.edu/fac/Zohar_Goshen",
    summary:
      "Goshen writes on corporate law, securities regulation, corporate governance, corporate finance, and the role of information traders in capital markets.",
    majorWorks: ["The Essential Role of Securities Regulation", "Principal Costs: A New Theory for Corporate Law and Governance", "Corporate Control and Idiosyncratic Vision"],
    relevance:
      "Goshen gives the archive a securities-law theory centered on professional information production, disclosure duties, antifraud rules, manipulation restrictions, and insider-trading limits."
  },
  {
    name: "Christian Leuz",
    lifespan: "Contemporary",
    role: "Accounting and finance scholar of disclosure, transparency, and regulation",
    fields: ["disclosure regulation", "financial reporting", "capital markets"],
    imageUrl: "https://www.chicagobooth.edu/-/media/project/chicago-booth/faculty-and-insights/faculty/christian-leuz/chicago-booth-christian-leuz.jpg?h=3920&iar=0&w=2913&hash=5F680DC71623E4B4F8A934DDAEB784A5",
    imageAlt: "Portrait of Christian Leuz",
    imageSource: "University of Chicago Booth School of Business",
    imageSourceHref: "https://faculty.chicagobooth.edu/christian-leuz",
    summary:
      "Leuz studies disclosure, transparency, financial reporting, regulation, accounting standards, international accounting, corporate governance, and capital markets.",
    majorWorks: [
      "The Economics of Disclosure and Financial Reporting Regulation",
      "Mandatory CSR and Sustainability Reporting",
      "Mandatory Disclosure Would Reveal Corporate Carbon Damages"
    ],
    relevance:
      "Leuz adds empirical disclosure and accounting-regulation evidence to the archive, helping securities-law readers evaluate disclosure mandates through market outcomes, real effects, and institutional variation."
  },
  {
    name: "Niamh Moloney",
    lifespan: "Contemporary",
    role: "Financial-markets-law scholar of EU securities regulation and financial governance",
    fields: ["securities regulation", "financial regulation", "EU financial markets regulation"],
    imageUrl: "https://www.lse.ac.uk/all-images/profile/niamh-sq-2023-cropped-200x200-1.xfe07b292.jpg?w=200&h=200&q=90&f=webp",
    imageAlt: "Portrait of Niamh Moloney",
    imageSource: "London School of Economics and Political Science",
    imageSourceHref: "https://www.lse.ac.uk/law/people/academic-staff/niamh-moloney",
    summary:
      "Moloney's scholarship focuses on EU financial markets regulation, securities regulation, investor protection, and the institutional design of EU financial supervision.",
    majorWorks: [
      "EU Securities and Financial Markets Regulation (4th ed., 2023)",
      "The Age of ESMA: Governing EU Financial Markets (2018)",
      "How to Protect Investors: Lessons from the EC and the UK (2010)"
    ],
    relevance:
      "Moloney gives the archive a major EU financial-markets perspective, especially for comparing disclosure, investor protection, market conduct, ESMA governance, and post-crisis regulatory architecture across jurisdictions."
  },
  {
    name: "Eilís Ferran",
    lifespan: "Contemporary",
    role: "Company, securities, and financial-regulation scholar",
    fields: ["corporate finance law", "company law", "financial regulation"],
    imageUrl: "https://www.law.cam.ac.uk/sites/default/files/styles/profile_image/public/images/all-domains/uploads/pictures/profiles/eilis_2024.jpg?itok=mbw5vFD8",
    imageAlt: "Portrait of Eilís Ferran",
    imageSource: "University of Cambridge Faculty of Law",
    imageSourceHref: "https://www.law.cam.ac.uk/people/academic/ev-ferran/28",
    summary:
      "Ferran writes on UK, EU, and international financial regulation, company law, securities law, and corporate finance law, with a sustained focus on regulatory architecture after financial-market change.",
    majorWorks: [
      "Principles of Corporate Finance Law (3rd ed., with Elizabeth Howell and Felix Steffek, 2023)",
      "The Oxford Handbook of Financial Regulation (co-edited with Niamh Moloney and Jennifer Payne, 2015)",
      "The Regulatory Aftermath of the Global Financial Crisis (with Niamh Moloney, Jennifer G. Hill, and John C. Coffee Jr., 2012)",
      "Building an EU Securities Market (2004)"
    ],
    relevance:
      "Ferran strengthens the archive's UK and European perspective on corporate finance law, securities-market integration, financial supervision, and post-crisis regulatory design."
  },
  {
    name: "Eric L. Talley",
    lifespan: "Contemporary",
    role: "Corporate-law, governance, and empirical law-and-economics scholar",
    fields: ["corporate law", "corporate governance", "mergers and acquisitions", "empirical legal studies"],
    imageUrl: "https://www.law.columbia.edu/sites/default/files/2023-10/talley_new2023_crop.jpg",
    imageAlt: "Portrait of Eric L. Talley",
    imageSource: "Columbia Law School",
    imageSourceHref: "https://www.law.columbia.edu/faculty/eric-talley",
    summary:
      "Talley's work sits at the intersection of corporate law, governance, finance, M&A, quantitative methods, machine learning, game theory, and economic analysis of law.",
    majorWorks: [
      "Law and Corporate Governance (with Robert Bartlett, 2017)",
      "Contracting Out of the Fiduciary Duty of Loyalty: An Empirical Analysis of Corporate Opportunity Waivers (with Gabriel V. Rauterberg, 2017)",
      "The Measure of a MAC: A Machine-Learning Protocol for Analyzing Force Majeure Clauses in M&A Agreements (with D. O'Kane, 2012)",
      "Cleaning Corporate Governance (with Jens Frankenreiter, Cathy Hwang, and Yaron Nili, 2021)",
      "Introducing a New Corpus of Definitive M&A Agreements, 2000-2020 (with Peter Adelson, Matthew Jennejohn, and Julian Nyarko, 2024)"
    ],
    relevance:
      "Talley adds a contemporary Columbia corporate-law perspective that connects fiduciary duties, M&A contracting, corporate-governance datasets, valuation disputes, machine-learning methods, and empirical legal studies."
  },
  {
    name: "Reinier H. Kraakman",
    lifespan: "Contemporary",
    role: "Corporate-law scholar and comparative corporate-law theorist",
    fields: ["comparative corporate law", "agency problems", "legal strategies"],
    imageUrl: "https://hls.harvard.edu/wp-content/uploads/faculty/images/10490.jpg?1780374019",
    imageAlt: "Portrait of Reinier H. Kraakman",
    imageSource: "Harvard Law School",
    imageSourceHref: "https://hls.harvard.edu/faculty/reinier-h-kraakman/",
    summary:
      "Kraakman is central to the functional and comparative analysis of corporate law. His work organizes corporate law around agency problems, legal strategies, and the common structural features of business corporations.",
    majorWorks: ["The Anatomy of Corporate Law (with coauthors)", "The End of History for Corporate Law (with Henry Hansmann)", "Agency Problems and Legal Strategies"],
    relevance:
      "Kraakman's framework is useful for readers learning how corporate-law doctrines can be compared by function rather than only by jurisdictional label."
  },
  {
    name: "Holger Spamann",
    lifespan: "Contemporary",
    role: "Corporate-law and empirical legal studies scholar",
    fields: ["empirical legal studies", "comparative corporate law", "law and finance"],
    imageUrl: "https://hls.harvard.edu/wp-content/uploads/faculty/images/10831.jpg?1780374191",
    imageAlt: "Portrait of Holger Spamann",
    imageSource: "Harvard Law School",
    imageSourceHref: "https://hls.harvard.edu/faculty/holger-spamann/",
    summary:
      "Spamann's work connects corporate law and law-and-finance scholarship to careful empirical measurement. His research is especially associated with reassessing investor-protection indices and comparative-law data.",
    majorWorks: ["The Antidirector Rights Index Revisited (2010)", "Empirical Comparative Law", "Corporate Law and Empirical Measurement"],
    relevance:
      "Spamann helps readers see why legal indices, coding choices, and measurement validity matter when using law-and-finance evidence."
  },
  {
    name: "John C. Coffee Jr.",
    lifespan: "Contemporary",
    role: "Securities-law and corporate-governance scholar",
    fields: ["securities regulation", "gatekeepers", "mandatory disclosure"],
    imageUrl: "https://www.law.columbia.edu/sites/default/files/2020-08/10.28.19_coffee_photo_1.jpg",
    imageAlt: "Portrait of John C. Coffee Jr.",
    imageSource: "Columbia Law School",
    imageSourceHref: "https://www.law.columbia.edu/faculty/john-c-coffee-jr",
    summary:
      "Coffee's scholarship is foundational for the economic analysis of securities disclosure, gatekeeper liability, market failure, class actions, and corporate governance after financial scandals.",
    majorWorks: ["Market Failure and the Economic Case for a Mandatory Disclosure System (1984)", "Gatekeepers (2006)", "What Caused Enron? (2002)"],
    relevance:
      "Coffee is essential for understanding why securities law relies on disclosure, intermediaries, professional verification, and enforcement institutions."
  },
  {
    name: "John Armour",
    lifespan: "Contemporary",
    role: "Corporate-law and financial-regulation scholar",
    fields: ["corporate law", "financial regulation", "law and finance"],
    imageUrl: "https://www.law.ox.ac.uk/sites/default/files/styles/person_portrait/public/migrated/john_armour.jpg?itok=PPFtvlm-",
    imageAlt: "Portrait of John Armour",
    imageSource: "University of Oxford Faculty of Law",
    imageSourceHref: "https://www.law.ox.ac.uk/people/john-armour",
    summary:
      "Armour's work links corporate law, financial law, and institutional design. He has contributed to comparative corporate law, creditor protection, financial regulation, and the legal foundations of financial markets.",
    majorWorks: ["The Anatomy of Corporate Law (with coauthors)", "Principles of Financial Regulation (with coauthors)", "Law and Financial Development"],
    relevance:
      "Armour bridges the site's corporate-law and financial-law strands by showing how firm governance, creditor rights, and market regulation interact."
  },
  {
    name: "Luca Enriques",
    lifespan: "Contemporary",
    role: "Corporate-law and securities-regulation scholar",
    fields: ["European company law", "securities regulation", "takeovers"],
    imageUrl: "https://www.law.ox.ac.uk/sites/default/files/styles/person_portrait/public/migrated/dsc_0490.jpg?itok=9VhE8Nro",
    imageAlt: "Portrait of Luca Enriques",
    imageSource: "University of Oxford Faculty of Law",
    imageSourceHref: "https://www.law.ox.ac.uk/people/luca-enriques",
    summary:
      "Enriques studies company law, securities regulation, takeovers, and European corporate-law harmonization. His work is especially useful for comparative analysis of corporate governance and market regulation.",
    majorWorks: ["The Anatomy of Corporate Law (with coauthors)", "The Case for an Unbiased Takeover Law", "Company Law Harmonization Reconsidered"],
    relevance:
      "Enriques helps readers connect corporate-law doctrine to securities regulation, takeover policy, and comparative European institutional design."
  },
  {
    name: "Joseph A. Grundfest",
    lifespan: "Contemporary",
    role: "Securities-law scholar and former SEC commissioner",
    fields: ["securities litigation", "capital markets", "corporate governance"],
    imageUrl: "https://law.stanford.edu/wp-content/uploads/2015/06/joseph-a-grundfest-3-400x400.jpeg",
    imageAlt: "Portrait of Joseph A. Grundfest",
    imageSource: "Stanford Law School",
    imageSourceHref: "https://law.stanford.edu/directory/joseph-a-grundfest/",
    summary:
      "Grundfest's work combines securities regulation, litigation design, market institutions, and public-company governance. His experience as a former SEC commissioner gives his scholarship a strong institutional perspective.",
    majorWorks: ["Disimplying Private Rights of Action Under the Federal Securities Laws", "The Future of United States Securities Regulation", "Securities Litigation and Market Institutions"],
    relevance:
      "Grundfest is useful for understanding the institutional design of securities litigation, enforcement, and market regulation in the United States."
  },
  {
    name: "Luigi Zingales",
    lifespan: "Contemporary",
    role: "Economist of corporate finance, governance, and institutions",
    fields: ["corporate finance", "private benefits of control", "political economy"],
    imageUrl: "https://www.chicagobooth.edu/-/media/project/chicago-booth/faculty-and-insights/faculty/luigi-zingales/chicago-booth-luigi-zingales.jpg?w=1920&h=800&hash=2A2176ED0CAAA670850D1583326CAD66",
    imageAlt: "Portrait of Luigi Zingales",
    imageSource: "University of Chicago Booth School of Business",
    imageSourceHref: "https://www.chicagobooth.edu/faculty/directory/z/luigi-zingales",
    summary:
      "Zingales studies corporate finance, ownership, political economy, investor protection, and the private benefits of control. His work is influential in linking governance institutions to financial development and control rights.",
    majorWorks: ["Private Benefits of Control (with Alexander Dyck)", "The Corporate Governance Role of the Media", "Saving Capitalism from the Capitalists"],
    relevance:
      "Zingales helps connect corporate governance to finance, ownership structure, media oversight, and the institutional conditions for competitive markets."
  },
  {
    name: "Henry B. Hansmann",
    lifespan: "Contemporary",
    role: "Corporate-law and organizational-law scholar",
    fields: ["organizational law", "corporate law", "ownership design"],
    imageUrl: "https://law.yale.edu/sites/default/files/styles/content_285x393_/public/images/faculty/hansmann.henry-shapiro-2018c-cropped.jpg?h=f803f42f&itok=h1zPvBPr",
    imageAlt: "Portrait of Henry B. Hansmann",
    imageSource: "Yale Law School",
    imageSourceHref: "https://law.yale.edu/henry-b-hansmann",
    summary:
      "Hansmann's work examines organizational ownership, asset partitioning, nonprofit enterprise, and the functional structure of corporate law.",
    majorWorks: ["The Ownership of Enterprise (1996)", "The Essential Role of Organizational Law (2000)", "The Anatomy of Corporate Law (with coauthors)"],
    relevance:
      "Hansmann is central for understanding legal personality, asset partitioning, ownership form, and the functional analysis of corporate law."
  },
  {
    name: "Frank H. Easterbrook",
    lifespan: "Contemporary",
    role: "Judge and law-and-economics scholar",
    fields: ["corporate law", "securities regulation", "economic analysis of law"],
    imageUrl: "https://www.law.uchicago.edu/sites/default/files/styles/large_vertical_headshot/public/image/Easterbrook%20-%20color.jpg?itok=bkzUFPOE",
    imageAlt: "Portrait of Frank H. Easterbrook",
    imageSource: "University of Chicago Law School",
    imageSourceHref: "https://www.law.uchicago.edu/faculty/easterbrook",
    summary:
      "Easterbrook's scholarship applies economic analysis to corporate law, securities regulation, antitrust, and judicial decision-making.",
    majorWorks: ["The Economic Structure of Corporate Law (with Daniel R. Fischel)", "Mandatory Disclosure and the Protection of Investors", "The Limits of Antitrust"],
    relevance:
      "Easterbrook is important for the contractual and market-oriented interpretation of corporate law and for debates over mandatory securities disclosure."
  },
  {
    name: "Daniel R. Fischel",
    lifespan: "Contemporary",
    role: "Corporate-law and financial-markets scholar",
    fields: ["corporate law", "corporate finance", "financial markets"],
    imageUrl: "https://www.law.uchicago.edu/sites/default/files/styles/large_vertical_headshot/public/image/fischel.jpg?itok=KtvFMlps",
    imageAlt: "Portrait of Daniel R. Fischel",
    imageSource: "University of Chicago Law School",
    imageSourceHref: "https://www.law.uchicago.edu/faculty/fischel",
    summary:
      "Fischel's work focuses on corporations, corporate finance, and the regulation of financial markets, including influential joint work with Frank Easterbrook.",
    majorWorks: ["The Economic Structure of Corporate Law (with Frank H. Easterbrook)", "The Regulation of Insider Trading", "Corporate Control Transactions"],
    relevance:
      "Fischel helps frame corporate and securities law as institutional responses to contracting, information, control, and market-pricing problems."
  },
  {
    name: "Jeffrey N. Gordon",
    lifespan: "Contemporary",
    role: "Corporate-governance and financial-regulation scholar",
    fields: ["corporate governance", "financial regulation", "comparative corporate law"],
    imageUrl: "https://www.law.columbia.edu/sites/default/files/2020-02/jeffrey_gordon.jpg",
    imageAlt: "Portrait of Jeffrey N. Gordon",
    imageSource: "Columbia Law School",
    imageSourceHref: "https://www.law.columbia.edu/faculty/jeffrey-n-gordon",
    summary:
      "Gordon writes on corporate governance, mergers and acquisitions, comparative corporate governance, and the regulation of financial institutions.",
    majorWorks: ["The Agency Costs of Agency Capitalism", "Principles of Financial Regulation (with coauthors)", "The Oxford Handbook of Corporate Law and Governance (co-editor)"],
    relevance:
      "Gordon bridges corporate governance and financial regulation, especially through work on agency capitalism, stewardship, systemic harms, and regulatory architecture."
  },
  {
    name: "Henry G. Manne",
    lifespan: "1928-2015",
    role: "Law-and-economics and corporate-control scholar",
    fields: ["law and economics", "corporate governance", "mergers and acquisitions"],
    imageUrl: "https://laweconcenter.org/wp-content/uploads/2022/10/henry-manne.png",
    imageAlt: "Portrait of Henry G. Manne",
    imageSource: "International Center for Law & Economics",
    imageSourceHref: "https://laweconcenter.org/about/",
    summary:
      "Manne made the market for corporate control a central concept in the economic analysis of corporate law and connected takeovers, insider trading, and managerial discipline to capital-market mechanisms.",
    majorWorks: ["Mergers and the Market for Corporate Control (1965)", "Insider Trading and the Stock Market (1966)", "A Free Market Model of a Large Corporation System (2003)"],
    relevance:
      "Manne anchors the archive's M&A coverage because the market for corporate control provides the starting point for later work on takeovers, defensive tactics, shareholder choice, and managerial discipline."
  },
  {
    name: "Ronald J. Gilson",
    lifespan: "Contemporary",
    role: "Corporate-law, securities-law, and law-and-economics scholar",
    fields: ["corporate governance", "securities regulation", "transactional law"],
    imageUrl: "https://www.law.columbia.edu/sites/default/files/2020-02/ronald_gilson.jpg",
    imageAlt: "Portrait of Ronald J. Gilson",
    imageSource: "Columbia Law School",
    imageSourceHref: "https://www.law.columbia.edu/faculty/ronald-j-gilson",
    summary:
      "Gilson studies the law and economics of corporations, securities, corporate finance, complex contracting, acquisitions, and capital markets.",
    majorWorks: ["The Mechanisms of Market Efficiency (with Reinier Kraakman)", "Value Creation by Business Lawyers", "The Agency Costs of Agency Capitalism (with Jeffrey N. Gordon)"],
    relevance:
      "Gilson is central for understanding market efficiency, transactional law, venture capital contracting, corporate governance, and the economic structure of deals."
  },
  {
    name: "John C. Coates IV",
    lifespan: "Contemporary",
    role: "Corporate-law, securities-law, and M&A scholar",
    fields: ["corporate law", "securities regulation", "mergers and acquisitions"],
    imageUrl: "https://hls.harvard.edu/wp-content/uploads/faculty/images/10170.jpg?1780719776",
    imageAlt: "Portrait of John C. Coates IV",
    imageSource: "Harvard Law School",
    imageSourceHref: "https://hls.harvard.edu/faculty/john-c-coates/",
    summary:
      "Coates writes on corporate law, securities regulation, M&A, financial institutions, and the legal profession, with particular attention to takeover defenses, transaction structure, and regulatory design.",
    majorWorks: ["Explaining Variation in Takeover Defenses", "The Powerful Antitakeover Force of Staggered Boards", "Mergers, Acquisitions, and Restructuring"],
    relevance:
      "Coates strengthens the archive's M&A layer by connecting takeover doctrine, empirical corporate-law evidence, transactional practice, and securities-regulatory institutions."
  },
  {
    name: "Marcel Kahan",
    lifespan: "Contemporary",
    role: "Corporate-law and corporate-finance scholar",
    fields: ["corporate governance", "shareholder voting", "mergers and acquisitions"],
    imageUrl: "https://its.law.nyu.edu/facultyprofiles/photo_horizontal/index.cfm?personid=20029",
    imageAlt: "Portrait of Marcel Kahan",
    imageSource: "NYU School of Law",
    imageSourceHref: "https://its.law.nyu.edu/facultyprofiles/index.cfm?fuseaction=profile.overview&personid=20029",
    summary:
      "Kahan writes on shareholder voting, hedge funds, corporate governance, mergers and acquisitions, antitakeover law, and bondholder rights.",
    majorWorks: ["Hedge Funds in Corporate Governance and Corporate Control (with Edward B. Rock)", "The Law and Finance of Antitakeover Statutes", "The State of State Competition for Incorporations"],
    relevance:
      "Kahan expands the archive's coverage of shareholder voting, hedge-fund activism, antitakeover rules, bondholder governance, and Delaware competition."
  },
  {
    name: "Guhan Subramanian",
    lifespan: "Contemporary",
    role: "Corporate-law, dealmaking, and negotiation scholar",
    fields: ["corporate law", "mergers and acquisitions", "negotiation"],
    imageUrl: "https://hls.harvard.edu/wp-content/uploads/faculty/images/10868.jpg?1780719752",
    imageAlt: "Portrait of Guhan Subramanian",
    imageSource: "Harvard Law School",
    imageSourceHref: "https://hls.harvard.edu/faculty/guhan-subramanian/",
    summary:
      "Subramanian studies corporate law, governance, negotiations, dealmaking, freezeouts, and deal protection, while also teaching M&A and negotiation across Harvard Law School and Harvard Business School.",
    majorWorks: ["Fixing Freezeouts", "The Powerful Antitakeover Force of Staggered Boards", "The New Look of Deal Protection"],
    relevance:
      "Subramanian adds a transactional and doctrinal bridge between academic M&A theory, Delaware deal litigation, freezeout practice, and negotiation design."
  },
  {
    name: "Bernard S. Black",
    lifespan: "Contemporary",
    role: "Empirical legal studies and law-and-finance scholar",
    fields: ["law and finance", "empirical legal studies", "international corporate governance"],
    imageUrl: "https://www6.law.northwestern.edu/webfiles/faculty/assets/graphics/graphic-BlackBernard_v2015-06-25;171846.jpg",
    imageAlt: "Portrait of Bernard S. Black",
    imageSource: "Northwestern Pritzker School of Law",
    imageSourceHref: "https://www.law.northwestern.edu/faculty/profiles/bernardblack/",
    summary:
      "Black's research includes law and finance, international corporate governance, corporate and securities law, and empirical methods for causal inference.",
    majorWorks: ["The Legal and Institutional Preconditions for Strong Securities Markets", "The Law and Finance of Corporate Acquisitions (with Ronald J. Gilson)", "Is Delaware Losing Its Cases?"],
    relevance:
      "Black is important for linking comparative corporate governance, securities-market development, and empirical legal research methods."
  },
  {
    name: "Edward B. Rock",
    lifespan: "Contemporary",
    role: "Corporate-law and corporate-governance scholar",
    fields: ["corporate law", "corporate governance", "mergers and acquisitions"],
    imageUrl: "https://its.law.nyu.edu/facultyprofiles/photo_horizontal/index.cfm?personid=35610",
    imageAlt: "Portrait of Edward B. Rock",
    imageSource: "NYU School of Law",
    imageSourceHref: "https://its.law.nyu.edu/facultyprofiles/index.cfm?fuseaction=profile.overview&personid=35610",
    summary:
      "Rock writes on corporate law and corporate governance, including poison pills, hedge funds, corporate voting, proxy access, corporate federalism, and mergers and acquisitions.",
    majorWorks: ["Hedge Funds in Corporate Governance and Corporate Control (with Marcel Kahan)", "The New Political Economy of Delaware Corporate Lawmaking", "Corporate Governance Welfarism"],
    relevance:
      "Rock strengthens the archive's coverage of Delaware corporate law, activism, voting, M&A governance, and the institutional evolution of corporate law."
  },
  {
    name: "Oliver Hart",
    lifespan: "Contemporary",
    role: "Economist of contract theory, firm boundaries, and corporate governance",
    fields: ["contract theory", "incomplete contracts", "corporate governance"],
    imageUrl: "https://hls.harvard.edu/wp-content/uploads/faculty/images/10368.jpg?1778819216=",
    imageAlt: "Portrait of Oliver Hart",
    imageSource: "Harvard Law School",
    imageSourceHref: "https://hls.harvard.edu/faculty/oliver-hart/",
    summary:
      "Hart's work on incomplete contracts, ownership, and control rights is foundational for economic analysis of firms, corporate boundaries, and governance.",
    majorWorks: ["Firms, Contracts, and Financial Structure (1995)", "The Costs and Benefits of Ownership (with Sanford Grossman)", "Property Rights and the Nature of the Firm (with John Moore)"],
    relevance:
      "Hart gives corporate-law readers a precise way to connect ownership, residual control rights, investment incentives, and the allocation of authority inside firms."
  },
  {
    name: "Bengt Holmstrom",
    lifespan: "Contemporary",
    role: "Economist of incentives, moral hazard, and contract theory",
    fields: ["contract theory", "moral hazard", "incentive design"],
    imageUrl: "https://mitsloan.mit.edu/sites/default/files/styles/profile_detail_headshot/public/profile-images/2024/06/12/profile-image-41498.png.webp?h=7f412c8f&itok=RqZlMqRR",
    imageAlt: "Portrait of Bengt Holmstrom",
    imageSource: "MIT Sloan School of Management",
    imageSourceHref: "https://mitsloan.mit.edu/faculty/directory/bengt-holmstrom",
    summary:
      "Holmstrom's work on moral hazard, informativeness, incentives, and relational contracting shaped modern agency theory and contract theory.",
    majorWorks: ["Moral Hazard and Observability (1979)", "Managerial Incentive Problems: A Dynamic Perspective (1999)", "Inside and Outside Liquidity (with Jean Tirole)"],
    relevance:
      "Holmstrom strengthens the archive's treatment of agency costs by explaining how information, monitoring, and contract design shape managerial and financial incentives."
  },
  {
    name: "Markus K. Brunnermeier",
    lifespan: "Contemporary",
    role: "Financial economist of liquidity, crises, and systemic risk",
    fields: ["financial crises", "liquidity", "systemic risk"],
    imageUrl: "https://bcf.princeton.edu/wp-content/uploads/2020/11/Markus_Brunnermeier_112020-1055x1200.jpg",
    imageAlt: "Portrait of Markus Brunnermeier",
    imageSource: "Princeton Bendheim Center for Finance",
    imageSourceHref: "https://bcf.princeton.edu/about/center-director/",
    summary:
      "Brunnermeier's research on liquidity spirals, bubbles, financial crises, resilience, and macro-financial linkages is central to post-crisis financial regulation.",
    majorWorks: ["Deciphering the Liquidity and Credit Crunch 2007-2008 (2009)", "Market Liquidity and Funding Liquidity (with Lasse Heje Pedersen)", "The Resilient Society (2021)"],
    relevance:
      "Brunnermeier connects financial-law questions to liquidity, leverage, fire sales, crisis amplification, and the macroprudential logic of regulation."
  },
  {
    name: "Ben S. Bernanke",
    lifespan: "1953-",
    role: "Economist of banking, financial crises, and monetary policy",
    fields: ["banking", "financial crises", "financial regulation"],
    imageUrl: "https://www.brookings.edu/wp-content/uploads/2016/06/bernankeb.jpg?quality=75&w=400",
    imageAlt: "Portrait of Ben Bernanke",
    imageSource: "Brookings Institution",
    imageSourceHref: "https://www.brookings.edu/experts/ben-s-bernanke/",
    summary:
      "Bernanke's work on banks, credit channels, financial crises, and central banking is foundational for understanding why financial regulation treats intermediary distress as macroeconomically significant.",
    majorWorks: ["Nonmonetary Effects of the Financial Crisis in the Propagation of the Great Depression (1983)", "The Macroeconomics of the Great Depression (1995)", "The Courage to Act (2015)"],
    relevance:
      "Bernanke helps connect financial law to bank intermediation, crisis propagation, lender-of-last-resort policy, and the institutional role of central banks."
  },
  {
    name: "George J. Stigler",
    lifespan: "1911-1991",
    role: "Economist of regulation, industrial organization, and information",
    fields: ["economic regulation", "regulatory capture", "industrial organization"],
    imageUrl: "/scholar-portraits/george-stigler.jpg",
    imageAlt: "Portrait of George J. Stigler",
    imageSource: "University of Chicago Booth School of Business",
    imageSourceHref: "https://www.chicagobooth.edu/faculty/nobel-laureates/george-stigler",
    summary:
      "Stigler developed an economic account of regulation that treats political organization, industry incentives, and information costs as central to regulatory outcomes.",
    majorWorks: ["The Economics of Information (1961)", "The Theory of Economic Regulation (1971)", "The Citizen and the State (1975)"],
    relevance:
      "Stigler gives legal researchers a starting point for analyzing capture, interest-group organization, entry restrictions, and the difference between a regulation's stated purpose and its institutional effects."
  },
  {
    name: "Elinor Ostrom",
    lifespan: "1933-2012",
    role: "Political economist of commons governance and institutional diversity",
    fields: ["commons governance", "collective action", "institutional economics"],
    imageUrl: "/scholar-portraits/elinor-ostrom.jpg",
    imageAlt: "Portrait of Elinor Ostrom",
    imageSource: "Nobel Prize",
    imageSourceHref: "https://www.nobelprize.org/prizes/economic-sciences/2009/ostrom/facts/",
    summary:
      "Ostrom used comparative field research to show how communities can create durable rules for governing shared resources without relying exclusively on privatization or centralized command.",
    majorWorks: ["Governing the Commons (1990)", "Understanding Institutional Diversity (2005)", "Beyond Markets and States (2010)"],
    relevance:
      "Ostrom broadens law and economics beyond market-state binaries by directing attention to monitoring, graduated sanctions, rule-making participation, nested governance, and institutional fit."
  },
  {
    name: "Robert C. Ellickson",
    lifespan: "Contemporary",
    role: "Property and law-and-economics scholar of social norms and informal order",
    fields: ["property law", "social norms", "informal governance"],
    imageUrl: "/scholar-portraits/robert-ellickson.jpg",
    imageAlt: "Portrait of Robert C. Ellickson",
    imageSource: "Yale Law School",
    imageSourceHref: "https://law.yale.edu/robert-c-ellickson",
    summary:
      "Ellickson studies how property rules, social norms, and informal institutions organize land use, neighborhood relations, households, and local collective action.",
    majorWorks: ["Order Without Law (1991)", "Property in Land (1993)", "The Household (2008)"],
    relevance:
      "Ellickson helps researchers test when parties order conduct through norms and repeat relationships rather than formal adjudication, and when informal governance becomes exclusionary or difficult to scale."
  },
  {
    name: "Lisa Bernstein",
    lifespan: "Contemporary",
    role: "Commercial-law scholar of private ordering, trade usage, and relational contracts",
    fields: ["commercial law", "private ordering", "relational contracts"],
    imageUrl: "/scholar-portraits/lisa-bernstein.jpg",
    imageAlt: "Portrait of Lisa Bernstein",
    imageSource: "University of Chicago Law School",
    imageSourceHref: "https://www.law.uchicago.edu/faculty/bernstein",
    summary:
      "Bernstein examines how merchant communities design contractual, reputational, and dispute-resolution institutions that may supplement or displace public commercial law.",
    majorWorks: ["Opting Out of the Legal System (1992)", "Merchant Law in a Merchant Court (1996)", "Private Commercial Law in the Cotton Industry (2001)"],
    relevance:
      "Bernstein supplies evidence for studying private ordering as an institutional choice, including the limits of trade usage, the role of reputation, and the relationship between formal contracts and business practice."
  },
  {
    name: "Louis Kaplow",
    lifespan: "Contemporary",
    role: "Law-and-economics scholar of welfare, taxation, and competition policy",
    fields: ["welfare economics", "law and economics", "competition policy"],
    imageUrl: "/scholar-portraits/louis-kaplow.jpg",
    imageAlt: "Portrait of Louis Kaplow",
    imageSource: "Harvard Law School",
    imageSourceHref: "https://hls.harvard.edu/faculty/louis-kaplow/",
    summary:
      "Kaplow works across welfare economics, legal rules, taxation, and antitrust, with particular attention to how policy analysis should evaluate effects on individual well-being.",
    majorWorks: ["Fairness versus Welfare (with Steven Shavell)", "The Theory of Taxation and Public Economics (2008)", "Competition Policy and Price Fixing (2013)"],
    relevance:
      "Kaplow anchors the archive's normative-method strand by making explicit the welfare criteria used in legal-policy analysis and the relationship between efficiency, distribution, and independent fairness principles."
  },
  {
    name: "A. Douglas Melamed",
    lifespan: "Contemporary",
    role: "Antitrust and law-and-economics scholar of remedies and entitlement protection",
    fields: ["antitrust", "remedies", "law and economics"],
    imageUrl: "/scholar-portraits/douglas-melamed.jpg",
    imageAlt: "Portrait of A. Douglas Melamed",
    imageSource: "Stanford Law School",
    imageSourceHref: "https://conferences.law.stanford.edu/directorscollege2022/speakers/douglas-doug-melamed/",
    summary:
      "Melamed's scholarship connects antitrust, remedies, and institutional design, including the canonical classification of property rules, liability rules, and inalienability rules.",
    majorWorks: ["Property Rules, Liability Rules, and Inalienability (with Guido Calabresi, 1972)", "On the Relevance of Political Concerns in the Modernization of Antitrust (1997)", "Afterword: The Cathedral at Thirty-Five (2007)"],
    relevance:
      "Melamed helps readers compare injunctions, damages, public valuation, and transfer restrictions as distinct ways of protecting entitlements under different information and transaction-cost conditions."
  },
  {
    name: "Michael C. Jensen",
    lifespan: "1939-2024",
    role: "Financial economist of agency theory, corporate control, and organizational design",
    fields: ["agency problems", "corporate governance", "corporate control"],
    imageUrl: "/scholar-portraits/michael-jensen.jpg",
    imageAlt: "Portrait of Michael C. Jensen",
    imageSource: "Harvard Business School",
    imageSourceHref: "https://www.hbs.edu/news/releases/afaaward",
    summary:
      "Jensen's work made agency costs, free cash flow, incentive design, and markets for corporate control central to modern corporate governance and finance.",
    majorWorks: ["Theory of the Firm (with William Meckling, 1976)", "Agency Costs of Free Cash Flow (1986)", "The Eclipse of the Public Corporation (1989)"],
    relevance:
      "Jensen provides a core analytical bridge between ownership structure, managerial incentives, monitoring, leverage, takeovers, and organizational form."
  },
  {
    name: "Anat R. Admati",
    lifespan: "Contemporary",
    role: "Financial economist of market information, bank capital, and corporate accountability",
    fields: ["financial regulation", "bank capital", "corporate accountability"],
    imageUrl: "/scholar-portraits/anat-admati.webp",
    imageAlt: "Portrait of Anat R. Admati",
    imageSource: "Stanford Graduate School of Business",
    imageSourceHref: "https://www.gsb.stanford.edu/faculty-research/faculty/anat-r-admati",
    summary:
      "Admati studies information in financial markets, corporate governance, bank leverage, and the institutional rules needed to make corporations and financial systems accountable.",
    majorWorks: ["A Theory of Intraday Patterns (with Paul Pfleiderer, 1988)", "The Bankers' New Clothes (with Martin Hellwig, 2013)", "The Leverage Ratchet Effect (with coauthors, 2018)"],
    relevance:
      "Admati connects corporate-finance theory to prudential law by clarifying why private incentives can favor excessive leverage and why claims about the social cost of bank equity require institutional scrutiny."
  },
  {
    name: "Douglas W. Diamond",
    lifespan: "1953-",
    role: "Financial economist of banks, liquidity creation, and delegated monitoring",
    fields: ["banking", "liquidity", "financial intermediation"],
    imageUrl: "/scholar-portraits/douglas-diamond.jpg",
    imageAlt: "Portrait of Douglas W. Diamond",
    imageSource: "Nobel Prize",
    imageSourceHref: "https://www.nobelprize.org/prizes/economic-sciences/2022/diamond/facts/",
    summary:
      "Diamond's research explains why banks exist, how delegated monitoring supports credit intermediation, and why liquidity transformation can make banking systems fragile.",
    majorWorks: ["Financial Intermediation and Delegated Monitoring (1984)", "Bank Runs, Deposit Insurance, and Liquidity (with Philip Dybvig, 1983)", "Liquidity Risk, Liquidity Creation, and Financial Fragility (with Raghuram Rajan, 2001)"],
    relevance:
      "Diamond gives financial-law readers a unified account of monitoring, maturity transformation, deposit insurance, liquidity creation, and the regulatory significance of bank fragility."
  },
  {
    name: "Philip H. Dybvig",
    lifespan: "1955-",
    role: "Financial economist of bank runs, liquidity insurance, and asset pricing",
    fields: ["banking", "bank runs", "liquidity insurance"],
    imageUrl: "/scholar-portraits/philip-dybvig.jpg",
    imageAlt: "Portrait of Philip H. Dybvig",
    imageSource: "Nobel Prize",
    imageSourceHref: "https://www.nobelprize.org/prizes/economic-sciences/2022/dybvig/facts/",
    summary:
      "Dybvig's work with Douglas Diamond provides the canonical model of banks as providers of liquidity insurance that are also vulnerable to self-fulfilling runs.",
    majorWorks: ["Bank Runs, Deposit Insurance, and Liquidity (with Douglas Diamond, 1983)", "Banking Theory, Deposit Insurance, and Bank Regulation (with Douglas Diamond, 1986)", "Portfolio Efficiency with Different Information (1985)"],
    relevance:
      "Dybvig is central to the economic logic of deposit insurance, lender-of-last-resort arrangements, run prevention, and the design tradeoffs created by liquidity transformation."
  },
  {
    name: "Joseph E. Stiglitz",
    lifespan: "1943-",
    role: "Economist of asymmetric information, market failure, and public policy",
    fields: ["information asymmetry", "market failure", "public economics"],
    imageUrl: "/scholar-portraits/joseph-stiglitz.jpg",
    imageAlt: "Portrait of Joseph E. Stiglitz",
    imageSource: "Nobel Prize",
    imageSourceHref: "https://www.nobelprize.org/prizes/economic-sciences/2001/stiglitz/facts/",
    summary:
      "Stiglitz's research shows how screening, signaling, adverse selection, and other information problems can prevent markets from reaching the outcomes predicted by full-information models.",
    majorWorks: ["Equilibrium in Competitive Insurance Markets (with Michael Rothschild, 1976)", "On the Impossibility of Informationally Efficient Markets (with Sanford Grossman, 1980)", "Credit Rationing in Markets with Imperfect Information (with Andrew Weiss, 1981)"],
    relevance:
      "Stiglitz provides a general foundation for disclosure, insurance, credit, consumer protection, and regulatory analysis whenever information is unevenly distributed and market responses are endogenous."
  },
  {
    name: "Jennifer H. Arlen",
    lifespan: "Contemporary",
    role: "Law-and-economics scholar of corporate liability, compliance, and enforcement",
    fields: ["corporate liability", "corporate compliance", "public enforcement"],
    imageUrl: "/scholar-portraits/jennifer-arlen.jpg",
    imageAlt: "Portrait of Jennifer H. Arlen",
    imageSource: "NYU School of Law",
    imageSourceHref: "https://www.law.nyu.edu/centers/corporatecompliance/about/directors",
    summary:
      "Arlen studies how corporate and individual liability, internal controls, cooperation incentives, and enforcement policy can be structured to deter organizational misconduct.",
    majorWorks: ["The Potentially Perverse Effects of Corporate Criminal Liability (1994)", "Regulating Corporate Criminal Sanctions (with Cindy Alexander, 1999)", "Corporate Criminal Enforcement in the United States (2020)"],
    relevance:
      "Arlen extends deterrence analysis from individual wrongdoing to organizations, where legal rules must account for monitoring, reporting, cooperation, compliance investment, and the allocation of sanctions between firms and agents."
  },
  {
    name: "Ian Ayres",
    lifespan: "1959-",
    role: "Lawyer-economist of contracts, antidiscrimination, and empirical legal analysis",
    fields: ["contract law", "default rules", "empirical legal studies"],
    imageUrl: "/scholar-portraits/ian-ayres.jpg",
    imageAlt: "Portrait of Ian Ayres",
    imageSource: "Yale Law School",
    imageSourceHref: "https://law.yale.edu/ian-ayres",
    summary:
      "Ayres combines economic theory and quantitative evidence to study default rules, bargaining, antidiscrimination law, corporate finance, and the design of legal interventions.",
    majorWorks: ["Filling Gaps in Incomplete Contracts (with Robert Gertner, 1989)", "Fair Driving (1991)", "Pervasive Prejudice? (with Peter Siegelman, 1995)"],
    relevance:
      "Ayres gives legal researchers a rigorous account of penalty defaults and a model for combining formal theory, field evidence, and institutional design."
  },
  {
    name: "Kathryn E. Spier",
    lifespan: "Contemporary",
    role: "Economist of litigation, settlement, liability, and strategic contracting",
    fields: ["litigation economics", "settlement", "strategic contracting"],
    imageUrl: "/scholar-portraits/kathryn-spier.jpg",
    imageAlt: "Portrait of Kathryn E. Spier",
    imageSource: "Harvard Law School",
    imageSourceHref: "https://hls.harvard.edu/faculty/kathryn-e-spier/",
    imagePosition: "50% 20%",
    summary:
      "Spier uses game theory and information economics to explain pretrial bargaining, settlement timing, fee allocation, liability, and the strategic structure of legal disputes.",
    majorWorks: ["The Dynamics of Pretrial Negotiation (1992)", "Pretrial Bargaining and the Design of Fee-Shifting Rules (1994)", "The Economics of Litigation (2007)"],
    relevance:
      "Spier connects civil procedure to bargaining under incomplete information and helps researchers distinguish filed cases, settled disputes, and adjudicated outcomes."
  },
  {
    name: "Henry E. Smith",
    lifespan: "Contemporary",
    role: "Private-law theorist of property, information costs, and modularity",
    fields: ["property law", "information costs", "private law"],
    imageUrl: "/scholar-portraits/henry-smith.jpg",
    imageAlt: "Portrait of Henry E. Smith",
    imageSource: "Harvard Law School",
    imageSourceHref: "https://hls.harvard.edu/ils/international-resources/faculty/faculty-snapshot-henry-e-smith/",
    imagePosition: "50% 22%",
    summary:
      "Smith explains property and private law through information costs, exclusion and governance strategies, modularity, and the architecture of rights in rem.",
    majorWorks: ["Property and Property Rules (with Thomas W. Merrill, 2001)", "Property as the Law of Things (2012)", "The Oxford Introductions to U.S. Law: Property (with Thomas W. Merrill, 2010)"],
    relevance:
      "Smith supplies an information-cost account of why property uses standardized forms and boundaries while retaining more tailored governance rules for recurrent conflicts."
  },
  {
    name: "Alan Schwartz",
    lifespan: "Contemporary",
    role: "Contract and commercial-law scholar of incomplete contracts and business transactions",
    fields: ["contract theory", "commercial law", "corporate finance"],
    imageUrl: "/scholar-portraits/alan-schwartz.jpg",
    imageAlt: "Portrait of Alan Schwartz",
    imageSource: "Yale Law School",
    imageSourceHref: "https://law.yale.edu/alan-schwartz",
    summary:
      "Schwartz applies economic theory to commercial contracts, corporate finance, bankruptcy, and the limits of mandatory legal intervention in transactions between sophisticated firms.",
    majorWorks: ["Contract Theory and the Limits of Contract Law (with Robert E. Scott, 2003)", "The Case for Specific Performance (1979)", "Conceptualizing Contractual Interpretation (with Joel Watson, 2013)"],
    relevance:
      "Schwartz clarifies how contract-law design depends on party sophistication, verifiability, enforcement cost, and the institutional capacities of courts."
  },
  {
    name: "Frank Partnoy",
    lifespan: "1967-",
    role: "Scholar of financial markets, derivatives, gatekeepers, and regulatory arbitrage",
    fields: ["financial regulation", "derivatives", "securities gatekeepers"],
    imageUrl: "/scholar-portraits/frank-partnoy.jpg",
    imageAlt: "Portrait of Frank Partnoy",
    imageSource: "UC Berkeley Law",
    imageSourceHref: "https://www.law.berkeley.edu/our-faculty/faculty-profiles/frank-partnoy/",
    summary:
      "Partnoy studies derivatives, credit ratings, financial fraud, securities litigation, and the ways market participants reorganize transactions around legal classifications.",
    majorWorks: ["Financial Derivatives and the Costs of Regulatory Arbitrage (1997)", "The Siskel and Ebert of Financial Markets (1999)", "Barbarians at the Gatekeepers? (2001)"],
    relevance:
      "Partnoy makes regulatory arbitrage and gatekeeper incentives central to understanding how financial innovation can weaken formal disclosure and risk-control regimes."
  },
  {
    name: "Steven L. Schwarcz",
    lifespan: "Contemporary",
    role: "Financial-law scholar of securitization, bankruptcy, and systemic risk",
    fields: ["systemic risk", "securitization", "bankruptcy"],
    imageUrl: "/scholar-portraits/steven-schwarcz.jpg",
    imageAlt: "Portrait of Steven L. Schwarcz",
    imageSource: "Duke University School of Law",
    imageSourceHref: "https://law.duke.edu/fac/schwarcz/",
    imagePosition: "50% 35%",
    summary:
      "Schwarcz analyzes securitization, insolvency, capital markets, shadow banking, and the market failures that create and transmit systemic financial risk.",
    majorWorks: ["The Alchemy of Asset Securitization (1994)", "Systemic Risk (2008)", "Systematic Regulation of Systemic Risk (2019)"],
    relevance:
      "Schwarcz connects transactional finance to macroprudential regulation by showing how firm-level incentives, disintermediation, and financial-market structure generate public spillovers."
  },
  {
    name: "Alessio M. Pacces",
    lifespan: "Contemporary",
    role: "European law-and-finance scholar of corporate control and financial regulation",
    fields: ["corporate governance", "law and finance", "financial regulation"],
    imageUrl: "/scholar-portraits/alessio-pacces.jpg",
    imageAlt: "Portrait of Alessio M. Pacces",
    imageSource: "University of Amsterdam",
    imageSourceHref: "https://www.uva.nl/en/profile/p/a/a.m.pacces/a.m.pacces.html",
    summary:
      "Pacces studies corporate-control powers, financial intermediation, financial stability, sustainable corporate governance, and the legal conditions under which ownership and control can be allocated efficiently.",
    majorWorks: ["Financial Intermediation in the Securities Markets (2000)", "Rethinking Corporate Governance: The Law and Economics of Control Powers (2012)"],
    relevance:
      "Pacces connects comparative corporate law to the economics of control and brings European securities and financial-regulation institutions into the archive's law-and-finance framework."
  },
  {
    name: "Marco Becht",
    lifespan: "Contemporary",
    role: "European corporate-governance scholar of ownership, control, and stewardship",
    fields: ["corporate governance", "shareholder activism", "stewardship"],
    imageUrl: "/scholar-portraits/marco-becht.jpg",
    imageAlt: "Portrait of Marco Becht",
    imageSource: "European Corporate Governance Institute",
    imageSourceHref: "https://www.ecgi.global/network/our-members/marco-becht",
    summary:
      "Becht studies corporate ownership and control, shareholder activism, stewardship, and the institutional development of corporate governance in Europe and beyond.",
    majorWorks: ["Corporate Governance and Control (with Patrick Bolton and Ailsa Röell, 2003)", "Returns to Shareholder Activism (with Julian Franks, Colin Mayer, and Stefano Rossi, 2009)"],
    relevance:
      "Becht adds a European empirical perspective on concentrated ownership, control transfers, institutional investors, and the conditions under which shareholder engagement changes corporate policy."
  },
  {
    name: "Martin F. Hellwig",
    lifespan: "Contemporary",
    role: "German economist of banking, financial stability, and capital regulation",
    fields: ["banking regulation", "systemic risk", "financial stability"],
    imageUrl: "/scholar-portraits/martin-hellwig.jpg",
    imageAlt: "Portrait of Martin F. Hellwig",
    imageSource: "Max Planck Institute for Behavioral Economics",
    imageSourceHref: "https://www.econ.mpg.de/martin-hellwig",
    imagePosition: "50% 22%",
    summary:
      "Hellwig studies information, incentives, financial institutions, systemic risk, bank capital, monetary theory, and the architecture through which local balance-sheet problems become system-wide crises.",
    majorWorks: ["Liquidity Provision, Banking, and the Allocation of Interest Rate Risk (1994)", "Systemic Risk in the Financial Sector (2009)", "The Bankers' New Clothes (with Anat Admati, 2013)"],
    relevance:
      "Hellwig makes financial-system architecture, leverage, maturity transformation, and capital regulation central to legal analysis of prudential supervision and crisis prevention."
  },
  {
    name: "Jean Tirole",
    lifespan: "1953-",
    role: "French economist of regulation, organizations, corporate finance, and banking",
    fields: ["regulation", "corporate finance", "banking"],
    imageUrl: "/scholar-portraits/jean-tirole.jpg",
    imageAlt: "Portrait of Jean Tirole",
    imageSource: "Toulouse School of Economics",
    imageSourceHref: "https://www.tse-fr.eu/people/jean-tirole",
    imagePosition: "50% 25%",
    summary:
      "Tirole develops incentive-based accounts of industrial organization, regulation, organizations, corporate finance, and banking, linking institutional design to information and agency problems.",
    majorWorks: ["The Theory of Industrial Organization (1988)", "The Prudential Regulation of Banks (with Mathias Dewatripont, 1994)", "The Theory of Corporate Finance (2006)"],
    relevance:
      "Tirole supplies a unified economic language for studying regulatory commitment, managerial incentives, capital structure, bank solvency, and intervention by public or private claimholders."
  },
  {
    name: "Mathias Siems",
    lifespan: "Contemporary",
    role: "European comparative-law scholar of corporate law and empirical legal methods",
    fields: ["comparative law", "corporate law", "empirical legal studies"],
    imageUrl: "/scholar-portraits/mathias-siems.jpg",
    imageAlt: "Portrait of Mathias Siems",
    imageSource: "European University Institute",
    imageSourceHref: "https://www.eui.eu/people?id=mathias-siems",
    imagePosition: "50% 18%",
    summary:
      "Siems studies corporate and securities law, comparative law, law and economics, and empirical legal methods, with particular attention to how legal systems can be compared without reducing doctrine to a single index.",
    majorWorks: ["Convergence in Shareholder Law (2008)", "Comparative Law, 3rd ed. (2022)", "The Cambridge Handbook of Comparative Law (co-edited with Po Jen Yap, 2024)"],
    relevance:
      "Siems gives the archive a methodologically explicit bridge between comparative doctrine, quantitative legal indicators, institutional context, and European market regulation."
  },
  {
    name: "Colin Mayer",
    lifespan: "Contemporary",
    role: "British economist of corporate governance, finance, ownership, and purpose",
    fields: ["corporate governance", "ownership and control", "corporate purpose"],
    imageUrl: "/scholar-portraits/colin-mayer.jpg",
    imageAlt: "Portrait of Colin Mayer",
    imageSource: "University of Oxford",
    imageSourceHref: "https://www.alumni.ox.ac.uk/article/purpose-unlocks-profit",
    imagePosition: "50% 30%",
    summary:
      "Mayer studies comparative ownership and control, corporate finance, financial regulation, trust, and the institutional purposes that shape the conduct and accountability of corporations.",
    majorWorks: ["Ownership and Control of German Corporations (with Julian Franks, 2001)", "Firm Commitment (2013)", "Prosperity (2018)"],
    relevance:
      "Mayer connects empirical work on European ownership structures to normative debates over corporate purpose, long-term commitment, stakeholder protection, and the design of responsible enterprise."
  },
  {
    name: "Klaus J. Hopt",
    lifespan: "1940-",
    role: "German scholar of comparative company law, corporate governance, and capital markets",
    fields: ["comparative corporate governance", "company law", "capital-market law"],
    imageUrl: "/scholar-portraits/klaus-hopt.jpg",
    imageAlt: "Portrait of Klaus J. Hopt",
    imageSource: "University of Hamburg",
    imageSourceHref: "https://www.jura.uni-hamburg.de/en/die-fakultaet/personenverzeichnis/hopt-klaus-j.html",
    imagePosition: "50% 24%",
    summary:
      "Hopt studies company and capital-market law through a comparative European lens, with particular attention to boards, banks, intermediaries, investor protection, and the interaction between legal rules and corporate-governance institutions.",
    majorWorks: [
      "The German Two-Tier Board: Experience, Theories, Reforms (with Patrick C. Leyens, 2004)",
      "Comparative Corporate Governance: The State of the Art and International Regulation (2011)"
    ],
    relevance:
      "Hopt adds the doctrinal and institutional depth needed to compare one-tier and two-tier boards, stakeholder participation, corporate groups, and the role of financial intermediaries across European systems."
  },
  {
    name: "Paul L. Davies",
    lifespan: "Contemporary",
    role: "British scholar of company law, corporate finance, and securities regulation",
    fields: ["company law", "corporate finance law", "securities regulation"],
    imageUrl: "/scholar-portraits/paul-davies.jpg",
    imageAlt: "Portrait of Paul L. Davies",
    imageSource: "University of Oxford Faculty of Law",
    imageSourceHref: "https://www.law.ox.ac.uk/people/paul-davies-qc-hon",
    imagePosition: "50% 28%",
    summary:
      "Davies develops company law in close connection with corporate finance, securities markets, creditor protection, and comparative governance. His work combines systematic legal exposition with functional analysis of the institutions surrounding the company.",
    majorWorks: [
      "The Anatomy of Corporate Law, 3rd ed. (with coauthors, 2017)",
      "Introduction to Company Law, 3rd ed. (2020)",
      "Gower: Principles of Modern Company Law, 11th ed. (with Sarah Worthington and Christopher Hare, 2021)"
    ],
    relevance:
      "Davies helps readers move between UK doctrine and the broader economic functions of company law, including capital maintenance, board authority, shareholder rights, takeovers, and creditor safeguards."
  },
  {
    name: "Jennifer Payne",
    lifespan: "Contemporary",
    role: "British scholar of corporate finance law, restructuring, and financial regulation",
    fields: ["corporate finance law", "restructuring", "financial regulation"],
    imageUrl: "/scholar-portraits/jennifer-payne.jpg",
    imageAlt: "Portrait of Jennifer Payne",
    imageSource: "University of Oxford Faculty of Law",
    imageSourceHref: "https://www.law.ox.ac.uk/people/jennifer-payne",
    imagePosition: "50% 24%",
    summary:
      "Payne studies the legal structure of corporate finance, schemes of arrangement, restructuring, insolvency, and financial regulation. Her work shows how transactions and rescue procedures allocate control, priority, information, and bargaining power.",
    majorWorks: [
      "Corporate Finance Law: Principles and Policy, 3rd ed. (with Louise Gullifer, 2020)",
      "Schemes of Arrangement: Theory, Structure and Operation, 2nd ed. (2021)",
      "Corporate Restructuring Law in Flux (with Kristin van Zwieten, 2025)"
    ],
    relevance:
      "Payne gives the archive a transaction-centered account of how legal capital, debt, security interests, restructuring tools, and insolvency institutions shape corporate financing choices."
  },
  {
    name: "Wolf-Georg Ringe",
    lifespan: "Contemporary",
    role: "German scholar of law and finance, corporate governance, and European market regulation",
    fields: ["law and finance", "corporate governance", "financial-market law"],
    imageUrl: "/scholar-portraits/wolf-georg-ringe.jpg",
    imageAlt: "Portrait of Wolf-Georg Ringe",
    imageSource: "University of Hamburg",
    imageSourceHref: "https://www.jura.uni-hamburg.de/die-fakultaet/personenverzeichnis/ringe-georg.html",
    imagePosition: "50% 22%",
    summary:
      "Ringe studies corporate and financial-market law, shareholder activism, ownership decoupling, restructuring, and the institutional competition among European and global capital markets.",
    majorWorks: [
      "The Deconstruction of Equity: Activist Shareholders, Decoupled Risk, and Corporate Governance (2016)",
      "Business Law and the Transition to a Net Zero Economy (co-edited, 2022)"
    ],
    relevance:
      "Ringe connects private-law techniques and financial innovation to voting incentives, risk allocation, regulatory competition, sustainable finance, and the changing architecture of European capital markets."
  },
  {
    name: "Marco Pagano",
    lifespan: "1956-",
    role: "Italian economist of financial markets, banking, corporate finance, and law and finance",
    fields: ["law and finance", "banking", "financial markets"],
    imageUrl: "/scholar-portraits/marco-pagano.jpg",
    imageAlt: "Portrait of Marco Pagano",
    imageSource: "Centre for Studies in Economics and Finance",
    imageSourceHref: "https://csef.it/people/marco-pagano/",
    imagePosition: "50% 24%",
    summary:
      "Pagano studies banking, corporate finance, market microstructure, information sharing, financial development, and the political economy of investor protection and corporate governance.",
    majorWorks: [
      "Financial Markets and Growth: An Overview (1993)",
      "Information Sharing in Credit Markets (with Tullio Jappelli, 1993)",
      "The Political Economy of Corporate Governance (with Paolo F. Volpin, 2005)"
    ],
    relevance:
      "Pagano supplies European evidence and theory on how information institutions, ownership structures, legal protection, and political coalitions influence credit allocation, market development, and corporate governance."
  },
  {
    name: "Mathias Dewatripont",
    lifespan: "1959-",
    role: "Belgian economist of contract theory, organizations, and banking regulation",
    fields: ["contract theory", "organization economics", "banking regulation"],
    imageUrl: "/scholar-portraits/mathias-dewatripont.jpg",
    imageAlt: "Portrait of Mathias Dewatripont",
    imageSource: "Barcelona School of Economics",
    imageSourceHref: "https://bse.eu/people/dewatripont-mathias",
    imagePosition: "50% 24%",
    summary:
      "Dewatripont studies incentives, incomplete contracts, organizational governance, banking, and prudential regulation. His work links contractual allocation of authority to the public supervision of financial institutions.",
    majorWorks: [
      "The Prudential Regulation of Banks (with Jean Tirole, 1994)",
      "Contract Theory (with Patrick Bolton, 2005)",
      "Balancing the Banks: Global Lessons from the Financial Crisis (with Jean-Charles Rochet and Jean Tirole, 2010)"
    ],
    relevance:
      "Dewatripont bridges the archive's contract-theory and banking strands by showing how information, control rights, capital requirements, and regulatory commitment affect managers, banks, and supervisors."
  },
  {
    name: "Xavier Freixas",
    lifespan: "1949-",
    role: "Spanish economist of banking, systemic risk, and lender-of-last-resort policy",
    fields: ["banking", "systemic risk", "financial regulation"],
    imageUrl: "/scholar-portraits/xavier-freixas.jpg",
    imageAlt: "Portrait of Xavier Freixas",
    imageSource: "Barcelona School of Economics",
    imageSourceHref: "https://bse.eu/people/freixas-xavier",
    imagePosition: "50% 26%",
    summary:
      "Freixas studies banking under asymmetric information, relationship lending, payment risk, contagion, interbank markets, and the lender of last resort.",
    majorWorks: [
      "Microeconomics of Banking (with Jean-Charles Rochet, 1997)",
      "Systemic Risk, Interbank Relations, and Liquidity Provision by the Central Bank (with Bruno M. Parigi and Jean-Charles Rochet, 2000)",
      "Corporate Finance and the Monetary Transmission Mechanism (with Patrick Bolton, 2006)"
    ],
    relevance:
      "Freixas provides the mechanisms needed to analyze why bank regulation cannot stop at individual solvency: interbank links, liquidity provision, contagion, and central-bank intervention create system-level legal design problems."
  },
  {
    name: "Renée B. Adams",
    lifespan: "Contemporary",
    role: "European-based finance scholar of boards, bank governance, and organizational diversity",
    fields: ["corporate governance", "bank governance", "board diversity"],
    imageUrl: "/scholar-portraits/renee-adams.jpg",
    imageAlt: "Portrait of Renée B. Adams",
    imageSource: "Renée B. Adams academic website",
    imageSourceHref: "https://renee-adams.com/",
    imagePosition: "50% 24%",
    summary:
      "Adams studies boards of directors, bank governance, group decision-making, gender, and the internal allocation of monitoring and advisory functions within corporations.",
    majorWorks: [
      "A Theory of Friendly Boards (with Daniel Ferreira, 2007)",
      "Women in the Boardroom and Their Impact on Governance and Performance (with Daniel Ferreira, 2009)"
    ],
    relevance:
      "Adams adds empirically grounded analysis of what boards actually do and how director composition, incentives, committee structure, and institutional context affect monitoring, advice, and firm outcomes."
  },
  {
    name: "Julian Franks",
    lifespan: "Contemporary",
    role: "British finance scholar of ownership, control, insolvency, and shareholder activism",
    fields: ["ownership and control", "shareholder activism", "corporate insolvency"],
    imageUrl: "/scholar-portraits/julian-franks.png",
    imageAlt: "Portrait of Julian Franks",
    imageSource: "London Business School",
    imageSourceHref: "https://www.london.edu/faculty-and-research/faculty-profiles/f/franks-jr",
    imagePosition: "50% 28%",
    summary:
      "Franks studies corporate ownership and control, financial distress, insolvency, institutional investors, shareholder activism, regulation, and the evolution of European governance systems.",
    majorWorks: [
      "Ownership and Control of German Corporations (with Colin Mayer, 2001)",
      "Ownership: Evolution and Regulation (with Colin Mayer and Stefano Rossi, 2009)",
      "Returns to Shareholder Activism: Evidence from a Clinical Study of the Hermes UK Focus Fund (with Marco Becht, Colin Mayer, and Stefano Rossi, 2009)"
    ],
    relevance:
      "Franks strengthens the archive's comparative evidence on concentrated ownership, insolvency design, activist stewardship, and the historical development of corporate control in the United Kingdom and continental Europe."
  },
  {
    name: "Simon Deakin",
    lifespan: "Contemporary",
    role: "British scholar of law, economics, corporate governance, and empirical legal studies",
    fields: ["law and economics", "corporate governance", "empirical legal studies"],
    imageUrl: "/scholar-portraits/simon-deakin.jpg",
    imageAlt: "Portrait of Simon Deakin",
    imageSource: "Cambridge Judge Business School",
    imageSourceHref: "https://www.jbs.cam.ac.uk/people/simon-deakin/",
    imagePosition: "50% 32%",
    summary:
      "Deakin studies the economic and empirical analysis of law, corporate governance, labour and private law, and the constitutive role of legal institutions in shaping firms and markets.",
    majorWorks: [
      "System and Evolution in Corporate Governance (2011)",
      "Hedge Fund Activism in Japan: The Limits of Shareholder Primacy (with John Buchanan and Dominic Heesang Chai, 2012)",
      "Legal Institutionalism: Capitalism and the Constitutive Role of Law (with David Gindis, Geoffrey M. Hodgson, Kainan Huang, and Katharina Pistor, 2017)"
    ],
    relevance:
      "Deakin helps readers treat law as part of the institutional structure that constitutes economic relations, while also supplying comparative and empirical methods for testing claims about governance and regulatory change."
  },
  {
    name: "Patrick Bolton",
    lifespan: "1957-",
    role: "European economist of contract theory, corporate finance, and financial institutions",
    fields: ["contract theory", "corporate finance", "financial institutions"],
    imageUrl: "/scholar-portraits/patrick-bolton.jpg",
    imageAlt: "Portrait of Patrick Bolton",
    imageSource: "Imperial College Business School",
    imageSourceHref: "https://www.imperial.ac.uk/business-school/authors/pbolton",
    imagePosition: "50% 24%",
    summary:
      "Bolton studies contract theory, corporate finance, financial intermediation, and the institutional allocation of control when contracts are incomplete and financing relationships are vulnerable to strategic behavior.",
    majorWorks: [
      "Optimal Debt Structure and the Number of Creditors (with David S. Scharfstein, 1996)",
      "Contract Theory (with Mathias Dewatripont, 2005)",
      "The Green Swan: Central Banking and Financial Stability in the Age of Climate Change (with coauthors, 2020)"
    ],
    relevance:
      "Bolton connects incomplete-contract theory to debt structure, creditor coordination, corporate control, and the design of institutions that govern long-term financial commitments."
  },
  {
    name: "Daniel Ferreira",
    lifespan: "Contemporary",
    role: "European-based finance scholar of boards, governance, and organizational economics",
    fields: ["corporate governance", "boards of directors", "organizational economics"],
    imageUrl: "/scholar-portraits/daniel-ferreira.webp",
    imageAlt: "Portrait of Daniel Ferreira",
    imageSource: "London School of Economics and Political Science",
    imageSourceHref: "https://www.lse.ac.uk/people/daniel-ferreira",
    imagePosition: "50% 22%",
    summary:
      "Ferreira studies corporate boards, director independence, diversity, monitoring, advice, and organizational decision-making at the intersection of corporate finance and organizational economics.",
    majorWorks: [
      "A Theory of Friendly Boards (with Renée B. Adams, 2007)",
      "Women in the Boardroom and Their Impact on Governance and Performance (with Renée B. Adams, 2009)",
      "Managerial Insulation and Bank Failures (with David Kershaw, Tom Kirchmaier, and Edmund-Philipp Schuster, 2021)"
    ],
    relevance:
      "Ferreira provides mechanisms and evidence for evaluating how board composition and information exchange affect monitoring, advice, firm performance, and regulatory efforts to redesign boards."
  },
  {
    name: "Franklin Allen",
    lifespan: "Contemporary",
    role: "European-based economist of financial systems, contagion, and comparative finance",
    fields: ["financial systems", "financial contagion", "comparative finance"],
    imageUrl: "/scholar-portraits/franklin-allen.jpg",
    imageAlt: "Portrait of Franklin Allen",
    imageSource: "Imperial College Business School",
    imageSourceHref: "https://www.imperial.ac.uk/business-school/authors/fallen",
    imagePosition: "50% 22%",
    summary:
      "Allen studies financial systems, crises, contagion, corporate governance, and comparative finance, including the institutional differences between bank-based and market-based financial architectures.",
    majorWorks: [
      "Financial Contagion (with Douglas Gale, 2000)",
      "Comparing Financial Systems (with Douglas Gale, 2000)",
      "Law, Finance, and Economic Growth in China (with Jun Qian and Meijun Qian, 2005)",
      "Understanding Financial Crises (with Douglas Gale, 2007)"
    ],
    relevance:
      "Allen helps the archive compare financial architectures and identify how interbank claims, market incompleteness, legal institutions, and crisis-management rules shape systemic resilience."
  },
  {
    name: "Jean-Charles Rochet",
    lifespan: "Contemporary",
    role: "French economist of banking, financial stability, and contract theory",
    fields: ["banking", "financial stability", "contract theory"],
    imageUrl: "/scholar-portraits/jean-charles-rochet.png",
    imageAlt: "Portrait of Jean-Charles Rochet",
    imageSource: "University of Geneva",
    imageSourceHref:
      "https://www.unige.ch/gsem/fr/recherche/corps-professoral/honoraires/jean-charles-rochet",
    imagePosition: "50% 35%",
    summary:
      "Rochet studies banking, systemic risk, interbank markets, lender-of-last-resort policy, prudential regulation, and the contractual foundations of financial intermediation.",
    majorWorks: [
      "Microeconomics of Banking (with Xavier Freixas, 1997; 2nd ed. 2008)",
      "Systemic Risk, Interbank Relations, and Liquidity Provision by the Central Bank (with Xavier Freixas and Bruno M. Parigi, 2000)",
      "Balancing the Banks (with Mathias Dewatripont and Jean Tirole, 2010)"
    ],
    relevance:
      "Rochet supplies the analytical bridge between bank-level incentive problems and system-level legal design, including liquidity support, capital regulation, contagion, and supervisory intervention."
  },
  {
    name: "Charles A. E. Goodhart",
    lifespan: "1936-",
    role: "British economist of central banking, monetary institutions, and financial regulation",
    fields: ["central banking", "financial regulation", "monetary institutions"],
    imageUrl: "/scholar-portraits/charles-goodhart.webp",
    imageAlt: "Portrait of Charles A. E. Goodhart",
    imageSource: "London School of Economics and Political Science",
    imageSourceHref: "https://www.lse.ac.uk/Economic-History/Financial-History-Group/People",
    imagePosition: "50% 24%",
    summary:
      "Goodhart studies central banking, monetary policy, financial regulation, payment systems, and the institutional boundaries that determine which activities and entities fall within prudential oversight.",
    majorWorks: [
      "Financial Regulation: Why, How and Where Now? (1998)",
      "The Regulatory Response to the Financial Crisis (2009)",
      "The Basel Committee on Banking Supervision: A History of the Early Years, 1974-1997 (2011)"
    ],
    relevance:
      "Goodhart brings institutional history and central-bank practice into financial-law analysis, especially where regulation must adapt to boundary shifts, innovation, and the migration of risk outside conventional banking."
  },
  {
    name: "Thorsten Beck",
    lifespan: "Contemporary",
    role: "German economist of financial development, banking, and legal institutions",
    fields: ["financial development", "banking", "law and finance"],
    imageUrl: "/scholar-portraits/thorsten-beck.jpg",
    imageAlt: "Portrait of Thorsten Beck",
    imageSource: "European University Institute",
    imageSourceHref: "https://www.eui.eu/people?id=thorsten-harald-leopold-beck",
    imagePosition: "50% 22%",
    summary:
      "Beck studies banking, financial development, competition, stability, inclusion, and the institutional foundations that connect legal systems to financial-market structure and economic growth.",
    majorWorks: [
      "Finance and the Sources of Growth (with Ross Levine and Norman Loayza, 2000)",
      "Law and Finance: Why Does Legal Origin Matter? (with Asli Demirgüç-Kunt and Ross Levine, 2003)",
      "Law, Endowments, and Finance (with Asli Demirgüç-Kunt and Ross Levine, 2003)",
      "Bank Concentration, Competition, and Crises (with Asli Demirgüç-Kunt and Ross Levine, 2006)"
    ],
    relevance:
      "Beck adds cross-country evidence on how legal origin, endowments, competition, supervision, and institutional quality relate to financial development and banking stability."
  },
  {
    name: "David Kershaw",
    lifespan: "Contemporary",
    role: "British scholar of company law, takeover regulation, and accounting regulation",
    fields: ["company law", "takeover regulation", "accounting regulation"],
    imageUrl: "/scholar-portraits/david-kershaw.webp",
    imageAlt: "Portrait of David Kershaw",
    imageSource: "London School of Economics and Political Science",
    imageSourceHref: "https://www.lse.ac.uk/people/david-kershaw",
    imagePosition: "50% 22%",
    summary:
      "Kershaw studies UK and U.S. corporate law, takeover regulation, accounting regulation, fiduciary duties, and the institutional production of corporate-law doctrine.",
    majorWorks: [
      "Company Law in Context: Text and Materials, 2nd ed. (2012)",
      "Principles of Takeover Regulation (2016)",
      "The Foundations of Anglo-American Corporate Fiduciary Law (2018)"
    ],
    relevance:
      "Kershaw combines doctrinal history with functional and economic analysis, allowing readers to test whether familiar takeover and fiduciary rules reflect efficient design, path dependence, or the institutional interests of rulemakers."
  }
];

const SCHOLAR_SURNAMES: Record<string, string> = {
  "Ronald H. Coase": "Coase",
  "Gary S. Becker": "Becker",
  "Oliver E. Williamson": "Williamson",
  "Douglass C. North": "North",
  "Guido Calabresi": "Calabresi",
  "Robert D. Cooter": "Cooter",
  "A. Mitchell Polinsky": "Polinsky",
  "Thomas S. Ulen": "Ulen",
  "Daniel Kahneman": "Kahneman",
  "Christine Jolls": "Jolls",
  "Russell B. Korobkin": "Korobkin",
  "Jeffrey J. Rachlinski": "Rachlinski",
  "Cass R. Sunstein": "Sunstein",
  "Richard H. Thaler": "Thaler",
  "Oren Bar-Gill": "Bar-Gill",
  "Wesley Newcomb Hohfeld": "Hohfeld",
  "Richard A. Posner": "Posner",
  "Eugene F. Fama": "Fama",
  "Andrei Shleifer": "Shleifer",
  "Rafael La Porta": "La Porta",
  "Lucian A. Bebchuk": "Bebchuk",
  "Roberta Romano": "Romano",
  "Howell E. Jackson": "Jackson",
  "Mark J. Roe": "Roe",
  "Steven M. Shavell": "Shavell",
  "Katharina Pistor": "Pistor",
  "Merritt B. Fox": "Fox",
  "Louis Loss": "Loss",
  "James D. Cox": "Cox",
  "Donald C. Langevoort": "Langevoort",
  "Jill E. Fisch": "Fisch",
  "Stephen J. Choi": "Choi",
  "Zohar Goshen": "Goshen",
  "Christian Leuz": "Leuz",
  "Niamh Moloney": "Moloney",
  "Eilís Ferran": "Ferran",
  "Eric L. Talley": "Talley",
  "Reinier H. Kraakman": "Kraakman",
  "Holger Spamann": "Spamann",
  "John C. Coffee Jr.": "Coffee",
  "John Armour": "Armour",
  "Luca Enriques": "Enriques",
  "Joseph A. Grundfest": "Grundfest",
  "Luigi Zingales": "Zingales",
  "Henry B. Hansmann": "Hansmann",
  "Frank H. Easterbrook": "Easterbrook",
  "Daniel R. Fischel": "Fischel",
  "Jeffrey N. Gordon": "Gordon",
  "Henry G. Manne": "Manne",
  "Ronald J. Gilson": "Gilson",
  "John C. Coates IV": "Coates",
  "Marcel Kahan": "Kahan",
  "Guhan Subramanian": "Subramanian",
  "Bernard S. Black": "Black",
  "Edward B. Rock": "Rock",
  "Oliver Hart": "Hart",
  "Bengt Holmstrom": "Holmstrom",
  "Markus K. Brunnermeier": "Brunnermeier",
  "Ben S. Bernanke": "Bernanke",
  "George J. Stigler": "Stigler",
  "Elinor Ostrom": "Ostrom",
  "Robert C. Ellickson": "Ellickson",
  "Lisa Bernstein": "Bernstein",
  "Louis Kaplow": "Kaplow",
  "A. Douglas Melamed": "Melamed",
  "Michael C. Jensen": "Jensen",
  "Anat R. Admati": "Admati",
  "Douglas W. Diamond": "Diamond",
  "Philip H. Dybvig": "Dybvig",
  "Joseph E. Stiglitz": "Stiglitz",
  "Jennifer H. Arlen": "Arlen",
  "Ian Ayres": "Ayres",
  "Kathryn E. Spier": "Spier",
  "Henry E. Smith": "Smith",
  "Alan Schwartz": "Schwartz",
  "Frank Partnoy": "Partnoy",
  "Steven L. Schwarcz": "Schwarcz",
  "Alessio M. Pacces": "Pacces",
  "Marco Becht": "Becht",
  "Martin F. Hellwig": "Hellwig",
  "Jean Tirole": "Tirole",
  "Mathias Siems": "Siems",
  "Colin Mayer": "Mayer",
  "Klaus J. Hopt": "Hopt",
  "Paul L. Davies": "Davies",
  "Jennifer Payne": "Payne",
  "Wolf-Georg Ringe": "Ringe",
  "Marco Pagano": "Pagano",
  "Mathias Dewatripont": "Dewatripont",
  "Xavier Freixas": "Freixas",
  "Renée B. Adams": "Adams",
  "Julian Franks": "Franks",
  "Simon Deakin": "Deakin",
  "Patrick Bolton": "Bolton",
  "Daniel Ferreira": "Ferreira",
  "Franklin Allen": "Allen",
  "Jean-Charles Rochet": "Rochet",
  "Charles A. E. Goodhart": "Goodhart",
  "Thorsten Beck": "Beck",
  "David Kershaw": "Kershaw"
};

const SCHOLAR_DETAILS: Record<string, ScholarDetail> = {
  "Gary S. Becker": {
    officialProfileSource: "University of Chicago Booth School of Business",
    officialProfileHref: "https://www.chicagobooth.edu/faculty/nobel/becker",
    institutionalProfile: [
      "Chicago Booth's Nobel profile describes Becker as a scholar who extended microeconomic analysis to human behavior, including crime, discrimination, family behavior, and human capital. Nobel materials identify him as the 1992 economics laureate for extending microeconomic analysis to a wide range of human behavior and interaction.",
      "Becker is included because Crime and Punishment gives legal researchers the basic expected-sanction model for studying public enforcement, deterrence, compliance, and the social cost of punishment."
    ]
  },
  "Douglass C. North": {
    officialProfileSource: "University of Washington Department of Economics",
    officialProfileHref: "https://econ.washington.edu/people/douglass-c-north",
    institutionalProfile: [
      "The University of Washington Department of Economics lists North as Professor Emeritus and Nobel Laureate and records his service in the department from 1950 to 1983. Nobel materials identify North, with Robert Fogel, as a 1993 laureate for renewing research in economic history by applying economic theory and quantitative methods.",
      "North is included because institutional analysis is indispensable for law-and-economics research that treats legal rules as part of a broader system of formal rules, informal constraints, enforcement, and path-dependent change."
    ]
  },
  "Oliver E. Williamson": {
    officialProfileSource: "UC Berkeley Department of Economics",
    officialProfileHref: "https://eml.berkeley.edu/econ/faculty/williamson_o.shtml",
    institutionalProfile: [
      "Berkeley's economics profile lists Williamson as Edgar F. Kaiser Professor Emeritus of Business, Economics, and Organization and Nobel Laureate 2009. The profile identifies economics of institutions and law and economics as fields, with research interests including transaction-cost economics and governance of contractual relations.",
      "Williamson is included because transaction-cost economics gives legal researchers a comparative framework for studying markets, firms, contracts, relational governance, and institutional choice."
    ]
  },
  "Guido Calabresi": {
    officialProfileSource: "Yale Law School",
    officialProfileHref: "https://law.yale.edu/guido-calabresi",
    institutionalProfile: [
      "Yale Law School lists Calabresi as Sterling Professor Emeritus of Law and Professorial Lecturer in Law and notes his service as a judge on the U.S. Court of Appeals for the Second Circuit and as former dean of Yale Law School.",
      "Calabresi is included because The Cost of Accidents and his work with A. Douglas Melamed made accident costs, entitlement protection, insurance, remedies, and institutional choice central to law-and-economics analysis."
    ]
  },
  "Robert D. Cooter": {
    officialProfileSource: "UC Berkeley Law",
    officialProfileHref: "https://www.law.berkeley.edu/academics/doctoral-programs/jsp/our-faculty/robert-d-cooter/",
    institutionalProfile: [
      "UC Berkeley Law's Jurisprudence and Social Policy faculty page identifies Cooter as a law-and-economics scholar and describes work connected to property, contract and business law, constitutional law and economics, and liability for externalities.",
      "Cooter is included because his textbook with Thomas Ulen and broader institutional scholarship make law and economics teachable as a structured method rather than a collection of field-specific applications."
    ]
  },
  "A. Mitchell Polinsky": {
    officialProfileSource: "Stanford Institute for Economic Policy Research",
    officialProfileHref: "https://siepr.stanford.edu/people/mitchell-polinsky",
    institutionalProfile: [
      "Stanford SIEPR lists Polinsky as the Josephine Scott Crocker Professor of Law and Economics and describes him as a scholar applying economic theory to many areas of law, including property, contracts, liability, and punitive damages.",
      "Polinsky is included because his work gives readers a compact entry point into deterrence, damages, sanction design, and public enforcement, including his influential survey with Steven Shavell."
    ]
  },
  "Thomas S. Ulen": {
    officialProfileSource: "University of Illinois College of Law",
    officialProfileHref: "https://law.illinois.edu/faculty-research/faculty-profiles/thomas-s-ulen/",
    institutionalProfile: [
      "The University of Illinois College of Law lists Ulen as Swanlund Chair Emeritus and Professor Emeritus of Law and notes his work in law and economics, legal education, and regulatory issues.",
      "Ulen is included because his coauthored textbook with Robert Cooter helped define the pedagogical architecture of law and economics for legal readers, linking doctrine to incentives, institutions, and economic method."
    ]
  },
  "Daniel Kahneman": {
    officialProfileSource: "Nobel Prize",
    officialProfileHref: "https://www.nobelprize.org/prizes/economic-sciences/2002/kahneman/facts/",
    institutionalProfile: [
      "Nobel Prize materials identify Kahneman as the 2002 economics laureate for integrating insights from psychological research into economics, especially concerning human judgment and decision-making under uncertainty.",
      "Kahneman is included as a behavioral foundation for law-and-economics analysis rather than as a doctrinal legal scholar: his work with Amos Tversky supplies the vocabulary of heuristics, biases, reference dependence, loss aversion, and prospect theory."
    ]
  },
  "Christine Jolls": {
    officialProfileSource: "Yale Law School",
    officialProfileHref: "https://law.yale.edu/christine-jolls",
    institutionalProfile: [
      "Yale Law School lists Jolls as a member of its faculty. Her scholarship is central to behavioral law and economics, including work on behavioral assumptions, workplace regulation, antidiscrimination law, and debiasing through legal design.",
      "Jolls is included because A Behavioral Approach to Law and Economics, coauthored with Cass Sunstein and Richard Thaler, gives the field a canonical statement of bounded rationality, bounded willpower, and bounded self-interest as legally relevant departures from the rational-actor model."
    ]
  },
  "Russell B. Korobkin": {
    officialProfileSource: "UCLA School of Law",
    officialProfileHref: "https://law.ucla.edu/faculty/faculty-profiles/russell-korobkin",
    institutionalProfile: [
      "UCLA School of Law identifies Korobkin as Richard C. Maxwell Distinguished Professor of Law and Vice Dean for Graduate and Professional Education. His faculty page supports his role as a legal scholar of contracts, negotiation, and law-and-behavioral-science analysis.",
      "Korobkin is included because his work with Thomas Ulen argues that law and economics should replace a strong rationality assumption with empirically grounded behavioral assumptions when those assumptions improve legal prediction and institutional design."
    ]
  },
  "Jeffrey J. Rachlinski": {
    officialProfileSource: "Cornell Law School",
    officialProfileHref: "https://www.lawschool.cornell.edu/faculty-research/faculty-directory/jeffrey-rachlinski/",
    institutionalProfile: [
      "Cornell Law School lists Rachlinski on its faculty directory. His scholarship is widely associated with behavioral law, judicial decision-making, litigation behavior, and the empirical study of legal process.",
      "Rachlinski is included because his work connects prospect theory, framing, heuristics, and bias to concrete legal institutions, especially settlement, judging, courts, and litigation incentives."
    ]
  },
  "Cass R. Sunstein": {
    officialProfileSource: "Harvard Law School",
    officialProfileHref: "https://hls.harvard.edu/faculty/cass-r-sunstein/",
    institutionalProfile: [
      "Harvard Law School identifies Sunstein as Robert Walmsley University Professor and describes him as founder and director of the Program on Behavioral Economics and Public Policy at Harvard Law School.",
      "Sunstein is included because his work with Jolls and Thaler helped establish behavioral law and economics, while his later work on choice architecture and nudges made behavioral insights central to regulatory design."
    ]
  },
  "Richard H. Thaler": {
    officialProfileSource: "University of Chicago Booth School of Business",
    officialProfileHref: "https://www.chicagobooth.edu/faculty/emeriti/richard-h-thaler",
    institutionalProfile: [
      "Chicago Booth identifies Thaler as Charles R. Walgreen Distinguished Service Professor of Behavioral Science and Economics Emeritus and notes his 2017 Nobel Memorial Prize for contributions to behavioral economics.",
      "Thaler is included because his work gives law-and-economics readers tools for analyzing defaults, mental accounting, endowment effects, consumer choice, savings behavior, and behaviorally informed policy design."
    ]
  },
  "Oren Bar-Gill": {
    officialProfileSource: "Berkman Klein Center for Internet and Society",
    officialProfileHref: "https://cyber.harvard.edu/people/oren-bar-gill",
    institutionalProfile: [
      "The Berkman Klein Center states that Bar-Gill's scholarship focuses on the law and economics of contracts and contracting and lists Seduction by Contract among his publications.",
      "Bar-Gill is included because his work shows how firms can design consumer contracts around limited attention, optimism, complexity, and misperception, making behavioral market failure central to consumer financial law and contract regulation."
    ]
  },
  "Ben S. Bernanke": {
    officialProfileSource: "Brookings Institution",
    officialProfileHref: "https://www.brookings.edu/experts/ben-s-bernanke/",
    institutionalProfile: [
      "Brookings lists Bernanke as a distinguished fellow in Economic Studies and the Hutchins Center on Fiscal and Monetary Policy. His profile notes his service as chair of the Federal Reserve and his 2022 Nobel recognition for research on banks and financial crises.",
      "Bernanke is included because his scholarship and public role connect banking, credit intermediation, crisis propagation, and the institutional design of central-bank responses."
    ]
  },
  "Markus K. Brunnermeier": {
    officialProfileSource: "Princeton Bendheim Center for Finance",
    officialProfileHref: "https://bcf.princeton.edu/about/center-director/",
    institutionalProfile: [
      "Princeton's Bendheim Center for Finance identifies Brunnermeier as its director and the Edwards S. Sanford Professor of Economics. The center describes his research as focused on international financial markets, macroeconomics, bubbles, liquidity, financial stability, and digital money.",
      "Brunnermeier is included because his work gives financial-law readers a rigorous vocabulary for liquidity spirals, leverage, resilience, and macroprudential regulation."
    ]
  },
  "Oliver Hart": {
    officialProfileSource: "Harvard Law School",
    officialProfileHref: "https://hls.harvard.edu/faculty/oliver-hart/",
    institutionalProfile: [
      "Harvard Law School identifies Hart as Lewis P. and Linda L. Geyser University Professor and notes his 2016 Nobel Prize. His profile describes his research as centered on ownership structure, contractual arrangements, governance, and firm boundaries.",
      "Hart is included because incomplete-contract theory and residual control rights are central to corporate-law analysis of ownership, authority, and investment incentives."
    ]
  },
  "Bengt Holmstrom": {
    officialProfileSource: "MIT Sloan School of Management",
    officialProfileHref: "https://mitsloan.mit.edu/faculty/directory/bengt-holmstrom",
    institutionalProfile: [
      "MIT Sloan lists Holmstrom as Paul A. Samuelson Professor of Economics, Emeritus, and notes his 2016 Nobel Memorial Prize in Economic Sciences with Oliver Hart for contributions to contract theory.",
      "Holmstrom is included because his work on moral hazard and incentive design provides core foundations for agency-cost analysis in corporate governance and financial contracting."
    ]
  },
  "John Armour": {
    officialProfileSource: "University of Oxford Faculty of Law",
    officialProfileHref: "https://www.law.ox.ac.uk/people/john-armour",
    institutionalProfile: [
      "Oxford identifies Armour as Professor of Law and Finance and a fellow of the British Academy and the European Corporate Governance Institute. His institutional biography places his work in company law, financial regulation, and corporate insolvency.",
      "For this site, Armour is treated as a bridge figure between corporate law and financial law: his scholarship connects firm governance, creditor protection, insolvency, and the design of financial-market institutions."
    ]
  },
  "Lucian A. Bebchuk": {
    officialProfileSource: "Harvard Law School",
    officialProfileHref: "https://hls.harvard.edu/faculty/lucian-a-bebchuk/",
    institutionalProfile: [
      "Harvard Law School lists Bebchuk as the James Barr Ames Professor of Law, Economics, and Finance and Director of the Program on Corporate Governance. His research focuses on corporate governance, law and finance, and law and economics.",
      "His profile is central for debates over shareholder rights, board insulation, executive compensation, and the relation between corporate-law design and firm value."
    ]
  },
  "Bernard S. Black": {
    officialProfileSource: "Northwestern Pritzker School of Law",
    officialProfileHref: "https://www.law.northwestern.edu/faculty/profiles/bernardblack/",
    institutionalProfile: [
      "Northwestern Pritzker School of Law lists Black as Nicholas D. Chabraja Professor, with appointments across law, business, finance, and policy. His official biography identifies law and finance, international corporate governance, corporate and securities law, and empirical methods for causal inference among his areas of expertise.",
      "Black is included because his work links comparative corporate governance and securities-market development to empirical legal methods, legal institutions, and market infrastructure."
    ]
  },
  "John C. Coffee Jr.": {
    officialProfileSource: "Columbia Law School",
    officialProfileHref: "https://www.law.columbia.edu/faculty/john-c-coffee-jr",
    institutionalProfile: [
      "Columbia Law School lists Coffee as the Adolf A. Berle Professor of Law and describes him as a leading authority on securities law, corporate governance, white-collar crime, complex litigation, and class actions.",
      "Within the archive, Coffee anchors the securities-regulation strand: mandatory disclosure, gatekeeper liability, enforcement architecture, class actions, and market-failure arguments for regulation."
    ]
  },
  "Frank H. Easterbrook": {
    officialProfileSource: "University of Chicago Law School",
    officialProfileHref: "https://www.law.uchicago.edu/faculty/easterbrook",
    institutionalProfile: [
      "The University of Chicago Law School lists Easterbrook as Senior Lecturer in Law, retired, and describes his work in antitrust, criminal law and procedure, and subjects involving implicit or explicit markets. The same profile records his coauthorship of The Economic Structure of Corporate Law with Daniel R. Fischel.",
      "Easterbrook is included for his role in articulating the economic and contractual account of corporate law and for his influence on securities-disclosure debates."
    ]
  },
  "Daniel R. Fischel": {
    officialProfileSource: "University of Chicago Law School",
    officialProfileHref: "https://www.law.uchicago.edu/faculty/fischel",
    institutionalProfile: [
      "The University of Chicago Law School lists Fischel as Lee and Brena Freeman Professor Emeritus of Law and Business. His official profile identifies corporations, corporate finance, and the regulation of financial markets as his chief interests.",
      "Fischel is included because his work with Frank Easterbrook remains a major statement of the economic structure of corporate law and its relation to markets, contracts, and finance."
    ]
  },
  "Ronald H. Coase": {
    officialProfileSource: "University of Chicago Law School",
    officialProfileHref: "https://www.law.uchicago.edu/news/ronald-h-coase-founding-scholar-law-and-economics-1910-2013",
    institutionalProfile: [
      "The University of Chicago Law School describes Coase as a founding scholar in law and economics whose work helped create the field and earned the 1991 Nobel Memorial Prize in Economics. The page emphasizes his long association with Chicago and his role in transaction-cost economics.",
      "Coase is placed first in the intellectual history of the site because The Nature of the Firm and The Problem of Social Cost made firms, bargaining, transaction costs, and institutional alternatives central to legal analysis."
    ]
  },
  "Luca Enriques": {
    officialProfileSource: "University of Oxford Faculty of Law",
    officialProfileHref: "https://www.law.ox.ac.uk/people/luca-enriques",
    institutionalProfile: [
      "Oxford lists Enriques as Professor of Business Law at Bocconi University, Visiting Professor at the Oxford Faculty of Law, and Visiting Research Fellow at the Oxford Institute of European and Comparative Law.",
      "His work is treated here as a comparative corporate-law and securities-regulation reference point, especially for takeovers, European company law, corporate governance, and financial-regulation design."
    ]
  },
  "Eugene F. Fama": {
    officialProfileSource: "University of Chicago Booth School of Business",
    officialProfileHref: "https://www.chicagobooth.edu/faculty/directory/f/eugene-f-fama",
    institutionalProfile: [
      "Chicago Booth lists Fama as the Robert R. McCormick Distinguished Service Professor of Finance and notes his 2013 Nobel Prize in economic sciences. His profile emphasizes capital markets, the efficient markets hypothesis, risk, and expected return.",
      "Fama is important for the site because securities regulation and empirical corporate-law research often rely on assumptions about price formation, information incorporation, market efficiency, and event-study methods."
    ]
  },
  "Merritt B. Fox": {
    officialProfileSource: "Columbia Law School",
    officialProfileHref: "https://www.law.columbia.edu/fac/Merritt_Fox",
    institutionalProfile: [
      "Columbia Law School identifies Fox with corporate and securities law, including disclosure, capital markets, international securities regulation, and market structure.",
      "Fox's profile supports the site's treatment of securities law as an institutional system concerned with information production, trading integrity, market design, and cross-border regulation."
    ]
  },
  "Louis Loss": {
    officialProfileSource: "Harvard Law School",
    officialProfileHref: "https://hls.harvard.edu/historical-faculty/louis-loss-1914-1997/",
    institutionalProfile: [
      "Harvard Law School's historical faculty page lists Loss as William Nelson Cromwell Professor of Law and Professor Emeritus, records his research area as securities law, and identifies Securities Regulation and Fundamentals of Securities Regulation among his representative publications.",
      "Loss is included because his treatise structure remains a reference point for understanding securities regulation as a field: registration, disclosure, trading markets, antifraud rules, enforcement, and administrative practice."
    ]
  },
  "James D. Cox": {
    officialProfileSource: "Duke University School of Law",
    officialProfileHref: "https://law.duke.edu/fac/cox",
    institutionalProfile: [
      "Duke Law lists Cox as Brainerd Currie Distinguished Professor of Law and describes his specialization in corporate and securities law. The profile notes his securities-regulation casebook work and publications in market regulation and corporate governance.",
      "Cox is included because his work connects doctrinal securities law to market regulation, securities litigation, accounting, insider trading, class actions, and public-company governance."
    ]
  },
  "Donald C. Langevoort": {
    officialProfileSource: "Georgetown Law",
    officialProfileHref: "https://www.law.georgetown.edu/faculty/donald-langevoort/",
    institutionalProfile: [
      "Georgetown Law lists Langevoort as Thomas Aquinas Reynolds Professor of Law with expertise in business organizations and securities regulation, as well as psychology, behavioral economics, and cognitive science.",
      "Langevoort is included because his work connects securities-law doctrine to behavioral assumptions, SEC experience, insider-trading regulation, disclosure design, professional responsibility, and securities litigation reform."
    ]
  },
  "Jill E. Fisch": {
    officialProfileSource: "University of Pennsylvania Carey Law School",
    officialProfileHref: "https://www.law.upenn.edu/live/profiles/2959-jill-fisch",
    institutionalProfile: [
      "Penn Carey Law lists Fisch as Saul A. Fox Distinguished Professor of Business Law and describes her work as focused on the intersection of business and law, including regulation and litigation in addressing limits of capital-market discipline.",
      "Fisch is included because her work gives readers a securities-law perspective on SEC institutional performance, private litigation, securities intermediaries, investor protection, and capital-market governance."
    ]
  },
  "Stephen J. Choi": {
    officialProfileSource: "NYU School of Law",
    officialProfileHref: "https://its.law.nyu.edu/facultyprofiles/index.cfm?fuseaction=profile.overview&personid=23843",
    institutionalProfile: [
      "NYU School of Law lists Choi as Bernard Petrie Professor of Law and Business and Director of the Pollack Center. The profile identifies corporate law, empirical legal scholarship, law and finance, and securities regulation among his research areas.",
      "Choi is included because his work brings theoretical and empirical law-and-economics tools to securities regulation, including issuer choice, behavioral investor protection, enforcement data, and securities-market intermediaries."
    ]
  },
  "Zohar Goshen": {
    officialProfileSource: "Columbia Law School",
    officialProfileHref: "https://www.law.columbia.edu/fac/Zohar_Goshen",
    institutionalProfile: [
      "Columbia Law School lists Goshen as Jerome L. Greene Professor of Transactional Law and describes his writing and teaching in corporate law and governance, securities regulation, and corporate finance.",
      "Goshen is included because The Essential Role of Securities Regulation gives this archive a focused theory of information traders, disclosure duties, antifraud law, manipulation restrictions, and insider-trading regulation."
    ]
  },
  "Christian Leuz": {
    officialProfileSource: "University of Chicago Booth School of Business",
    officialProfileHref: "https://faculty.chicagobooth.edu/christian-leuz",
    institutionalProfile: [
      "Chicago Booth lists Leuz as Charles F. Pohl Distinguished Service Professor of Accounting and Finance and describes his research on disclosure and transparency in capital markets, the economic effects of regulation, international accounting, corporate governance, and finance.",
      "Leuz is included because securities-law research on disclosure and financial reporting needs empirical evidence on transparency, reporting mandates, real effects, cost-benefit analysis, and institutional variation."
    ]
  },
  "Niamh Moloney": {
    officialProfileSource: "London School of Economics and Political Science",
    officialProfileHref: "https://www.lse.ac.uk/law/people/academic-staff/niamh-moloney",
    institutionalProfile: [
      "LSE Law School identifies Moloney as Professor of Financial Markets Law and states that she specializes in EU financial markets regulation. The LSE profile lists books including EU Securities and Financial Markets Regulation, The Age of ESMA, and How to Protect Investors.",
      "Moloney is included because her work gives this archive a sustained EU and UK comparative perspective on securities regulation, investor protection, market conduct, ESMA governance, supervisory convergence, and post-crisis financial-market architecture."
    ]
  },
  "Eilís Ferran": {
    officialProfileSource: "University of Cambridge Faculty of Law",
    officialProfileHref: "https://www.law.cam.ac.uk/people/academic/ev-ferran/28",
    institutionalProfile: [
      "Cambridge Faculty of Law lists Ferran as Professor of Company and Securities Law and Director of Research. The same profile identifies her interests as corporate finance law, general company law, and financial regulation.",
      "Cambridge's profile states that Ferran has written extensively on UK, EU, and international financial regulation, company law, and corporate finance law, and lists publications including Principles of Corporate Finance Law, The Oxford Handbook of Financial Regulation, The Regulatory Aftermath of the Global Financial Crisis, and Building an EU Securities Market.",
      "Ferran is included because her work connects company law, corporate finance law, securities-market integration, UK/EU financial regulation, and post-crisis institutional design."
    ]
  },
  "Eric L. Talley": {
    officialProfileSource: "Columbia Law School",
    officialProfileHref: "https://www.law.columbia.edu/faculty/eric-talley",
    institutionalProfile: [
      "Columbia Law School lists Talley as Marc and Eva Stern Professor of Law and Business. The official profile describes him as an expert on the intersection of corporate law, governance, and finance, with research and teaching in M&A, quantitative methods, machine learning, contract and commercial law, alternative investments, game theory, and economic analysis of law.",
      "Columbia's profile states that Talley co-directs the Ira M. Millstein Center for Global Markets and Corporate Ownership and directs research and programming on the future of corporate governance and performance. The same page records prior tenured faculty appointments at UC Berkeley and the University of Southern California.",
      "Talley is included because his work links contemporary corporate governance, M&A contracting, fiduciary-duty design, valuation, legal-data construction, and empirical legal studies."
    ]
  },
  "Joseph A. Grundfest": {
    officialProfileSource: "Stanford University",
    officialProfileHref: "https://profiles.stanford.edu/joseph-grundfest",
    institutionalProfile: [
      "Stanford Profiles lists Grundfest as emeritus faculty at Stanford Law School. Stanford SIEPR describes him as Senior Fellow Emeritus and W. A. Franke Professor of Law and Business, Emeritus.",
      "His page is used here for securities litigation, public-company governance, capital-market regulation, and the institutional perspective that comes from his prior service as a commissioner of the U.S. Securities and Exchange Commission."
    ]
  },
  "Ronald J. Gilson": {
    officialProfileSource: "Columbia Law School",
    officialProfileHref: "https://www.law.columbia.edu/faculty/ronald-j-gilson",
    institutionalProfile: [
      "Columbia Law School lists Gilson as Marc and Eva Stern Professor Emeritus of Law and Business and describes him as an expert on the law and economics of corporations and securities. The profile identifies corporate governance, corporate finance, capital markets, complex contracting, mergers and acquisitions, and securities regulation among his areas.",
      "Gilson is included because his work connects market efficiency, transactional law, deal structure, venture capital contracting, corporate governance, and securities regulation."
    ]
  },
  "Henry G. Manne": {
    officialProfileSource: "International Center for Law & Economics",
    officialProfileHref: "https://laweconcenter.org/about/",
    institutionalProfile: [
      "The International Center for Law & Economics describes Henry G. Manne as one of the founders of law and economics, alongside Ronald Coase, Richard Posner, and Guido Calabresi, and notes his role as Dean of George Mason University School of Law and founder of the first academic center devoted to law and economics.",
      "Manne is included because his theory of the market for corporate control made hostile takeovers, tender offers, insider trading, and managerial discipline central subjects for economic analysis of corporate law."
    ]
  },
  "John C. Coates IV": {
    officialProfileSource: "Harvard Law School",
    officialProfileHref: "https://hls.harvard.edu/faculty/john-c-coates/",
    institutionalProfile: [
      "Harvard Law School lists Coates as the John F. Cogan, Jr. Professor of Law and Economics, Deputy Dean, and Research Director of the Center on the Legal Profession. His profile states that he teaches corporate governance, M&A, finance, and related topics and identifies corporate law, mergers and acquisitions, securities regulation, financial institutions, law and economics, and the legal profession among his areas of interest.",
      "Coates is included because his scholarship connects takeover defenses, M&A transaction structure, empirical corporate-law evidence, securities regulation, and the institutional role of business lawyers."
    ]
  },
  "Jeffrey N. Gordon": {
    officialProfileSource: "Columbia Law School",
    officialProfileHref: "https://www.law.columbia.edu/faculty/jeffrey-n-gordon",
    institutionalProfile: [
      "Columbia Law School lists Gordon as Richard Paul Richman Professor of Law and describes his writing and teaching in corporate governance, mergers and acquisitions, comparative corporate governance, and regulation of financial institutions.",
      "Gordon is included because his scholarship links corporate-governance institutions to financial regulation, agency capitalism, shareholder stewardship, and systemic harms."
    ]
  },
  "Henry B. Hansmann": {
    officialProfileSource: "Yale Law School",
    officialProfileHref: "https://law.yale.edu/henry-b-hansmann",
    institutionalProfile: [
      "Yale Law School lists Hansmann as Oscar M. Ruebhausen Professor Emeritus of Law and describes his scholarship as focused on the law and economics of organizational ownership and design.",
      "Hansmann is included because his work on ownership form, organizational law, asset partitioning, nonprofit enterprise, and corporate-law function is foundational for understanding legal entities as economic institutions."
    ]
  },
  "Wesley Newcomb Hohfeld": {
    officialProfileSource: "Yale Law School Center for the Study of Corporate Law",
    officialProfileHref: "https://www.ccl.yale.edu/the-history-of-business-law-at-yale-archives/hohfeld-wesley-n-early-years",
    institutionalProfile: [
      "The Yale Law School Center for the Study of Corporate Law identifies Hohfeld as Southmayd Professor of Law from 1914 to 1918 and notes that he came to Yale from Stanford in 1914. The same archive describes his two-part Yale Law Journal article on fundamental legal conceptions as his most lasting contribution to legal scholarship.",
      "The Yale archive summarizes Hohfeld's framework as an analysis of rights and duties through claims, privileges, powers, and immunities, together with corresponding duties, no-rights, liabilities, and disabilities. This site treats that framework as a method for reading legal materials before turning to incentive, governance, or empirical questions."
    ]
  },
  "Howell E. Jackson": {
    officialProfileSource: "Harvard Law School",
    officialProfileHref: "https://hls.harvard.edu/faculty/howell-e-jackson/",
    institutionalProfile: [
      "Harvard Law School lists Jackson as the James S. Reid, Jr., Professor of Law and identifies his research interests as financial regulation, consumer financial protection, securities regulation, and federal budget policy.",
      "Jackson is included as a core financial-law scholar because his work connects regulatory architecture, public and private enforcement, supervisory institutions, and the allocation of enforcement resources."
    ]
  },
  "Reinier H. Kraakman": {
    officialProfileSource: "Harvard Law School",
    officialProfileHref: "https://hls.harvard.edu/faculty/reinier-h-kraakman/",
    institutionalProfile: [
      "Harvard Law School lists Kraakman as the Ezra Ripley Thayer Professor of Law. His profile emphasizes corporate law, corporate finance, organizational law, corporate governance, and comparative corporate-law scholarship.",
      "He is central to the site's corporate-law architecture because his work, especially The Anatomy of Corporate Law with coauthors, organizes corporate law around agency problems and functional legal strategies."
    ]
  },
  "Marcel Kahan": {
    officialProfileSource: "NYU School of Law",
    officialProfileHref: "https://its.law.nyu.edu/facultyprofiles/index.cfm?fuseaction=profile.overview&personid=20029",
    institutionalProfile: [
      "NYU School of Law lists Kahan as George T. Lowy Professor of Law. His official profile identifies shareholder voting, hedge funds, corporate governance, mergers and acquisitions, and bondholder rights as his main areas of teaching and research.",
      "Kahan is included because his scholarship connects corporate voting, hedge-fund activism, antitakeover law, bondholder governance, and state competition in corporate law."
    ]
  },
  "Guhan Subramanian": {
    officialProfileSource: "Harvard Law School",
    officialProfileHref: "https://hls.harvard.edu/faculty/guhan-subramanian/",
    institutionalProfile: [
      "Harvard Law School lists Subramanian as Joseph H. Flom Professor of Law and Business and H. Douglas Weaver Professor of Business Law at Harvard Business School. His official profile identifies corporate law, corporate finance, corporate governance, mergers and acquisitions, corporate and transactional law, and negotiation among his areas of interest.",
      "Subramanian is included because his scholarship links M&A doctrine, freezeouts, deal protection, negotiation design, and practical public-company transactions."
    ]
  },
  "Rafael La Porta": {
    officialProfileSource: "Brown University Department of Economics",
    officialProfileHref: "https://economics.brown.edu/people/rafael-la-porta",
    institutionalProfile: [
      "Brown University lists La Porta as the Robert and Nancy Carney Professor of Economics and Faculty Director of the J. Nelson Center for Entrepreneurship. The department page identifies law and finance, finance, behavioral finance, and behavioral economics among his research interests.",
      "La Porta is included because his empirical work on investor protection, legal origins, securities laws, and financial development shaped comparative corporate-governance research."
    ]
  },
  "Katharina Pistor": {
    officialProfileSource: "Columbia Law School",
    officialProfileHref: "https://www.law.columbia.edu/faculty/katharina-pistor",
    institutionalProfile: [
      "Columbia Law School lists Pistor as the Edwin B. Parker Professor of Comparative Law and describes her as a scholar of corporate governance, money and finance, property rights, comparative law, and legal institutions.",
      "Pistor is included because her legal-institutional account of capital and finance broadens law and economics beyond incentives alone, emphasizing how legal coding, hierarchy, and institutional design shape markets."
    ]
  },
  "Richard A. Posner": {
    officialProfileSource: "University of Chicago Law School",
    officialProfileHref: "https://www.law.uchicago.edu/faculty/posner-r",
    institutionalProfile: [
      "The University of Chicago Law School lists Posner as Senior Lecturer in Law, retired, and describes his judicial and academic career, including his service on the U.S. Court of Appeals for the Seventh Circuit and his authorship of Economic Analysis of Law.",
      "Posner is included as the major systematizer of economic analysis of law: his work made incentives, costs, efficiency, and institutional behavior legible across many legal fields."
    ]
  },
  "Roberta Romano": {
    officialProfileSource: "Yale Law School",
    officialProfileHref: "https://law.yale.edu/roberta-romano",
    institutionalProfile: [
      "Yale Law School lists Romano as Sterling Professor of Law and Co-Director of the Yale Law School Center for the Study of Corporate Law. Her profile emphasizes state competition for corporate charters, takeover regulation, shareholder litigation, institutional investor activism, securities markets, and financial regulation.",
      "Romano is central for readers studying competitive federalism, Delaware corporate law, securities regulation, and the empirical turn in corporate-law scholarship."
    ]
  },
  "Edward B. Rock": {
    officialProfileSource: "NYU School of Law",
    officialProfileHref: "https://its.law.nyu.edu/facultyprofiles/index.cfm?fuseaction=profile.overview&personid=35610",
    institutionalProfile: [
      "NYU School of Law lists Rock as Martin Lipton Professor of Law and Co-Director of the Institute for Corporate Governance & Finance. His official profile describes his teaching and research as focused on corporate law and corporate governance.",
      "Rock is included because his work connects Delaware corporate law, shareholder voting, hedge-fund activism, proxy access, mergers and acquisitions, and the institutional development of corporate governance."
    ]
  },
  "Mark J. Roe": {
    officialProfileSource: "Harvard Law School",
    officialProfileHref: "https://hls.harvard.edu/faculty/mark-j-roe/",
    institutionalProfile: [
      "Harvard Law School lists Roe as the David Berg Professor of Law and describes his teaching and writing in corporate law, corporate bankruptcy, political determinants of corporate governance, and financial-market structure.",
      "Roe is included because his work connects corporate governance and bankruptcy to political economy, comparative capitalism, financial regulation, and systemic-risk debates."
    ]
  },
  "Steven M. Shavell": {
    officialProfileSource: "Harvard Law School",
    officialProfileHref: "https://hls.harvard.edu/faculty/steven-m-shavell/",
    institutionalProfile: [
      "Harvard Law School lists Shavell as the Samuel R. Rosenthal Professor of Law and Economics and Director of the John M. Olin Center for Law, Economics & Business. His profile emphasizes economic analysis of basic legal fields and legal process.",
      "Shavell's work supplies a general enforcement and deterrence framework for this site, including sanctions, detection probability, liability design, legal process, and welfare analysis."
    ]
  },
  "Andrei Shleifer": {
    officialProfileSource: "Harvard Department of Economics",
    officialProfileHref: "https://www.economics.harvard.edu/people/andrei-shleifer",
    institutionalProfile: [
      "Harvard's Department of Economics lists Shleifer as the John L. Loeb Professor of Economics and describes his work in comparative corporate governance, law and finance, behavioral finance, and institutional economics.",
      "Shleifer is included because his work, often with La Porta, Lopez-de-Silanes, and Vishny, made legal institutions, investor protection, ownership structure, and financial development central to law-and-finance research."
    ]
  },
  "Holger Spamann": {
    officialProfileSource: "Harvard Law School",
    officialProfileHref: "https://hls.harvard.edu/faculty/holger-spamann/",
    institutionalProfile: [
      "Harvard Law School lists Spamann as a corporate-law and law-and-economics scholar. His work is closely associated with empirical comparative law, legal measurement, and reassessment of law-and-finance indices.",
      "Spamann is included to mark a methodological checkpoint: comparative legal data, coding design, index validity, and empirical measurement matter before legal-origin or investor-protection claims can be used responsibly."
    ]
  },
  "Luigi Zingales": {
    officialProfileSource: "University of Chicago Booth School of Business",
    officialProfileHref: "https://www.chicagobooth.edu/faculty/directory/z/luigi-zingales",
    institutionalProfile: [
      "Chicago Booth lists Zingales as the Robert C. McCormack Distinguished Service Professor of Entrepreneurship and Finance. His official profile describes research spanning corporate governance, financial development, political economy, culture, and digital platforms.",
      "Zingales is included because his scholarship links control rights, private benefits, corporate finance, media oversight, political economy, and the institutional conditions for competitive markets."
    ]
  },
  "George J. Stigler": {
    officialProfileSource: "University of Chicago Booth School of Business",
    officialProfileHref: "https://www.chicagobooth.edu/faculty/nobel-laureates/george-stigler",
    institutionalProfile: [
      "Chicago Booth's Nobel-laureate profile identifies Stigler as the 1982 economics laureate and emphasizes his research on industrial structure, market functioning, information, and the causes and effects of public regulation.",
      "Stigler is included because his economic theory of regulation made political incentives and organized interests part of regulatory analysis rather than treating regulation only as a response to market failure."
    ]
  },
  "Elinor Ostrom": {
    officialProfileSource: "Nobel Prize",
    officialProfileHref: "https://www.nobelprize.org/prizes/economic-sciences/2009/ostrom/facts/",
    institutionalProfile: [
      "Nobel Prize materials identify Ostrom as the 2009 economics laureate for her analysis of economic governance, especially the commons, and describe her comparative field research on community management of shared natural resources.",
      "Ostrom is included because her work shows that durable governance can emerge through locally designed rules, monitoring, sanctions, and participation, complicating simple choices between privatization and state control."
    ]
  },
  "Robert C. Ellickson": {
    officialProfileSource: "Yale Law School",
    officialProfileHref: "https://law.yale.edu/robert-c-ellickson",
    institutionalProfile: [
      "Yale Law School lists Ellickson as Walter E. Meyer Professor Emeritus of Property and Urban Law and describes his research on land use, land tenure, social norms, households, community associations, and cities.",
      "Ellickson is included because Order Without Law made informal norms and decentralized dispute resolution central to empirical law-and-economics research on property and social order."
    ]
  },
  "Lisa Bernstein": {
    officialProfileSource: "University of Chicago Law School",
    officialProfileHref: "https://www.law.uchicago.edu/faculty/bernstein",
    institutionalProfile: [
      "The University of Chicago Law School lists Bernstein as Wilson-Dickinson Professor of Law and describes her research in contracts and commercial law, with emphasis on supply chains, relational contracting, private dispute resolution, and the relationship between business practice and public law.",
      "Bernstein is included because her empirical studies of merchant institutions test how reputation, contract design, trade associations, and specialized forums support private ordering."
    ]
  },
  "Louis Kaplow": {
    officialProfileSource: "Harvard Law School",
    officialProfileHref: "https://hls.harvard.edu/faculty/louis-kaplow/",
    institutionalProfile: [
      "Harvard Law School lists Kaplow as Finn M. W. Caspersen and Household International Professor of Law and Economics and describes his scholarship in taxation, antitrust, law and economics, welfare economics, and moral philosophy.",
      "Kaplow is included because his work with Steven Shavell makes the normative criterion of welfare analysis explicit and gives readers a rigorous reference point for debates over efficiency, distribution, and fairness."
    ]
  },
  "A. Douglas Melamed": {
    officialProfileSource: "Stanford Law School",
    officialProfileHref: "https://conferences.law.stanford.edu/directorscollege2022/speakers/douglas-doug-melamed/",
    institutionalProfile: [
      "Stanford Law School identifies Melamed as Professor of the Practice of Law and records his scholarship and professional experience in antitrust, competition policy, litigation, and law and economics.",
      "Melamed is included because his work with Guido Calabresi supplies a canonical framework for comparing property rules, liability rules, and inalienability rules as institutional methods for protecting entitlements."
    ]
  },
  "Michael C. Jensen": {
    officialProfileSource: "Harvard Business School",
    officialProfileHref: "https://www.hbs.edu/news/releases/afaaward",
    institutionalProfile: [
      "Harvard Business School describes Jensen as Jesse Isidor Straus Professor of Business Administration Emeritus and credits his research on agency theory, organizational design, incentives, corporate finance, corporate governance, and law and economics.",
      "Jensen is included because his work made agency costs and free cash flow central to the economic analysis of ownership, monitoring, compensation, leverage, takeovers, and organizational form."
    ]
  },
  "Anat R. Admati": {
    officialProfileSource: "Stanford Graduate School of Business",
    officialProfileHref: "https://www.gsb.stanford.edu/faculty-research/faculty/anat-r-admati",
    institutionalProfile: [
      "Stanford Graduate School of Business lists Admati as George G.C. Parker Professor of Finance and Economics and describes her work on financial-market information, corporate governance, banking, financial regulation, and corporate accountability.",
      "Admati is included because her research and policy work expose the incentive conflicts behind bank leverage and connect financial regulation to broader questions of corporate power, governance, and institutional accountability."
    ]
  },
  "Douglas W. Diamond": {
    officialProfileSource: "Nobel Prize",
    officialProfileHref: "https://www.nobelprize.org/prizes/economic-sciences/2022/diamond/facts/",
    institutionalProfile: [
      "Nobel Prize materials identify Diamond as a 2022 economics laureate for research on banks and financial crises. His work explains delegated monitoring, liquidity creation, and the institutional vulnerability created by bank funding structures.",
      "Diamond is included because modern banking law relies on the mechanisms his research clarifies: monitoring borrowers, transforming maturities, producing liquidity, and managing the fragility that follows."
    ]
  },
  "Philip H. Dybvig": {
    officialProfileSource: "Nobel Prize",
    officialProfileHref: "https://www.nobelprize.org/prizes/economic-sciences/2022/dybvig/facts/",
    institutionalProfile: [
      "Nobel Prize materials identify Dybvig as a 2022 economics laureate for research on banks and financial crises and explain how the Diamond-Dybvig model connects banks' liquidity-provision role to vulnerability to runs.",
      "Dybvig is included because the model provides a foundational economic account of deposit insurance, run prevention, maturity transformation, and banking regulation."
    ]
  },
  "Joseph E. Stiglitz": {
    officialProfileSource: "Nobel Prize",
    officialProfileHref: "https://www.nobelprize.org/prizes/economic-sciences/2001/stiglitz/facts/",
    institutionalProfile: [
      "Nobel Prize materials identify Stiglitz as a 2001 economics laureate for analysis of markets with asymmetric information and emphasize his work on screening, self-selection, and the behavior of imperfectly informed market participants.",
      "Stiglitz is included because information asymmetry is a central mechanism in securities disclosure, credit rationing, insurance regulation, consumer protection, and institutional responses to market failure."
    ]
  },
  "Jennifer H. Arlen": {
    officialProfileSource: "NYU School of Law",
    officialProfileHref: "https://its.law.nyu.edu/facultyprofiles/index.cfm?fuseaction=profile.overview&personid=20658",
    institutionalProfile: [
      "NYU School of Law lists Arlen as Norma Z. Paige Professor of Law and Director of the Program on Corporate Compliance and Enforcement and the Center for Law, Economics and Organization. Her profile identifies corporate liability, internal controls, compliance, behavioral law and economics, and securities fraud as core research areas.",
      "Arlen is included because her work adapts deterrence theory to organizations, where liability rules affect employee monitoring, self-reporting, cooperation, compliance investment, and the division of sanctions between firms and individual wrongdoers."
    ]
  },
  "Ian Ayres": {
    officialProfileSource: "Yale Law School",
    officialProfileHref: "https://law.yale.edu/ian-ayres",
    institutionalProfile: [
      "Yale Law School identifies Ayres as the Oscar M. Ruebhausen Professor of Law and Professor of Public Health and describes them as both a lawyer and an economist. The profile lists law and economics, contracts, corporate finance, and quantitative methods among their teaching areas.",
      "Ayres is included because the penalty-default framework developed with Robert Gertner remains a foundational account of how legal defaults can induce information revelation rather than merely approximate the term most parties would choose."
    ]
  },
  "Kathryn E. Spier": {
    officialProfileSource: "Harvard Law School",
    officialProfileHref: "https://hls.harvard.edu/faculty/kathryn-e-spier/",
    institutionalProfile: [
      "Harvard Law School lists Spier as Domenico De Sole Professor of Law and describes her research and teaching at the intersection of law, economics, and business strategy. Her work uses economic models to study litigation, settlement, contracts, liability, and legal procedure.",
      "Spier is included because her sequential-bargaining models explain deadline effects, delay, and trial selection and make the litigation process itself an object of economic and institutional analysis."
    ]
  },
  "Henry E. Smith": {
    officialProfileSource: "Harvard Law School",
    officialProfileHref: "https://hls.harvard.edu/ils/international-resources/faculty/faculty-snapshot-henry-e-smith/",
    institutionalProfile: [
      "Harvard Law School identifies Smith as Fessenden Professor of Law and Director of the Project on the Foundations of Private Law. The institutional profile highlights his work on property and the information-cost structure of legal relations.",
      "Smith is included because his exclusion, governance, and modularity framework explains why property law often uses standardized, thing-based forms instead of specifying every bilateral legal relation."
    ]
  },
  "Alan Schwartz": {
    officialProfileSource: "Yale Law School",
    officialProfileHref: "https://law.yale.edu/alan-schwartz",
    institutionalProfile: [
      "Yale Law School lists Schwartz as Sterling Professor Emeritus of Law and identifies corporate finance, corporate governance, mergers and acquisitions, bankruptcy, contracts, and commercial transactions among his specialties.",
      "Schwartz is included because his contract scholarship draws a careful boundary between transactions where defaults can support sophisticated parties and settings where information, verification, or enforcement problems may justify stronger intervention."
    ]
  },
  "Frank Partnoy": {
    officialProfileSource: "UC Berkeley Law",
    officialProfileHref: "https://www.law.berkeley.edu/our-faculty/faculty-profiles/frank-partnoy/",
    institutionalProfile: [
      "UC Berkeley Law lists Partnoy as Adrian A. Kragen Professor of Law and describes his scholarship on business law, financial markets, fraud, securities litigation, and derivatives.",
      "Partnoy is included because his work shows how legal categories influence financial engineering and how credit-rating agencies, auditors, lawyers, and other gatekeepers respond to liability and reputational incentives."
    ]
  },
  "Steven L. Schwarcz": {
    officialProfileSource: "Duke University School of Law",
    officialProfileHref: "https://law.duke.edu/fac/schwarcz/",
    institutionalProfile: [
      "Duke Law identifies Schwarcz as Stanley A. Star Distinguished Professor of Law & Business and lists insolvency, bankruptcy, international finance, capital markets, systemic risk, corporate governance, and commercial law among his research areas.",
      "Schwarcz is included because his work links the transactional structure of securitization and shadow banking to the externalities, coordination failures, and transmission channels that justify systemic-risk regulation."
    ]
  },
  "Alessio M. Pacces": {
    officialProfileSource: "University of Amsterdam",
    officialProfileHref: "https://www.uva.nl/en/profile/p/a/a.m.pacces/a.m.pacces.html",
    institutionalProfile: [
      "The University of Amsterdam lists Pacces as Professor of Law and Finance at the Amsterdam Law School and Amsterdam Business School and Director of the Amsterdam Center for Law & Economics. His profile identifies corporate control, financial stability, shadow banking, sustainable corporate governance, and climate disclosure among his research areas.",
      "Pacces is included because his work brings the law and economics of control powers and financial intermediation into a comparative European setting, linking investor protection to the allocation and possible abuse of corporate authority."
    ]
  },
  "Marco Becht": {
    officialProfileSource: "European Corporate Governance Institute",
    officialProfileHref: "https://www.ecgi.global/network/our-members/marco-becht",
    institutionalProfile: [
      "The European Corporate Governance Institute identifies Becht as Professor of Finance and Goldschmidt Chair Professor of Corporate Governance and Stewardship at the Solvay Brussels School of Economics and Management, Université libre de Bruxelles. It also records his role as an ECGI founder and Executive Director.",
      "Becht is included because his research combines comparative governance institutions with close empirical study of ownership, control, institutional investors, and shareholder activism."
    ]
  },
  "Martin F. Hellwig": {
    officialProfileSource: "Max Planck Institute for Behavioral Economics",
    officialProfileHref: "https://www.econ.mpg.de/martin-hellwig",
    institutionalProfile: [
      "The Max Planck Institute lists Hellwig as Director emeritus and describes his research in information, incentives, equilibrium, financial markets and institutions, macroeconomics, and monetary theory.",
      "Hellwig is included because his work explains how securitization, maturity transformation, leverage, accounting rules, and inadequate bank equity can interact to create systemic risk that firm-by-firm supervision does not contain."
    ]
  },
  "Jean Tirole": {
    officialProfileSource: "Toulouse School of Economics",
    officialProfileHref: "https://www.tse-fr.eu/people/jean-tirole",
    institutionalProfile: [
      "The Toulouse School of Economics identifies Tirole as honorary chairman of the Jean-Jacques Laffont Foundation–TSE and IAST and scientific director of TSE-Partnership. His profile lists industrial organization, regulation, organization theory, game theory, finance, macroeconomics, and psychology as research interests.",
      "Tirole is included because his incentive and information frameworks connect the economic theory of regulation to corporate finance and the prudential oversight of financial intermediaries."
    ]
  },
  "Mathias Siems": {
    officialProfileSource: "European University Institute",
    officialProfileHref: "https://www.eui.eu/people?id=mathias-siems",
    institutionalProfile: [
      "The European University Institute lists Siems as Professor of Private Law and Market Regulation. His profile identifies corporate and securities law, comparative law, law and economics, and empirical legal methods as his principal fields.",
      "Siems is included because his scholarship helps researchers combine contextual comparison with quantitative legal evidence while remaining attentive to legal families, transplants, enforcement, and institutional change."
    ]
  },
  "Colin Mayer": {
    officialProfileSource: "University of Oxford Department of Economics",
    officialProfileHref: "https://www.economics.ox.ac.uk/people/colin-mayer",
    institutionalProfile: [
      "The University of Oxford identifies Mayer with the Saïd Business School and records his work in corporate finance and governance. Oxford materials also describe his research on ownership, regulation, trust, and the role of the corporation in society.",
      "Mayer is included because his scholarship joins empirical comparison of European ownership structures to institutional questions about corporate commitment, purpose, accountability, and long-term value creation."
    ]
  },
  "Klaus J. Hopt": {
    officialProfileSource: "University of Hamburg Faculty of Law",
    officialProfileHref: "https://www.jura.uni-hamburg.de/en/die-fakultaet/personenverzeichnis/hopt-klaus-j.html",
    institutionalProfile: [
      "The University of Hamburg identifies Hopt as Professor emeritus and records his longstanding affiliation with the Max Planck Institute. His research and publications span company law, capital-market law, banking law, comparative corporate governance, and European legal development.",
      "Hopt is included because comparative governance requires attention to the legal and institutional differences among boards, ownership structures, banks, intermediaries, and investor-protection regimes rather than assuming a single corporate model."
    ]
  },
  "Paul L. Davies": {
    officialProfileSource: "University of Oxford Faculty of Law",
    officialProfileHref: "https://www.law.ox.ac.uk/people/paul-davies-qc-hon",
    institutionalProfile: [
      "The University of Oxford lists Davies as Professor of Corporate Law Emeritus and describes his research in corporate law, corporate finance, securities regulation, and bank regulation. The profile also records his authorship and coauthorship of major company-law treatises and comparative works.",
      "Davies is included because his scholarship clarifies how the legal structure of the company coordinates directors, shareholders, creditors, and market institutions in the United Kingdom and in comparative perspective."
    ]
  },
  "Jennifer Payne": {
    officialProfileSource: "University of Oxford Faculty of Law",
    officialProfileHref: "https://www.law.ox.ac.uk/people/jennifer-payne",
    institutionalProfile: [
      "The University of Oxford identifies Payne as Warden of Merton College and records her work in company law, corporate finance law, corporate insolvency, restructuring, and financial regulation, including research on schemes of arrangement and corporate rescue.",
      "Payne is included because corporate-finance law is not only a set of accounting or valuation concepts: it allocates priority, control, information rights, and exit options among firms, investors, creditors, courts, and regulators."
    ]
  },
  "Wolf-Georg Ringe": {
    officialProfileSource: "University of Hamburg Faculty of Law",
    officialProfileHref: "https://www.jura.uni-hamburg.de/die-fakultaet/personenverzeichnis/ringe-georg.html",
    institutionalProfile: [
      "The University of Hamburg identifies Ringe as Professor of Law and Finance and Director of the Institute of Law and Economics. His profile lists corporate law, capital-market law, financial regulation, restructuring, comparative law, and law and economics among his fields.",
      "Ringe is included because his research shows how financial techniques can separate voting, ownership, and economic exposure and how regulatory competition and market integration reshape European corporate governance."
    ]
  },
  "Marco Pagano": {
    officialProfileSource: "Centre for Studies in Economics and Finance",
    officialProfileHref: "https://csef.it/people/marco-pagano/",
    institutionalProfile: [
      "The Centre for Studies in Economics and Finance identifies Pagano as Professor of Finance at the University of Naples Federico II and records his research in banking, corporate finance, financial-market microstructure, and law and finance.",
      "Pagano is included because his work links legal and information institutions to financial development, credit markets, corporate governance, and the political coalitions that shape investor protection."
    ]
  },
  "Mathias Dewatripont": {
    officialProfileSource: "Université libre de Bruxelles",
    officialProfileHref: "https://actus.ulb.be/fr/ulb-medias/esprit-libre/derniers-numeros/portrait-de-mathias-dewatripont",
    institutionalProfile: [
      "The Université libre de Bruxelles describes Dewatripont's research in contract theory, industrial organization, organizational governance, and banking regulation and records his role in founding ECARES, his academic leadership, and his service at the National Bank of Belgium.",
      "Dewatripont is included because contract theory and prudential regulation share a central problem: how institutions should allocate authority and incentives when information is incomplete and private decisions can impose public costs."
    ]
  },
  "Xavier Freixas": {
    officialProfileSource: "Barcelona School of Economics",
    officialProfileHref: "https://bse.eu/people/freixas-xavier",
    institutionalProfile: [
      "The Barcelona School of Economics identifies Freixas as Emeritus Research Professor and Emeritus Professor of Universitat Pompeu Fabra. It describes his research on banking under asymmetric information, relationship banking, systemic risk, contagion, and lender-of-last-resort policy.",
      "Freixas is included because the legal design of banking supervision, liquidity assistance, resolution, and payment systems depends on the interbank and contagion mechanisms his research makes explicit."
    ]
  },
  "Renée B. Adams": {
    officialProfileSource: "Renée B. Adams academic website",
    officialProfileHref: "https://renee-adams.com/",
    institutionalProfile: [
      "Adams's academic website identifies her as Professor of Finance at the University of Oxford and describes her work on corporate governance, bank governance, gender, boards, group decision-making, and organizational outcomes.",
      "Adams is included because board research benefits from direct evidence about director roles, committee work, incentives, composition, and interactions rather than relying only on formal allocation of authority in company law."
    ]
  },
  "Julian Franks": {
    officialProfileSource: "London Business School",
    officialProfileHref: "https://www.london.edu/faculty-and-research/faculty-profiles/f/franks-jr",
    institutionalProfile: [
      "London Business School identifies Franks as Emeritus Professor of Finance and describes his research on bankruptcy and financial distress, corporate ownership and control, shareholder activism, the cost of capital, and regulation.",
      "Franks is included because his comparative and historical evidence reveals how ownership, insolvency, investor engagement, and regulation jointly shape the development of European corporate-governance systems."
    ]
  },
  "Simon Deakin": {
    officialProfileSource: "Cambridge Judge Business School",
    officialProfileHref: "https://www.jbs.cam.ac.uk/people/simon-deakin/",
    institutionalProfile: [
      "Cambridge Judge Business School identifies Deakin as Professor of Law and Director of the Centre for Business Research. His profile describes work in the economic and empirical analysis of law, corporate governance, labour law, private law, and legal-institutional change.",
      "Deakin is included because his legal-institutionalist and empirical work provides a European counterpoint to approaches that treat law as external correction of otherwise complete markets."
    ]
  },
  "Patrick Bolton": {
    officialProfileSource: "Imperial College Business School",
    officialProfileHref: "https://www.imperial.ac.uk/business-school/authors/pbolton",
    institutionalProfile: [
      "Imperial College Business School identifies Bolton as Professor of Finance and Economics and Research Director of its Centre for Climate Finance and Investment. Its profile records his work in contract theory, corporate finance, financial intermediation, institutions, and public policy.",
      "Bolton is included because incomplete contracts and creditor coordination are central to the legal allocation of control in firms, debt structures, restructurings, and long-term financing relationships."
    ]
  },
  "Daniel Ferreira": {
    officialProfileSource: "London School of Economics and Political Science",
    officialProfileHref: "https://www.lse.ac.uk/people/daniel-ferreira",
    institutionalProfile: [
      "The London School of Economics identifies Ferreira as Professor of Finance and describes his research at the intersection of corporate finance and organizational economics, with a particular focus on boards and corporate governance.",
      "Ferreira is included because board law and policy require evidence about monitoring, advice, independence, diversity, and information exchange rather than relying on formal board structure alone."
    ]
  },
  "Franklin Allen": {
    officialProfileSource: "Imperial College Business School",
    officialProfileHref: "https://www.imperial.ac.uk/business-school/authors/fallen",
    institutionalProfile: [
      "Imperial College Business School identifies Allen as Professor of Finance and Economics and Executive Director of the Brevan Howard Centre for Financial Analysis. His research spans comparative financial systems, crises, contagion, and corporate finance.",
      "Allen is included because financial regulation depends on how different market and banking architectures allocate liquidity, information, and losses during ordinary conditions and systemic stress."
    ]
  },
  "Jean-Charles Rochet": {
    officialProfileSource: "University of Geneva School of Economics and Management",
    officialProfileHref:
      "https://www.unige.ch/gsem/fr/recherche/corps-professoral/honoraires/jean-charles-rochet",
    institutionalProfile: [
      "The University of Geneva lists Rochet as Honorary Professor and records his research and publications in banking, financial stability, the industrial organization of financial markets, and contract theory.",
      "Rochet is included because interbank connections, liquidity provision, and supervisory intervention transform private banking contracts into public financial-stability questions."
    ]
  },
  "Charles A. E. Goodhart": {
    officialProfileSource: "London School of Economics and Political Science",
    officialProfileHref: "https://www.lse.ac.uk/Economic-History/Financial-History-Group/People",
    institutionalProfile: [
      "The London School of Economics identifies Goodhart as Emeritus Professor in its Department of Finance and lists central banking, financial regulation, monetary policy, and their historical development among his research interests.",
      "Goodhart is included because his work treats central banks and supervisory regimes as evolving institutions whose jurisdictional boundaries, incentives, and historical mandates shape financial stability."
    ]
  },
  "Thorsten Beck": {
    officialProfileSource: "European University Institute",
    officialProfileHref: "https://www.eui.eu/people?id=thorsten-harald-leopold-beck",
    institutionalProfile: [
      "The European University Institute identifies Beck as Professor of Financial Stability and Director of the Florence School of Banking and Finance. Its profile records his research on banking, financial stability, inclusion, and finance and society.",
      "Beck is included because comparative law-and-finance claims should be connected to evidence on banking structure, competition, institutional quality, and the limits of legal-origin measures."
    ]
  },
  "David Kershaw": {
    officialProfileSource: "London School of Economics and Political Science",
    officialProfileHref: "https://www.lse.ac.uk/people/david-kershaw",
    institutionalProfile: [
      "The London School of Economics identifies Kershaw as Professor of Law and lists UK and U.S. corporate law, takeover regulation, and accounting regulation as his principal research areas.",
      "Kershaw is included because his scholarship combines close doctrinal analysis with historical and functional inquiry into fiduciary law, takeover rules, self-regulation, and the institutional production of corporate law."
    ]
  }
};

export function getScholarSlug(name: string) {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/jr\.?/g, "jr")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function getAllScholars(): ScholarRecord[] {
  return SCHOLAR_PROFILES.map((profile) => {
    const surname = SCHOLAR_SURNAMES[profile.name];
    const details = SCHOLAR_DETAILS[profile.name];

    if (!surname || !details) {
      throw new Error(`Missing scholar metadata for ${profile.name}`);
    }

    return {
      ...profile,
      ...details,
      slug: getScholarSlug(profile.name),
      surname,
      sortLetter: surname[0].toUpperCase()
    };
  }).sort((first, second) => {
    const surnameOrder = first.surname.localeCompare(second.surname);
    return surnameOrder || first.name.localeCompare(second.name);
  });
}

export function getScholarBySlug(slug: string) {
  return getAllScholars().find((scholar) => scholar.slug === slug);
}

export function getScholarLetters() {
  return Array.from(new Set(getAllScholars().map((scholar) => scholar.sortLetter)));
}

function normalizeScholarText(value: string) {
  return value
    .toLowerCase()
    .replace(/jr\.?/g, "jr")
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function getScholarsForText(text: string, limit = 6) {
  const normalizedText = normalizeScholarText(text);

  return getAllScholars()
    .map((scholar) => {
      const normalizedName = normalizeScholarText(scholar.name);
      const normalizedSurname = normalizeScholarText(scholar.surname);
      const fieldScore = scholar.fields.filter((field) => normalizedText.includes(normalizeScholarText(field))).length;
      const workScore = scholar.majorWorks.filter((work) => normalizedText.includes(normalizeScholarText(work))).length;
      const score =
        (normalizedText.includes(normalizedName) ? 6 : 0) +
        (normalizedText.includes(normalizedSurname) ? 3 : 0) +
        fieldScore +
        workScore;

      return { scholar, score };
    })
    .filter((item) => item.score > 0)
    .sort((first, second) => second.score - first.score || first.scholar.surname.localeCompare(second.scholar.surname))
    .slice(0, limit)
    .map((item) => item.scholar);
}
