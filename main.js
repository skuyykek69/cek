var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 20,
  effect: "fade",
  loop: true,
  speed: 300,
  mousewheel: {
    invert: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // animasi
  // Based off of the Dribbble from Remi Preher
  // https://dribbble.com/shots/3927697-Ghost

  // Read the tutorial here
  // https://braydoncoyer.dev/blog/not-so-spooky-ghost-with-html-and-css/
});

// carousel
