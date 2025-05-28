import './We.css';

export const We = () => {
	const container = document.createElement('div');
	container.classList.add('we-container');

	const h2We = document.createElement('h2');
	h2We.textContent = 'Nosotros';
	h2We.classList.add('hero-title');

	const PWe = document.createElement('p');
	PWe.classList.add('hero-subtitle');
	PWe.textContent =
		'Somos un comercio electrónico dedicado a vender muebles de la más alta calidad. Ahora estás en modo Administrador, podés cargar productos nuevos o eliminar productos existentes.';

	container.append(h2We, PWe);
	return container;
};
