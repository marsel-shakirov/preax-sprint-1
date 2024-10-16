export const createListsContent = (widgetLists, data) => {
	const lists = data.map(({ title, src, value, bar }) => {
		const { barTitle, isProgressBar, isProgressPercent, maxScale, isRadial } =
			bar;
		const li = document.createElement('li');
		const scale = parseInt(value.match(/\d+/));

		const elementPercent = `
			<div class='progress-bar__percent'>
				<p class='percent'>0%</p>
				<p class='percent'>100%</p>
			</div>`;

		const titleBlock = `
		<p class='item__bar ${
			!isProgressBar ? 'item__bar_pb_12' : ''
		}'>${barTitle}</p>`;

		const barBlock = `
			<div class='progress-bar'>
				<input class='progress-bar__input ${
					isRadial ? 'input__gradient' : ''
				}' type="range" id="bar" name="bar" min="0" max="${maxScale}" value="${scale}">
				${isProgressPercent ? elementPercent : titleBlock}
			</div>`;

		li.innerHTML = `
				<article class='widget-item'>
					<h3 class='item__title'>${title}</h3>
					<div class="item__block">
						<img src=${src} alt="" class="item__icon" width='32' height='32'>
					</div>
					<p class='item__scale'>${value}</p>
					${isProgressBar ? barBlock : titleBlock}
				</article>`;

		return li;
	});

	widgetLists.append(...lists);
};
