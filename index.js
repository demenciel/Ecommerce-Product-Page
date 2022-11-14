$('.big-image').click(() => {
    $(".lightbox").css('display', 'flex');

    // quit lightbox
    $('.fa-times').click(() => {
        $(".lightbox").hide();
    })
});

$('.fa-close').click(()=> {
    $(".lightbox").hide("slow");
});

// swiper

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 5,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});

var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});

function changeImage(small, big) {
    if($(small).click()) {

    }
};



