const CLUBS_DATA = [
  {
    "id": "rec-club",
    "name": "REC",
    "shortName": "REC",
    "category": "Technical & Clean Energy",
    "catClass": "cat-technical",
    "icon": "fa-solid fa-solar-panel",
    "description": "Renewable Energy Club: Pioneering sustainable clean tech, solar photovoltaics, EV technology, and environmental innovation under NIST University.",
    "logo": "assets/images/rec_club_logo.png",
    "socials": {
      "website": "https://nist.edu/sankalp",
      "instagram": "https://instagram.com/rec_nist",
      "linkedin": "https://www.linkedin.com/school/nistuniversity"
    },
    "eventCount": 2
  },
  {
    "id": "data-science-club",
    "name": "DSC",
    "shortName": "Data Science Club",
    "category": "AI & Data Science",
    "catClass": "cat-technical",
    "icon": "fa-solid fa-brain",
    "description": "Data Science Club: Empowering students in statistical modeling, machine learning, competitive coding, data analytics, and high-intensity gaming showdowns.",
    "logo": "assets/images/Sankalp_Final_Logo_Transparent.png",
    "socials": {
      "website": "https://nist.edu/sankalp",
      "instagram": "https://instagram.com/datascience_nist",
      "linkedin": "https://www.linkedin.com/school/nistuniversity"
    },
    "eventCount": 3
  },
  {
    "id": "ehc-club",
    "name": "EHC",
    "shortName": "EHC",
    "category": "Electronics & IoT",
    "catClass": "cat-technical",
    "icon": "fa-solid fa-microchip",
    "description": "Electronics Hobby Club diving into embedded microcontrollers, PCB fabrication, FPGA architectures, sensor telemetry, and hardware debugging.",
    "logo": "assets/images/ehc_club_logo.jpg",
    "socials": {
      "website": "https://nist.edu/sankalp",
      "instagram": "https://instagram.com/ehc_nist",
      "linkedin": "https://www.linkedin.com/school/nistuniversity"
    },
    "eventCount": 2
  },
  {
    "id": "club-multimedia",
    "name": "CLUB MULTIMEDIA",
    "shortName": "Multimedia",
    "category": "Media & VFX",
    "catClass": "cat-media",
    "icon": "fa-solid fa-camera-retro",
    "description": "NIST's digital creation, game design, and media hub specializing in video editing, 3D modeling, cinematography, and interactive esports.",
    "logo": "assets/images/Sankalp_Final_Logo_Transparent.png",
    "socials": {
      "website": "https://nist.edu/sankalp",
      "instagram": "https://instagram.com/multimedia_nist",
      "linkedin": "https://www.linkedin.com/school/nistuniversity"
    },
    "eventCount": 2
  },
  {
    "id": "cloud-computing-club",
    "name": "CLOUD COMPUTING CLUB",
    "shortName": "Cloud Club",
    "category": "Cloud & Systems",
    "catClass": "cat-technical",
    "icon": "fa-solid fa-cloud",
    "description": "Pioneering distributed infrastructure, serverless deployments, Kubernetes, cybersecurity quests, and campus mobile esports tournaments.",
    "logo": "assets/images/Sankalp_Final_Logo_Transparent.png",
    "socials": {
      "website": "https://nist.edu/sankalp",
      "instagram": "https://instagram.com/cloudops_nist",
      "linkedin": "https://www.linkedin.com/school/nistuniversity"
    },
    "eventCount": 3
  },
  {
    "id": "astronomy-club",
    "name": "ASTRONOMY CLUB",
    "shortName": "Astronomy",
    "category": "Space Tech & Physics",
    "catClass": "cat-technical",
    "icon": "fa-solid fa-shuttle-space",
    "description": "Unraveling celestial mechanics, telescope observation, planetary rovers, astrophysical cosmology, and aerospace project exhibitions.",
    "logo": "assets/images/Sankalp_Final_Logo_Transparent.png",
    "socials": {
      "website": "https://nist.edu/sankalp",
      "instagram": "https://instagram.com/astronomy_nist",
      "linkedin": "https://www.linkedin.com/school/nistuniversity"
    },
    "eventCount": 3
  },
  {
    "id": "nrc-robotics-club",
    "name": "NRC",
    "shortName": "NRC",
    "category": "Robotics & Hardware",
    "catClass": "cat-technical",
    "icon": "fa-solid fa-robot",
    "description": "NIST Robotics Club: Heavyweight steel combat bots, line followers, autonomous rovers, and high-adrenaline arena competitions.",
    "logo": "assets/images/Sankalp_Final_Logo_Transparent.png",
    "socials": {
      "website": "https://nist.edu/sankalp",
      "instagram": "https://instagram.com/nrc_nist",
      "linkedin": "https://www.linkedin.com/school/nistuniversity"
    },
    "eventCount": 3
  },
  {
    "id": "nms-music-club",
    "name": "NMS",
    "shortName": "NMS",
    "category": "Cultural & Music",
    "catClass": "cat-cultural",
    "icon": "fa-solid fa-guitar",
    "description": "NIST Music Society: The melodic heartbeat of NIST, championing vocal virtuosity, acoustic sets, rock bands, and the iconic NIST Idol.",
    "logo": "assets/images/Sankalp_Final_Logo_Transparent.png",
    "socials": {
      "website": "https://nist.edu/sankalp",
      "instagram": "https://instagram.com/nms_nist",
      "linkedin": "https://www.linkedin.com/school/nistuniversity"
    },
    "eventCount": 1
  },
  {
    "id": "ad-dramatics-club",
    "name": "AD",
    "shortName": "AD",
    "category": "Cultural & Theatre",
    "catClass": "cat-cultural",
    "icon": "fa-solid fa-masks-theater",
    "description": "Acting & Dramatics Society: Delivering evocative stage plays, hilarious situational improv, stand-up comedy, and raw campus talent showcases.",
    "logo": "assets/images/Sankalp_Final_Logo_Transparent.png",
    "socials": {
      "website": "https://nist.edu/sankalp",
      "instagram": "https://instagram.com/ad_nist",
      "linkedin": "https://www.linkedin.com/school/nistuniversity"
    },
    "eventCount": 2
  },
  {
    "id": "ncs-club",
    "name": "NCS",
    "shortName": "NCS",
    "category": "Literary & Strategy",
    "catClass": "cat-cultural",
    "icon": "fa-solid fa-puzzle-piece",
    "description": "NIST Creative & Communication Society: Fostering cognitive dexterity, team coordination trials, lateral thinking, and campus treasure hunts.",
    "logo": "assets/images/Sankalp_Final_Logo_Transparent.png",
    "socials": {
      "website": "https://nist.edu/sankalp",
      "instagram": "https://instagram.com/ncs_nist",
      "linkedin": "https://www.linkedin.com/school/nistuniversity"
    },
    "eventCount": 2
  },
  {
    "id": "club-excel",
    "name": "CLUB EXCEL",
    "shortName": "Excel",
    "category": "Software & Coding",
    "catClass": "cat-technical",
    "icon": "fa-solid fa-code",
    "description": "NIST's premier software development society focusing on full-stack architecture, competitive programming, cybersecurity, and hackathons.",
    "logo": "assets/images/club_excel_logo.png",
    "socials": {
      "website": "https://nist.edu/sankalp",
      "instagram": "https://instagram.com/clubexcel_nist",
      "linkedin": "https://www.linkedin.com/school/nistuniversity"
    },
    "eventCount": 2
  },
  {
    "id": "foto-folks",
    "name": "FOTO FOLKS",
    "shortName": "Foto Folks",
    "category": "Photography & Arts",
    "catClass": "cat-media",
    "icon": "fa-solid fa-camera",
    "description": "Capturing immortal frames of NIST campus life, visual perspectives, DSLR light painting, street portraits, and creative photo storytelling.",
    "logo": "assets/images/foto_folks_logo.jpg",
    "socials": {
      "website": "https://nist.edu/sankalp",
      "instagram": "https://instagram.com/fotofolks_nist",
      "linkedin": "https://www.linkedin.com/school/nistuniversity"
    },
    "eventCount": 2
  },
  {
    "id": "cat-club",
    "name": "CAT CLUB",
    "shortName": "CAT Club",
    "category": "Aptitude & Strategy",
    "catClass": "cat-general",
    "icon": "fa-solid fa-chess",
    "description": "Club for Aptitude and Talent: Sharpening quantitative instincts, tactical auctions, competitive esports, and physics engineering challenges.",
    "logo": "assets/images/Sankalp_Final_Logo_Transparent.png",
    "socials": {
      "website": "https://nist.edu/sankalp",
      "instagram": "https://instagram.com/catclub_nist",
      "linkedin": "https://www.linkedin.com/school/nistuniversity"
    },
    "eventCount": 3
  },
  {
    "id": "ncc-club",
    "name": "NCC",
    "shortName": "NCC",
    "category": "Athletics & Discipline",
    "catClass": "cat-sports",
    "icon": "fa-solid fa-shield",
    "description": "National Cadet Corps NIST Unit: Building unshakeable leadership, physical grit, tactical obstacle sprints, and high-power sportsmanship.",
    "logo": "assets/images/Sankalp_Final_Logo_Transparent.png",
    "socials": {
      "website": "https://nist.edu/sankalp",
      "instagram": "https://instagram.com/ncc_nist",
      "linkedin": "https://www.linkedin.com/school/nistuniversity"
    },
    "eventCount": 2
  },
  {
    "id": "nss-club",
    "name": "NSS",
    "shortName": "NSS",
    "category": "Social Action & Games",
    "catClass": "cat-social",
    "icon": "fa-solid fa-hand-holding-heart",
    "description": "National Service Scheme: Dedicated to national solidarity, community engagement, fun sensory games, and fast-paced athletic relays.",
    "logo": "assets/images/Sankalp_Final_Logo_Transparent.png",
    "socials": {
      "website": "https://nist.edu/sankalp",
      "instagram": "https://instagram.com/nss_nist",
      "linkedin": "https://www.linkedin.com/school/nistuniversity"
    },
    "eventCount": 2
  },
  {
    "id": "eureka-club",
    "name": "EUREKA",
    "shortName": "Eureka",
    "category": "Logic & Mind Games",
    "catClass": "cat-general",
    "icon": "fa-solid fa-lightbulb",
    "description": "Eureka Club: Sparking inquisitive minds through multi-layered cipher arenas, lateral thinking gauntlets, and carnival mind games.",
    "logo": "assets/images/eureka_club_logo.jpg",
    "socials": {
      "website": "https://nist.edu/sankalp",
      "instagram": "https://instagram.com/eureka_nist",
      "linkedin": "https://www.linkedin.com/school/nistuniversity"
    },
    "eventCount": 2
  },
  {
    "id": "ndc-dance-club",
    "name": "NDC",
    "shortName": "NDC",
    "category": "Cultural & Dance",
    "catClass": "cat-cultural",
    "icon": "fa-solid fa-person-walking",
    "description": "NIST Dance Club: Igniting Sankalp's center stage with hip-hop battles, classical fusion, contemporary expression, and synchronized dance battles.",
    "logo": "assets/images/Sankalp_Final_Logo_Transparent.png",
    "socials": {
      "website": "https://nist.edu/sankalp",
      "instagram": "https://instagram.com/ndc_nist",
      "linkedin": "https://www.linkedin.com/school/nistuniversity"
    },
    "eventCount": 1
  },
  {
    "id": "club-innova",
    "name": "INNOVA",
    "shortName": "Innova",
    "category": "Innovation & Prototyping",
    "catClass": "cat-technical",
    "icon": "fa-solid fa-gears",
    "description": "Club Innova: Turning creative tech concepts into prototypes, interactive carnival stunts, hackathons, and design sprint solutions.",
    "logo": "assets/images/Sankalp_Final_Logo_Transparent.png",
    "socials": {
      "website": "https://nist.edu/sankalp",
      "instagram": "https://instagram.com/innova_nist",
      "linkedin": "https://www.linkedin.com/school/nistuniversity"
    },
    "eventCount": 2
  },
  {
    "id": "nfcc-fashion-club",
    "name": "NFCC",
    "shortName": "NFCC",
    "category": "Fashion & Lifestyle",
    "catClass": "cat-cultural",
    "icon": "fa-solid fa-shirt",
    "description": "NIST Fashion & Couture Club: Curating futuristic couture, handloom weaves, stage choreography, speed styling, and premier runway walk competitions.",
    "logo": "assets/images/nfcc_club_logo.png",
    "socials": {
      "website": "https://nist.edu/sankalp",
      "instagram": "https://instagram.com/nfcc_nist",
      "linkedin": "https://www.linkedin.com/school/nistuniversity"
    },
    "eventCount": 2
  }
];

const EVENTS_DATA = [
  {
    "id": "navoyuktam",
    "eventName": "Navoyuktam",
    "clubName": "REC",
    "category": "Renewable Prototype Showcase",
    "date": "To Be Announced",
    "venue": "To Be Announced",
    "prizePool": "To Be Announced",
    "image": "",
    "registrationLink": "#",
    "eventDescription": "To Be Announced",
    "rules": [
      "Event schedule and slot timings to be announced.",
      "Detailed problem statement and guidelines to be announced.",
      "Prize pool and certificate details to be announced."
    ]
  },
  {
    "id": "code-arena-2-0",
    "eventName": "Code Arena 2.0",
    "clubName": "DSC",
    "category": "Competitive Programming",
    "date": "To Be Announced",
    "venue": "To Be Announced",
    "prizePool": "To Be Announced",
    "image": "",
    "registrationLink": "#",
    "eventDescription": "To Be Announced",
    "rules": [
      "Event schedule and slot timings to be announced.",
      "Detailed problem statement and guidelines to be announced.",
      "Prize pool and certificate details to be announced."
    ]
  },
  {
    "id": "sampratya-prastuti",
    "eventName": "Sampratya Prastuti",
    "clubName": "EHC",
    "category": "Electronics & Presentation",
    "date": "To Be Announced",
    "venue": "To Be Announced",
    "prizePool": "To Be Announced",
    "image": "",
    "registrationLink": "#",
    "eventDescription": "To Be Announced",
    "rules": [
      "Event schedule and slot timings to be announced.",
      "Detailed problem statement and guidelines to be announced.",
      "Prize pool and certificate details to be announced."
    ]
  },
  {
    "id": "the-52nd-secret",
    "eventName": "The 52nd Secret",
    "clubName": "REC",
    "category": "Eco-Mystery Escape",
    "date": "To Be Announced",
    "venue": "To Be Announced",
    "prizePool": "To Be Announced",
    "image": "",
    "registrationLink": "#",
    "eventDescription": "To Be Announced",
    "rules": [
      "Event schedule and slot timings to be announced.",
      "Detailed problem statement and guidelines to be announced.",
      "Prize pool and certificate details to be announced."
    ]
  },
  {
    "id": "bgmi-tournament",
    "eventName": "BGMI Tournament",
    "clubName": "DSC",
    "category": "Mobile Esports",
    "date": "To Be Announced",
    "venue": "To Be Announced",
    "prizePool": "To Be Announced",
    "image": "",
    "registrationLink": "#",
    "eventDescription": "To Be Announced",
    "rules": [
      "Event schedule and slot timings to be announced.",
      "Detailed problem statement and guidelines to be announced.",
      "Prize pool and certificate details to be announced."
    ]
  },
  {
    "id": "cross-wired",
    "eventName": "Cross - Wired",
    "clubName": "EHC",
    "category": "Circuit Debugging",
    "date": "To Be Announced",
    "venue": "To Be Announced",
    "prizePool": "To Be Announced",
    "image": "",
    "registrationLink": "#",
    "eventDescription": "To Be Announced",
    "rules": [
      "Event schedule and slot timings to be announced.",
      "Detailed problem statement and guidelines to be announced.",
      "Prize pool and certificate details to be announced."
    ]
  },
  {
    "id": "ideaz-odishi",
    "eventName": "Ideaz Odishi",
    "clubName": "DSC",
    "category": "Data Analytics & Innovation",
    "date": "To Be Announced",
    "venue": "To Be Announced",
    "prizePool": "To Be Announced",
    "image": "",
    "registrationLink": "#",
    "eventDescription": "To Be Announced",
    "rules": [
      "Event schedule and slot timings to be announced.",
      "Detailed problem statement and guidelines to be announced.",
      "Prize pool and certificate details to be announced."
    ]
  },
  {
    "id": "gameathon",
    "eventName": "Gameathon",
    "clubName": "CLUB MULTIMEDIA",
    "category": "Media & Game Design",
    "date": "To Be Announced",
    "venue": "To Be Announced",
    "prizePool": "To Be Announced",
    "image": "",
    "registrationLink": "#",
    "eventDescription": "To Be Announced",
    "rules": [
      "Event schedule and slot timings to be announced.",
      "Detailed problem statement and guidelines to be announced.",
      "Prize pool and certificate details to be announced."
    ]
  },
  {
    "id": "pc-multiplayer-game",
    "eventName": "PC Multiplayer Game",
    "clubName": "CLUB MULTIMEDIA",
    "category": "Esports & LAN",
    "date": "To Be Announced",
    "venue": "To Be Announced",
    "prizePool": "To Be Announced",
    "image": "",
    "registrationLink": "#",
    "eventDescription": "To Be Announced",
    "rules": [
      "Event schedule and slot timings to be announced.",
      "Detailed problem statement and guidelines to be announced.",
      "Prize pool and certificate details to be announced."
    ]
  },
  {
    "id": "free-fire-tournament",
    "eventName": "Free Fire Tournament",
    "clubName": "CLOUD COMPUTING CLUB",
    "category": "Mobile Esports",
    "date": "To Be Announced",
    "venue": "To Be Announced",
    "prizePool": "To Be Announced",
    "image": "",
    "registrationLink": "#",
    "eventDescription": "To Be Announced",
    "rules": [
      "Event schedule and slot timings to be announced.",
      "Detailed problem statement and guidelines to be announced.",
      "Prize pool and certificate details to be announced."
    ]
  },
  {
    "id": "cloud-sprint",
    "eventName": "Cloud Sprint",
    "clubName": "CLOUD COMPUTING CLUB",
    "category": "Cloud & Infrastructure",
    "date": "To Be Announced",
    "venue": "To Be Announced",
    "prizePool": "To Be Announced",
    "image": "",
    "registrationLink": "#",
    "eventDescription": "To Be Announced",
    "rules": [
      "Event schedule and slot timings to be announced.",
      "Detailed problem statement and guidelines to be announced.",
      "Prize pool and certificate details to be announced."
    ]
  },
  {
    "id": "code-heist",
    "eventName": "Code Heist",
    "clubName": "CLOUD COMPUTING CLUB",
    "category": "CTF & Cryptography",
    "date": "To Be Announced",
    "venue": "To Be Announced",
    "prizePool": "To Be Announced",
    "image": "",
    "registrationLink": "#",
    "eventDescription": "To Be Announced",
    "rules": [
      "Event schedule and slot timings to be announced.",
      "Detailed problem statement and guidelines to be announced.",
      "Prize pool and certificate details to be announced."
    ]
  },
  {
    "id": "rover-rescue-mission",
    "eventName": "Rover Rescue Mission",
    "clubName": "ASTRONOMY CLUB",
    "category": "Space Robotics",
    "date": "To Be Announced",
    "venue": "To Be Announced",
    "prizePool": "To Be Announced",
    "image": "",
    "registrationLink": "#",
    "eventDescription": "To Be Announced",
    "rules": [
      "Event schedule and slot timings to be announced.",
      "Detailed problem statement and guidelines to be announced.",
      "Prize pool and certificate details to be announced."
    ]
  },
  {
    "id": "black-hole-escape",
    "eventName": "Black Hole Escape",
    "clubName": "ASTRONOMY CLUB",
    "category": "Cosmology Quiz & Logic",
    "date": "To Be Announced",
    "venue": "To Be Announced",
    "prizePool": "To Be Announced",
    "image": "",
    "registrationLink": "#",
    "eventDescription": "To Be Announced",
    "rules": [
      "Event schedule and slot timings to be announced.",
      "Detailed problem statement and guidelines to be announced.",
      "Prize pool and certificate details to be announced."
    ]
  },
  {
    "id": "project-display-astronomy",
    "eventName": "Project Display",
    "clubName": "ASTRONOMY CLUB",
    "category": "Space Exhibition",
    "date": "To Be Announced",
    "venue": "To Be Announced",
    "prizePool": "To Be Announced",
    "image": "",
    "registrationLink": "#",
    "eventDescription": "To Be Announced",
    "rules": [
      "Event schedule and slot timings to be announced.",
      "Detailed problem statement and guidelines to be announced.",
      "Prize pool and certificate details to be announced."
    ]
  },
  {
    "id": "robowars-ragebot",
    "eventName": "Robowars : Ragebot",
    "clubName": "NRC",
    "category": "Combat Robotics",
    "date": "To Be Announced",
    "venue": "To Be Announced",
    "prizePool": "To Be Announced",
    "image": "",
    "registrationLink": "#",
    "eventDescription": "To Be Announced",
    "rules": [
      "Event schedule and slot timings to be announced.",
      "Detailed problem statement and guidelines to be announced.",
      "Prize pool and certificate details to be announced."
    ]
  },
  {
    "id": "ball-collection-orb-heist",
    "eventName": "Ball Collection : Orb Heist",
    "clubName": "NRC",
    "category": "Autonomous & Manual Robotics",
    "date": "To Be Announced",
    "venue": "To Be Announced",
    "prizePool": "To Be Announced",
    "image": "",
    "registrationLink": "#",
    "eventDescription": "To Be Announced",
    "rules": [
      "Event schedule and slot timings to be announced.",
      "Detailed problem statement and guidelines to be announced.",
      "Prize pool and certificate details to be announced."
    ]
  },
  {
    "id": "robotio",
    "eventName": "Robotio",
    "clubName": "NRC",
    "category": "Line Following & Autonomous",
    "date": "To Be Announced",
    "venue": "To Be Announced",
    "prizePool": "To Be Announced",
    "image": "",
    "registrationLink": "#",
    "eventDescription": "To Be Announced",
    "rules": [
      "Event schedule and slot timings to be announced.",
      "Detailed problem statement and guidelines to be announced.",
      "Prize pool and certificate details to be announced."
    ]
  },
  {
    "id": "nist-idol",
    "eventName": "NIST Idol",
    "clubName": "NMS",
    "category": "Vocals & Music",
    "date": "To Be Announced",
    "venue": "To Be Announced",
    "prizePool": "To Be Announced",
    "image": "",
    "registrationLink": "#",
    "eventDescription": "To Be Announced",
    "rules": [
      "Event schedule and slot timings to be announced.",
      "Detailed problem statement and guidelines to be announced.",
      "Prize pool and certificate details to be announced."
    ]
  },
  {
    "id": "confusion-ka-tadka",
    "eventName": "Confusion Ka Tadka",
    "clubName": "AD",
    "category": "Comedy & Improv",
    "date": "To Be Announced",
    "venue": "To Be Announced",
    "prizePool": "To Be Announced",
    "image": "",
    "registrationLink": "#",
    "eventDescription": "To Be Announced",
    "rules": [
      "Event schedule and slot timings to be announced.",
      "Detailed problem statement and guidelines to be announced.",
      "Prize pool and certificate details to be announced."
    ]
  },
  {
    "id": "nist-got-latent",
    "eventName": "NIST Got Latent",
    "clubName": "AD",
    "category": "Talent & Standup",
    "date": "To Be Announced",
    "venue": "To Be Announced",
    "prizePool": "To Be Announced",
    "image": "",
    "registrationLink": "#",
    "eventDescription": "To Be Announced",
    "rules": [
      "Event schedule and slot timings to be announced.",
      "Detailed problem statement and guidelines to be announced.",
      "Prize pool and certificate details to be announced."
    ]
  },
  {
    "id": "minds-in-motion",
    "eventName": "Minds in Motion",
    "clubName": "NCS",
    "category": "Aptitude & Logic",
    "date": "To Be Announced",
    "venue": "To Be Announced",
    "prizePool": "To Be Announced",
    "image": "",
    "registrationLink": "#",
    "eventDescription": "To Be Announced",
    "rules": [
      "Event schedule and slot timings to be announced.",
      "Detailed problem statement and guidelines to be announced.",
      "Prize pool and certificate details to be announced."
    ]
  },
  {
    "id": "the-unity-quest",
    "eventName": "The Unity Quest",
    "clubName": "NCS",
    "category": "Campus Treasure Hunt",
    "date": "To Be Announced",
    "venue": "To Be Announced",
    "prizePool": "To Be Announced",
    "image": "",
    "registrationLink": "#",
    "eventDescription": "To Be Announced",
    "rules": [
      "Event schedule and slot timings to be announced.",
      "Detailed problem statement and guidelines to be announced.",
      "Prize pool and certificate details to be announced."
    ]
  },
  {
    "id": "code-crusade-5-0",
    "eventName": "Code Crusade 5.0",
    "clubName": "CLUB EXCEL",
    "category": "Hackathon & DSA",
    "date": "To Be Announced",
    "venue": "To Be Announced",
    "prizePool": "To Be Announced",
    "image": "",
    "registrationLink": "#",
    "eventDescription": "To Be Announced",
    "rules": [
      "Event schedule and slot timings to be announced.",
      "Detailed problem statement and guidelines to be announced.",
      "Prize pool and certificate details to be announced."
    ]
  },
  {
    "id": "dark-trace",
    "eventName": "Dark trace",
    "clubName": "CLUB EXCEL",
    "category": "Cyber Security & Forensics",
    "date": "To Be Announced",
    "venue": "To Be Announced",
    "prizePool": "To Be Announced",
    "image": "",
    "registrationLink": "#",
    "eventDescription": "To Be Announced",
    "rules": [
      "Event schedule and slot timings to be announced.",
      "Detailed problem statement and guidelines to be announced.",
      "Prize pool and certificate details to be announced."
    ]
  },
  {
    "id": "photo-pocket",
    "eventName": "Photo Pocket",
    "clubName": "FOTO FOLKS",
    "category": "Mobile Photography",
    "date": "To Be Announced",
    "venue": "To Be Announced",
    "prizePool": "To Be Announced",
    "image": "",
    "registrationLink": "#",
    "eventDescription": "To Be Announced",
    "rules": [
      "Event schedule and slot timings to be announced.",
      "Detailed problem statement and guidelines to be announced.",
      "Prize pool and certificate details to be announced."
    ]
  },
  {
    "id": "frame-wheel",
    "eventName": "Frame Wheel",
    "clubName": "FOTO FOLKS",
    "category": "DSLR Photography",
    "date": "To Be Announced",
    "venue": "To Be Announced",
    "prizePool": "To Be Announced",
    "image": "",
    "registrationLink": "#",
    "eventDescription": "To Be Announced",
    "rules": [
      "Event schedule and slot timings to be announced.",
      "Detailed problem statement and guidelines to be announced.",
      "Prize pool and certificate details to be announced."
    ]
  },
  {
    "id": "bid-the-bidder",
    "eventName": "Bid The Bidder",
    "clubName": "CAT CLUB",
    "category": "Auction & Strategy",
    "date": "To Be Announced",
    "venue": "To Be Announced",
    "prizePool": "To Be Announced",
    "image": "",
    "registrationLink": "#",
    "eventDescription": "To Be Announced",
    "rules": [
      "Event schedule and slot timings to be announced.",
      "Detailed problem statement and guidelines to be announced.",
      "Prize pool and certificate details to be announced."
    ]
  },
  {
    "id": "coc-1v1-showdown",
    "eventName": "COC 1V1 Showdown",
    "clubName": "CAT CLUB",
    "category": "Clash of Clans Esports",
    "date": "To Be Announced",
    "venue": "To Be Announced",
    "prizePool": "To Be Announced",
    "image": "",
    "registrationLink": "#",
    "eventDescription": "To Be Announced",
    "rules": [
      "Event schedule and slot timings to be announced.",
      "Detailed problem statement and guidelines to be announced.",
      "Prize pool and certificate details to be announced."
    ]
  },
  {
    "id": "paper-tower-challange",
    "eventName": "Paper Tower Challange",
    "clubName": "CAT CLUB",
    "category": "Structural Engineering",
    "date": "To Be Announced",
    "venue": "To Be Announced",
    "prizePool": "To Be Announced",
    "image": "",
    "registrationLink": "#",
    "eventDescription": "To Be Announced",
    "rules": [
      "Event schedule and slot timings to be announced.",
      "Detailed problem statement and guidelines to be announced.",
      "Prize pool and certificate details to be announced."
    ]
  },
  {
    "id": "tug-of-war",
    "eventName": "Tug Of War",
    "clubName": "NCC",
    "category": "Strength & Athletics",
    "date": "To Be Announced",
    "venue": "To Be Announced",
    "prizePool": "To Be Announced",
    "image": "",
    "registrationLink": "#",
    "eventDescription": "To Be Announced",
    "rules": [
      "Event schedule and slot timings to be announced.",
      "Detailed problem statement and guidelines to be announced.",
      "Prize pool and certificate details to be announced."
    ]
  },
  {
    "id": "out-play",
    "eventName": "OUT PLAY",
    "clubName": "NCC",
    "category": "Tactical Obstacle Sprint",
    "date": "To Be Announced",
    "venue": "To Be Announced",
    "prizePool": "To Be Announced",
    "image": "",
    "registrationLink": "#",
    "eventDescription": "To Be Announced",
    "rules": [
      "Event schedule and slot timings to be announced.",
      "Detailed problem statement and guidelines to be announced.",
      "Prize pool and certificate details to be announced."
    ]
  },
  {
    "id": "mystery-hand-challange",
    "eventName": "Mystery Hand Challange",
    "clubName": "NSS",
    "category": "Sensory & Coordination",
    "date": "To Be Announced",
    "venue": "To Be Announced",
    "prizePool": "To Be Announced",
    "image": "",
    "registrationLink": "#",
    "eventDescription": "To Be Announced",
    "rules": [
      "Event schedule and slot timings to be announced.",
      "Detailed problem statement and guidelines to be announced.",
      "Prize pool and certificate details to be announced."
    ]
  },
  {
    "id": "human-tic-tac-toe",
    "eventName": "Human Tic-Tac-Toe",
    "clubName": "NSS",
    "category": "Speed & Tactical Relay",
    "date": "To Be Announced",
    "venue": "To Be Announced",
    "prizePool": "To Be Announced",
    "image": "",
    "registrationLink": "#",
    "eventDescription": "To Be Announced",
    "rules": [
      "Event schedule and slot timings to be announced.",
      "Detailed problem statement and guidelines to be announced.",
      "Prize pool and certificate details to be announced."
    ]
  },
  {
    "id": "ultimate-challange-arena",
    "eventName": "Ultimate challange Arena",
    "clubName": "EUREKA",
    "category": "Logic & Mind Gauntlet",
    "date": "To Be Announced",
    "venue": "To Be Announced",
    "prizePool": "To Be Announced",
    "image": "",
    "registrationLink": "#",
    "eventDescription": "To Be Announced",
    "rules": [
      "Event schedule and slot timings to be announced.",
      "Detailed problem statement and guidelines to be announced.",
      "Prize pool and certificate details to be announced."
    ]
  },
  {
    "id": "thrill-topia",
    "eventName": "Thrill-Topia",
    "clubName": "EUREKA",
    "category": "Adventure & Mind Games",
    "date": "To Be Announced",
    "venue": "To Be Announced",
    "prizePool": "To Be Announced",
    "image": "",
    "registrationLink": "#",
    "eventDescription": "To Be Announced",
    "rules": [
      "Event schedule and slot timings to be announced.",
      "Detailed problem statement and guidelines to be announced.",
      "Prize pool and certificate details to be announced."
    ]
  },
  {
    "id": "beat-blitz",
    "eventName": "Beat Blitz",
    "clubName": "NDC",
    "category": "Dance Battles",
    "date": "To Be Announced",
    "venue": "To Be Announced",
    "prizePool": "To Be Announced",
    "image": "",
    "registrationLink": "#",
    "eventDescription": "To Be Announced",
    "rules": [
      "Event schedule and slot timings to be announced.",
      "Detailed problem statement and guidelines to be announced.",
      "Prize pool and certificate details to be announced."
    ]
  },
  {
    "id": "the-fun-fiesta",
    "eventName": "The Fun Fiesta",
    "clubName": "INNOVA",
    "category": "Tech Carnival & Games",
    "date": "To Be Announced",
    "venue": "To Be Announced",
    "prizePool": "To Be Announced",
    "image": "",
    "registrationLink": "#",
    "eventDescription": "To Be Announced",
    "rules": [
      "Event schedule and slot timings to be announced.",
      "Detailed problem statement and guidelines to be announced.",
      "Prize pool and certificate details to be announced."
    ]
  },
  {
    "id": "the-mind-storm",
    "eventName": "The Mind Storm",
    "clubName": "INNOVA",
    "category": "Brainstorming & Hackathon",
    "date": "To Be Announced",
    "venue": "To Be Announced",
    "prizePool": "To Be Announced",
    "image": "",
    "registrationLink": "#",
    "eventDescription": "To Be Announced",
    "rules": [
      "Event schedule and slot timings to be announced.",
      "Detailed problem statement and guidelines to be announced.",
      "Prize pool and certificate details to be announced."
    ]
  },
  {
    "id": "fashion-show",
    "eventName": "Fashion Show",
    "clubName": "NFCC",
    "category": "Runway & Couture",
    "date": "To Be Announced",
    "venue": "To Be Announced",
    "prizePool": "To Be Announced",
    "image": "",
    "registrationLink": "#",
    "eventDescription": "To Be Announced",
    "rules": [
      "Event schedule and slot timings to be announced.",
      "Detailed problem statement and guidelines to be announced.",
      "Prize pool and certificate details to be announced."
    ]
  },
  {
    "id": "colour-chase",
    "eventName": "Colour Chase",
    "clubName": "NFCC",
    "category": "Live Creative Sprint",
    "date": "To Be Announced",
    "venue": "To Be Announced",
    "prizePool": "To Be Announced",
    "image": "",
    "registrationLink": "#",
    "eventDescription": "To Be Announced",
    "rules": [
      "Event schedule and slot timings to be announced.",
      "Detailed problem statement and guidelines to be announced.",
      "Prize pool and certificate details to be announced."
    ]
  }
];

const STARS_DATA = [];

/* ==========================================================================
   SANKALP 26-27 - SCRIPT ENGINE (READY FOR NEW DETAILS)
   NIST University Techno-Management Symposium
   Features: Video Preloader, Client Hash Router, Dynamic Data Loader
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // Empty data arrays ready for new uploads:
  const GALLERY_PHOTOS = [];

  const TEAM_COMMITTEES = {
    "Office Bearers": [
        {
            "name": "Ashmitra Arpit Samantaray",
            "role": "President",
            "avatar": "assets/images/team/office_bearers/ashmitra.jpg",
            "phone": ""
        },
        {
            "name": "Sangam Kumar Verma",
            "role": "Secretary",
            "avatar": "assets/images/team/office_bearers/sangam.jpg",
            "phone": ""
        },
        {
            "name": "Rajkumari Padhi",
            "role": "Treasurer",
            "avatar": "assets/images/team/office_bearers/rajkumari.jpg",
            "phone": ""
        }
    ],
    "Event": [
        {
            "name": "Alok Kumar Tripathy",
            "role": "Event Head",
            "avatar": "assets/images/team/event/alok_tripathy.jpg"
        },
        {
            "name": "Jay Singh",
            "role": "Event Manager",
            "avatar": "assets/images/team/event/jay_singh.jpg"
        },
        {
            "name": "Nitin Senapati",
            "role": "Event Manager",
            "avatar": "assets/images/team/event/nitin_senapati.jpg"
        },
        {
            "name": "Nabaneet Mishra",
            "role": "Event Manager",
            "avatar": "assets/images/team/event/nabaneet_mishra.jpg"
        },
        {
            "name": "Rosan Kumar Singh",
            "role": "Event Coordinator",
            "avatar": "assets/images/team/event/rosan.jpg"
        },
        {
            "name": "K. Saniya Reddy",
            "role": "Event Coordinator",
            "avatar": "assets/images/team/event/saniya.jpg"
        },
        {
            "name": "Akanksha Rani",
            "role": "Event Coordinator",
            "avatar": "assets/images/team/event/akanksha.jpg"
        },
        {
            "name": "Rohit Prasad Padhy",
            "role": "Event Coordinator",
            "avatar": "assets/images/team/event/rohit.jpg"
        },
        {
            "name": "Arunima Padhy",
            "role": "Event Coordinator",
            "avatar": "assets/images/team/event/arunima.jpg"
        },
        {
            "name": "Aayushi Das",
            "role": "Event Coordinator",
            "avatar": "assets/images/team/event/aayushi_das.jpg"
        },
        {
            "name": "Neetin Kumar Patro",
            "role": "Event Coordinator",
            "avatar": "assets/images/team/event/neetin.jpg"
        },
        {
            "name": "Pratikhya Gopal Prusty",
            "role": "Event Coordinator",
            "avatar": "assets/images/team/event/gopal.jpg"
        },
        {
            "name": "Swayamsreeya Dash",
            "role": "Event Coordinator",
            "avatar": "assets/images/team/event/swayam_sreeya.jpg"
        },
        {
            "name": "V. Vamsi Swayambhu",
            "role": "Event Coordinator",
            "avatar": "assets/images/team/event/vamsi_swayambhu.jpg"
        },
        {
            "name": "V. Durgeshwar Rao",
            "role": "Event Coordinator",
            "avatar": "assets/images/team/event/vdr.jpg"
        },
        {
            "name": "Sneha Jha",
            "role": "Event Coordinator",
            "avatar": "assets/images/team/event/sneha_jha.jpg"
        }
    ],
    "Technical": [
        {
            "name": "Suman Panda",
            "role": "Technical Lead",
            "avatar": "assets/images/team/technical/suman_panda.jpg"
        },
        {
            "name": "Rudra Narayan Sahu",
            "role": "Technical Team",
            "avatar": "assets/images/team/technical/rudra_sahu.jpg"
        },
        {
            "name": "Subham Sahu",
            "role": "Technical Team",
            "avatar": "assets/images/team/technical/subham_sahu.jpg"
        },
        {
            "name": "Satyam Kumar Singh",
            "role": "Technical Team",
            "avatar": "assets/images/team/technical/satyam_singh.jpg"
        },
        {
            "name": "Bharat Kumar Sahu",
            "role": "Technical Team",
            "avatar": "assets/images/team/technical/bharat_sahu.jpg"
        },
        {
            "name": "Madhumita Mahapatra",
            "role": "Technical Team",
            "avatar": "assets/images/team/technical/madhumita.jpg"
        }
    ],
    "Design": [
        {
            "name": "Suryakant Mahanta",
            "role": "Design Lead",
            "avatar": "assets/images/team/design/suryakant.jpg"
        },
        {
            "name": "Ashraya Ranjan",
            "role": "Design Team",
            "avatar": "assets/images/team/design/ashraya.jpg"
        },
        {
            "name": "Bikash Bisoyi",
            "role": "Design Team",
            "avatar": "assets/images/team/design/bikash.jpg"
        },
        {
            "name": "Subhadarshi Hotta",
            "role": "Design Team",
            "avatar": "assets/images/team/design/subhadarshi.jpg"
        },
        {
            "name": "Pragnya Paramita Nayak",
            "role": "Design Team",
            "avatar": "assets/images/team/design/pragnya.jpg"
        }
    ],
    "Cultural": [
        {
            "name": "Prekshit Choudhary",
            "role": "Cultural Lead",
            "avatar": "assets/images/team/cultural/prekshit.jpg"
        },
        {
            "name": "Anushka Patro",
            "role": "Cultural Team",
            "avatar": "assets/images/team/cultural/anushka.jpg"
        },
        {
            "name": "Subham Mahapatra",
            "role": "Cultural Team",
            "avatar": "assets/images/team/cultural/subham_mahapatra.jpg"
        },
        {
            "name": "Sonali Panigrahi",
            "role": "Cultural Team",
            "avatar": "assets/images/team/cultural/sonali.jpg"
        },
        {
            "name": "M Pragati",
            "role": "Cultural Team",
            "avatar": "assets/images/team/cultural/pragati.jpg"
        },
        {
            "name": "Jaswinder Singh",
            "role": "Cultural Team",
            "avatar": "assets/images/team/cultural/jaswinder.jpg"
        },
        {
            "name": "Om Prakash Padhy",
            "role": "Cultural Team",
            "avatar": "assets/images/team/cultural/om_prakash.jpg"
        },
        {
            "name": "Yashika Panda",
            "role": "Cultural Team",
            "avatar": "assets/images/team/cultural/yashika.jpg"
        }
    ],
    "Media": [
        {
            "name": "Giridharee Padhy",
            "role": "Media Lead",
            "avatar": "assets/images/team/media/giridharee.jpg"
        },
        {
            "name": "Mohit Kumar Sahu",
            "role": "Media Team",
            "avatar": "assets/images/team/media/mohit.jpg"
        },
        {
            "name": "Pratyush Nayak",
            "role": "Media Team",
            "avatar": "assets/images/team/media/pratyush.jpg"
        },
        {
            "name": "PD Megha",
            "role": "Media Team",
            "avatar": "assets/images/team/media/pd_megha.jpg"
        },
        {
            "name": "Abhipsha Das",
            "role": "Media Team",
            "avatar": "assets/images/team/media/abhipsha.jpg"
        },
        {
            "name": "Badal Kumar Dash",
            "role": "Media Team",
            "avatar": "assets/images/team/media/badal.jpg"
        },
        {
            "name": "Meghna Panda",
            "role": "Media Team",
            "avatar": "assets/images/team/media/meghna.jpg"
        }
    ],
    "Sponsorship": [
        {
            "name": "Sheik Abdul Hammid",
            "role": "Sponsorship Lead",
            "avatar": "assets/images/team/sponsorship/hammid.jpg"
        },
        {
            "name": "Vamsi Krishna",
            "role": "Sponsorship Team",
            "avatar": "assets/images/team/sponsorship/vamsi.jpg"
        },
        {
            "name": "Subhamjyoti Padhy",
            "role": "Sponsorship Team",
            "avatar": "assets/images/team/sponsorship/subhamjyoti.jpg"
        },
        {
            "name": "Krushna Chandra Sahu",
            "role": "Sponsorship Team",
            "avatar": "assets/images/team/sponsorship/krushna.jpg"
        },
        {
            "name": "Anirudha Bisoyi",
            "role": "Sponsorship Team",
            "avatar": "assets/images/team/sponsorship/anirudha.jpg"
        },
        {
            "name": "Subhranshu Mishra",
            "role": "Sponsorship Team",
            "avatar": "assets/images/team/sponsorship/subhranshu.jpg"
        },
        {
            "name": "D. Amit Patro",
            "role": "Sponsorship Team",
            "avatar": "assets/images/team/sponsorship/d_amit.jpg"
        },
        {
            "name": "Aurodhan Subuddhi",
            "role": "Sponsorship Team",
            "avatar": "assets/images/team/sponsorship/aurodhan.jpg"
        }
    ],
    "Food": [
        {
            "name": "Preetam Das",
            "role": "Food Lead",
            "avatar": "assets/images/team/food/preetam.jpg"
        },
        {
            "name": "Soumya Swarup Patro",
            "role": "Food Team",
            "avatar": "assets/images/team/food/soumya.jpg"
        },
        {
            "name": "Ajit Kumar Sahu",
            "role": "Food Team",
            "avatar": "assets/images/team/food/ajit.jpg"
        },
        {
            "name": "Kameswar Patra",
            "role": "Food Team",
            "avatar": "assets/images/team/food/kameswar.jpg"
        },
        {
            "name": "Akash Kumar Behera",
            "role": "Food Team",
            "avatar": "assets/images/team/food/akash.jpg"
        },
        {
            "name": "Loknath Tripathy",
            "role": "Food Team",
            "avatar": "assets/images/team/food/loknath.jpg"
        }
    ],
    "Hospitality": [
        {
            "name": "Ayush Kumar",
            "role": "Hospitality Lead",
            "avatar": "assets/images/team/hospitality/ayush.jpg"
        },
        {
            "name": "S. Tejaswini Reddy",
            "role": "Hospitality Team",
            "avatar": "assets/images/team/hospitality/tejaswini.jpg"
        },
        {
            "name": "Aadyasha Panda",
            "role": "Hospitality Team",
            "avatar": "assets/images/team/hospitality/aadyasha.jpg"
        },
        {
            "name": "G. Balaji",
            "role": "Hospitality Team",
            "avatar": "assets/images/team/hospitality/balaji.jpg"
        },
        {
            "name": "Sourav Mahanti",
            "role": "Hospitality Team",
            "avatar": "assets/images/team/hospitality/sourav.jpg"
        },
        {
            "name": "Arpita Mohanty",
            "role": "Hospitality Team",
            "avatar": ""
        },
        {
            "name": "Kritimayee Sahu",
            "role": "Hospitality Team",
            "avatar": ""
        },
        {
            "name": "Laxmi Narayan Pradhan",
            "role": "Hospitality Team",
            "avatar": ""
        },
        {
            "name": "Ipsita Biswal",
            "role": "Hospitality Team",
            "avatar": "assets/images/team/hospitality/ipsita.jpg"
        },
        {
            "name": "Soumya Ranjan Dash",
            "role": "Hospitality Team",
            "avatar": "assets/images/team/hospitality/soumya_dash.jpg"
        },
        {
            "name": "Deenali Dibya Darshani",
            "role": "Hospitality Team",
            "avatar": "assets/images/team/hospitality/deenali.jpg"
        }
    ],
    "Finance": [
        {
            "name": "V. Tejaswi",
            "role": "Finance Lead",
            "avatar": "assets/images/team/finance/tejaswi.jpg"
        },
        {
            "name": "Debabrata Sahu",
            "role": "Finance Team",
            "avatar": "assets/images/team/finance/debabrata.jpg"
        },
        {
            "name": "Aayushi Nayak",
            "role": "Finance Team",
            "avatar": "assets/images/team/finance/aayushi_nayak.jpg"
        },
        {
            "name": "Subhashree Padhy",
            "role": "Finance Team",
            "avatar": "assets/images/team/finance/subhashree.jpg"
        },
        {
            "name": "Priyanshu Sekhar Sahoo",
            "role": "Finance Team",
            "avatar": ""
        },
        {
            "name": "Gopal Kr Mahapatra",
            "role": "Finance Team",
            "avatar": "assets/images/team/finance/gopal_mahapatra.jpg"
        },
        {
            "name": "Sandeep Biswal",
            "role": "Finance Team",
            "avatar": "assets/images/team/finance/sandeep.jpg"
        }
    ],
    "Security": [
        {
            "name": "Alla Himanshu",
            "role": "Security Head",
            "avatar": "assets/images/team/security/himansu.jpg"
        },
        {
            "name": "S Praveen Kumar",
            "role": "Security Team",
            "avatar": "assets/images/team/security/praveen_kumar.jpg"
        },
        {
            "name": "Manvi",
            "role": "Security Team",
            "avatar": "assets/images/team/security/manvi.jpg"
        },
        {
            "name": "Sagar Kumar Swain",
            "role": "Security Team",
            "avatar": "assets/images/team/security/sagar_swain.jpg"
        },
        {
            "name": "Sahil Kumar Pradhan",
            "role": "Security Team",
            "avatar": "assets/images/team/security/sahil_pradhan.jpg"
        },
        {
            "name": "Saswat Swayamprabha Sahu",
            "role": "Security Team",
            "avatar": "assets/images/team/security/saswat.jpg"
        },
        {
            "name": "Subham Panda",
            "role": "Security Team",
            "avatar": "assets/images/team/security/subham_panda.jpg"
        },
        {
            "name": "Nishu Rani",
            "role": "Security Team",
            "avatar": "assets/images/team/security/nishu_rani.jpg"
        },
        {
            "name": "Folly Boris Daniel HOUNOUVI",
            "role": "Security Team",
            "avatar": "assets/images/team/security/hounouvi.jpg"
        },
        {
            "name": "Gnouyi Yves Fabrice BADOMA",
            "role": "Security Team",
            "avatar": "assets/images/team/security/badoma.jpg"
        },
        {
            "name": "Abhipsa Kar",
            "role": "Security Team",
            "avatar": "assets/images/team/security/abhipsa_kar.jpg"
        },
        {
            "name": "Aradhana Satapathy",
            "role": "Security Team",
            "avatar": "assets/images/team/security/aradhana.jpg"
        },
        {
            "name": "Om Prasad Mala",
            "role": "Security Team",
            "avatar": ""
        },
        {
            "name": "Subhasis Patro",
            "role": "Security Team",
            "avatar": "assets/images/team/security/subhasis_patro.jpg"
        },
        {
            "name": "Ritesh Parida",
            "role": "Security Team",
            "avatar": "assets/images/team/security/ritesh_parida.jpg"
        },
        {
            "name": "Aditya Anjan Sahu",
            "role": "Security Team",
            "avatar": "assets/images/team/security/aditya_sahu.jpg"
        }
    ]
};

  // ==========================================================================
  // 1. PRELOADER & RELOADER VIDEO CONTROLLER
  // ==========================================================================
  const preloader = document.getElementById('preloader');
  const video = document.getElementById('reloader-video');
  const progressFill = document.getElementById('progress-fill');
  const loaderPercent = document.getElementById('loader-percent');
  const loaderTaskText = document.getElementById('loader-task-text');
  const skipBtn = document.getElementById('skip-intro-btn');
  const toggleAudioBtn = document.getElementById('toggle-audio-btn');
  const audioIcon = document.getElementById('audio-icon');
  const audioText = document.getElementById('audio-text');

  let preloaderClosed = false;
  let simulatedProgress = 0;
  let simulatedTimer = null;

  const telemetryTasks = [
    "INITIALIZING SANKALP KERNEL...",
    "STREAMING RELOADER VIDEO FEED...",
    "CALIBRATING SANKALP CHAKRA ENERGETICS...",
    "PREPARING SYMPOSIUM PORTAL...",
    "CONFIGURING STARDUST COSMIC FIELD...",
    "SANKALP 2K26 READY!"
  ];

  function updateHUDProgress(percent) {
    const clamped = Math.min(Math.round(percent), 100);
    if (progressFill) progressFill.style.width = clamped + '%';
    if (loaderPercent) loaderPercent.textContent = clamped + '%';

    if (loaderTaskText) {
      const idx = Math.min(
        Math.floor((clamped / 100) * (telemetryTasks.length - 1)),
        telemetryTasks.length - 1
      );
      loaderTaskText.textContent = telemetryTasks[idx];
    }
  }

  function closePreloader() {
    if (preloaderClosed) return;
    preloaderClosed = true;

    if (simulatedTimer) clearInterval(simulatedTimer);
    if (safetyTimer) clearTimeout(safetyTimer);
    updateHUDProgress(100);

    if (preloader) {
      preloader.classList.add('fade-out');
      setTimeout(() => {
        preloader.style.display = 'none';
        if (video) {
          try { video.pause(); } catch (e) {}
        }
      }, 700);
    }

    document.body.classList.remove('is-loading');
  }

  // Fallback simulation timer: counts to 100% and unlocks portal
  function startFallbackLoading() {
    if (simulatedTimer) return;
    simulatedTimer = setInterval(() => {
      simulatedProgress += Math.floor(Math.random() * 8) + 6;
      if (simulatedProgress >= 100) {
        simulatedProgress = 100;
        updateHUDProgress(100);
        clearInterval(simulatedTimer);
        setTimeout(closePreloader, 400);
      } else {
        updateHUDProgress(simulatedProgress);
      }
    }, 150);
  }

  // Generous emergency safety watchdog: only unlocks portal if video completely fails or stalls > 12s
  const safetyTimer = setTimeout(() => {
    closePreloader();
  }, 12000);

  if (video) {
    // Explicitly guarantee muted autoplay compliance
    video.muted = true;
    video.defaultMuted = true;

    video.addEventListener('timeupdate', () => {
      if (video.duration && !isNaN(video.duration) && video.duration > 0) {
        const percent = (video.currentTime / video.duration) * 100;
        updateHUDProgress(Math.max(percent, simulatedProgress));
      }
    });

    video.addEventListener('ended', () => {
      updateHUDProgress(100);
      setTimeout(closePreloader, 400);
    });

    video.addEventListener('error', () => {
      startFallbackLoading();
    });

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay policy muted fallback
        video.muted = true;
        const retryPromise = video.play();
        if (retryPromise !== undefined) {
          retryPromise.catch(() => {
            startFallbackLoading();
          });
        }
      });
    }
  } else {
    startFallbackLoading();
  }

  if (skipBtn) {
    skipBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closePreloader();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter') {
      closePreloader();
    }
  });

  if (toggleAudioBtn && video) {
    toggleAudioBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (video.muted) {
        video.muted = false;
        audioIcon.className = 'fa-solid fa-volume-high';
        audioText.textContent = 'MUTE SOUND';
      } else {
        video.muted = true;
        audioIcon.className = 'fa-solid fa-volume-xmark';
        audioText.textContent = 'UNMUTE SOUND';
      }
    });
  }


  // ==========================================================================
  // 2. CLIENT-SIDE HASH ROUTER (#/, #/events, #/club, #/team, #/gallery)
  // ==========================================================================
  const views = {
    '/': document.getElementById('view-home'),
    '/events': document.getElementById('view-events'),
    '/club': document.getElementById('view-club'),
    '/clubs': document.getElementById('view-club'),
    '/team': document.getElementById('view-team'),
    '/gallery': document.getElementById('view-gallery')
  };

  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

  function handleRoute() {
    let hash = window.location.hash.slice(1) || '/';
    if (!hash.startsWith('/')) hash = '/' + hash;

    const targetView = views[hash] || views['/'];

    Object.keys(views).forEach(key => {
      if (views[key]) {
        views[key].classList.remove('active');
      }
    });

    if (targetView) {
      targetView.classList.add('active');
    }

    navLinks.forEach(link => {
      const route = link.getAttribute('data-route');
      if (route === hash) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });

    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) mobileMenu.classList.remove('active');

    // Trigger scroll reveals on newly active view
    setTimeout(() => {
      if (targetView) initScrollReveals(targetView);
    }, 80);
  }

  // ==========================================================================
  // 3. AMBIENT INTERACTIVITY (Interactive Cosmic Aura for All Pages & Hero)
  // ==========================================================================
  document.querySelectorAll('.events-page-view, .hero-section, #view-home').forEach(view => {
    const glow = view.querySelector('.events-interactive-glow');
    if (!glow) return;

    view.addEventListener('mousemove', (e) => {
      const rect = view.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      glow.style.left = x + 'px';
      glow.style.top = y + 'px';
      glow.style.opacity = '1';
    });

    view.addEventListener('mouseleave', () => {
      glow.style.opacity = '0';
    });
  });

  window.addEventListener('hashchange', handleRoute);
  handleRoute();


  // ==========================================================================
  // 3. HARDWARE-ACCELERATED SCROLL & REVEAL ENGINE
  // ==========================================================================
  const navbar = document.getElementById('navbar');
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  // Throttled passive scroll listener for navbar
  let isScrollTicking = false;
  window.addEventListener('scroll', () => {
    if (!isScrollTicking) {
      window.requestAnimationFrame(() => {
        if (navbar) {
          if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
          } else {
            navbar.classList.remove('scrolled');
          }
        }
        isScrollTicking = false;
      });
      isScrollTicking = true;
    }
  }, { passive: true });

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
    });
  }

  // Optimized IntersectionObserver for 60/120fps scroll reveals
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');

        // Check if element has count-up statistics
        if (entry.target.hasAttribute('data-target')) {
          animateCountUp(entry.target);
        }
        const innerCounters = entry.target.querySelectorAll('[data-target]');
        innerCounters.forEach(stat => animateCountUp(stat));

        // Free up memory: unobserve once revealed
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    threshold: 0.12,
    rootMargin: '0px 0px -50px 0px'
  });

  function initScrollReveals(root = document) {
    const elements = root.querySelectorAll('.reveal-on-scroll, .reveal-scale, .reveal-left, .reveal-right');
    elements.forEach(el => {
      if (!el.classList.contains('is-revealed')) {
        revealObserver.observe(el);
      }
    });
  }

  // Live count-up animation for symposium statistics
  function animateCountUp(el) {
    if (el.dataset.animated === 'true') return;
    el.dataset.animated = 'true';

    const target = parseInt(el.getAttribute('data-target'), 10);
    const suffix = el.getAttribute('data-suffix') || '';
    if (isNaN(target)) return;

    const numSpan = el.querySelector('.stat-number');
    if (!numSpan) return;

    const duration = 1800; // ms
    const startTime = performance.now();

    function updateCounter(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Smooth cubic ease-out
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeOut * target);

      numSpan.textContent = current + (progress === 1 ? suffix : '');

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        numSpan.textContent = target + suffix;
      }
    }

    requestAnimationFrame(updateCounter);
  }

  // Initialize scroll reveals on initial load
  initScrollReveals();


  // ==========================================================================
  // 4. LIVE COUNTDOWN TIMER (Target: 26th November 2026)
  // ==========================================================================
  const festDate = new Date('2026-11-26T09:00:00+05:30');
  let prevTime = { d: null, h: null, m: null, s: null };

  function triggerBoxTick(boxId) {
    const boxEl = document.getElementById(boxId);
    if (!boxEl) return;
    boxEl.classList.remove('box-ticking');
    // Force DOM reflow to immediately replay animation
    void boxEl.offsetWidth;
    boxEl.classList.add('box-ticking');
  }

  function updateCountdown() {
    const diff = festDate.getTime() - new Date().getTime();
    if (diff > 0) {
      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);

      const dEl = document.getElementById('timer-days');
      const hEl = document.getElementById('timer-hours');
      const mEl = document.getElementById('timer-minutes');
      const sEl = document.getElementById('timer-seconds');

      if (dEl && prevTime.d !== d) {
        dEl.textContent = String(d).padStart(2, '0');
        if (prevTime.d !== null) triggerBoxTick('box-days');
      }
      if (hEl && prevTime.h !== h) {
        hEl.textContent = String(h).padStart(2, '0');
        if (prevTime.h !== null) triggerBoxTick('box-hours');
      }
      if (mEl && prevTime.m !== m) {
        mEl.textContent = String(m).padStart(2, '0');
        if (prevTime.m !== null) triggerBoxTick('box-minutes');
      }
      if (sEl && prevTime.s !== s) {
        sEl.textContent = String(s).padStart(2, '0');
        if (prevTime.s !== null) triggerBoxTick('box-seconds');
      }

      prevTime = { d, h, m, s };
    }
  }
  setInterval(updateCountdown, 1000);
  updateCountdown();


  // ==========================================================================
  // 5. EVENT & CLUB DETAILS MODAL ENGINE
  // ==========================================================================
  const eventDetailsModal = document.getElementById('event-details-modal');
  const eventModalClose = document.getElementById('event-modal-close');
  const eventModalBody = document.getElementById('event-modal-body');

  function openClubModal(club) {
    if (!eventDetailsModal || !eventModalBody) return;
    const targetClub = club || CLUBS_DATA[0];
    const logoUrl = targetClub.logo || 'assets/images/Sankalp_Final_Logo_Transparent.png';

    // Find all events hosted by this club
    const allEvs = (typeof EVENTS_DATA !== 'undefined' && Array.isArray(EVENTS_DATA)) ? EVENTS_DATA : [];
    const clubEvents = allEvs.filter(
      ev => ev.clubName === targetClub.name || ev.clubName === targetClub.shortName
    );

    let eventsListHtml = '';
    if (clubEvents.length > 0) {
      eventsListHtml = (
        '<div style="margin-top: 1.5rem; text-align: left;">' +
          '<h4 class="event-modal-section-title" style="margin-bottom: 0.8rem;"><i class="fa-solid fa-trophy"></i> Flagship Events Hosted by ' + targetClub.name + ' (' + clubEvents.length + ')</h4>' +
          '<div style="display: flex; flex-direction: column; gap: 0.65rem;">' +
            clubEvents.map(ev => (
              '<div class="event-modal-info-card" style="cursor: pointer; transition: all 0.2s;" data-ev-id="' + ev.id + '">' +
                '<i class="fa-solid fa-sparkles" style="color: #fbbf24; font-size: 1.1rem; margin-top: 0.2rem;"></i>' +
                '<div style="flex:1;">' +
                  '<h5 style="color:#fbbf24; font-size:0.92rem; font-weight:700; margin:0 0 4px 0;">' + ev.eventName + '</h5>' +
                  '<p style="font-size:0.82rem; color:#cbd5e1; margin:0; line-height: 1.4;">' + (ev.category || 'Competition') + ' &bull; <strong style="color:#34d399;">' + (ev.prizePool || '') + '</strong> &bull; ' + (ev.venue || 'NIST Campus') + '</p>' +
                '</div>' +
                '<button class="btn btn-gold btn-sm" style="padding:0.35rem 0.8rem; font-size:0.75rem;">View Rules</button>' +
              '</div>'
            )).join('') +
          '</div>' +
        '</div>'
      );
    }

    eventModalBody.innerHTML = (
      '<div class="event-modal-tba-stage text-center">' +
        '<div class="tba-logo-halo">' +
          '<img src="' + logoUrl + '" alt="' + (targetClub.name || 'Club') + ' Logo" class="tba-logo-img" onerror="this.src=\'assets/images/Sankalp_Final_Logo_Transparent.png\'">' +
        '</div>' +
        '<div style="margin-bottom: 0.8rem;">' +
          '<span class="club-category-badge ' + (targetClub.catClass || 'cat-general') + '">' +
            '<i class="' + (targetClub.icon || 'fa-solid fa-users') + '"></i> ' + (targetClub.category || 'NIST Student Club') +
          '</span>' +
        '</div>' +
        '<h2 class="gold-gradient-text tba-title" style="margin-bottom: 0.8rem;">' + targetClub.name + '</h2>' +
        '<p class="tba-subtitle" style="max-width: 650px; margin: 0 auto 1.5rem auto; line-height: 1.65; color: #cbd5e1;">' +
          targetClub.description +
        '</p>' +
        '<div style="margin-bottom: 1.2rem;">' +
          '<span class="empty-state-badge"><i class="fa-solid fa-sparkles"></i> SANKALP 2K26 Official Organizing Society &bull; ' + (targetClub.eventCount || 0) + ' Competitions</span>' +
        '</div>' +
        eventsListHtml +
        '<div style="margin-top: 1.8rem;">' +
          '<button class="btn btn-gold btn-sm" id="event-modal-tba-close" style="padding: 0.65rem 2.5rem; font-size: 0.9rem;">' +
            '<span>Close Details</span>' +
          '</button>' +
        '</div>' +
      '</div>'
    );

    eventDetailsModal.classList.add('open');
    document.body.style.overflow = 'hidden';

    // Click handler for events inside the club modal
    eventModalBody.querySelectorAll('[data-ev-id]').forEach(card => {
      card.addEventListener('click', () => {
        const evId = card.getAttribute('data-ev-id');
        const ev = (typeof EVENTS_DATA !== 'undefined' ? EVENTS_DATA : []).find(item => item.id === evId);
        if (ev) openEventModal(ev);
      });
    });

    const tbaCloseBtn = eventModalBody.querySelector('#event-modal-tba-close');
    if (tbaCloseBtn) {
      tbaCloseBtn.addEventListener('click', closeEventModal);
    }
  }

  function openEventModal(ev) {
    if (!eventDetailsModal || !eventModalBody || !ev) return;

    const targetClub = (typeof CLUBS_DATA !== 'undefined' ? CLUBS_DATA : []).find(c => c.name === ev.clubName || c.shortName === ev.clubName) || {
      name: ev.clubName || 'Sankalp Society',
      description: 'Official student organization under NIST University coordinating this symposium competition.',
      logo: 'assets/images/Sankalp_Final_Logo_Transparent.png'
    };

    eventModalBody.innerHTML = (
      '<div class="event-modal-header">' +
        '<div class="event-modal-badge-row">' +
          '<span class="event-modal-badge badge-gold"><i class="fa-solid fa-trophy"></i> Prize: To Be Announced</span>' +
          '<span class="event-modal-badge badge-green"><i class="fa-regular fa-calendar"></i> Date: To Be Announced</span>' +
          '<span class="event-modal-badge"><i class="fa-solid fa-location-dot"></i> Venue: To Be Announced</span>' +
          '<span class="event-modal-badge"><i class="fa-solid fa-users"></i> ' + ev.clubName + '</span>' +
        '</div>' +
        '<h2 class="event-modal-title gold-gradient-text">' + ev.eventName + '</h2>' +
      '</div>' +

      '<div class="event-modal-club-spotlight" style="margin-top: 1.2rem;">' +
        '<img src="' + (targetClub.logo || 'assets/images/Sankalp_Final_Logo_Transparent.png') + '" alt="' + targetClub.name + ' Logo" class="event-modal-club-logo" onerror="this.src=\'assets/images/Sankalp_Final_Logo_Transparent.png\'">' +
        '<div class="event-modal-club-info">' +
          '<h4>Organized by ' + targetClub.name + '</h4>' +
          '<p>' + (targetClub.description || 'Active student society under NIST University coordinating this symposium competition.') + '</p>' +
        '</div>' +
      '</div>' +

      '<div class="event-modal-info-grid">' +
        '<div class="event-modal-info-card">' +
          '<i class="fa-regular fa-calendar"></i>' +
          '<div>' +
            '<h5>Date &amp; Schedule</h5>' +
            '<p>To Be Announced</p>' +
          '</div>' +
        '</div>' +
        '<div class="event-modal-info-card">' +
          '<i class="fa-solid fa-location-dot"></i>' +
          '<div>' +
            '<h5>Venue</h5>' +
            '<p>To Be Announced</p>' +
          '</div>' +
        '</div>' +
        '<div class="event-modal-info-card">' +
          '<i class="fa-solid fa-trophy"></i>' +
          '<div>' +
            '<h5>Prize Pool</h5>' +
            '<p>To Be Announced</p>' +
          '</div>' +
        '</div>' +
        '<div class="event-modal-info-card">' +
          '<i class="fa-solid fa-tag"></i>' +
          '<div>' +
            '<h5>Track / Category</h5>' +
            '<p>' + (ev.category || 'Symposium Event') + '</p>' +
          '</div>' +
        '</div>' +
      '</div>' +

      '<div class="event-modal-section">' +
        '<h4 class="event-modal-section-title"><i class="fa-solid fa-circle-info"></i> About the Competition</h4>' +
        '<p class="event-modal-desc">Detailed competition description, problem statement, and guidelines will be announced shortly.</p>' +
      '</div>' +

      '<div class="event-modal-section">' +
        '<h4 class="event-modal-section-title"><i class="fa-solid fa-gavel"></i> Rules &amp; Guidelines</h4>' +
        '<ul class="event-modal-list">' +
          '<li><i class="fa-solid fa-circle-check"></i> <span>Event schedule and slot timings to be announced.</span></li>' +
          '<li><i class="fa-solid fa-circle-check"></i> <span>Problem statement, evaluation rubrics, and rules to be announced.</span></li>' +
          '<li><i class="fa-solid fa-circle-check"></i> <span>Prize pool and certificate details to be announced.</span></li>' +
          '<li><i class="fa-solid fa-circle-check"></i> <span>Registration will open upon official schedule publication.</span></li>' +
        '</ul>' +
      '</div>' +

      '<div class="event-modal-actions-bar">' +
        '<button class="btn btn-gold" style="padding: 0.65rem 1.8rem; font-size: 0.9rem;" onclick="alert(\'Registration and full schedule for ' + ev.eventName.replace(/'/g, "\\'") + ' will open soon on the official portal!\'); return false;">' +
          '<i class="fa-solid fa-clock"></i> Registration Opening Soon' +
        '</button>' +
        '<button class="btn btn-outline" id="event-modal-inner-close" style="padding: 0.65rem 1.8rem; font-size: 0.9rem;">' +
          'Close Details' +
        '</button>' +
      '</div>'
    );

    eventDetailsModal.classList.add('open');
    document.body.style.overflow = 'hidden';

    const innerClose = eventModalBody.querySelector('#event-modal-inner-close');
    if (innerClose) innerClose.addEventListener('click', closeEventModal);
  }

  function closeEventModal() {
    if (eventDetailsModal) {
      eventDetailsModal.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  if (eventModalClose) eventModalClose.addEventListener('click', closeEventModal);
  if (eventDetailsModal) {
    eventDetailsModal.addEventListener('click', (e) => {
      if (e.target === eventDetailsModal) closeEventModal();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && eventDetailsModal && eventDetailsModal.classList.contains('open')) {
      closeEventModal();
    }
  });


  // ==========================================================================
  // 6. POPULATE CLUBS (#/club) (Pallets for 20 Student Clubs)
  // ==========================================================================
  const clubsContainer = document.getElementById('nist-clubs-container');
  const clubFilterSelect = document.getElementById('event-club-filter');

  function renderClubs(customClubs) {
    if (!clubsContainer) return;
    const clubs = (customClubs && Array.isArray(customClubs)) ? customClubs :
      ((typeof CLUBS_DATA !== 'undefined' && Array.isArray(CLUBS_DATA)) ? CLUBS_DATA : []);

    if (clubs.length === 0) {
      clubsContainer.innerHTML = (
        '<div class="empty-state-box reveal-scale">' +
          '<div class="empty-state-icon"><i class="fa-solid fa-users-gear"></i></div>' +
          '<h3 class="empty-state-title">Clubs To Be Announced</h3>' +
          '<p class="empty-state-desc">The list of participating student clubs will be published soon.</p>' +
        '</div>'
      );
      initScrollReveals(clubsContainer);
      return;
    }

    // Ensure single-club-view is removed so full multi-card pallet grid renders
    clubsContainer.classList.remove('single-club-view');

    let html = '';
    clubs.forEach((club, idx) => {
      const logoUrl = club.logo || 'assets/images/Sankalp_Final_Logo_Transparent.png';
      const catClass = club.catClass || 'cat-general';
      const iconClass = club.icon || 'fa-solid fa-users';
      const animDelay = (idx % 4) + 1;

      html += (
        '<div class="club-card clickable-club-card reveal-scale delay-' + animDelay + '" data-club-id="' + club.id + '" tabindex="0" role="button" aria-label="' + club.name + '">' +
          '<div class="club-header">' +
            '<img src="' + logoUrl + '" alt="' + club.name + ' Logo" class="club-logo" onerror="this.onerror=null; this.src=\'assets/images/Sankalp_Final_Logo_Transparent.png\';">' +
            '<div class="club-title-col">' +
              '<span class="club-category-badge ' + catClass + '">' +
                '<i class="' + iconClass + '"></i> ' + (club.category || 'NIST Club') +
              '</span>' +
              '<h3 class="club-name">' + club.name + '</h3>' +
            '</div>' +
          '</div>' +
          '<p class="club-desc">' + club.description + '</p>' +
          '<div class="club-metrics-row" style="display:flex; align-items:center; justify-content:space-between; margin: 1rem 0; padding: 0.65rem 0.95rem; background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(245, 158, 11, 0.2); border-radius: 10px;">' +
            '<span style="font-size: 0.8rem; color: #cbd5e1;"><i class="fa-solid fa-trophy" style="color: #fbbf24; margin-right: 0.4rem;"></i> Flagship Competitions:</span>' +
            '<span class="badge badge-gold" style="font-size: 0.82rem; font-weight: 700; color: #fbbf24; background: rgba(245, 158, 11, 0.15); padding: 0.25rem 0.65rem; border-radius: 6px; border: 1px solid rgba(245, 158, 11, 0.3);">' + (club.eventCount || 0) + ' Events</span>' +
          '</div>' +
          '<div class="club-footer-actions">' +
            '<div class="club-socials">' +
              (club.socials && club.socials.instagram ? '<a href="' + club.socials.instagram + '" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="Instagram" onclick="event.stopPropagation();"><i class="fa-brands fa-instagram"></i></a>' : '') +
              (club.socials && club.socials.linkedin ? '<a href="' + club.socials.linkedin + '" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="LinkedIn" onclick="event.stopPropagation();"><i class="fa-brands fa-linkedin-in"></i></a>' : '') +
              (club.socials && club.socials.website ? '<a href="' + club.socials.website + '" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="Website" onclick="event.stopPropagation();"><i class="fa-solid fa-globe"></i></a>' : '') +
            '</div>' +
            '<button class="btn btn-gold btn-sm club-details-trigger" data-club-id="' + club.id + '" style="padding: 0.45rem 1.1rem; font-size: 0.78rem;" onclick="event.stopPropagation();">' +
              '<i class="fa-solid fa-circle-info"></i> Details' +
            '</button>' +
          '</div>' +
        '</div>'
      );
    });

    clubsContainer.innerHTML = html;
    initScrollReveals(clubsContainer);

    if (clubFilterSelect) {
      clubFilterSelect.innerHTML = '<option value="ALL">All Clubs</option>';
      clubs.forEach(club => {
        const opt = document.createElement('option');
        opt.value = club.name;
        opt.textContent = club.name;
        clubFilterSelect.appendChild(opt);
      });
    }

    // Attach click and interactive tilt handlers to each club pallet
    const clubCards = clubsContainer.querySelectorAll('.clickable-club-card');
    clubCards.forEach(card => {
      const clubId = card.getAttribute('data-club-id');
      const targetClub = clubs.find(c => c.id === clubId);

      card.addEventListener('click', () => {
        if (targetClub) openClubModal(targetClub);
      });

      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          if (targetClub) openClubModal(targetClub);
        }
      });

      const detailsBtn = card.querySelector('.club-details-trigger');
      if (detailsBtn) {
        detailsBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          if (targetClub) openClubModal(targetClub);
        });
      }

      // Smooth 3D tilt interaction
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotX = ((y - centerY) / centerY) * -6;
        const rotY = ((x - centerX) / centerX) * 6;
        card.style.transform = 'perspective(800px) rotateX(' + rotX.toFixed(1) + 'deg) rotateY(' + rotY.toFixed(1) + 'deg) translateY(-8px)';
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }

  renderClubs();

  // Also fetch data/clubs.json to sync if available
  if (window.fetch) {
    fetch('data/clubs.json')
      .then(res => res.ok ? res.json() : null)
      .then(jsonClubs => {
        if (jsonClubs && Array.isArray(jsonClubs) && jsonClubs.length > 0) {
          renderClubs(jsonClubs);
        }
      })
      .catch(() => {});
  }


  // ==========================================================================
  // 7. POPULATE EVENTS (#/events) (With Graceful Empty State & Event Details Modal)
  // ==========================================================================
  const eventsContainer = document.getElementById('nist-events-container');
  const eventSearchInput = document.getElementById('event-search-input');

  function renderEvents(items) {
    if (!eventsContainer) return;
    if (!items || items.length === 0) {
      eventsContainer.innerHTML = (
        '<div class="empty-state-box reveal-scale">' +
          '<div class="empty-state-icon"><i class="fa-solid fa-trophy"></i></div>' +
          '<h3 class="empty-state-title">Events To Be Revealed</h3>' +
          '<p class="empty-state-desc">The competition schedule, problem statements, and prize pools will be released shortly. Stay tuned for announcements!</p>' +
          '<span class="empty-state-badge"><i class="fa-solid fa-clock"></i> Awaiting Event Uploads</span>' +
        '</div>'
      );
      initScrollReveals(eventsContainer);
      return;
    }

    eventsContainer.innerHTML = items.map((event, idx) => {
      const delayClass = 'delay-' + ((idx % 3) + 1);

      return (
        '<div class="nist-event-card event-teaser-card reveal-scale ' + delayClass + '" data-event-id="' + event.id + '" style="cursor:pointer; display:flex; flex-direction:column; justify-content:space-between; padding:1.5rem; border-radius:18px; background:rgba(15,23,42,0.8); border:1px solid rgba(245,158,11,0.22); box-shadow:0 10px 30px rgba(0,0,0,0.4); transition:all 0.3s ease;">' +
          '<div>' +
            '<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem;">' +
              '<span class="event-club-tag" style="position:static; font-size:0.75rem; padding:0.3rem 0.75rem; background:rgba(245,158,11,0.15); color:#fbbf24; border:1px solid rgba(245,158,11,0.3); border-radius:999px; font-weight:700;"><i class="fa-solid fa-users" style="margin-right:4px;"></i> ' + (event.clubName || 'Sankalp Competition') + '</span>' +
              '<span style="font-size:0.72rem; color:#fbbf24; background:rgba(245,158,11,0.1); border:1px solid rgba(245,158,11,0.25); padding:0.25rem 0.6rem; border-radius:6px; font-weight:700;"><i class="fa-solid fa-clock"></i> TBA</span>' +
            '</div>' +
            '<h3 class="event-heading gold-gradient-text" style="font-size:1.35rem; font-weight:800; line-height:1.3; margin-bottom:0.9rem;">' + event.eventName + '</h3>' +
            '<div class="event-meta-row" style="display:flex; flex-direction:column; gap:0.45rem; font-size:0.82rem; color:#94a3b8; margin-bottom:0.9rem; padding:0.65rem 0.85rem; background:rgba(255,255,255,0.02); border-radius:8px; border:1px solid rgba(255,255,255,0.06);">' +
              '<span><i class="fa-regular fa-calendar" style="color:#fbbf24; width:16px;"></i> Date: <strong>To Be Announced</strong></span>' +
              '<span><i class="fa-solid fa-location-dot" style="color:#fbbf24; width:16px;"></i> Venue: <strong>To Be Announced</strong></span>' +
            '</div>' +
            '<p class="event-desc" style="color:#cbd5e1; font-size:0.84rem; line-height:1.5; margin-bottom:1.1rem;">' +
              '<i class="fa-solid fa-circle-info" style="color:#fbbf24; font-size:0.75rem; margin-right:4px;"></i> Description: <em>To Be Announced</em>' +
            '</p>' +
          '</div>' +
          '<div class="event-actions-row" style="display:flex; justify-content:space-between; align-items:center; width:100%; border-top:1px solid rgba(255,255,255,0.08); padding-top:0.9rem; margin-top:auto;">' +
            '<span class="event-action-badge" style="font-size:0.78rem; font-weight:700; color:#fbbf24;"><i class="fa-solid fa-trophy"></i> Prize: TBA</span>' +
            '<button class="btn btn-gold btn-sm view-event-modal-btn" data-event-id="' + event.id + '" style="padding:0.35rem 0.85rem; font-size:0.76rem;">Details &amp; Rules</button>' +
          '</div>' +
        '</div>'
      );
    }).join('');

    initScrollReveals(eventsContainer);

    eventsContainer.querySelectorAll('.nist-event-card').forEach(card => {
      card.addEventListener('click', () => {
        const evId = card.getAttribute('data-event-id');
        const ev = (typeof EVENTS_DATA !== 'undefined' ? EVENTS_DATA : []).find(item => item.id === evId);
        if (ev) openEventModal(ev);
      });
    });

    eventsContainer.querySelectorAll('.view-event-modal-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const evId = btn.getAttribute('data-event-id');
        const ev = (typeof EVENTS_DATA !== 'undefined' ? EVENTS_DATA : []).find(item => item.id === evId);
        if (ev) openEventModal(ev);
      });
    });
  }

  function filterEvents() {
    const query = (eventSearchInput?.value || '').toLowerCase().trim();
    const selectedClub = clubFilterSelect?.value || 'ALL';

    const eventsSource = (typeof EVENTS_DATA !== 'undefined' && Array.isArray(EVENTS_DATA)) ? EVENTS_DATA : [];
    const filtered = eventsSource.filter(ev => {
      const matchClub = selectedClub === 'ALL' || ev.clubName === selectedClub;
      const matchQuery = !query || 
        (ev.eventName && ev.eventName.toLowerCase().includes(query)) ||
        (ev.eventDescription && ev.eventDescription.toLowerCase().includes(query)) ||
        (ev.clubName && ev.clubName.toLowerCase().includes(query)) ||
        (ev.category && ev.category.toLowerCase().includes(query)) ||
        (ev.venue && ev.venue.toLowerCase().includes(query));
      return matchClub && matchQuery;
    });

    renderEvents(filtered);
  }

  if (eventSearchInput) eventSearchInput.addEventListener('input', filterEvents);
  if (clubFilterSelect) clubFilterSelect.addEventListener('change', filterEvents);

  const initialEvents = (typeof EVENTS_DATA !== 'undefined' && Array.isArray(EVENTS_DATA)) ? EVENTS_DATA : [];
  renderEvents(initialEvents);

  // Sync with data/events.json if available
  if (window.fetch) {
    fetch('data/events.json')
      .then(res => res.ok ? res.json() : null)
      .then(jsonEvents => {
        if (jsonEvents && Array.isArray(jsonEvents) && jsonEvents.length > 0) {
          renderEvents(jsonEvents);
        }
      })
      .catch(() => {});
  }


  // ==========================================================================
  // 7. POPULATE TEAMS (#/team) (With Graceful Empty State)
  // ==========================================================================
  const teamCardsContainer = document.getElementById('team-cards-container');
  const comTabs = document.querySelectorAll('.com-tab');

  function renderMemberShowcaseCard(m, idx) {
    const delayClass = 'delay-' + ((idx % 4) + 1);
    const hasPhoto = Boolean(m.avatar && m.avatar.trim().length > 0);
    const avatarSrc = hasPhoto ? m.avatar : 'assets/images/Sankalp_Final_Logo_Transparent.png';
    const fallbackClass = hasPhoto ? '' : 'is-fallback';
    const cleanName = (m.name || '').replace(/\s*\([^)]*\)/g, '').trim();
    const cleanRole = (m.role || '').replace(/\s*\([^)]*\)/g, '').trim();

    let phoneHtml = '';
    let phoneSocial = '';
    if (m.phone && m.phone.trim().length > 0) {
      const telLink = 'tel:' + m.phone.replace(/[^\d+]/g, '');
      phoneHtml = '<a href="' + telLink + '" class="member-phone-badge" title="Call ' + cleanName + '"><i class="fa-solid fa-phone"></i> ' + m.phone + '</a>';
      phoneSocial = '<a href="' + telLink + '" class="social-link" title="Call ' + m.phone + '" aria-label="Call"><i class="fa-solid fa-phone"></i></a>';
    }

    return (
      '<div class="team-showcase-card reveal-scale ' + delayClass + '">' +
        '<div class="card-photo-wrapper">' +
          '<img src="' + avatarSrc + '" alt="' + cleanName + '" class="card-photo ' + fallbackClass + '" onerror="this.src=\'assets/images/Sankalp_Final_Logo_Transparent.png\'; this.classList.add(\'is-fallback\');">' +
        '</div>' +
        '<div class="card-info-wrapper">' +
          '<h3 class="member-name">' + cleanName + '</h3>' +
          '<p class="member-role">' + cleanRole + '</p>' +
          phoneHtml +
          '<div class="member-socials">' +
            phoneSocial +
            '<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="social-link" title="LinkedIn" aria-label="LinkedIn"><i class="fa-brands fa-linkedin"></i></a>' +
            '<a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="social-link" title="Instagram" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>' +
          '</div>' +
        '</div>' +
      '</div>'
    );
  }

  function renderTeamCommittee(comName) {
    if (!teamCardsContainer) return;
    const members = TEAM_COMMITTEES[comName] || [];

    if (members.length === 0) {
      teamCardsContainer.className = 'team-sections-container';
      teamCardsContainer.innerHTML = (
        '<div class="team-subgroup-section reveal-on-scroll">' +
          '<div class="team-subgroup-header">' +
            '<h2 class="subgroup-title">' + comName.toUpperCase() + '</h2>' +
            '<div class="subgroup-divider-line"></div>' +
          '</div>' +
          '<div class="empty-state-box reveal-scale">' +
            '<div class="empty-state-icon"><i class="fa-solid fa-id-card-clip"></i></div>' +
            '<h3 class="empty-state-title">' + comName + ' Committee</h3>' +
            '<p class="empty-state-desc">The designated leads and members for this committee will be announced soon.</p>' +
            '<span class="empty-state-badge"><i class="fa-solid fa-clock"></i> Awaiting Committee Roster</span>' +
          '</div>' +
        '</div>'
      );
      initScrollReveals(teamCardsContainer);
      return;
    }

    if (comName === 'Event') {
      const headMembers = members.filter(m => m.role.toLowerCase().includes('head'));
      const managerMembers = members.filter(m => m.role.toLowerCase().includes('manager'));
      const coordMembers = members.filter(m => !m.role.toLowerCase().includes('head') && !m.role.toLowerCase().includes('manager'));

      let sectionsHtml = '';

      if (headMembers.length > 0) {
        sectionsHtml += (
          '<div class="team-subgroup-section reveal-on-scroll">' +
            '<div class="team-subgroup-header">' +
              '<h2 class="subgroup-title">EVENT HEAD</h2>' +
              '<div class="subgroup-divider-line"></div>' +
            '</div>' +
            '<div class="single-lead-grid">' +
              headMembers.map((m, idx) => renderMemberShowcaseCard(m, idx)).join('') +
            '</div>' +
          '</div>'
        );
      }

      if (managerMembers.length > 0) {
        sectionsHtml += (
          '<div class="team-subgroup-section reveal-on-scroll delay-1">' +
            '<div class="team-subgroup-header">' +
              '<h2 class="subgroup-title">EVENT MANAGERS</h2>' +
              '<div class="subgroup-divider-line"></div>' +
            '</div>' +
            '<div class="team-cards-grid">' +
              managerMembers.map((m, idx) => renderMemberShowcaseCard(m, idx)).join('') +
            '</div>' +
          '</div>'
        );
      }

      if (coordMembers.length > 0) {
        sectionsHtml += (
          '<div class="team-subgroup-section reveal-on-scroll delay-2">' +
            '<div class="team-subgroup-header">' +
              '<h2 class="subgroup-title">EVENT COORDINATORS</h2>' +
              '<div class="subgroup-divider-line"></div>' +
            '</div>' +
            '<div class="team-cards-grid">' +
              coordMembers.map((m, idx) => renderMemberShowcaseCard(m, idx)).join('') +
            '</div>' +
          '</div>'
        );
      }

      teamCardsContainer.className = 'team-sections-container';
      teamCardsContainer.innerHTML = sectionsHtml;
      initScrollReveals(teamCardsContainer);
      return;
    }

    // Default rendering for other committees
    teamCardsContainer.className = 'team-sections-container';
    teamCardsContainer.innerHTML = (
      '<div class="team-subgroup-section reveal-on-scroll">' +
        '<div class="team-subgroup-header">' +
          '<h2 class="subgroup-title">' + comName.toUpperCase() + '</h2>' +
          '<div class="subgroup-divider-line"></div>' +
        '</div>' +
        '<div class="team-cards-grid">' +
          members.map((m, idx) => renderMemberShowcaseCard(m, idx)).join('') +
        '</div>' +
      '</div>'
    );

    initScrollReveals(teamCardsContainer);
  }

  comTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      comTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const com = tab.getAttribute('data-com');
      renderTeamCommittee(com);
    });
  });
  renderTeamCommittee('Office Bearers');


  // ==========================================================================
  // 8. POPULATE GALLERY (#/gallery) (With Graceful Empty State)
  // ==========================================================================
  const galleryContainer = document.getElementById('gallery-container');
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');

  if (galleryContainer) {
    if (GALLERY_PHOTOS.length === 0) {
      galleryContainer.innerHTML = (
        '<div class="empty-state-box reveal-scale">' +
          '<div class="empty-state-icon"><i class="fa-solid fa-images"></i></div>' +
          '<h3 class="empty-state-title">Gallery Moments</h3>' +
          '<p class="empty-state-desc">Festival snapshots, video highlights, and memories will be showcased here once the event kicks off.</p>' +
          '<span class="empty-state-badge"><i class="fa-solid fa-camera"></i> Photos Coming Soon</span>' +
        '</div>'
      );
      initScrollReveals(galleryContainer);
    } else {
      galleryContainer.innerHTML = GALLERY_PHOTOS.map((src, i) => {
        const delayClass = 'delay-' + ((i % 4) + 1);
        return (
          '<div class="gallery-item reveal-scale ' + delayClass + '" data-src="' + src + '">' +
            '<img src="' + src + '" alt="Sankalp Photo ' + (i+1) + '" class="gallery-photo" loading="lazy">' +
            '<div class="gallery-overlay">' +
              '<i class="fa-solid fa-expand"></i>' +
            '</div>' +
          '</div>'
        );
      }).join('');

      initScrollReveals(galleryContainer);

      document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', () => {
          const src = item.getAttribute('data-src');
          if (lightboxImg && lightboxModal) {
            lightboxImg.src = src;
            lightboxModal.classList.add('open');
          }
        });
      });

      if (lightboxClose && lightboxModal) {
        lightboxClose.addEventListener('click', () => {
          lightboxModal.classList.remove('open');
        });
        lightboxModal.addEventListener('click', (e) => {
          if (e.target === lightboxModal) lightboxModal.classList.remove('open');
        });
      }
    }
  }


  // ==========================================================================
  // 9. FAQ ACCORDION
  // ==========================================================================
  const faqToggles = document.querySelectorAll('.faq-toggle');
  faqToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const parent = toggle.parentElement;
      const wasActive = parent.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach(item => item.classList.remove('active'));
      if (!wasActive) parent.classList.add('active');
    });
  });


  // ==========================================================================
  // 10. TOAST NOTIFICATION UTILITY
  // ==========================================================================
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');

  function showToast(msg) {
    if (!toast || !toastMessage) return;
    toastMessage.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 5500);
  }

});
