import { productMapper } from '../mappers/product-mapper';

let products = [];
let observers = [];

const initializeProducts = async () => {
	products = await productMapper();
	notifyObservers();
};

export const subscribe = (callback) => {
	observers.push(callback);
	// biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
	return () => (observers = observers.filter((obs) => obs !== callback));
};

const notifyObservers = () => {
	for (const callback of observers) {
		callback(products);
	}
};

export const getProducts = async () => {
	if (products.length === 0) {
		await initializeProducts();
	}
	return [...products];
};

export const addUnitToProduct = (productId) => {
	const product = products.find((p) => p.id === productId);
	if (product) {
		product.ammount++;
		notifyObservers();
	}
};

export const substractUnitFromProduct = (productId) => {
	const product = products.find((p) => p.id === productId);
	if (product && product.ammount > 0) {
		product.ammount--;
		notifyObservers();
	}
};

initializeProducts();
