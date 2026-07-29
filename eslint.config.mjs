import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const eslintConfig = [
  ...nextVitals,
  ...nextTypescript,
  {
    ignores: [
      "output/**",
      "replication_package/**",
      "empirical-legal-research-design-assistant/**",
      "empirical-legal-writing-assistant/**",
      "fmr-format-assistant/**",
      "fmr-law-submission-assistant/**",
      "securities-law-academic-assistant/**"
    ]
  }
];

export default eslintConfig;
