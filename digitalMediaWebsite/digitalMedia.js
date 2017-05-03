$(document).ready(function(){
	$('.vidControls').mouseenter(function(){
		$(this).attr('controls', true);
	});

	$('.vidControls').mouseleave(function(){
		$(this).attr('controls', false);
	});
});