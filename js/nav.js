const hamburgerIcon = document.querySelector(".nav__hamburger");
const navLinks = document.querySelector(".nav__links");
const navCloseIcon = document.querySelector(".nav__close");
const navLinksList = document.querySelectorAll(".nav__links a");

// Error handling
if (!hamburgerIcon || !navLinks || !navCloseIcon) {
  console.error("Nav elements not found");
}

function openMenu() {
  navLinks.classList.add("nav--open");
  hamburgerIcon.style.display = "none";
  navCloseIcon.style.display = "block";
  document.body.style.overflow = "hidden";
}

function closeMenu() {
  navLinks.classList.remove("nav--open");
  hamburgerIcon.style.display = "block";
  navCloseIcon.style.display = "none";
  document.body.style.overflow = "auto";
}

hamburgerIcon.addEventListener("click", openMenu);
navCloseIcon.addEventListener("click", closeMenu);

navLinksList.forEach((link) => {
  link.addEventListener("click", closeMenu);
});
