const productsContainerElement = document.querySelector('.shopSomeCards');


const createProductHtml = (title, category, thumbnail, price) =>
`<div class="card hiden">
    <a href="#"><img src="${thumbnail}" alt="${title}"></a>
    <div>
        <span class="graySpan">${category}</span>
        <span class="blackSpan">${title}</span>
    </div>
    <span class="price">${price} EUR</span>
</div>`




export {productsContainerElement, createProductHtml}