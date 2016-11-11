$(window).resize(function() {
	var h = $('#sidemenu').height(), offsetTop = 120;
	// Calculate the top offset
	$('.point-list-view').css('height', (h - offsetTop));
}).resize();


$(document).ready(function(){
	$('.point-list-view').resize();


});

