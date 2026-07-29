export type CaseField =
  | "Foundations of Law and Economics"
  | "Corporate Law"
  | "Securities Regulation"
  | "Financial Law";

export type CaseRecord = {
  title: string;
  slug: string;
  citation: string;
  court: string;
  year: string;
  field: CaseField;
  issue: string;
  facts: string;
  holding: string;
  reasoning: string;
  significance: string;
  sourceHref: string;
  sourceLabel: string;
  concepts: string[];
};

export const CASE_RECORDS: CaseRecord[] = [
  {
    title: "Dodge v. Ford Motor Co.",
    slug: "dodge-v-ford-motor-co-1919",
    citation: "204 Mich. 459, 170 N.W. 668 (1919)",
    court: "Supreme Court of Michigan",
    year: "1919",
    field: "Corporate Law",
    issue: "Corporate purpose, dividends, and the boundary between managerial discretion and shareholder claims.",
    facts:
      "Ford Motor Company had accumulated very large profits and cash reserves after years of rapid growth. Henry Ford announced a policy of reducing prices, expanding production, hiring more workers, and reinvesting profits rather than continuing large special dividends. The Dodge brothers, minority shareholders, sued to compel dividends and to restrain parts of Ford's expansion program.",
    holding:
      "The court affirmed relief requiring a dividend while reversing the injunction against Ford's expansion plans.",
    reasoning:
      "The court treated ordinary business expansion as a matter largely committed to directors, especially absent fraud or illegality. But it also reasoned that a business corporation is organized primarily for shareholders' profit, and that Ford's stated plan to subordinate shareholder return to broader social and employment objectives could not justify withholding extraordinary surplus from shareholders indefinitely.",
    significance:
      "The case remains a classic reference point for debates over shareholder primacy, managerial discretion, and the economic purpose of the corporation, though its modern doctrinal reach is often contested.",
    sourceHref: "https://law.justia.com/cases/michigan/supreme-court/1919/204-mich-459-170-n-w-668-1919.html",
    sourceLabel: "Justia",
    concepts: ["Corporate purpose", "Shareholder primacy", "Business judgment"]
  },
  {
    title: "Smith v. Van Gorkom",
    slug: "smith-v-van-gorkom-1985",
    citation: "488 A.2d 858 (Del. 1985)",
    court: "Supreme Court of Delaware",
    year: "1985",
    field: "Corporate Law",
    issue: "Director duty of care and board process in approving a cash-out merger.",
    facts:
      "Trans Union's chief executive, Jerome Van Gorkom, negotiated a cash merger with Jay Pritzker at $55 per share. The board approved the transaction after a short meeting, without a formal valuation study, without reading the merger agreement in advance, and with limited inquiry into the basis for the price and process.",
    holding:
      "The Delaware Supreme Court found the directors grossly negligent in approving the merger without adequate information and deliberation.",
    reasoning:
      "The court emphasized that the business judgment rule protects informed judgments, not uninformed approvals of major corporate transactions. Directors could not rely on the premium alone or on conclusory oral presentations; they had to inform themselves of all material information reasonably available before approving a sale of the company.",
    significance:
      "The case is a canonical duty-of-care decision and a major background to later charter exculpation and board-process practice.",
    sourceHref: "https://law.justia.com/cases/delaware/supreme-court/1985/488-a-2d-858-4.html",
    sourceLabel: "Justia",
    concepts: ["Duty of care", "Board process", "Business judgment"]
  },
  {
    title: "Weinberger v. UOP, Inc.",
    slug: "weinberger-v-uop-1983",
    citation: "457 A.2d 701 (Del. 1983)",
    court: "Supreme Court of Delaware",
    year: "1983",
    field: "Corporate Law",
    issue: "Entire fairness review, minority-shareholder protection, and valuation in a controlling-shareholder freeze-out merger.",
    facts:
      "Signal owned a majority of UOP and sought to acquire the remaining publicly held shares through a cash-out merger. Two UOP directors who also served as Signal officers prepared a feasibility study for Signal using UOP information, but the study was not disclosed to UOP's minority shareholders before the merger vote.",
    holding:
      "The Delaware Supreme Court held that the transaction failed entire fairness review and remanded for a remedy based on modern valuation principles.",
    reasoning:
      "The court treated fair dealing and fair price as connected elements of entire fairness. It emphasized conflicts of interest, inadequate disclosure, and the use of corporate information by fiduciaries serving both sides of the transaction. The court also rejected rigid valuation limits and allowed broader financial valuation techniques where they are generally accepted in the financial community.",
    significance:
      "Weinberger is central for studying controlling-shareholder transactions, information asymmetry, procedural protections, and appraisal as a valuation mechanism.",
    sourceHref: "https://law.justia.com/cases/delaware/supreme-court/1983/457-a-2d-701-4.html",
    sourceLabel: "Justia",
    concepts: ["Entire fairness", "Freeze-out merger", "Appraisal"]
  },
  {
    title: "Unocal Corp. v. Mesa Petroleum Co.",
    slug: "unocal-v-mesa-petroleum-1985",
    citation: "493 A.2d 946 (Del. 1985)",
    court: "Supreme Court of Delaware",
    year: "1985",
    field: "Corporate Law",
    issue: "Judicial review of defensive tactics adopted in response to a hostile takeover bid.",
    facts:
      "Mesa Petroleum launched a two-tier hostile tender offer for Unocal. Unocal's board concluded that the offer was coercive and inadequate, then adopted a selective self-tender/exchange offer that excluded Mesa as a bidder.",
    holding:
      "The court recognized enhanced scrutiny for takeover defenses, asking whether directors had reasonable grounds to perceive a threat and whether the response was proportionate.",
    reasoning:
      "The court reasoned that takeover defenses create a structural conflict because directors may be protecting shareholders or entrenching themselves. Directors therefore had to show good faith and reasonable investigation, a threat to corporate policy and effectiveness, and a defensive response reasonably related to that threat.",
    significance:
      "Unocal supplies the central framework for reviewing board defensive measures in takeover contests.",
    sourceHref: "https://opencasebook.org/casebooks/261-corporations/resources/3.3.1-unocal-v-mesa-petroleum-del-1985/",
    sourceLabel: "H2O Open Casebook",
    concepts: ["Takeover defenses", "Enhanced scrutiny", "Corporate control"]
  },
  {
    title: "Revlon, Inc. v. MacAndrews & Forbes Holdings, Inc.",
    slug: "revlon-v-macandrews-forbes-1986",
    citation: "506 A.2d 173 (Del. 1986)",
    court: "Supreme Court of Delaware",
    year: "1986",
    field: "Corporate Law",
    issue: "Director duties when sale or break-up of the company becomes inevitable.",
    facts:
      "Revlon faced a hostile acquisition effort by Pantry Pride. Its board adopted defensive measures and later favored a competing transaction with Forstmann Little, including deal protections that limited further bidding and favored one buyer over another.",
    holding:
      "The court held that once Revlon was effectively for sale, directors had to focus on obtaining the best value reasonably available for stockholders.",
    reasoning:
      "The court reasoned that once the break-up or sale of control became inevitable, the board's role changed from defending the corporate enterprise to obtaining the best price for shareholders. Defensive measures that ended an active auction or favored one bidder without adequate shareholder-value justification failed that duty.",
    significance:
      "The case anchors Revlon duties and the law-and-economics analysis of auctions, deal protections, and sale-of-control transactions.",
    sourceHref: "https://en.wikisource.org/wiki/Revlon,_Inc._v._MacAndrews_%26_Forbes_Holdings,_Inc.",
    sourceLabel: "Wikisource",
    concepts: ["Sale of control", "Auction duties", "Deal protection"]
  },
  {
    title: "Paramount Communications Inc. v. QVC Network Inc.",
    slug: "paramount-v-qvc-1994",
    citation: "637 A.2d 34 (Del. 1994)",
    court: "Supreme Court of Delaware",
    year: "1994",
    field: "Corporate Law",
    issue: "Revlon duties, sale of control, and board conduct when a transaction shifts control from dispersed shareholders to a controlling block.",
    facts:
      "Paramount agreed to a merger with Viacom that included defensive deal protections. QVC made a competing bid that created a live contest for control. Paramount's board continued to favor the Viacom transaction despite the competing offer and the resulting change in control structure.",
    holding:
      "The Delaware Supreme Court held that enhanced scrutiny applied and that the board had to seek the best value reasonably available for shareholders.",
    reasoning:
      "The court reasoned that a transaction ending the public shareholders' dispersed voting position and placing control in a single person or group presents a final-stage agency problem. Deal protections and board choices had to be reasonable in relation to the obligation to maximize shareholder value in the control transaction.",
    significance:
      "QVC refines Revlon analysis by linking sale-of-control doctrine to control premiums, auction design, and the loss of future shareholder voice.",
    sourceHref: "https://law.justia.com/cases/delaware/supreme-court/1994/637-a-2d-34-5.html",
    sourceLabel: "Justia",
    concepts: ["Revlon duties", "Change of control", "Deal protection"]
  },
  {
    title: "Blasius Industries, Inc. v. Atlas Corp.",
    slug: "blasius-v-atlas-1988",
    citation: "564 A.2d 651 (Del. Ch. 1988)",
    court: "Delaware Court of Chancery",
    year: "1988",
    field: "Corporate Law",
    issue: "Board action taken for the primary purpose of interfering with shareholder voting power.",
    facts:
      "Atlas's board expanded the board size and filled the new seats after Blasius began a written-consent campaign seeking to add directors and pursue restructuring. The board acted to prevent Blasius from gaining board control through shareholder consent.",
    holding:
      "The court required a compelling justification when directors acted primarily to interfere with the shareholder franchise.",
    reasoning:
      "Chancellor Allen reasoned that shareholder voting occupies a special place in corporate governance. Even if directors acted in good faith and believed their strategy better for the company, a board action whose primary purpose is to impede the shareholder vote requires a compelling justification, which Atlas had not shown.",
    significance:
      "Blasius is a classic voting-rights case for studying corporate voting, board authority, and shareholder governance.",
    sourceHref: "https://law.justia.com/cases/delaware/court-of-chancery/1988/564-a-2d-651-3.html",
    sourceLabel: "Justia",
    concepts: ["Shareholder voting", "Board authority", "Corporate franchise"]
  },
  {
    title: "In re Caremark International Inc. Derivative Litigation",
    slug: "in-re-caremark-1996",
    citation: "698 A.2d 959 (Del. Ch. 1996)",
    court: "Delaware Court of Chancery",
    year: "1996",
    field: "Corporate Law",
    issue: "Director oversight duties, compliance systems, and board liability for failure to monitor legal risk.",
    facts:
      "Caremark, a health-care company operating in a heavily regulated environment, faced federal investigations and settlements concerning alleged illegal payments and referral practices. Stockholders brought derivative claims alleging that directors failed to supervise employees and prevent legal violations.",
    holding:
      "The Court of Chancery approved the settlement and described oversight liability as possible but difficult to establish on the record before it.",
    reasoning:
      "Chancellor Allen reasoned that directors have a duty to attempt in good faith to assure that reasonable information and reporting systems exist. Liability would require a sustained or systematic failure of board oversight rather than ordinary business failure or isolated employee misconduct.",
    significance:
      "Caremark is the canonical compliance-oversight case for studying monitoring costs, information systems, board incentives, and legal risk governance.",
    sourceHref: "https://www.law.upenn.edu/live/files/6824-in-re-caremark-intern-inc-derivative-litigationpdf",
    sourceLabel: "Penn Carey Law",
    concepts: ["Oversight duty", "Compliance systems", "Monitoring costs"]
  },
  {
    title: "SEC v. W.J. Howey Co.",
    slug: "sec-v-howey-1946",
    citation: "328 U.S. 293 (1946)",
    court: "Supreme Court of the United States",
    year: "1946",
    field: "Securities Regulation",
    issue: "Definition of an investment contract under the federal securities laws.",
    facts:
      "The Howey companies sold small interests in Florida citrus groves together with service contracts under which an affiliated service company cultivated, harvested, marketed, and remitted net proceeds to purchasers. Many purchasers lacked the skill, equipment, or location needed to operate the groves themselves.",
    holding:
      "The Court treated the orange-grove interests and service contracts as investment contracts subject to federal securities registration requirements.",
    reasoning:
      "Justice Murphy's opinion focused on economic reality rather than formal labels. The Court reasoned that an investment contract exists when investors commit money to a common enterprise and expect profits primarily from the efforts of promoters or third parties; the land deeds did not change the substance of the investment scheme.",
    significance:
      "Howey supplies the canonical test for identifying investment contracts and remains central to securities-jurisdiction debates.",
    sourceHref: "https://supreme.justia.com/cases/federal/us/328/293/",
    sourceLabel: "Justia U.S. Supreme Court Center",
    concepts: ["Investment contract", "Securities definition", "Disclosure"]
  },
  {
    title: "Blue Chip Stamps v. Manor Drug Stores",
    slug: "blue-chip-stamps-v-manor-drug-stores-1975",
    citation: "421 U.S. 723 (1975)",
    court: "Supreme Court of the United States",
    year: "1975",
    field: "Securities Regulation",
    issue: "Standing to bring private Rule 10b-5 damages actions and the purchaser-seller limitation.",
    facts:
      "Under an antitrust consent decree, Blue Chip was required to offer shares to retailers that had previously used its trading-stamp service. Manor Drug Stores alleged that the offering materials were misleadingly pessimistic and deterred it from purchasing shares, then brought a Rule 10b-5 damages action despite not buying or selling securities.",
    holding:
      "The Court adopted the purchaser-seller rule, limiting private Rule 10b-5 damages actions to actual purchasers or sellers of securities.",
    reasoning:
      "Justice Rehnquist emphasized administrability, evidentiary reliability, and the risk of vexatious strike suits if disappointed nonpurchasers or nonsellers could sue based on hypothetical transactions. The Court treated the limitation as a way to contain litigation costs in implied securities-fraud actions.",
    significance:
      "Blue Chip Stamps is central to the law-and-economics study of private enforcement, standing, litigation costs, and the institutional design of securities remedies.",
    sourceHref: "https://supreme.justia.com/cases/federal/us/421/723/",
    sourceLabel: "Justia U.S. Supreme Court Center",
    concepts: ["Private enforcement", "Rule 10b-5", "Litigation costs"]
  },
  {
    title: "Santa Fe Industries, Inc. v. Green",
    slug: "santa-fe-industries-v-green-1977",
    citation: "430 U.S. 462 (1977)",
    court: "Supreme Court of the United States",
    year: "1977",
    field: "Securities Regulation",
    issue: "Whether unfairness in a freeze-out merger, without deception or manipulation, states a federal securities-fraud claim.",
    facts:
      "Santa Fe Industries used Delaware short-form merger procedures to cash out minority shareholders of Kirby Lumber after obtaining appraisals and offering $150 per share. Minority shareholders challenged the transaction under Rule 10b-5, alleging unfairness in price and process.",
    holding:
      "The Court held that a breach of fiduciary duty or unfair corporate transaction, without deception, misrepresentation, nondisclosure, or manipulation, is not enough for a Rule 10b-5 claim.",
    reasoning:
      "Justice White's opinion distinguished federal securities antifraud law from state corporate law. The federal statute targeted deception and manipulation in securities transactions, not general judicial review of corporate fairness where shareholders were informed and state appraisal or fiduciary remedies were available.",
    significance:
      "Santa Fe marks the boundary between federal securities regulation and state corporate law, making it important for studying regulatory allocation and antifraud scope.",
    sourceHref: "https://supreme.justia.com/cases/federal/us/430/462/",
    sourceLabel: "Justia U.S. Supreme Court Center",
    concepts: ["Rule 10b-5", "Federalism", "Corporate fairness"]
  },
  {
    title: "Dirks v. SEC",
    slug: "dirks-v-sec-1983",
    citation: "463 U.S. 646 (1983)",
    court: "Supreme Court of the United States",
    year: "1983",
    field: "Securities Regulation",
    issue: "Tippee liability and the conditions under which insider-trading duties attach.",
    facts:
      "Dirks, a securities analyst, received information from a former Equity Funding employee alleging massive fraud. He investigated, discussed the allegations with clients and investors, and some clients sold before the fraud became public. The SEC censured Dirks for aiding and abetting insider trading.",
    holding:
      "The Court rejected liability for Dirks and tied tippee liability to breach of fiduciary duty by the insider and the tippee's knowledge of that breach.",
    reasoning:
      "Justice Powell reasoned that not all trading on nonpublic information violates the securities laws. A tippee's duty is derivative of the insider's breach, and breach depends on whether the insider personally benefits from disclosure. Because the information was disclosed to expose fraud rather than for personal gain, Dirks did not inherit a prohibited duty.",
    significance:
      "Dirks is foundational for insider-trading doctrine, information production, market analysis, and whistleblowing debates.",
    sourceHref: "https://supreme.justia.com/cases/federal/us/463/646/",
    sourceLabel: "Justia U.S. Supreme Court Center",
    concepts: ["Insider trading", "Tippee liability", "Fiduciary duty"]
  },
  {
    title: "Basic Inc. v. Levinson",
    slug: "basic-v-levinson-1988",
    citation: "485 U.S. 224 (1988)",
    court: "Supreme Court of the United States",
    year: "1988",
    field: "Securities Regulation",
    issue: "Materiality of merger negotiations and reliance in Rule 10b-5 class actions.",
    facts:
      "Basic publicly denied that it was engaged in merger negotiations, even though discussions with Combustion Engineering were ongoing. Shareholders who sold Basic stock before the eventual merger announcement brought Rule 10b-5 claims based on the alleged misstatements.",
    holding:
      "The Court adopted a probability-magnitude approach to materiality and accepted a rebuttable fraud-on-the-market presumption of reliance.",
    reasoning:
      "Justice Blackmun rejected a bright-line rule that preliminary merger negotiations are immaterial until agreement-in-principle. Materiality depends on both probability and magnitude. The Court also reasoned that in an open and developed market, public information affects price, allowing reliance to be presumed unless rebutted.",
    significance:
      "Basic connects securities litigation to market efficiency, price formation, class certification, and event-study reasoning.",
    sourceHref: "https://supreme.justia.com/cases/federal/us/485/224/",
    sourceLabel: "Justia U.S. Supreme Court Center",
    concepts: ["Materiality", "Fraud-on-the-market", "Market efficiency"]
  },
  {
    title: "Central Bank of Denver v. First Interstate Bank of Denver",
    slug: "central-bank-v-first-interstate-1994",
    citation: "511 U.S. 164 (1994)",
    court: "Supreme Court of the United States",
    year: "1994",
    field: "Securities Regulation",
    issue: "Private aiding-and-abetting liability under Section 10(b) of the Securities Exchange Act.",
    facts:
      "Bondholders sued participants in a public financing transaction after alleged misstatements about land values securing bonds. Central Bank served as indenture trustee and allegedly delayed independent review of the appraisal, leading plaintiffs to assert aiding-and-abetting liability under Section 10(b).",
    holding:
      "The Court held that private plaintiffs may not maintain aiding-and-abetting suits under Section 10(b).",
    reasoning:
      "Justice Kennedy's opinion emphasized statutory text. Section 10(b) prohibits manipulative or deceptive conduct by a primary violator, but it does not expressly create private aiding-and-abetting liability. The Court declined to expand private liability beyond the conduct Congress had identified.",
    significance:
      "The decision reshaped securities enforcement by narrowing private liability and shifting attention to primary violators, gatekeepers, and public enforcement.",
    sourceHref: "https://supreme.justia.com/cases/federal/us/511/164/",
    sourceLabel: "Justia U.S. Supreme Court Center",
    concepts: ["Private enforcement", "Gatekeeper liability", "Section 10(b)"]
  },
  {
    title: "Morrison v. National Australia Bank Ltd.",
    slug: "morrison-v-national-australia-bank-2010",
    citation: "561 U.S. 247 (2010)",
    court: "Supreme Court of the United States",
    year: "2010",
    field: "Securities Regulation",
    issue: "Extraterritorial application of Section 10(b) and Rule 10b-5 to transnational securities transactions.",
    facts:
      "Australian investors who purchased shares of National Australia Bank on foreign exchanges sued in U.S. court, alleging that misleading conduct connected to a Florida mortgage-servicing subsidiary inflated the bank's financial statements.",
    holding:
      "The Court held that Section 10(b) applies only to transactions in securities listed on domestic exchanges and domestic transactions in other securities.",
    reasoning:
      "Justice Scalia applied the presumption against extraterritoriality and rejected the lower courts' conduct-and-effects tests. The opinion adopted a transaction-focused rule to reduce uncertainty over the global reach of U.S. securities law.",
    significance:
      "Morrison is a foundational case for cross-border securities regulation, regulatory competition, private enforcement, and the territorial limits of market-law regimes.",
    sourceHref: "https://supreme.justia.com/cases/federal/us/561/247/",
    sourceLabel: "Justia U.S. Supreme Court Center",
    concepts: ["Extraterritoriality", "Cross-border markets", "Section 10(b)"]
  },
  {
    title: "Halliburton Co. v. Erica P. John Fund, Inc.",
    slug: "halliburton-v-erica-p-john-fund-2014",
    citation: "573 U.S. 258 (2014)",
    court: "Supreme Court of the United States",
    year: "2014",
    field: "Securities Regulation",
    issue: "Fraud-on-the-market reliance, class certification, and price-impact evidence in securities-fraud class actions.",
    facts:
      "Investors alleged that Halliburton made misstatements concerning asbestos liability, construction-contract revenue, and merger benefits, inflating its stock price. Halliburton sought to defeat class certification by challenging the Basic fraud-on-the-market presumption.",
    holding:
      "The Court declined to overrule Basic but held that defendants may rebut the presumption of reliance at class certification with evidence that alleged misstatements had no price impact.",
    reasoning:
      "Chief Justice Roberts relied on stare decisis and Congress's decision to leave Basic in place while reforming securities litigation. At the same time, the Court reasoned that because price impact is central to the Basic presumption, defendants must be allowed to contest it before classwide reliance is presumed.",
    significance:
      "Halliburton II connects securities litigation to market efficiency, event studies, price impact, class certification, and the economics of private enforcement.",
    sourceHref: "https://supreme.justia.com/cases/federal/us/573/258/",
    sourceLabel: "Justia U.S. Supreme Court Center",
    concepts: ["Fraud-on-the-market", "Price impact", "Class actions"]
  },
  {
    title: "United States v. Winstar Corp.",
    slug: "united-states-v-winstar-1996",
    citation: "518 U.S. 839 (1996)",
    court: "Supreme Court of the United States",
    year: "1996",
    field: "Financial Law",
    issue: "Government contractual commitments made during thrift supervisory mergers and later regulatory change.",
    facts:
      "During the savings-and-loan crisis, federal regulators encouraged healthy institutions and investors to acquire failing thrifts. As an inducement, regulators allowed acquirers to count supervisory goodwill and capital credits toward regulatory capital. FIRREA later barred that accounting treatment, causing the acquiring institutions to sue for breach of contract.",
    holding:
      "The Court affirmed that the government could be liable for breach of contractual obligations associated with supervisory merger agreements.",
    reasoning:
      "Justice Souter's plurality treated the agreements as enforceable risk-allocation contracts rather than unlawful restraints on sovereign power. The government remained free to change regulatory law, but ordinary contract principles could require damages when the government had promised to bear the risk of such legal change.",
    significance:
      "Winstar is a major financial-regulation case for studying crisis policy, regulatory commitments, and the interaction between public law and private contracting.",
    sourceHref: "https://supreme.justia.com/cases/federal/us/518/839/",
    sourceLabel: "Justia U.S. Supreme Court Center",
    concepts: ["Regulatory commitments", "Thrift crisis", "Government contracts"]
  },
  {
    title: "Marquette National Bank v. First of Omaha Service Corp.",
    slug: "marquette-national-bank-v-first-of-omaha-1978",
    citation: "439 U.S. 299 (1978)",
    court: "Supreme Court of the United States",
    year: "1978",
    field: "Financial Law",
    issue: "National bank interest-rate exportation, state usury limits, and interstate consumer-credit competition.",
    facts:
      "First National Bank of Omaha, a national bank located in Nebraska, issued credit cards to Minnesota residents and charged interest rates permitted by Nebraska law but higher than Minnesota's usury limits. A Minnesota bank sought to enjoin the program unless Omaha Bank complied with Minnesota law.",
    holding:
      "The Court held that a national bank may charge interest at the rate allowed by the law of the state where the bank is located, even when lending to out-of-state customers.",
    reasoning:
      "Justice Brennan interpreted the National Bank Act's interest provision by focusing on the location of the national bank rather than the customer's residence. The decision treated Congress, not individual host states, as the institution responsible for changing the national-bank interest-rate rule.",
    significance:
      "Marquette is a major financial-law case for studying regulatory competition, credit-card markets, federal preemption, and the migration of consumer-credit activity across states.",
    sourceHref: "https://supreme.justia.com/cases/federal/us/439/299/",
    sourceLabel: "Justia U.S. Supreme Court Center",
    concepts: ["Bank powers", "Usury", "Regulatory competition"]
  },
  {
    title: "NationsBank of N.C. v. Variable Annuity Life Insurance Co.",
    slug: "nationsbank-v-variable-annuity-1995",
    citation: "513 U.S. 251 (1995)",
    court: "Supreme Court of the United States",
    year: "1995",
    field: "Financial Law",
    issue: "National bank authority to broker annuities and the scope of incidental banking powers.",
    facts:
      "The Comptroller of the Currency approved a national bank subsidiary's plan to act as agent in selling annuities. Variable Annuity Life Insurance Company challenged the approval, arguing that annuity brokerage exceeded national-bank powers and entered the insurance business.",
    holding:
      "The Court upheld the Comptroller's determination that national banks could sell annuities as agents under the National Bank Act.",
    reasoning:
      "Justice Ginsburg's opinion treated the Comptroller's interpretation of national-bank incidental powers as reasonable. The Court distinguished brokerage of financial investment products from underwriting insurance risk and accepted that selling annuities as agent could fall within banking-related financial intermediation.",
    significance:
      "The case is useful for studying bank powers, regulatory interpretation, and the institutional boundary between banking and insurance.",
    sourceHref: "https://supreme.justia.com/cases/federal/us/513/251/",
    sourceLabel: "Justia U.S. Supreme Court Center",
    concepts: ["Bank powers", "Administrative interpretation", "Financial products"]
  },
  {
    title: "Cuomo v. Clearing House Association",
    slug: "cuomo-v-clearing-house-2009",
    citation: "557 U.S. 519 (2009)",
    court: "Supreme Court of the United States",
    year: "2009",
    field: "Financial Law",
    issue: "Preemption, visitorial powers, and state enforcement against national banks.",
    facts:
      "The New York Attorney General sought information from national banks while investigating possible fair-lending violations. The OCC and Clearing House Association argued that the National Bank Act and OCC regulations preempted state enforcement because they interfered with exclusive federal visitorial powers.",
    holding:
      "The Court distinguished prohibited visitorial supervision from permissible judicial enforcement of state law.",
    reasoning:
      "Justice Scalia's opinion read visitorial powers as supervisory inspection and oversight, not as a complete bar on state law enforcement through courts. The state could not exercise executive visitorial authority over national banks, but it could bring judicial actions to enforce nonpreempted state law.",
    significance:
      "Cuomo helps frame federalism, supervisory authority, consumer finance enforcement, and the institutional allocation of banking oversight.",
    sourceHref: "https://supreme.justia.com/cases/federal/us/557/519/",
    sourceLabel: "Justia U.S. Supreme Court Center",
    concepts: ["Bank supervision", "Preemption", "State enforcement"]
  },
  {
    title: "McCulloch v. Maryland",
    slug: "mcculloch-v-maryland-1819",
    citation: "17 U.S. (4 Wheat.) 316 (1819)",
    court: "Supreme Court of the United States",
    year: "1819",
    field: "Financial Law",
    issue: "Federal power to charter a national bank and state authority to tax federal banking operations.",
    facts:
      "Maryland imposed a tax on banks operating in the state that were not chartered by Maryland. James McCulloch, cashier of the Baltimore branch of the Second Bank of the United States, refused to pay the tax, and Maryland courts upheld the state's position that Congress lacked authority to create the bank.",
    holding:
      "The Court held that Congress had constitutional authority to create the Bank of the United States and that Maryland could not tax the federal bank.",
    reasoning:
      "Chief Justice Marshall reasoned that Congress possesses implied powers necessary and proper to carry out enumerated powers, including fiscal and monetary functions. The state tax was invalid because the power to tax could be used to control or destroy federal instrumentalities, which would invert the constitutional allocation of authority.",
    significance:
      "McCulloch is foundational for the institutional architecture of American banking law, federal financial capacity, and the allocation of regulatory authority between national and state governments.",
    sourceHref: "https://supreme.justia.com/cases/federal/us/17/316/",
    sourceLabel: "Justia U.S. Supreme Court Center",
    concepts: ["National bank", "Federal power", "State taxation"]
  },
  {
    title: "United States v. Philadelphia National Bank",
    slug: "united-states-v-philadelphia-national-bank-1963",
    citation: "374 U.S. 321 (1963)",
    court: "Supreme Court of the United States",
    year: "1963",
    field: "Financial Law",
    issue: "Application of federal antitrust law to bank mergers and market-concentration analysis.",
    facts:
      "The United States challenged the proposed merger of Philadelphia National Bank and Girard Trust Corn Exchange Bank, arguing that the combination would substantially lessen competition in commercial banking in the Philadelphia metropolitan area.",
    holding:
      "The Court held that Section 7 of the Clayton Act applied to bank mergers and that the proposed merger was unlawful because of its likely anticompetitive effects.",
    reasoning:
      "The Court treated banking as a commercial market subject to antitrust constraints despite the presence of specialized banking regulators. It emphasized market definition, concentration, entry conditions, and Congress's judgment that economic concentration can be harmful even when a merger might produce administrative or business efficiencies.",
    significance:
      "The case is a classic reference point for bank-merger review, financial-market concentration, and the interaction between prudential supervision and competition policy.",
    sourceHref: "https://supreme.justia.com/cases/federal/us/374/321/",
    sourceLabel: "Justia U.S. Supreme Court Center",
    concepts: ["Bank mergers", "Market concentration", "Antitrust"]
  },
  {
    title: "TSC Industries, Inc. v. Northway, Inc.",
    slug: "tsc-industries-v-northway-1976",
    citation: "426 U.S. 438 (1976)",
    court: "Supreme Court of the United States",
    year: "1976",
    field: "Securities Regulation",
    issue: "Materiality standard for omissions in proxy statements.",
    facts:
      "TSC Industries issued proxy materials for a shareholder vote involving National Industries. Northway, a TSC shareholder, alleged that the proxy statement omitted facts about National's control position and other information relevant to the transaction.",
    holding:
      "The Court adopted a substantial-likelihood standard for materiality under the proxy rules.",
    reasoning:
      "Justice Marshall rejected both overly loose and overly demanding formulations of materiality. A fact is material if there is a substantial likelihood that a reasonable shareholder would consider it important in deciding how to vote, and if disclosure would significantly alter the total mix of information available.",
    significance:
      "TSC supplies the canonical materiality standard used across securities disclosure and fraud doctrine, linking legal liability to information value and investor decision-making.",
    sourceHref: "https://supreme.justia.com/cases/federal/us/426/438/",
    sourceLabel: "Justia U.S. Supreme Court Center",
    concepts: ["Materiality", "Proxy disclosure", "Investor decision-making"]
  },
  {
    title: "Ernst & Ernst v. Hochfelder",
    slug: "ernst-ernst-v-hochfelder-1976",
    citation: "425 U.S. 185 (1976)",
    court: "Supreme Court of the United States",
    year: "1976",
    field: "Securities Regulation",
    issue: "Scienter requirement for private damages actions under Section 10(b) and Rule 10b-5.",
    facts:
      "Customers of a brokerage firm sued the firm's accountants after the firm's president carried out a fraudulent scheme involving escrow accounts. The plaintiffs alleged that the accountants failed to discover the fraud during audits.",
    holding:
      "The Court held that negligence alone is insufficient for a private damages action under Section 10(b) and Rule 10b-5.",
    reasoning:
      "Justice Powell focused on the statutory language prohibiting manipulative or deceptive devices and concluded that Congress required a culpable mental state. The opinion limited implied private liability by distinguishing intentional or reckless deception from ordinary professional negligence.",
    significance:
      "Hochfelder is central to the economics of securities enforcement because it allocates liability risk between fraud deterrence, professional gatekeeping, and the cost of expansive private litigation.",
    sourceHref: "https://supreme.justia.com/cases/federal/us/425/185/",
    sourceLabel: "Justia U.S. Supreme Court Center",
    concepts: ["Scienter", "Rule 10b-5", "Gatekeeper liability"]
  },
  {
    title: "Chiarella v. United States",
    slug: "chiarella-v-united-states-1980",
    citation: "445 U.S. 222 (1980)",
    court: "Supreme Court of the United States",
    year: "1980",
    field: "Securities Regulation",
    issue: "Insider-trading liability and the duty to disclose or abstain.",
    facts:
      "Vincent Chiarella worked at a financial printer handling confidential takeover materials. He inferred the identities of target companies from documents, bought their shares before public announcement, and was convicted of securities fraud.",
    holding:
      "The Court reversed the conviction because Chiarella owed no duty of disclosure to the shareholders from whom he purchased shares.",
    reasoning:
      "Justice Powell reasoned that silence in securities trading is not fraudulent absent a duty to disclose arising from a fiduciary or similar relationship of trust and confidence. Mere possession of nonpublic market information did not create a general duty to all market participants.",
    significance:
      "Chiarella is a foundational insider-trading case for studying property-like claims over information, fiduciary relationships, and the limits of equal-access theories.",
    sourceHref: "https://supreme.justia.com/cases/federal/us/445/222/",
    sourceLabel: "Justia U.S. Supreme Court Center",
    concepts: ["Insider trading", "Fiduciary duty", "Market information"]
  },
  {
    title: "Aronson v. Lewis",
    slug: "aronson-v-lewis-1984",
    citation: "473 A.2d 805 (Del. 1984)",
    court: "Supreme Court of Delaware",
    year: "1984",
    field: "Corporate Law",
    issue: "Demand futility, derivative litigation, and judicial deference to board decisions.",
    facts:
      "A shareholder of Meyers Parking System challenged employment and compensation arrangements involving the company's controlling figure, Harry Fink, without first making a litigation demand on the board.",
    holding:
      "The Delaware Supreme Court articulated a two-pronged demand-futility test and dismissed the complaint for failure to plead demand futility with particularity.",
    reasoning:
      "The court linked derivative litigation to board authority over corporate claims. Demand is excused only when particularized facts create reasonable doubt that directors are disinterested and independent or that the challenged transaction was otherwise a valid exercise of business judgment.",
    significance:
      "Aronson is a classic gatekeeping case for agency-cost analysis, derivative suits, litigation incentives, and the allocation of control over corporate claims.",
    sourceHref: "https://law.justia.com/cases/delaware/supreme-court/1984/473-a-2d-805-4.html",
    sourceLabel: "Justia",
    concepts: ["Derivative litigation", "Demand futility", "Business judgment"]
  },
  {
    title: "Moran v. Household International, Inc.",
    slug: "moran-v-household-international-1985",
    citation: "500 A.2d 1346 (Del. 1985)",
    court: "Supreme Court of Delaware",
    year: "1985",
    field: "Corporate Law",
    issue: "Validity of the shareholder rights plan as an antitakeover device.",
    facts:
      "Household International adopted a shareholder rights plan before any specific takeover bid was pending. Shareholders challenged the plan as an improper restriction on shareholder voting and transfer rights.",
    holding:
      "The Delaware Supreme Court upheld the rights plan as a valid exercise of board authority subject to fiduciary review.",
    reasoning:
      "The court treated the poison pill as a defensive mechanism within the board's statutory authority, while emphasizing that its later use would remain subject to fiduciary scrutiny under Unocal. The board could respond to takeover threats, but not with unlimited discretion.",
    significance:
      "Moran is the canonical poison-pill case and is central to law-and-economics debates over hostile takeovers, bargaining power, and managerial entrenchment.",
    sourceHref: "https://law.justia.com/cases/delaware/supreme-court/1985/500-a-2d-1346-1.html",
    sourceLabel: "Justia",
    concepts: ["Poison pill", "Takeover defenses", "Board authority"]
  },
  {
    title: "Paramount Communications Inc. v. Time Inc.",
    slug: "paramount-v-time-1989",
    citation: "571 A.2d 1140 (Del. 1989)",
    court: "Supreme Court of Delaware",
    year: "1989",
    field: "Corporate Law",
    issue: "Board defensive action, long-term corporate strategy, and the boundary of Revlon duties.",
    facts:
      "Time agreed to combine with Warner. After Paramount made an all-cash tender offer for Time, Time restructured the Warner transaction to proceed as a tender offer, making the Paramount bid more difficult to complete.",
    holding:
      "The Delaware Supreme Court refused to enjoin Time's transaction and held that Revlon duties had not been triggered.",
    reasoning:
      "The court reasoned that Time's board had not abandoned its long-term strategic plan or initiated an inevitable sale of control. Under enhanced scrutiny, the board could consider threats to corporate policy and effectiveness, including the risk that shareholders would accept a premium bid that displaced the board's strategic judgment.",
    significance:
      "Paramount v. Time is central to the tension between shareholder choice, board authority, long-term strategy, and takeover-market discipline.",
    sourceHref: "https://law.justia.com/cases/delaware/supreme-court/1990/571-a-2d-1140-5.html",
    sourceLabel: "Justia",
    concepts: ["Takeover defenses", "Long-term strategy", "Revlon duties"]
  },
  {
    title: "Kahn v. Lynch Communication Systems, Inc.",
    slug: "kahn-v-lynch-1994",
    citation: "638 A.2d 1110 (Del. 1994)",
    court: "Supreme Court of Delaware",
    year: "1994",
    field: "Corporate Law",
    issue: "Standard of review for controlling-shareholder freeze-out mergers and procedural protections.",
    facts:
      "Alcatel, which held a large block of Lynch Communication Systems stock, proposed to acquire the remaining shares. A special committee negotiated the transaction, but minority shareholders challenged the merger as unfair.",
    holding:
      "The Delaware Supreme Court held that entire fairness remained the standard of review, though approval by an independent committee or informed majority-of-the-minority vote could shift the burden of proof.",
    reasoning:
      "The court reasoned that a controlling shareholder's influence can undermine arm's-length bargaining even when procedural protections are used. Special committees and minority votes matter, but at that stage they affected burden allocation rather than replacing entire fairness review.",
    significance:
      "Kahn v. Lynch is a key pre-MFW case for studying controller power, bargaining under structural coercion, and the design of minority-shareholder protections.",
    sourceHref: "https://law.justia.com/cases/delaware/supreme-court/1994/272-1993-3.html",
    sourceLabel: "Justia",
    concepts: ["Controller transactions", "Entire fairness", "Special committee"]
  },
  {
    title: "Barnett Bank of Marion County, N.A. v. Nelson",
    slug: "barnett-bank-v-nelson-1996",
    citation: "517 U.S. 25 (1996)",
    court: "Supreme Court of the United States",
    year: "1996",
    field: "Financial Law",
    issue: "National bank powers, insurance sales, and federal preemption of state restrictions.",
    facts:
      "A federal statute authorized national banks in small towns to sell insurance. Florida law prohibited most banks from selling insurance, and the state insurance commissioner ordered Barnett Bank to stop.",
    holding:
      "The Court held that federal law preempted the Florida restriction because the state law significantly interfered with national bank powers.",
    reasoning:
      "Justice Breyer reasoned from the history and structure of national-bank powers. States retain room to regulate, but they may not prevent or significantly interfere with a national bank's exercise of federally authorized powers.",
    significance:
      "Barnett Bank is a central banking preemption case and remains important for analyzing the division of authority between federal bank charters and state consumer or insurance regulation.",
    sourceHref: "https://supreme.justia.com/cases/federal/us/517/25/",
    sourceLabel: "Justia U.S. Supreme Court Center",
    concepts: ["Bank powers", "Preemption", "Insurance sales"]
  },
  {
    title: "United States v. O'Hagan",
    slug: "united-states-v-ohagan-1997",
    citation: "521 U.S. 642 (1997)",
    court: "Supreme Court of the United States",
    year: "1997",
    field: "Securities Regulation",
    issue: "Misappropriation theory of insider trading and tender-offer fraud rules.",
    facts:
      "James O'Hagan, a partner at a law firm representing a bidder in a potential tender offer for Pillsbury, bought Pillsbury securities and options before the bid became public, even though he did no work on the representation.",
    holding:
      "The Court upheld insider-trading liability under the misappropriation theory and sustained SEC Rule 14e-3.",
    reasoning:
      "Justice Ginsburg reasoned that a trader commits deception when he misappropriates confidential information in breach of a duty owed to the source of the information and secretly uses it for securities trading. The fraud lies in feigning loyalty to the information source while converting the information for personal trading gain.",
    significance:
      "O'Hagan is essential for studying information ownership, fiduciary duties, tender-offer regulation, and the deterrence of opportunistic trading.",
    sourceHref: "https://supreme.justia.com/cases/federal/us/521/642/",
    sourceLabel: "Justia U.S. Supreme Court Center",
    concepts: ["Insider trading", "Misappropriation theory", "Tender offers"]
  },
  {
    title: "Watters v. Wachovia Bank, N.A.",
    slug: "watters-v-wachovia-bank-2007",
    citation: "550 U.S. 1 (2007)",
    court: "Supreme Court of the United States",
    year: "2007",
    field: "Financial Law",
    issue: "National bank operating subsidiaries, state licensing, and federal supervisory authority.",
    facts:
      "Michigan sought to apply state mortgage-lending registration, inspection, and enforcement requirements to Wachovia Mortgage, a state-chartered operating subsidiary of a national bank.",
    holding:
      "The Court held that the state requirements were preempted as applied to the national bank's operating subsidiary.",
    reasoning:
      "Justice Ginsburg's opinion treated the subsidiary's mortgage-lending activities as activities of the national bank for purposes of OCC supervision. The state could regulate generally applicable laws that did not interfere with banking powers, but it could not impose visitorial or licensing regimes on the federally supervised banking enterprise.",
    significance:
      "Watters is important for the pre-crisis architecture of banking preemption, regulatory arbitrage, and the boundary between state consumer oversight and federal bank supervision.",
    sourceHref: "https://supreme.justia.com/cases/federal/us/550/1/",
    sourceLabel: "Justia U.S. Supreme Court Center",
    concepts: ["Bank supervision", "Operating subsidiaries", "Preemption"]
  },
  {
    title: "Janus Capital Group, Inc. v. First Derivative Traders",
    slug: "janus-capital-group-v-first-derivative-traders-2011",
    citation: "564 U.S. 135 (2011)",
    court: "Supreme Court of the United States",
    year: "2011",
    field: "Securities Regulation",
    issue: "Who makes a statement for purposes of private Rule 10b-5 liability.",
    facts:
      "Investors sued Janus Capital Group and Janus Capital Management, alleging that misleading statements in Janus mutual fund prospectuses about market timing caused losses to shareholders of the adviser parent company.",
    holding:
      "The Court held that the maker of a statement under Rule 10b-5 is the person or entity with ultimate authority over the statement, including its content and whether to communicate it.",
    reasoning:
      "Justice Thomas drew a sharp line between primary liability and aiding or drafting assistance. Because the mutual fund, not the adviser, had ultimate authority over the prospectuses, the adviser could not be treated as the maker of the statements in a private Rule 10b-5 action.",
    significance:
      "Janus is significant for gatekeeper liability, mutual-fund governance, private enforcement boundaries, and the allocation of disclosure responsibility.",
    sourceHref: "https://supreme.justia.com/cases/federal/us/564/135/",
    sourceLabel: "Justia U.S. Supreme Court Center",
    concepts: ["Rule 10b-5", "Primary liability", "Gatekeeper liability"]
  },
  {
    title: "Kahn v. M&F Worldwide Corp.",
    slug: "kahn-v-mf-worldwide-2014",
    citation: "88 A.3d 635 (Del. 2014)",
    court: "Supreme Court of Delaware",
    year: "2014",
    field: "Corporate Law",
    issue: "Business-judgment review for controller buyouts using dual procedural protections.",
    facts:
      "MacAndrews & Forbes proposed to acquire the remaining shares of M&F Worldwide. The transaction was conditioned from the outset on approval by an independent special committee and by an informed, uncoerced majority of the minority shareholders.",
    holding:
      "The Delaware Supreme Court held that business-judgment review applies to controller buyouts if specified dual protections are established from the beginning and function effectively.",
    reasoning:
      "The court reasoned that an empowered independent committee with the ability to say no, combined with an informed and uncoerced majority-of-the-minority vote, can replicate key protections of an arm's-length merger. The rule creates incentives for controllers to adopt stronger procedural protections rather than rely on only one cleansing device.",
    significance:
      "MFW is central to modern freeze-out merger practice and to law-and-economics analysis of procedural design, bargaining incentives, and minority-shareholder protection.",
    sourceHref: "https://law.justia.com/cases/delaware/supreme-court/2014/334-2013.html",
    sourceLabel: "Justia",
    concepts: ["Controller transactions", "Majority-of-minority vote", "Special committee"]
  },
  {
    title: "Keeble v. Hickeringill",
    slug: "keeble-v-hickeringill-1707",
    citation: "11 East 574, 103 Eng. Rep. 1127 (K.B. 1707)",
    court: "King's Bench",
    year: "1707",
    field: "Foundations of Law and Economics",
    issue: "Property protection, malicious interference, and incentives to make productive use of land.",
    facts:
      "Keeble operated a decoy pond to attract wild ducks for commercial capture. Hickeringill, from nearby land, fired guns to frighten ducks away from the pond, not to capture them himself but to disrupt Keeble's livelihood.",
    holding:
      "The court allowed Keeble to recover for malicious interference with his lawful trade.",
    reasoning:
      "Chief Justice Holt distinguished ordinary competition from deliberate disturbance of another's productive use. A rival could lawfully establish another decoy pond and attract ducks away, but firing guns solely to destroy Keeble's operation imposed a loss without socially productive competition.",
    significance:
      "The case is useful for law-and-economics teaching because it separates competition from rent-destroying interference and links property/tort protection to incentives for productive investment.",
    sourceHref: "https://en.wikisource.org/wiki/Keeble_v_Hickeringill",
    sourceLabel: "Wikisource",
    concepts: ["Property rights", "Productive use", "Malicious interference"]
  },
  {
    title: "Pierson v. Post",
    slug: "pierson-v-post-1805",
    citation: "3 Cai. R. 175 (N.Y. Sup. Ct. 1805)",
    court: "Supreme Court of Judicature of New York",
    year: "1805",
    field: "Foundations of Law and Economics",
    issue: "First possession, capture rules, and the administrability of property rights in wild animals.",
    facts:
      "Post was hunting and pursuing a fox with hounds on unpossessed land. Pierson, knowing of the pursuit, killed and carried away the fox before Post had captured it.",
    holding:
      "The court held that pursuit alone did not create property in the fox; occupancy required capture, mortal wounding, or otherwise depriving the animal of natural liberty.",
    reasoning:
      "The majority adopted a bright-line possession rule grounded in capture rather than pursuit. The rule favored administrability and reduced disputes over uncertain degrees of effort, while the dissent would have credited reasonable prospect of capture to encourage fox hunting.",
    significance:
      "Pierson is a canonical case for studying how property rules trade off administrability, incentives, and fairness when law defines the moment at which resources become owned.",
    sourceHref: "https://www.law.olemiss.edu/assets/pierson-v-post-Gershon.pdf",
    sourceLabel: "University of Mississippi School of Law",
    concepts: ["First possession", "Capture rule", "Property rights"]
  },
  {
    title: "Hadley v. Baxendale",
    slug: "hadley-v-baxendale-1854",
    citation: "9 Exch. 341, 156 Eng. Rep. 145 (1854)",
    court: "Court of Exchequer",
    year: "1854",
    field: "Foundations of Law and Economics",
    issue: "Foreseeability, information disclosure, and limits on consequential damages for breach of contract.",
    facts:
      "Hadley's mill stopped when a crankshaft broke. Baxendale's carrier firm delayed delivery of the shaft to the manufacturer, and Hadley sought lost profits for the period during which the mill remained shut.",
    holding:
      "The court limited recoverable damages to losses arising naturally from the breach or losses reasonably contemplated by both parties at the time of contracting.",
    reasoning:
      "The court reasoned that special losses are not recoverable unless the breaching party had notice of the special circumstances. Because the carrier was not told that delay would shut down the mill and cause lost profits, those losses were too remote.",
    significance:
      "Hadley is foundational for economic analysis of contract damages because it encourages parties with unusual loss exposure to disclose information or contract for special protection.",
    sourceHref: "https://lawlibrarycollections.umn.edu/classic-cases-contract-hadley-v-baxendale",
    sourceLabel: "University of Minnesota Law Library",
    concepts: ["Contract damages", "Foreseeability", "Information forcing"]
  },
  {
    title: "Sturges v. Bridgman",
    slug: "sturges-v-bridgman-1879",
    citation: "11 Ch. D. 852 (1879)",
    court: "Court of Appeal of England and Wales",
    year: "1879",
    field: "Foundations of Law and Economics",
    issue: "Nuisance, coming to the nuisance, and reciprocal conflicts over incompatible land uses.",
    facts:
      "A confectioner had long used noisy mortars in his kitchen. A physician later built a consulting room at the end of his garden near the kitchen and complained that the noise interfered with medical practice.",
    holding:
      "The court granted relief to the physician and rejected the argument that long use alone had legalized the nuisance against the newly affected use.",
    reasoning:
      "The court emphasized that nuisance depends on locality and interference with reasonable enjoyment of land. Prior activity did not automatically create a right to impose noise on later neighboring uses unless an easement had been acquired.",
    significance:
      "Sturges is a classic Coasean teaching case because the dispute illustrates reciprocal externalities, entitlement assignment, transaction costs, and the problem of incompatible land uses.",
    sourceHref: "https://www.lawcases.net/cases/sturges-v-bridgman-1879-11-ch-d-852/",
    sourceLabel: "National Case Law Archive",
    concepts: ["Externalities", "Nuisance", "Transaction costs"]
  },
  {
    title: "Vincent v. Lake Erie Transportation Co.",
    slug: "vincent-v-lake-erie-transportation-1910",
    citation: "109 Minn. 456, 124 N.W. 221 (1910)",
    court: "Supreme Court of Minnesota",
    year: "1910",
    field: "Foundations of Law and Economics",
    issue: "Private necessity, compensation, and liability for intentional emergency use of another's property.",
    facts:
      "During a severe storm, Lake Erie's vessel remained moored to Vincent's dock to avoid danger to the ship. The crew kept the vessel secured to the dock, and the ship repeatedly struck and damaged the dock.",
    holding:
      "The court held that necessity justified the continued use of the dock but did not excuse liability for the resulting damage.",
    reasoning:
      "The court distinguished the privilege to use another's property in an emergency from the allocation of loss caused by that use. Because the shipowner deliberately preserved its own property by imposing damage on the dock, compensation was required.",
    significance:
      "Vincent is a core case for studying liability rules, private necessity, and the economic distinction between permission to act and the obligation to internalize resulting costs.",
    sourceHref: "https://case-law.vlex.com/vid/vincent-v-lake-erie-929983526",
    sourceLabel: "vLex",
    concepts: ["Private necessity", "Liability rules", "Cost internalization"]
  },
  {
    title: "United States v. Carroll Towing Co.",
    slug: "united-states-v-carroll-towing-1947",
    citation: "159 F.2d 169 (2d Cir. 1947)",
    court: "United States Court of Appeals for the Second Circuit",
    year: "1947",
    field: "Foundations of Law and Economics",
    issue: "Negligence, precaution costs, accident probability, and expected loss.",
    facts:
      "A tug shifted barges in New York Harbor, leading to the breakaway and sinking of the barge Anna C. The dispute included whether the barge owner's failure to have a bargee aboard contributed to the loss.",
    holding:
      "The court held that the absence of a bargee could constitute contributory negligence depending on the burden of precaution, probability of harm, and gravity of loss.",
    reasoning:
      "Judge Learned Hand expressed negligence as a comparison between the burden of adequate precaution and the expected accident loss, commonly summarized as B less than P multiplied by L. The formula made explicit the balancing already implicit in reasonable-care analysis.",
    significance:
      "Carroll Towing is perhaps the most direct judicial expression of cost-benefit reasoning in negligence law and is central to economic analysis of accident law.",
    sourceHref: "https://openjuris.org/cases/8uGDMFv2f6Q",
    sourceLabel: "OpenJuris",
    concepts: ["Negligence", "Hand formula", "Accident costs"]
  },
  {
    title: "Boomer v. Atlantic Cement Co.",
    slug: "boomer-v-atlantic-cement-1970",
    citation: "26 N.Y.2d 219, 257 N.E.2d 870 (1970)",
    court: "New York Court of Appeals",
    year: "1970",
    field: "Foundations of Law and Economics",
    issue: "Permanent damages, injunctions, and the choice between property-rule and liability-rule protection.",
    facts:
      "Nearby landowners sued Atlantic Cement, alleging that dirt, smoke, and vibration from a large cement plant constituted a nuisance. The plant was economically substantial, and closing it would have large consequences for the defendant and employees.",
    holding:
      "The court allowed an injunction to be vacated upon payment of permanent damages to the plaintiffs.",
    reasoning:
      "The court acknowledged the nuisance but balanced the small adjudicated harm to plaintiffs against the large economic cost of shutting the plant. Rather than grant an unconditional injunction, it converted the remedy into permanent damages, effectively allowing continued operation upon compensation.",
    significance:
      "Boomer is a leading case for teaching the remedial choice between injunctions and damages, especially in connection with Calabresi and Melamed's property-rule/liability-rule framework.",
    sourceHref: "https://www.nycourts.gov/reporter/archives/boomer_atlantic.htm",
    sourceLabel: "New York State Law Reporting Bureau",
    concepts: ["Property rules and liability rules", "Nuisance", "Permanent damages"]
  },
  {
    title: "Spur Industries, Inc. v. Del E. Webb Development Co.",
    slug: "spur-industries-v-del-webb-1972",
    citation: "108 Ariz. 178, 494 P.2d 700 (1972)",
    court: "Supreme Court of Arizona",
    year: "1972",
    field: "Foundations of Law and Economics",
    issue: "Coming to the nuisance, injunctions, and indemnity for relocating incompatible land uses.",
    facts:
      "Spur operated a cattle feedlot in an agricultural area. Del E. Webb later developed Sun City nearby and sought to enjoin the feedlot because odors and flies affected residents.",
    holding:
      "The court required Spur to cease the nuisance but required Webb to indemnify Spur for the cost of moving or shutting down.",
    reasoning:
      "The court distinguished public nuisance effects on residents from the developer's role in bringing residential development to the nuisance. Injunctive relief protected the public, while indemnity allocated relocation costs to the party whose development made the conflict acute.",
    significance:
      "Spur is a classic example of remedial tailoring in law and economics: the court separated entitlement protection from cost allocation to account for timing, reliance, and land-use externalities.",
    sourceHref: "https://www.lsd.law/briefs/view/spur-industries-inc-v-del-e-webb-development-co-37475800",
    sourceLabel: "LSData",
    concepts: ["Coming to the nuisance", "Injunctions", "Cost allocation"]
  },
  {
    title: "Palsgraf v. Long Island Railroad Co.",
    slug: "palsgraf-v-long-island-railroad-1928",
    citation: "248 N.Y. 339, 162 N.E. 99 (1928)",
    court: "New York Court of Appeals",
    year: "1928",
    field: "Foundations of Law and Economics",
    issue: "Duty, foreseeability, and the legal boundary placed on liability for an extended chain of accidental harm.",
    facts:
      "Railroad employees helped a passenger board a moving train. A small newspaper-wrapped package he carried fell to the tracks; the package unexpectedly contained fireworks, whose explosion allegedly caused scales at the other end of the platform to strike Helen Palsgraf.",
    holding:
      "The court reversed the judgment for Palsgraf, concluding that the railroad employees' conduct did not breach a duty owed to her because the package gave no notice of a risk to a person in her position.",
    reasoning:
      "Chief Judge Cardozo framed negligence relationally: conduct is wrongful toward a plaintiff only when the apparent range of danger includes that plaintiff. Judge Andrews's dissent instead treated duty more broadly and would have addressed remoteness through proximate cause.",
    significance:
      "Palsgraf provides a canonical setting for comparing foreseeability, scope-of-risk limits, causal remoteness, and the administrative cost of extending accident liability.",
    sourceHref: "https://www.nycourts.gov/reporter/archives/palsgraf_lirr.htm",
    sourceLabel: "New York State Law Reporting Bureau",
    concepts: ["Proximate cause", "Foreseeability", "Negligence rule"]
  },
  {
    title: "Escola v. Coca Cola Bottling Co.",
    slug: "escola-v-coca-cola-bottling-1944",
    citation: "24 Cal. 2d 453, 150 P.2d 436 (1944)",
    court: "Supreme Court of California",
    year: "1944",
    field: "Foundations of Law and Economics",
    issue: "Proof of negligence and the allocation of product-accident risk between manufacturers and consumers.",
    facts:
      "Gladys Escola, a restaurant waitress, was injured when a Coca-Cola bottle broke in her hand. The bottler had manufactured and delivered the bottle, but direct proof identifying the precise defect or negligent act was unavailable.",
    holding:
      "The court affirmed judgment for Escola under res ipsa loquitur. Justice Traynor separately argued that manufacturers should be strictly liable for defective products placed on the market.",
    reasoning:
      "The majority found that the circumstances permitted an inference of negligence because careful handling after delivery and the bottler's control over the production process made ordinary consumer proof unusually difficult. The concurrence emphasized risk spreading, accident prevention, and enterprise responsibility.",
    significance:
      "Escola is a foundational bridge from negligence proof to modern product strict liability and supports analysis of information asymmetry, insurance, product pricing, and enterprise liability.",
    sourceHref: "https://scocal.stanford.edu/opinion/escola-v-coca-cola-bottling-co-29248",
    sourceLabel: "California Supreme Court Resources",
    concepts: ["Enterprise liability", "Strict liability", "Product liability"]
  },
  {
    title: "Guth v. Loft, Inc.",
    slug: "guth-v-loft-1939",
    citation: "5 A.2d 503 (Del. 1939)",
    court: "Supreme Court of Delaware",
    year: "1939",
    field: "Corporate Law",
    issue: "Duty of loyalty and a corporate officer's appropriation of an opportunity connected to the corporation's business and resources.",
    facts:
      "Charles Guth, president of Loft, pursued the Pepsi-Cola opportunity personally after Coca-Cola declined a requested syrup discount. He used Loft personnel, facilities, credit, and other resources to develop and operate the Pepsi business without fully protecting Loft's interest.",
    holding:
      "The Delaware Supreme Court upheld equitable relief requiring Guth to account for and transfer the appropriated Pepsi interest to Loft.",
    reasoning:
      "The court treated the opportunity as one Loft was financially able to pursue, within its line of business, and of practical advantage to it. A fiduciary could not place personal interest in conflict with the corporation and use corporate resources to capture the gain.",
    significance:
      "Guth supplies the classic Delaware formulation of the corporate-opportunity doctrine and frames disclosure, consent, resource use, and hidden appropriation as agency-cost problems.",
    sourceHref: "https://law.counselstack.com/opinion/guth-v-loft-inc-del-1939",
    sourceLabel: "Counsel Stack",
    concepts: ["Corporate opportunity", "Duty of loyalty", "Agency costs"]
  },
  {
    title: "Marchand v. Barnhill",
    slug: "marchand-v-barnhill-2019",
    citation: "212 A.3d 805 (Del. 2019)",
    court: "Supreme Court of Delaware",
    year: "2019",
    field: "Corporate Law",
    issue: "Board-level compliance systems and oversight of a risk central to the company's single-line business.",
    facts:
      "After a listeria outbreak, Blue Bell recalled all products, halted production, laid off employees, and faced a liquidity crisis. The complaint alleged that the board had no committee, regular reporting protocol, or board-level process focused on food safety despite its centrality to the business.",
    holding:
      "The court reversed dismissal, holding that the particularized allegations supported an inference that the directors failed to make a good-faith effort to establish a board-level monitoring system for mission-critical food-safety risk.",
    reasoning:
      "Blue Bell operated in one heavily regulated line of business, making food safety essential to survival. The absence of a relevant committee, regular reports, or a protocol for escalating safety information supported a pleading-stage inference of an utter failure to implement oversight.",
    significance:
      "Marchand refines Caremark by connecting oversight intensity to mission-critical risk and is central to the economics of board information systems, monitoring, and concentrated operational failure.",
    sourceHref: "https://law.justia.com/cases/delaware/supreme-court/2019/533-2018.html",
    sourceLabel: "Justia",
    concepts: ["Mission-critical risk", "Caremark oversight", "Board monitoring"]
  },
  {
    title: "SEC v. Texas Gulf Sulphur Co.",
    slug: "sec-v-texas-gulf-sulphur-1968",
    citation: "401 F.2d 833 (2d Cir. 1968) (en banc)",
    court: "U.S. Court of Appeals for the Second Circuit",
    year: "1968",
    field: "Securities Regulation",
    issue: "Trading while in possession of material nonpublic information and the accuracy of corporate statements about a major mineral discovery.",
    facts:
      "Texas Gulf Sulphur personnel learned of unusually promising drilling results near Timmins, Ontario. Before the information became public, several insiders traded or recommended the company's securities, and the company issued a press release that the SEC challenged as misleading.",
    holding:
      "The court applied a disclose-or-abstain principle to insiders possessing material nonpublic information and remanded aspects of the press-release and remedy analysis.",
    reasoning:
      "Materiality depended on the probability of the event and its anticipated magnitude in light of the company's activity. Persons with access to information intended for corporate use could not exploit it in trading before effective public dissemination.",
    significance:
      "Texas Gulf Sulphur is foundational to federal insider-trading doctrine and links information parity, materiality, trading incentives, and the timing of public disclosure.",
    sourceHref: "https://law.justia.com/cases/federal/appellate-courts/F2/401/833/324140/",
    sourceLabel: "Justia",
    concepts: ["Disclose or abstain", "Insider trading", "Materiality"]
  },
  {
    title: "Omnicare, Inc. v. Laborers District Council Construction Industry Pension Fund",
    slug: "omnicare-v-laborers-2015",
    citation: "575 U.S. 175 (2015)",
    court: "Supreme Court of the United States",
    year: "2015",
    field: "Securities Regulation",
    issue: "When statements of opinion in a registration statement may be actionable under Securities Act Section 11.",
    facts:
      "Omnicare's registration statement expressed the belief that its contractual arrangements complied with federal and state law. Investors alleged that the opinions were materially false or misleading in light of government concerns and later enforcement activity.",
    holding:
      "The Court held that an opinion is not an untrue statement of fact merely because it later proves incorrect, but an opinion can be actionable if not sincerely held or if omitted facts make it misleading in context.",
    reasoning:
      "An opinion conveys both the stated view and, depending on context, facts about the speaker's basis for holding it. Liability therefore requires attention to subjective belief, embedded facts, omitted information, and what a reasonable investor would understand.",
    significance:
      "Omnicare structures opinion liability around context and information quality, reducing hindsight liability while preserving disclosure duties when issuers omit facts that conflict with the impression conveyed.",
    sourceHref: "https://www.govinfo.gov/app/details/USREPORTS-575/USREPORTS-575-175",
    sourceLabel: "U.S. Government Publishing Office",
    concepts: ["Opinion liability", "Material omissions", "Registration statements"]
  },
  {
    title: "Lorenzo v. SEC",
    slug: "lorenzo-v-sec-2019",
    citation: "587 U.S. 71 (2019)",
    court: "Supreme Court of the United States",
    year: "2019",
    field: "Securities Regulation",
    issue: "Primary scheme liability for knowingly disseminating false statements authored by another person.",
    facts:
      "Francis Lorenzo sent prospective investors emails describing a debenture issuer's assets as valuable even though he knew the issuer had disclosed that its intellectual property was effectively worthless. His supervisor supplied the content, and Lorenzo argued that he was not the statement's maker under Janus.",
    holding:
      "The Court held that knowingly disseminating false or misleading statements with intent to defraud could violate Rule 10b-5(a) and (c) and related statutory provisions even when the disseminator did not make the statement under Rule 10b-5(b).",
    reasoning:
      "The antifraud provisions overlap, and sending false statements directly to investors can constitute a deceptive device, act, or practice. The maker limitation for one subsection did not immunize intentional dissemination under the others.",
    significance:
      "Lorenzo defines the boundary between statement-maker doctrine and scheme liability, affecting intermediary responsibility, primary liability, and the reach of public enforcement.",
    sourceHref: "https://www.supremecourt.gov/opinions/18pdf/17-1077_21o3.pdf",
    sourceLabel: "Supreme Court of the United States",
    concepts: ["Scheme liability", "Rule 10b-5", "Scienter"]
  },
  {
    title: "SEC v. C.M. Joiner Leasing Corp.",
    slug: "sec-v-joiner-leasing-1943",
    citation: "320 U.S. 344 (1943)",
    court: "Supreme Court of the United States",
    year: "1943",
    field: "Securities Regulation",
    issue: "Whether sales of oil-lease assignments promoted together with a promised test well were investment contracts subject to federal securities law.",
    facts:
      "Promoters sold small assignments of Texas oil leases to dispersed purchasers. Their sales campaign emphasized a proposed test well and the prospect that successful drilling would increase the value of the interests, although the instruments were framed as real-property transactions.",
    holding:
      "The Court held that the transactions were investment contracts and therefore securities because the offer, distribution plan, and economic inducements presented the leases together with the promoter's drilling undertaking as an investment.",
    reasoning:
      "Federal securities classification turns on the economic character of what was offered, not only the formal title transferred under state law. The promised well and the purchasers' dependence on the promoter supplied the investment character of the scheme.",
    significance:
      "Joiner is an early economic-reality decision that preceded Howey and remains useful for studying functional classification, promotional promises, and avoidance through transactional form.",
    sourceHref: "https://www.govinfo.gov/app/details/USREPORTS-320/USREPORTS-320-344",
    sourceLabel: "U.S. Government Publishing Office",
    concepts: ["Investment contract", "Economic reality", "Securities definition"]
  },
  {
    title: "SEC v. Ralston Purina Co.",
    slug: "sec-v-ralston-purina-1953",
    citation: "346 U.S. 119 (1953)",
    court: "Supreme Court of the United States",
    year: "1953",
    field: "Securities Regulation",
    issue: "Whether an issuer's unregistered stock offers to employees qualified as transactions not involving a public offering.",
    facts:
      "Ralston Purina sold unregistered treasury stock to employees whom it described as key personnel. Purchasers included clerical, production, maintenance, and other employees scattered across many locations, and the record did not show that they had access to registration-equivalent information.",
    holding:
      "The Court held that the offering was not exempt. The private-offering inquiry turns on whether the offerees need the Securities Act's protection, and the issuer bears the burden of showing the information access necessary to support the exemption.",
    reasoning:
      "Employee status and the number of offerees were not independently decisive. Because the employees were not shown to be able to obtain the information registration would disclose, the statutory purpose of informed investment required registration protection.",
    significance:
      "Ralston Purina anchors the information-access rationale for private offerings and frames exemptions as an allocation of disclosure protection rather than a label attached to a selected investor group.",
    sourceHref: "https://www.govinfo.gov/app/details/USREPORTS-346/USREPORTS-346-119",
    sourceLabel: "U.S. Government Publishing Office",
    concepts: ["Private offering exemption", "Investor access to information", "Registration"]
  },
  {
    title: "SEC v. Capital Gains Research Bureau, Inc.",
    slug: "sec-v-capital-gains-research-bureau-1963",
    citation: "375 U.S. 180 (1963)",
    court: "Supreme Court of the United States",
    year: "1963",
    field: "Securities Regulation",
    issue: "Whether an investment adviser's undisclosed practice of trading before and after its recommendations could be enjoined under the Investment Advisers Act.",
    facts:
      "A registered investment adviser purchased shares for its own account shortly before recommending those securities to clients, then sold after the recommendations contributed to market-price increases. The adviser did not disclose this practice, commonly described as scalping.",
    holding:
      "The Court held that the SEC could obtain an injunction requiring full disclosure of the trading practice because it operated as a fraud or deceit on clients under Section 206 of the Investment Advisers Act.",
    reasoning:
      "The Act incorporated fiduciary principles and a disclosure-oriented approach to adviser conflicts. The SEC did not need to prove intent to injure or completed client loss before seeking prophylactic relief against the undisclosed conflict.",
    significance:
      "Capital Gains is foundational to investment-adviser fiduciary regulation and shows how disclosure can address agency costs created when advice and proprietary trading are combined.",
    sourceHref: "https://www.govinfo.gov/app/details/USREPORTS-375/USREPORTS-375-180",
    sourceLabel: "U.S. Government Publishing Office",
    concepts: ["Investment adviser fiduciary duty", "Scalping", "Disclosure"]
  },
  {
    title: "SEC v. National Securities, Inc.",
    slug: "sec-v-national-securities-1969",
    citation: "393 U.S. 453 (1969)",
    court: "Supreme Court of the United States",
    year: "1969",
    field: "Securities Regulation",
    issue: "Whether state insurance regulation displaced an SEC antifraud action arising from shareholder communications about an insurer merger.",
    facts:
      "The SEC alleged that communications sent to obtain shareholder approval of a merger between insurance companies contained material misrepresentations and omissions. Arizona's insurance director had approved the transaction, and the defendants invoked the McCarran-Ferguson Act.",
    holding:
      "The Court held that the federal securities action was not barred. Regulation of the insurer-shareholder relationship was securities regulation rather than regulation of the insurer-policyholder relationship protected by McCarran-Ferguson.",
    reasoning:
      "Federal protection of shareholders could coexist with state protection of policyholders, and the SEC's requested remedies did not directly invalidate state insurance law. The shareholders' exchange of old shares for new shares also fell within the antifraud provisions' purchase-or-sale requirement.",
    significance:
      "National Securities clarifies how overlapping federal securities and state insurance regimes can coexist and provides a framework for examining regulatory federalism and remedial coordination.",
    sourceHref: "https://www.govinfo.gov/app/details/USREPORTS-393/USREPORTS-393-453",
    sourceLabel: "U.S. Government Publishing Office",
    concepts: ["Federalism", "Proxy fraud", "Insurance regulation"]
  },
  {
    title: "Aaron v. SEC",
    slug: "aaron-v-sec-1980",
    citation: "446 U.S. 680 (1980)",
    court: "Supreme Court of the United States",
    year: "1980",
    field: "Securities Regulation",
    issue: "Which antifraud provisions require the SEC to prove scienter when it seeks an injunction.",
    facts:
      "The SEC sued a broker-dealer manager after representatives under his supervision made false statements during a stock-sales campaign. The lower court imposed an injunction, and the court of appeals treated negligence as sufficient because the plaintiff was the SEC.",
    holding:
      "The Court held that the SEC must prove scienter under Exchange Act Section 10(b), Rule 10b-5, and Securities Act Section 17(a)(1), but not under Sections 17(a)(2) and 17(a)(3).",
    reasoning:
      "The mental-state requirement follows the text of each substantive provision rather than the identity of the plaintiff or the requested remedy. Language concerning a device or scheme to defraud implies knowing misconduct, while the latter two clauses focus on statements or practices and their effects.",
    significance:
      "Aaron supplies the central map of culpability standards in SEC civil antifraud enforcement and permits analysis of how differentiated fault thresholds affect deterrence and enforcement error.",
    sourceHref: "https://www.govinfo.gov/app/details/USREPORTS-446/USREPORTS-446-680",
    sourceLabel: "U.S. Government Publishing Office",
    concepts: ["Scienter", "Public enforcement", "Section 17(a)"]
  },
  {
    title: "SEC v. Zandford",
    slug: "sec-v-zandford-2002",
    citation: "535 U.S. 813 (2002)",
    court: "Supreme Court of the United States",
    year: "2002",
    field: "Securities Regulation",
    issue: "Whether a broker's securities sales and misappropriation of the proceeds were fraud in connection with the sale of securities.",
    facts:
      "A broker sold securities from the discretionary account of an elderly client and her disabled daughter and diverted the proceeds for his own use. The court of appeals treated the misconduct as theft occurring after otherwise lawful securities transactions.",
    holding:
      "The Court unanimously held that the alleged fraud was in connection with securities sales because each sale furthered and was not independent of the broker's continuing scheme to misappropriate the clients' assets.",
    reasoning:
      "The sales were the mechanism through which the broker converted the securities into proceeds he could take. Treating the transactions and appropriation as separate would permit a fiduciary to evade the federal antifraud rule through the sequence used to carry out the scheme.",
    significance:
      "Zandford gives the in-connection-with requirement a functional application in broker misconduct while preserving a boundary question between federal securities fraud and ordinary conversion.",
    sourceHref: "https://www.govinfo.gov/app/details/USREPORTS-535/USREPORTS-535-813",
    sourceLabel: "U.S. Government Publishing Office",
    concepts: ["Rule 10b-5", "In connection with", "Broker fraud"]
  },
  {
    title: "Gabelli v. SEC",
    slug: "gabelli-v-sec-2013",
    citation: "568 U.S. 442 (2013)",
    court: "Supreme Court of the United States",
    year: "2013",
    field: "Securities Regulation",
    issue: "When the five-year limitations period begins for an SEC action seeking civil penalties for alleged fraud.",
    facts:
      "The SEC alleged that an investment adviser and a portfolio manager permitted a favored investor to engage in market timing while representing that the fund prohibited the practice. The agency filed its civil-penalty claim more than five years after the alleged conduct.",
    holding:
      "The Court unanimously held that the five-year period in 28 U.S.C. Section 2462 begins when the allegedly fraudulent conduct occurs, not when the government discovers it.",
    reasoning:
      "The ordinary accrual rule starts the clock when the plaintiff has a complete cause of action. The discovery rule developed to protect defrauded private parties did not fit a government agency whose mission, powers, and investigative tools include detecting violations.",
    significance:
      "Gabelli establishes a repose-oriented limit on delayed SEC penalty actions and sharpens the tradeoff between enforcement of concealed misconduct and predictable closure of public claims.",
    sourceHref: "https://www.govinfo.gov/app/details/USREPORTS-568/USREPORTS-568-442",
    sourceLabel: "U.S. Government Publishing Office",
    concepts: ["Statute of limitations", "Civil penalties", "Public enforcement"]
  },
  {
    title: "Kokesh v. SEC",
    slug: "kokesh-v-sec-2017",
    citation: "581 U.S. 455 (2017)",
    court: "Supreme Court of the United States",
    year: "2017",
    field: "Securities Regulation",
    issue: "Whether SEC disgorgement is a penalty subject to the five-year limitations period in 28 U.S.C. Section 2462.",
    facts:
      "The SEC alleged that Charles Kokesh concealed the misappropriation of $34.9 million from business-development companies over many years. The district court applied the limitations period to civil penalties but not to a disgorgement award covering older conduct.",
    holding:
      "The Court unanimously held that SEC disgorgement operates as a penalty for purposes of Section 2462, so a disgorgement claim must be commenced within five years of accrual.",
    reasoning:
      "The remedy responds to violations of public law, serves deterrent and punitive purposes, and is not invariably paid to victims. Those characteristics made it a penalty within the limitations statute even when a court labeled it disgorgement.",
    significance:
      "Kokesh constrained retrospective monetary enforcement and set up the later inquiry in Liu concerning when a narrower profits remedy can qualify as equitable relief.",
    sourceHref: "https://www.supremecourt.gov/opinions/16pdf/16-529_i426.pdf",
    sourceLabel: "Supreme Court of the United States",
    concepts: ["Disgorgement", "Statute of limitations", "Civil penalties"]
  },
  {
    title: "Liu v. SEC",
    slug: "liu-v-sec-2020",
    citation: "591 U.S. 71 (2020)",
    court: "Supreme Court of the United States",
    year: "2020",
    field: "Securities Regulation",
    issue: "When disgorgement in an SEC civil action qualifies as equitable relief authorized by federal securities law.",
    facts:
      "Charles Liu and Xin Wang raised funds from foreign investors for a cancer-treatment center but used much of the money contrary to the private offering memorandum. The district court imposed joint-and-several disgorgement equal to the amount raised less funds remaining in project accounts.",
    holding:
      "The Court held that a profits award can qualify as equitable relief when it does not exceed a wrongdoer's net profits and is awarded for victims, and it remanded for application of those limits.",
    reasoning:
      "Equity permits stripping net gains from wrongdoing but does not ordinarily authorize punishment. Legitimate expenses, individual rather than automatic joint liability, and the destination of recovered funds therefore matter to the remedy's equitable character.",
    significance:
      "Liu preserves disgorgement while imposing a compensatory and net-profits discipline, making remedy design, expense deduction, and distribution central to SEC enforcement analysis.",
    sourceHref: "https://www.supremecourt.gov/opinions/19pdf/18-1501_8n5a.pdf",
    sourceLabel: "Supreme Court of the United States",
    concepts: ["Disgorgement", "Net profits", "Investor compensation"]
  },
  {
    title: "SEC v. Jarkesy",
    slug: "sec-v-jarkesy-2024",
    citation: "603 U.S. 109 (2024)",
    court: "Supreme Court of the United States",
    year: "2024",
    field: "Securities Regulation",
    issue: "Whether the SEC may adjudicate a securities-fraud claim for civil penalties in-house without a jury.",
    facts:
      "The SEC brought an administrative antifraud proceeding against investment adviser George Jarkesy, Jr. and Patriot28, LLC. Its final order found securities violations and imposed a $300,000 civil penalty, among other relief.",
    holding:
      "The Court held that the Seventh Amendment entitles defendants to a jury when the SEC seeks civil penalties for securities fraud and that the public-rights exception did not permit this claim to be resolved in-house.",
    reasoning:
      "The remedy and the substance of the antifraud claim made the action analogous to a common-law fraud suit. Because the claim concerned private rights and sought punitive monetary relief, it had to proceed before a jury in an Article III court.",
    significance:
      "Jarkesy changes the forum design of important SEC penalty actions and exposes the tradeoff between administrative specialization and the procedural protections, cost, and fact-finding structure of federal litigation.",
    sourceHref: "https://www.supremecourt.gov/opinions/23pdf/22-859_1924.pdf",
    sourceLabel: "Supreme Court of the United States",
    concepts: ["Seventh Amendment", "Administrative enforcement", "Civil penalties"]
  },
  {
    title: "FDIC v. Philadelphia Gear Corp.",
    slug: "fdic-v-philadelphia-gear-1986",
    citation: "476 U.S. 426 (1986)",
    court: "Supreme Court of the United States",
    year: "1986",
    field: "Financial Law",
    issue: "Whether an unfunded standby letter of credit backed by a contingent promissory note creates an insured deposit.",
    facts:
      "Penn Square Bank issued a standby letter of credit to protect Philadelphia Gear against a customer's nonpayment. The customer provided a contingent promissory note rather than transferring noncontingent funds to the bank, and the bank failed before the condition for payment matured.",
    holding:
      "The Court held that the standby letter of credit backed by a contingent promissory note did not create an insured deposit under the federal deposit-insurance statute.",
    reasoning:
      "No money or equivalent noncontingent asset had been entrusted to the bank. The Court also relied on the FDIC's longstanding interpretation and distinguished protection of deposited assets from a public guarantee of contingent commercial credit.",
    significance:
      "Philadelphia Gear exposes the functional and formal boundary of deposit insurance and its effects on moral hazard, product classification, bank funding, and contingent credit instruments.",
    sourceHref: "https://www.govinfo.gov/app/details/USREPORTS-476/USREPORTS-476-426",
    sourceLabel: "U.S. Government Publishing Office",
    concepts: ["Deposit insurance boundary", "Standby letter of credit", "Moral hazard"]
  }
];

const CASE_FIELD_ORDER: CaseField[] = [
  "Foundations of Law and Economics",
  "Corporate Law",
  "Securities Regulation",
  "Financial Law"
];

export function getAllCases() {
  return [...CASE_RECORDS].sort((first, second) => {
    const fieldOrder = CASE_FIELD_ORDER.indexOf(first.field) - CASE_FIELD_ORDER.indexOf(second.field);
    if (fieldOrder !== 0) return fieldOrder;
    return Number.parseInt(first.year, 10) - Number.parseInt(second.year, 10);
  });
}

export function getCaseBySlug(slug: string) {
  return CASE_RECORDS.find((caseRecord) => caseRecord.slug === slug) ?? null;
}

export function getCaseFields() {
  return CASE_FIELD_ORDER.filter((field) => CASE_RECORDS.some((caseRecord) => caseRecord.field === field));
}
