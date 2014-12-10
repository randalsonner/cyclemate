jQuery(document).ready(function($) {

//cycle
$('#slides').cycle({
	fx: 'scrollHorz',
	slides: '.iphone',
	pager: '.stripes',
	next: '.next',
	prev: '.prev',
	pagerTemplate: '',
	paused: true, 
});

}); //END DOCUMENT