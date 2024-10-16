// export const navigateSlider = switchLists => {
// 	const arrowLeft = document.querySelector('.arrow-left');
// 	const arrowRight = document.querySelector('.arrow-right');
// 	const switchWrap = document.querySelector('.switch-wrap');
// 	const switchItems = switchLists.querySelectorAll('.switch__item');
// 	const switchCard = switchLists.querySelector('.switch-card');

// 	const count = 1;
// 	const gap = parseInt(
// 		window.getComputedStyle(switchLists).getPropertyValue('column-gap')
// 	);

// 	const widthCard = switchCard.offsetWidth;
// 	const widthWrap = switchWrap.offsetWidth;
// 	const maxWidthContainer =
// 		(widthCard + gap) * switchItems.length - widthWrap + gap;
// 	let position = 0;
// 	switchLists.style.transform = `translateX(${position}px)`;

// 	function moveNextSlide() {
// 		position -= (widthCard + gap) * count;
// 		position = Math.max(position, -maxWidthContainer);
// 		console.log(position);
// 		switchLists.style.transform = `translateX(${position}px)`;
// 	}

// 	function movePrevSlide() {
// 		position += (widthCard + gap) * count;
// 		position = Math.min(position, 0);

// 		switchLists.style.transform = `translateX(${position}px)`;
// 	}

// 	arrowRight.addEventListener('click', moveNextSlide);
// 	arrowLeft.addEventListener('click', movePrevSlide);
// };
