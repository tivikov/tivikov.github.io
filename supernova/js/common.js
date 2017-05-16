$(document).ready(function() {
	$('.main-head').owlCarousel({
		items: 1,
		margin: 10,
		navigation: true,
		autoPlay: 3000,
		navigationText: ['<i class = "fa fa-angle-left"></i>','<i class = "fa fa-angle-right"></i>'],
		dots: true,
		 responsive:{
	        0:{
	            items:1
	        },
	         600:{
           		 items:1
        	},
        	1000:{
            	items:1
        	}
   		 }
	})
	$('.preloader').delay(1000).fadeOut();
});