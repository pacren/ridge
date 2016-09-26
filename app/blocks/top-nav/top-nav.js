import $ from 'jquery';

$('.nav_open, .nav_close').on('click', function () {
	$('.top-nav').toggleClass('is-open');
});

