(function($) {
	$(document).ready(function() {
	$(window).scroll(function() {
	$('audio').each(function(){
		if ($(this).is(":in-viewport")) {
        $(this)[0].play();
		} else {
        $(this)[0].pause();
		}
	})	
	});
  });
}(jQuery));


