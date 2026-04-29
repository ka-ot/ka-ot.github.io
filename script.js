const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const year = document.querySelector("#current-year");
const mailLink = document.querySelector("#mail-link");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

if (mailLink) {
  const address = `${mailLink.dataset.user}@${mailLink.dataset.domain}`;
  mailLink.href = `mailto:${address}`;
  mailLink.textContent = address;
}
