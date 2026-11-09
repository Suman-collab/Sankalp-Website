const CLUBS_DATA = [];
const EVENTS_DATA = [];
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
  // 3. EVENTS AMBIENT INTERACTIVITY (Interactive Cosmic Aura)
  // ==========================================================================
  const eventsView = document.getElementById('view-events');
  const eventsGlow = document.getElementById('events-interactive-glow');

  if (eventsView && eventsGlow) {
    eventsView.addEventListener('mousemove', (e) => {
      const rect = eventsView.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      eventsGlow.style.left = x + 'px';
      eventsGlow.style.top = y + 'px';
      eventsGlow.style.opacity = '1';
    });

    eventsView.addEventListener('mouseleave', () => {
      eventsGlow.style.opacity = '0';
    });
  }

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
  // 5. POPULATE CLUBS (#/club) (With Graceful Empty State)
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
          '<p class="empty-state-desc">The list of participating student clubs and chapters will be published soon. Stay tuned for updates!</p>' +
          '<span class="empty-state-badge"><i class="fa-solid fa-clock"></i> Awaiting New Club Uploads</span>' +
        '</div>'
      );
      initScrollReveals(clubsContainer);
      return;
    }

    clubsContainer.innerHTML = clubs.map((club, idx) => {
      const logoUrl = club.logo || 'assets/images/Sankalp_Final_Logo_Transparent.png';
      const webSocial = club.socials && club.socials.website ? '<a href="' + club.socials.website + '" target="_blank" class="club-social-btn" title="Website"><i class="fa-solid fa-globe"></i></a>' : '';
      const instaSocial = club.socials && club.socials.instagram ? '<a href="' + club.socials.instagram + '" target="_blank" class="club-social-btn" title="Instagram"><i class="fa-brands fa-instagram"></i></a>' : '';
      const linkedSocial = club.socials && club.socials.linkedin ? '<a href="' + club.socials.linkedin + '" target="_blank" class="club-social-btn" title="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>' : '';

      const presName = (club.president && club.president.name) ? club.president.name : 'Lead Coordinator';
      const presContact = (club.president && club.president.contact) ? '<a href="tel:' + club.president.contact + '" class="phone-link"><i class="fa-solid fa-phone"></i> ' + club.president.contact + '</a>' : '';

      const repName = (club.representative && club.representative.name) ? club.representative.name : '';
      const repContact = (club.representative && club.representative.contact) ? '<a href="tel:' + club.representative.contact + '" class="phone-link"><i class="fa-solid fa-phone"></i> ' + club.representative.contact + '</a>' : '';

      const repHtml = repName ? (
        '<div class="club-lead-entry">' +
          '<span class="lead-role">Representative:</span>' +
          '<span class="lead-name-phone">' + repName + ' ' + presContact + '</span>' +
        '</div>'
      ) : '';

      const delayClass = 'delay-' + ((idx % 3) + 1);

      return (
        '<div class="club-card reveal-scale ' + delayClass + '">' +
          '<div class="club-header">' +
            '<img src="' + logoUrl + '" alt="' + club.name + '" class="club-logo" onerror="this.src=\'assets/images/Sankalp_Final_Logo_Transparent.png\'">' +
            '<h3 class="club-name">' + club.name + '</h3>' +
          '</div>' +
          '<p class="club-desc">' + (club.description || 'Student club under NIST University driving technical and cultural excellence.') + '</p>' +
          '<div class="club-leads-box">' +
            '<div class="club-lead-entry">' +
              '<span class="lead-role">President:</span>' +
              '<span class="lead-name-phone">' + presName + ' ' + presContact + '</span>' +
            '</div>' +
            repHtml +
          '</div>' +
          '<div class="club-footer-actions">' +
            '<div class="club-socials">' + webSocial + instaSocial + linkedSocial + '</div>' +
            '<button class="btn btn-outline filter-by-club-btn" data-club-name="' + club.name + '" style="padding:0.45rem 1rem; font-size:0.8rem;">View Events</button>' +
          '</div>' +
        '</div>'
      );
    }).join('');

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

    document.querySelectorAll('.filter-by-club-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const clubName = btn.getAttribute('data-club-name');
        window.location.hash = '#/events';
        setTimeout(() => {
          if (clubFilterSelect) {
            clubFilterSelect.value = clubName;
            filterEvents();
          }
        }, 120);
      });
    });
  }
  renderClubs();


  // ==========================================================================
  // 6. POPULATE EVENTS (#/events) (With Graceful Empty State)
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
        '<div class="nist-event-card reveal-scale ' + delayClass + '">' +
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
            '<p class="event-desc">' + (event.eventDescription || 'Compete in this flagship symposium event and showcase your skills.') + '</p>' +
            '<div class="event-actions-row">' +
              '<span class="event-action-badge"><i class="fa-solid fa-trophy"></i> Flagship Competition</span>' +
            '</div>' +
          '</div>' +
        '</div>'
      );
    }).join('');

    initScrollReveals(eventsContainer);
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
