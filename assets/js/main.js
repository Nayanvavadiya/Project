document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger-icon");
  const navMenu = document.querySelector(".option-list");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
});
