const headerElem = document.querySelector(".js-header-menu");

window.addEventListener("scroll", () => {
  headerElem.classList.toggle("scrolled", window.scrollY > 10);
});
