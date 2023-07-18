$(function () {

    const MainSlide = new Swiper('.main_slide', {
        loop: true,
        speed: 800,
        parallax: true,
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".arrows .right",
            prevEl: ".arrows .left",
        },
    });


    $('.arrows>*').on('click', function (e) {
        e.preventDefault();
        $(this).addClass('on').siblings().removeClass('on');
    })


    $('.main_content .con_list li').on('click', function (e) {
        e.preventDefault();
        let idx = $(this).index();
        $('.con_box figure').eq(idx).addClass('on').siblings().removeClass('on');
        $(this).addClass('on').siblings().removeClass('on');
    });

    const BenefitSlide = new Swiper('.benefit_slide', {
        slidesPerView: 3,
        spaceBetween: 32,
        loop: true,
    })

})