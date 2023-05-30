import * as helperProducts from './helper/helperProducts.js';


function getAndListProducts() {
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(json => {
        let products = json.products;
        products.sort(() => Math.random() - 0.5);
        
        products.forEach(product => {

            helperProducts.productsContainerElement.innerHTML += helperProducts.createProductHtml(
                product.title, product.category, product.thumbnail, product.price
            );
        });

        
        
        
    });
};

getAndListProducts();

function shuffleProducts() {
    products.sort(() => Math.random() - 0.5);
};