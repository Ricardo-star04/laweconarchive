export type UpdateEntry = {
  date: string;
  title: string;
  summary: string;
  items: string[];
};

export const UPDATE_ENTRIES: UpdateEntry[] = [
  {
    date: "2026-07-28",
    title: "Stanford cardinal theme and homepage institutions introduced",
    summary:
      "The archive now uses Stanford's official cardinal palette, a locally stored Stanford Law School image, and a direct homepage route to Stanford's law-and-economics program.",
    items: [
      "Rebuilt the semantic color tokens around Stanford Cardinal Red, dark cardinal, black, cool grey, and a restrained warm paper tint.",
      "Replaced the homepage institutional image with Stanford Law School's Crown Quadrangle photograph from Stanford University's Campus Access Guide and retained the official source link.",
      "Added the Stanford John M. Olin Program in Law and Economics immediately below ECGI in the external research links.",
      "Preserved equal desktop column height by keeping the research-links panel flexible within a fully stretched sidebar."
    ]
  },
  {
    date: "2026-07-28",
    title: "Research Weekly Issue 002 published",
    summary:
      "The weekly research feed now covers five newly surfaced working papers on antitrust preferences, tax transparency, social insurance, holding companies, and fiscal capacity.",
    items: [
      "Advanced the report to Issue 002, checked sources through 28 July 2026, and scheduled the next issue for 3 August at 08:00 China Standard Time.",
      "Added five primary NBER records with verified authors, working-paper numbers, research questions, methods, contributions, and interpretive cautions.",
      "Disclosed that the source records provide a July 2026 issue month rather than exact posting days, avoiding false precision about release dates.",
      "Rebuilt the methods overview and research watchlist around information experiments, administrative data, regression discontinuity, field experimentation, and sufficient-statistics welfare analysis."
    ]
  },
  {
    date: "2026-07-28",
    title: "Reading covers completed and scholar-page titles separated",
    summary:
      "Every reading now has a local archive-designed cover, and long titles no longer collide with reading-level metadata in scholar profiles.",
    items: [
      "Generated the 24 missing publication covers, bringing local cover coverage from 135 of 159 readings to all 159 readings.",
      "Made the optional volume, issue, or edition label conditional so a cover can be generated without inventing unverified bibliographic metadata.",
      "Expanded the year-and-level column in scholar-page reading lists and converted the level text into a compact bounded label.",
      "Preserved the existing title, author, venue, and topic hierarchy while preventing long introductory labels from entering the title column."
    ]
  },
  {
    date: "2026-07-28",
    title: "Footer simplified and compacted",
    summary:
      "The site footer now uses a tighter three-part layout with a visually integrated archive emblem and a single centered copyright line.",
    items: [
      "Integrated the emblem's white background into the footer color while preserving the original locally stored mark.",
      "Removed the Corrections block and its email address from the footer.",
      "Removed the editorial strapline and retained only the centered 2026 copyright statement.",
      "Eliminated the lower divider and reduced logo size, column gaps, navigation spacing, and vertical padding."
    ]
  },
  {
    date: "2026-07-28",
    title: "Scholar Match expanded to thirty questions",
    summary:
      "The research-affinity exercise now covers a broader range of law-and-economics methods, institutions, and normative concerns.",
    items: [
      "Expanded Scholar Match from 10 to 30 questions while preserving sequential progress, back navigation, and session restoration.",
      "Added contract, property, European corporate governance, corporate finance, banking, accounting and disclosure, enforcement, comparative law, empirical methods, litigation, compliance, and regulatory political-economy questions.",
      "Removed the former hand-maintained candidate restriction so every scholar in the archive can receive a score when referenced by a question.",
      "Added the recently introduced European scholars throughout the matching weights and retained three ranked results rather than presenting one deterministic label."
    ]
  },
  {
    date: "2026-07-28",
    title: "European scholar directory expanded",
    summary:
      "The scholar archive now adds ten European and Europe-based researchers across comparative company law, corporate finance, banking, financial regulation, and empirical institutional analysis.",
    items: [
      "Expanded the scholar directory from 83 to 93 profiles with Klaus J. Hopt, Paul L. Davies, Jennifer Payne, Wolf-Georg Ringe, Marco Pagano, Mathias Dewatripont, Xavier Freixas, Renée B. Adams, Julian Franks, and Simon Deakin.",
      "Downloaded ten portraits from public university, business-school, research-centre, or scholar pages and stored them locally to avoid remote-image failures and placeholder cards.",
      "Added source-linked institutional descriptions, research fields, archive relevance notes, and chronologically ordered representative contributions to every new profile.",
      "Extended European coverage across Germany, the United Kingdom, Italy, Belgium, and Spain, with added depth in board structure, restructuring, ownership, banking, systemic risk, and legal institutionalism."
    ]
  },
  {
    date: "2026-07-28",
    title: "Corporate-finance accounting path added",
    summary:
      "The concept archive now connects financial statements to operating cash, valuation, financing, acquisition accounting, and shareholder claims.",
    items: [
      "Expanded the concept index from 130 to 148 entries with a new Accounting and Corporate Finance field.",
      "Grouped the new material under the existing field filter so the concept index retains its compact directory structure.",
      "Added working relations, interpretive cautions, and official SEC or IFRS accounting references to all eighteen new concept pages.",
      "Distinguished standardized accounting amounts from analytical or non-GAAP measures such as EBITDA, free cash flow to firm, ROIC, and net debt."
    ]
  },
  {
    date: "2026-07-28",
    title: "SEC enforcement case line expanded",
    summary:
      "The case archive now adds ten Supreme Court decisions that trace the institutional design of SEC enforcement from transaction classification to modern limits on remedies and forum choice.",
    items: [
      "Expanded the case archive from 50 to 60 records with Joiner, Ralston Purina, Capital Gains, National Securities, Aaron, Zandford, Gabelli, Kokesh, Liu, and Jarkesy.",
      "Added primary-source links from the U.S. Government Publishing Office or the Supreme Court to every new decision.",
      "Completed facts, holdings, reasoning, significance, institutional problems, economic analysis, alternative mechanisms, limits, and research questions for each case.",
      "Built a chronological SEC enforcement path covering economic reality, offering exemptions, adviser conflicts, scienter, transaction nexus, limitations, disgorgement, and the Seventh Amendment."
    ]
  },
  {
    date: "2026-07-26",
    title: "Footer hierarchy refined",
    summary:
      "The footer now presents site identity, research navigation, editorial information, and contact details in a stable responsive grid.",
    items: [
      "Rebuilt the desktop footer as three aligned columns for the archive mark, research links, and site information.",
      "Changed research links from irregular wrapping to a predictable two-column grid and separated correction contact details from navigation.",
      "Added a compact archive emblem and moved the editorial principles into a quieter lower bar.",
      "Preserved a clear stacked order and comfortable link spacing on mobile screens."
    ]
  },
  {
    date: "2026-07-26",
    title: "Start Here illustration and desktop hierarchy refined",
    summary:
      "The orientation page now uses a clearer desktop reading sequence around its locally stored Justice illustration.",
    items: [
      "Rebuilt the opening as a balanced editorial spread with a wider introduction, aligned Justice illustration, and direct links to concepts, literature, and methods.",
      "Moved section headings into a consistent desktop rail and aligned the three reading-stage cards to a shared grid.",
      "Tightened disciplinary entry rows with numbered routes, stable text columns, and right-aligned destination links.",
      "Included a concise caption linking the blindfold, scales, and sword to impartial judgment, institutional balance, and the practical force of law.",
      "Preserved the natural single-column reading order on smaller screens."
    ]
  },
  {
    date: "2026-07-26",
    title: "Archive mark introduced",
    summary:
      "The editor-supplied Archivum Iuris et Oeconomiae mark now forms part of the site identity without crowding research content.",
    items: [
      "Added a locally stored full mark to the About page and documented the blindfold, scales, sword, and Latin name.",
      "Created a compact emblem crop for the site header and browser icon while keeping it hidden at the narrowest mobile width.",
      "Added the Latin archive name to the footer and recorded the mark's local, editor-supplied provenance in the Source Policy.",
      "Clarified that the mark represents dialogue between legal and economic analysis rather than reducing justice to a single efficiency measure."
    ]
  },
  {
    date: "2026-07-26",
    title: "European scholarship and comparative reading paths expanded",
    summary:
      "The archive now adds six European scholars and twelve source-linked works across corporate governance, comparative law, securities intermediation, banking regulation, and financial stability.",
    items: [
      "Expanded the scholar directory from 77 to 83 profiles by adding Alessio M. Pacces, Marco Becht, Martin F. Hellwig, Jean Tirole, Mathias Siems, and Colin Mayer.",
      "Downloaded six portraits from official university or research-institute pages and stored them locally, with source attribution retained on each scholar profile.",
      "Expanded the reading index from 147 to 159 works, including European evidence on shareholder activism and ownership, comparative-law methods, corporate-control theory, bank capital, and systemic-risk architecture.",
      "Added official institutional descriptions, research fields, representative contributions, and archive relevance notes for every new scholar."
    ]
  },
  {
    date: "2026-07-25",
    title: "Representative contributions ordered chronologically",
    summary:
      "Scholar profiles now present dated representative works from earliest to latest.",
    items: [
      "Extracted publication years from contribution titles and ordered dated works in ascending chronological order.",
      "Used the final year appearing in a title so a publication year remains distinct from historical periods mentioned in the title.",
      "Placed works without a verified year after dated works while preserving their existing relative order."
    ]
  },
  {
    date: "2026-07-25",
    title: "Archive search refined",
    summary:
      "Search now ranks results by relevance and presents a clearer, keyboard-friendly mobile panel.",
    items: [
      "Replaced unranked substring filtering with phrase and token scoring across titles, content types, descriptions, and keywords.",
      "Added automatic input focus, Escape-key dismissal, outside-click dismissal, result counts, and a more useful no-results prompt.",
      "Converted mobile search into a viewport-bounded panel with independent result scrolling and larger controls.",
      "Prevented mobile search and navigation from remaining open at the same time."
    ]
  },
  {
    date: "2026-07-25",
    title: "Mobile navigation and homepage image refined",
    summary:
      "The mobile menu now behaves as a compact, independently scrolling navigation panel, and the homepage institutional image is served locally on every screen size.",
    items: [
      "Reorganized mobile navigation around Quick access, Reference, Analysis, and Site groups while removing the redundant Home entry.",
      "Converted the expanded menu into a viewport-bounded panel that no longer pushes the homepage content down.",
      "Increased mobile search and menu controls to comfortable touch targets and retained a compact current-section indicator.",
      "Downloaded and optimized the Columbia Law School image for local desktop delivery while retaining its Wikimedia attribution."
    ]
  },
  {
    date: "2026-07-25",
    title: "Research Weekly refocused on new academic outputs",
    summary:
      "The weekly report is now a publication feed for recently released law-and-economics articles and working papers.",
    items: [
      "Replaced the thematic reading guide with five source-linked recent research records from NBER, Chicago Unbound, and the Antonin Scalia Law School.",
      "Added publication status, source date, research question, method or data, principal contribution, interpretive caution, and topical tags to every record.",
      "Restricted the editorial scope to peer-reviewed articles, accepted manuscripts, working papers, and discussion papers; general news and routine legal developments are excluded.",
      "Added an explicit extended-lookback notice where repositories do not provide an exact posting day and retained the Monday 08:00 update schedule."
    ]
  },
  {
    date: "2026-07-25",
    title: "Case Method replaced by Research Weekly",
    summary:
      "The former case-method guide is now a scheduled law-and-economics research briefing that connects current questions to the archive.",
    items: [
      "Replaced the Case Method navigation entry with Law & Economics Research Weekly across desktop navigation, mobile navigation, search, breadcrumbs, the footer, and the sitemap.",
      "Built a five-part weekly briefing covering research signals, a four-text reading path, case watch, a method note, and a forward research agenda.",
      "Kept the former Case Method URL as a redirect so existing links continue to resolve.",
      "Set the publication cadence to every Monday at 08:00 China Standard Time and added a source-verification rule to the page."
    ]
  },
  {
    date: "2026-07-25",
    title: "Concept and case archive expanded",
    summary:
      "The archive now connects additional private-law, corporate-governance, securities, and financial-law concepts to verified judicial materials and curated readings.",
    items: [
      "Expanded the concept index from 110 to 130 entries, adding property modularity, litigation selection, product-risk allocation, corporate opportunity, mission-critical oversight, securities-liability boundaries, and structured-finance concepts.",
      "Expanded the case index from 42 to 50 decisions with Palsgraf, Escola, Guth, Marchand, Texas Gulf Sulphur, Omnicare, Lorenzo, and Philadelphia Gear.",
      "Added case-specific institutional problems, economic analysis, alternative mechanisms, limits, and research questions for all eight new decisions.",
      "Added curated reading paths for every new concept and connected each new case to matching concept and literature pages."
    ]
  },
  {
    date: "2026-07-25",
    title: "Scholar and reading archive expanded again",
    summary:
      "The archive now adds a focused layer of contract, property, litigation, securities-gatekeeper, and systemic-risk scholarship.",
    items: [
      "Expanded the scholar directory from 71 to 77 profiles by adding Ian Ayres, Kathryn E. Spier, Henry E. Smith, Alan Schwartz, Frank Partnoy, and Steven L. Schwarcz.",
      "Added six locally stored portraits downloaded from Yale, Harvard, UC Berkeley, and Duke institutional pages, with source attribution retained on every profile.",
      "Expanded the reading index from 135 to 147 works with six foundational private-law and litigation readings, three securities-regulation readings, and three financial-risk readings.",
      "Added official-profile notes, disciplinary fields, major works, research relevance, and source-linked institutional descriptions for every new scholar."
    ]
  },
  {
    date: "2026-07-25",
    title: "Research design canvas and governance controls refined",
    summary:
      "The Methods Toolkit now connects design decisions, reproducible analysis, data stewardship, team accountability, and release review in one staged workflow.",
    items: [
      "Rebuilt the research design canvas as a five-stage workspace covering mechanism, measurement, identification, diagnostics, reproducibility, and governance.",
      "Added browser-local draft recovery, stage and overall completion indicators, Markdown download, structured TODO export, and explicit falsification, inference, heterogeneity, and transport fields.",
      "Added reproducibility controls for provenance, scripted analysis, computational environments, decision logs, and independent reruns.",
      "Added governance controls for legal authority, privacy and security, team responsibility, conflicts, disclosure, and release approval.",
      "Reorganized the page into six numbered sections with clearer action, reference, and release-checklist hierarchy."
    ]
  },
  {
    date: "2026-07-25",
    title: "Methods toolkit expanded",
    summary:
      "The Methods Toolkit now covers additional empirical and mixed-method designs and distinguishes the data structures required by different timing strategies.",
    items: [
      "Added specifications for matching and weighting, synthetic control, interrupted time series, legal text analysis and NLP, and surveys, interviews, and mixed methods.",
      "Expanded the selector to distinguish panel data, repeated cross-sections, aggregate time series, market prices, comparative materials, and survey or interview evidence.",
      "Separated reform timing with comparison units, single-unit donor-pool designs, interrupted time series, and precisely timed market events.",
      "Added design-fit explanations and compatibility warnings when the selected data structure cannot support the proposed identification strategy."
    ]
  },
  {
    date: "2026-07-24",
    title: "Research-fields grid balanced",
    summary:
      "The Fields index now uses a centered, symmetrical layout for its five research areas.",
    items: [
      "Replaced the uneven two-column flow with a six-column desktop grid: three equal cards above and two equal cards below.",
      "Kept tablet and mobile layouts in a stable single-column sequence so no field appears as an isolated remainder.",
      "Standardized card height, numbering, reading counts, description rhythm, and field-entry links."
    ]
  },
  {
    date: "2026-07-24",
    title: "Comparative-law interface refined",
    summary:
      "The comparative-law section was reorganized around a clearer institutional comparison workflow and more legible field notes.",
    items: [
      "Removed the duplicated topic list and card sequence in favor of a single comparison-method overview and five structured field-note cards.",
      "Added visible counts for systems and comparison axes, strengthened mobile card hierarchy, and clarified entry points into each field note.",
      "Redesigned detail pages with comparison matrices, numbered systems and questions, a prominent research-use panel, related-material cards, and previous/next navigation."
    ]
  },
  {
    date: "2026-07-24",
    title: "History and theory lineages combined",
    summary:
      "The archive merged its chronological field history and problem-centered theory lineages into a single research map.",
    items: [
      "Combined the historical timeline, analytical frames, and all theory-lineage reading paths on the History and Theory page.",
      "Consolidated desktop navigation, mobile navigation, site search, breadcrumbs, and the sitemap around the merged page.",
      "Preserved the former Theory Lineages URL as a permanent redirect to the corresponding section of the combined page."
    ]
  },
  {
    date: "2026-07-24",
    title: "Scholar and reading indexes expanded",
    summary:
      "The archive broadened its scholar directory and source-linked bibliography across institutional theory, governance, market information, financial stability, and empirical methods.",
    items: [
      "Expanded the scholar index from 59 to 71 profiles, with new official-source notes for institutional, corporate, securities, financial, and enforcement scholars.",
      "Added locally stored, source-attributed portraits for all 12 newly added scholars using university and Nobel Prize institutional pages.",
      "Replaced Oren Bar-Gill's unstable remote image with a locally stored Harvard Law School portrait and retained institutional attribution.",
      "Expanded the reading index from 115 to 135 works by adding four verified sources to each of the archive's five field bibliographies.",
      "Generated matching local publication covers and preserved surname, field, year, type, DOI, and full-text search behavior for the new records."
    ]
  },
  {
    date: "2026-06-05",
    title: "Hohfeldian legal relations completed",
    summary:
      "The archive completed its Hohfeldian concept coverage by separating the eight basic legal positions and their relationship structure.",
    items: [
      "Added standalone concept pages for claim-right, duty, privilege, no-right, power, liability, immunity, and disability.",
      "Added a relationship entry explaining Hohfeldian correlatives and opposites: claim-right/duty, privilege/no-right, power/liability, immunity/disability, and their corresponding opposites.",
      "Updated the existing Hohfeldian incidents concept so readers see the full eight-position framework rather than only the four active incidents."
    ]
  },
  {
    date: "2026-06-05",
    title: "Foundational concepts expanded from Cooter and Ulen",
    summary:
      "The archive expanded its concept layer with core analytical terms drawn from the structure of Cooter and Ulen's Law and Economics.",
    items: [
      "Added microeconomic and welfare concepts including Pareto efficiency, equilibrium, risk aversion, game theory, and the Prisoners' Dilemma.",
      "Added property, tort, and contract concepts including public goods, the tragedy of the commons, the normative Coase and Hobbes theorems, the Hand formula, strict liability, expectation damages, efficient breach, and relational contracts.",
      "Added legal-process and enforcement concepts including settlement bargaining, expected judgment, standard of proof, selection effects, Type I and Type II errors, optimal deterrence, rational crime, and efficient punishment."
    ]
  },
  {
    date: "2026-06-05",
    title: "Topic bibliographies sorted by year",
    summary:
      "The archive updated topic pages so each field bibliography is displayed chronologically.",
    items: [
      "Added a topic-level reading helper that sorts readings by publication year and title.",
      "Updated field detail pages so Essential Readings and Full Bibliography use the same chronological order.",
      "Kept the global reading index controls unchanged so users can still sort by newest, oldest, or field order."
    ]
  },
  {
    date: "2026-06-05",
    title: "Classic case coverage expanded",
    summary:
      "The archive added additional corporate, securities, and financial-law cases with source-linked case notes.",
    items: [
      "Added corporate-law cases including Weinberger, Paramount v. QVC, and Caremark.",
      "Added securities-regulation cases including Blue Chip Stamps, Santa Fe, Morrison, and Halliburton II.",
      "Added Marquette National Bank as a financial-law case on bank powers, usury, and regulatory competition, and sorted the case index by field and year."
    ]
  },
  {
    date: "2026-06-05",
    title: "History section expanded",
    summary:
      "The archive expanded the history page to reflect the broader foundations now covered across scholars, readings, and concepts.",
    items: [
      "Extended the field history from a concise five-part timeline into a more detailed sequence covering analytical legal concepts, transaction costs, welfare analysis, corporate governance, securities regulation, behavioral law and economics, EU financial-market governance, and empirical legal studies.",
      "Added thematic labels to each historical milestone so readers can connect periods to concepts such as entitlements, agency costs, disclosure, prospect theory, ESMA, systemic risk, and causal inference.",
      "Added an interpretive guide on legal form, economic mechanism, and institutional setting to make the history page better aligned with the archive's current structure."
    ]
  },
  {
    date: "2026-06-05",
    title: "Behavioral law-and-economics foundations added",
    summary:
      "The archive expanded its foundational theory layer with behaviorally informed law-and-economics scholars, readings, and concepts.",
    items: [
      "Added behavioral law-and-economics scholars including Christine Jolls, Cass R. Sunstein, Richard H. Thaler, Russell B. Korobkin, Jeffrey J. Rachlinski, Oren Bar-Gill, and Daniel Kahneman.",
      "Expanded the Foundations of Law and Economics reading list with works on prospect theory, rationality assumptions, endowment effects, libertarian paternalism, litigation psychology, and consumer-contract design.",
      "Added concepts including behavioral law and economics, bounded rationality, prospect theory, loss aversion, endowment effect, status quo bias, choice architecture, libertarian paternalism, debiasing through law, and behavioral market failure."
    ]
  },
  {
    date: "2026-06-05",
    title: "Securities-law coverage expanded",
    summary:
      "The archive expanded its securities-regulation materials with additional scholars, canonical works, and doctrine-oriented concepts.",
    items: [
      "Added securities-law and disclosure-regulation scholars including Louis Loss, James D. Cox, Donald C. Langevoort, Jill E. Fisch, Stephen J. Choi, Zohar Goshen, and Christian Leuz.",
      "Expanded the securities-regulation reading list with treatise, institutional-history, behavioral, disclosure-economics, intermediary, and securities-litigation materials.",
      "Added concepts including issuer disclosure, information traders, securities class actions, loss causation, scienter, due diligence defense, and information overload."
    ]
  },
  {
    date: "2026-06-05",
    title: "Foundational theory layer expanded",
    summary:
      "The archive expanded its foundations coverage with additional law-and-economics scholars, classic books and articles, and core analytical concepts.",
    items: [
      "Added foundational scholars Guido Calabresi, Robert D. Cooter, A. Mitchell Polinsky, and Thomas S. Ulen with institutional source links and image attribution.",
      "Expanded the Foundations of Law and Economics reading list with works by Calabresi, Posner, Cooter and Ulen, Polinsky, and Shavell.",
      "Added core concepts including legal entitlements, accident costs, error costs, marginal deterrence, positive and normative analysis, and wealth maximization."
    ]
  },
  {
    date: "2026-06-05",
    title: "Publication covers standardized",
    summary:
      "The archive standardized all reading-page and reading-index publication covers as locally generated archive-designed covers.",
    items: [
      "Removed the external publication-cover registry from the active cover-selection logic.",
      "Updated reading records to display local SVG covers generated from archive metadata.",
      "Removed the reading-index cover-source filter because all readings now use the same cover logic."
    ]
  },
  {
    date: "2026-06-05",
    title: "Foundational law-and-economics materials added",
    summary:
      "The archive added a dedicated foundations layer for core law-and-economics theory across readings, concepts, and scholar profiles.",
    items: [
      "Added a Foundations of Law and Economics field with classic works by Coase, Calabresi, Becker, Demsetz, Williamson, North, Kaplow, and Shavell.",
      "Expanded the concept index with Coase Theorem, externalities, social cost, property and liability rules, least-cost avoider, expected sanction, Kaldor-Hicks efficiency, and institutional change.",
      "Added scholar profiles for Gary S. Becker, Oliver E. Williamson, and Douglass C. North with institutional source links and image attribution."
    ]
  },
  {
    date: "2026-06-04",
    title: "Classic case index restored",
    summary:
      "The archive restored the Cases section with a selective set of source-linked corporate, securities, and financial-law cases.",
    items: [
      "Added a Cases index and individual case detail pages.",
      "Included classic cases such as Dodge, Van Gorkom, Unocal, Revlon, Blasius, Howey, Dirks, Basic, Central Bank, Winstar, NationsBank, and Cuomo.",
      "Connected Cases through navigation, footer links, search, breadcrumbs, and sitemap."
    ]
  },
  {
    date: "2026-06-04",
    title: "Academic typography and index layout refined",
    summary:
      "The archive received a typographic pass focused on quieter indexes, clearer metadata hierarchy, and more consistent long-form reading rhythm.",
    items: [
      "Reworked reading, scholar, and concept indexes into more directory-like layouts with stronger left-hand grouping.",
      "Adjusted reading, scholar, and concept detail pages to reduce hard borders and clarify source, metadata, and cross-reference sections.",
      "Refined global article typography, heading rhythm, and publication-cover presentation for a more restrained academic reading experience."
    ]
  },
  {
    date: "2026-06-04",
    title: "Institutional image set expanded",
    summary:
      "The archive added additional source-linked institutional images and redistributed page visuals so major sections do not rely on repeated photographs.",
    items: [
      "Added source-linked images for Columbia Law School, the New York Stock Exchange, the London Stock Exchange, the Federal Reserve Bank of New York, the Bank for International Settlements, and Langdell Hall.",
      "Assigned distinct visual groups to the home page, concepts page, history page, and methods page.",
      "Kept image captions restrained and retained source and license links for external images."
    ]
  },
  {
    date: "2026-06-04",
    title: "Authoritative archive coverage expanded",
    summary:
      "The archive added a controlled set of authoritative scholars, readings, and concepts across corporate law, securities regulation, financial law, and research methods.",
    items: [
      "Added scholar profiles for Oliver Hart, Bengt Holmstrom, Markus K. Brunnermeier, and Ben S. Bernanke with institutional source links.",
      "Expanded the reading index with additional classic works on corporate control, contract theory, efficient markets, insider trading, financial crises, shadow banking, and causal identification.",
      "Expanded the concept index with additional terms linking governance, securities regulation, financial stability, and empirical research design."
    ]
  },
  {
    date: "2026-06-04",
    title: "Institutional visual polish added",
    summary:
      "The archive received a restrained visual refinement focused on hierarchy, Columbia-blue atmosphere, and a more formal institutional finish.",
    items: [
      "Revised the homepage hero, calls to action, field list, and foundational-literature panel.",
      "Softened the header with a lighter active state and subtle institutional shadow.",
      "Rebuilt the footer as a deep-blue institutional footer.",
      "Adjusted global typography and background treatment for a more polished English academic presentation."
    ]
  },
  {
    date: "2026-06-04",
    title: "Navigation and route surface reduced",
    summary:
      "The archive removed secondary routes and homepage material that were adding navigation weight without enough substantive research value.",
    items: [
      "Removed the homepage institutional-image register.",
      "Reduced secondary route exposure where navigation weight exceeded public research value.",
      "Removed Update Log from public navigation, footer, search, and sitemap while retaining the route for internal maintenance.",
      "Removed repeated back-navigation panels from reading, scholar, and concept detail pages."
    ]
  },
  {
    date: "2026-06-04",
    title: "Homepage and primer routes simplified",
    summary:
      "The archive removed homepage elements and a duplicated primer route that added navigation weight without improving the research pathway.",
    items: [
      "Removed the homepage archive-statistics register.",
      "Removed the homepage recent-notes block.",
      "Deleted the standalone introduction route and removed its navigation, footer, and sitemap entries."
    ]
  },
  {
    date: "2026-06-04",
    title: "Visual rules simplified",
    summary:
      "The archive removed redundant horizontal rules and boxed containers to make pages quieter and closer to a text-first academic register.",
    items: [
      "Removed default border rules from section titles, filters, next-step panels, visual registers, and major content templates.",
      "Softened home-page, reading, scholar, and concept indexes by replacing boxed groups with whitespace and light row separation.",
      "Kept borders for functional controls, code blocks, and publication-cover interiors where they support usability."
    ]
  },
  {
    date: "2026-06-04",
    title: "Columbia-blue theme applied",
    summary:
      "The archive color system was revised around a Columbia-blue palette while preserving a restrained academic reading environment.",
    items: [
      "Updated theme tokens for headings, links, borders, backgrounds, focus states, and selection color.",
      "Recolored decorative SVG assets and archive-designed publication covers to match the new palette.",
      "Kept deep blue tones for interactive elements so buttons and small labels remain legible."
    ]
  },
  {
    date: "2026-06-04",
    title: "Publication covers completed for all readings",
    summary:
      "Every reading now has a stable cover image, using verified external source images where available and archive-designed SVG covers where no reliable publisher image has been attached.",
    items: [
      "Generated local archive-designed SVG covers for all 59 reading records.",
      "Kept verified journal, book, and report images as the first-choice cover source.",
      "Updated the reading-index cover filter to distinguish external source images from archive-designed covers."
    ]
  },
  {
    date: "2026-06-04",
    title: "Index layout and image rules refined",
    summary:
      "The archive reduced index density, improved mobile filtering, and consolidated image presentation rules without adding a recent-additions section.",
    items: [
      "Moved reading, scholar, and concept filters into mobile-friendly collapsible panels while keeping desktop filters visible.",
      "Grouped readings, scholars, and concepts more explicitly so long indexes read as navigable registers rather than card streams.",
      "Introduced a shared archive image component and formal thumbnail/full-cover sizing for publication images."
    ]
  },
  {
    date: "2026-06-04",
    title: "Research archive structure expanded",
    summary:
      "The archive added stronger bibliographic filters, individual concept pages, citation guidance, and more structured scholar profiles without adding a recent-additions module.",
    items: [
      "Expanded the reading index with publication type, DOI, cover status, and year-range filters.",
      "Added individual concept pages with related literature, related scholars, and adjacent concepts.",
      "Added a Citation and Versioning page and connected it through navigation, search, and sitemap.",
      "Added contribution-structure panels to scholar pages."
    ]
  },
  {
    date: "2026-06-03",
    title: "Publication covers completed",
    summary:
      "Every reading record now has a publication cover area, using verified external cover images where available and clearly labeled archive-designed covers otherwise.",
    items: [
      "Expanded cover support from selected venue covers to all reading records.",
      "Added verified journal, book, report, and source images for several publishers and institutions.",
      "Added cover thumbnails to the literature index and full cover panels to reading detail pages."
    ]
  },
  {
    date: "2026-06-03",
    title: "Venue cover images added",
    summary:
      "Reading detail pages now support verified journal cover images for venues with stable source assets.",
    items: [
      "Added a venue-cover registry for verified journal cover image sources.",
      "Displayed venue covers in the reading detail header when a matching cover is available.",
      "Started with Journal of Financial Economics and Journal of Econometrics covers from Elsevier's journal asset service."
    ]
  },
  {
    date: "2026-06-03",
    title: "Home page hierarchy revised",
    summary:
      "The home page was reorganized to make the reader pathway clearer and reduce interruption between the archive brief and research fields.",
    items: [
      "Moved institutional images below the main research-field section so they support rather than interrupt navigation.",
      "Added direct home-page actions for orientation, readings, and concepts.",
      "Converted the home archive statistics into a quieter register-style sidebar."
    ]
  },
  {
    date: "2026-06-03",
    title: "Institutional images expanded",
    summary:
      "Additional source-linked institutional images were added to support the archive's corporate, securities, and financial-law themes.",
    items: [
      "Added a reusable visual-register component for restrained source-linked image groups.",
      "Added real institutional images for the Delaware Court of Chancery, the U.S. Securities and Exchange Commission, the Federal Reserve, and the Bank of England.",
      "Placed images on the home, concepts, methods, and history pages without changing the site's text-first academic hierarchy."
    ]
  },
  {
    date: "2026-06-03",
    title: "Header search compacted",
    summary:
      "The site search was moved from a standalone horizontal bar into a compact magnifying-glass control in the header.",
    items: [
      "Replaced the full-width search row with a header search icon.",
      "Kept archive search results available in a restrained dropdown panel.",
      "Removed the obsolete standalone search components to keep navigation simpler."
    ]
  },
  {
    date: "2026-06-03",
    title: "Institutional visual system refined",
    summary:
      "The archive layout was adjusted toward a more institutional, index-based presentation with restrained rules, numbered registers, and quieter page sections.",
    items: [
      "Reworked the home page hero into a source-oriented archive brief with a register-style scope panel.",
      "Updated section headers and next-step blocks to use a more formal two-column rule structure.",
      "Added numbering to literature, concept, and scholar indexes to reduce card-like presentation and strengthen archival hierarchy."
    ]
  },
  {
    date: "2026-06-03",
    title: "Hohfeld materials added",
    summary:
      "The archive added Wesley Newcomb Hohfeld materials across concepts, methods, literature, and scholar navigation.",
    items: [
      "Added Hohfeldian concepts for legal incidents, claim-rights and duties, and powers and liabilities.",
      "Added Hohfeldian legal-relations analysis to the methods toolkit.",
      "Added Hohfeld's 1913 and 1917 Yale Law Journal articles to the reading index with Yale repository source links.",
      "Added a dedicated Wesley Newcomb Hohfeld scholar profile with Yale archive notes and a public-domain portrait source."
    ]
  },
  {
    date: "2026-06-03",
    title: "Navigation hierarchy refined",
    summary:
      "The site navigation was reorganized around reader pathways, archive indexes, reference materials, and editorial information.",
    items: [
      "Promoted Fields, Readings, Scholars, and Start Here as primary desktop navigation paths.",
      "Grouped concepts, methods, history, cases, and primer materials under Reference.",
      "Aligned mobile navigation and footer links with the revised information architecture."
    ]
  },
  {
    date: "2026-06-03",
    title: "Reading pages and archive connections",
    summary:
      "Created stable reading detail pages and added cross-links from readings to scholars, concepts, source records, and adjacent materials.",
    items: [
      "Generated individual pages for all archived readings.",
      "Added Citation and BibTeX copy controls on reading pages.",
      "Added related scholars and related concepts to reading detail pages.",
      "Added source-policy and reading detail pages to sitemap and search."
    ]
  },
  {
    date: "2026-06-03",
    title: "Concept index and source policy",
    summary:
      "Improved archive navigation by turning the concepts page into a filterable index and separating editorial source standards into a standalone page.",
    items: [
      "Added field, level, and initial-letter filters to the concepts page.",
      "Created a standalone Source Policy page.",
      "Linked Source Policy from mobile navigation, footer, sitemap, and search."
    ]
  },
  {
    date: "2026-06-03",
    title: "Scholar and literature expansion",
    summary:
      "Expanded the archive's coverage while keeping the site focused on corporate law, securities regulation, financial law, and research methods.",
    items: [
      "Expanded scholar coverage to 27 profiles.",
      "Expanded the bibliography to 57 readings.",
      "Expanded the concept glossary to 23 terms.",
      "Added scholar field filters and scholar-to-reading links."
    ]
  },
  {
    date: "2026-06-03",
    title: "Archive identity and visual materials",
    summary:
      "Renamed the site and refined its visual presentation to better match an academic archive.",
    items: [
      "Renamed the site to Law and Economics Archive.",
      "Added restrained decorative images with source links.",
      "Updated metadata, README, header, footer, and About language."
    ]
  }
];

export function getAllUpdates() {
  return UPDATE_ENTRIES;
}
