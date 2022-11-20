document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger-control");
  const mainMenu = document.querySelector(".main-menu");
  const mainLinks = document.querySelectorAll(".main-menu a");

  window.addEventListener("resize", () => {
    mainMenu.classList.add("hide");
  });

  hamburger.addEventListener("click", (e) => {
    mainMenu.classList.toggle("hide");
    e.target.classList.toggle("menu-active");
  });

  mainLinks.forEach((mainLink) => {
    mainLink.addEventListener("click", () => {
      if (mainMenu.classList.contains("hide") != -1) {
        mainMenu.classList.toggle("hide");
      } else {
        return false;
      }
    });
  });
});
