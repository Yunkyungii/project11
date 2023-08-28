$(function () {


    $('#main').fullpage({
        responsiveWidth: 1000,
        anchors: ['main', 'sc01', 'sc02', 'sc03', 'sc04'],
        navigation: true,
        css3: false,
        responsiveWidth: 700,
        'afterLoad': function (anchorLink, index) {
            if (index == 1) {
                $('#header').removeClass('on');
                $('.top_btn').hide()
            }
            else {
                $('#header').addClass('on');
                $('.top_btn').show()
            }

        },
        onLeave: function (idx, nidx, dir) {

            if (dir == 'up') {
                $('#header').slideDown(400)
            }
            else {
                $('#header').slideUp()
            }

        },

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
    });


    const AreaSlide = new Swiper('.area_slide', {
        loop: true,
        effect: "fade",
        pagination: {
            el: "#main_area .dots",
        },
    });


    $('.area_info li').on('mouseenter', function (e) {
        e.preventDefault();
        const idx = $(this).index();
        $(this).addClass('on').siblings().removeClass('on')
        AreaSlide.slideTo(idx);
    })

    // $('.area_slide').on('init afterChange', function (e, s, c) {
    //     const current = $('.area_slide .slick-current');
    //     current.addClass('on').siblings().removeClass('on');
    //     $('.tab>li').eq(0).addClass('on');
    //     $('.tab>li').eq(c).addClass('on')
    //         .siblings().removeClass('on');
    // });


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
        pagination: {
            el: ".title .page",
            type: "fraction",
        },
        // pagination: {
        //     el: "#main_benefit .title .bar",
        //     type: "progressbar",
        // }, 슬라이드 하나당 하나의 pagination 제공 -> 슬라이드 2개를 만들것
        navigation: {
            nextEl: "#main_benefit .title .right",
            prevEl: "#main_benefit .title .left",
        },

    });

    var barSwiper = new Swiper(".benefit_slide", {
        loop: true,
        spaceBetween: 24,
        slidesPerView: "auto",
        pagination: {
            el: "#main_benefit .title .bar",
            type: "progressbar",
        },
    });

    BenefitSlide.controller.control = barSwiper;

    $('#footer .family_site .down').on('click', function (e) {
        e.preventDefault();
        $('.family_site').toggleClass('on');
    })


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