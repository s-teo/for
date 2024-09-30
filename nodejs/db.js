let product = [
    {
        id:1,
        name:'Laptop',
        price:3999,
        category:'Electroncs'
    },
    {
        id:2,
        name:'Smartphone',
        price:2999,
        category:'Electroncs'
    },
    {
        id:3,
        name:'Headphone',
        price:1999,
        category:'Electroncs'
    },
];

export const getAllProducts =  () =>{
    return product;
}        

export const createProduct = (product) =>{
    const newProduct = {
        id:product.length + 1,
        ...product
    }
    product.push(newProduct);
    return newProduct;
}