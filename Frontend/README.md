# ⚡ SANKALP 26-27 — Frontend

Official frontend portal for SANKALP 26-27 (NIST University Techno-Management Symposium).

## 🚀 Features
- **Video Preloader**: Fullscreen `reloader.mp4` intro video with cyber telemetry HUD and sound toggle.
- **Hero Arena**: Video playback background with rotating radiant Sankalp Chakra and golden mandala border.
- **Events View**: Plays `Videos/bg.mp4` animated background behind event tracks.
- **Client-Side Hash Router**: Seamless navigation across `#/`, `#/events`, `#/club`, `#/team`, and `#/gallery`.
- **Hologram Countdown**: Live Days, Hours, Minutes, Seconds countdown to the symposium.
- **Interactive Registration Modal**: Generates personalized Pass IDs (e.g. `NIST-SKP-XXXX`).

## 📁 Structure
- `index.html` — Main HTML5 Single Page Application
- `style.css` — Deep cosmic stardust & amber stylesheet
- `script.js` — Client router, video preloader controller & data loader
- `Videos/` — Preloader video (`reloader.mp4`) and events background (`bg.mp4`)
- `assets/images/` — NIST crest, Sankalp chakra, emblems
- `data/` — `events.json` and `clubs.json` (with templates)
