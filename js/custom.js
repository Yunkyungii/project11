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
        loop: true,
        slidesPerView: 3,
        spaceBetween: 32,
    });

    const AreaSlide = new Swiper('.area_slide', {
        loop: true,
        effect: "fade",
    });


    $('.area_info li').on('mouseenter', function (e) {
        e.preventDefault();
        const idx = $(this).index();
        $(this).addClass('on').siblings().removeClass('on')
        AreaSlide.slideTo(idx);
    })




    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        $('.scr_ev').each(function () {
            if (sct + $(window).innerHeight() - 200 > $(this).offset().top) {
                $(this).addClass('on')
            }
            else {
                $(this).removeClass('on')
            };

        })



    });




})