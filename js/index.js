const hamburer = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");
// список навигации который будет скрываться и открываться
if (hamburer) {
  hamburer.addEventListener("click", () => {
    navList.classList.toggle("open");
  });
}
// всплывающие окна
const popup = document.querySelector(".popup");
// само окно
const closePopup = document.querySelector(".popup-close");
// закрытие окна
if (popup) {
  closePopup.addEventListener("click", () => {
    popup.classList.add("hide-popup");
  });

  window.addEventListener("load", () => {
    setTimeout(() => {
      popup.classList.remove("hide-popup");
    }, 1000);
  });
}
