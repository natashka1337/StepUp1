//слайдер
const slider1 = document.querySelector('#glide_1');
if (slider1) {
  new Glide(slider1, {
    type: 'carousel',
    // указывает на то, что слайдер циклический, т.е. после последнего слайда переключаем на первый
    startAt: 0,
    gap: 0,
    // расстояние между слайдами
    hoverpause: true,
    // остановка возпроизведения слайдов при навидении
    perView: 1,
    // отоброжение за раз 1 слайда
    animationDuration: 800,
    // длительность анимации переключения
    animationTimingFunc: 'linear',
  }).mount();
}
