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

$(document).on('click','#sendbtn', function () {
	let name = $('#name').val();
	let email = $('#email').val();
	let number = $('#number').val();
	let message = $('#message').val();

	if (name.length == 0) {
	    $('#success').show();
		$('#success').css('color','#E24343');
		$('#success').html('Please fill up the required fields.');
		$('#success').delay(1500).fadeOut('slow');
	} else if(email.length == 0) {
	    $('#success').show();
		$('#success').css('color','#E24343');
		$('#success').html('Please fill up the required fields.');
		$('#success').delay(1500).fadeOut('slow');
	} else if(message.length == 0) {
	    $('#success').show();
		$('#success').css('color','#E24343');
		$('#success').html('Please fill up the required fields.');
		$('#success').delay(1500).fadeOut('slow');
	} else {
		$('#success').css('color','#58CB34');
		$('#success').html('Your message is successfully forwarded to my email. Thaank you.');
		$('#success').delay(3000).fadeOut('slow');
		$('#name').val('');
		$('#email').val('');
		$('#number').val('');
		$('#message').val('');
	}
});
