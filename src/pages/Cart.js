import './Cart.css';
import { productInstances } from '../mappers/product-mapper';

export const Cart = (element) => {
	const renderCart = () => {
		const productsInCart = productInstances.filter((p) => p.getAmmount > 0);
		element.innerHTML = '';

		if (productsInCart.length === 0) {
			element.innerHTML = '<p class="empty-cart">El carrito está vacío</p>';
			return;
		}

		// Crear contenedor principal
		const cartContainer = document.createElement('div');
		cartContainer.classList.add('cart-container');

		// Título del carrito
		const h2Cart = document.createElement('h2');
		h2Cart.textContent = 'Carrito de compras';

		// Crear tabla
		const table = document.createElement('table');
		table.classList.add('cart-table');

		// Crear cabecera de tabla
		const thead = document.createElement('thead');
		const headerRow = document.createElement('tr');
		headerRow.innerHTML = `
            <th>Producto</th>
            <th>Precio Unitario</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
            <th>Acciones</th>
        `;
		thead.appendChild(headerRow);
		table.appendChild(thead);

		// Crear cuerpo de tabla
		const tbody = document.createElement('tbody');

		// Calcular total
		let total = 0;

		for (const product of productsInCart) {
			const row = document.createElement('tr');
			row.classList.add('product-row');

			const subtotal = product.getPrice * product.getAmmount;
			total += subtotal;

			row.innerHTML = `
                <td>${product.getName}</td>
                <td>$${product.getPrice.toFixed(2)}</td>
                <td>${product.getAmmount}</td>
                <td>$${subtotal.toFixed(2)}</td>
                <td class="actions-cell"></td>
            `;

			// Botones de acciones
			const actionsCell = row.querySelector('.actions-cell');
			const addButton = document.createElement('button');
			addButton.classList.add('add-button');
			addButton.textContent = '+';
			addButton.addEventListener('click', () => {
				product.addUnit();
			});

			const substractButton = document.createElement('button');
			substractButton.classList.add('substract-button');
			substractButton.textContent = '-';
			substractButton.addEventListener('click', () => {
				product.substractUnit();
			});

			actionsCell.append(substractButton, addButton);
			tbody.appendChild(row);
		}

		// Añadir fila de total
		const footerRow = document.createElement('tr');
		footerRow.classList.add('total-row');
		footerRow.innerHTML = `
            <td colspan="3"><strong>Total</strong></td>
            <td colspan="2"><strong>$${total.toFixed(2)}</strong></td>
        `;
		tbody.appendChild(footerRow);

		table.appendChild(tbody);
		cartContainer.append(h2Cart, table);
		element.append(cartContainer);
	};

	// Observadores
	for (const product of productInstances) {
		product.addObserver(renderCart);
	}

	renderCart();
};
