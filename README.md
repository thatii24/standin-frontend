# StandIn — Frontend

> Your AI-powered stand-in for meetings you can't miss.

StandIn lets you set up an AI avatar with your context and update before a meeting. The avatar answers questions on your behalf in real time, then generates a full summary when the meeting ends.

---

## What It Does

- **Setup Screen** — Enter your meeting title, role, update, and any extra context before the meeting starts
- **Meeting Room** — Participants type questions live; the AI responds as you, with optional audio via Beyond Presence
- **Summary Screen** — When the meeting ends, see duration, questions answered, key points, topics, and the full transcript

---

## Tech Stack

| Tool | Purpose |
|---|---|
| React (Vite) | UI framework |
| Tailwind CSS v3 | Styling |
| Axios | HTTP requests to backend |
| Netlify | Hosting |

---

## Project Structure

```
standin-frontend/
├── src/
│   ├── components/
│   │   ├── SetupForm.jsx        # Pre-meeting form screen
│   │   ├── MeetingRoom.jsx      # Live meeting screen
│   │   ├── Summary.jsx          # Post-meeting summary screen
│   │   ├── AvatarBubble.jsx     # AI response card with audio
│   │   └── TranscriptBubble.jsx # Question/answer chat bubbles
│   ├── App.jsx                  # Screen router (setup → meeting → summary)
│   ├── main.jsx                 # React entry point
│   └── index.css                # Tailwind directives
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js v18 or higher — [nodejs.org](https://nodejs.org)
- The StandIn backend running on port 3001 — see the backend repo

### Install and Run

```bash
# Clone the repo
git clone https://github.com/YOURUSERNAME/standin-frontend.git
cd standin-frontend

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

> Make sure the backend is running at `http://localhost:3001` before testing — otherwise API calls will fail.

---

## Backend API

This frontend talks to three endpoints on the StandIn backend:

| Method | Endpoint | What It Does |
|---|---|---|
| `POST` | `/api/setup` | Saves meeting context before the meeting |
| `POST` | `/api/ask` | Sends a question, gets AI text + audio URL back |
| `GET` | `/api/summary` | Returns duration, key points, and full transcript |

In development the backend URL is `http://localhost:3001`.
In production it is your Railway URL (see Deployment below).

---

## Common Issues

**Tailwind not working / `npx tailwindcss init -p` fails**

This happens if Tailwind v4 got installed instead of v3. Fix it:

```bash
npm uninstall tailwindcss
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p
```

**API calls failing in the browser**

Make sure the backend is running. Open a second terminal, navigate to the backend folder, and run `npm run dev`. You should see `StandIn backend running on port 3001`.

**Changes not showing up**

Vite hot-reloads automatically. If it stops, press `Ctrl+C` in the terminal and run `npm run dev` again.

---

## Deployment

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) and sign in with GitHub
3. Click **Add New Site → Import an Existing Project**
4. Select `standin-frontend`
5. Set these build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click **Deploy Site**

### Switch to Production Backend

Once your backend is deployed on Railway, do a global find and replace in Cursor:

- Press `Ctrl+Shift+H` (Windows) or `Cmd+Shift+H` (Mac)
- Find: `http://localhost:3001`
- Replace with: `https://your-backend-name.railway.app`

Then push to GitHub — Netlify redeploys automatically.

---

## Submission Checklist

- [ ] Frontend live on Netlify
- [ ] All three screens working (Setup → Meeting Room → Summary)
- [ ] Frontend pointing to Railway URL, not localhost
- [ ] GitHub repo with all code pushed
- [ ] Demo video recorded
- [ ] Project overview document filled in

**Submit by 9:45am on May 17th. Do not wait until 10am.**

---

## Related Repos

- [standin-backend](https://github.com/YOURUSERNAME/standin-backend) — Express backend with Gemini AI and Beyond Presence integration
