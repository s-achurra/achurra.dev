const navLinks = $('.scroll, .name').click(scrollToElement);
const overlays = $('.overlay');
const modals = $('.modal');
const menuNav = $('.toggle-nav');
const controls = $('.controls');
let closeButtons;
let activeModal;

// smooth scroll

function scrollToElement(e) {
	e.preventDefault();
	$('html, body').animate({
		scrollTop: $(e.target.hash).offset().top
	}, 2000);
};

// modal

function openModal() {
	activeModal = $(`#${this.dataset.modal}`);
	activeModal.css('visibility', 'visible');
	activeModal.css('opacity', '1');
	closeButtons = $('.close').click(closeModals);
}

function closeModals() {
	activeModal.css('visibility', 'hidden');
	activeModal.css('opacity', '0');
}

// collapsed nav

function handleMenu(e) {
	e.preventDefault();
	const offset = $('nav').position().top + 90;
	controls.toggleClass('open-controls');
	$('.open-controls').css('top', offset +'px');
}

function hideMenuControls() {
	controls.removeClass('open-controls');
}

overlays.click(openModal);
menuNav.click(handleMenu);
controls.click(hideMenuControls);
