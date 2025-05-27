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

// PWA

let installEvent;
window.addEventListener('beforeinstallprompt', (e) => {
	e.preventDefault();
	installEvent = e;
});
//funcion disparada por el boton "instalar"
export const instalarAplicacion = () => {
	installEvent.prompt();
	console.log('instalando Dacnenawia...');
};
//si la app se instala, guardo ese dato en el localstorage para eliminar el boton de instalación
window.addEventListener('appinstalled', () => {
	const installBtn = document.querySelector('.install-btn');
	installBtn.classList.add('installed-btn');
	localStorage.setItem('installed', true);
});

//registro el service worker
if (navigator.serviceWorker) {
	console.log('ServiceWorker listo para usar');
	navigator.serviceWorker.register('serviceworker.js');
} else {
	console.log('No se puede usar ServiceWorker');
}
