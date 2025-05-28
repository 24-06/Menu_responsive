document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("nav-menu_visible");

      if (navMenu.classList.contains("nav-menu_visible")) {
        navToggle.setAttribute("aria-label", "Cerrar Menu");
      } else {
        navToggle.setAttribute("aria-label", "Abrir Menu");
      }
    });
  } else {
    console.error("No se encontraron los elementos .nav-toggle o .nav-menu");
  }
});