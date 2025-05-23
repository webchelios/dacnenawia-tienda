export const fetchProducts = async () => {
	const response = await fetch('http://localhost/web/dacnenawia-api/', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	});
	const productsData = await response.json();
	return productsData;
};
