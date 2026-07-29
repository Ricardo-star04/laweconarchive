# Law and Economics Archive

An English-language research archive for law and economics, built with **Next.js + TypeScript + Tailwind CSS + MDX**. The site focuses on corporate law, securities regulation, financial law, and empirical research methods.

Live site: [https://laweconarchive.vercel.app](https://laweconarchive.vercel.app)

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- MDX-driven content in `content/posts`

## Structure

```text
.
├─ app/
│  ├─ page.tsx                    # homepage
│  ├─ start-here/page.tsx         # orientation page
│  ├─ concepts/page.tsx           # core concept glossary
│  ├─ introduction/page.tsx       # law and economics primer
│  ├─ literature/page.tsx         # readings and bibliography index
│  ├─ history/page.tsx            # field history timeline
│  ├─ scholars/page.tsx           # scholar index
│  ├─ scholars/[slug]/page.tsx    # scholar profile pages
│  ├─ cases/page.tsx              # classic case index
│  ├─ cases/[slug]/page.tsx       # case detail page
│  ├─ methods/page.tsx            # methods toolkit
│  ├─ about/page.tsx              # about page
│  ├─ articles/[slug]/page.tsx    # MDX article detail page
│  ├─ topics/page.tsx             # field guide index
│  ├─ topics/[slug]/page.tsx      # field guide detail page
│  ├─ robots.ts                   # SEO robots
│  └─ sitemap.ts                  # SEO sitemap
├─ components/
├─ content/posts/                 # scholarly articles in MDX
├─ content/templates/             # article template
├─ lib/
│  ├─ content.ts                  # metadata parsing, categories, TOC extraction
│  ├─ concepts.ts                 # glossary entries and learning terms
│  ├─ field-history.ts            # law and economics history and scholar profiles
│  ├─ topics.ts                   # research questions, core readings, source links
│  └─ date.ts
└─ README.md
```

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
npm run start
```

Default local URL: `http://localhost:3000`

## Release Checks

Before publishing a production release, run:

```bash
npm run lint
npm run typecheck
npm run security:release
npm run build
```

## MDX Article Format

Articles in `content/posts/*.mdx` use frontmatter:

```yaml
---
title: Article Title
subtitle: Article subtitle
author: Editorial Team
date: 2026-06-02
summary: Abstract text
keywords:
  - law and economics
  - institutional analysis
category: Research Methods
tags:
  - methods
related:
  - related-article-slug
references:
  - id: "[1]"
    text: Author. Title. Journal/Publisher, Year.
---
```

Supported categories:

- Corporate Law
- Securities Regulation
- Financial Regulation
- Research Methods

## Content Principles

- Use real scholarly literature and authoritative institutional sources.
- Keep author, year, venue, and source links for core readings.
- Write all public-facing website copy in English.
- Do not present unverified materials as facts.

## Implemented Features

- Learning-oriented homepage with start-here links, field guides, core concepts, landmark texts, and external sources
- Start Here, concepts, readings, field guides, field history, scholar profiles, cases, methods, primer, about, and article detail pages
- MDX content system with metadata, categories, dynamic routes, references, table of contents, and related articles
- Research project system with research questions, core readings, and verifiable source links
- Basic SEO through metadata, robots, and sitemap

## Suggested Extensions

1. Add full-text search with `pagefind` or `flexsearch`.
2. Add author and institution pages.
3. Move references into a reusable BibTeX or JSON source.
4. Add draft, review, and published states.
5. Add an errata or comment workflow for scholarly feedback.
