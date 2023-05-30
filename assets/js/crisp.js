import * as helperProducts from './helper/helperProducts.js';
import * as helperCategory from './helper/helperCategory.js';
import * as helperBlog from './helper/helperBlog.js';


function getAndListProducts() {
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(json => {
        let products = json.products;
        products.sort(() => Math.random() - 0.5);
        
        products.forEach(product => {

            helperProducts.productsContainerElement.innerHTML += helperProducts.createProductHtml(
              product.id,product.title, product.category, product.thumbnail, product.price

            );       
        });
        
        let categoryMap = products.map(item => item.category);
        let categorySet = [...new Set(categoryMap)].sort();

        categorySet.forEach(category => {
        helperCategory.shopCategory.innerHTML += helperCategory.createCategory(
            category
        )
    })
      

    
    });
};

// Blog sayfasi
function getAndListPost() {
    fetch("https://dummyjson.com/posts")
    .then(res => res.json())
    .then(json => {
      let posts = json.posts;
      posts.sort(() => Math.random() - 0.5);


       [...posts].splice(0,4).forEach(post => {
            helperBlog.blogCards.innerHTML += helperBlog.createBlog(
                post.id,post.title,post.body
            );
       });
    });
}


const searchInput = document.querySelector('.hidden');
const searchIcon = document.querySelector('.searchIcon a');

// Tıklama olayını belge üzerinde dinle
document.addEventListener('click', (event) => {
    const target = event.target;
  
    // Tıklanan öğe arama simgesi değilse
    if (!target.closest('.searchIcon')) {
        
        searchInput.classList.add('hidden');
    }
});

searchIcon.addEventListener('click', (event) => {
    event.stopPropagation();
    searchInput.classList.toggle('hidden');
});

getAndListProducts();
getAndListPost();
