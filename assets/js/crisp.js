import * as helperProducts from './helper/helperProducts.js';
import * as helperCategory from './helper/helperCategory.js';


function getAndListProducts() {
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(json => {
        let products = json.products;

        products.forEach(product => {

            helperProducts.productsContainerElement.innerHTML += helperProducts.createProductHtml(
                product.title, product.category, product.thumbnail, product.price

            );       
        });
        
        let categoryMap = products.map(item => item.category);
        let categorySet = [...new Set(categoryMap)];

        categorySet.forEach(category => {
        helperCategory.shopCategory.innerHTML += helperCategory.createCategory(
            category
        )
    })
      
    
    });
}



getAndListProducts();
