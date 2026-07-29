# Security and Release Readiness

This archive is intentionally a read-only, static-first research site. It has no
accounts, payment flow, public uploads, database, or server-side form handling.
Keeping those capabilities out of scope materially reduces the production
attack surface.

## Reporting a Vulnerability

Report security issues privately through the Rednote account “Ricardo”. Include
the affected URL, reproduction steps, observed impact, and any relevant request
or response details. Do not include credentials, personal data, or confidential
third-party material, and do not publish an unpatched issue.

A standards-compliant `/.well-known/security.txt` should be added only after a
dedicated private security-reporting URL or email address is available.

## Implemented Controls

- A Content Security Policy limits scripts and resources, blocks plugins and
  framing, restricts form submissions, and upgrades mixed content in production.
- HSTS is enabled in production, without `includeSubDomains` or `preload` until
  ownership and HTTPS coverage of every subdomain have been confirmed.
- Clickjacking, MIME sniffing, referrer leakage, browser-feature permissions,
  opener isolation, and framework-identification headers are restricted.
- Browser source maps are disabled in production.
- Environment files are ignored by source control; only
  `NEXT_PUBLIC_SITE_URL` is documented as a public build value.
- External links opened in a new tab use `noopener` or `noreferrer`.
- Article MDX is repository-controlled. User-supplied or remotely fetched MDX
  must never be rendered without a separate sanitization and trust-boundary
  review.
- Scholar Match uses session storage, and the research-design canvas uses local
  storage. Neither feature sends those values to a server.

## Required Release Gate

1. Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS origin.
2. Terminate TLS at the hosting platform and redirect HTTP to HTTPS.
3. Run `npm ci` from the committed lockfile in a clean environment.
4. Run `npm run security:release`, `npm run lint`, and `npm run build`.
5. Verify the production response includes CSP, HSTS, `nosniff`, frame
   protection, referrer policy, and permissions policy headers.
6. Test all public routes under the enforced CSP and review the browser console
   for blocked first-party assets.
7. Confirm no `.env*`, credentials, private keys, unpublished datasets, or
   editor-only notes are included in the deployment artifact.
8. Configure automated dependency alerts and repeat the dependency audit before
   each release.
9. Back up the exact release source and content data so a compromised or faulty
   deployment can be rolled back.

## Change-Control Rules

- Treat new authentication, forms, APIs, analytics, third-party scripts,
  embeds, uploads, comments, or remote MDX as a security-design change.
- Review every new external origin before expanding CSP.
- Do not weaken CSP or browser isolation to silence an unexplained production
  error.
- Apply critical and high-severity dependency fixes before release; assess
  moderate and low findings against actual reachability and record the decision.
