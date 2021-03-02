  //  start SWIPER skills

  var swiper = new Swiper('.skills__container', {
    spaceBetween: 30,
    slidesPerView: 9,
    loop: true,
    centeredSlides: false,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  });
  
//  end SWIPER  

 //  start SWIPER reviews

 var swiper = new Swiper('.reviews__container', {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: '.reviews__pagination',
    clickable: true,
  },
});
//  end SWIPER reviews

// start ACCORDION(FAQ) 

  // $(function () {

  //   $.fn.accordion = function () {
  //     const trigger = $(this).find('.accordion-trigger');
  //     const collapse = $(this).find('.accordion-collapse');

  //     $(trigger).each(function () {
  //       $(this).on('click', function () {
  //         $(this).siblings('.accordion-collapse').slideToggle();
  //         $(this).toggleClass('accordion-open');
  //         $(this).toggleClass('active');
  //         $(this).parent().siblings('.accordion-item').find('.accordion-trigger').removeClass('accordion-open');
  //         $(this).parent().siblings('.accordion-item').find('.accordion-collapse').slideUp();
  //       });
  //     });
  //   };

  //   $('.accordion').accordion();
 
  // });
  // end ACCORDION 

 
 