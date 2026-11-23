// SKG Digital Solutions — site interactions
(function () {
  const header = document.querySelector('.header');
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');

  // Header shadow on scroll
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 10);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
  });
  links.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    })
  );

  // Reveal on scroll
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // Active nav link
  const navAnchors = [...links.querySelectorAll('a[href^="#"]:not(.btn)')];
  const sections = navAnchors.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  const spy = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navAnchors.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  sections.forEach(s => spy.observe(s));

  // "Request a demo" pre-selects the product in the form
  const interest = document.getElementById('interest');
  document.querySelectorAll('a[data-product]').forEach(a =>
    a.addEventListener('click', () => { interest.value = a.dataset.product; })
  );

  // Contact form → posts to data-endpoint (Web3Forms / Formspree) if set, otherwise opens the email client
  const form = document.getElementById('contactForm');
  const note = document.getElementById('formNote');
  const submitBtn = form.querySelector('button[type="submit"]');
  form.addEventListener('submit', async e => {
    e.preventDefault();
    if (form.botcheck && form.botcheck.checked) return; // spam bot filled the hidden field
    let valid = true;
    form.querySelectorAll('[required]').forEach(f => {
      const bad = !f.value.trim() || (f.type === 'email' && !/^\S+@\S+\.\S+$/.test(f.value));
      f.classList.toggle('invalid', bad);
      if (bad) valid = false;
    });
    if (!valid) {
      note.textContent = 'Please fill in your name, a valid email and a message.';
      note.className = 'form-note err';
      return;
    }
    const d = Object.fromEntries(new FormData(form));
    const endpoint = form.dataset.endpoint;

    if (endpoint) {
      const fd = new FormData(form);
      fd.set('subject', `Website enquiry: ${d.interest}`);
      fd.delete('botcheck');
      if (!fd.get('access_key')) fd.delete('access_key');
      submitBtn.disabled = true;
      note.textContent = 'Sending…';
      note.className = 'form-note';
      try {
        const res = await fetch(endpoint, { method: 'POST', body: fd, headers: { Accept: 'application/json' } });
        if (!res.ok) throw new Error(res.status);
        note.textContent = "Thanks! We've received your message and will reply within one business day.";
        note.className = 'form-note ok';
        form.reset();
      } catch (err) {
        note.innerHTML = 'Sorry, something went wrong. Please email us at <a href="mailto:info@skgdigitalsolutions.com">info@skgdigitalsolutions.com</a>.';
        note.className = 'form-note err';
      } finally {
        submitBtn.disabled = false;
      }
      return;
    }

    const subject = `Website enquiry: ${d.interest}`;
    const body = `Name: ${d.name}\nEmail: ${d.email}\nPhone: ${d.phone || '-'}\nInterested in: ${d.interest}\n\n${d.message}`;
    window.location.href = `mailto:info@skgdigitalsolutions.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    note.textContent = 'Thanks! Your email app should open with your message ready to send.';
    note.className = 'form-note ok';
    form.reset();
  });

  document.getElementById('year').textContent = new Date().getFullYear();
})();
