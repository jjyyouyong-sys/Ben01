# Business English Practice

A responsive, dependency-free website for practicing business English. Nine interactive situations cover sales conversations, professional emails, and negotiation and contracts. Includes instant feedback, topic scores, a phrasebook, and a writing exercise with a model reply.

## Publish with GitHub Pages

The website is ready to serve directly from the repository root; there is no build step.

1. In GitHub, open this repository’s **Settings → Pages**.
2. Under **Build and deployment**, select **Deploy from a branch**.
3. Select **main** and **/ (root)**, then **Save**.
4. Wait for GitHub to finish deploying. Use the public URL shown on the Pages settings screen.

GitHub Pages availability depends on repository visibility and your GitHub plan. Do not change repository visibility without reviewing what will become public. Publishing has not been verified from this environment; the GitHub API is blocked by its network policy.

## Run locally

Keep `index.html`, `app.js`, and `styles.css` together. Open `index.html` in a browser, or run this in the project folder:

```sh
python3 -m http.server 8000
```

Open http://localhost:8000 on that same computer. A server running in a Codex cloud workspace is not automatically reachable on your computer.

## Privacy

No accounts, analytics, external fonts, paid services, or backend. Writing drafts stay in browser local storage when available. Clear draft deletes the stored draft. Storage restrictions are handled gracefully. Scores reset when switching topics or reloading. No automated writing grading is provided.

## Development

Edit the three website files and refresh. No dependency installation or build command is required. The site uses relative asset links for GitHub Pages project paths. Future Codex tasks should use this existing checkout; no separate worktree is necessary.

Browser validation covers every question, scoring, retrying, topic switching, writing persistence and deletion, unavailable storage, and desktop/tablet/mobile widths. Legal notes are general learning material, not transaction-specific advice. These are illustrative scenarios, not EAGTOP policies.

## Company website demonstration

A separate fictional company demo is in `company/`. It does not replace the English practice website. See [the complete introduction](company/README.md) for features, security measures, privacy behavior, and launch requirements. The company is fictional and the enquiry form does not send messages.
