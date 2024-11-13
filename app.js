'use strict;';

// Navigation Bar
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('right-[0]');
  hamburger.classList.toggle('close-outline');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.toggle('right-[0]');
    hamburger.classList.toggle('close-outline');
  });
});

// Scroll Up Button
const scrollUp = function () {
  const scrollUpBtn = document.getElementById('scroll-up');

  if (this.scrollY >= 250) {
    scrollUpBtn.classList.remove('-bottom-1/2');
    scrollUpBtn.classList.add('bottom-4');
  } else {
    scrollUpBtn.classList.add('-bottom-1/2');
    scrollUpBtn.classList.remove('bottom-4');
  }
};

window.addEventListener('scroll', scrollUp);

// Active Nav
const activeLink = () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  let current = 'home';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;

    if (this.scrollY >= sectionTop - 60) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(items => {
    items.classList.remove('active');

    if (items.href.includes(current)) {
      items.classList.add('active');
    }
  });
};

window.addEventListener('scroll', activeLink);

// Scroll reveal Animation
// const sr = ScrollReveal({
//   origin: 'top',
//   ditance: '60px',
//   duration: 2500,
//   delay: 300,
//   reset: true,
// });

// sr.reveal('.home__data', { origin: 'left' });
// sr.reveal('.home__image', { delay: 500, scale: 0.5, origin: 'top' });

// sr.reveal('.category__data');
// sr.reveal('.category__img', { interval: 100 });

const scroll = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  reset: true,
  delay: 300,
});

scroll.reveal('.home__data');
scroll.reveal('.home__image', { delay: 500, scale: 0.5 });
scroll.reveal('.category__data');
scroll.reveal('.category__img', { scale: 0.5 });
scroll.reveal('.menu__data');
scroll.reveal('.chef__data', { origin: 'left' });
scroll.reveal('.test__data', { origin: 'right' });
scroll.reveal('.about__data', { origin: 'left' });
scroll.reveal('.about__img');
scroll.reveal('.footer__data');
