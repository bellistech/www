# bellis.tech

Personal website for Stevie Bellis — SRE, platform engineer, network security practitioner.

**Live**: [https://bellis.tech](https://bellis.tech)

## Architecture

Static site with dynamic data feeds. No frameworks, no build step — vanilla HTML/CSS/JS with external service integration.

```
index.html ─── RSS aggregation (rss-daemon) + weather forecast (weather-daemon)
blog.html  ─── JSON-powered blog entries (md2json pipeline)
resume.html ── Interactive resume with audio (Tone.js)
```

### External Services

| Service | Purpose | Repo |
|:---|:---|:---|
| [rss-daemon](https://github.com/bellistech/rss-daemon) | RSS feed aggregation for index page | bellistech |
| [weather-daemon](https://github.com/bellistech/weather-daemon) | Weather forecast widget | bellistech |
| [md2json](https://github.com/bellistech/md2json) | Markdown → structured JSON for blog | bellistech |

### Blog Pipeline

Write posts in markdown → convert with `md2json` → drop JSON into `html/data/` → `blog.js` renders them.

```
post.md → md2json → blog-entry.json → blog.html (JS fetch + render)
```

## Structure

```
html/
├── index.html          ← landing page (RSS + weather + particle canvas)
├── blog.html           ← blog viewer (fetches JSON entries)
├── resume.html         ← interactive resume
├── css/                ← stylesheets
├── js/                 ← page scripts + Tone.js for audio
├── data/               ← blog entry JSON files
├── assets/             ← images, icons
├── security/           ← security.txt
├── robots.txt
├── sitemap.xml
└── site.webmanifest
```

## Development

No build tools required. Open `html/index.html` in a browser, or serve locally:

```bash
cd html && python3 -m http.server 8000
```

## Related

- [unheaded.org](https://unheaded.org) — the Unheaded Protocol project
- [github.com/bellistech](https://github.com/bellistech) — all bellis.tech repos
- [github.com/unheaded](https://github.com/unheaded) — Unheaded org

## License

GPL-3.0-or-later
