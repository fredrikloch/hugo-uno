$(document).ready(function() {

  $('body').removeClass('no-js');

  $('a.blog-button').click(function() {
    	$('.content-wrapper__inner').css('display', 'block');
    if ($('.panel-cover').hasClass('panel-cover--collapsed')) return;
    currentWidth = $('.panel-cover').width();
    if (currentWidth < 960) {
      $('.panel-cover').addClass('panel-cover--collapsed');
      $('.content-wrapper').addClass('animated slideInRight');
    } else {
      $('.panel-cover').css('max-width',currentWidth);
      $('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 400, swing = 'swing', function() {} );
    }
  });

  if (window.location.hash && window.location.hash == "#blog") {
    $('.panel-cover').addClass('panel-cover--collapsed');
    	$('.content-wrapper__inner').css('display', 'block')
  }

  if (window.location.pathname.substring(0, 5) == "/tag/") {
    $('.panel-cover').addClass('panel-cover--collapsed');
    	$('.content-wrapper__inner').css('display', 'block')
  }

  $('.btn-mobile-menu').click(function() {
    $('.navigation-wrapper').toggleClass('visible animated bounceInDown');
    $('.btn-mobile-menu__icon').toggleClass('hidden');
    $('.btn-mobile-close__icon').toggleClass('hidden');
  });

  $('.navigation-wrapper .blog-button').click(function() {
    $('.navigation-wrapper').toggleClass('visible');
    $('.btn-mobile-menu__icon').toggleClass('hidden');
    $('.btn-mobile-close__icon').toggleClass('hidden');
  });
});


