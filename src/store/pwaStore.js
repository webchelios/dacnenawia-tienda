const isInstalled = localStorage.getItem('installed') === 'true';
let installEvent = null;

export const pwaStore = {
	state: {
		isInstalled: isInstalled,
	},

	init() {
		//si la app se instala, guardo ese dato en el localstorage para eliminar el boton de instalación
		window.addEventListener('appinstalled', () => {
			const installBtn = document.querySelector('.install-btn');
			installBtn.style.display = 'none';
			localStorage.setItem('installed', true);
		});

		window.addEventListener('beforeinstallprompt', (event) => {
			event.preventDefault();
			installEvent = event;
		});

		//registro el service worker
		if (navigator.serviceWorker) {
			console.log('ServiceWorker listo para usar');
			navigator.serviceWorker.register('serviceworker.js');
		} else {
			console.log('No se puede usar ServiceWorker');
		}
	},
	//funcion disparada por el boton "instalar"
	installApp() {
		console.log(installEvent);
		if (installEvent) {
			installEvent.prompt();
		}
	},
};

pwaStore.init();
