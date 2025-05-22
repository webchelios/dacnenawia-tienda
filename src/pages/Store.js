import { Notification } from '../components/Notification';
import { productInstances } from '../mappers/product-mapper';
import { Cart } from './Cart';
import './Store.css';

export const Store = () => {
	const storeContainer = document.createElement('div');
	storeContainer.classList.add('store-container');

	const titlesContainer = document.createElement('div');
	titlesContainer.classList.add('store-titles');
	const h2Store = document.createElement('h1');
	h2Store.classList.add('store-h2');
	h2Store.textContent = 'Catálogo completo';
	const pStore = document.createElement('p');
	pStore.classList.add('store-p');
	pStore.textContent = 'Descubrí todos los productos';
	titlesContainer.append(h2Store, pStore);

	const productsContainer = document.createElement('div');
	productsContainer.classList.add('store-products');

	for (const product of productInstances) {
		const container = document.createElement('div');
		container.classList.add('store-product-card');
		const imageUrl = new URL(
			`../assets/img/${product.getImages[0]}`,
			import.meta.url,
		).href;
		container.innerHTML = `
            <div class="producto-${product.getId}">
                <h3>${product.getName}</h3>
                <p>${product.getCategory}</p>
                <div class="store-product-img">
                    <img src="${imageUrl}" alt="Imagen de ${product.getName}">
                </div>
                <p>${product.getDescription}</p>
                <p class="store-price">$${product.getPrice}</p>
            `;
		const storeProductsActions = document.createElement('div');
		storeProductsActions.classList.add('store-products-actions');

		const substractButton = document.createElement('button');
		substractButton.classList.add('buy-button');
		substractButton.textContent = 'Comprar';

		const addButton = document.createElement('button');
		addButton.classList.add('add-button');
		addButton.textContent = 'Añadir al carrito';
		addButton.addEventListener('click', () => {
			product.addUnit();
			Notification('success', `¡${ product.name} agregado al carrito con éxito!`)
			Cart(document.querySelector('#cart'));
		});

		storeProductsActions.append(addButton, substractButton);
		container.append(storeProductsActions);
		productsContainer.append(container);
	}

	storeContainer.append(titlesContainer, productsContainer);
	return storeContainer;
};
