window.addEventListener('load', function() {
    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        effect: 'fade',
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // scrollbar: {
        //     el: '.swiper-scrollbar',
        //     clickable: true,
        // },
    });


})



// var swiper = new Swiper('.swiper-container', {
//     spaceBetween: 30,
//     centeredSlides: true,
//     autoplay: {
//         delay: 5000,
//         disableOnInteraction: false,
//     },
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
// });