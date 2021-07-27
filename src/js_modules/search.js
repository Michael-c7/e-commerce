import { productItem, productItemData } from "./productItems";

const searchBarEl = document.querySelector(".search-bar");
const searchBarBtnEl = document.querySelector(".search-bar__submit");
const searchBarInputEl = document.querySelector(".search-bar__input");

const productContentEl = document.querySelector(".product-content");


let userInput = "";
let filteredSearchData = [];

export const searchProducts = _ => {
    console.log("the search module");
    searchData()
}

const getUserInput = _ => {
    if(searchBarInputEl === "") return;
    userInput = searchBarInputEl.value.toLowerCase();

}





const searchData = _ => {
    searchBarEl.addEventListener("submit", event => {
        event.preventDefault();
        getUserInput()
        filterSearch(userInput)
    });
}




const filterSearch = async (userInput) => {
    const productData = await productItemData();
    let filteredDataArr = [];
    let myMarkup = "";

    const filterProdcutData = productData.map(item => {
        const { category, title } = item;
        if(title.toLowerCase().split(" ").includes(userInput)) {
            filteredDataArr.push(item)
        }

        if(userInput === "") {
            filteredDataArr.push(item)
        }
    });



    filteredDataArr.forEach(item => {
        const { id, category, description, image, price, title } = item;
        // max characters 155 or max words 20
        let amtOfLettersToKeep = 155;
        /* regex at the end of the shortenedDescription
        gets rid of white space at the end of the paragraph*/
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

    if(filteredDataArr.length === 0) {
        productContentEl.innerHTML = `<div class="no-results-found">
        <span>No results found.</span>
        <div class="more-txt">Enter an empty result or refresh the page to reset the data.</div>
        </div>`
    } else {
        productContentEl.innerHTML = myMarkup;
    }

}