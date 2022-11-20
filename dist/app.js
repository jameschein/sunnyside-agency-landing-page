document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger-control");
  const mainMenu = document.querySelector(".main-menu");
  const mainLinks = document.querySelectorAll(".main-menu a");

  hamburger.addEventListener("click", (e) => {
    mainMenu.classList.toggle("hide");
    e.target.classList.toggle("menu-active");
  });

  mainLinks.forEach((mainLink) => {
    mainLink.addEventListener("click", () => {
      mainMenu.classList.toggle("hide");
    });
  });
});
