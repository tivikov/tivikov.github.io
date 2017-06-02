$(document).ready(function (){
		
		if((window).innerWidth <= 992) {
			$(".top-line-mnu").hide();
			$(".hamburger").click(function () {
			$(".top-line-mnu").stop().slideToggle();
			$(this).toggleClass('active');
		})
		}
		$(window).resize(function() {
			if((window).innerWidth <= 992) {
				$(".top-line-mnu").slideUp();
			}

			else	
				$(".top-line-mnu").show();
		});

		$("#portfolio").mixItUp();
		$('.categories li').click(function() {
			$('.categories li').removeClass("active");
			$(this).addClass("active");
		});
	
	$('.preloader').fadeOut();
})
