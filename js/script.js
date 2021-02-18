
    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        slidesPerView: 4,
        slidesPerGroup: 2,
        spaceBetween: 40,
        loop: true,
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                slidesPerGroup: 1,
            },
            600: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            1280: {
                slidesPerView: 4,
                spaceBetween: 40
            }
        }
    });