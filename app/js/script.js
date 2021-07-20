window.addEventListener('DOMContentLoaded', function () {
    let videos = document.querySelectorAll('.music__slider-item');

    videos.forEach(function(video) {
        video.addEventListener('click', function() {
            video.classList.add('ready');
            if (video.classList.contains('ready')) {
                return;
            }

            let src = video.dataset.src;

            video.insertAdjacentHTML('afterbegin', '<iframe src="' + src + '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
        });
    });
});

jQuery(function() {
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

    if ($('.biography__image-slider').length) {
        $('.biography__image-slider').slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            adaptiveHeight: true,
            
          });
    }
    
});