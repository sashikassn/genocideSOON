// JavaScript Document


// YTPlayer
    $(function(){
      $(".player").mb_YTPlayer();
    });


// supersized
jQuery(function($){
			$.supersized({
				
					// Functionality
					slideshow               :   1,			// Slideshow on/off
					autoplay				:	1,			// Slideshow starts playing automatically
					start_slide             :   1,			// Start slide (0 is random)
					stop_loop				:	1,			// Pauses slideshow on last slide
					random					: 	0,			// Randomize slide order (Ignores start slide)
					slide_interval          :   6000,		// Length between transitions
					transition              :   1, 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
					transition_speed		:	2000,		// Speed of transition
					new_window				:	1,			// Image links open in new window/tab
					pause_hover             :   0,			// Pause slideshow on hover
					keyboard_nav            :   1,			// Keyboard navigation on/off
					performance				:	2,			// 0-Normal, 1-Hybrid speed/quality, 2-Optimizes image quality, 3-Optimizes transition speed // (Only works for Firefox/IE, not Webkit)
					image_protect			:	1,			// Disables image dragging and right click with Javascript
															   
					// Size &amp; Position						   
					min_width		        :   0,			// Min width allowed (in pixels)
					min_height		        :   0,			// Min height allowed (in pixels)
					vertical_center         :   1,			// Vertically center background
					horizontal_center       :   1,			// Horizontally center background
					fit_always				:	0,			// Image will never exceed browser width or height (Ignores min. dimensions)
					fit_portrait         	:   1,			// Portrait images will not exceed browser height
					fit_landscape			:   0,			// Landscape images will not exceed browser width
															   
					// Components							
					slide_links				:	'false',	// Individual links for each slide (Options: false, 'number', 'name', 'blank')
					thumb_links				:	1,			// Individual thumb links for each slide
					thumbnail_navigation    :   0,			// Thumbnail navigation
					slides 					:  	[			// Slideshow Images
					
					{image : 'images/background/1.jpg', title : '', thumb : '', url : ''}
													
												]
					
				});
		    });
	

// menu animation
$(function(){
	
			$(".menu-animation .menu-bg").delay(6400).animate({
			   height: 120,
			   top: 0
			}, 1000);

});


// curtains
	$(document).ready(function(){

	$("#curtains").delay(4000).slideToggle(3000);
	$("#countdown").delay(7400).slideToggle(2000);
		
	});
	
	
// twitter ticker
      jQuery(function($){
        $("#ticker").tweet({
          username: "enihilo",
          page: 1,
          avatar_size: 0,
          count: 20,
          loading_text: "loading"
        }).bind("loaded", function() {
          var ul = $(this).find(".tweet_list");
          var ticker = function() {
            setTimeout(function() {
              ul.find('li:first').animate( {marginTop: '-70px'}, 500, function() {
                $(this).detach().appendTo(ul).removeAttr('style');
              });
              ticker();
            }, 8000);
          };
          ticker();
        });
      });
	  
	  
// twitter ticker settings
$(document).ready(function(){
        $(this).find(".tweet_list").list_ticker({
                speed: 8000,
                effect: 'fade' // fade, slide
        })             
})
	

// niceScroll
$(document).ready(function () {
    $("body").niceScroll({
       cursorborder: "1px solid #fff",
	   cursorborderradius: "0px",
	   zindex: "9999",
       cursorcolor: "#fff",
       background: "rgba(255, 255, 255, 0.1)",
       scrollspeed: "60",
       mousescrollstep: "40"
    });
});


// niceScroll || scrollbars resize
$("body").getNiceScroll().resize();


// function for the vertical scrolling effect
$(function() {
    $('.go-under, .go-way-up').bind('click',function(event){
        var $anchor = $(this);
 
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000,'easeInOutExpo');
        /*
        if you don't want to use the easing effects:
        $('html, body').stop().animate({
           scrollTop: $($anchor.attr('href')).offset().top
        }, 1000);
        */
        event.preventDefault();
    });
});


// map closer
function closerUp() {

    $(".top").animate({
        bottom: "15px"
    }, "slow", "swing", closerDown);

}

function closerDown() {

    $(".top").animate({
        bottom: "30px"
    }, "slow", "swing", closerUp);

}

$(document).ready(function() {

    closerUp();

});


// panel 1
$(document).ready(function() {
	// expander
	$("#open-1, #open-1-1").click(function(){
		$("div#the-panel-1").slideDown({
		duration: 600, 
		easing: "easeInOutQuart"});
		$("div#overlay").fadeIn({

		duration: 600, 
		easing: "easeInOutQuart"});
	});	
	
	// collapse
	$("#close-1").click(function(){
		$("div#the-panel-1").slideUp({
		duration: 600, 
		easing: "easeInOutQuart"});
		
		$("div#overlay").fadeOut(600, "easeInOutQuart", function(){
		});
	});
	
	// switcher
	$("#overlay").click(function () {
		$("div#the-panel-1").slideUp({
		duration: 600, 
		easing: "easeInOutQuart"});
		
		$("div#overlay").fadeOut(600, "easeInOutQuart", function(){
		});
	});	
});


// panel 2
$(document).ready(function() {
	// expander
	$("#open-2, #open-2-1").click(function(){
		$("div#the-panel-2").slideDown({
		duration: 600, 
		easing: "easeInOutQuart"});
		$("div#overlay").fadeIn({

		duration: 600, 
		easing: "easeInOutQuart"});
	});	
	
	// collapse
	$("#close-2").click(function(){
		$("div#the-panel-2").slideUp({
		duration: 600, 
		easing: "easeInOutQuart"});
		
		$("div#overlay").fadeOut(600, "easeInOutQuart", function(){
		});
	});
	
	// switcher
	$("#overlay").click(function () {
		$("div#the-panel-2").slideUp({
		duration: 600, 
		easing: "easeInOutQuart"});
		
		$("div#overlay").fadeOut(600, "easeInOutQuart", function(){
		});
	});	
});


// site loader
            $(window).load(function() {
                // $('body').css('overflow', 'hidden');
                $('.loader').fadeOut('slow');
            });
			

// mobile-detect
	var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };