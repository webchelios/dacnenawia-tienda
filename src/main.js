import { firstRender } from './App';
import { router } from './router';

const app = document.querySelector('#app');

document.addEventListener('DOMContentLoaded', () => {
	const initialPath = window.location.pathname;
	router(initialPath);

	window.addEventListener('popstate', () => {
		const currentPath = window.location.pathname;
		router(currentPath);
	});
});

firstRender(app);

// Registro del Service Worker
if ('serviceWorker' in navigator) {
	navigator.serviceWorker
		.register('./serviceworker.js')
		.then(() => console.log('Service Worker registrado'))
		.catch((err) => console.log('Error registrando SW:', err));
}
