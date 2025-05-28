const isInstalled = localStorage.getItem('installed') === 'true';
let installEvent = null;
const installBtn = document.querySelector('.install-btn');
export const pwaStore = {
	state: {
		isInstalled: isInstalled,
	},

	init() {
		window.addEventListener('appinstalled', () => {
			installBtn.style.display = 'none';
			localStorage.setItem('installed', true);
		});

		window.addEventListener('beforeinstallprompt', (event) => {
			event.preventDefault();
			installEvent = event;
		});

		if (navigator.serviceWorker) {
			console.log('ServiceWorker listo para usar');
			navigator.serviceWorker.register('serviceworker.js');
		} else {
			console.log('No se puede usar ServiceWorker');
		}
	},
	installApp() {
		console.log(installEvent);
		if (installEvent) {
			installEvent.prompt();
		}
	},
};

// Inicializar el store
pwaStore.init();
