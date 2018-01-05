$(document).ready(function () {

  if($('.round-text-up').length > 0) {
    $('.round-text-up').arctext({
      radius: 400,
      dir: 1
    });

    $('.round-text-down').arctext({
      radius: 400,
      dir: -1
    });
  }

  function mainText() {
    if($('.main-title, .vehicles-title').length > 0) {
      $('.main-title, .vehicles-title').fadeTo('slow', 1);
    }
  }

  function startText() {
    if($('.start__description').length > 0) {
      $('.start__description').fadeTo('slow', 1);
    }
  }

  function carImage() {
    if($('.start__image').length > 0) {
      $('.start__image').fadeTo('slow', 1);
    }
  }

  setTimeout(mainText, 2000);
  setTimeout(startText, 1700);
  setTimeout(carImage, 3000);

  $('.vehicle-item').on('click', function() {
      $('.vehicles-title').hide();
      $('.vehicle__properties').fadeOut();
      var i = $(this).index();
      $('.vehicle__properties').eq(i).fadeIn();
  })
});

$(window).on('load', function() {

  function preloader() {
    $('.loader-wrapper').fadeOut();
  }

  setTimeout(preloader, 1000);
})