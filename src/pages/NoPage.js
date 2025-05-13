import { NO_PAGE_CONTENT } from '../constants/constants';
import './NoPage.css';
import { router } from '../router';

export const NoPage = () => {
	const errorContainer = document.createElement('div');
	errorContainer.classList.add('error-container');

	const h2Title = document.createElement('h2');
	h2Title.classList.add('hero-title');
	h2Title.textContent = NO_PAGE_CONTENT.title;
	const pSubtitle = document.createElement('p');
	pSubtitle.classList.add('hero-subtitle');
	pSubtitle.textContent = NO_PAGE_CONTENT.subtitle;
	const callToAction = document.createElement('button');
	callToAction.classList.add('hero-button');
	callToAction.innerText = NO_PAGE_CONTENT.button;
	callToAction.addEventListener('click', (e) => {
		e.preventDefault();
		router('/');
	});

	errorContainer.append(h2Title, pSubtitle, callToAction);

	return errorContainer;
};
