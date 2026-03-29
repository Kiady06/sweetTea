const burger = document.querySelector(".burger");
const nav = document.querySelector(".header-nav");

burger.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  burger.classList.toggle("open", isOpen);
  burger.setAttribute("aria-expanded", isOpen);
});

document.querySelectorAll(".header-list-links a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    burger.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
  });
});
