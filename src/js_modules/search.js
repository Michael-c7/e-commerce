import { productItem } from "./productItems";
import { filterItem } from "./filterItems";
import { changeSliderImg } from "./imageSlider";

const searchBarEl = document.querySelector(".search-bar");
const searchBarBtnEl = document.querySelector(".search-bar__submit");
const searchBarInputEl = document.querySelector(".search-bar__input");

let userInput = "";

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
    });
}

getUserInput()



/*have to search / filter locally
1. get the data into an array
2. When some search for something eg: t-shirt
    1. filter through the title of each for the search term
    2. return the result
    3. display the result to the DOM
*/