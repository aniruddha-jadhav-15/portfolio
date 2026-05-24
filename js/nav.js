// Elements
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

// Event listeners
hamburgerIcon.addEventListener("click", openMenu);
navCloseIcon.addEventListener("click", closeMenu);

// Nav links — smooth scroll + close menu
navLinksList.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);
    targetSection.scrollIntoView({ behavior: "smooth" });
    closeMenu();
  });
});

// Active link on scroll
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    const top = section.offsetTop;
    const height = section.clientHeight;

    if (window.scrollY >= top - 200 && window.scrollY < top + height) {
      navLinksList.forEach((link) => link.classList.remove("active"));
      const activeLink = document.querySelector(
        `.nav__links a[href="#${section.id}"]`,
      );
      if (activeLink) activeLink.classList.add("active");
    }
  });
});
