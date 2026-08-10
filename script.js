// Kept intentionally small: this site works as a permanent static page with no accounts or backend.
document.querySelectorAll('.section-nav a').forEach((link) => {
  link.addEventListener('click', () => link.blur());
});
