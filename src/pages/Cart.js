import { productInstances } from '../mappers/product-mapper';

export const Cart = () => {
	const renderCart = () => {
		const productsInCart = productInstances.filter((p) => p.getAmmount > 0);

		const cartContainer = document.createElement('div');
		cartContainer.classList.add('cart-container');
		const h2Cart = document.createElement('h2');
		h2Cart.textContent = 'Carrito de compras';

		if (productsInCart.length === 0) {
			const emptyParagraph = document.createElement('p')
			emptyParagraph.textContent = 'El carrito está vacío.'
			
			cartContainer.append(h2Cart, emptyParagraph)
			return cartContainer
		};


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
			substractButton.addEventListener('click', (e) => {
				e.preventDefault()
				product.substractUnit();
			});

			cartProductActions.append(addButton, substractButton);

			productCard.append(
				productTitle,
				productPrice,
				productAmmount,
				cartProductActions,
			);
			cartContainer.append(h2Cart, productCard);
		}

		return cartContainer;
	};

	for (const product of productInstances) {
		product.addObserver(renderCart);
	}

	const render = renderCart();
	return render
};
