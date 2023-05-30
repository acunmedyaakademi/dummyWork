import * as helperProducts from './helper/helperProducts.js';
import * as helperCategory from './helper/helperCategory.js';
import * as helperBlog from './helper/helperBlog.js';


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

// [...json.products].splice(0, 6)
function getAndListPost() {
    fetch("https://dummyjson.com/posts")
    .then(res => res.json())
    .then(json => {
      let posts = json.posts;

       [...posts].splice(0,4).forEach(post => {
            helperBlog.blogCards.innerHTML += helperBlog.createBlog(
                post.id,post.title,post.body
            );
       });
    });
}

getAndListProducts();
getAndListPost();