export const createSliderContent = (
	sliderMenuButtons,
	template,
	switchDayLists,
	switchHourLists,
	sliderHoursData,
	sliderDayData
) => {
	const time = template.content.querySelector('time');
	const img = template.content.querySelector('img');
	const span = template.content.querySelector('span');

	const createCard = (day, imageSrc, degrees, lists) => {
		time.textContent = day;
		time.setAttribute('datetime', day);
		img.src = imageSrc;
		span.textContent = degrees;

		let li = template.content.cloneNode(true);
		lists.append(li);
	};

	sliderHoursData.forEach(({ day, src: imageSrc, degrees }) => {
		createCard(day, imageSrc, degrees, switchHourLists);
	});

	sliderDayData.forEach(({ day, src: imageSrc, degrees }) => {
		createCard(day, imageSrc, degrees, switchDayLists);
	});

	sliderMenuButtons.forEach(btn => {
		btn.addEventListener('click', element => {
			if (element.target.getAttribute('id') === 'day') {
				switchHourLists.classList.remove('visibility-hidden');
				switchDayLists.classList.add('visibility-hidden');
			} else {
				switchDayLists.classList.remove('visibility-hidden');
				switchHourLists.classList.add('visibility-hidden');
			}

			if (!btn.classList.contains('button-active')) {
				sliderMenuButtons.forEach(btn => {
					btn.classList.toggle('button-active');
				});
			}
		});
	});
};
