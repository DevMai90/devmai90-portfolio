// Change navbar color on scroll
const nav = document.querySelector('.nav');
const navItems = document.querySelectorAll('.nav__link');

window.onscroll = () => {
  const top = window.scrollY;
  if (top >= home.offsetHeight * 0.6) {
    nav.classList.add('nav--active');
    navItems.forEach((item) => {
      item.classList.add('nav__link--active');
    });
  } else {
    nav.classList.remove('nav--active');
    navItems.forEach((item) => {
      item.classList.remove('nav__link--active');
    });
  }
};
