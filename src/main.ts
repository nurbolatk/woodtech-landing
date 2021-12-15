import "./assets/styles/variables.css";
import "./assets/styles/index.css";

import "./swiper";

const menuOpener = document.getElementById("menu-opener");
const menuCloser = document.getElementById("menu-closer");
const mobileMenu = document.getElementById("mobile-menu");

menuOpener?.addEventListener("click", () => {
  mobileMenu?.classList.remove("hidden");
});
menuCloser?.addEventListener("click", () => {
  mobileMenu?.classList.add("hidden");
});
