export const createListsContent = (widgetLists, template, widgetData) => {
	const widgetTitle = template.content.querySelector('.item__title');
	const widgetImg = template.content.querySelector('.item__icon');
	const widgetScale = template.content.querySelector('.item__scale');
	const widgetBar = template.content.querySelector('.item__progress-bar');
	const widgetInput = template.content.querySelector('.progress-bar__input');
	const widgetPercent = template.content.querySelector('.item__bar-percent');
	const widgetItemBar = template.content.querySelector('.item__bar-title');

	widgetData.forEach(({ title, src, value, bar }) => {
		const { isRadial, barTitle, isProgressBar } = bar;
		widgetTitle.textContent = title;
		widgetImg.src = src;
		widgetScale.textContent = value;
		widgetItemBar.textContent = barTitle;

		if (isRadial) {
			widgetInput.classList.add('input__gradient');
		} else {
			widgetInput.classList.remove('input__gradient');
		}

		if (barTitle) {
			widgetPercent.style.display = 'none';
			widgetItemBar.style.display = 'block';
		} else {
			widgetPercent.style.display = 'flex';
			widgetItemBar.style.display = 'none';
		}

		if (isProgressBar) {
			widgetBar.style.display = 'block';
			widgetInput.setAttribute('value', `${parseInt(value.slice(0, 2))}`);
		} else {
			widgetBar.style.display = 'none';
			widgetItemBar.classList.add('bar-title_pb_12');
		}

		let li = template.content.cloneNode(true);
		widgetLists.append(li);
	});
};
