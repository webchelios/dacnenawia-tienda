import { fetchProducts } from '../helpers/fetchProducts';
import { Product } from '../model/product';

export const productMapper = async () => {
	const products = await fetchProducts();

	const productInstances = products.map((product) => {
		return new Product(
			product.id,
			product.name,
			product.category,
			product.price,
			product.discount,
			product.description,
			product.images,
			product.stock,
		);
	});

	return productInstances;
};
