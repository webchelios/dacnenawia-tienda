import { productInstances } from '../mappers/product-mapper'
import './Store.css'

export const Store = (element) => {

    const storeContainer = document.createElement('div')
    storeContainer.classList.add('store-container')
    
    const titlesContainer = document.createElement('div')
    titlesContainer.classList.add('store-titles')
    const h2Store = document.createElement('h2')
    h2Store.classList.add('store-h2')
    h2Store.textContent = 'Catálogo completo'
    const pStore = document.createElement('p')
    pStore.classList.add('store-p')
    pStore.textContent = 'Descubrí todos los productos'
    titlesContainer.append(h2Store, pStore)
    
    const productsContainer = document.createElement('div')
    productsContainer.classList.add('store-products')
    productInstances.forEach((product) => {
        const container = document.createElement('div')
        container.classList.add('store-product-card')
        const imageUrl = new URL(`../assets/img/${product.getImages[0]}`, import.meta.url).href
        container.innerHTML = `
            <div class="producto-${product.getId}">
                <h3>${product.getName}</h3>
                <p>${product.getCategory}</p>
                <div class="store-product-img">
                    <img src="${imageUrl}" alt="Imagen de ${product.getName}">
                </div>
                <p>${product.getDescription}</p>
                <p class="store-price">$${product.getPrice}</p>
                <div class="store-products-actions">
                    <button>Añadir al carrito</button>
                    <button>Comprar</button>
                </div>
            `
        productsContainer.append(container)
    })

    storeContainer.append(titlesContainer, productsContainer)
    element.append(storeContainer)
}