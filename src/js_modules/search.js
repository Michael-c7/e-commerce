import { productItem } from "./productItems";

const searchBarEl = document.querySelector(".search-bar");
const searchBarBtnEl = document.querySelector(".search-bar__submit");
const searchBarInputEl = document.querySelector(".search-bar__input");

let userInput = "";

export const searchProducts = _ => {
    console.log("the search module");
    productItem()
}





const getUserInput = _ => {
    searchBarBtnEl.addEventListener("click", event => {
        event.preventDefault();
        if(searchBarInputEl === "") return;
        userInput = searchBarInputEl.value;
        console.log(userInput)
    });
}

getUserInput()



/*have to search / filter locally*/