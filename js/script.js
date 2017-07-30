const navLinks = $('.controls a, .name').click(scrollToElement);
const overlays = $('.overlay');
const modals = $('.modal');
let closeButtons;
let activeModal;

function scrollToElement (e) {
	e.preventDefault();
	$('html, body').animate({
		scrollTop: $(e.target.hash).offset().top
	}, 2000);
};

function openModal () {
	activeModal = $(`#${this.dataset.modal}`);
	activeModal.css('display', 'block');
	closeButtons = $('.close').click(closeModals);
}

function closeModals() {
	activeModal.css('display', 'none');
}

overlays.click(openModal);
