$(function () {

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0
            ? $('.header').addClass('on')
            : $('.header').removeClass('on')
    });

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


    const BenefitSlide = new Swiper('.benefit_slide', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 32,

    });


    $('.top_btn').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 600)
    });

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 2000 ? $('.top_btn').fadeIn('on') : $('.top_btn').fadeOut('on');
        //show, hide   fadeIn, fadeOut 으로 대체 가능
    });







})