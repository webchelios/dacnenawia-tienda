export const Admin = () => {
	const adminContainer = document.createElement('div');
	adminContainer.classList.add('admin-container');

	const form = document.createElement('form');

	const name = document.createElement('input');
	name.placeholder = 'Nombre';
	name.name = 'name';

	const category = document.createElement('input');
	category.placeholder = 'Categoría';
	category.name = 'category';

	const price = document.createElement('input');
	price.placeholder = 'Precio';
	price.name = 'price';

	const discount = document.createElement('input');
	discount.placeholder = 'Descuento';
	discount.name = 'discount';

	const description = document.createElement('input');
	description.placeholder = 'Descripción';
	description.name = 'description';

	const images = document.createElement('input');
	images.placeholder = 'URL de imagen';
	images.name = 'images';

	const stock = document.createElement('input');
	stock.placeholder = 'Stock';
	stock.name = 'stock';

	const submit = document.createElement('button');
	submit.type = 'submit';
	submit.innerText = 'Crear';

	form.append(
		name,
		category,
		price,
		discount,
		description,
		images,
		stock,
		submit,
	);

	form.addEventListener('submit', async (e) => {
		e.preventDefault();
		const formData = new FormData(form);
		const productData = {
			name: formData.get('name'),
			category: formData.get('category'),
			price: Number(formData.get('price')),
			discount: formData.get('discount'),
			description: formData.get('description'),
			images: formData.get('images'),
			stock: formData.get('stock'),
		};

		const response = await fetch('http://localhost/web/dacnenawia-api/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(productData),
		});

		if (!response.ok) throw new Error('Failed to create product');

		const result = await response.json();
		alert('Product created successfully!');
		form.reset();
	});

	adminContainer.append(form);

	return adminContainer;
};
