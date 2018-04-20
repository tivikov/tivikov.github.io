$('.grid').masonry({
  // options
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer'
});

$(document).ready(function () {
  $('li').click(mixItUp);
  $('.grid').magnificPopup({
    delegate: '.grid-item:not(.hidden) a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
    }
  });

  function mixItUp() {
    
    var clicked = $(this).data('category');
    $('li').removeClass('active');
    $(this).addClass('active');
    if (clicked == "all") {
      $('.grid-item').removeClass('hidden');
      $('.grid').masonry();
      return false;
    }
    $('.grid-item').addClass('hidden');
    
    
    $('.grid-item[data-owner="'+clicked+'"]').removeClass('hidden');
    $('.grid').masonry();
    $('.grid').magnificPopup({
      delegate: '.grid-item:not(.hidden) a',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      }
    });
  }

  
})