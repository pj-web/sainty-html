// window.addEventListener('DOMContentLoaded', function () {
//     let videos = document.querySelectorAll('.music__slider-item');

//     videos.forEach(function(video) {
//         video.addEventListener('click', function() {
//             video.classList.add('ready');
//             if (video.classList.contains('ready')) {
//                 return;
//             }

//             let src = video.dataset.src;

//             video.insertAdjacentHTML('afterbegin', '<iframe src="' + src + '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
//         });
//     });
// });

function findVideos() {
    let videos = document.querySelectorAll('.video');

    for (let i = 0; i < videos.length; i++) {
        setupVideo(videos[i]);
    }
}

function setupVideo(video) {
    let link = video.querySelector('.video__link');
    let media = video.querySelector('.video__media');
    let button = video.querySelector('.video__button');
    let id = parseMediaURL(media);

    video.addEventListener('click', () => {
        let iframe = createIframe(id);

        link.remove();
        button.remove();
        video.appendChild(iframe);
    });

    link.removeAttribute('href');
    video.classList.add('video--enabled');
}

function parseMediaURL(media) {
    let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
    let url = media.src;
    let match = url.match(regexp);

    return match[1];
}

function createIframe(id) {
    let iframe = document.createElement('iframe');

    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('allow', 'autoplay');
    iframe.setAttribute('src', generateURL(id));
    iframe.classList.add('video__media');

    return iframe;
}

function generateURL(id) {
    let query = '?rel=0&showinfo=0&autoplay=1';

    return 'https://www.youtube.com/embed/' + id + query;
}

findVideos();

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