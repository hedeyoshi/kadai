var slider = new Swiper('.slider.swiper-container', {
  speed: 400,
  spaceBetween: 100,
  loop: true,
  navigation: {
    nextEl: '.slider .swiper-button-next',
    prevEl: '.slider .swiper-button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  }
});
var newItem = new Swiper('.newItem .swiper-container', {
  speed: 400,
  spaceBetween: 100,
  loop: true,
  navigation: {
    nextEl: '.newItem .swiper-button-next',
    prevEl: '.newItem .swiper-button-prev',
  }
});
