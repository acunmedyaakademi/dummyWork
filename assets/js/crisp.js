import * as helperProducts from './helper/helperProducts.js';


function getAndListProducts() {
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(json => {
        [...json.products].splice(0,8).forEach(product => {

            helperProducts.productsContainerElement.innerHTML += helperProducts.createProductHtml(
                product.title, product.category, product.thumbnail, product.price
            );
        });
    
    });
}

getAndListProducts();
