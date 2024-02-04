import gsap from 'gsap';
import './style.css';

const scroll = new LocomotiveScroll({
	el: document.querySelector('[data-scroll-container]'),
	smooth: true,
	repeat: true
});

const target = document.querySelector('#js-target');

scroll.scrollTo(target);

// hamburger menu
const menuBtn = document.querySelector('.hamburger');
menuBtn.addEventListener('click', function () {
	menuBtn.classList.toggle('active');
});
