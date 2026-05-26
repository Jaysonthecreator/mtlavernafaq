## Goal
Let the Laverna Assistant answer any question (general knowledge, homework help, etc.) — not just pre-loaded school FAQ.

## Note on Mzizi portal
`https://school.mzizi.co.ke/ISIMSLogin.aspx` is a login screen — the actual student/parent data behind it (grades, fees, attendance) requires authentication and is per-user. We can't scrape it without credentials, and even with them, scraping a per-user portal from a public chatbot would leak data. So real Mzizi integration is out of scope for this change. If you want that later, it needs proper login + per-user auth.

What we *can* do now: keep the school info baked into the assistant, but unlock it to answer general questions too.

## Change

**`src/lib/chat.functions.ts`** — rewrite the system prompt:
- Keep all current Mount Laverna school facts as authoritative context.
- Drop the rule that restricts answers to listed info only.
- Add: "You may also answer general knowledge, homework, study help, and everyday questions like any helpful assistant. For Mount Laverna-specific facts (fees, admissions, contacts, uniforms, transport, dates), only use the information above — never invent school-specific details. If asked something school-specific that isn't listed, point the user to mtlaverna@yahoo.com / 0725500584."
- Allow longer responses when the question warrants it (remove the strict 2–5 sentence cap for general queries).

No UI changes, no new dependencies, no backend changes beyond the prompt.