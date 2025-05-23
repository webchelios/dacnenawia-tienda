import { Product } from '../model/product';

export const setItem = (key, value, ammount = 1) => {
	const dataExist = localStorage.getItem(key);
	let updatedData;

	if (dataExist) {
		updatedData = JSON.parse(dataExist);
		const index = updatedData.findIndex((item) => item.id === value.id);

		if (index !== -1) {
			// Si el producto ya existe, actualizamos su cantidad
			updatedData[index] = {
				...updatedData[index], // Mantenemos las propiedades existentes
				...value, // Actualizamos con los nuevos valores
				ammount: ammount, // Establecemos la cantidad exacta (no sumamos)
			};
		} else {
			// Si es un producto nuevo, lo añadimos con la cantidad especificada
			updatedData.push({ ...value, ammount });
		}
	} else {
		// Si no hay datos previos, creamos un nuevo array con el producto y su cantidad
		updatedData = [{ ...value, ammount }];
	}

	localStorage.setItem(key, JSON.stringify(updatedData));
};

export const getItem = (key) => {
	const storedData = localStorage.getItem(key);
	if (!storedData) return []; // Si no hay datos, retorna array vacío

	const parsedData = JSON.parse(storedData);

	// Si es un array de objetos, los convertimos a instancias de Producto
	if (Array.isArray(parsedData)) {
		return parsedData.map(
			(item) =>
				new Product(
					item.id,
					item.name,
					item.category,
					item.price,
					item.discount,
					item.description,
					item.images,
					item.stock,
					item.ammount,
				),
		);
	}

	// Si es un solo objeto, lo convertimos a Producto
	return new Product(
		parsedData.id,
		parsedData.name,
		parsedData.category,
		parsedData.price,
		parsedData.discount,
		parsedData.description,
		parsedData.images,
		parsedData.stock,
		parsedData.ammount,
	);
};

export const removeItem = (key) => {
	if (!localStorage.getItem(key)) return;
	localStorage.removeItem(key);
};
