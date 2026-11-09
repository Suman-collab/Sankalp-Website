# SANKALP 26-27 | NIST University

Official website for **SANKALP 26-27**, the annual National Level Techno-Management Symposium organized by **NIST University**, Berhampur, Odisha.

---

## Overview

The portal is a high-performance, responsive Single Page Application (SPA) designed with a cosmic stardust and royal amber aesthetic. It features an interactive video preloader, video-backed sections, a client-side hash router, and dynamic data-driven views ready for symposium updates.

---

## Live Features & Architecture

### 1. Interactive Video Preloader & Reloader
- Fullscreen intro video (`Videos/reloader.mp4`) with cyber-telemetry HUD.
- Real-time progress bar tracking video playback and system initialization.
- Sound toggle control (Mute / Unmute audio).
- Skip options: Dedicated "ENTER SANKALP" button, keyboard shortcuts (`Space`, `Enter`, `Esc`), and click-to-enter.
- Built-in watchdog safety timer guaranteeing seamless portal entry under any network condition.

### 2. Hero Arena
- Dynamic video background (`Videos/reloader.mp4`) framed by the ornamental golden mandala border.
- Enlarged official floating transparent Sankalp logo (`Sankalp_Final_Logo_Transparent.png`) with golden halo.
- High-contrast radiant golden glow halo with soft levitation animation.

### 3. Hologram Countdown Panel
- Real-time countdown timer displaying Days, Hours, Minutes, and Seconds calibrated to the symposium launch on **26th November 2026**.
- Official institution banner: **National Institute of Science and Technology** (NIST University).
- Direct quick-action navigation buttons ("Explore Events", "Explore Clubs").

### 4. Client-Side Hash Router
Multi-view Single Page Application navigation without page reloads:
- `#/` &mdash; **Home**: Hero arena, countdown to 26th Nov, festival highlights, about NIST & Sankalp, key stats, and symposium FAQ accordion.
- `#/events` &mdash; **Events**: Dedicated page with high-resolution 2560x1440 celestial theme background (`assets/images/home_theme_bg_hq.jpg`), smooth 7s cosmic drift animation, floating aurora orbs, interactive mouse glow, real-time search, and club category filter.
- `#/club` &mdash; **Clubs**: Showcase of student chapters and technical societies with lead coordinator details and social media links.
- `#/team` &mdash; **Committees**: Interactive tabbed roster covering Office Bearers, Technical, Cultural, Media, Sponsorship, Food, Security, Hospitality, and Finance teams.
- `#/gallery` &mdash; **Gallery**: Festival photo gallery with interactive fullscreen lightbox viewer.

### 6. Dynamic Content & JSON Data Architecture
All dynamic elements are decoupled into structured JSON configurations:
- `data/events.json` &mdash; Event listings, problem statements, venues, dates, and club tags.
- `data/clubs.json` &mdash; Student clubs, descriptions, logos, and coordinator contacts.
- `data/events_template.json` & `data/clubs_template.json` &mdash; Clean reference schemas for adding new symposium entries.
- Built-in graceful empty-state placeholders awaiting new announcements.

---

## Project Structure

```text
Sankalp-Website/
├── index.html                  # Root launcher & redirect to Frontend
├── README.md                   # Repository documentation
├── Admin/                      # Administrative assets & resources
├── Backend/                    # Backend directory
└── Frontend/                   # Main web portal
    ├── index.html              # Core single-page HTML5 application
    ├── style.css               # Cosmic stardust & amber stylesheet
    ├── script.js               # Application logic, router, preloader & data loader
    ├── README.md               # Frontend technical guide
    ├── assets/
    │   └── images/
    │       ├── nist_logo.png                       # Official NIST University crest
    │       ├── decorative_border.png               # Golden mandala ornamental border
    │       └── Sankalp_Final_Logo_Transparent.png  # Official transparent Sankalp emblem
    ├── data/
    │   ├── events.json         # Active events catalog
    │   ├── events_template.json# Reference schema for new events
    │   ├── clubs.json          # Active student clubs catalog
    │   ├── clubs_template.json # Reference schema for new clubs
    │   └── stars.json          # Guest / star performers catalog
    └── Videos/
        ├── reloader.mp4        # Intro preloader video
        ├── newpreloader.mp4    # Alternative preloader video
        └── bg.mp4              # Events page ambient background video
```

---

## How to Run Locally

No build step or external dependencies are required.

1. **Direct Browser**:
   - Double-click `Frontend/index.html` or the root `index.html` in any modern web browser (Chrome, Edge, Firefox, Safari).
2. **VS Code Live Server**:
   - Open the project folder in VS Code and click **"Go Live"** from the bottom bar.
