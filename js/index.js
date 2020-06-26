// Change navbar color on scroll
const nav = document.querySelector('.nav');
const home = document.querySelector('#home');

window.onscroll = () => {
  const top = window.scrollY;
  console.log(top);
  if (top >= home.offsetHeight * 0.6) nav.classList.add('nav--active');
  else nav.classList.remove('nav--active');
};
