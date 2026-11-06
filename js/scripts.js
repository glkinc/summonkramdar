	$ = jQuery.noConflict();

	//HTML5 MARKUP
	document.createElement('main');	
	document.createElement('article');
    document.createElement('section');
    document.createElement('aside');
    document.createElement('hgroup');
    document.createElement('nav');
    document.createElement('header'); 
    document.createElement('footer');
    document.createElement('figure');
    document.createElement('figcaption'); 

	// JQUERY DOCUMENT READY FUNCTIONS
	$(document).ready(function()
	{
	
		//WOW
		new WOW().init();
	
		// MOBILE MENU
		$('.menuBtn').on('click', showPrimaryMenu);
				
		function showPrimaryMenu() {
			$('.mobileMenu').addClass('open');
			$('body').addClass('noscroll');
		}
		
		$('.closeBtn').on('click', hidePrimaryMenu);
		
		function hidePrimaryMenu() {
			$('.mobileMenu').removeClass('open');
			$('body').removeClass('noscroll');
		}
	
		// SCROLL FUNCTIONS
		$('.scroll').click(function(){
		    $('html, body').animate({
		        scrollTop: $( $.attr(this, 'href') ).offset().top -100
		    }, 500);
		    return false;
		});
		
		// SCROLL FUNCTIONS
        $('.mobileMenu ul li a').on('click', hidePrimaryMenu);
		
		
		// ACCORDIAN EXPAND
		$('.accordianTitle').on('click', function(){
		  var target = $(this).attr('rel');
		  $("#accordianBody"+target).slideToggle();
		});
				
		// LIGHTNING
		function lightning() {
			setInterval(function() {
				$("#hero").removeClass("flash");
			    setTimeout(function() {
			        $("#hero").addClass("flash");
			    }, 500);	
			}, 4000);
		}
		
		setTimeout(lightning, 2000);
		
	});
	
	var distance = $('div').offset().top + 200,
	    $window = $(window);
	
	$window.scroll(function() {
	    if ( $window.scrollTop() >= distance ) {
	        $('#header').addClass('solid');
	        $('#logoSmall').fadeIn();
	    } else {
		    $('#header').removeClass('solid');
		    $('#logoSmall').fadeOut();
	    }
	});	