"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type ScholarMatchCandidate = {
  slug: string;
  name: string;
  role: string;
  fields: string[];
  summary: string;
};

type QuizChoice = {
  label: string;
  description: string;
  weights: string[];
};

type QuizQuestion = {
  prompt: string;
  choices: QuizChoice[];
};

type StoredQuizState = {
  answers: Record<string, number>;
  currentQuestionIndex: number;
};

const QUIZ_STORAGE_KEY = "law-econ-scholar-match-state";

const quizQuestions: QuizQuestion[] = [
  {
    prompt: "What kind of legal problem most naturally catches your attention?",
    choices: [
      {
        label: "Institutional friction",
        description: "Why firms, markets, contracts, courts, or regulators organize exchange differently.",
        weights: ["ronald-h-coase", "oliver-e-williamson", "reinier-h-kraakman"]
      },
      {
        label: "Accidents and deterrence",
        description: "How liability, sanctions, precautions, and enforcement costs shape behavior.",
        weights: ["guido-calabresi", "steven-m-shavell", "a-mitchell-polinsky"]
      },
      {
        label: "Corporate control",
        description: "How boards, shareholders, managers, activists, and bidders allocate power.",
        weights: ["lucian-a-bebchuk", "ronald-j-gilson", "eric-l-talley"]
      },
      {
        label: "Market information",
        description: "How prices, disclosure, intermediaries, and enforcement produce reliable signals.",
        weights: ["eugene-f-fama", "john-c-coffee-jr", "niamh-moloney"]
      }
    ]
  },
  {
    prompt: "Which analytical style feels closest to yours?",
    choices: [
      {
        label: "Conceptual clarification",
        description: "First define the legal relation precisely, then ask what follows.",
        weights: ["wesley-newcomb-hohfeld", "reinier-h-kraakman", "henry-b-hansmann"]
      },
      {
        label: "Model and mechanism",
        description: "Reduce the problem to incentives, information, constraints, and comparative institutions.",
        weights: ["richard-a-posner", "steven-m-shavell", "ronald-h-coase"]
      },
      {
        label: "Empirical institutionalism",
        description: "Use variation across firms, markets, jurisdictions, or transactions to test claims.",
        weights: ["lucian-a-bebchuk", "john-c-coates-iv", "eric-l-talley"]
      },
      {
        label: "Behavioral realism",
        description: "Ask when legal actors depart from standard rational-actor assumptions.",
        weights: ["christine-jolls", "daniel-kahneman", "oren-bar-gill"]
      }
    ]
  },
  {
    prompt: "When reading a corporate-law dispute, what do you look for first?",
    choices: [
      {
        label: "Agency conflict",
        description: "Who controls the decision, who bears the cost, and who can monitor whom.",
        weights: ["lucian-a-bebchuk", "reinier-h-kraakman", "henry-b-hansmann"]
      },
      {
        label: "Deal architecture",
        description: "How transaction terms, lawyers, bargaining, and timing create or destroy value.",
        weights: ["ronald-j-gilson", "guhan-subramanian", "eric-l-talley"]
      },
      {
        label: "Comparative ownership",
        description: "How ownership, investor protection, and legal origin vary across systems.",
        weights: ["rafael-la-porta", "andrei-shleifer", "holger-spamann"]
      },
      {
        label: "Entity design",
        description: "How legal personality, asset partitioning, and ownership form structure enterprise.",
        weights: ["henry-b-hansmann", "reinier-h-kraakman", "john-armour"]
      }
    ]
  },
  {
    prompt: "Which institutional concern seems most urgent?",
    choices: [
      {
        label: "Private ordering",
        description: "Let parties bargain where legal rules can reduce transaction costs.",
        weights: ["ronald-h-coase", "ronald-j-gilson", "roberta-romano"]
      },
      {
        label: "Regulatory capacity",
        description: "Design disclosure, supervision, and enforcement around institutional limits.",
        weights: ["john-c-coffee-jr", "niamh-moloney", "howell-e-jackson"]
      },
      {
        label: "Systemic finance",
        description: "Understand how legal design shapes fragility, liquidity, and crisis propagation.",
        weights: ["katharina-pistor", "markus-k-brunnermeier", "ben-s-bernanke"]
      },
      {
        label: "Shareholder choice",
        description: "Limit managerial entrenchment and let investors decide on control contests.",
        weights: ["henry-g-manne", "lucian-a-bebchuk", "guhan-subramanian"]
      }
    ]
  },
  {
    prompt: "What kind of evidence would make you most confident?",
    choices: [
      {
        label: "Canonical theory",
        description: "A durable framework that reorganizes how the field understands legal institutions.",
        weights: ["ronald-h-coase", "guido-calabresi", "wesley-newcomb-hohfeld"]
      },
      {
        label: "Market data",
        description: "Prices, returns, ownership structures, transaction outcomes, and enforcement evidence.",
        weights: ["eugene-f-fama", "john-c-coates-iv", "eric-l-talley"]
      },
      {
        label: "Doctrinal architecture",
        description: "A careful reading of legal rules, cases, and institutional constraints.",
        weights: ["reinier-h-kraakman", "niamh-moloney", "guhan-subramanian"]
      },
      {
        label: "Behavioral evidence",
        description: "Experimental, psychological, or decision-theoretic evidence about actual behavior.",
        weights: ["christine-jolls", "daniel-kahneman", "oren-bar-gill"]
      }
    ]
  },
  {
    prompt: "Which sentence sounds most like a research question you would ask?",
    choices: [
      {
        label: "Why does this institution exist?",
        description: "The puzzle is the choice among market, firm, contract, court, and regulator.",
        weights: ["ronald-h-coase", "oliver-e-williamson", "henry-b-hansmann"]
      },
      {
        label: "Who should decide?",
        description: "The puzzle is the allocation of authority among boards, shareholders, courts, and regulators.",
        weights: ["lucian-a-bebchuk", "reinier-h-kraakman", "henry-g-manne"]
      },
      {
        label: "What does the market know?",
        description: "The puzzle is how information reaches price, disclosure, and investor protection.",
        weights: ["eugene-f-fama", "ronald-j-gilson", "john-c-coffee-jr"]
      },
      {
        label: "What happens when law meets crisis?",
        description: "The puzzle is how rules change under stress, uncertainty, liquidity pressure, and public intervention.",
        weights: ["katharina-pistor", "markus-k-brunnermeier", "niamh-moloney"]
      }
    ]
  },
  {
    prompt: "Which legal institution would you most want to compare across jurisdictions?",
    choices: [
      {
        label: "Corporate forms",
        description: "How legal personality, ownership, creditor protection, and governance rules travel across systems.",
        weights: ["henry-b-hansmann", "john-armour", "reinier-h-kraakman"]
      },
      {
        label: "Securities enforcement",
        description: "How public agencies, private litigation, gatekeepers, and sanctions shape disclosure incentives.",
        weights: ["john-c-coffee-jr", "howell-e-jackson", "roberta-romano"]
      },
      {
        label: "Investor protection",
        description: "How shareholder rights, legal origin, and enforcement capacity relate to financial development.",
        weights: ["rafael-la-porta", "andrei-shleifer", "holger-spamann"]
      },
      {
        label: "Financial stability",
        description: "How bank supervision, liquidity support, and crisis law allocate losses under stress.",
        weights: ["katharina-pistor", "ben-s-bernanke", "markus-k-brunnermeier"]
      }
    ]
  },
  {
    prompt: "What kind of scholar profile would you most likely keep returning to?",
    choices: [
      {
        label: "Foundational theorist",
        description: "Someone who changes the vocabulary through which legal institutions are understood.",
        weights: ["ronald-h-coase", "guido-calabresi", "wesley-newcomb-hohfeld"]
      },
      {
        label: "Institutional designer",
        description: "Someone who studies how rules allocate authority, information, and control rights.",
        weights: ["reinier-h-kraakman", "henry-b-hansmann", "john-armour"]
      },
      {
        label: "Market empiricist",
        description: "Someone who uses market evidence to discipline claims about information and governance.",
        weights: ["eugene-f-fama", "bernard-s-black", "john-c-coates-iv"]
      },
      {
        label: "Regulatory analyst",
        description: "Someone who connects legal design to supervision, enforcement, and institutional capacity.",
        weights: ["niamh-moloney", "howell-e-jackson", "john-c-coffee-jr"]
      }
    ]
  },
  {
    prompt: "In a merger or takeover problem, which issue would you study first?",
    choices: [
      {
        label: "Board discretion",
        description: "Whether directors or shareholders should control the response to a bid.",
        weights: ["lucian-a-bebchuk", "henry-g-manne", "reinier-h-kraakman"]
      },
      {
        label: "Deal protection",
        description: "How breakup fees, matching rights, and fiduciary outs affect bargaining and competition.",
        weights: ["guhan-subramanian", "john-c-coates-iv", "eric-l-talley"]
      },
      {
        label: "Legal craft",
        description: "How lawyers structure transactions to reduce frictions and create value.",
        weights: ["ronald-j-gilson", "guhan-subramanian", "eric-l-talley"]
      },
      {
        label: "Market for control",
        description: "How takeover threats discipline management and interact with investor choice.",
        weights: ["henry-g-manne", "lucian-a-bebchuk", "roberta-romano"]
      }
    ]
  },
  {
    prompt: "Which assumption would you most want to test rather than accept?",
    choices: [
      {
        label: "Rational contracting",
        description: "Whether parties understand and price legal terms as conventional models assume.",
        weights: ["oren-bar-gill", "christine-jolls", "daniel-kahneman"]
      },
      {
        label: "Efficient prices",
        description: "Whether market prices incorporate information quickly enough for legal inference.",
        weights: ["eugene-f-fama", "ronald-j-gilson", "bernard-s-black"]
      },
      {
        label: "Effective deterrence",
        description: "Whether sanctions, damages, and enforcement probability actually change precautions.",
        weights: ["steven-m-shavell", "a-mitchell-polinsky", "guido-calabresi"]
      },
      {
        label: "Neutral legal coding",
        description: "Whether comparative indicators capture legal systems without losing institutional context.",
        weights: ["holger-spamann", "rafael-la-porta", "andrei-shleifer"]
      }
    ]
  },
  {
    prompt: "Which contract-law problem would you most want to investigate?",
    choices: [
      {
        label: "Private ordering",
        description: "How defaults, trade practices, and relational governance support sophisticated exchange.",
        weights: ["lisa-bernstein", "alan-schwartz", "ronald-h-coase"]
      },
      {
        label: "Information and consent",
        description: "Whether parties understand terms and how law should respond to asymmetric information.",
        weights: ["oren-bar-gill", "joseph-e-stiglitz", "christine-jolls"]
      },
      {
        label: "Breach and remedies",
        description: "How damages, settlement incentives, and enforcement costs affect performance and breach.",
        weights: ["steven-m-shavell", "kathryn-e-spier", "a-mitchell-polinsky"]
      },
      {
        label: "Contractual governance",
        description: "How incomplete agreements allocate authority, adaptation, and renegotiation over time.",
        weights: ["oliver-e-williamson", "mathias-dewatripont", "oliver-hart"]
      }
    ]
  },
  {
    prompt: "Which property or entitlement question feels most compelling?",
    choices: [
      {
        label: "Exclusion and modularity",
        description: "Why property uses standardized boundaries to manage information and coordination costs.",
        weights: ["henry-e-smith", "robert-c-ellickson", "henry-b-hansmann"]
      },
      {
        label: "Commons governance",
        description: "How communities develop monitoring, participation, and sanctions for shared resources.",
        weights: ["elinor-ostrom", "ronald-h-coase", "oliver-e-williamson"]
      },
      {
        label: "Entitlement protection",
        description: "When injunctions, damages, or inalienability should protect a legal interest.",
        weights: ["a-douglas-melamed", "guido-calabresi", "louis-kaplow"]
      },
      {
        label: "Institutional evolution",
        description: "How formal rules, informal norms, and path dependence reshape property arrangements.",
        weights: ["douglass-c-north", "katharina-pistor", "simon-deakin"]
      }
    ]
  },
  {
    prompt: "Which European corporate-governance problem would you study first?",
    choices: [
      {
        label: "Board structure",
        description: "How one-tier and two-tier boards allocate monitoring, labor voice, and managerial authority.",
        weights: ["klaus-j-hopt", "paul-l-davies", "wolf-georg-ringe"]
      },
      {
        label: "Board behavior",
        description: "What directors actually do and how composition, committees, and incentives affect oversight.",
        weights: ["renee-b-adams", "lucian-a-bebchuk", "reinier-h-kraakman"]
      },
      {
        label: "Shareholder engagement",
        description: "When activism and stewardship improve monitoring or create short-horizon pressures.",
        weights: ["marco-becht", "julian-franks", "colin-mayer"]
      },
      {
        label: "Control powers",
        description: "How voting, ownership, and economic exposure should be aligned or separated.",
        weights: ["alessio-m-pacces", "ronald-j-gilson", "henry-g-manne"]
      }
    ]
  },
  {
    prompt: "Which corporate-finance problem would you most enjoy unpacking?",
    choices: [
      {
        label: "Capital and creditor protection",
        description: "How company law structures equity, debt, distributions, security, and creditor safeguards.",
        weights: ["jennifer-payne", "paul-l-davies", "john-armour"]
      },
      {
        label: "Restructuring and insolvency",
        description: "How priority, voting, rescue procedures, and judicial oversight allocate distress losses.",
        weights: ["jennifer-payne", "steven-l-schwarcz", "wolf-georg-ringe"]
      },
      {
        label: "Valuation and governance",
        description: "How ownership, market evidence, and transaction structure affect firm value and control.",
        weights: ["colin-mayer", "marco-pagano", "eric-l-talley"]
      },
      {
        label: "Financing incentives",
        description: "How information and control rights influence capital structure, monitoring, and investment.",
        weights: ["jean-tirole", "mathias-dewatripont", "oliver-hart"]
      }
    ]
  },
  {
    prompt: "Which banking mechanism would you want to understand most deeply?",
    choices: [
      {
        label: "Runs and liquidity",
        description: "Why maturity transformation creates liquidity while leaving banks vulnerable to runs.",
        weights: ["douglas-w-diamond", "philip-h-dybvig", "xavier-freixas"]
      },
      {
        label: "Capital and incentives",
        description: "How leverage, loss absorption, and managerial incentives shape bank resilience.",
        weights: ["anat-r-admati", "martin-f-hellwig", "jean-tirole"]
      },
      {
        label: "Systemic propagation",
        description: "How fire sales, funding markets, and legal structures transmit distress across institutions.",
        weights: ["markus-k-brunnermeier", "steven-l-schwarcz", "katharina-pistor"]
      },
      {
        label: "Central-bank intervention",
        description: "When liquidity assistance and crisis management stabilize markets or weaken discipline.",
        weights: ["ben-s-bernanke", "xavier-freixas", "martin-f-hellwig"]
      }
    ]
  },
  {
    prompt: "What would be your starting point for a disclosure or accounting project?",
    choices: [
      {
        label: "Reporting quality",
        description: "How accounting standards, enforcement, and institutions affect comparable firm information.",
        weights: ["christian-leuz", "merritt-b-fox", "marco-pagano"]
      },
      {
        label: "Price formation",
        description: "How quickly public and private information enters market prices and trading decisions.",
        weights: ["eugene-f-fama", "ronald-j-gilson", "marco-pagano"]
      },
      {
        label: "Gatekeeper verification",
        description: "How auditors, advisers, and other intermediaries produce or certify issuer information.",
        weights: ["john-c-coffee-jr", "frank-partnoy", "niamh-moloney"]
      },
      {
        label: "European disclosure architecture",
        description: "How company, securities, and supervisory rules combine across an integrated market.",
        weights: ["eilis-ferran", "jennifer-payne", "klaus-j-hopt"]
      }
    ]
  },
  {
    prompt: "Which enforcement problem would you put at the center of a research design?",
    choices: [
      {
        label: "Public versus private enforcement",
        description: "Which mix of agencies, litigation, sanctions, and settlement produces credible deterrence.",
        weights: ["howell-e-jackson", "john-c-coffee-jr", "roberta-romano"]
      },
      {
        label: "Optimal sanctions",
        description: "How detection probability, sanction size, marginal deterrence, and enforcement cost interact.",
        weights: ["a-mitchell-polinsky", "steven-m-shavell", "jennifer-h-arlen"]
      },
      {
        label: "Organizational compliance",
        description: "How firm liability changes monitoring, reporting, cooperation, and internal-control incentives.",
        weights: ["jennifer-h-arlen", "frank-partnoy", "renee-b-adams"]
      },
      {
        label: "Supervisory coordination",
        description: "How European agencies and national authorities divide rulemaking and enforcement capacity.",
        weights: ["niamh-moloney", "eilis-ferran", "wolf-georg-ringe"]
      }
    ]
  },
  {
    prompt: "Which research method would you most want to master?",
    choices: [
      {
        label: "Comparative legal coding",
        description: "Build indicators while preserving doctrinal meaning, enforcement context, and measurement limits.",
        weights: ["holger-spamann", "rafael-la-porta", "mathias-siems"]
      },
      {
        label: "Causal institutional evidence",
        description: "Use legal or policy variation to estimate effects while testing rival explanations.",
        weights: ["bernard-s-black", "john-c-coates-iv", "simon-deakin"]
      },
      {
        label: "Market-based evidence",
        description: "Use prices, returns, ownership, or reporting data to evaluate legal and governance claims.",
        weights: ["eugene-f-fama", "christian-leuz", "eric-l-talley"]
      },
      {
        label: "Comparative doctrinal analysis",
        description: "Trace how rules work within different institutional and organizational settings.",
        weights: ["paul-l-davies", "klaus-j-hopt", "reinier-h-kraakman"]
      }
    ]
  },
  {
    prompt: "Where would behavioral evidence matter most in your work?",
    choices: [
      {
        label: "Judgment under uncertainty",
        description: "How heuristics, framing, and loss aversion affect legal and financial decisions.",
        weights: ["daniel-kahneman", "christine-jolls", "richard-h-thaler"]
      },
      {
        label: "Consumer contracting",
        description: "How salience, complexity, and biased expectations affect responses to contract terms.",
        weights: ["oren-bar-gill", "christine-jolls", "cass-r-sunstein"]
      },
      {
        label: "Judges and litigation",
        description: "How cognition and bargaining behavior shape settlement, adjudication, and legal outcomes.",
        weights: ["jeffrey-j-rachlinski", "daniel-kahneman", "kathryn-e-spier"]
      },
      {
        label: "Choice architecture",
        description: "How defaults and decision environments influence behavior without eliminating choice.",
        weights: ["cass-r-sunstein", "richard-h-thaler", "oren-bar-gill"]
      }
    ]
  },
  {
    prompt: "Which political-economy question about regulation interests you most?",
    choices: [
      {
        label: "Regulatory capture",
        description: "How organized interests and institutional incentives shape the supply of regulation.",
        weights: ["george-j-stigler", "marco-pagano", "roberta-romano"]
      },
      {
        label: "Delegation and commitment",
        description: "How regulators acquire information and credibility while remaining accountable.",
        weights: ["jean-tirole", "mathias-dewatripont", "niamh-moloney"]
      },
      {
        label: "Legal origin and development",
        description: "How historical legal institutions relate to investor protection and financial development.",
        weights: ["andrei-shleifer", "rafael-la-porta", "douglass-c-north"]
      },
      {
        label: "State, law, and markets",
        description: "How legal authority constitutes markets while responding to information and power asymmetries.",
        weights: ["katharina-pistor", "joseph-e-stiglitz", "simon-deakin"]
      }
    ]
  },
  {
    prompt: "What makes a comparative-law project persuasive to you?",
    choices: [
      {
        label: "Functional comparison",
        description: "Compare how different legal systems address a common agency or coordination problem.",
        weights: ["reinier-h-kraakman", "john-armour", "paul-l-davies"]
      },
      {
        label: "Institutional context",
        description: "Preserve legal culture, enforcement, market structure, and historical differences.",
        weights: ["mathias-siems", "simon-deakin", "klaus-j-hopt"]
      },
      {
        label: "Comparable evidence",
        description: "Use transparent coding and cross-country data without overstating what indices measure.",
        weights: ["holger-spamann", "rafael-la-porta", "marco-becht"]
      },
      {
        label: "Regulatory competition",
        description: "Study how firms, exchanges, and lawmakers respond to jurisdictional choice and integration.",
        weights: ["wolf-georg-ringe", "roberta-romano", "alessio-m-pacces"]
      }
    ]
  },
  {
    prompt: "Which normative lens would you bring to a law-and-economics argument?",
    choices: [
      {
        label: "Welfare analysis",
        description: "Evaluate how legal rules affect individual well-being, behavior, and social costs.",
        weights: ["louis-kaplow", "steven-m-shavell", "richard-a-posner"]
      },
      {
        label: "Distribution and vulnerability",
        description: "Ask who bears risk, who lacks information, and how legal change reallocates welfare.",
        weights: ["joseph-e-stiglitz", "guido-calabresi", "cass-r-sunstein"]
      },
      {
        label: "Rights and legal relations",
        description: "Clarify claims, powers, duties, and remedies before drawing efficiency conclusions.",
        weights: ["wesley-newcomb-hohfeld", "a-douglas-melamed", "simon-deakin"]
      },
      {
        label: "Institutional pluralism",
        description: "Compare state, market, community, and organizational governance without assuming one default.",
        weights: ["elinor-ostrom", "douglass-c-north", "ronald-h-coase"]
      }
    ]
  },
  {
    prompt: "Which litigation or remedies problem would you choose for a seminar paper?",
    choices: [
      {
        label: "Settlement and procedure",
        description: "How information, bargaining, timing, and litigation costs affect settlement and trial.",
        weights: ["kathryn-e-spier", "steven-m-shavell", "a-mitchell-polinsky"]
      },
      {
        label: "Injunctions and damages",
        description: "How different remedies allocate bargaining power, valuation risk, and enforcement cost.",
        weights: ["a-douglas-melamed", "guido-calabresi", "louis-kaplow"]
      },
      {
        label: "Securities litigation",
        description: "Whether private actions improve deterrence, compensation, and information production.",
        weights: ["john-c-coffee-jr", "john-c-coates-iv", "merritt-b-fox"]
      },
      {
        label: "Insolvency proceedings",
        description: "How courts coordinate creditors and preserve or reallocate enterprise value in distress.",
        weights: ["jennifer-payne", "steven-l-schwarcz", "julian-franks"]
      }
    ]
  },
  {
    prompt: "How would you frame misconduct inside a complex organization?",
    choices: [
      {
        label: "Corporate liability",
        description: "Allocate sanctions to induce monitoring, self-reporting, cooperation, and individual accountability.",
        weights: ["jennifer-h-arlen", "a-mitchell-polinsky", "gary-s-becker"]
      },
      {
        label: "Board oversight",
        description: "Examine authority, committee structure, information flow, and director incentives.",
        weights: ["renee-b-adams", "reinier-h-kraakman", "lucian-a-bebchuk"]
      },
      {
        label: "Internal governance",
        description: "Treat hierarchy and incomplete contracts as mechanisms for adaptation and control.",
        weights: ["oliver-e-williamson", "mathias-dewatripont", "oliver-hart"]
      },
      {
        label: "Gatekeeper responsibility",
        description: "Study how advisers and verifiers respond to liability, reputation, and conflicts of interest.",
        weights: ["frank-partnoy", "john-c-coffee-jr", "christian-leuz"]
      }
    ]
  },
  {
    prompt: "Which view of the corporation would you most want to test?",
    choices: [
      {
        label: "Shareholder discipline",
        description: "Governance should constrain managerial agency costs and preserve investor choice.",
        weights: ["lucian-a-bebchuk", "henry-g-manne", "roberta-romano"]
      },
      {
        label: "Corporate purpose",
        description: "Law should examine commitment, stakeholder interests, and the social role of enterprise.",
        weights: ["colin-mayer", "simon-deakin", "klaus-j-hopt"]
      },
      {
        label: "Ownership institutions",
        description: "Different ownership and control structures generate different monitoring and commitment effects.",
        weights: ["henry-b-hansmann", "julian-franks", "marco-becht"]
      },
      {
        label: "Sustainable governance",
        description: "Corporate authority and disclosure should address long-term environmental and social risks.",
        weights: ["alessio-m-pacces", "wolf-georg-ringe", "colin-mayer"]
      }
    ]
  },
  {
    prompt: "Which financial intermediary would you place under the microscope?",
    choices: [
      {
        label: "Auditors and reporting systems",
        description: "How verification, accounting rules, and enforcement affect the credibility of disclosure.",
        weights: ["christian-leuz", "john-c-coffee-jr", "merritt-b-fox"]
      },
      {
        label: "Ratings and structured finance",
        description: "How legal categories, conflicts, and complexity shape risk assessment and market discipline.",
        weights: ["frank-partnoy", "steven-l-schwarcz", "markus-k-brunnermeier"]
      },
      {
        label: "Transactional lawyers",
        description: "How legal design, negotiation, and contractual engineering create or allocate value.",
        weights: ["ronald-j-gilson", "eric-l-talley", "guhan-subramanian"]
      },
      {
        label: "Regulators and exchanges",
        description: "How supervisory institutions and trading venues organize information and market access.",
        weights: ["niamh-moloney", "wolf-georg-ringe", "marco-pagano"]
      }
    ]
  },
  {
    prompt: "How would you approach climate risk or financial innovation?",
    choices: [
      {
        label: "Governance transition",
        description: "Study how corporate control and fiduciary institutions adapt to long-horizon risks.",
        weights: ["alessio-m-pacces", "wolf-georg-ringe", "colin-mayer"]
      },
      {
        label: "Systemic externalities",
        description: "Trace how private leverage and interconnected structures create public stability costs.",
        weights: ["anat-r-admati", "martin-f-hellwig", "steven-l-schwarcz"]
      },
      {
        label: "Disclosure and pricing",
        description: "Ask whether comparable information changes investor decisions and market valuation.",
        weights: ["christian-leuz", "eugene-f-fama", "niamh-moloney"]
      },
      {
        label: "Regulation and innovation",
        description: "Design public intervention around information, incentives, experimentation, and commitment.",
        weights: ["jean-tirole", "mathias-dewatripont", "joseph-e-stiglitz"]
      }
    ]
  },
  {
    prompt: "Which historical development would you most like to reconstruct?",
    choices: [
      {
        label: "Markets and firms",
        description: "How transaction costs and institutional change altered the boundary of organizations.",
        weights: ["ronald-h-coase", "oliver-e-williamson", "douglass-c-north"]
      },
      {
        label: "European ownership",
        description: "How ownership concentration, regulation, and stewardship evolved across corporate systems.",
        weights: ["julian-franks", "colin-mayer", "marco-becht"]
      },
      {
        label: "Entitlements and remedies",
        description: "How legal concepts and remedy structures became part of economic analysis.",
        weights: ["wesley-newcomb-hohfeld", "guido-calabresi", "a-douglas-melamed"]
      },
      {
        label: "Regulatory architecture",
        description: "How crises and market integration changed financial and corporate-law institutions.",
        weights: ["katharina-pistor", "niamh-moloney", "klaus-j-hopt"]
      }
    ]
  },
  {
    prompt: "What kind of research output would you most like to produce?",
    choices: [
      {
        label: "Conceptual framework",
        description: "A durable taxonomy that clarifies legal relations, organizational form, or governance strategy.",
        weights: ["wesley-newcomb-hohfeld", "reinier-h-kraakman", "henry-b-hansmann"]
      },
      {
        label: "Empirical study",
        description: "A transparent design that connects legal variation to observable institutional outcomes.",
        weights: ["simon-deakin", "eric-l-talley", "christian-leuz"]
      },
      {
        label: "Comparative synthesis",
        description: "A careful account of how doctrine and institutions differ across legal systems.",
        weights: ["klaus-j-hopt", "paul-l-davies", "mathias-siems"]
      },
      {
        label: "Policy design",
        description: "A mechanism-based proposal for financial stability, supervision, or organizational incentives.",
        weights: ["jean-tirole", "xavier-freixas", "anat-r-admati"]
      }
    ]
  },
  {
    prompt: "Which caution should accompany your final conclusion?",
    choices: [
      {
        label: "Efficiency is not the whole judgment",
        description: "Consequences matter, but rights, distribution, legitimacy, and procedure remain distinct questions.",
        weights: ["guido-calabresi", "louis-kaplow", "simon-deakin"]
      },
      {
        label: "Market assumptions need evidence",
        description: "Information, rationality, competition, and price quality should be tested rather than presumed.",
        weights: ["joseph-e-stiglitz", "daniel-kahneman", "oren-bar-gill"]
      },
      {
        label: "Institutions have limited capacity",
        description: "Rules depend on enforcement resources, supervisory coordination, and crisis resilience.",
        weights: ["niamh-moloney", "katharina-pistor", "howell-e-jackson"]
      },
      {
        label: "Measurement defines the claim",
        description: "Coding, samples, proxies, and research design limit what comparative evidence can establish.",
        weights: ["holger-spamann", "mathias-siems", "christian-leuz"]
      }
    ]
  }
];

function scoreChoices(answers: Record<number, number>, candidates: ScholarMatchCandidate[]) {
  const candidateMap = new Map(candidates.map((candidate) => [candidate.slug, candidate]));
  const scores = new Map(candidates.map((candidate) => [candidate.slug, 0]));

  Object.entries(answers).forEach(([questionIndex, choiceIndex]) => {
    const choice = quizQuestions[Number(questionIndex)]?.choices[choiceIndex];
    choice?.weights.forEach((slug, rank) => {
      if (!candidateMap.has(slug)) return;
      scores.set(slug, (scores.get(slug) ?? 0) + (3 - rank));
    });
  });

  return [...scores.entries()]
    .map(([slug, score]) => ({ scholar: candidateMap.get(slug), score }))
    .filter((item): item is { scholar: ScholarMatchCandidate; score: number } => Boolean(item.scholar))
    .sort((first, second) => second.score - first.score || first.scholar.name.localeCompare(second.scholar.name));
}

function normalizeStoredAnswers(value: unknown) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};

  return Object.entries(value).reduce<Record<number, number>>((normalized, [questionKey, choiceValue]) => {
    const questionIndex = Number(questionKey);
    if (!Number.isInteger(questionIndex) || questionIndex < 0 || questionIndex >= quizQuestions.length) {
      return normalized;
    }
    if (
      !Number.isInteger(choiceValue) ||
      choiceValue < 0 ||
      choiceValue >= quizQuestions[questionIndex].choices.length
    ) {
      return normalized;
    }
    normalized[questionIndex] = choiceValue;
    return normalized;
  }, {});
}

function readStoredQuizState() {
  if (typeof window === "undefined") return null;

  try {
    const rawState = window.sessionStorage.getItem(QUIZ_STORAGE_KEY);
    if (!rawState) return null;
    const parsedState = JSON.parse(rawState) as Partial<StoredQuizState>;
    const answers = normalizeStoredAnswers(parsedState.answers);
    const answeredCount = Object.keys(answers).length;
    const storedQuestionIndex = Number(parsedState.currentQuestionIndex);
    const currentQuestionIndex = Number.isInteger(storedQuestionIndex)
      ? Math.min(Math.max(storedQuestionIndex, 0), quizQuestions.length)
      : Math.min(answeredCount, quizQuestions.length);

    return { answers, currentQuestionIndex };
  } catch {
    window.sessionStorage.removeItem(QUIZ_STORAGE_KEY);
    return null;
  }
}

export function ScholarMatchQuiz({ candidates }: { candidates: ScholarMatchCandidate[] }) {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [hasRestoredState, setHasRestoredState] = useState(false);
  const answeredCount = Object.keys(answers).length;
  const isComplete = answeredCount === quizQuestions.length;
  const rankedMatches = useMemo(() => scoreChoices(answers, candidates), [answers, candidates]);
  const topMatches = rankedMatches.filter((item) => item.score > 0).slice(0, 3);
  const currentQuestion = quizQuestions[currentQuestionIndex];
  const selectedChoiceIndex = answers[currentQuestionIndex];
  const isResultView = isComplete && currentQuestionIndex >= quizQuestions.length;

  useEffect(() => {
    const restoreFrame = window.requestAnimationFrame(() => {
      const storedState = readStoredQuizState();
      if (storedState) {
        setAnswers(storedState.answers);
        setCurrentQuestionIndex(storedState.currentQuestionIndex);
      }
      setHasRestoredState(true);
    });

    return () => window.cancelAnimationFrame(restoreFrame);
  }, []);

  useEffect(() => {
    if (!hasRestoredState) return;

    window.sessionStorage.setItem(
      QUIZ_STORAGE_KEY,
      JSON.stringify({
        answers,
        currentQuestionIndex
      })
    );
  }, [answers, currentQuestionIndex, hasRestoredState]);

  function selectAnswer(questionIndex: number, choiceIndex: number) {
    setAnswers((current) => ({ ...current, [questionIndex]: choiceIndex }));
    setCurrentQuestionIndex(Math.min(questionIndex + 1, quizQuestions.length));
  }

  function resetQuiz() {
    window.sessionStorage.removeItem(QUIZ_STORAGE_KEY);
    setAnswers({});
    setCurrentQuestionIndex(0);
  }

  function goToPreviousQuestion() {
    setCurrentQuestionIndex((current) => Math.max(0, current - 1));
  }

  return (
    <section className="space-y-8 lg:space-y-10">
      <div className="grid gap-5 border-y border-skyline/70 py-5 lg:grid-cols-[240px_minmax(0,1fr)] lg:items-start lg:py-7">
        <div className="space-y-1.5 lg:space-y-2">
          <p className="text-xs uppercase tracking-[0.18em] text-signal">Research affinity</p>
          <h2 className="font-serifCn text-3xl leading-tight text-accent">
            {answeredCount} / {quizQuestions.length}
          </h2>
          <p className="text-xs uppercase tracking-[0.16em] text-muted">Questions answered</p>
        </div>
        <div className="max-w-3xl">
          <p className="text-sm leading-7 text-ink lg:text-base lg:leading-8">
            Choose the answer closest to your research instinct. The result suggests scholar profiles with similar
            methods or institutional concerns; it is not an assessment of expertise.
          </p>
        </div>
      </div>

      {!isResultView && currentQuestion ? (
        <div className="space-y-6">
          <section
            key={currentQuestion.prompt}
            aria-labelledby={`scholar-match-question-${currentQuestionIndex}`}
            className="grid gap-5 border-b border-skyline/60 pb-8 lg:grid-cols-[240px_minmax(0,1fr)]"
          >
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.18em] text-signal">
                Question {String(currentQuestionIndex + 1).padStart(2, "0")} of {quizQuestions.length}
              </p>
              <h3
                id={`scholar-match-question-${currentQuestionIndex}`}
                className="font-serifCn text-2xl leading-snug text-accent"
              >
                {currentQuestion.prompt}
              </h3>
              <p className="text-sm leading-7 text-muted">
                Select one answer to continue. Earlier answers can be revised with the back control.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {currentQuestion.choices.map((choice, choiceIndex) => {
                const isSelected = selectedChoiceIndex === choiceIndex;
                return (
                  <button
                    key={choice.label}
                    type="button"
                    onClick={() => selectAnswer(currentQuestionIndex, choiceIndex)}
                    className={[
                      "min-h-0 p-5 text-left transition-colors sm:min-h-40",
                      "focus:outline-none focus-visible:ring-2 focus-visible:ring-institute focus-visible:ring-offset-2",
                      isSelected
                        ? "bg-institute text-white"
                        : "bg-paper/75 text-ink hover:bg-skyline/50"
                    ].join(" ")}
                    aria-pressed={isSelected}
                  >
                    <span
                      className={[
                        "block text-xs uppercase tracking-[0.14em]",
                        isSelected ? "text-white/80" : "text-signal"
                      ].join(" ")}
                    >
                      {choice.label}
                    </span>
                    <span className={["mt-4 block text-sm leading-7", isSelected ? "text-white" : "text-muted"].join(" ")}>
                      {choice.description}
                    </span>
                  </button>
                );
              })}
            </div>
          </section>
          <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
            <button
              type="button"
              onClick={goToPreviousQuestion}
              disabled={currentQuestionIndex === 0}
              className="text-muted underline underline-offset-4 disabled:cursor-not-allowed disabled:text-muted/40"
            >
              Previous question
            </button>
            <p className="text-xs uppercase tracking-[0.14em] text-muted">
              {quizQuestions.length - answeredCount} remaining
            </p>
          </div>
        </div>
      ) : null}

      <section className="grid gap-6 bg-white py-4 lg:grid-cols-[240px_minmax(0,1fr)]">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-muted">Result</p>
          <h2 className="mt-2 font-serifCn text-2xl text-accent">Closest Scholar</h2>
        </div>
        <div>
          {isResultView && topMatches.length ? (
            <div className="space-y-4">
              {topMatches.map((match, index) => (
                <article key={match.scholar.slug} className={index === 0 ? "bg-paper p-6" : "bg-white py-4"}>
                  <p className="text-xs uppercase tracking-[0.14em] text-signal">
                    {index === 0 ? "Closest affinity" : `Alternative affinity ${index + 1}`}
                  </p>
                  <h3 className="mt-2 font-serifCn text-2xl text-accent">
                    <Link href={`/scholars/${match.scholar.slug}`} className="hover:underline">
                      {match.scholar.name}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-ink">{match.scholar.summary}</p>
                  <p className="mt-3 text-xs uppercase tracking-[0.12em] text-muted">{match.scholar.fields.join(" · ")}</p>
                </article>
              ))}
              <button type="button" onClick={resetQuiz} className="text-sm text-institute underline underline-offset-2">
                Start again
              </button>
            </div>
          ) : (
            <div className="bg-paper/70 p-5">
              <p className="text-sm leading-7 text-muted">
                Answer each question in sequence to see the closest scholar profile. The result will include a primary
                match and two nearby alternatives.
              </p>
            </div>
          )}
        </div>
      </section>
    </section>
  );
}
