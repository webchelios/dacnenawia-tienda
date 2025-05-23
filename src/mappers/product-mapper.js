import { productsData } from '../helpers/fetchProducts';
import { Product } from '../model/product';

export const productInstances = productsData.map((product) => {
	return new Product(
		product.id,
		product.name,
		product.name,
		product.price,
		product.discount,
		product.description,
		product.images,
		product.stock,
	);
});
