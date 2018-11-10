// ANIMATE ON SCROLL
///////////////////////////////////////
AOS.init({
  // duration: 1500,
});

/////////////////////////////////////////
// NAVIGATION
/////////////////////////////////////////

// Sticky Nav BG Change
(function($) {
  'use strict';

  var $navbar = $('.nav'),
    y_pos = $navbar.offset().top,
    height = $navbar.height();

  //scroll top 0 sticky
  $(document).scroll(function() {
    var scrollTop = $(this).scrollTop();
    if (scrollTop > 0) {
      $navbar.addClass('sticky');
    } else {
      $navbar.removeClass('sticky');
    }
  });
})(jQuery, undefined);

// CLOSE MENU ON HAMBURGER CLICK
$('.menu').click(function() {
  $('#nav').toggleClass('open');
});

// CLOSE MENU ON LINK CLICK
$('.scroll').click(function() {
  $('input[type=checkbox]').click();
});

// SMOOTH SCROLL
var scrollLink = $('.scroll');

// Smooth scrolling
scrollLink.click(function(e) {
  e.preventDefault();
  $('body,html')
    .delay(300)
    .animate(
      {
        scrollTop: $(this.hash).offset().top
      },
      1200
    );
});

/////////////////////////////////////////
// SLIDER
/////////////////////////////////////////
var TIMEOUT = 6000;

var interval = setInterval(handleNext, TIMEOUT);

function handleNext() {
  var $radios = $('input[class*="slide-radio"]');
  var $activeRadio = $('input[class*="slide-radio"]:checked');

  var currentIndex = $activeRadio.index();
  var radiosLength = $radios.length;

  $radios.attr('checked', false);

  if (currentIndex >= radiosLength - 1) {
    $radios.first().attr('checked', true);
  } else {
    $activeRadio.next('input[class*="slide-radio"]').attr('checked', true);
  }
}

/////////////////////////////////////////
// SERVICES
/////////////////////////////////////////

// CATERING

// OVERLAY
$('.serv-box-content-btn-1')
  .mouseover(function() {
    $('.serv-box-content-overlay-1').css({
      transform: 'translateY(0)'
    });
  })
  .mouseout(function() {
    $('.serv-box-content-overlay-1').css({
      transform: 'translateY(400px)'
    });
  });

// IMAGE
$('.serv-box-content-btn-1')
  .mouseover(function() {
    $('.bot-content-cat-img').css({
      transform: 'scale(.2)',
      opacity: 0
    });
  })
  .mouseout(function() {
    $('.bot-content-cat-img').css({
      transform: 'scale(1)',
      opacity: 1
    });
  });

// SHOP

// OVERLAY
$('.serv-box-content-btn-2')
  .mouseover(function() {
    $('.serv-box-content-overlay-2').css({
      transform: 'translateY(0)'
    });
  })
  .mouseout(function() {
    $('.serv-box-content-overlay-2').css({
      transform: 'translateY(400px)'
    });
  });

// IMAGE
$('.serv-box-content-btn-2')
  .mouseover(function() {
    $('.bot-content-shop-img').css({
      transform: 'scale(.2)',
      opacity: 0
    });
  })
  .mouseout(function() {
    $('.bot-content-shop-img').css({
      transform: 'scale(1)',
      opacity: 1
    });
  });

// CLASSES

// OVERLAY
$('.serv-box-content-btn-3')
  .mouseover(function() {
    $('.serv-box-content-overlay-3').css({
      transform: 'translateY(0)'
    });
  })
  .mouseout(function() {
    $('.serv-box-content-overlay-3').css({
      transform: 'translateY(400px)'
    });
  });

// IMAGE
$('.serv-box-content-btn-3')
  .mouseover(function() {
    $('.bot-content-class-img').css({
      transform: 'scale(.2)',
      opacity: 0
    });
  })
  .mouseout(function() {
    $('.bot-content-class-img').css({
      transform: 'scale(1)',
      opacity: 1
    });
  });
