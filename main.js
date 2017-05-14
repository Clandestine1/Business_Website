/*(function($) {          
    $(document).ready(function(){                    
        $(window).scroll(function(){                          
            if ($(this).scrollTop() > 200) {
                $('.navbar.navbar-default').fadeIn(500);
            } else {
                $('.navbar.navbar-default').fadeOut(500);
            }
        });
    });
})(jQuery);
/*http://redvinestudio.com/how-to-make-a-menu-fade-in-on-scroll-using-jquery/*/

function EasyPeasyParallax() {
	scrollPos = $(this).scrollTop();
	$('#banner').css({
		'background-position' : '50% ' + (-scrollPos/4)+"px"
	});
	$('#bannertext').css({
		'margin-top': (scrollPos/4)+"px",
		'opacity': 1-(scrollPos/250)
	});
}
$(document).ready(function(){
	$(window).scroll(function() {
		EasyPeasyParallax();
	});
});




