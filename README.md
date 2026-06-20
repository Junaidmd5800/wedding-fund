# Wedding Fund — your installable app

This is a Progressive Web App (PWA): a website that installs to your phone's home
screen, runs full-screen with its own icon, works offline, and keeps your data on
your device. All free.

## Files
- `index.html` — the app
- `manifest.webmanifest` — makes it installable
- `sw.js` — offline + notification support
- `icon-192.png`, `icon-512.png`, `icon-maskable-512.png` — app icons

A PWA must be served over **https** to install. Opening `index.html` directly from
your files won't work. Use one of the free hosts below (no credit card needed).

---

## Put it online for free (GitHub Pages — ~5 minutes)

1. Make a free account at github.com.
2. Create a new **public** repository, e.g. `wedding-fund`.
3. Upload all the files in this folder into the repo (drag and drop on the
   "Add file → Upload files" page). Keep them at the top level.
4. Go to **Settings → Pages**. Under "Build and deployment", set
   **Source = Deploy from a branch**, **Branch = main**, **Folder = / (root)**. Save.
5. Wait ~1 minute. Your app is live at
   `https://YOUR-USERNAME.github.io/wedding-fund/`

That URL is your app. Open it on your phone.

(Cloudflare Pages and Netlify work the same way and are also free — connect the repo
or drag the folder in. GitHub Pages is the simplest with no card.)

---

## Install it on your phone

**iPhone (Safari):** open the URL → tap the Share button → **Add to Home Screen**.
**Android (Chrome):** open the URL → menu (⋮) → **Install app** / **Add to Home screen**.

You now have a "Wedding Fund" icon. Your savings, ticked items, and check-ins are
saved on that device.

---

## About the weekly reminder (read this part)

Getting an app to ping you **while it's closed** is the one genuinely hard part, and
the rules differ by phone:

- **Android (Chrome), installed PWA:** the app can fire a weekly notification on its
  own. Turn on "Weekly reminder" in Settings inside the app and allow notifications.
  (Chrome calls this Periodic Background Sync — it's automatic here, best-effort.)
- **iPhone:** Apple does **not** let an installed web app schedule its own background
  notifications. The in-app reminder only shows while the app is open.

### The reliable, free fix that works on every phone
Let your phone handle the nudge and let the app handle the money:

- **iPhone:** open **Reminders** (or Calendar) → new reminder "Log wedding savings" →
  set **Repeat: Weekly** → done. It'll alert you even when locked. Tap it, open the
  app, log the amount.
- **Android:** **Google Calendar** → new event "Log wedding savings" → **Repeat
  weekly** → add a notification. Same idea.

This costs nothing, never misses, and the app still does all the tracking and math.

---

## Want the app to text/push you itself, even on iPhone?
That needs a tiny always-on sender (a free Cloudflare Worker on a weekly cron pushing
a Web Notification, or a free Telegram bot that messages you). It's more setup. Ask
and it can be built — but the recurring-reminder trick above gets you 95% of the value
with zero maintenance.
