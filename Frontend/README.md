# SANKALP 26-27 | Frontend Portal

Official client frontend for **SANKALP 26-27**, the National Techno-Management Symposium organized by **NIST University**, Berhampur, Odisha.

---

## Current Architecture & Features

### Core Modules
- **Video Preloader**: Fullscreen intro video (`Videos/reloader.mp4`) with cyber telemetry HUD, audio toggle, skip button, and fail-safe auto-unlock.
- **Hero Arena**: Ambient video background framed by a golden ornamental mandala border and the official floating transparent Sankalp logo (`Sankalp_Final_Logo_Transparent.png`).
- **Live Countdown**: Precision Days, Hours, Minutes, and Seconds countdown to the festival.
- **Events View (`#/events`)**: Ambient background video (`Videos/bg.mp4`), real-time search, club filtering, and registration triggers.
- **Clubs View (`#/club`)**: Directory of student clubs, descriptions, lead coordinators, and social links.
- **Committees View (`#/team`)**: Tabbed organizing committee roster with contact cards.
- **Gallery View (`#/gallery`)**: Festival moments with fullscreen lightbox modal.
- **Registration Modal**: Dynamic pass generator creating personalized IDs (`NIST-SKP-XXXX`) and toast confirmations.

---

## Directory Organization

```text
Frontend/
├── index.html                      # Main Single Page Application entry
├── style.css                       # Cosmic stardust theme & responsive styling
├── script.js                       # Router, video controller & data engine
├── assets/
│   └── images/
│       ├── nist_logo.png           # NIST University crest
│       ├── decorative_border.png   # Ornamental mandala border
│       └── Sankalp_Final_Logo_Transparent.png # Official transparent logo
├── data/
│   ├── events.json                 # Active events catalog
│   ├── events_template.json        # Template schema for adding new events
│   ├── clubs.json                  # Active clubs catalog
│   ├── clubs_template.json         # Template schema for adding new clubs
│   └── stars.json                  # Guest performers catalog
└── Videos/
    ├── reloader.mp4                # Intro preloader video
    ├── newpreloader.mp4            # Alternative preloader video
    └── bg.mp4                      # Events background video
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
