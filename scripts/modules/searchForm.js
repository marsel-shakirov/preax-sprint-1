export function searchForm(form, input, searchIcon, buttonReset) {
	const showButtonReset = () => {
		searchIcon.classList.add('visibility-hidden');
		buttonReset.classList.remove('visibility-hidden');
	};

	const hideButtonReset = () => {
		searchIcon.classList.remove('visibility-hidden');
		buttonReset.classList.add('visibility-hidden');
	};

	input.addEventListener('input', event => {
		console.log(event.target.value);
		if (event.target.value) {
			showButtonReset();
		} else {
			hideButtonReset();
		}
	});

	form.addEventListener('reset', () => {
		console.log('reset');
		hideButtonReset();
		input.focus();
	});
	form.addEventListener('submit', event => {
		event.preventDefault();
		hideButtonReset();
		input.value = '';
	});
}
