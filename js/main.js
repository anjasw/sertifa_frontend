(function($) {
  "use strict"

  // NAVIGATION
  var responsiveNav = $('#responsive-nav'),
    catToggle = $('#responsive-nav .category-nav .category-header'),
    catList = $('#responsive-nav .category-nav .category-list'),
    menuToggle = $('#responsive-nav .menu-nav .menu-header'),
    menuList = $('#responsive-nav .menu-nav .menu-list');

  catToggle.on('click', function() {
    menuList.removeClass('open');
    catList.toggleClass('open');
  });

  menuToggle.on('click', function() {
    catList.removeClass('open');
    menuList.toggleClass('open');
  });

  $(document).click(function(event) {
    if (!$(event.target).closest(responsiveNav).length) {
      if (responsiveNav.hasClass('open')) {
        responsiveNav.removeClass('open');
        $('#navigation').removeClass('shadow');
      } else {
        if ($(event.target).closest('.nav-toggle > button').length) {
          if (!menuList.hasClass('open') && !catList.hasClass('open')) {
            menuList.addClass('open');
          }
          $('#navigation').addClass('shadow');
          responsiveNav.addClass('open');
        }
      }
    }
  });
  $('.slick-product').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  // HOME SLICK
  $("#home-slick").slick({
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "300px",
    speed: 300,
    arrows: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1
        }
      }
    ]
  });

  // PRODUCTS SLICK
  $('#product-slick-1').slick({
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    infinite: true,
    speed: 300,
    dots: true,
    arrows: false,
    appendDots: '.product-slick-dots-1',
    responsive: [{
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });

  $('#product-slick-2').slick({
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    infinite: true,
    speed: 300,
    dots: true,
    arrows: false,
    appendDots: '.product-slick-dots-2',
    responsive: [{
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });

  // PRODUCT DETAILS SLICK
  $('#product-main-view').slick({
    infinite: true,
    speed: 300,
    dots: false,
    arrows: true,
    fade: true,
    asNavFor: '#product-view',
  });

  $('#product-view').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    focusOnSelect: true,
    asNavFor: '#product-main-view',
  });

  // PRODUCT ZOOM
  $('#product-main-view .product-view').zoom();

  // PRICE SLIDER
  var slider = document.getElementById('price-slider');
  if (slider) {
    noUiSlider.create(slider, {
      start: [1, 999],
      connect: true,
      tooltips: [true, true],
      format: {
        to: function(value) {
          return value.toFixed(2) + '$';
        },
        from: function(value) {
          return value
        }
      },
      range: {
        'min': 1,
        'max': 999
      }
    });
  }

})(jQuery);
