export const widgetData = [
	{
		title: 'Влажность',
		src: '../public/images/icons/widget/humidity.svg',
		value: '75 %',
		bar: {
			isProgressBar: true,
			isRadial: false,
		},
	},
	{
		title: 'Давление',
		src: '../public/images/icons/widget/barometer.svg',
		value: '761',
		bar: {
			barTitle: 'Повышенное',
			isProgressBar: true,
			isRadial: true,
		},
	},
	{
		title: 'Видимость',
		src: '../public/images/icons/widget/visibility.svg',
		value: '28 км',
		bar: {
			barTitle: 'Нормальная',
			isProgressBar: true,
			isRadial: false,
		},
	},
	{
		title: 'Рассвет',
		src: '../public/images/icons/widget/sunrise.svg',
		value: '8:42',
		bar: {
			barTitle: 'Прошло: 02:47',
			isProgressBar: false,
		},
	},
	{
		title: 'Закат',
		src: '../public/images/icons/widget/sunset.svg',
		value: '16:37',
		bar: {
			barTitle: 'Осталось: 05:08',
			isProgressBar: false,
		},
	},
	{
		title: 'Сила ветра',
		src: '../public/images/icons/widget/direction.svg',
		value: '2 м/с',
		bar: {
			barTitle: 'Северо-западный',
			isProgressBar: false,
		},
	},
];
