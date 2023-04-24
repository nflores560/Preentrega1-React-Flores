import img1 from "./img/3kg.jpg"
import img2 from "./img/10kg.jpg"
import img3 from "./img/20kg.jpg"
const products = [
    {
        id: '1',
        name: 'alimento 3kg',
        price: 1200,
        category: 'alimentoParaPerros',
        img: img1,
        stock: 50,
        description: 'Descripción de alimento de 3kg'
    },
    {id:'2', name:'alimento 10kg', price:3500, category:'alimentoParaPerros', img: img2, stock: 45, description: 'Descripción de alimento de 10 kg'},
    {id:'3', name: 'alimento 20kg', price:6500, category: 'alimentoParaPerros', img: img3, stock: 60, description: 'Descripción de alimento de 20kg'}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        },500)
    })
}

export const getProductsById = async(productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === parseInt(productId)))
        }, 500)
    })
}

export const getProductsByCategory = async (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}
