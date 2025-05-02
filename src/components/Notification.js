import './Notification.css';

export const renderNotification = (notification) => {
	// Verifica si ya existe un contenedor (para no duplicarlo)
	let notificationContainer = document.getElementById('notification-container');

	// Si no existe, lo crea
	if (!notificationContainer) {
		notificationContainer = document.createElement('div');
		notificationContainer.id = 'notification-container';
		document
			.querySelector('#notification-place')
			.appendChild(notificationContainer);
	}

	// Crea la notificación
	const notificationElement = document.createElement('div');
	notificationElement.className = `notification notification-${notification.type}`;

	const notificationMessage = document.createElement('p');
	notificationMessage.textContent = notification.message;

	const closeButton = document.createElement('button');
	closeButton.className = 'close-button';
	closeButton.innerText = 'X';

	// Cierra la notificación al hacer clic
	closeButton.addEventListener('click', () => {
		notificationElement.classList.add('fade-out');
		setTimeout(() => notificationElement.remove(), 300);
	});

	notificationElement.append(notificationMessage, closeButton);
	notificationContainer.appendChild(notificationElement);
};

export const removeNotification = (notification) => {
	const notificationContainer = document.querySelector(
		'#notification-container',
	);
	if (!notificationContainer) return;

	notificationContainer.classList.add('fade-out');
	setTimeout(() => {
		notificationContainer.remove();
	}, 300);
};
