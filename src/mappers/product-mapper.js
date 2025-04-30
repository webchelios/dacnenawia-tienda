import { products, cateogries } from '../constants/products'
import { Product } from '../model/product'

export const productInstances = products.map((product) => {
    const productCategory = cateogries.find((cat) => cat.id === product.cateogry)
    return new Product(product.id, product.name, productCategory.name, product.price, product.discount, product.description, product.images, product.stock
    )
})
