const productContentEl = document.querySelector(".product-content");

export const myTestFunc = async _ => {
    productItemDataRender()
    console.log('the product items module');
}


const productItemData = async _ => {
    let endPoint = "https://fakestoreapi.com/products";

    try {
        let request = await fetch(endPoint);
        let data = await request.json();
        return data;
    }catch(err) {
        console.log(err);
    }
}


const productItemDataRender = async _ => {
    const productData = await productItemData();
    console.log(productData)
    // max characters 155 or max words 20
    let myMarkup = "";
    productData.forEach((item, index) => {
        const { category, description, image, price, title } = item;
        let amtOfLettersToKeep = 155;
        let shortenedDescription = description.substring(0, amtOfLettersToKeep).replace(/\s*$/,"") + "...";

        let markup = `
        <li class="product-content__item" data-category="${category}">
            <img class="content__item__img" src="${image}" alt="item image">
            <div class="product-content__item__info">
                <h2 class="item-name">${title}</h2>
                <h3 class="item-price">$${price}</h3>
            </div>
            <p class="product-content__description">
                ${shortenedDescription}
            </p>
            <button class="item__add-to-cart">Add to Cart</button>
        </li>
        `
        myMarkup += markup;
    });
    productContentEl.innerHTML = myMarkup;
}


const render = _ => {

}


/*
<li class="product-content__item">
    <img class="content__item__img" src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="item image">
    <div class="product-content__item__info">
        <h2 class="item-name">Blue bag</h2>
        <h3 class="item-price">$222</h3>
    </div>
    <p class="product-content__description">
        Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Obcaecati voluptas odit iste laboriosam.
        aboriosam rem asperiores minima laudantium dolore ipsum.
    </p>
    <button class="item__add-to-cart">Add to Cart</button>
</li>
*/