const promotion = document.querySelector('.promotion');
const buttonClosePromotion = document.querySelector('.button-close');

buttonClosePromotion.addEventListener('click', event => {
	promotion.classList.add('disabled');
});
