import './style.scss';
import { searchProducts } from "./js_modules/search";
import { cartModule } from "./js_modules/cart";
import { productItem } from "../src/js_modules/productItems";
import { changeSliderImg } from "../src/js_modules/imageSlider";

/*
api using:
https://fakestoreapi.com/

*/

const render = _ => {
    changeSliderImg()
    cartModule()
    productItem()
    searchProducts()
}

render()