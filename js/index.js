const navScroll = () => {
  // Change navbar color on scroll
  const nav = document.querySelector('.nav');
  const navItems = document.querySelectorAll('.nav__link');
  const navList = document.querySelector('.nav__list');

  window.onscroll = () => {
    const top = window.scrollY;
    if (top >= home.offsetHeight * 0.35) {
      nav.classList.add('nav--active');
      navList.classList.add('nav__list--active');
      navItems.forEach((item) => {
        item.classList.add('nav__link--active');
      });
    } else {
      nav.classList.remove('nav--active');
      navList.classList.remove('nav__list--active');
      navItems.forEach((item) => {
        item.classList.remove('nav__link--active');
      });
    }
  };
};

navScroll();

const activeNavLink = () => {
  document.addEventListener(
    'DOMContentLoaded',
    () => {
      const sections = document.querySelectorAll('section');
      const menu_links = document.querySelectorAll('.nav__link');

      // functions to add and remove the in-view class from links as appropriate
      const makeActive = (link) =>
        menu_links[link].classList.add('nav__link--in-view');
      const removeActive = (link) =>
        menu_links[link].classList.remove('nav__link--in-view');
      const removeAllActive = () =>
        [...Array(sections.length).keys()].forEach((link) =>
          removeActive(link)
        );

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
        if (
          // Set last section to be active if at bottom of screen
          window.innerHeight + window.scrollY >=
          document.body.offsetHeight
        ) {
          removeAllActive();
          makeActive(sections.length - 1);
          currentActive = sections.length - 1;
        } else if (current !== currentActive) {
          removeAllActive();
          currentActive = current;
          makeActive(current);
        }
      });
    },
    false
  );
};

activeNavLink();

const navSlide = () => {
  const menuBtn = document.querySelector('.menu-btn');
  const menuBtnIcon = document.querySelector('.menu-btn__icon');
  const nav = document.querySelector('.nav__list');
  const navLinks = document.querySelectorAll('.nav__link');

  menuBtn.addEventListener('click', () => {
    if (menuBtnIcon.classList.contains('fa-bars')) {
      menuBtnIcon.classList.remove('fa-bars');
      menuBtnIcon.classList.add('fa-times');
    } else {
      menuBtnIcon.classList.remove('fa-times');
      menuBtnIcon.classList.add('fa-bars');
    }
    nav.classList.toggle('nav__list--menu');
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });
  });
};

navSlide();

const focusParent = () => {
  const cardList = document.querySelectorAll('.project-content__card-details');
  const cardLinks = document.querySelectorAll('.project-content__card-link');

  cardLinks.forEach((link, index) => {
    link.addEventListener('focus', () => {
      cardList[index].classList.add('element-focus');
      link.style.visibility = 'visible';
    });
    link.addEventListener('blur', () => {
      cardList[index].classList.remove('element-focus');
    });
  });
};

// using CSS focus-within instead
// focusParent();
