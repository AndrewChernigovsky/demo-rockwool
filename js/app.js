"use strict";

//=require ../blocks/**/*.js
$(document).ready(function () {
  // open modal
  $('.js-open-swap').click(function () {
    $('.js-modal-swap').fadeIn();
    $('.js-mask').fadeIn();
    $('body').addClass('overflov');
  }); //close modal

  $('.js-mask, .js-modal-close').click(function () {
    $('.js-modal').fadeOut();
    $('.js-mask').fadeOut();
    $('body').removeClass('overflov');
  });
  var swiper = new Swiper(".swiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction"
    },
    loop: true,
    autoplay: true,
    navigation: {
      nextEl: ".slider-button-next"
    },
    mousewheel: true,
    keyboard: true
  });
  var swiperTechnogical = new Swiper(".swiper-technogical", {
    slidesPerView: 3,
    spaceBetween: 75,
    loop: false,
    autoplay: false,
    navigation: {
      nextEl: ".slider-technogical-button-next"
    },
    pagination: {
      clickable: true
    },
    mousewheel: true,
    keyboard: true
  });
});