import $ from 'jquery';
const buttonOpen = $('.search__open');
const buttonClose = $('.search_close');
const buttonSearch = $('.search__button');
const navLinks = $('.navbar__nav__link');
const dropResults = $('.search__drop');
const input = $('.search__input');

const toggleForm = function () {
	input.toggleClass('active');
	buttonClose.fadeToggle(100);
	buttonSearch.fadeToggle(100);
	buttonOpen.fadeToggle(100);
	navLinks.toggleClass('is-hide');
	dropResults.hide();
	input.focus().val('');
};

buttonOpen.on('click', toggleForm);
buttonClose.on('click', toggleForm);
