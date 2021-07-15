// import { productItem } from "./js_modules/productItems";

const searchBarEl = document.querySelector(".search-bar");


export const searchProducts = _ => {
    console.log("the search module");
}


searchBarEl.addEventListener("submit", event => {
    console.log(event)
    searchProducts()
});


export const updateProducts = _ => {
    // productItem()
}