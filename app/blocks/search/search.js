import $ from 'jquery';

const navLinks = $('.navbar__nav__link');
const searchInput = $('.search__input');

const hideNav = function () { navLinks.addClass('is-hide'); };
const showNav = function () { navLinks.removeClass('is-hide'); };

searchInput.on('focus', hideNav);
searchInput.on('focusout', showNav);
