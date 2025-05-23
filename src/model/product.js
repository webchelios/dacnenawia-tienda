export class Product {
	id;
	name;
	category;
	price;
	discount;
	description;
	images;
	stock;
	ammount;

	constructor(
		id,
		name,
		category,
		price,
		discount,
		description,
		images,
		stock,
		ammount = 0,
	) {
		this.id = id;
		this.name = name;
		this.category = category;
		this.price = price;
		this.discount = discount;
		this.description = description;
		this.images = images;
		this.stock = stock;
		this.ammount = ammount;

		this.observers = [];
	}

	get getId() {
		return this.id;
	}

	get getName() {
		return this.name;
	}

	get getCategory() {
		return this.category;
	}

	get getPrice() {
		return this.price;
	}

	get getDiscount() {
		return this.discount;
	}

	get getDescription() {
		return this.description;
	}

	get getImages() {
		return this.images;
	}

	get getStock() {
		return this.stock;
	}

	get getAmmount() {
		return this.ammount;
	}

	addObserver(callback) {
		this.observers.push(callback);
	}

	removeObserver(callback) {
		this.observers = this.observers.filter((clbk) => clbk !== callback);
	}

	notifyObservers() {
		for (const callback of this.observers) {
			callback();
		}
	}

	addUnit() {
		this.ammount++;
		this.notifyObservers();
	}

	substractUnit() {
		if (this.ammount === 0) return;
		this.ammount--;
		this.notifyObservers();
	}

	resetUnit() {
		this.ammount = 0;
		this.notifyObservers();
	}
}
