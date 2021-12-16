import Swiper, {
  Pagination,
  Navigation,
  Scrollbar,
  EffectFade,
  Autoplay,
  Keyboard,
} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/keyboard";
import "swiper/css/effect-fade";

Swiper.use([Navigation, Pagination, Scrollbar, EffectFade, Autoplay, Keyboard]);

const homeSwiper: Swiper = new Swiper(".home-slider", {
  // Optional parameters
  speed: 800,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  centeredSlides: true,
  autoplay: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "custom",
    renderCustom: (swiper, current, total) => {
      return `<p>
        <span class="font-bold">${current}</span> | <span class="font-light">${total}</span>
      </p>`;
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
    snapOnRelease: true,
  },

  // keyboard control
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});
