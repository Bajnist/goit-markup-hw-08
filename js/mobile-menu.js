(() => {
  const refs = {
    openMenuBtn: document.querySelector(".mob-open"),
    closeMenuBtn: document.querySelector(".mob-close"),
    menu: document.querySelector(".mob-menu"),
    body: document.querySelector(".body"),
  };
  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);
  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");
  }
})();