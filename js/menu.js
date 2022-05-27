// (() => {
//   const menuBtnRef = document.querySelector("[data-menu-button]");
//   const mobileMenuRef = document.querySelector("[data-menu]");

//   menuBtnRef.addEventListener("click", () => {
//     // const expanded =
//     //   menuBtnRef.getAttribute("aria-expanded") === "true" || false;

//     menuBtnRef.classList.toggle("is-open");
//     // menuBtnRef.setAttribute("aria-expanded", !expanded);

//     mobileMenuRef.classList.toggle("is-open");
//     document.body.classList.toggle("modal-open");
//   });
// })();

(() => {
  const refs = {
    openMenuBtn: document.querySelector("[data-menu-button-open]"),
    closeMenulBtn: document.querySelector("[data-menu-button-close]"),
    menu: document.querySelector("[data-menu]"),
  };

  refs.openMenuBtn.addEventListener("click", toggleModal);
  refs.closeMenulBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.menu.classList.toggle("is-open");
    document.body.classList.toggle("modal-open");
  }
})();