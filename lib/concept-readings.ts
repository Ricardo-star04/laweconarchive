import { getConceptSlug, type ConceptEntry } from "@/lib/concepts";
import type { IndexedReading } from "@/lib/topics";

export const CONCEPT_READING_SLUGS = {
  "agency-costs": [
    "production-information-costs-and-economic-organization-1972",
    "theory-of-the-firm-managerial-behavior-agency-costs-and-ownership-structure-1976",
    "agency-problems-and-the-theory-of-the-firm-1980",
    "agency-problems-and-legal-strategies-2017"
  ],
  "transaction-costs": [
    "the-nature-of-the-firm-1937",
    "the-problem-of-social-cost-1960",
    "transaction-cost-economics-the-governance-of-contractual-relations-1979",
    "institutions-1991"
  ],
  "coase-theorem": [
    "the-problem-of-social-cost-1960",
    "property-rules-liability-rules-and-inalienability-one-view-of-the-cathedral-1972",
    "toward-a-theory-of-property-rights-1967",
    "law-and-economics-6th-edition-2016"
  ],
  externalities: [
    "the-problem-of-social-cost-1960",
    "toward-a-theory-of-property-rights-1967",
    "some-thoughts-on-risk-distribution-and-the-law-of-torts-1961",
    "foundations-of-economic-analysis-of-law-2004"
  ],
  "social-cost": [
    "the-problem-of-social-cost-1960",
    "the-cost-of-accidents-a-legal-and-economic-analysis-1970",
    "law-and-economics-6th-edition-2016",
    "foundations-of-economic-analysis-of-law-2004"
  ],
  "property-rules-and-liability-rules": [
    "property-rules-liability-rules-and-inalienability-one-view-of-the-cathedral-1972",
    "the-problem-of-social-cost-1960",
    "law-and-economics-6th-edition-2016",
    "foundations-of-economic-analysis-of-law-2004"
  ],
  "least-cost-avoider": [
    "some-thoughts-on-risk-distribution-and-the-law-of-torts-1961",
    "the-cost-of-accidents-a-legal-and-economic-analysis-1970",
    "foundations-of-economic-analysis-of-law-2004",
    "law-and-economics-6th-edition-2016"
  ],
  "expected-sanction": [
    "crime-and-punishment-an-economic-approach-1968",
    "the-economic-theory-of-public-enforcement-of-law-2000",
    "foundations-of-economic-analysis-of-law-2004",
    "an-introduction-to-law-and-economics-2019"
  ],
  "kaldor-hicks-efficiency": [
    "fairness-versus-welfare-2001",
    "economic-analysis-of-law-1973",
    "foundations-of-economic-analysis-of-law-2004",
    "law-and-economics-6th-edition-2016"
  ],
  "institutional-change": [
    "the-nature-of-the-firm-1937",
    "institutions-1991",
    "transaction-cost-economics-the-governance-of-contractual-relations-1979",
    "the-problem-of-social-cost-1960"
  ],
  "legal-entitlements": [
    "property-rules-liability-rules-and-inalienability-one-view-of-the-cathedral-1972",
    "the-problem-of-social-cost-1960",
    "toward-a-theory-of-property-rights-1967",
    "law-and-economics-6th-edition-2016"
  ],
  "accident-costs": [
    "some-thoughts-on-risk-distribution-and-the-law-of-torts-1961",
    "the-cost-of-accidents-a-legal-and-economic-analysis-1970",
    "foundations-of-economic-analysis-of-law-2004",
    "an-introduction-to-law-and-economics-2019"
  ],
  "error-costs": [
    "foundations-of-economic-analysis-of-law-2004",
    "law-and-economics-6th-edition-2016",
    "the-economic-theory-of-public-enforcement-of-law-2000"
  ],
  "marginal-deterrence": [
    "crime-and-punishment-an-economic-approach-1968",
    "the-economic-theory-of-public-enforcement-of-law-2000",
    "foundations-of-economic-analysis-of-law-2004",
    "an-introduction-to-law-and-economics-2019"
  ],
  "positive-and-normative-analysis": [
    "economic-analysis-of-law-1973",
    "fairness-versus-welfare-2001",
    "law-and-economics-6th-edition-2016",
    "foundations-of-economic-analysis-of-law-2004"
  ],
  "wealth-maximization": [
    "economic-analysis-of-law-1973",
    "fairness-versus-welfare-2001",
    "law-and-economics-6th-edition-2016"
  ],
  "behavioral-law-and-economics": [
    "a-behavioral-approach-to-law-and-economics-1998",
    "law-and-behavioral-science-removing-the-rationality-assumption-from-law-and-economics-2000",
    "prospect-theory-an-analysis-of-decision-under-risk-1979",
    "anomalies-the-endowment-effect-loss-aversion-and-status-quo-bias-1991"
  ],
  "bounded-rationality": [
    "law-and-behavioral-science-removing-the-rationality-assumption-from-law-and-economics-2000",
    "a-behavioral-approach-to-law-and-economics-1998",
    "transaction-cost-economics-the-governance-of-contractual-relations-1979",
    "seduction-by-contract-law-economics-and-psychology-in-consumer-markets-2012"
  ],
  "prospect-theory": [
    "prospect-theory-an-analysis-of-decision-under-risk-1979",
    "gains-losses-and-the-psychology-of-litigation-1996",
    "a-behavioral-approach-to-law-and-economics-1998",
    "behavioral-economics-and-the-sec-2003"
  ],
  "loss-aversion": [
    "anomalies-the-endowment-effect-loss-aversion-and-status-quo-bias-1991",
    "prospect-theory-an-analysis-of-decision-under-risk-1979",
    "gains-losses-and-the-psychology-of-litigation-1996",
    "seduction-by-contract-law-economics-and-psychology-in-consumer-markets-2012"
  ],
  "endowment-effect": [
    "anomalies-the-endowment-effect-loss-aversion-and-status-quo-bias-1991",
    "prospect-theory-an-analysis-of-decision-under-risk-1979",
    "property-rules-liability-rules-and-inalienability-one-view-of-the-cathedral-1972",
    "law-and-economics-6th-edition-2016"
  ],
  "status-quo-bias": [
    "anomalies-the-endowment-effect-loss-aversion-and-status-quo-bias-1991",
    "save-more-tomorrow-using-behavioral-economics-to-increase-employee-saving-2004",
    "a-behavioral-approach-to-law-and-economics-1998"
  ],
  "choice-architecture": [
    "save-more-tomorrow-using-behavioral-economics-to-increase-employee-saving-2004",
    "a-behavioral-approach-to-law-and-economics-1998",
    "behavioral-economics-and-the-sec-2003",
    "seduction-by-contract-law-economics-and-psychology-in-consumer-markets-2012"
  ],
  "nudge-design": [
    "save-more-tomorrow-using-behavioral-economics-to-increase-employee-saving-2004",
    "a-behavioral-approach-to-law-and-economics-1998",
    "law-and-behavioral-science-removing-the-rationality-assumption-from-law-and-economics-2000"
  ],
  "debiasing-through-law": [
    "a-behavioral-approach-to-law-and-economics-1998",
    "law-and-behavioral-science-removing-the-rationality-assumption-from-law-and-economics-2000",
    "behavioral-economics-and-the-sec-2003",
    "seduction-by-contract-law-economics-and-psychology-in-consumer-markets-2012"
  ],
  "behavioral-market-failure": [
    "seduction-by-contract-law-economics-and-psychology-in-consumer-markets-2012",
    "behavioral-economics-and-the-sec-2003",
    "market-failure-and-the-economic-case-for-a-mandatory-disclosure-system-1984",
    "a-behavioral-approach-to-law-and-economics-1998"
  ],
  "hohfeldian-incidents": [
    "some-fundamental-legal-conceptions-as-applied-in-judicial-reasoning-1913",
    "fundamental-legal-conceptions-as-applied-in-judicial-reasoning-1917"
  ],
  "claim-right": [
    "some-fundamental-legal-conceptions-as-applied-in-judicial-reasoning-1913",
    "fundamental-legal-conceptions-as-applied-in-judicial-reasoning-1917"
  ],
  duty: [
    "some-fundamental-legal-conceptions-as-applied-in-judicial-reasoning-1913",
    "fundamental-legal-conceptions-as-applied-in-judicial-reasoning-1917"
  ],
  privilege: [
    "some-fundamental-legal-conceptions-as-applied-in-judicial-reasoning-1913",
    "fundamental-legal-conceptions-as-applied-in-judicial-reasoning-1917"
  ],
  "no-right": [
    "some-fundamental-legal-conceptions-as-applied-in-judicial-reasoning-1913",
    "fundamental-legal-conceptions-as-applied-in-judicial-reasoning-1917"
  ],
  power: [
    "some-fundamental-legal-conceptions-as-applied-in-judicial-reasoning-1913",
    "fundamental-legal-conceptions-as-applied-in-judicial-reasoning-1917"
  ],
  liability: [
    "some-fundamental-legal-conceptions-as-applied-in-judicial-reasoning-1913",
    "fundamental-legal-conceptions-as-applied-in-judicial-reasoning-1917"
  ],
  immunity: [
    "some-fundamental-legal-conceptions-as-applied-in-judicial-reasoning-1913",
    "fundamental-legal-conceptions-as-applied-in-judicial-reasoning-1917"
  ],
  disability: [
    "some-fundamental-legal-conceptions-as-applied-in-judicial-reasoning-1913",
    "fundamental-legal-conceptions-as-applied-in-judicial-reasoning-1917"
  ],
  "jural-correlatives-and-opposites": [
    "some-fundamental-legal-conceptions-as-applied-in-judicial-reasoning-1913",
    "fundamental-legal-conceptions-as-applied-in-judicial-reasoning-1917"
  ],
  "efficient-capital-markets": [
    "efficient-capital-markets-a-review-of-theory-and-empirical-work-1970",
    "on-the-impossibility-of-informationally-efficient-markets-1980",
    "accuracy-of-predictions-in-the-event-study-methodology-1980",
    "the-mechanisms-of-market-efficiency-1984"
  ],
  "private-enforcement": [
    "public-and-private-enforcement-of-securities-laws-resource-based-evidence-2009",
    "the-scope-of-private-securities-litigation-in-search-of-liability-standards-for-secondary-defendants-1999",
    "what-works-in-securities-laws-2006",
    "the-economic-theory-of-public-enforcement-of-law-2000"
  ],
  "gatekeeper-liability": [
    "market-failure-and-the-economic-case-for-a-mandatory-disclosure-system-1984",
    "how-to-fix-wall-street-a-voucher-financing-proposal-for-securities-intermediaries-2003",
    "the-scope-of-private-securities-litigation-in-search-of-liability-standards-for-secondary-defendants-1999",
    "what-works-in-securities-laws-2006"
  ],
  "systemic-risk": [
    "bank-runs-deposit-insurance-and-liquidity-1983",
    "the-fundamental-principles-of-financial-regulation-2009",
    "a-macroprudential-approach-to-financial-regulation-2011",
    "measuring-systemic-risk-2017"
  ],
  "macroprudential-regulation": [
    "a-macroprudential-approach-to-financial-regulation-2011",
    "the-fundamental-principles-of-financial-regulation-2009",
    "basel-iii-a-global-regulatory-framework-for-more-resilient-banks-and-banking-systems-2011",
    "measuring-systemic-risk-2017"
  ],
  "difference-in-differences": [
    "how-much-should-we-trust-differences-in-differences-estimates-2004",
    "difference-in-differences-with-multiple-time-periods-2021",
    "difference-in-differences-with-variation-in-treatment-timing-2021",
    "estimating-dynamic-treatment-effects-in-event-studies-with-heterogeneous-treatment-effects-2021"
  ],
  "residual-control-rights": [
    "production-information-costs-and-economic-organization-1972",
    "the-costs-and-benefits-of-ownership-a-theory-of-vertical-and-lateral-integration-1986",
    "property-rights-and-the-nature-of-the-firm-1990",
    "firms-contracts-and-financial-structure-1995"
  ],
  "asset-partitioning": [
    "the-essential-role-of-organizational-law-2000",
    "the-anatomy-of-corporate-law-2017",
    "agency-problems-and-legal-strategies-2017",
    "firms-contracts-and-financial-structure-1995"
  ],
  "fiduciary-duties": [
    "the-anatomy-of-corporate-law-2017",
    "the-economic-structure-of-corporate-law-1991",
    "the-law-and-economics-of-self-dealing-2008",
    "agency-problems-and-legal-strategies-2017"
  ],
  "controlling-shareholder": [
    "the-law-and-economics-of-self-dealing-2008",
    "law-and-finance-1998",
    "investor-protection-and-corporate-governance-2000",
    "the-anatomy-of-corporate-law-2017"
  ],
  "private-benefits-of-control": [
    "the-law-and-economics-of-self-dealing-2008",
    "investor-protection-and-corporate-governance-2000",
    "corporate-governance-and-equity-prices-2003",
    "law-and-finance-1998"
  ],
  "market-for-corporate-control": [
    "mergers-and-the-market-for-corporate-control-1965",
    "corporate-control-transactions-1981",
    "takeover-bids-the-free-rider-problem-and-the-theory-of-the-corporation-1980",
    "hedge-funds-in-corporate-governance-and-corporate-control-2007"
  ],
  "tender-offer": [
    "mergers-and-the-market-for-corporate-control-1965",
    "takeover-bids-the-free-rider-problem-and-the-theory-of-the-corporation-1980",
    "corporate-control-transactions-1981",
    "the-case-against-board-veto-in-corporate-takeovers-2002"
  ],
  "takeover-defenses": [
    "corporate-control-transactions-1981",
    "explaining-variation-in-takeover-defenses-blame-the-lawyers-2001",
    "the-case-against-board-veto-in-corporate-takeovers-2002",
    "the-powerful-antitakeover-force-of-staggered-boards-theory-evidence-and-policy-2002"
  ],
  "poison-pill": [
    "corporate-control-transactions-1981",
    "the-case-against-board-veto-in-corporate-takeovers-2002",
    "the-powerful-antitakeover-force-of-staggered-boards-theory-evidence-and-policy-2002",
    "the-new-look-of-deal-protection-2017"
  ],
  "staggered-board": [
    "explaining-variation-in-takeover-defenses-blame-the-lawyers-2001",
    "the-case-against-board-veto-in-corporate-takeovers-2002",
    "the-powerful-antitakeover-force-of-staggered-boards-theory-evidence-and-policy-2002",
    "what-matters-in-corporate-governance-2009"
  ],
  "board-veto": [
    "mergers-and-the-market-for-corporate-control-1965",
    "corporate-control-transactions-1981",
    "the-case-against-board-veto-in-corporate-takeovers-2002",
    "the-powerful-antitakeover-force-of-staggered-boards-theory-evidence-and-policy-2002"
  ],
  "freeze-out-merger": [
    "investor-protection-and-corporate-governance-2000",
    "the-law-and-economics-of-self-dealing-2008",
    "fixing-freezeouts-2005",
    "the-anatomy-of-corporate-law-2017"
  ],
  "deal-protection": [
    "corporate-control-transactions-1981",
    "value-creation-by-business-lawyers-legal-skills-and-asset-pricing-1984",
    "the-case-against-board-veto-in-corporate-takeovers-2002",
    "the-new-look-of-deal-protection-2017"
  ],
  "revlon-duties": [
    "corporate-control-transactions-1981",
    "value-creation-by-business-lawyers-legal-skills-and-asset-pricing-1984",
    "the-anatomy-of-corporate-law-2017",
    "the-new-look-of-deal-protection-2017"
  ],
  "contract-theory": [
    "vertical-integration-appropriable-rents-and-the-competitive-contracting-process-1978",
    "the-costs-and-benefits-of-ownership-a-theory-of-vertical-and-lateral-integration-1986",
    "property-rights-and-the-nature-of-the-firm-1990",
    "firms-contracts-and-financial-structure-1995"
  ],
  "moral-hazard": [
    "production-information-costs-and-economic-organization-1972",
    "moral-hazard-and-observability-1979",
    "theory-of-the-firm-managerial-behavior-agency-costs-and-ownership-structure-1976",
    "agency-problems-and-the-theory-of-the-firm-1980"
  ],
  "shareholder-activism": [
    "hedge-funds-in-corporate-governance-and-corporate-control-2007",
    "the-agency-costs-of-agency-capitalism-activist-investors-and-the-revaluation-of-governance-rights-2013",
    "what-matters-in-corporate-governance-2009",
    "pay-without-performance-the-unfulfilled-promise-of-executive-compensation-2004"
  ],
  "mandatory-disclosure": [
    "mandatory-disclosure-and-the-protection-of-investors-1984",
    "market-failure-and-the-economic-case-for-a-mandatory-disclosure-system-1984",
    "what-works-in-securities-laws-2006",
    "the-economics-of-disclosure-and-financial-reporting-regulation-evidence-and-suggestions-for-future-research-2016"
  ],
  "fraud-on-the-market": [
    "efficient-capital-markets-a-review-of-theory-and-empirical-work-1970",
    "the-mechanisms-of-market-efficiency-1984",
    "a-practical-guide-to-event-studies-1997",
    "the-scope-of-private-securities-litigation-in-search-of-liability-standards-for-secondary-defendants-1999"
  ],
  materiality: [
    "securities-regulation-2017",
    "mandatory-disclosure-and-the-protection-of-investors-1984",
    "behavioral-economics-and-the-sec-2003",
    "the-economics-of-disclosure-and-financial-reporting-regulation-evidence-and-suggestions-for-future-research-2016"
  ],
  "market-manipulation": [
    "stock-market-manipulation-and-its-regulation-2018",
    "the-mechanisms-of-market-efficiency-1984",
    "efficient-capital-markets-a-review-of-theory-and-empirical-work-1970",
    "securities-regulation-2017"
  ],
  "insider-trading": [
    "the-regulation-of-insider-trading-1983",
    "insider-trading-should-it-be-prohibited-1992",
    "efficient-capital-markets-a-review-of-theory-and-empirical-work-1970",
    "securities-regulation-2017"
  ],
  "issuer-disclosure": [
    "mandatory-disclosure-and-the-protection-of-investors-1984",
    "market-failure-and-the-economic-case-for-a-mandatory-disclosure-system-1984",
    "the-economics-of-disclosure-and-financial-reporting-regulation-evidence-and-suggestions-for-future-research-2016",
    "securities-regulation-2017"
  ],
  "information-traders": [
    "on-the-impossibility-of-informationally-efficient-markets-1980",
    "the-mechanisms-of-market-efficiency-1984",
    "efficient-capital-markets-a-review-of-theory-and-empirical-work-1970",
    "stock-market-manipulation-and-its-regulation-2018"
  ],
  "securities-class-actions": [
    "the-scope-of-private-securities-litigation-in-search-of-liability-standards-for-secondary-defendants-1999",
    "public-and-private-enforcement-of-securities-laws-resource-based-evidence-2009",
    "what-works-in-securities-laws-2006",
    "securities-regulation-2017"
  ],
  "loss-causation": [
    "the-scope-of-private-securities-litigation-in-search-of-liability-standards-for-secondary-defendants-1999",
    "a-practical-guide-to-event-studies-1997",
    "accuracy-of-predictions-in-the-event-study-methodology-1980",
    "securities-regulation-2017"
  ],
  scienter: [
    "the-scope-of-private-securities-litigation-in-search-of-liability-standards-for-secondary-defendants-1999",
    "public-and-private-enforcement-of-securities-laws-resource-based-evidence-2009",
    "securities-regulation-2017"
  ],
  "due-diligence-defense": [
    "how-to-fix-wall-street-a-voucher-financing-proposal-for-securities-intermediaries-2003",
    "the-scope-of-private-securities-litigation-in-search-of-liability-standards-for-secondary-defendants-1999",
    "mandatory-disclosure-as-a-solution-to-agency-problems-1995",
    "securities-regulation-2017"
  ],
  "information-overload": [
    "behavioral-economics-and-the-sec-2003",
    "mandatory-disclosure-and-the-protection-of-investors-1984",
    "the-economics-of-disclosure-and-financial-reporting-regulation-evidence-and-suggestions-for-future-research-2016",
    "market-failure-and-the-economic-case-for-a-mandatory-disclosure-system-1984"
  ],
  "capital-adequacy": [
    "basel-iii-a-global-regulatory-framework-for-more-resilient-banks-and-banking-systems-2011",
    "the-bankers-new-clothes-what-s-wrong-with-banking-and-what-to-do-about-it-2013",
    "the-fundamental-principles-of-financial-regulation-2009",
    "regulating-wall-street-the-dodd-frank-act-and-the-new-architecture-of-global-finance-2010"
  ],
  "liquidity-mismatch": [
    "bank-runs-deposit-insurance-and-liquidity-1983",
    "the-role-of-demandable-debt-in-structuring-optimal-banking-arrangements-1991",
    "deciphering-the-liquidity-and-credit-crunch-2007-2008-2009",
    "market-liquidity-and-funding-liquidity-2009"
  ],
  "shadow-banking": [
    "securitized-banking-and-the-run-on-repo-2012",
    "regulating-the-shadow-banking-system-2010",
    "deciphering-the-liquidity-and-credit-crunch-2007-2008-2009",
    "the-fundamental-principles-of-financial-regulation-2009"
  ],
  "funding-liquidity": [
    "market-liquidity-and-funding-liquidity-2009",
    "deciphering-the-liquidity-and-credit-crunch-2007-2008-2009",
    "securitized-banking-and-the-run-on-repo-2012",
    "measuring-systemic-risk-2017"
  ],
  "resolution-planning": [
    "key-attributes-of-effective-resolution-regimes-for-financial-institutions-2014",
    "regulating-wall-street-the-dodd-frank-act-and-the-new-architecture-of-global-finance-2010",
    "the-fundamental-principles-of-financial-regulation-2009",
    "basel-iii-a-global-regulatory-framework-for-more-resilient-banks-and-banking-systems-2011"
  ],
  "event-study": [
    "a-practical-guide-to-event-studies-1997",
    "accuracy-of-predictions-in-the-event-study-methodology-1980",
    "efficient-capital-markets-a-review-of-theory-and-empirical-work-1970",
    "the-mechanisms-of-market-efficiency-1984"
  ],
  "instrumental-variables": [
    "identification-and-estimation-of-local-average-treatment-effects-1994",
    "mostly-harmless-econometrics-an-empiricist-s-companion-2009",
    "causal-inference-the-mixtape-2021",
    "causal-inference-for-statistics-social-and-biomedical-sciences-2015"
  ],
  "credibility-revolution": [
    "the-credibility-revolution-in-empirical-economics-how-better-research-design-is-taking-the-con-out-of-econometrics-2010",
    "mostly-harmless-econometrics-an-empiricist-s-companion-2009",
    "the-state-of-applied-econometrics-causality-and-policy-evaluation-2017",
    "causal-inference-the-mixtape-2021"
  ],
  "treatment-effect-heterogeneity": [
    "estimating-dynamic-treatment-effects-in-event-studies-with-heterogeneous-treatment-effects-2021",
    "difference-in-differences-with-variation-in-treatment-timing-2021",
    "difference-in-differences-with-multiple-time-periods-2021",
    "the-state-of-applied-econometrics-causality-and-policy-evaluation-2017"
  ],
  "synthetic-control": [
    "synthetic-control-methods-for-comparative-case-studies-2010",
    "the-state-of-applied-econometrics-causality-and-policy-evaluation-2017",
    "causal-inference-the-mixtape-2021"
  ],
  "pareto-efficiency": [
    "fairness-versus-welfare-2001",
    "law-and-economics-6th-edition-2016",
    "an-introduction-to-law-and-economics-2019",
    "foundations-of-economic-analysis-of-law-2004"
  ],
  equilibrium: [
    "law-and-economics-6th-edition-2016",
    "an-introduction-to-law-and-economics-2019",
    "the-problem-of-social-cost-1960"
  ],
  "risk-aversion": [
    "prospect-theory-an-analysis-of-decision-under-risk-1979",
    "the-cost-of-accidents-a-legal-and-economic-analysis-1970",
    "foundations-of-economic-analysis-of-law-2004",
    "gains-losses-and-the-psychology-of-litigation-1996"
  ],
  "game-theory": [
    "law-and-economics-6th-edition-2016",
    "an-introduction-to-law-and-economics-2019",
    "transaction-cost-economics-the-governance-of-contractual-relations-1979"
  ],
  "prisoners-dilemma": [
    "law-and-economics-6th-edition-2016",
    "an-introduction-to-law-and-economics-2019",
    "institutions-1991"
  ],
  "public-goods": [
    "toward-a-theory-of-property-rights-1967",
    "the-problem-of-social-cost-1960",
    "law-and-economics-6th-edition-2016",
    "the-essential-role-of-securities-regulation-2006"
  ],
  "tragedy-of-the-commons": [
    "toward-a-theory-of-property-rights-1967",
    "the-problem-of-social-cost-1960",
    "institutions-1991",
    "law-and-economics-6th-edition-2016"
  ],
  "normative-coase-theorem": [
    "law-and-economics-6th-edition-2016",
    "the-problem-of-social-cost-1960",
    "property-rules-liability-rules-and-inalienability-one-view-of-the-cathedral-1972",
    "an-introduction-to-law-and-economics-2019"
  ],
  "normative-hobbes-theorem": [
    "law-and-economics-6th-edition-2016",
    "the-problem-of-social-cost-1960",
    "institutions-1991",
    "an-introduction-to-law-and-economics-2019"
  ],
  "bargaining-surplus": [
    "the-problem-of-social-cost-1960",
    "law-and-economics-6th-edition-2016",
    "an-introduction-to-law-and-economics-2019",
    "property-rules-liability-rules-and-inalienability-one-view-of-the-cathedral-1972"
  ],
  "information-costs": [
    "transaction-cost-economics-the-governance-of-contractual-relations-1979",
    "mandatory-disclosure-and-the-protection-of-investors-1984",
    "market-failure-and-the-economic-case-for-a-mandatory-disclosure-system-1984",
    "the-economics-of-disclosure-and-financial-reporting-regulation-evidence-and-suggestions-for-future-research-2016"
  ],
  "hand-formula": [
    "law-and-economics-6th-edition-2016",
    "foundations-of-economic-analysis-of-law-2004",
    "an-introduction-to-law-and-economics-2019",
    "some-thoughts-on-risk-distribution-and-the-law-of-torts-1961"
  ],
  "negligence-rule": [
    "law-and-economics-6th-edition-2016",
    "foundations-of-economic-analysis-of-law-2004",
    "the-cost-of-accidents-a-legal-and-economic-analysis-1970",
    "some-thoughts-on-risk-distribution-and-the-law-of-torts-1961"
  ],
  "strict-liability": [
    "law-and-economics-6th-edition-2016",
    "foundations-of-economic-analysis-of-law-2004",
    "some-thoughts-on-risk-distribution-and-the-law-of-torts-1961",
    "the-cost-of-accidents-a-legal-and-economic-analysis-1970"
  ],
  "bilateral-precaution": [
    "law-and-economics-6th-edition-2016",
    "foundations-of-economic-analysis-of-law-2004",
    "some-thoughts-on-risk-distribution-and-the-law-of-torts-1961",
    "the-cost-of-accidents-a-legal-and-economic-analysis-1970"
  ],
  "activity-level": [
    "foundations-of-economic-analysis-of-law-2004",
    "law-and-economics-6th-edition-2016",
    "some-thoughts-on-risk-distribution-and-the-law-of-torts-1961",
    "the-cost-of-accidents-a-legal-and-economic-analysis-1970"
  ],
  "expectation-damages": [
    "law-and-economics-6th-edition-2016",
    "an-introduction-to-law-and-economics-2019",
    "foundations-of-economic-analysis-of-law-2004"
  ],
  "reliance-damages": [
    "law-and-economics-6th-edition-2016",
    "an-introduction-to-law-and-economics-2019",
    "foundations-of-economic-analysis-of-law-2004"
  ],
  "efficient-breach": [
    "law-and-economics-6th-edition-2016",
    "an-introduction-to-law-and-economics-2019",
    "foundations-of-economic-analysis-of-law-2004"
  ],
  "penalty-default-rule": [
    "law-and-economics-6th-edition-2016",
    "transaction-cost-economics-the-governance-of-contractual-relations-1979",
    "an-introduction-to-law-and-economics-2019"
  ],
  "relational-contracts": [
    "transaction-cost-economics-the-governance-of-contractual-relations-1979",
    "law-and-economics-6th-edition-2016",
    "firms-contracts-and-financial-structure-1995"
  ],
  "settlement-bargaining": [
    "law-and-economics-6th-edition-2016",
    "foundations-of-economic-analysis-of-law-2004",
    "gains-losses-and-the-psychology-of-litigation-1996"
  ],
  "expected-judgment": [
    "law-and-economics-6th-edition-2016",
    "foundations-of-economic-analysis-of-law-2004",
    "gains-losses-and-the-psychology-of-litigation-1996"
  ],
  "standard-of-proof": [
    "law-and-economics-6th-edition-2016",
    "foundations-of-economic-analysis-of-law-2004"
  ],
  "selection-effect": [
    "law-and-economics-6th-edition-2016",
    "foundations-of-economic-analysis-of-law-2004",
    "mostly-harmless-econometrics-an-empiricist-s-companion-2009"
  ],
  "type-i-and-type-ii-errors": [
    "law-and-economics-6th-edition-2016",
    "foundations-of-economic-analysis-of-law-2004",
    "the-economic-theory-of-public-enforcement-of-law-2000"
  ],
  "optimal-deterrence": [
    "crime-and-punishment-an-economic-approach-1968",
    "the-economic-theory-of-public-enforcement-of-law-2000",
    "foundations-of-economic-analysis-of-law-2004",
    "an-introduction-to-law-and-economics-2019"
  ],
  "rational-crime": [
    "crime-and-punishment-an-economic-approach-1968",
    "the-economic-theory-of-public-enforcement-of-law-2000",
    "foundations-of-economic-analysis-of-law-2004",
    "law-and-economics-6th-edition-2016"
  ],
  "efficient-punishment": [
    "crime-and-punishment-an-economic-approach-1968",
    "the-economic-theory-of-public-enforcement-of-law-2000",
    "foundations-of-economic-analysis-of-law-2004",
    "an-introduction-to-law-and-economics-2019"
  ],
  modularity: [
    "property-as-the-law-of-things-2012",
    "the-essential-role-of-organizational-law-2000",
    "toward-a-theory-of-property-rights-1967"
  ],
  "exclusion-strategy": [
    "property-as-the-law-of-things-2012",
    "property-rules-liability-rules-and-inalienability-one-view-of-the-cathedral-1972",
    "order-without-law-how-neighbors-settle-disputes-1991"
  ],
  "governance-strategy": [
    "property-as-the-law-of-things-2012",
    "the-problem-of-social-cost-1960",
    "order-without-law-how-neighbors-settle-disputes-1991"
  ],
  "priest-klein-hypothesis": [
    "the-selection-of-disputes-for-litigation-1984",
    "the-dynamics-of-pretrial-negotiation-1992",
    "mostly-harmless-econometrics-an-empiricist-s-companion-2009"
  ],
  "deadline-effect": [
    "the-dynamics-of-pretrial-negotiation-1992",
    "gains-losses-and-the-psychology-of-litigation-1996",
    "foundations-of-economic-analysis-of-law-2004"
  ],
  "proximate-cause": [
    "the-cost-of-accidents-a-legal-and-economic-analysis-1970",
    "foundations-of-economic-analysis-of-law-2004",
    "law-and-economics-6th-edition-2016"
  ],
  "enterprise-liability": [
    "some-thoughts-on-risk-distribution-and-the-law-of-torts-1961",
    "the-cost-of-accidents-a-legal-and-economic-analysis-1970",
    "foundations-of-economic-analysis-of-law-2004"
  ],
  "corporate-opportunity": [
    "the-economic-structure-of-corporate-law-1991",
    "the-anatomy-of-corporate-law-2017",
    "agency-problems-and-legal-strategies-2017"
  ],
  "mission-critical-risk": [
    "agency-problems-and-legal-strategies-2017",
    "the-anatomy-of-corporate-law-2017",
    "the-economic-structure-of-corporate-law-1991"
  ],
  "disclose-or-abstain": [
    "the-regulation-of-insider-trading-1983",
    "insider-trading-should-it-be-prohibited-1992",
    "continuous-auctions-and-insider-trading-1985"
  ],
  "opinion-liability": [
    "mandatory-disclosure-and-the-protection-of-investors-1984",
    "market-failure-and-the-economic-case-for-a-mandatory-disclosure-system-1984",
    "the-mechanisms-of-market-efficiency-1984"
  ],
  "scheme-liability": [
    "public-and-private-enforcement-of-securities-laws-resource-based-evidence-2009",
    "the-economic-theory-of-public-enforcement-of-law-2000",
    "the-mechanisms-of-market-efficiency-1984"
  ],
  "regulatory-arbitrage": [
    "financial-derivatives-and-the-costs-of-regulatory-arbitrage-1997",
    "regulating-the-shadow-banking-system-2010",
    "systematic-regulation-of-systemic-risk-2019"
  ],
  "credit-rating-agencies": [
    "the-siskel-and-ebert-of-financial-markets-two-thumbs-down-for-the-credit-rating-agencies-1999",
    "barbarians-at-the-gatekeepers-a-proposal-for-a-modified-strict-liability-regime-2001",
    "the-economics-of-disclosure-and-financial-reporting-regulation-evidence-and-suggestions-for-future-research-2016"
  ],
  securitization: [
    "the-alchemy-of-asset-securitization-1994",
    "securitized-banking-and-the-run-on-repo-2012",
    "regulating-the-shadow-banking-system-2010"
  ],
  "bankruptcy-remoteness": [
    "the-alchemy-of-asset-securitization-1994",
    "firms-contracts-and-financial-structure-1995",
    "the-essential-role-of-organizational-law-2000"
  ],
  tranching: [
    "the-alchemy-of-asset-securitization-1994",
    "securitized-banking-and-the-run-on-repo-2012",
    "regulating-wall-street-the-dodd-frank-act-and-the-new-architecture-of-global-finance-2010"
  ],
  "risk-retention": [
    "the-alchemy-of-asset-securitization-1994",
    "regulating-the-shadow-banking-system-2010",
    "regulating-wall-street-the-dodd-frank-act-and-the-new-architecture-of-global-finance-2010"
  ],
  "financial-contagion": [
    "financial-contagion-2000",
    "interbank-lending-and-systemic-risk-1996",
    "systemic-risk-2008"
  ],
  "deposit-insurance-boundary": [
    "bank-runs-deposit-insurance-and-liquidity-1983",
    "systemic-risk-2008",
    "financial-regulation-why-how-and-where-now-1998"
  ],
  "accrual-accounting": [
    "the-economics-of-disclosure-and-financial-reporting-regulation-evidence-and-suggestions-for-future-research-2016",
    "the-economic-consequences-of-increased-disclosure-2000",
    "disclosure-liquidity-and-the-cost-of-capital-1991"
  ],
  "revenue-recognition": [
    "the-economics-of-disclosure-and-financial-reporting-regulation-evidence-and-suggestions-for-future-research-2016",
    "mandatory-disclosure-as-a-solution-to-agency-problems-1995",
    "the-economic-consequences-of-increased-disclosure-2000"
  ],
  "working-capital": [
    "the-theory-of-corporate-finance-2006",
    "firms-contracts-and-financial-structure-1995",
    "agency-costs-of-free-cash-flow-corporate-finance-and-takeovers-1986"
  ],
  ebitda: [
    "the-theory-of-corporate-finance-2006",
    "the-economics-of-disclosure-and-financial-reporting-regulation-evidence-and-suggestions-for-future-research-2016",
    "mandatory-disclosure-as-a-solution-to-agency-problems-1995"
  ],
  "free-cash-flow-to-firm": [
    "agency-costs-of-free-cash-flow-corporate-finance-and-takeovers-1986",
    "the-theory-of-corporate-finance-2006",
    "firms-contracts-and-financial-structure-1995"
  ],
  "depreciation-and-amortization": [
    "the-economics-of-disclosure-and-financial-reporting-regulation-evidence-and-suggestions-for-future-research-2016",
    "the-theory-of-corporate-finance-2006",
    "mandatory-disclosure-as-a-solution-to-agency-problems-1995"
  ],
  "capital-expenditure": [
    "agency-costs-of-free-cash-flow-corporate-finance-and-takeovers-1986",
    "the-theory-of-corporate-finance-2006",
    "firms-contracts-and-financial-structure-1995"
  ],
  "book-value-of-equity": [
    "law-and-finance-1998",
    "the-theory-of-corporate-finance-2006",
    "the-economics-of-disclosure-and-financial-reporting-regulation-evidence-and-suggestions-for-future-research-2016"
  ],
  goodwill: [
    "the-theory-of-corporate-finance-2006",
    "the-economics-of-disclosure-and-financial-reporting-regulation-evidence-and-suggestions-for-future-research-2016",
    "agency-costs-of-free-cash-flow-corporate-finance-and-takeovers-1986"
  ],
  impairment: [
    "the-economics-of-disclosure-and-financial-reporting-regulation-evidence-and-suggestions-for-future-research-2016",
    "mandatory-disclosure-as-a-solution-to-agency-problems-1995",
    "the-economic-consequences-of-increased-disclosure-2000"
  ],
  "deferred-tax-assets-and-liabilities": [
    "the-economics-of-disclosure-and-financial-reporting-regulation-evidence-and-suggestions-for-future-research-2016",
    "the-economic-consequences-of-increased-disclosure-2000",
    "the-theory-of-corporate-finance-2006"
  ],
  "earnings-quality": [
    "the-economics-of-disclosure-and-financial-reporting-regulation-evidence-and-suggestions-for-future-research-2016",
    "the-economic-consequences-of-increased-disclosure-2000",
    "mandatory-disclosure-as-a-solution-to-agency-problems-1995"
  ],
  "cash-conversion-cycle": [
    "the-theory-of-corporate-finance-2006",
    "firms-contracts-and-financial-structure-1995",
    "agency-costs-of-free-cash-flow-corporate-finance-and-takeovers-1986"
  ],
  "return-on-invested-capital": [
    "agency-costs-of-free-cash-flow-corporate-finance-and-takeovers-1986",
    "the-theory-of-corporate-finance-2006",
    "firms-contracts-and-financial-structure-1995"
  ],
  "diluted-earnings-per-share": [
    "the-economics-of-disclosure-and-financial-reporting-regulation-evidence-and-suggestions-for-future-research-2016",
    "law-and-finance-1998",
    "mandatory-disclosure-as-a-solution-to-agency-problems-1995"
  ],
  "net-debt": [
    "firms-contracts-and-financial-structure-1995",
    "the-theory-of-corporate-finance-2006",
    "agency-costs-of-free-cash-flow-corporate-finance-and-takeovers-1986"
  ],
  "lease-liability": [
    "firms-contracts-and-financial-structure-1995",
    "the-theory-of-corporate-finance-2006",
    "the-economics-of-disclosure-and-financial-reporting-regulation-evidence-and-suggestions-for-future-research-2016"
  ],
  "non-controlling-interest": [
    "the-theory-of-corporate-finance-2006",
    "law-and-finance-1998",
    "the-economics-of-disclosure-and-financial-reporting-regulation-evidence-and-suggestions-for-future-research-2016"
  ],
  "debt-overhang": [
    "determinants-of-corporate-borrowing-1977",
    "firms-contracts-and-financial-structure-1995",
    "agency-costs-of-free-cash-flow-corporate-finance-and-takeovers-1986",
    "the-theory-of-corporate-finance-2006"
  ],
  "risk-weighted-assets": [
    "basel-iii-a-global-regulatory-framework-for-more-resilient-banks-and-banking-systems-2011",
    "capital-regulation-after-the-crisis-business-as-usual-2010",
    "the-prudential-regulation-of-banks-1994",
    "bank-concentration-competition-and-crises-first-results-2006"
  ],
  "financial-technology": [
    "the-evolution-of-fintech-a-new-post-crisis-paradigm-2016",
    "fintech-regtech-and-the-reconceptualization-of-financial-regulation-2017",
    "from-fintech-to-techfin-the-regulatory-challenges-of-data-driven-finance-2018",
    "fintech-and-the-innovation-trilemma-2019"
  ],
  "regulatory-technology": [
    "the-evolution-of-fintech-a-new-post-crisis-paradigm-2016",
    "fintech-regtech-and-the-reconceptualization-of-financial-regulation-2017",
    "from-fintech-to-techfin-the-regulatory-challenges-of-data-driven-finance-2018",
    "fintech-and-the-innovation-trilemma-2019"
  ],
  "supervisory-technology": [
    "fintech-regtech-and-the-reconceptualization-of-financial-regulation-2017",
    "from-fintech-to-techfin-the-regulatory-challenges-of-data-driven-finance-2018",
    "fintech-and-the-innovation-trilemma-2019"
  ],
  "digital-assets": [
    "some-simple-economics-of-the-blockchain-2016",
    "the-blockchain-and-the-new-architecture-of-trust-2018",
    "initial-coin-offerings-financing-growth-with-cryptocurrency-token-sales-2020",
    "decentralized-finance-2020"
  ],
  tokenization: [
    "some-simple-economics-of-the-blockchain-2016",
    "the-blockchain-and-the-new-architecture-of-trust-2018",
    "initial-coin-offerings-financing-growth-with-cryptocurrency-token-sales-2020",
    "decentralized-finance-2020"
  ],
  "smart-contracts": [
    "some-simple-economics-of-the-blockchain-2016",
    "the-blockchain-and-the-new-architecture-of-trust-2018",
    "decentralized-finance-2020",
    "defi-shadow-banking-2-0-2023"
  ],
  stablecoins: [
    "the-blockchain-and-the-new-architecture-of-trust-2018",
    "decentralized-finance-2020",
    "defi-shadow-banking-2-0-2023"
  ],
  "central-bank-digital-currency": [
    "the-evolution-of-fintech-a-new-post-crisis-paradigm-2016",
    "from-fintech-to-techfin-the-regulatory-challenges-of-data-driven-finance-2018",
    "decentralized-finance-2020"
  ],
  "decentralized-finance": [
    "some-simple-economics-of-the-blockchain-2016",
    "the-blockchain-and-the-new-architecture-of-trust-2018",
    "decentralized-finance-2020",
    "defi-shadow-banking-2-0-2023"
  ],
  "automated-finance": [
    "fintech-and-the-innovation-trilemma-2019",
    "driverless-finance-2020",
    "decentralized-finance-2020",
    "defi-shadow-banking-2-0-2023"
  ]
} as const satisfies Record<string, readonly string[]>;

const CONCEPT_READING_MAP: Record<string, readonly string[]> = CONCEPT_READING_SLUGS;

export function getCuratedReadingsForConcept(concept: ConceptEntry, readings: IndexedReading[]): IndexedReading[] {
  const slugs = CONCEPT_READING_MAP[getConceptSlug(concept.term)] ?? [];
  const readingsBySlug = new Map(readings.map((reading) => [reading.slug, reading]));

  return slugs
    .map((slug) => readingsBySlug.get(slug))
    .filter((reading): reading is IndexedReading => Boolean(reading))
    .sort((first, second) => first.sortYear - second.sortYear || first.title.localeCompare(second.title));
}

export function getConceptReadingAudit(concepts: ConceptEntry[], readings: IndexedReading[]) {
  const conceptSlugs = new Set(concepts.map((concept) => getConceptSlug(concept.term)));
  const readingSlugs = new Set(readings.map((reading) => reading.slug));

  return {
    conceptsWithoutCuratedReadings: concepts
      .map((concept) => getConceptSlug(concept.term))
      .filter((slug) => !CONCEPT_READING_MAP[slug]),
    mappedConceptsNotInArchive: Object.keys(CONCEPT_READING_SLUGS).filter((slug) => !conceptSlugs.has(slug)),
    mappedReadingsNotInArchive: Object.values(CONCEPT_READING_SLUGS)
      .flat()
      .filter((slug, index, allSlugs) => !readingSlugs.has(slug) && allSlugs.indexOf(slug) === index)
  };
}
