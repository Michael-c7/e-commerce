import './style.scss';
import { searchProducts } from "./js_modules/search";
import { cartModule } from "./js_modules/cart";
import { productItem } from "../src/js_modules/productItems";
import { changeSliderImg } from "../src/js_modules/imageSlider";

/*
w/ webpack have to add image w/ js | or css
EG
import Icon from './icon.png';
---
https://webpack.js.org/guides/asset-management/#loading-images
*/

/*
https://fakestoreapi.com/

https://apilist.fun/category/ecommerce
*/

const render = _ => {
    changeSliderImg()
    cartModule()
    productItem()
    searchProducts()
}

render()



let test = async _ => {
    let endPoint = "https://fakestoreapi.com/products/categories";

    try {
        let request = await fetch(endPoint);
        let data = await request.json();
        console.log(data)
    }catch(err) {
        console.log(err);
    }

}

// test()








/*TODO LIST
1. add the data from the fake store api [X]
- https://fakestoreapi.com/docs

2. get search functionality working

3. create a working slidershow [X]
    - auto / timed scroll [X]
    - can scroll(based of index) / fade scroll [X]

4. add to cart [X]

5. cart functionality [X]

6. filter products functionality
*/