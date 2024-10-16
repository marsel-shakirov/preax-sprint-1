import { sliderDayData, sliderHoursData } from '../data/sliderCardsData.js';
import { widgetData } from '../data/widgetData.js';
import { createListsContent } from './modules/createListsContent.js';
import { createSliderContent } from './modules/createSliderContent.js';
import { searchForm } from './modules/searchForm.js';

const form = document.querySelector('.search');
const input = document.querySelector('.search__input');
const searchIcon = document.querySelector('.search__icon-loupe');
const buttonReset = document.querySelector('.search__button-reset');
const widgetLists = document.querySelector('.widget-lists');
const widgetTemplate = document.querySelector('#widget-list');

const switchTemplate = document.querySelector('#switch-list');
const switchDayLists = document.querySelector('.switch-day__lists');
const switchHourLists = document.querySelector('.switch-hour__lists');

const sliderMenuButtons = document.querySelectorAll('.menu__button');

searchForm(form, input, searchIcon, buttonReset);
createListsContent(widgetLists, widgetTemplate, widgetData);
createSliderContent(
	sliderMenuButtons,
	switchTemplate,
	switchDayLists,
	switchHourLists,
	sliderDayData,
	sliderHoursData
);
