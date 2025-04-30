export class Product {
    
    id
    name
    category
    price
    discount
    description
    images
    stock
    ammount = 0

    constructor(
        id,
        name,
        category,
        price,
        discount,
        description,
        images,
        stock,
    ) {
        this.id = id
        this.name = name
        this.category = category
        this.price = price
        this.discount = discount
        this.description = description
        this.images = images
        this.stock = stock
    }

    get getId() {
        return this.id
    }

    get getName() {
        return this.name
    }

    get getCategory() {
        return this.category
    }

    get getPrice() {
        return this.price
    }

    get getDiscount() {
        return this.discount
    }

    get getDescription() {
        return this.description
    }

    get getImages() {
        return this.images
    }

    get getStock() {
        return this.stock
    }

    get getAmmount() {
        return this.ammount
    }

    addUnit() {
        this.ammount++
    }

    substractUnit() {
        this.ammount--
    }
}