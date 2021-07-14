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



/*
<button class="header__filter-search">
                <i class="fa fa-sort" aria-hidden="true"></i>

                <div class="filter-content">
                    <button class="filter-content__clear-filter">Clear Filter</button>

                    <div class="filter-content__products">
                        <div>
                            <button class="filter-content__products-btn">
                                <i class="fa fa-chevron-down" aria-hidden="true"></i>
                            </button>
                            <div>Product type</div>
                        </div>
                        <form action="">
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
                                <label for="vehicle1"> I have a bike</label>
                                <input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
                                <label for="vehicle2"> I have a car</label>
                                <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
                                <label for="vehicle3"> I have a boat</label>
                        </form>
                    </div>

                    <div class="filter-content__price">
                        <div>
                            <button class="filter-content__price-btn">
                                <i class="fa fa-chevron-down" aria-hidden="true"></i>
                            </button>
                            <div>Price type</div>
                        </div>
                        <form action="">
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
                                <label for="vehicle1"> I have a bike</label>
                                <input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
                                <label for="vehicle2"> I have a car</label>
                                <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
                                <label for="vehicle3"> I have a boat</label>
                        </form>
                    </div>
                </div>
            </button>

*/