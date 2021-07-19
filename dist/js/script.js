$(document).ready(function(){
    if ($('.music__slider-slider').length) {
        $('.music__slider-slider').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            adaptiveHeight: true,
            appendArrows: $('.music__header-flipping'),
            prevArrow: '<div><img src="images/arrow-left.svg"></div>',
            nextArrow: '<div><img src="images/arrow-right.svg"></div>'
          });
    }
    
});