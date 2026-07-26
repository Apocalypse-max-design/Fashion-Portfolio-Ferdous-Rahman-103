# Portfolio + Mobile Admin Dashboard
### Md. Ferdous Rahman Fakir — B.Sc. Fashion Design & Technology, PCIU

Two parts:
- **`/`** — your public portfolio website
- **`/admin`** — a password-protected dashboard, fully usable **from your phone**

You never need to touch code again. Everything is edited in the dashboard.

---

## 1. Start it

You need [Node.js](https://nodejs.org) installed (free). Then:

**Windows:** double-click `start.bat`
**Mac / Linux:** double-click `start.sh` (or run `node server.js` in this folder)

You'll see:

```
Site   :  http://localhost:3000
Admin  :  http://localhost:3000/admin
Phone  :  http://192.168.x.x:3000/admin   (same Wi-Fi)
Password: admin123   ← CHANGE IT ON FIRST LOGIN
```

## 2. Open the admin on your phone

Make sure your phone and computer are on **the same Wi-Fi**, then type the
`Phone:` address into your phone browser.

Log in with **`admin123`** → go to **Settings** → change the password immediately.

**Tip:** in Chrome/Safari on your phone tap *Share → Add to Home Screen*.
The dashboard then opens like a real app, full-screen.

---

## 3. What you can do from your phone

| Tab | What you manage |
|---|---|
| **Profile & Hero** | Your photo (camera or gallery), name, tagline, rotating job titles |
| **About** | About paragraphs, quick-fact chips |
| **Skills** | Skill groups + drag sliders to set each percentage |
| **Experience** | Timeline entries with bullet points |
| **Projects** | Project cards — upload a photo per project, tags, description |
| **Portfolio Gallery** | Multi-select upload; captions edit inline; downloadable portfolio PDF |
| **Certificates** | Upload certificate scans; quick-upload creates a card per image |
| **CV** | Upload your CV (PDF/DOCX) — the site's download button updates instantly |
| **Contact** | Email, phone, address, Formspree endpoint, social links |
| **File Manager** | See every uploaded file, copy paths, delete files |
| **Settings** | Change password, download a backup, restore from backup |

Every list supports **↑ ↓ reorder** and **Delete**.
Press **Save & Publish** when done — the live site updates immediately.

---

## 4. How your content is stored

- All text/settings live in **`content.json`**
- Uploaded files go into `assets/`, `cv/`, `projects/`, `portfolio/`, `certificates/`
- `data.js` is auto-regenerated on every save — it's a **fallback** so the site still
  works if `index.html` is opened directly without the server. Don't edit it by hand.
- The last 20 versions of your content are auto-backed-up in `.backups/`

## 5. Working contact form

Sign up free at [formspree.io](https://formspree.io), create a form, copy the endpoint URL,
and paste it in **Admin → Contact → Form endpoint**.
If left empty the form opens the visitor's email app instead — still works.

---

## 6. Putting it online

**Option A — Static host (free, no admin online).**
Netlify / GitHub Pages only serve files, they can't run the admin.
Workflow: run the server locally, edit on your phone, press Save, then upload
the whole folder to [app.netlify.com/drop](https://app.netlify.com/drop).
The live site reads `content.json`, so all your edits ship with it.

**Option B — Host with a live admin (recommended).**
Deploy to a free Node host — [Render](https://render.com), [Railway](https://railway.app)
or [Fly.io](https://fly.io). Start command: `node server.js`.
Then `/admin` works from anywhere in the world, not just your Wi-Fi.

> ⚠️ If you host it publicly, **change the password first**, and always use `https`.
> Also note: on free tiers with ephemeral disks, uploaded files can be wiped on redeploy —
> use the **Settings → Download backup** button regularly.

---

## Colour system

80% black, white text, red `#e10600` as the brand accent.
Each section has its own accent colour that the whole UI shifts to as you scroll:

| Section | Accent |
|---|---|
| Hero / About / Contact | Red `#e10600` |
| Skills | Amber `#ffb300` |
| Experience | Cyan `#00b4d8` |
| Projects | Green `#00d68f` |
| Portfolio | Violet `#c77dff` |
| Certificates | Orange `#ff7b00` |
| CV | Blue `#4895ef` |

Change any of them in `index.html` — each `<section>` carries `data-accent="#colour"`.

---

## Security notes

- Password stored in `admin.config.json` (git-ignored, never served — returns 403)
- Session cookie is HttpOnly, 30-day expiry
- Uploads restricted to 5 folders, whitelisted extensions, 30 MB cap
- Path-traversal blocked on upload and delete
- All write endpoints require a valid session

## Troubleshooting

**"node: command not found"** → install Node.js from nodejs.org
**Phone can't reach the site** → same Wi-Fi? Some routers block device-to-device
("AP isolation"); try a phone hotspot instead. Windows may also need a firewall
prompt approved for Node.
**Port 3000 busy** → `PORT=8080 node server.js`
