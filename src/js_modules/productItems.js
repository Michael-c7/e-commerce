const productContentEl = document.querySelector(".product-content");

export const productItem = async _ => {
    render()
    console.log('the product items module');
}


export const productItemData = async _ => {
    let endPoint = "https://fakestoreapi.com/products";

    try {
        let request = await fetch(endPoint);
        let data = await request.json();
        return data;
    } catch(err) {
        console.log(err);
        alert("going to use the local data, because the api cant be reached.");
        // return the local test data(yet to make)
    }
}



const productItemDataRender = async _ => {
    const productData = await productItemData();

    let myMarkup = "";

    productData.forEach((item, index) => {
        const { id, category, description, image, price, title } = item;
        // max characters 155 or max words 20
        let amtOfLettersToKeep = 155;
        let shortenedDescription = description.substring(0, amtOfLettersToKeep).replace(/\s*$/,"") + "...";

        let markup = `
        <li class="product-content__item" data-category="${category} "data-productId="${id}">
            <img class="content__item__img" src="${image}" alt="${title} image">
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
    productItemDataRender()
}