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

document.addEventListener(
  'DOMContentLoaded',
  () => {
    const sections = document.querySelectorAll('section');
    const menu_links = document.querySelectorAll('.nav__link');
    console.log(sections);
    console.log(menu_links);

    // functions to add and remove the in-view class from links as appropriate
    const makeActive = (link) =>
      menu_links[link].classList.add('nav__link--in-view');
    const removeActive = (link) =>
      menu_links[link].classList.remove('nav__link--in-view');
    const removeAllActive = () =>
      [...Array(sections.length).keys()].forEach((link) => removeActive(link));

    // change the active link a bit above the actual section
    const sectionMargin = 200;

    // keep track of the currently active link
    let currentActive = 0;

    window.addEventListener('scroll', () => {
      // check in reverse order so we find the last section
      // that's present - checking in non-reverse order would
      // report true for all sections up to and including
      // the section currently in view
      const current =
        sections.length -
        [...sections]
          .reverse()
          .findIndex(
            (section) => window.scrollY >= section.offsetTop - sectionMargin
          ) -
        1;

      // only if the section has changed
      // remove active class from all menu links
      // and then apply it to the link for the current section
      if (current !== currentActive) {
        removeAllActive();
        currentActive = current;
        makeActive(current);
      }
    });
  },
  false
);
