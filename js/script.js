"use strict"

const reviewsSwiper = document.querySelector('.swiper-reviews')

const swiper = new Swiper('.swiper-reviews', {
	autoHeight:true,
  loop: true,

  pagination: {
    el: '.swiper-pagination',
		clickable: true,
  },

});