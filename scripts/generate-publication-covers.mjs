import fs from "node:fs";
import path from "node:path";
import ts from "typescript";

const root = process.cwd();
const topicsPath = path.join(root, "lib/topics.ts");
const outDir = path.join(root, "public/publication-covers");

fs.mkdirSync(outDir, { recursive: true });

const source = fs.readFileSync(topicsPath, "utf8");
const transpiled = ts.transpileModule(source, {
  compilerOptions: {
    module: ts.ModuleKind.CommonJS,
    target: ts.ScriptTarget.ES2020
  }
}).outputText;

const virtualModule = { exports: {} };
const loadTopics = new Function("module", "exports", transpiled);
loadTopics(virtualModule, virtualModule.exports);

const readings = virtualModule.exports.getAllReadings();
const colors = ["#820000", "#8c1515", "#b83a4b", "#c76a75"];

// Publication labels should come from verified publisher, DOI, repository, or
// library metadata. Do not infer a journal volume or book edition from reading
// order or from approximate title matching.
const publicationCoverLabels = {
  "the-nature-of-the-firm-1937": "Vol. 4, No. 16",
  "the-problem-of-social-cost-1960": "Vol. 3",
  "some-thoughts-on-risk-distribution-and-the-law-of-torts-1961": "Vol. 70, No. 4",
  "crime-and-punishment-an-economic-approach-1968": "Vol. 76, No. 2",
  "property-rules-liability-rules-and-inalienability-one-view-of-the-cathedral-1972": "Vol. 85, No. 6",
  "toward-a-theory-of-property-rights-1967": "Vol. 57, No. 2",
  "transaction-cost-economics-the-governance-of-contractual-relations-1979": "Vol. 22, No. 2",
  "institutions-1991": "Vol. 5, No. 1",
  "fairness-versus-welfare-2001": "Vol. 114, No. 4",
  "the-cost-of-accidents-a-legal-and-economic-analysis-1970": "1970 ed.",
  "economic-analysis-of-law-1973": "9th ed.",
  "law-and-economics-6th-edition-2016": "6th ed.",
  "an-introduction-to-law-and-economics-2019": "5th ed.",
  "foundations-of-economic-analysis-of-law-2004": "2004 ed.",
  "prospect-theory-an-analysis-of-decision-under-risk-1979": "Vol. 47, No. 2",
  "a-behavioral-approach-to-law-and-economics-1998": "Vol. 50, No. 5",
  "law-and-behavioral-science-removing-the-rationality-assumption-from-law-and-economics-2000": "Vol. 88, No. 4",
  "anomalies-the-endowment-effect-loss-aversion-and-status-quo-bias-1991": "Vol. 5, No. 1",
  "libertarian-paternalism-is-not-an-oxymoron-2003": "Vol. 70, No. 4",
  "gains-losses-and-the-psychology-of-litigation-1996": "Vol. 70, No. 1",
  "seduction-by-contract-law-economics-and-psychology-in-consumer-markets-2012": "2012 ed.",
  "the-theory-of-economic-regulation-1971": "Vol. 2, No. 1",
  "production-information-costs-and-economic-organization-1972": "Vol. 62, No. 5",
  "theory-of-the-firm-managerial-behavior-agency-costs-and-ownership-structure-1976": "Vol. 3, No. 4",
  "vertical-integration-appropriable-rents-and-the-competitive-contracting-process-1978": "Vol. 21, No. 2",
  "a-survey-of-corporate-governance-1997": "Vol. 52, No. 2",
  "the-anatomy-of-corporate-law-2017": "3rd ed.",
  "mergers-and-the-market-for-corporate-control-1965": "Vol. 73, No. 2",
  "corporate-control-transactions-1981": "Vol. 91",
  "value-creation-by-business-lawyers-legal-skills-and-asset-pricing-1984": "Vol. 94, No. 2",
  "explaining-variation-in-takeover-defenses-blame-the-lawyers-2001": "Vol. 89, No. 5",
  "the-case-against-board-veto-in-corporate-takeovers-2002": "Vol. 69, No. 3",
  "the-powerful-antitakeover-force-of-staggered-boards-theory-evidence-and-policy-2002": "Vol. 54, No. 5",
  "agency-problems-and-the-theory-of-the-firm-1980": "Vol. 88, No. 2",
  "moral-hazard-and-observability-1979": "Vol. 10, No. 1",
  "separation-of-ownership-and-control-1983": "Vol. 26, No. 2",
  "investor-protection-and-corporate-governance-2000": "Vol. 58, Iss. 1-2",
  "fixing-freezeouts-2005": "Vol. 115, No. 1",
  "corporate-governance-and-equity-prices-2003": "Vol. 118, No. 1",
  "what-matters-in-corporate-governance-2009": "Vol. 22, No. 2",
  "pay-without-performance-the-unfulfilled-promise-of-executive-compensation-2004": "2004 ed.",
  "the-costs-and-benefits-of-ownership-a-theory-of-vertical-and-lateral-integration-1986": "Vol. 94, No. 4",
  "property-rights-and-the-nature-of-the-firm-1990": "Vol. 98, No. 6",
  "firms-contracts-and-financial-structure-1995": "1995 ed.",
  "hedge-funds-in-corporate-governance-and-corporate-control-2007": "Vol. 155, No. 5",
  "the-new-look-of-deal-protection-2017": "Vol. 69",
  "agency-problems-and-legal-strategies-2017": "Ch. 2",
  "the-essential-role-of-organizational-law-2000": "Vol. 110, No. 3",
  "the-end-of-history-for-corporate-law-2001": "Vol. 89",
  "the-economic-structure-of-corporate-law-1991": "1996 ed.",
  "the-agency-costs-of-agency-capitalism-activist-investors-and-the-revaluation-of-governance-rights-2013": "Vol. 113, No. 4",
  "law-and-finance-1998": "Vol. 106, No. 6",
  "efficient-capital-markets-a-review-of-theory-and-empirical-work-1970": "Vol. 25, No. 2",
  "on-the-impossibility-of-informationally-efficient-markets-1980": "Vol. 70, No. 3",
  "the-economic-theory-of-public-enforcement-of-law-2000": "Vol. 38, No. 1",
  "the-law-and-economics-of-self-dealing-2008": "Vol. 88, No. 3",
  "mandatory-disclosure-and-the-protection-of-investors-1984": "Vol. 70, No. 4",
  "market-failure-and-the-economic-case-for-a-mandatory-disclosure-system-1984": "Vol. 70, No. 4",
  "what-works-in-securities-laws-2006": "Vol. 61, No. 1",
  "securities-regulation-2017": "2017 ed.",
  "the-transformation-of-wall-street-a-history-of-the-securities-and-exchange-commission-and-modern-corporate-finance-1995": "Rev. ed.",
  "public-and-private-enforcement-of-securities-laws-resource-based-evidence-2009": "Vol. 93, No. 2",
  "behavioral-economics-and-the-sec-2003": "Vol. 56, No. 1",
  "the-essential-role-of-securities-regulation-2006": "Vol. 55, No. 4",
  "stock-market-manipulation-and-its-regulation-2018": "Vol. 35",
  "the-mechanisms-of-market-efficiency-1984": "Vol. 70, No. 4",
  "the-economics-of-disclosure-and-financial-reporting-regulation-evidence-and-suggestions-for-future-research-2016": "Vol. 54, No. 2",
  "mandatory-disclosure-as-a-solution-to-agency-problems-1995": "Vol. 62, No. 3",
  "empowering-investors-a-market-approach-to-securities-regulation-1998": "Vol. 107, No. 8",
  "promoting-issuer-choice-in-securities-regulation-2001": "Vol. 41",
  "the-legal-and-institutional-preconditions-for-strong-securities-markets-2001": "Vol. 48",
  "how-to-fix-wall-street-a-voucher-financing-proposal-for-securities-intermediaries-2003": "Vol. 113, No. 2",
  "eu-securities-and-financial-markets-regulation-2023": "4th ed.",
  "how-to-protect-investors-lessons-from-the-ec-and-the-uk-2010": "2010 ed.",
  "the-scope-of-private-securities-litigation-in-search-of-liability-standards-for-secondary-defendants-1999": "Vol. 99, No. 5",
  "top-cop-or-regulatory-flop-the-sec-at-75-2009": "Vol. 95, No. 4",
  "the-regulation-of-insider-trading-1983": "Vol. 35, No. 5",
  "insider-trading-should-it-be-prohibited-1992": "Vol. 100, No. 4",
  "takeover-bids-the-free-rider-problem-and-the-theory-of-the-corporation-1980": "Vol. 11, No. 1",
  "accuracy-of-predictions-in-the-event-study-methodology-1980": "Vol. 8, No. 3",
  "bank-runs-deposit-insurance-and-liquidity-1983": "Vol. 91, No. 3",
  "nonmonetary-effects-of-the-financial-crisis-in-the-propagation-of-the-great-depression-1983": "Vol. 73, No. 3",
  "principles-for-sound-stress-testing-practices-and-supervision-2009": "BCBS 155",
  "regulating-wall-street-the-dodd-frank-act-and-the-new-architecture-of-global-finance-2010": "2010 ed.",
  "the-fundamental-principles-of-financial-regulation-2009": "Geneva 11",
  "a-macroprudential-approach-to-financial-regulation-2011": "Vol. 25, No. 1",
  "securitized-banking-and-the-run-on-repo-2012": "Vol. 104, No. 3",
  "measuring-systemic-risk-2017": "Vol. 30, No. 1",
  "the-role-of-demandable-debt-in-structuring-optimal-banking-arrangements-1991": "Vol. 81, No. 3",
  "interbank-lending-and-systemic-risk-1996": "Vol. 28, No. 4",
  "basel-iii-a-global-regulatory-framework-for-more-resilient-banks-and-banking-systems-2011": "BCBS 189",
  "key-attributes-of-effective-resolution-regimes-for-financial-institutions-2014": "2014 ed.",
  "the-age-of-esma-governing-eu-financial-markets-2018": "2018 ed.",
  "the-bankers-new-clothes-what-s-wrong-with-banking-and-what-to-do-about-it-2013": "New expanded ed.",
  "deciphering-the-liquidity-and-credit-crunch-2007-2008-2009": "Vol. 23, No. 1",
  "market-liquidity-and-funding-liquidity-2009": "Vol. 22, No. 6",
  "regulating-the-shadow-banking-system-2010": "Fall 2010",
  "financial-regulation-why-how-and-where-now-1998": "1st ed.",
  "some-fundamental-legal-conceptions-as-applied-in-judicial-reasoning-1913": "Vol. 23, No. 1",
  "fundamental-legal-conceptions-as-applied-in-judicial-reasoning-1917": "Vol. 26, No. 8",
  "mostly-harmless-econometrics-an-empiricist-s-companion-2009": "2009 ed.",
  "the-credibility-revolution-in-empirical-economics-how-better-research-design-is-taking-the-con-out-of-econometrics-2010": "Vol. 24, No. 2",
  "how-much-should-we-trust-differences-in-differences-estimates-2004": "Vol. 119, No. 1",
  "the-state-of-applied-econometrics-causality-and-policy-evaluation-2017": "Vol. 31, No. 2",
  "difference-in-differences-with-multiple-time-periods-2021": "Vol. 225, No. 2",
  "difference-in-differences-with-variation-in-treatment-timing-2021": "Vol. 225, No. 2",
  "estimating-dynamic-treatment-effects-in-event-studies-with-heterogeneous-treatment-effects-2021": "Vol. 225, No. 2",
  "causal-inference-the-mixtape-2021": "2021 ed.",
  "recent-developments-in-the-econometrics-of-program-evaluation-2009": "Vol. 47, No. 1",
  "synthetic-control-methods-for-comparative-case-studies-2010": "Vol. 105, No. 490",
  "regression-discontinuity-designs-in-economics-2010": "Vol. 48, No. 2",
  "causal-inference-for-statistics-social-and-biomedical-sciences-2015": "2015 ed.",
  "identification-and-estimation-of-local-average-treatment-effects-1994": "Vol. 62, No. 2",
  "a-practical-guide-to-event-studies-1997": "Vol. 35, No. 1",
  "matching-as-nonparametric-preprocessing-for-reducing-model-dependence-in-parametric-causal-inference-2007": "Vol. 15, No. 3",
  "governing-the-commons-the-evolution-of-institutions-for-collective-action-1990": "1990 ed.",
  "order-without-law-how-neighbors-settle-disputes-1991": "1991 ed.",
  "opting-out-of-the-legal-system-extralegal-contractual-relations-in-the-diamond-industry-1992": "Vol. 21, No. 1",
  "the-economics-of-information-1961": "Vol. 69, No. 3",
  "agency-costs-of-free-cash-flow-corporate-finance-and-takeovers-1986": "Vol. 76, No. 2",
  "are-ceos-rewarded-for-luck-the-ones-without-principals-are-2001": "Vol. 116, No. 3",
  "management-ownership-and-market-valuation-an-empirical-analysis-1988": "Vol. 20, Iss. 1-2",
  "higher-market-valuation-of-companies-with-a-small-board-of-directors-1996": "Vol. 40, No. 2",
  "continuous-auctions-and-insider-trading-1985": "Vol. 53, No. 6",
  "bid-ask-and-transaction-prices-in-a-specialist-market-with-heterogeneously-informed-traders-1985": "Vol. 14, No. 1",
  "disclosure-liquidity-and-the-cost-of-capital-1991": "Vol. 46, No. 4",
  "the-economic-consequences-of-increased-disclosure-2000": "Vol. 38, Supp.",
  "financial-intermediation-and-delegated-monitoring-1984": "Vol. 51, No. 3",
  "liquidity-risk-liquidity-creation-and-financial-fragility-a-theory-of-banking-2001": "Vol. 109, No. 2",
  "financial-contagion-2000": "Vol. 108, No. 1",
  "liquidity-and-leverage-2010": "Vol. 19, No. 3",
  "the-central-role-of-the-propensity-score-in-observational-studies-for-causal-effects-1983": "Vol. 70, No. 1",
  "a-practitioner-s-guide-to-cluster-robust-inference-2015": "Vol. 50, No. 2",
  "estimating-standard-errors-in-finance-panel-data-sets-comparing-approaches-2009": "Vol. 22, No. 1",
  "when-do-covariates-matter-and-which-ones-and-how-much-2016": "Vol. 34, No. 2"
};

function escapeXml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function estimateWidth(text, fontSize) {
  return Array.from(text).reduce((sum, char) => {
    if (char === " ") return sum + fontSize * 0.32;
    if (/[A-Z]/.test(char)) return sum + fontSize * 0.66;
    if (/[a-z]/.test(char)) return sum + fontSize * 0.54;
    if (/[0-9]/.test(char)) return sum + fontSize * 0.52;
    if (/[-:;,.'?()]/.test(char)) return sum + fontSize * 0.3;
    return sum + fontSize * 0.58;
  }, 0);
}

function splitLongToken(token, maxWidth, fontSize) {
  if (estimateWidth(token, fontSize) <= maxWidth) return [token];

  const parts = [];
  let current = "";
  for (const char of token) {
    const next = `${current}${char}`;
    if (current && estimateWidth(next, fontSize) > maxWidth) {
      parts.push(`${current}-`);
      current = char;
    } else {
      current = next;
    }
  }
  if (current) parts.push(current);
  return parts;
}

function truncateToWidth(text, maxWidth, fontSize) {
  const ellipsis = "...";
  let output = text.trim();
  while (output && estimateWidth(`${output}${ellipsis}`, fontSize) > maxWidth) {
    output = output.slice(0, -1).trimEnd();
  }
  return output ? `${output}${ellipsis}` : ellipsis;
}

function wrapText(text, { maxWidth, fontSize, maxLines }) {
  const tokens = String(text)
    .split(/\s+/)
    .flatMap((token) => splitLongToken(token, maxWidth, fontSize));

  const lines = [];
  let current = "";

  for (const token of tokens) {
    const next = current ? `${current} ${token}` : token;
    if (current && estimateWidth(next, fontSize) > maxWidth) {
      lines.push(current);
      current = token;
    } else {
      current = next;
    }
  }

  if (current) lines.push(current);

  if (lines.length <= maxLines) return lines;

  const visible = lines.slice(0, maxLines);
  visible[maxLines - 1] = truncateToWidth(visible[maxLines - 1], maxWidth, fontSize);
  return visible;
}

function renderTspans(lines, x, y, lineHeight) {
  return lines.map((line, index) => `<tspan x="${x}" y="${y + index * lineHeight}">${escapeXml(line)}</tspan>`).join("");
}


for (const reading of readings) {
  const filePath = path.join(outDir, `${reading.slug}.svg`);
  const accent = colors[reading.order % colors.length];
  const publicationLabel = publicationCoverLabels[reading.slug] ?? "";
  const titleLines = wrapText(reading.title, { maxWidth: 316, fontSize: 24, maxLines: 5 });
  const authorLines = wrapText(reading.authors, { maxWidth: 316, fontSize: 15.5, maxLines: 3 });
  const venueLines = wrapText(reading.venue, { maxWidth: 300, fontSize: 14, maxLines: 2 });
  const topicLines = wrapText(reading.topicTitle, { maxWidth: 260, fontSize: 13.5, maxLines: 2 });

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="420" height="600" viewBox="0 0 420 600" role="img" aria-labelledby="title desc">
  <title id="title">Archive-designed cover for ${escapeXml(reading.title)}</title>
  <desc id="desc">A restrained archive-designed publication cover for the Law and Economics Archive.</desc>
  <defs>
    <clipPath id="titleClip"><rect x="42" y="104" width="316" height="156"/></clipPath>
    <clipPath id="authorClip"><rect x="42" y="302" width="316" height="72"/></clipPath>
    <clipPath id="venueClip"><rect x="42" y="446" width="300" height="48"/></clipPath>
    <clipPath id="topicClip"><rect x="42" y="505" width="260" height="44"/></clipPath>
  </defs>
  <rect width="420" height="600" fill="#faf6f4"/>
  <rect x="24" y="24" width="372" height="552" fill="#ffffff" stroke="#ddd5d5"/>
  <rect x="24" y="24" width="372" height="10" fill="${accent}"/>
  <text x="42" y="78" fill="#8c1515" font-family="Georgia, 'Times New Roman', serif" font-size="13" letter-spacing="2.5">LAW AND ECONOMICS ARCHIVE</text>
  <text clip-path="url(#titleClip)" fill="#820000" font-family="Georgia, 'Times New Roman', serif" font-size="24" font-weight="700">${renderTspans(titleLines, 42, 128, 29)}</text>
  <line x1="42" y1="284" x2="338" y2="284" stroke="#ddd5d5"/>
  <text clip-path="url(#authorClip)" fill="#2e2d29" font-family="Georgia, 'Times New Roman', serif" font-size="15.5">${renderTspans(authorLines, 42, 322, 21)}</text>
  <text x="42" y="420" fill="#8c1515" font-family="Georgia, 'Times New Roman', serif" font-size="52" font-weight="700">${escapeXml(reading.year)}</text>
  <text clip-path="url(#venueClip)" fill="#53565a" font-family="Georgia, 'Times New Roman', serif" font-size="14">${renderTspans(venueLines, 42, 462, 18)}</text>
  <text clip-path="url(#topicClip)" fill="#53565a" font-family="Georgia, 'Times New Roman', serif" font-size="13.5">${renderTspans(topicLines, 42, 520, 19)}</text>
  ${publicationLabel ? `<text x="374" y="526" text-anchor="end" fill="${accent}" font-family="Georgia, 'Times New Roman', serif" font-size="${publicationLabel.length > 17 ? 8.8 : 9.8}" font-weight="700" letter-spacing="0.35">${escapeXml(publicationLabel)}</text>` : ""}
</svg>`;

  fs.writeFileSync(filePath, svg);
}

console.log(`Generated ${readings.length} publication covers.`);
