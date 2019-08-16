const hamburger = document.querySelector(".nav__hamburger");
const navbarMenu = document.querySelector(".nav__list");
const navbarLinks = document.querySelectorAll(".nav__list a");

function navbarTogglerClick() {
  hamburger.classList.toggle("active");
  navbarMenu.classList.toggle("active");
}

function navbarLinkClick(event) {
  smoothScroll(event);

  if (navbarMenu.classList.contains("active")) {
    hamburger.click();
  }
}

function smoothScroll(event) {
  event.preventDefault();
  const targetId =
    event.currentTarget.getAttribute("href") === "#"
      ? "header"
      : event.currentTarget.getAttribute("href");
  document.querySelector(targetId).scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", navbarLinkClick);
}
hamburger.addEventListener("click", navbarTogglerClick);
window.addEventListener("resize", e => {
  if (window.innerWidth > 991) {
    if (navbarMenu.classList.contains("active")) {
      hamburger.click();
    }
  }
});