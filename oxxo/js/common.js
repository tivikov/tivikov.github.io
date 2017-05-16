$(document).ready(function() {

	$('.head-carousel').owlCarousel({
		items: 1,
		margin: 10,
		loop: true,
		stopOnHover: true,
		autoPlay: 5000,
		navigation: true,
		navigationText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		navigationClass: ['owl-prev','owl-next']
	})
	$('ul.sf-menu').superfish({
		cssArrows: false
	});
	$('.photos-about').owlCarousel(
	{
		items: 1,
		navigation: true,
		navigationText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		navigationClass: ['owl-prev','owl-next']
	})
	$('.team-item-desc').equalHeights();
});

