import { productInstances } from '../mappers/product-mapper';

export const Cart = (element) => {
	const renderCart = () => {
		const productsInCart = productInstances.filter((p) => p.getAmmount > 0);

		element.innerHTML = '';

		if (productsInCart.length === 0) return;

		const cartContainer = document.createElement('div');
		cartContainer.classList.add('cart-container');
		const h2Cart = document.createElement('h2');
		h2Cart.textContent = 'Carrito de compras';

		for (const product of productsInCart) {
			const productCard = document.createElement('div');

			const productTitle = document.createElement('h3');
			productTitle.textContent = product.getName;
			const productPrice = document.createElement('p');
			productPrice.textContent = product.getPrice;
			const productAmmount = document.createElement('p');
			productAmmount.textContent = product.getAmmount;

			const cartProductActions = document.createElement('div');
			cartProductActions.classList.add('cart-product-actions');

			const addButton = document.createElement('button');
			addButton.classList.add('add-button');
			addButton.textContent = 'Añadir';
			addButton.addEventListener('click', () => {
				product.addUnit();
			});

			const substractButton = document.createElement('button');
			substractButton.classList.add('substract-button');
			substractButton.textContent = 'Quitar';
			substractButton.addEventListener('click', () => {
				product.substractUnit();
			});

			cartProductActions.append(addButton, substractButton);

			productCard.append(
				productTitle,
				productPrice,
				productAmmount,
				cartProductActions,
			);
			cartContainer.append(productCard);
		}

		return cartContainer;
	};

	for (const product of productInstances) {
		product.addObserver(renderCart);
	}
	renderCart();
};
