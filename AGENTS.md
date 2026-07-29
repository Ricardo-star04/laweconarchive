# AGENTS.md

## Project Positioning

- This project is an English-language research portal for the international law and economics community.
- It serves scholars, graduate students, policy researchers, and research groups working on law, economics, finance, governance, regulation, and empirical legal studies.
- The site should publish structured, searchable, citable, and internationally legible research content.

## Core Principles

- Prioritize readability, scholarly tone, and clear information architecture.
- Keep the design restrained and institutional rather than promotional.
- Reuse existing components when adding pages or sections.
- Avoid excessive animation, decorative effects, and marketing language.
- All public-facing website copy should be in English.

## Typography and Scholarly Presentation

- Use a strict heading hierarchy: `h1 > h2 > h3`; do not skip heading levels.
- Keep paragraph spacing, line height, references, and notes comfortable for long-form academic reading.
- References, footnotes, and source links must be visually distinct and consistently formatted.
- Lists, tables, and notes must remain readable on both desktop and mobile.

## Article Page Requirements

Every article page must include:

- Abstract
- Keywords
- References
- Related articles

Notes:
- Abstracts should state the research question, method, argument, and institutional implication.
- Keywords should support topic discovery and aggregation.
- References should use a consistent numbered or citation format.
- Related articles should be based on category, tags, or explicit related slugs.

## Component and Directory Conventions

- Keep component names and directory names consistent.
- Use PascalCase for React component names.
- Use the existing project naming style for folders and route segments.
- Before adding a new module, check whether `components/`, `lib/`, or `app/` already contains a reusable implementation.

## Development Workflow

- After any code change, run:
  - `npm run lint`
  - `npm run build`
- If a check fails, fix it before considering the work complete.
- For page-structure changes, also check:
  - navigation reachability
  - mobile readability
  - article metadata completeness

## Content Style

- Avoid promotional words such as "best", "revolutionary", or "groundbreaking" unless used in a sourced quotation.
- Use neutral scholarly language.
- Claims should be tied to verifiable literature, institutional materials, cases, or data.
- Do not invent statutes, cases, citations, authors, or data.

## Change Checklist

Before finishing a feature or content change, confirm:

- Page structure and hierarchy are clear.
- English copy is consistent across navigation, pages, metadata, and content.
- Reusable components were reused where appropriate.
- `lint` and `build` pass.
