$(function () {


    $('#main').fullpage({
        anchors: ['main', 'sub01', 'sub02'],
        navigation: true,
        css3: false,
        responsiveWidth: 700,
        'afterLoad': function (anchorLink, index) {
            if (index == 1) {
                $('#header').removeClass('on');
            }
        },
        onLeave: function (idx, nidx, dir) {

            if (dir == 'down') {
                $('#header').addClass('on')
            }
        },

    });


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

        ;

    $('.area_slide').slick({
        arrows: false,
        asNavFor: '.info_slide',
        //autoplay: true,
    });

    $('.tab>li').on('click', function (e) {
        e.preventDefault();
        let idx = $(this).index();
        $('.area_slide').slick('slickGoTo', idx);
        $(this).addClass('on').siblings().removeClass('on');
    });

    $('.area_slide').on('init afterChange', function (e, s, c) {
        const current = $('.area_slide .slick-current');
        current.addClass('on').siblings().removeClass('on');
        $('.tab>li').eq(0).addClass('on');
        $('.tab>li').eq(c).addClass('on')
            .siblings().removeClass('on');
    });


    $('.info_slide').slick({
        arrows: false,
        asNavFor: '.area_slide',
    });



    const BenefitSlide = new Swiper('.benefit_slide', {
        loop: true,
        spaceBetween: 24,
        slidesPerView: "auto",
        //centeredSlides: true,
        //loopedSlides: 1,

    });


    $('.top_btn').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 600)
    });

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 2000 ? $('.top_btn').fadeIn('on') : $('.top_btn').fadeOut('on');
        //show, hide   fadeIn, fadeOut 으로 대체 가능
    });


    // 반응형
    $('.mo_btn').on('click', function () {
        $('.header .gnb').toggleClass('on');
    });



})