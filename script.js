// Kept intentionally small: this site works as a permanent static page with no accounts or backend.
document.documentElement.classList.add('js');

const sections = document.querySelectorAll('.section');
const hero = document.querySelector('.hero');

requestAnimationFrame(() => hero.classList.add('is-visible'));

const sectionObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.14 }
);

sections.forEach((section) => {
  if (section !== hero) sectionObserver.observe(section);
});

document.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => link.blur());
});
