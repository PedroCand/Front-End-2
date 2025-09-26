const menuToggle = document.getElementById("menuToggle");
const menuOptions = document.getElementById("menuOptions");
const iconOpen = menuToggle.querySelector(".icon-open");
const iconClose = menuToggle.querySelector(".icon-close");

let menuOpen = false;

menuToggle.addEventListener("click", () => {
  menuOpen = !menuOpen;

  if (menuOpen) {
    menuOptions.style.display = "block";   // mostra opções
    iconOpen.style.display = "none";       // esconde seta
    iconClose.style.display = "block";     // mostra X
    menuToggle.setAttribute("aria-expanded", "true");
  } else {
    menuOptions.style.display = "none";    // esconde opções
    iconOpen.style.display = "block";      // volta seta
    iconClose.style.display = "none";      // esconde X
    menuToggle.setAttribute("aria-expanded", "false");
  }
});
