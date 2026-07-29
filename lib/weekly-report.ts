export type LatestResearchItem = {
  title: string;
  authors: string;
  releaseDate: string;
  publicationStatus: string;
  field: string;
  sourceLabel: string;
  sourceHref: string;
  researchQuestion: string;
  method: string;
  contribution: string;
  caveat: string;
  tags: string[];
};

export type WeeklyReportIssue = {
  issue: string;
  publishedAt: string;
  period: string;
  headline: string;
  editorialNote: string;
  coverageNote: string;
  latestResearch: LatestResearchItem[];
  methodsInIssue: {
    label: string;
    description: string;
  }[];
  watchlist: string[];
};

export const WEEKLY_REPORT: WeeklyReportIssue = {
  issue: "Issue 002",
  publishedAt: "28 July 2026",
  period: "Sources checked through 28 July 2026",
  headline: "Five new papers on antitrust, tax transparency, social insurance, and fiscal capacity",
  editorialNote:
    "Research Weekly is a discovery feed for newly released law-and-economics scholarship. Each entry identifies the publication status, source date, research question, method, principal contribution, and an interpretive caution before linking to the primary repository record.",
  coverageNote:
    "This issue collects working papers newly surfaced in the current NBER feed. The primary records identify July 2026 as the issue month but do not supply an exact posting day; the entries therefore reproduce the source metadata rather than treating the archive's check date as a release date.",
  latestResearch: [
    {
      title: "Who Wants to Break Up Big Firms? Harm, Fairness, and the Demand for Antitrust",
      authors: "Ricardo Perez-Truglia and Jeffrey Yusof",
      releaseDate: "July 2026 · exact posting day not supplied",
      publicationStatus: "NBER Working Paper 35503",
      field: "Antitrust · Behavioral law and economics",
      sourceLabel: "NBER",
      sourceHref: "https://www.nber.org/papers/w35503",
      researchQuestion:
        "Which beliefs—market share, consumer harm, unfair competition, or corporate image—shape public support for antitrust intervention?",
      method:
        "A preregistered information-provision experiment with 4,000 U.S. households uses five real antitrust cases and randomized belief treatments.",
      contribution:
        "Information about consumer harm produces the most systematic support for plaintiffs, break-ups, conduct remedies, and broader antitrust policy, while market-share information alone has no meaningful effect.",
      caveat:
        "The experiment measures stated policy preferences in a U.S. sample, not regulator behavior or the welfare effects of actual remedies; results may depend on the selected cases and information frames.",
      tags: ["Consumer harm", "Public opinion", "Information experiment", "Remedies"]
    },
    {
      title: "Global Financial Transparency and Offshore Wealth Accumulation",
      authors: "Annette Alstadsæter, Niels Johannesen, Ségal Le Guern Herry, and Gabriel Zucman",
      releaseDate: "July 2026 · exact posting day not supplied",
      publicationStatus: "NBER Working Paper 35505",
      field: "Tax · Financial transparency",
      sourceLabel: "NBER",
      sourceHref: "https://www.nber.org/papers/w35505",
      researchQuestion:
        "Does automatic exchange of bank-account information deter wealthy taxpayers from moving assets offshore or using more complex ownership structures?",
      method:
        "Linked Norwegian administrative data trace wealth flows to offshore financial centers before and after the expansion of automatic information exchange.",
      contribution:
        "The authors report fewer new offshore transfers by newly wealthy taxpayers, a weaker link between offshore flows and reduced domestic tax payments, and no offsetting rise in complex ownership structures.",
      caveat:
        "The evidence comes from Norway and a major international reporting reform; institutional capacity, pre-reform enforcement, and available avoidance channels may limit external validity.",
      tags: ["Offshore wealth", "Tax evasion", "Information exchange", "Administrative data"]
    },
    {
      title: "The Welfare Effects of Conditioning the Potential Duration of UI Benefits on Prior Work History",
      authors: "Leonard Goff and Simon Quach",
      releaseDate: "July 2026 · exact posting day not supplied",
      publicationStatus: "NBER Working Paper 35524",
      field: "Social insurance · Labor",
      sourceLabel: "NBER",
      sourceHref: "https://www.nber.org/papers/w35524",
      researchQuestion:
        "Should unemployment-insurance benefit duration vary with a claimant's prior work history rather than rise uniformly?",
      method:
        "Canadian administrative records from 1997–2018 support 25 regression-discontinuity designs at thresholds where prior hours worked change potential benefit duration.",
      contribution:
        "An additional benefit week lengthens unemployment by 0.30 weeks and costs the government $96 on average; the estimated fiscal externality of a uniform extension is 76% larger than one targeted at claimants with short work histories.",
      caveat:
        "The welfare comparison combines local threshold estimates with a sufficient-statistics framework; its policy ranking depends on marginal-value assumptions and the Canadian UI setting.",
      tags: ["Unemployment insurance", "Regression discontinuity", "Benefit duration", "Welfare"]
    },
    {
      title: "Personal Holding Companies, Tax Progressivity, and Inequality",
      authors: "Marius A. K. Ring, David G. Seim, and Gabriel Zucman",
      releaseDate: "July 2026 · exact posting day not supplied",
      publicationStatus: "NBER Working Paper 35534",
      field: "Corporate tax · Distribution",
      sourceLabel: "NBER",
      sourceHref: "https://www.nber.org/papers/w35534",
      researchQuestion:
        "How do closely held personal holding companies affect effective tax progressivity and measured top-income inequality?",
      method:
        "Twenty years of linked firm-owner administrative microdata from Sweden and Norway are combined with event studies of shocks to operating firms' value added.",
      contribution:
        "The paper finds that holding companies shelter around half of dividend distributions from individual income tax and that retained corporate income materially changes measured effective tax rates and cross-country inequality comparisons.",
      caveat:
        "The estimates rely on institutional definitions, private-business valuations, and Nordic tax rules; comparisons with the United States require attention to different anti-deferral regimes.",
      tags: ["Holding companies", "Tax deferral", "Top incomes", "Linked administrative data"]
    },
    {
      title: "Does Progressivity Raise Tax Capacity? Experimental Evidence from the D.R. Congo",
      authors:
        "Gabriel Z. Tourek, Arthur Laroche, Augustin Bergeron, Joana Naritomi, Jonathan L. Weigel, and Marina Mavungu Ngoma",
      releaseDate: "July 2026 · exact posting day not supplied",
      publicationStatus: "NBER Working Paper 35536",
      field: "Property tax · State capacity",
      sourceLabel: "NBER",
      sourceHref: "https://www.nber.org/papers/w35536",
      researchQuestion:
        "Can a progressive property-tax schedule raise revenue and compliance in a low-income setting, and what enforcement is needed to make effective burdens progressive?",
      method:
        "A citywide field experiment randomly assigns neighborhoods in Kananga to progressive or proportional tax schedules, with cross-randomized information treatments and later targeted enforcement.",
      contribution:
        "The progressive schedule raises revenue by 56% relative to the proportional schedule; lower liabilities improve compliance at the bottom, while targeted enforcement is needed to align effective rates with statutory progressivity at the top.",
      caveat:
        "The initial progressive schedule still produces regressive effective rates before targeted enforcement. Results come from one city and a government-research partnership, so implementation capacity is part of the treatment context.",
      tags: ["Property taxation", "Field experiment", "Compliance", "Enforcement"]
    }
  ],
  methodsInIssue: [
    {
      label: "Preregistered information experiment",
      description: "Used to separate the effects of perceived harm, market share, fairness, and reputation on antitrust preferences."
    },
    {
      label: "Linked administrative data",
      description: "Used to follow offshore wealth, firm ownership, retained income, tax payments, and benefit claims at fine institutional detail."
    },
    {
      label: "Regression discontinuity",
      description: "Used to estimate the local fiscal and behavioral effects of additional unemployment-insurance duration at statutory thresholds."
    },
    {
      label: "Citywide field experiment",
      description: "Used to compare progressive and proportional property-tax schedules and isolate the complementary role of enforcement."
    },
    {
      label: "Sufficient-statistics welfare analysis",
      description: "Used to translate estimated behavioral and fiscal responses into a comparison of alternative benefit-allocation rules."
    }
  ],
  watchlist: [
    "Whether antitrust preferences induced by information persist beyond stated surveys and influence voting, complaints, or enforcement legitimacy.",
    "Whether automatic information exchange shifts avoidance toward assets, intermediaries, or jurisdictions not covered by the reporting architecture.",
    "How unemployment-insurance targeting changes when liquidity value, job quality, and general-equilibrium labor-market effects are incorporated.",
    "Which anti-deferral and valuation rules can tax retained personal-company income without discouraging productive investment.",
    "Whether progressive property-tax schedules remain revenue-enhancing when implemented without unusually intensive data collection and targeted enforcement."
  ]
};

export const WEEKLY_REPORT_SCHEDULE = {
  label: "Every Monday · 08:00",
  timezone: "China Standard Time (UTC+8)",
  nextUpdate: "3 August 2026 · 08:00"
};
