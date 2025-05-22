import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import './style.css';

export const renderSite = (page, element = document.querySelector('#app')) => {
	element.innerHTML = '';

	element.append(Navbar());

	const notification = document.createElement('div')
	notification.id = 'notification'
	element.append(notification)

	const mainContent = document.createElement('div');
	mainContent.classList.add('main-content');
	mainContent.append(page);

	element.append(mainContent);
	return element;
};

export const firstRender = (app) => {
	return renderSite(Home(), app);
};

export const renderPage = (pageName) => {
	let mainContent = document.querySelector('.main-content');

	if (!mainContent) {
		mainContent = document.createElement('div');
		mainContent.classList.add('main-content');
		document.querySelector('#app').prepend(mainContent);
	}
	mainContent.innerHTML = '';
	mainContent.append(pageName);
};
