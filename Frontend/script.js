const CLUBS_DATA = [
  {
    id: "rec-club",
    name: "Renewable Energy Club (REC)",
    logo: "assets/images/rec_club_logo.png",
    eventCount: 1
  }
];

const EVENTS_DATA = [
  {
    id: "rec-urja-kriti-2026",
    eventName: "Urja-Kriti: Clean Energy & Green Tech Innovation Challenge",
    clubName: "Renewable Energy Club (REC)",
    clubLogo: "assets/images/rec_club_logo.png",
    category: "Technical & Sustainability",
    date: "2026-11-27T10:00:00.000Z",
    time: "10:00 AM – 04:00 PM IST",
    venue: "Galleria & Renewable Energy Lab, NIST University",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=900&auto=format&fit=crop&q=80",
    tag: "REC Flagship Challenge",
    summary: "Design and present breakthrough prototypes or simulations in solar PV, wind turbines, EV powertrains, and smart microgrids.",
    eventDescription: "Urja-Kriti is the premier national-level green technology symposium challenge organized by the Renewable Energy Club (REC) at Sankalp 26-27. Student innovators and engineering teams compete to solve real-world clean energy crises through working hardware prototypes, smart IoT telemetry, solar tracking, and electric mobility solutions. Evaluated by esteemed academicians and green-tech industry experts.",
    domains: [
      "Solar Photovoltaic & Concentrated Solar Systems",
      "EV Charging, Smart Battery Storage & BMS",
      "Micro Wind & Hybrid Renewable Energy Harvesting",
      "Smart Home, Campus & IoT Energy Optimization"
    ],
    rules: [
      "Team Size: 2 to 4 members per team (cross-college multidisciplinary teams welcome).",
      "Round 1 (Abstract Submission): Detailed project report, problem statement, and schematic overview.",
      "Round 2 (Live Demonstration): 10-minute live demonstration and prototype pitch before the jury panel.",
      "Working hardware prototypes will receive bonus points over pure software simulations.",
      "All submissions must be original student projects. Pre-assembled commercial kits will be disqualified."
    ],
    prizePool: "₹30,000 Total Cash Prizes",
    prizes: [
      { title: "Champion Team", amount: "₹15,000 + Winner Trophy + Certificate of Excellence" },
      { title: "1st Runner-Up", amount: "₹10,000 + Silver Memento + Certificate" },
      { title: "2nd Runner-Up", amount: "₹5,000 + Bronze Memento + Certificate" }
    ],
    coordinators: [
      { name: "Suman Patra", role: "President, REC", contact: "+91 94392 10842" },
      { name: "Rudra Sahu", role: "Event Lead, REC", contact: "+91 82490 61730" }
    ],
    registrationLink: "https://forms.google.com"
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
    "Office Bearers": [],
    "Event": [],
    "Technical": [],
    "Design": [],
    "Cultural": [],
    "Media": [],
    "Sponsorship": [],
    "Food": [],
    "Security": [],
    "Hospitality": [],
    "Finance": []
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
    "SANKALP 26-27 READY!"
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
  // 3. SUBPAGE AMBIENT INTERACTIVITY (Interactive Cosmic Aura for All Subpages)
  // ==========================================================================
  document.querySelectorAll('.events-page-view').forEach(view => {
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

      if (dEl) dEl.textContent = String(d).padStart(2, '0');
      if (hEl) hEl.textContent = String(h).padStart(2, '0');
      if (mEl) mEl.textContent = String(m).padStart(2, '0');
      if (sEl) sEl.textContent = String(s).padStart(2, '0');
    }
  }
  setInterval(updateCountdown, 1000);
  updateCountdown();


  // ==========================================================================
  // 5. EVENT DETAILS MODAL ENGINE
  // ==========================================================================
  const eventDetailsModal = document.getElementById('event-details-modal');
  const eventModalClose = document.getElementById('event-modal-close');
  const eventModalBody = document.getElementById('event-modal-body');

  function openEventModal(event) {
    if (!event || !eventDetailsModal || !eventModalBody) return;

    const dateStr = event.date ? new Date(event.date).toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : 'Fest Schedule';
    const timeStr = event.time || '10:00 AM IST';
    const venueStr = event.venue || 'NIST Campus';
    const bannerUrl = event.image || 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=900&auto=format&fit=crop&q=80';
    const logoUrl = event.clubLogo || 'assets/images/Sankalp_Final_Logo_Transparent.png';

    const rulesHtml = Array.isArray(event.rules) && event.rules.length > 0 ? (
      '<div class="event-modal-section">' +
        '<h4 class="event-modal-section-title"><i class="fa-solid fa-list-check"></i> Competition Rules & Guidelines</h4>' +
        '<ul class="event-modal-list">' +
          event.rules.map(r => '<li><i class="fa-solid fa-circle-check"></i> <span>' + r + '</span></li>').join('') +
        '</ul>' +
      '</div>'
    ) : '';

    const domainsHtml = Array.isArray(event.domains) && event.domains.length > 0 ? (
      '<div class="event-modal-section">' +
        '<h4 class="event-modal-section-title"><i class="fa-solid fa-lightbulb"></i> Focus Problem Statements & Tracks</h4>' +
        '<ul class="event-modal-list">' +
          event.domains.map(d => '<li><i class="fa-solid fa-bolt"></i> <span>' + d + '</span></li>').join('') +
        '</ul>' +
      '</div>'
    ) : '';

    const prizesHtml = Array.isArray(event.prizes) && event.prizes.length > 0 ? (
      '<div class="event-modal-section">' +
        '<h4 class="event-modal-section-title"><i class="fa-solid fa-trophy"></i> Prize Pool & Recognition</h4>' +
        '<div class="event-prizes-grid">' +
          event.prizes.map((p, idx) => (
            '<div class="event-prize-card ' + (idx === 0 ? 'gold-tier' : '') + '">' +
              '<div class="event-prize-tier"><i class="fa-solid fa-award"></i> ' + p.title + '</div>' +
              '<div class="event-prize-amount">' + p.amount + '</div>' +
            '</div>'
          )).join('') +
        '</div>' +
      '</div>'
    ) : '';

    const coordsHtml = Array.isArray(event.coordinators) && event.coordinators.length > 0 ? (
      '<div class="event-modal-section">' +
        '<h4 class="event-modal-section-title"><i class="fa-solid fa-headset"></i> Student & Faculty Coordinators</h4>' +
        '<div class="event-coordinators-grid">' +
          event.coordinators.map(c => (
            '<div class="event-coord-card">' +
              '<div>' +
                '<div class="event-coord-name">' + c.name + '</div>' +
                '<div class="event-coord-role">' + c.role + '</div>' +
              '</div>' +
              (c.contact ? '<a href="tel:' + c.contact + '" class="event-coord-phone"><i class="fa-solid fa-phone"></i> Call</a>' : '') +
            '</div>'
          )).join('') +
        '</div>' +
      '</div>'
    ) : '';

    eventModalBody.innerHTML = (
      '<div class="event-modal-header">' +
        '<div class="event-modal-badge-row">' +
          '<span class="event-modal-badge badge-green"><i class="fa-solid fa-leaf"></i> ' + event.clubName + '</span>' +
          '<span class="event-modal-badge badge-gold"><i class="fa-solid fa-trophy"></i> ' + (event.tag || 'Flagship Event') + '</span>' +
        '</div>' +
        '<h2 class="event-modal-title gold-gradient-text" id="modal-event-title">' + event.eventName + '</h2>' +
      '</div>' +

      '<img src="' + bannerUrl + '" alt="' + event.eventName + '" class="event-modal-banner" onerror="this.src=\'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&auto=format&fit=crop\'">' +

      '<div class="event-modal-club-spotlight">' +
        '<img src="' + logoUrl + '" alt="' + event.clubName + '" class="event-modal-club-logo" onerror="this.src=\'assets/images/Sankalp_Final_Logo_Transparent.png\'">' +
        '<div class="event-modal-club-info">' +
          '<h4>Organized by ' + event.clubName + '</h4>' +
          '<p>National Institute of Science and Technology (NIST University) • SANKALP 26-27</p>' +
        '</div>' +
      '</div>' +

      '<div class="event-modal-info-grid">' +
        '<div class="event-modal-info-card">' +
          '<i class="fa-regular fa-calendar-days"></i>' +
          '<div>' +
            '<h5>Date & Schedule</h5>' +
            '<p>' + dateStr + '</p>' +
            '<small style="color:var(--text-muted);">' + timeStr + '</small>' +
          '</div>' +
        '</div>' +
        '<div class="event-modal-info-card">' +
          '<i class="fa-solid fa-location-dot"></i>' +
          '<div>' +
            '<h5>Venue Location</h5>' +
            '<p>' + venueStr + '</p>' +
          '</div>' +
        '</div>' +
        '<div class="event-modal-info-card">' +
          '<i class="fa-solid fa-award"></i>' +
          '<div>' +
            '<h5>Total Cash Prizes</h5>' +
            '<p style="color:#fbbf24;">' + (event.prizePool || 'Merit Awards + Cash') + '</p>' +
          '</div>' +
        '</div>' +
      '</div>' +

      '<div class="event-modal-section">' +
        '<h4 class="event-modal-section-title"><i class="fa-solid fa-circle-info"></i> Event Overview</h4>' +
        '<p class="event-modal-desc">' + (event.eventDescription || event.summary || '') + '</p>' +
      '</div>' +

      domainsHtml +
      rulesHtml +
      prizesHtml +
      coordsHtml +

      '<div class="event-modal-actions-bar">' +
        '<button class="btn btn-gold modal-register-trigger-btn">' +
          '<span><i class="fa-solid fa-pen-nib"></i> Register For Event</span>' +
        '</button>' +
        '<button class="btn btn-outline modal-jump-events-btn">' +
          '<i class="fa-solid fa-calendar-check"></i> View in Full Events Schedule' +
        '</button>' +
      '</div>'
    );

    eventDetailsModal.classList.add('open');
    document.body.style.overflow = 'hidden';

    // Hook up buttons inside the modal
    const registerTrigger = eventModalBody.querySelector('.modal-register-trigger-btn');
    if (registerTrigger) {
      registerTrigger.addEventListener('click', () => {
        showToast('Registration for ' + event.eventName + ' confirmed! Details saved.');
        closeEventModal();
      });
    }

    const jumpEventsBtn = eventModalBody.querySelector('.modal-jump-events-btn');
    if (jumpEventsBtn) {
      jumpEventsBtn.addEventListener('click', () => {
        closeEventModal();
        window.location.hash = '#/events';
        setTimeout(() => {
          if (clubFilterSelect) {
            clubFilterSelect.value = event.clubName;
            filterEvents();
          }
        }, 120);
      });
    }
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
  // 6. POPULATE CLUBS (#/club) (Only REC Animated Logo Button with Mouse Effects)
  // ==========================================================================
  const clubsContainer = document.getElementById('nist-clubs-container');
  const clubFilterSelect = document.getElementById('event-club-filter');

  function renderClubs() {
    if (!clubsContainer) return;
    const clubs = (typeof CLUBS_DATA !== 'undefined' && Array.isArray(CLUBS_DATA)) ? CLUBS_DATA : [];

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

    const recClub = clubs[0];
    const logoUrl = recClub.logo || 'assets/images/rec_club_logo.png';

    clubsContainer.innerHTML = (
      '<div class="rec-interactive-stage reveal-scale">' +
        '<div class="rec-button-orb" id="rec-interactive-button" role="button" tabindex="0" aria-label="View Event Details" data-club-name="' + recClub.name + '">' +
          '<div class="rec-ring-outer"></div>' +
          '<div class="rec-ring-middle"></div>' +
          '<div class="rec-ring-inner"></div>' +
          '<div class="rec-specular-light" id="rec-specular-light"></div>' +
          '<div class="rec-ambient-aura"></div>' +
          '<div class="rec-logo-core" id="rec-logo-core">' +
            '<img src="' + logoUrl + '" alt="REC Logo" class="rec-emblem-img" draggable="false">' +
          '</div>' +
          '<div class="rec-pulse-pill">' +
            '<i class="fa-solid fa-bolt"></i>' +
            '<span>Event Details</span>' +
          '</div>' +
        '</div>' +
      '</div>'
    );

    clubsContainer.classList.add('single-club-view');
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

    // Attach 3D tilt & mouse specular highlight interaction
    const recButton = document.getElementById('rec-interactive-button');
    const specularLight = document.getElementById('rec-specular-light');
    const logoCore = document.getElementById('rec-logo-core');

    if (recButton) {
      recButton.addEventListener('mousemove', (e) => {
        const rect = recButton.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -16;
        const rotateY = ((x - centerX) / centerX) * 16;

        recButton.style.transform = 'perspective(900px) rotateX(' + rotateX.toFixed(2) + 'deg) rotateY(' + rotateY.toFixed(2) + 'deg) scale3d(1.08, 1.08, 1.08)';

        if (specularLight) {
          specularLight.style.left = x + 'px';
          specularLight.style.top = y + 'px';
          specularLight.style.opacity = '1';
        }

        if (logoCore) {
          logoCore.style.transform = 'translateZ(35px) translate(' + ((x - centerX) * 0.08).toFixed(1) + 'px, ' + ((y - centerY) * 0.08).toFixed(1) + 'px)';
        }
      });

      recButton.addEventListener('mouseenter', () => {
        recButton.style.transition = 'transform 0.08s ease-out, box-shadow 0.25s ease';
      });

      recButton.addEventListener('mouseleave', () => {
        recButton.style.transition = 'transform 0.55s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.55s ease';
        recButton.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        if (specularLight) specularLight.style.opacity = '0';
        if (logoCore) logoCore.style.transform = 'translateZ(0px) translate(0px, 0px)';
      });

      recButton.addEventListener('click', () => {
        const matchedEvent = (typeof EVENTS_DATA !== 'undefined' ? EVENTS_DATA : []).find(ev => ev.clubName === recClub.name);
        if (matchedEvent) {
          openEventModal(matchedEvent);
        }
      });

      recButton.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          recButton.click();
        }
      });
    }
  }
  renderClubs();


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
      const imgUrl = event.image || 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&fit=crop';
      const venueStr = event.venue ? event.venue.trim() : 'NIST Campus';
      const dateStr = event.date ? new Date(event.date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Fest Day';
      const delayClass = 'delay-' + ((idx % 3) + 1);

      return (
        '<div class="nist-event-card reveal-scale ' + delayClass + '" data-event-id="' + event.id + '" style="cursor:pointer;">' +
          '<div class="event-thumb-wrap">' +
            '<img src="' + imgUrl + '" alt="' + event.eventName + '" class="event-thumb" onerror="this.src=\'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&fit=crop\'">' +
            '<span class="event-club-tag">' + (event.clubName || 'Sankalp Competition') + '</span>' +
          '</div>' +
          '<div class="event-info">' +
            '<div class="event-meta-row">' +
              '<span><i class="fa-regular fa-calendar"></i> ' + dateStr + '</span>' +
              '<span><i class="fa-solid fa-location-dot"></i> ' + venueStr + '</span>' +
            '</div>' +
            '<h3 class="event-heading">' + event.eventName + '</h3>' +
            '<p class="event-desc">' + (event.eventDescription || event.summary || 'Compete in this flagship symposium event and showcase your skills.') + '</p>' +
            '<div class="event-actions-row" style="display:flex; justify-content:space-between; align-items:center; width:100%;">' +
              '<span class="event-action-badge"><i class="fa-solid fa-trophy"></i> ' + (event.prizePool || 'Flagship Prize') + '</span>' +
              '<button class="btn btn-gold btn-sm view-event-modal-btn" data-event-id="' + event.id + '" style="padding:0.4rem 0.9rem; font-size:0.78rem;">Details &amp; Rules</button>' +
            '</div>' +
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
        (ev.clubName && ev.clubName.toLowerCase().includes(query));
      return matchClub && matchQuery;
    });

    renderEvents(filtered);
  }

  if (eventSearchInput) eventSearchInput.addEventListener('input', filterEvents);
  if (clubFilterSelect) clubFilterSelect.addEventListener('change', filterEvents);

  const initialEvents = (typeof EVENTS_DATA !== 'undefined' && Array.isArray(EVENTS_DATA)) ? EVENTS_DATA : [];
  renderEvents(initialEvents);


  // ==========================================================================
  // 7. POPULATE TEAMS (#/team) (With Graceful Empty State)
  // ==========================================================================
  const teamCardsContainer = document.getElementById('team-cards-container');
  const comTabs = document.querySelectorAll('.com-tab');

  function renderTeamCommittee(comName) {
    if (!teamCardsContainer) return;
    const members = TEAM_COMMITTEES[comName] || [];

    if (members.length === 0) {
      teamCardsContainer.innerHTML = (
        '<div class="empty-state-box reveal-scale">' +
          '<div class="empty-state-icon"><i class="fa-solid fa-id-card-clip"></i></div>' +
          '<h3 class="empty-state-title">' + comName + ' Committee</h3>' +
          '<p class="empty-state-desc">The designated leads and members for this committee will be announced soon.</p>' +
          '<span class="empty-state-badge"><i class="fa-solid fa-clock"></i> Awaiting Committee Roster</span>' +
        '</div>'
      );
      initScrollReveals(teamCardsContainer);
      return;
    }

    teamCardsContainer.innerHTML = members.map((m, idx) => {
      const delayClass = 'delay-' + ((idx % 4) + 1);
      return (
        '<div class="team-member-card reveal-scale ' + delayClass + '">' +
          '<div class="member-avatar-wrap">' +
            '<img src="' + m.avatar + '" alt="' + m.name + '" class="member-avatar" onerror="this.src=\'assets/images/Sankalp_Final_Logo_Transparent.png\'">' +
          '</div>' +
          '<h3 class="member-name">' + m.name + '</h3>' +
          '<span class="member-role">' + m.role + '</span>' +
          (m.phone ? ('<a href="tel:' + m.phone + '" class="member-phone"><i class="fa-solid fa-phone"></i> ' + m.phone + '</a>') : '') +
        '</div>'
      );
    }).join('');

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
