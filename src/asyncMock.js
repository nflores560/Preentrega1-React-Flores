const products = [
    {
        id: '1',
        name: 'alimento 3kg',
        price: 1200,
        category: 'alimento para perros',
        img:'./img/3kg.jpg',
        stock: 50,
        description: 'Descripción de alimento de 3kg'
    },
    {id:'2', name:'alimento 10kg', price:3500, category:'alimento para perros', img:'./img/10kg.jpg', stock: 45, description: 'Descripción de alimento de 10 kg'},
    {id:'3', name: 'alimento 20kg', price:6500, category: 'alimento para perros', img:'./img/20kg.jpg', stock: 60, description: 'Descripción de alimento de 20kg'}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        },500)
    })
}

export const getProductsById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (productCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.category === productCategory))
        }, 500)
    })
}
