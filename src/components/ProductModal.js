import './ProductModal.css';

export const ProductModal = (product) => {
	const modalContainer = document.createElement('div');
	modalContainer.classList.add('modal-container');
	modalContainer.addEventListener('click', () => {
		closeModal();
	});

	const modalCard = document.createElement('div');
	modalCard.classList.add('modal-card');

	const cardContent = document.createElement('div');
	cardContent.innerHTML = `
            <div class="producto-${product.getId}">
                <h3>${product.getName}</h3>
                <p>${product.getCategory}</p>
                <p style="font-weight: 700;">${product.getDescription}</p>
                <p class="store-price">$${product.getPrice}</p>
        `;

	const modalTitle = document.createElement('p');
	modalTitle.classList.add('modal-title');
	modalTitle.innerText = 'Detalles';

	const modalExit = document.createElement('button');
	modalExit.classList.add('modal-close');
	modalExit.innerText = 'X';
	modalExit.addEventListener('click', () => {
		closeModal();
	});

	modalTitle.append(modalExit);

	modalCard.append(modalTitle, cardContent);

	const closeModal = () => {
		modalContainer.remove();
	};

	modalContainer.append(modalCard);

	return modalContainer;
};
