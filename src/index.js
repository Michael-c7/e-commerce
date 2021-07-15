import './style.scss';
import sliderImg0 from "./images/slider-img-electronics-0.jpg"

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





// toggle mobile nav
const navbarToggleBtnEl = document.querySelector(".navbar__toggle-btn");
const navbarLinks = document.querySelector(".navbar-links");
let height = navbarLinks.scrollHeight;
/*allows it to transition from 0 to auto smoothly*/
navbarLinks.style.setProperty('--max-height', height + 'px');

const toggleMobileNavMenu = _ => {
    navbarLinks.classList.toggle("navbar-links--active");
}

navbarToggleBtnEl.addEventListener("click", toggleMobileNavMenu);





// img slider
let imgSliderEl = document.querySelector(".slider__img");
// imgSliderEl.style.src = sliderImg0;



// toggle filter open
// const navbarToggleBtnEl = document.querySelector(".navbar__toggle-btn");



/*TODO LIST
1. add the data from the fake store api
- https://fakestoreapi.com/docs

2. get search functionality working

3. create a working slidershow
    - auto / timed scroll
    - can scroll(based of index) / fade scroll

4. add to cart

5. cart functionality

6. filter products functionality
*/