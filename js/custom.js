(function ($) {
    "use strict"

    //FIXED HEADER
    // $(window).scroll(function () {
    //   var sticky = $('#header'),
    //     scroll = $(window).scrollTop();

    //   if (scroll >= sticky.height()) sticky.addClass("fixed");
    //   else sticky.removeClass("fixed");
    // });
    $(".header-menu").on("hide.bs.dropdown", function () {
        $(".content-block").addClass("hide");
    }).on("show.bs.dropdown", function () {
        $(".content-block").removeClass('hide');
    });

    $(".program-categories").on("hide.bs.dropdown", function () {
        $(".content-block").addClass("hide");
    }).on("show.bs.dropdown", function () {
        $(".content-block").removeClass('hide');
    });

    // HOME SLICK
    $("#testimoni-slick").slick({
        dots: true,
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        centerMode: false,
        speed: 300,
        arrows: true,
        adaptiveHeight: false
    });

})(jQuery);
