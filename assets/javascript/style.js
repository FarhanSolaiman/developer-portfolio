		$(window).scroll(function() {
		    if ($(this).scrollTop() >= 768) {      
		        $('#return-to-top').fadeIn(400);    // Fade in the arrow
		    } else {
		        $('#return-to-top').fadeOut(10);   // Else fade out the arrow
		    }
		});
		$('#return-to-top').click(function() {      // When arrow is clicked
		    $('body,html').animate({
		        scrollTop : 0                       // Scroll to top of body
		    }, 500);
		});

		
