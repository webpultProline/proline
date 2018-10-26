$(function() {

	



    $('select').styler();
    $('.catalog_filter select').styler();
    $('.slider').not('.slider-proline').slick({
      dots: true,
      nav: false,
      arrows: false,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 320,
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
      $('.product_slider').slick({
        dots: true,
        nav: true,
        arrows: true,
        infinity: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 320,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
         
        ]
      });

  $('.modal-slider').slick({
    dots: false,
    nav: true,
    arrows: true,
    infinity: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
     
    ]
  });
    if($(".dropped__form").length > 0){
      $(".dropped__form").mCustomScrollbar({
        theme:"dark",
        axis: 'y'
      });
    };

  if($("#rent-range").length > 0){
    $("#rent-range").ionRangeSlider({
      type: "double",
      min: 0,
      max: 100000,
      from: 0,
      to: 100000,
      step: 100,
      hide_min_max: true,
      hide_from_to: true,
      postfix: "$",
      force_edges: true,
      onChange:  function (data) {
        $('.from_to-start').val(data['from']+" Р");
        $('.from_to-end').val(data['to']+" Р");
      }
    });
  }



$('.submenu').on('click', function()  {
  $(this).toggleClass('active');
});
$('.js-view-all').on('click', function(e)  {
  e.preventDefault();
  $('.submenu').addClass('active');
});
$('.sort_filter a').on('click', function(e){
  e.preventDefault();
});
$('.view-more').on('click', function(e){
  if($(this).parent().find('.view-all').first().hasClass('active') == false){
    $(this).find('.show').text('Скрыть всё');
    $(this).parent().find('.view-all').first().addClass('active');
  } else {
    $(this).find('.show').text('Показать еще');
    $(this).parent().find('.view-all').first().removeClass('active');
  }
});

$('.more-products').on('click', function(e){
  e.preventDefault();
  $('.js-load-more').fadeIn();
});

$('.sort_filter button').on('click', function(e){
  e.preventDefault();
  $('.sort_filter button').removeClass('active');
  $(this).toggleClass('active');
});
$('.location_region span').on('click', function(e){
  e.preventDefault();
  $('.location_region span').removeClass('active');
  $(this).toggleClass('active');
});

$('.js-btn').on('click', function(e){
  e.preventDefault();
  if($(this).parent().find('.js-about').first().hasClass('active') == false){
    $(this).find('.show').text('Скрыть описание');
    $(this).parent().find('.js-about').first().addClass('active');
  } else {
    $(this).find('.show').text('Полное описание раздела');
    $(this).parent().find('.js-about').first().removeClass('active');
  }
});
$('.btn-send-request-form').click(function(){
		checkInputForModal('.form_area');
});
 

$('.qtyplus').click(function(e){
  e.preventDefault();
  var container = $(this).parents('.xQty');
  fieldName = $(this).attr('field');
  var currentVal = parseInt( container.children(".qtyValue").val() );
  var val2 = currentVal + 1;
  if (!isNaN(val2)) {
      container.children(".qtyValue").val(val2);
  } else {
      container.children(".qtyValue").val(0);
  }
});

$(".qtyminus").click(function(e) {
  e.preventDefault();
  var container = $(this).parents('.xQty');
  fieldName = $(this).attr('field');
  var currentVal = parseInt( container.children(".qtyValue").val() );
  if (!isNaN(currentVal) && currentVal > 1) {
      container.children(".qtyValue").val(currentVal - 1);
  } else {
      container.children(".qtyValue").val(1);
  }
});
$('.cart-slider').slick({
  dots: true,
  nav: true,
  arrows: true,
  infinity: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
   
  ]
});
$(".tab_item").not(":first").hide();
$(".tabs-delivery .tab").click(function() {
    $(".tabs-delivery .tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".tab_item").hide().eq($(this).index()).show();
}).eq(0).addClass("active");



$(".tab_item-map").not(":first").hide();
$(".wrapper-map .tab-map").click(function() {
	$(".wrapper-map .tab-map").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab_item-map").hide().eq($(this).index()).show();
}).eq(0).addClass("active");
});

