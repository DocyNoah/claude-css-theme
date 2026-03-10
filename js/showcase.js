// Highlight current theme in nav
const currentFile = location.pathname.split('/').pop() || 'showcase-border-left.html';
const activeLink = document.querySelector('.tc-nav__links a[href="' + currentFile + '"]');
if (activeLink) activeLink.classList.add('active');

// Accordion toggle
document.querySelectorAll('.tc-accordion__header').forEach(header => {
  header.addEventListener('click', () => {
    header.closest('.tc-accordion').classList.toggle('open');
  });
});

// Tab switching
document.querySelectorAll('.tc-tabbed__tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const card = tab.closest('.tc-tabbed');
    card.querySelectorAll('.tc-tabbed__tab').forEach(t => t.classList.remove('tc-tabbed__tab--active'));
    card.querySelectorAll('.tc-tabbed__panel').forEach(p => p.classList.remove('tc-tabbed__panel--active'));
    tab.classList.add('tc-tabbed__tab--active');
    document.getElementById(tab.dataset.panel).classList.add('tc-tabbed__panel--active');
  });
});

// Counter animation
function animateCounters() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseFloat(el.dataset.count);
      const isFloat = target % 1 !== 0;
      const start = performance.now();
      function update(now) {
        const p = Math.min((now - start) / 1200, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = isFloat ? (eased * target).toFixed(1) : Math.round(eased * target);
        if (p < 1) requestAnimationFrame(update);
      }
      requestAnimationFrame(update);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('[data-count]').forEach(c => observer.observe(c));
}

// Bar animation
function animateBars() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      el.style.width = el.dataset.width;
      observer.unobserve(el);
    });
  }, { threshold: 0.3 });
  document.querySelectorAll('[data-width]').forEach(b => observer.observe(b));
}

// Donut chart animation
function animateDonutCharts() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const chart = entry.target;
      const value = parseFloat(chart.dataset.value);
      const ring = chart.querySelector('.tc-donut__ring');
      const offset = 314.16 - (value / 100) * 314.16;
      ring.style.transition = 'stroke-dashoffset 1.2s cubic-bezier(0.4, 0, 0.2, 1)';
      ring.style.strokeDashoffset = offset;
      observer.unobserve(chart);
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.tc-donut').forEach(c => observer.observe(c));
}

// Timeline gradient alignment — match line color to dot positions
function alignTimelineGradient() {
  document.querySelectorAll('.tc-timeline').forEach(tl => {
    const dots = tl.querySelectorAll('.tc-timeline__dot');
    if (dots.length < 2) return;
    const tlH = tl.scrollHeight;
    if (tlH === 0) return;
    const style = getComputedStyle(tl);
    const colorVars = ['--tl-c1','--tl-c2','--tl-c3','--tl-c4'];
    const colors = colorVars.map(v => style.getPropertyValue(v).trim()).filter(Boolean);
    if (colors.length === 0) return;
    // Calculate each dot's vertical center as % of timeline height
    const pcts = [];
    dots.forEach(dot => {
      const item = dot.closest('.tc-timeline__item');
      const dotCenter = item.offsetTop + dot.offsetTop + dot.offsetHeight / 2;
      pcts.push((dotCenter / tlH) * 100);
    });
    // Build gradient: solid at each dot, smooth transition between
    const stops = [];
    for (let i = 0; i < pcts.length; i++) {
      const c = colors[Math.min(i, colors.length - 1)];
      const p = pcts[i];
      if (i === 0) {
        stops.push(`${c} 0%`, `${c} ${p}%`);
      } else {
        stops.push(`${c} ${p}%`);
      }
      if (i === pcts.length - 1) {
        stops.push(`${c} 100%`);
      }
    }
    tl.style.setProperty('--tl-grad', `linear-gradient(to bottom, ${stops.join(', ')})`);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  animateCounters();
  animateBars();
  animateDonutCharts();
  // Delay slightly so layout is settled
  requestAnimationFrame(() => requestAnimationFrame(alignTimelineGradient));
});
