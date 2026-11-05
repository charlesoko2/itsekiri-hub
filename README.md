# Ẹ̀dẹ Itsekiri • Language & Culture Hub

A static website for preserving, teaching and celebrating the Itsekiri (Iwere) language and heritage.

Pages: Home, Learn, Dictionary, History, Community, Contact.

## Run locally

No build step. Open `index.html`, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Structure

```
index.html, learn.html, dictionary.html,
history.html, community.html, contact.html
css/style.css            all styling
js/layout.js             shared navbar + footer (injected on every page)
js/main.js               mobile menu + demo form handlers
js/dictionary-data.js    dictionary entries (Itsekiri ↔ English)
js/dictionary.js         dictionary search
js/learn.js              starter phrases on the Learn page
images/                  all images (keep folder names lowercase)
```

> File and folder names are case-sensitive on Netlify/Vercel. Keep paths lowercase and match them exactly.

## Notes for the backend developer

Everything is frontend-only right now. These forms show a demo message and send nothing. The handlers are in `js/main.js` (function `demoForm`), which is the one place to connect real endpoints:

| Form | Element id | Needs |
| --- | --- | --- |
| Community registration (home page) | `#registrationForm` | Endpoint to save members |
| Contact | `#contactForm` | Send an email or store the message |
| Member login (community page) | `#loginForm` | Real authentication |

Other open items:
- Dictionary data lives in `js/dictionary-data.js`. It could move to a database/API later so words can be added without editing code.
- Dictionary entries and the History page should be reviewed by a fluent speaker or community elders before being treated as authoritative.
- The six "Business Ad" cards on the home page are placeholders.
- Learn page alphabet, video lessons and daily practice are "coming soon".

## Deploy

Hosted on Netlify. Connect this repo, leave the build command empty and set the publish directory to the repo root.
