import { getItem, removeItem, setItem } from '../localstorage/localstorage';
import { router } from '../router';
import { getProducts } from '../store/productInstances';
import './Cart.css';

export const Cart = async () => {
	let cartContainer = null;

	const products = await getProducts();

	const cleanupObservers = () => {
		for (const product of products) {
			product.removeObserver(renderCart);
		}
	};

	const renderCart = () => {
		const storedProducts = getItem('products') || [];
		let productsInCart = products.filter((p) => p.getAmmount > 0);

		if (productsInCart.length === 0 && storedProducts.length > 0) {
			productsInCart = storedProducts.filter((p) => p.getAmmount > 0);

			// biome-ignore lint/complexity/noForEach: <explanation>
			productsInCart.forEach((p) => p.addObserver(renderCart));
		}

		const totalItems = productsInCart.reduce((sum, p) => sum + p.getAmmount, 0);
		const navCount = document.querySelector('a[href="/carrito"]');
		if (navCount) {
			navCount.textContent = `Carrito (${totalItems})`;
		}

		const newContainer = document.createElement('div');
		newContainer.classList.add('cart-container');

		const h2Cart = document.createElement('h1');
		h2Cart.classList.add('cart-title');
		h2Cart.textContent = 'Carrito de compras';

		const total = document.createElement('p');
		total.classList.add('cart-total');
		let totalAllAmmount = 0;
		for (const productAmmount of productsInCart) {
			totalAllAmmount += productAmmount.getAmmount * productAmmount.getPrice;
		}
		total.textContent = `Total: $${totalAllAmmount.toFixed(2)}`;

		newContainer.append(h2Cart, total);

		if (productsInCart.length === 0) {
			total.remove();

			const emptyParagraph = document.createElement('p');
			emptyParagraph.classList.add('cart-empty');
			emptyParagraph.textContent = 'El carrito está vacío.';

			const backButton = document.createElement('a');
			backButton.href = '/tienda';
			backButton.addEventListener('click', (e) => {
				e.preventDefault();
				router('/tienda');
			});
			backButton.classList.add('primary-button', 'empty-button');
			backButton.innerText = 'Ver tienda';

			newContainer.append(emptyParagraph, backButton);
		} else {
			for (const product of productsInCart) {
				const productCard = document.createElement('div');
				productCard.classList.add('cart-card');

				const productTitle = document.createElement('h2');
				productTitle.textContent = product.getName;

				const productPrice = document.createElement('p');
				productPrice.textContent = `Precio: $${product.getPrice}`;

				const productAmmount = document.createElement('p');
				productAmmount.textContent =
					product.getAmmount === 1
						? `Cantidad: ${product.getAmmount} unidad`
						: `Cantidad: ${product.getAmmount} unidades`;

				const subTotal = document.createElement('p');
				subTotal.textContent = `Subtotal: $${(product.getAmmount * product.getPrice).toFixed(2)}`;
				subTotal.style.fontWeight = 700;

				const actions = document.createElement('div');
				actions.classList.add('cart-product-actions');

				const addButton = document.createElement('button');
				addButton.textContent = '+1';
				addButton.addEventListener('click', () => {
					product.addUnit();
					setItem('products', product, product.getAmmount);
					renderCart();
				});

				const substractButton = document.createElement('button');
				substractButton.textContent = '-1';
				substractButton.addEventListener('click', (e) => {
					e.preventDefault();
					product.substractUnit();
					setItem('products', product, product.getAmmount);
					renderCart();
				});

				const deleteButton = document.createElement('button');
				deleteButton.textContent = 'Eliminar';
				deleteButton.addEventListener('click', (e) => {
					e.preventDefault();
					product.resetUnit();
					removeItem('products');
					renderCart();
				});

				actions.append(addButton, substractButton, deleteButton);
				productCard.append(
					productTitle,
					productPrice,
					productAmmount,
					subTotal,
					actions,
				);
				newContainer.appendChild(productCard);
			}
		}

		if (cartContainer?.parentNode) {
			cartContainer.parentNode.replaceChild(newContainer, cartContainer);
		}

		cartContainer = newContainer;
		return cartContainer;
	};

	cleanupObservers();

	for (const product of products) {
		product.addObserver(renderCart);
	}

	return renderCart();
};
