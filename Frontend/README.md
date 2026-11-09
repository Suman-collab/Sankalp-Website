# SANKALP 26-27 | Frontend Portal

Official client frontend for **SANKALP 26-27**, the National Techno-Management Symposium organized by **NIST University**, Berhampur, Odisha.

---

## Current Architecture & Features

### Core Modules
- **Video Preloader**: Fullscreen intro video (`Videos/reloader.mp4`) with cyber telemetry HUD, audio toggle, skip button, full natural playback, and fail-safe auto-unlock.
- **Hero Arena**: Ambient video background with high-quality celestial theme backdrop (`assets/images/home_theme_bg_hq.jpg`), framed by an ornamental golden border and the official floating transparent Sankalp logo (`Sankalp_Final_Logo_Transparent.png`).
- **Live Countdown**: Precision Days, Hours, Minutes, and Seconds countdown calibrated to the official festival launch on **26th November 2026**.
- **Institution Branding**: Features the official emblem and banner for **National Institute of Science and Technology** (NIST University).
- **Events View (`#/events`)**: Dual-stream continuous background video loop with cyber holographic grid, sweeping laser scanner, floating aurora lights, and interactive mouse-tracking glow. Real-time search and club filtering.
- **Clubs View (`#/club`)**: Directory of student clubs, descriptions, lead coordinators, and social links.
- **Committees View (`#/team`)**: Tabbed organizing committee roster with contact cards.
- **Gallery View (`#/gallery`)**: Festival moments with fullscreen lightbox modal.

---

## Directory Organization

```text
Frontend/
├── index.html                             # Main Single Page Application entry
├── style.css                              # Cosmic stardust theme & responsive styling
├── script.js                              # Router, RAF video loop engine & countdown controller
├── assets/
│   └── images/
│       ├── nist_logo.png                  # NIST University crest
│       ├── decorative_border.png          # Ornamental mandala border
│       ├── Sankalp_Final_Logo_Transparent.png # Official transparent logo
│       ├── home_theme_bg_hq.jpg           # High-quality 2560x1440 celestial theme background
│       ├── home_theme_mandala_hq.jpg      # High-quality 2560x1440 mandala artwork
│       ├── ekatvam_theme_logo_circular.png # Official circular EKATVAM theme emblem
│       ├── ekatvam_theme_logo.jpg         # Full EKATVAM theme seal
│       ├── ekatvam_theme_banner.jpg       # Theme banner illustration
│       ├── ekatvam_mandala_art.jpg        # Flowing mandala & unity artwork
│       ├── ekatvam_cosmic_nebula.jpg      # Celestial stars nebula background
│       └── ekatvam_dimensions_art.jpg     # Science, technology, art & humanity panorama
├── data/
│   ├── events.json                        # Active events catalog
│   ├── events_template.json               # Template schema for adding new events
│   ├── clubs.json                         # Active clubs catalog
│   ├── clubs_template.json                # Template schema for adding new clubs
│   └── stars.json                         # Guest performers catalog
└── Videos/
    ├── reloader.mp4                       # Intro preloader video
    ├── newpreloader.mp4                   # Alternative preloader video
    └── bg.mp4                             # Events background video
```
├── data/
│   ├── events.json                        # Active events catalog
│   ├── events_template.json               # Template schema for adding new events
│   ├── clubs.json                         # Active clubs catalog
│   ├── clubs_template.json                # Template schema for adding new clubs
│   └── stars.json                         # Guest performers catalog
└── Videos/
    ├── reloader.mp4                       # Intro preloader video
    ├── newpreloader.mp4                   # Alternative preloader video
    └── bg.mp4                             # Events background video
```

---

## Content Upload Guide

To add new symposium events or clubs:

### Adding Events (`data/events.json`)
```json
[
  {
    "eventName": "Code Marathon",
    "clubName": "Coding Club",
    "date": "2027-02-15",
    "venue": "NIST Main Auditorium",
    "image": "https://example.com/event.jpg",
    "eventDescription": "Flagship 24-hour hackathon competition."
  }
]
```

### Adding Clubs (`data/clubs.json`)
```json
[
  {
    "name": "Robotics Club",
    "description": "Building autonomous systems and IoT devices.",
    "logo": "assets/images/Sankalp_Final_Logo_Transparent.png",
    "president": { "name": "Lead Coordinator", "contact": "9876543210" },
    "representative": { "name": "Co-Lead", "contact": "9876543211" },
    "socials": {
      "website": "https://example.com",
      "instagram": "https://instagram.com/example",
      "linkedin": "https://linkedin.com/company/example"
    }
  }
]
```

---

## Running the Application

Open `index.html` directly in any web browser or serve via VS Code Live Server.
