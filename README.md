# StandIn

> Your AI-powered stand-in for meetings you can't miss.

---

## 📂 Branch Directory

This is the main branch. It contains no code — only this guide.
All working code lives in the branches below.

| Branch | Type | Contents | Status |
|---|---|---|---|
| `2026-05-15-2mml` | Frontend | Full React + Tailwind frontend code | ✅ Done |
| *(add next branch here)* | | | |

---

## How To Get a Branch

```bash
# Replace BRANCH-NAME with the branch you want from the table above
git checkout BRANCH-NAME
npm install
npm run dev
```

---

## About StandIn

StandIn lets you set up an AI avatar with your context and update before a meeting. The avatar answers questions on your behalf in real time, then generates a full summary when the meeting ends.

**Three screens:**
- **Setup** — Enter your role, update, and context before the meeting
- **Meeting Room** — Live Q&A with the AI avatar, with optional audio
- **Summary** — Duration, key points, topics, and full transcript when the meeting ends

---

## Tech Stack

| Tool | Purpose |
|---|---|
| React (Vite) | UI framework |
| Tailwind CSS v3 | Styling |
| Axios | API calls to backend |
| Netlify | Frontend hosting |
| Express | Backend server |
| Gemini AI | AI response generation |
| Beyond Presence | Avatar audio |
| Railway | Backend hosting |

---

## Repos

| Repo | Contents |
|---|---|
| `standin-frontend` ← you are here | React frontend |
| [standin-backend](https://github.com/YOURUSERNAME/standin-backend) | Express backend |

---

## How To Add a New Branch to This README

1. Check out main: `git checkout main`
2. Open this `README.md`
3. Add a new row to the **Branch Directory** table at the top:

```
| `your-new-branch-name` | Frontend / Backend / Hotfix | What this branch contains | ✅ Done / 🔧 In Progress |
```

4. Save and push:

```bash
git add README.md
git commit -m "update branch directory — add your-new-branch-name"
git push origin main
```

---

## Branch Naming Convention

To keep things consistent, name branches like this:

```
YYYY-MM-DD-description
```

Examples:
```
2026-05-15-2mml          ← frontend base build
2026-05-16-backend       ← backend integration
2026-05-16-avatar-audio  ← Beyond Presence audio feature
2026-05-17-hotfix        ← last minute fixes before submission
```

---

## Submission Checklist

- [ ] Frontend live on Netlify
- [ ] Backend live on Railway
- [ ] Frontend pointing to Railway URL not localhost
- [ ] All branches listed in the Branch Directory above
- [ ] GitHub repos with all code pushed
- [ ] Demo video recorded
- [ ] Project overview document filled in

**Submit by 9:45am on May 17th. Do not wait until 10am.**
