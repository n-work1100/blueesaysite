$(document).ready(function() {
	$('.burger').click(function(event) {
		$('.burger,.menu').toggleClass('active');
	});
});

new Swiper('.image-slider', {
	// Стрілки
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
});