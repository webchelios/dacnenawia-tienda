import { Product } from '../model/product';

export const setItem = (key, value, ammount = 1) => {
	const dataExist = localStorage.getItem(key);
	let updatedData;

	if (dataExist) {
		updatedData = JSON.parse(dataExist);
		const index = updatedData.findIndex((item) => item.id === value.id);

		if (index !== -1) {
			updatedData[index] = {
				...updatedData[index],
				...value,
				ammount: ammount,
			};
		} else {
			updatedData.push({ ...value, ammount });
		}
	} else {
		updatedData = [{ ...value, ammount }];
	}

	localStorage.setItem(key, JSON.stringify(updatedData));
};

export const getItem = (key) => {
	const storedData = localStorage.getItem(key);
	if (!storedData) return [];

	const parsedData = JSON.parse(storedData);

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
