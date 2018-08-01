(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict

  function myResizeFunc() {  
             
	if ($(window).width() < 768) {
	    // do something for small screens
	    //  alert('small');
		$('.navbar-collapse').collapse('hide'); 
	}
	else if ($(window).width() >= 768 &&  $(window).width() <= 992) {
    	    // do something for medium screens
	    // alert('med');
		$('.navbar-collapse').collapse('show'); 
	}
	else if ($(window).width() > 992 &&  $(window).width() <= 1200) {
	    // do something for big screens
	    // alert('large');
		$('.navbar-collapse').collapse('show'); 
	}
	else  {
 	   // do something for huge screens
	   //   alert('dont konow');
		$('.navbar-collapse').collapse('show'); 
	}
        }
        function myCollapse() { $('.navbar-collapse').collapse('hide');  }
    	function formValidate() 	{ 
	if (grecaptcha.getResponse() == ""){ alert("You can't proceed!"); }
	 else { alert("Thank you"); }
				}
