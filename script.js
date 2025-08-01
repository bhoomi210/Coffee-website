const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    // Toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
});

//close menu when the close button is clicked!
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

//close menu when the navlink is closed
navLinks.forEach(link => {
  link.addEventListener("click", () => menuOpenButton.click());
});

//initialize swiper
const swiper = new Swiper('.slider-wrapper', { 
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  //responsive breakpoints
  breakpoints:{
    0:{
        slidesPerview: 1
    },
    768:{
        slidesPerview: 2
    },
    1024:{
        slidesPerview: 3
    }
  }
});