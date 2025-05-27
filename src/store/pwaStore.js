// src/store/pwaStore.js
let deferredPrompt = null;
const isInstalled = localStorage.getItem('installed') === 'true';

export const pwaStore = {
	state: {
		canInstall: false,
		isInstalled: isInstalled,
	},

	init() {
		window.addEventListener('beforeinstallprompt', (e) => {
			e.preventDefault();
			deferredPrompt = e;
			this.state.canInstall = true;
			console.log('PWA can be installed');
			this.updateUI();
		});

		window.addEventListener('appinstalled', () => {
			localStorage.setItem('installed', 'true');
			this.state.isInstalled = true;
			this.state.canInstall = false;
			console.log('PWA was installed');
			this.updateUI();
		});

		// Verificar si ya está instalado al cargar
		if (window.matchMedia('(display-mode: standalone)').matches) {
			this.state.isInstalled = true;
			localStorage.setItem('installed', 'true');
		}
	},

	async installApp() {
		if (deferredPrompt) {
			deferredPrompt.prompt();
			const { outcome } = await deferredPrompt.userChoice;

			if (outcome === 'accepted') {
				this.state.isInstalled = true;
				localStorage.setItem('installed', 'true');
			}

			deferredPrompt = null;
			this.state.canInstall = false;
			this.updateUI();
		}
	},

	updateUI() {
		const installBtn = document.querySelector('.install-btn');
		if (installBtn) {
			if (this.state.isInstalled) {
				installBtn.classList.add('installed-btn');
				installBtn.textContent = 'Ya instalado';
				installBtn.disabled = true;
			} else if (this.state.canInstall) {
				installBtn.style.display = 'block';
				installBtn.disabled = false;
			} else {
				installBtn.style.display = 'none';
			}
		}
	},
};

// Inicializar el store
pwaStore.init();
