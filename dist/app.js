document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger-control");
  const mainMenu = document.querySelector(".main-menu");
  const mainLinks = document.querySelectorAll(".main-menu a");

  // remove menu when activated on desktop view and screen is resized
  window.addEventListener("resize", () => {
    mainMenu.classList.add("hide");
  });

  hamburger.addEventListener("click", (e) => {
    mainMenu.classList.toggle("hide");
    // enlarge the hamburger trigger area behind the menu so it can be clicked away
    e.target.classList.toggle("menu-active");
  });

  // menu links close the menu parent after they have been triggered
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
