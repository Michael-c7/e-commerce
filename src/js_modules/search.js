import { productItem, productItemData } from "./productItems";
// import { filterItem } from "./filterItems";
import { changeSliderImg } from "./imageSlider";

const searchBarEl = document.querySelector(".search-bar");
const searchBarBtnEl = document.querySelector(".search-bar__submit");
const searchBarInputEl = document.querySelector(".search-bar__input");

const productContentEl = document.querySelector(".product-content");


let userInput = "";
let filteredSearchData = [];

export const searchProducts = _ => {
    console.log("the search module");
    productItem()
    // filterItem()

    changeSliderImg()
}





const getUserInput = _ => {
    searchBarBtnEl.addEventListener("click", event => {
        event.preventDefault();
        if(searchBarInputEl === "") return;
        userInput = searchBarInputEl.value.toLowerCase();
        console.log(userInput)

        filterSearch(userInput);
        renderFilteredData();
    });
}

getUserInput()


const filterSearch = async (userInput) => {
    const productData = await productItemData();
    let productDataFilter = productData.filter(product => {
        const { title } = product;
        // case sensitive
        if(title.toLowerCase().split(" ").includes(userInput)) {
            filteredSearchData.push(product);
            console.log(filteredSearchData)
        }
    });
}

const renderFilteredData = _ => {
    let myMarkup = "";

    filteredSearchData.forEach((item, index) => {
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



/*
1. get the data from productItems module [X]

2. get the user input from the search field [X]

3. when you hit enter / submit the search query [x]

4. filter through the productItem data's title [x]
    to find only items that match the search query

5.  send the filter data back to the productItems module

6. update the DOM w/ the filter data in the productItems module
*/