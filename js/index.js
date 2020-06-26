// Change navbar color on scroll
const nav = document.querySelector('.nav');

window.onscroll = () => {
  const top = window.scrollY;
  if (top >= home.offsetHeight * 0.6) nav.classList.add('nav--active');
  else nav.classList.remove('nav--active');
};
