// ---- nav scrolled state + active link ----
const nav = document.getElementById('nav');
const navLinks = [...document.querySelectorAll('.nav-links a')];
const sections = navLinks.map(a => document.querySelector(a.getAttribute('href')));

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 30);
  document.getElementById('toTop').classList.toggle('show', window.scrollY > 600);

  // mark a section active once its top passes ~35% down the viewport
  const probe = window.scrollY + window.innerHeight * 0.35;
  let current = '';
  sections.forEach(sec => {
    if (sec && sec.offsetTop <= probe) current = '#' + sec.id;
  });

  // at (or very near) the bottom of the page, the last section wins —
  // short trailing sections can never reach the probe line otherwise
  const atBottom = window.innerHeight + window.scrollY >=
                   document.documentElement.scrollHeight - 4;
  if (atBottom) {
    const last = sections[sections.length - 1];
    if (last) current = '#' + last.id;
  }

  navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === current));
});

// ---- back to top ----
document.getElementById('toTop').addEventListener('click', () =>
  window.scrollTo({ top: 0, behavior: 'smooth' }));

// ---- scroll reveal ----
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.section, .pub-feature, .proj, .tl-item').forEach(el => {
  el.classList.add('reveal'); io.observe(el);
});

// ---- rotating keyword in hero ----
const words = [
  'vision-language models',
  'adversarial robustness',
  'prompt learning',
  'domain generalization',
  'hyperspectral imaging',
  'efficient adaptation'
];
const rot = document.getElementById('rotator');
let wi = 0;
function cycle() {
  rot.style.transition = 'opacity .35s ease, transform .35s ease';
  rot.style.opacity = '0';
  rot.style.transform = 'translateY(6px)';
  setTimeout(() => {
    wi = (wi + 1) % words.length;
    rot.textContent = words[wi];
    rot.style.opacity = '1';
    rot.style.transform = 'translateY(0)';
  }, 360);
}
setInterval(cycle, 2600);
