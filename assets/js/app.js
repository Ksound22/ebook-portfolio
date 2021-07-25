// Nav hamburgerburger selections
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

// Scroll to top selection
const scrollUp = document.querySelector("#scroll-up");

// Form selections

// Dark theme selections

// Hamburger menu function
burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

// scroll to top function
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});


// Dark theme toggle function

// Smooth scroll
