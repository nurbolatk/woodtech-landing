import "./swiper";
import "./assets/styles/variables.css";
import "./assets/styles/index.css";

const menuOpener = document.getElementById("menu-opener");
const menuCloser = document.getElementById("menu-closer");
const mobileMenu = document.getElementById("mobile-menu");

menuOpener?.addEventListener("click", () => {
  mobileMenu?.classList.remove("hidden");
});
menuCloser?.addEventListener("click", () => {
  mobileMenu?.classList.add("hidden");
});

const sendRequestButton = document.getElementById("send-request");
const modalOverlay = document.querySelector(
  ".modal-overlay"
) as HTMLDivElement | null;
const closeModalButton = document.getElementById("close-modal");

sendRequestButton?.addEventListener("click", () => {
  modalOverlay?.classList.add("open");
});

modalOverlay?.addEventListener("click", (e: MouseEvent) => {
  const { target } = e;
  if (target instanceof Element) {
    const isOutside = target.closest(".modal-card") === null;
    if (isOutside) {
      modalOverlay?.classList.remove("open");
    }
  }
});

closeModalButton?.addEventListener("click", (e) => {
  const { target } = e;
  if (target instanceof Element) {
    modalOverlay?.classList.remove("open");
  }
});

document.addEventListener("keyup", (e) => {
  if (e.key === "Escape") {
    if (modalOverlay?.classList.contains("open")) {
      modalOverlay?.classList.remove("open");
    }
  }
});
