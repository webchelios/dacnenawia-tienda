import './Admin.css';

export const Admin = () => {
	const adminContainer = document.createElement('div');
	adminContainer.classList.add('admin-container');

	const form = document.createElement('form');
	form.classList.add('admin-form');

	const nameLabel = document.createElement('label');
	nameLabel.htmlFor = 'name';
	nameLabel.innerText = 'Nombre del producto';

	const name = document.createElement('input');
	name.name = 'name';
	name.id = 'name';
	name.required = true;

	const categoryLabel = document.createElement('label');
	categoryLabel.htmlFor = 'category';
	categoryLabel.innerText = 'Categoría';

	const category = document.createElement('input');
	category.name = 'category';
	category.id = 'category';
	category.required = true;

	const priceLabel = document.createElement('label');
	priceLabel.htmlFor = 'price';
	priceLabel.innerText = 'Precio';

	const price = document.createElement('input');
	price.name = 'price';
	price.type = 'number';
	price.id = 'price';
	price.required = true;

	const descriptionLabel = document.createElement('label');
	descriptionLabel.htmlFor = 'description';
	descriptionLabel.innerText = 'Descripción';

	const description = document.createElement('input');
	description.placeholder = 'Descripción detallada del producto';
	description.name = 'description';
	description.id = 'description';
	description.required = true;

	const imagesLabel = document.createElement('label');
	imagesLabel.htmlFor = 'images';
	imagesLabel.innerText = 'Imagen';

	const images = document.createElement('input');
	images.placeholder = 'URL de imagen';
	images.name = 'images';
	images.id = 'images';
	images.type = 'url';
	images.required = true;

	const stockLabel = document.createElement('label');
	stockLabel.htmlFor = 'stock';
	stockLabel.innerText = 'Stock';

	const stock = document.createElement('input');
	stock.name = 'stock';
	stock.id = 'stock';
	stock.required = true;

	const discountLabel = document.createElement('label');
	discountLabel.htmlFor = 'discount';
	discountLabel.innerText = 'Descuento';

	const discount = document.createElement('input');
	discount.id = 'discount';
	discount.name = 'discount';
	discount.required = true;

	const submit = document.createElement('button');
	submit.type = 'submit';
	submit.innerText = 'Crear';

	form.append(
		nameLabel,
		name,
		categoryLabel,
		category,
		priceLabel,
		price,
		descriptionLabel,
		description,
		imagesLabel,
		images,
		discountLabel,
		discount,
		stockLabel,
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
