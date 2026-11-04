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

  if (video) {
    video.addEventListener('timeupdate', () => {
      if (video.duration && !isNaN(video.duration)) {
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
        video.muted = true;
        video.play().catch(() => startFallbackLoading());
      });
    }
  }

  function startFallbackLoading() {
    if (simulatedTimer) return;
    simulatedTimer = setInterval(() => {
      if (simulatedProgress < 99) {
        simulatedProgress += Math.floor(Math.random() * 8) + 4;
        if (simulatedProgress > 99) simulatedProgress = 99;
        updateHUDProgress(simulatedProgress);
      }
    }, 150);
  }
  startFallbackLoading();

  function closePreloader() {
    if (preloaderClosed) return;
    preloaderClosed = true;

    if (simulatedTimer) clearInterval(simulatedTimer);
    updateHUDProgress(100);

    preloader.classList.add('fade-out');
    document.body.classList.remove('is-loading');

    setTimeout(() => {
      preloader.style.display = 'none';
      if (video) video.pause();
    }, 850);
  }

  if (skipBtn) skipBtn.addEventListener('click', closePreloader);

  if (toggleAudioBtn && video) {
    toggleAudioBtn.addEventListener('click', () => {
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

  function replayPreloader() {
    preloaderClosed = false;
    simulatedProgress = 0;
    preloader.style.display = 'flex';
    preloader.classList.remove('fade-out');
    document.body.classList.add('is-loading');

    if (video) {
      video.currentTime = 0;
      video.play().catch(e => console.log(e));
    }
    updateHUDProgress(0);
    startFallbackLoading();
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
      if (hash === '/events') {
        const evVideo = targetView.querySelector('.events-bg-video');
        if (evVideo) evVideo.play().catch(() => {});
      }
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
  }

  window.addEventListener('hashchange', handleRoute);
  handleRoute();


  // ==========================================================================
  // 3. NAVBAR SCROLL & MOBILE TOGGLE
  // ==========================================================================
  const navbar = document.getElementById('navbar');
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
    });
  }


  // ==========================================================================
  // 4. LIVE COUNTDOWN TIMER
  // ==========================================================================
  const festDate = new Date();
  festDate.setDate(festDate.getDate() + 14);
  festDate.setHours(9, 0, 0, 0);

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
        '<div class="empty-state-box">' +
          '<div class="empty-state-icon"><i class="fa-solid fa-users-gear"></i></div>' +
          '<h3 class="empty-state-title">Clubs To Be Announced</h3>' +
          '<p class="empty-state-desc">The list of participating student clubs and chapters will be published soon. Stay tuned for updates!</p>' +
          '<span class="empty-state-badge">✦ Awaiting New Club Uploads</span>' +
        '</div>'
      );
      return;
    }

    clubsContainer.innerHTML = clubs.map(club => {
      const logoUrl = club.logo || 'assets/images/logo.png';
      const webSocial = club.socials && club.socials.website ? '<a href="' + club.socials.website + '" target="_blank" class="club-social-btn" title="Website"><i class="fa-solid fa-globe"></i></a>' : '';
      const instaSocial = club.socials && club.socials.instagram ? '<a href="' + club.socials.instagram + '" target="_blank" class="club-social-btn" title="Instagram"><i class="fa-brands fa-instagram"></i></a>' : '';
      const linkedSocial = club.socials && club.socials.linkedin ? '<a href="' + club.socials.linkedin + '" target="_blank" class="club-social-btn" title="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>' : '';

      const presName = (club.president && club.president.name) ? club.president.name : 'Lead Coordinator';
      const presContact = (club.president && club.president.contact) ? '<a href="tel:' + club.president.contact + '">(📞 ' + club.president.contact + ')</a>' : '';

      const repName = (club.representative && club.representative.name) ? club.representative.name : '';
      const repContact = (club.representative && club.representative.contact) ? '<a href="tel:' + club.representative.contact + '">(📞 ' + club.representative.contact + ')</a>' : '';

      const repHtml = repName ? (
        '<div class="club-lead-entry">' +
          '<span class="lead-role">Representative:</span>' +
          '<span class="lead-name-phone">' + repName + ' ' + repContact + '</span>' +
        '</div>'
      ) : '';

      return (
        '<div class="club-card">' +
          '<div class="club-header">' +
            '<img src="' + logoUrl + '" alt="' + club.name + '" class="club-logo" onerror="this.src=\'assets/images/sankalp_emblem.png\'">' +
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
  const regEventSelect = document.getElementById('reg-event');

  function renderEvents(items) {
    if (!eventsContainer) return;
    if (!items || items.length === 0) {
      eventsContainer.innerHTML = (
        '<div class="empty-state-box">' +
          '<div class="empty-state-icon"><i class="fa-solid fa-trophy"></i></div>' +
          '<h3 class="empty-state-title">Events To Be Revealed</h3>' +
          '<p class="empty-state-desc">The competition schedule, problem statements, and prize pools will be released shortly. Stay tuned for registrations!</p>' +
          '<span class="empty-state-badge">✦ Awaiting New Event Uploads</span>' +
        '</div>'
      );
      return;
    }

    eventsContainer.innerHTML = items.map(event => {
      const imgUrl = event.image || 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&fit=crop';
      const venueStr = event.venue ? event.venue.trim() : 'NIST Campus';
      const dateStr = event.date ? new Date(event.date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Fest Day';

      return (
        '<div class="nist-event-card">' +
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
              '<button class="btn btn-gold w-100 trigger-event-register-btn" data-event-name="' + event.eventName + '">Register Now</button>' +
            '</div>' +
          '</div>' +
        '</div>'
      );
    }).join('');

    // Update registration select options
    if (regEventSelect && items.length > 0) {
      regEventSelect.innerHTML = '<option value="">-- Choose Competition --</option>';
      items.forEach(ev => {
        const opt = document.createElement('option');
        opt.value = ev.eventName;
        opt.textContent = ev.eventName + (ev.clubName ? ' (' + ev.clubName + ')' : '');
        regEventSelect.appendChild(opt);
      });
      const passOpt = document.createElement('option');
      passOpt.value = 'All-Access Festival Pass';
      passOpt.textContent = 'All-Access Festival Pass (General Entry)';
      regEventSelect.appendChild(passOpt);
    }

    document.querySelectorAll('.trigger-event-register-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const name = btn.getAttribute('data-event-name');
        openRegisterModal(name);
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
        '<div class="empty-state-box">' +
          '<div class="empty-state-icon"><i class="fa-solid fa-id-card-clip"></i></div>' +
          '<h3 class="empty-state-title">' + comName + ' Committee</h3>' +
          '<p class="empty-state-desc">The designated leads and members for this committee will be announced soon.</p>' +
          '<span class="empty-state-badge">✦ Awaiting Committee Roster</span>' +
        '</div>'
      );
      return;
    }

    teamCardsContainer.innerHTML = members.map(m => (
      '<div class="team-member-card">' +
        '<div class="member-avatar-wrap">' +
          '<img src="' + m.avatar + '" alt="' + m.name + '" class="member-avatar" onerror="this.src=\'assets/images/sankalp_emblem.png\'">' +
        '</div>' +
        '<h3 class="member-name">' + m.name + '</h3>' +
        '<span class="member-role">' + m.role + '</span>' +
        (m.phone ? ('<a href="tel:' + m.phone + '" class="member-phone"><i class="fa-solid fa-phone"></i> ' + m.phone + '</a>') : '') +
      '</div>'
    )).join('');
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
        '<div class="empty-state-box">' +
          '<div class="empty-state-icon"><i class="fa-solid fa-images"></i></div>' +
          '<h3 class="empty-state-title">Gallery Moments</h3>' +
          '<p class="empty-state-desc">Festival snapshots, video highlights, and memories will be showcased here once the event kicks off.</p>' +
          '<span class="empty-state-badge">✦ Photos Coming Soon</span>' +
        '</div>'
      );
    } else {
      galleryContainer.innerHTML = GALLERY_PHOTOS.map((src, i) => (
        '<div class="gallery-item" data-src="' + src + '">' +
          '<img src="' + src + '" alt="Sankalp Photo ' + (i+1) + '" class="gallery-photo" loading="lazy">' +
          '<div class="gallery-overlay">' +
            '<i class="fa-solid fa-expand"></i>' +
          '</div>' +
        '</div>'
      )).join('');

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
  // 10. REGISTRATION MODAL CONTROLLER
  // ==========================================================================
  const registerModal = document.getElementById('register-modal');
  const modalClose = document.getElementById('modal-close');
  const regForm = document.getElementById('sankalp-registration-form');
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');

  function openRegisterModal(preselectedEvent = '') {
    if (preselectedEvent && regEventSelect) {
      let exists = false;
      for (let i = 0; i < regEventSelect.options.length; i++) {
        if (regEventSelect.options[i].text.includes(preselectedEvent) || regEventSelect.options[i].value.includes(preselectedEvent)) {
          regEventSelect.selectedIndex = i;
          exists = true;
          break;
        }
      }
      if (!exists) {
        const newOpt = document.createElement('option');
        newOpt.value = preselectedEvent;
        newOpt.textContent = preselectedEvent;
        newOpt.selected = true;
        regEventSelect.appendChild(newOpt);
      }
    }
    if (registerModal) registerModal.classList.add('open');
  }

  document.querySelectorAll('.open-register-btn').forEach(btn => {
    btn.addEventListener('click', () => openRegisterModal());
  });

  if (modalClose && registerModal) {
    modalClose.addEventListener('click', () => {
      registerModal.classList.remove('open');
    });
    registerModal.addEventListener('click', (e) => {
      if (e.target === registerModal) registerModal.classList.remove('open');
    });
  }

  if (regForm) {
    regForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('reg-name').value;
      const email = document.getElementById('reg-email').value;
      const phone = document.getElementById('reg-phone').value;
      const college = document.getElementById('reg-college').value;
      const ev = (regEventSelect && regEventSelect.value) ? regEventSelect.value : 'General Festival Entry';
      const teamSize = document.getElementById('reg-team-size')?.value || '1';
      const accommodation = document.querySelector('input[name="acc"]:checked')?.value || 'no';
      const passId = 'NIST-SKP-' + Math.floor(1000 + Math.random() * 9000);

      registerModal.classList.remove('open');
      regForm.reset();

      showToast('⚡ Registration Confirmed! Pass ID: ' + passId + ' generated for ' + name + ' (' + ev + '). See you at NIST Sankalp!');
    });
  }

  function showToast(msg) {
    if (!toast || !toastMessage) return;
    toastMessage.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 5500);
  }

});
