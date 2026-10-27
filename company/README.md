# Meridian Works — company website demonstration

Meridian Works is a fictional engineering consultancy. The company, positioning, and services are illustrative. This is not a real business and enquiries are not delivered.

## Website introduction

**Purpose:** demonstrate a professional company website that introduces a specialist business, explains its offering, and helps a visitor understand the next step.

**Audience:** project owners, manufacturing businesses, and teams evaluating engineering support. These are fictional customer groups, not real customers.

**Design:** a navy, blue, and silver palette; generous spacing; architectural illustrations built with CSS; responsive layouts; system fonts. No stock photography, licensed media, or third-party font downloads.

### Included sections

1. **Home:** a focused headline, short company proposition, and links to services and the company story.
2. **Company:** a fictional introduction, specialism, customer groups, and international outlook. No unverified claims about certifications, clients, awards, offices, or years in business.
3. **Services:** engineering advisory, project planning, and technical communication. Each describes a distinct illustrative customer need.
4. **Working together:** a proposed three-step process from understanding the need to defining the solution and agreeing on next steps.
5. **Enquiry preview:** required name, email, and message fields. Browser validation and length limits. Produces a local text preview; it does not send an email or submit data. Clear details resets the form and preview.
6. **Privacy explanation:** states the actual behavior of this demonstration. It is not a substitute for a production privacy notice.

### Working interactions

- Mobile menu with accurate expanded state, Escape-to-close, and close-on-navigation behavior.
- Anchor navigation, keyboard focus indicators, a skip link, and reduced-motion support.
- Enquiry preview uses text rendering rather than interpreting entered HTML.
- No analytics, cookies, tracking, local storage, external resources, or network submission in application code.

## Run

From `/workspace/Ben01`, use the existing isolated checkout (do not create a worktree):

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Request `/company/` on that server. No build step, dependencies, accounts, or API keys. A cloud-local server is not automatically accessible from a user's computer. Download the complete project and run the same command locally if needed.

When deployed in the existing GitHub Pages repository, the company demo uses the `/Ben01/company/` path. The English practice website at `/Ben01/` stays unchanged. Deployment and remote availability must be verified separately.

## Security approach and limits

The static site has no login system, database, backend, file uploads, or payment processing. Reducing those features reduces attack surface; it does not establish an absolute guarantee of safety.

A meta Content Security Policy permits scripts/styles from the same origin and blocks connections, form submission, plugins, and base URL changes. The referrer policy limits information sent on cross-origin navigation. Draft search indexing is discouraged with `noindex,nofollow`; this is not access control. Any public deployment is publicly accessible.

GitHub Pages manages TLS for its default domain. Custom domains require correct DNS and HTTPS configuration. Security headers such as `frame-ancestors`, HSTS, and `X-Content-Type-Options` must be configured by a supporting host; they cannot be fully supplied through this HTML meta policy. This implementation does not claim those headers are enabled. Select a suitable host if those controls are requirements.

Before turning this into a real business website:

- Approve the real brand, legal company name, services, official contact details, images, and publishing authorization.
- Choose language(s), target markets, hosting, and a domain. Budget and domain registration are separate decisions.
- Replace illustrative content and remove the demo labels only after factual review.
- Add a privacy notice reflecting the actual operator and data handling. Check relevant legal and hosting requirements; mainland China hosting may require ICP procedures depending on the arrangement.
- If messages must be delivered, implement a verified contact destination and a secure backend or suitable provider with server-side validation, abuse protection, rate limits, appropriate retention, and secret handling. Do not put mail credentials in browser JavaScript.
- Verify HTTPS, security headers, all public pages, links, accessibility, and the live contact-delivery path. This demo has no live delivery path to verify.

## Maintain

Edit `index.html`, `styles.css`, and `app.js`. No package installation or build step. Do not place credentials or confidential company information in the public repository. Audit any future third-party resources before adding them.
