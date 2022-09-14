"use strict";

$(function () {
  console.log('Coding Home 您最好的程式家教');
  var swiperFeedback = new Swiper(".feedback-content", {
    cssMode: true,
    navigation: {
      nextEl: ".feedback-btn-next",
      prevEl: ".feedback-btn-prev"
    },
    pagination: {
      el: ".feedback-pagination",
      clickable: true
    }
  });
});
//# sourceMappingURL=all.js.map
