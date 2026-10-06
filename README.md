# Samjhao

Samjhao turns paperwork into understandable explanations and saved action plans in English, Telugu and Hindi.

## Run

Install Node.js 24 or newer. No npm dependencies are required by the server or the recovered frontend.

```sh
cp .env.example .env
npm start
```

Open `http://localhost:3000`. Accounts, sessions and saved records use the SQLite file in `data/`; keep that directory on a persistent disk. Do not place it in a web-served directory or commit it.

For real document analysis, set `GEMINI_API_KEY` and an available `GEMINI_MODEL` in `.env` or your server's secret settings, then restart. Never put the key into a browser file, a screenshot, a commit, or a chat message. With no key, account features still work and real analysis returns an explicit unavailable error. Uploaded documents are never silently replaced with sample results.

## Implemented

- Register, sign in, restore a session after refresh, sign out and delete an account.
- Salted scrypt password hashes and opaque, expiring, server-side sessions. Cookies are HttpOnly and SameSite; production cookies are Secure.
- Upload PDF, JPEG, PNG or WebP documents up to 10 MB after consent. The server checks size and file signatures before calling Gemini.
- Private document history, saved explanations, original extracted wording, action progress and document deletion.
- Document-specific questions and English/Telugu/Hindi explanation translation. Translation preserves step identifiers and saved progress.
- Existing reading controls, browser speech synthesis, text sharing, illustrative sample documents and responsive interface.
- Ownership checks on every private record operation, request-origin verification, persistent request throttles and safe error messages.

Uploaded file bytes are sent to Google Gemini and are not written to disk by this app. Extracted text, filenames and plans are retained until deleted. Google processing is subject to the operator's service terms. Questions are sent with source text but are not stored by this app. Browser-local storage is used only for reading preferences and clearly identified sample progress.

## Deploy

Run the Node server behind an HTTPS reverse proxy on a host with persistent storage. GitHub Pages cannot run this backend.

- Set `NODE_ENV=production` and `APP_ORIGIN` to the exact HTTPS origin (no trailing slash).
- Set `HOST=0.0.0.0` in a container; restrict direct access to the internal application port.
- Configure the Gemini key privately and verify the selected model is available to your project.
- Mount `DATABASE_PATH` on a persistent private volume, with encrypted disks and a documented backup/deletion policy. SQLite is a single-host deployment choice; do not share its files between replicas.
- Configure the reverse proxy for 11 MB request bodies and at least 120 seconds of response time.
- Check `/api/health`; `analysisAvailable` indicates configured credentials, not a successful provider request.
- Make one real PDF/image upload and one real question before opening the service to users. Review explanations against their originals.

The server ignores forwarded-IP headers. Its IP login throttle sees the direct peer. Behind a reverse proxy, configure per-client login limits at that proxy and adjust the application's throttle for your expected traffic after review; never blindly trust client-supplied forwarded headers.

The app does not currently send verification or password-recovery email. Email is an account identifier, not verified ownership. Add an email provider and recovery flow before relying on self-service account recovery. Account deletion removes active database records and sessions; operators must also define how encrypted backups expire.

`Dockerfile` provides an optional container entrypoint. Set environment variables privately and mount `/app/data` persistently. Do not use a static-file-only deployment.

## Source layout

```text
public/app.js             Recovered React application, with repaired functional flows
public/styles.css        Supplied interface styling and account-form styles
public/vendor/runtime.js Supplied bundled React/router/icons/HTTP dependencies
server/index.js          HTTP API, SQLite storage, authentication and static serving
server/ai.js             Gemini integration and output validation
test/application.test.js Integration and provider-contract tests
```

The original editable JSX project was not supplied. Application code was separated from the uploaded production JavaScript, and the supplied dependency bundle and original UI were preserved. Local names in untouched recovered code remain terse. This is not a claim that the original development repository was recovered. Future dependency upgrades should replace the recovered vendor bundle with a normal package-managed frontend build.

## Verification

```sh
npm run check
npm test
```

Tests exercise registration/login/logout, restart persistence, cross-account isolation, plan progress/translation/questions/deletion, account deletion, CSRF checks, throttling, upload validation, static-file isolation, missing-provider behavior and model-output validation.

Provider-dependent tests use an explicitly injected deterministic test provider or mock HTTP responses. They do **not** establish live Gemini quality or availability. The production application contains no mock-provider fallback.

The original published site is separate from this repository. Committing this project does not change that site's deployment.

## Provider documentation

- [Gemini Generate Content API](https://ai.google.dev/api/generate-content)
- [Document understanding](https://ai.google.dev/gemini-api/docs/document-processing)

Dependency license banners from the supplied build are retained in `public/vendor/runtime.js` and `public/styles.css`.
