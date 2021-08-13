
$(function(){
 
$('.menu__btn').on('click', function(){
  $('.menu__list').toggleClass('menu__list--active')
})

 $('.heroes__slider-img').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.heroes__slider-text',
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/arrow-left.png" alt="img"></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/arrow-right.png" alt="img"></button>',
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: true,
          dots: false,
        }
      }
    ]
  });
  $('.heroes__slider-text').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.heroes__slider-img',
    fade: true,
    arrows: false,
  });
      
});