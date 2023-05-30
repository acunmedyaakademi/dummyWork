import * as helperProducts from './helper/helperProducts.js';
import * as helperCategory from './helper/helperCategory.js';


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
        
        let categoryMap = products.map(item => item.category);
        let categorySet = [...new Set(categoryMap)];

        categorySet.forEach(category => {
        helperCategory.shopCategory.innerHTML += helperCategory.createCategory(
            category
        )
    })
      
    
    });
};

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

