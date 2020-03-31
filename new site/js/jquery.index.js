// JavaScript Document fades pictures 

$(document).ready(function() {
	//hide all the image except the first one
	$("#slider img:gt(0)").hide();
	
	setInterval(function()   {
	//get the current image - it is the visible one
	var current = $('#slider img:visible');
	
	//get the immediate next image after the current if exists, 
	//otherwise find the first one
	var next = current.next().length ? current.next() : $('#slider img:eq(0)');
	current.fadeOut(1000);
	//show the next one
	next.fadeIn(1000);
	}, 3000)
});