
// start back to top 
let btn = $('.button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
// end back to top 

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

// Anchor links  
$(document).ready(function(){
  $("#header-menu").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1500);
  });
});
// 

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

 
 