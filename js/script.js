const navLinks = $('.controls a, .name').click(scrollToElement);

function scrollToElement (e) {
	e.preventDefault();
	$('html, body').animate({
		scrollTop: $(e.target.hash).offset().top
	}, 2000);
};
