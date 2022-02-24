$(function() {
    var swiperH = new Swiper('.swiper-container-h', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        spaceBetween: 50,
        // paginationClickable: true,
        // nextButton: '.swiper-button-next',
        // prevButton: '.swiper-button-prev'
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        effect: 'fade',
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    });
    var swiperV = new Swiper('.swiper-container-v', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        direction: 'vertical',
        spaceBetween: 50,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        effect: 'fade',
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
        // paginationClickable: true,
        // nextButton: '.swiper-button-next',
        // prevButton: '.swiper-button-prev'
    });
});