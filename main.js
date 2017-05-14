/*(function($) {          
    $(document).ready(function(){                    
        $(window).scroll(function(){                          
            if ($(this).scrollTop() > 400) {
                $('.navbar.navbar-default').show(500);
            } else {
                $('.navbar.navbar-default').hide(500);
            }
        });
    });
})(jQuery);
/*http://redvinestudio.com/how-to-make-a-menu-fade-in-on-scroll-using-jquery/*/

function EasyPeasyParallax() {
	scrollPos = $(this).scrollTop();
	$('#me').css({
		'background-position' : '70% ' + (-scrollPos/4)+"px"
	});
	$('#try').css({
		'margin-top': (scrollPos/4)+"px",
		'opacity': 1-(scrollPos/350)
	});
}
$(document).ready(function(){
	$(window).scroll(function() {
		EasyPeasyParallax();
	});
});

$(window).on( 'scroll', function(){
   $('.navbar.navbar-default').fadeIn(14000);
});

$('#myAffix').affix({
  offset: {
    top: 100,
    bottom: function () {
      return (this.bottom = $('.footer').outerHeight(true))
    }
  }
});








