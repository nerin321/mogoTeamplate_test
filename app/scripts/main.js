// Slick slider
$(document).ready(function () {
  $(".quote-container").slick({
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fa fa-chevron-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fa fa-chevron-right' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
        },
      },
    ],
  });
});

// menu toggle
const menuToggle = document.querySelector(".header-toggle");
const menuHeader = document.querySelector(".header-menu");
const expandClass = "is-expand";
menuToggle.addEventListener("click", function () {
  menuHeader.classList.add(expandClass);
});

window.addEventListener("click", function (e) {
  if (!menuHeader.contains(e.target) && !e.target.matches(".header-toggle")) {
    menuHeader.classList.remove(expandClass);
  }
});

// content expand
const accordionHeader = document.querySelectorAll(".wedo-accordion-header");
const accordionItem = document.querySelectorAll(".wedo-accordion");
const isActive = "isActive";
for (let i = 0; i < accordionHeader.length; i++)
  accordionHeader[i].addEventListener("click", function () {
    if (isActive in accordionItem[i].classList) {
      accordionItem[i].classList.remove(isActive);
    } else {
      accordionItem[i].classList.add(isActive);
    }
  });
