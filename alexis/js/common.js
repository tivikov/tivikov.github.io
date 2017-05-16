
$(document).ready(function() {
	$(".focus-wrap").equalHeights();
	$(".price-capabilities").equalHeights();
	$('.preloader').delay(1000).fadeOut();
	$('#top-line-mnu').hide();
	$('.mnu-button').click(function() {
		$('#top-line-mnu').slideToggle();
	})
		var headerH = $('.top-line').outerHeight();
		$('#top-line-mnu').css("top", headerH)
	$(window).resize(function() {
		var headerH = $('.top-line').outerHeight();
		$('#top-line-mnu').css("top", headerH)
	})
	
	$('.owl-carousel').owlCarousel({
		items: 1,
		smartSpeed: 500,
		loop: true,
		autoplay: true,
		margin: 30
	});

	$(".top-line-mnu li a, .top-line-logo a, #top-line-mnu a").click(function(e) {
		e.preventDefault();
		var id = $(this).attr('href');
		var top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
		 $('#top-line-mnu').slideUp();

	})


});