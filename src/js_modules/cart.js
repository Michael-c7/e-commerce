
// cache the DOM
const cartIconNavbarEl = document.querySelector(".navbar__item-cart");
const cartContainer = document.querySelector(".cart-container");
const cartEl = document.querySelector(".cart");
const closeCartBtnEl = document.querySelector(".close-cart-btn");
let totalCostEl = document.querySelector(".total-price");
let cartNavbarAmt = document.querySelector(".navbar__item-cart__amt");
const cartItemsEl = document.querySelector(".cart__contents").children[0];


const productContentEl = document.querySelector(".product-content");


// variables
let totalCost = 0;
let totalNavbarAmt = 0;
let cart = [];
let productDataToCart = {};

productContentEl.addEventListener("click", event => {
    let closestBtn = event.target.closest("button");
    let ItemCartClassCheck = closestBtn.classList.contains("item__add-to-cart");

    // get the data to send to the cart
    if(ItemCartClassCheck) {
        let itemId = Number(closestBtn.parentElement.getAttribute("data-productId"));
        let itemName = closestBtn.parentElement.children[1].children[0].innerHTML;
        let itemPrice = closestBtn.parentElement.children[1].children[1].innerHTML;
        let itemImg = closestBtn.parentElement.children[0].src;

        let data = {itemId, itemName, itemPrice, itemImg, amountOfItem:1};
        productDataToCart = data;
    }
    cart.push(productDataToCart);




    const removeDuplicates = (arrayToFilter, propToFilterBy) => {
        // Declare a new array
        let newArray = [];

        // Declare an empty object
        let uniqueObject = {};

        // Loop for the array elements
        for (var i in arrayToFilter) {
            // Extract the title
            let objTitle = arrayToFilter[i][propToFilterBy];

            // Use the title as the index
            uniqueObject[objTitle] = arrayToFilter[i];
        }

        // Loop to push unique object into array
        for (i in uniqueObject) {
            newArray.push(uniqueObject[i]);
        }

        // Display the unique objects
        // console.log(newArray);
        cart = newArray;
    }


    const renderCart = _ => {
        let cartMarkup = "";
        // render the cart data into the cart
        cart.forEach(cartItem => {
            const {amountOfItem, itemId, itemName, itemImg, itemPrice} = cartItem;
            // console.log(itemName)

            let markup = `
            <li class="cart-item" "data-productId="${itemId}">
                <button class="delete-cart-item-btn">
                    <span>&times;</span>
                </button>
                <img src="${itemImg}" alt="${itemName}">
                <div class="cart-item__info">
                    <h3>${itemName}</h3>
                    <div>${itemPrice}</div>
                </div>
                <div class="amount-container">
                    <button class="cart-amt-btn cart-amt-btn__decrease"><i class="fa fa-angle-down" aria-hidden="true"></i></button>
                    <div class="amount-container__amt">${amountOfItem}</div>
                    <button class="cart-amt-btn cart-amt-btn__increase"><i class="fa fa-angle-up" aria-hidden="true"></i></button>
                </div>
            </li>
            `
            cartMarkup += markup;
        });
        cartItemsEl.innerHTML = cartMarkup;

        // nodelist[currentItem].itemName
        // console.log(document.querySelectorAll(".cart-item")[0].children[2].children[0].innerHTML)

    }


    const setCart = _ => {
        removeDuplicates(cart, "itemName")

        renderCart()
    }


    // render
    setCart()
    calculateCartTotal()
    updateCartAmtNavbar()


});




const openCart = _ => {
    document.body.classList.add("cart--open");
    cartContainer.classList.add("cart-container--active");
    cartEl.classList.add("cart--active");
}

const closeCart = _ => {
    document.body.classList.remove("cart--open");
    cartContainer.classList.remove("cart-container--active");
    cartEl.classList.remove("cart--active");
}



const updateCart = (cartData) => {
    // update total cost
    totalCostEl.innerHTML = `$${totalCost}`;

    cartNavbarAmt.innerHTML = `${totalNavbarAmt}`;
}


const updateCartAmtNavbar = _ => {
    totalNavbarAmt = document.querySelectorAll(".cart-item").length;
    cartNavbarAmt.innerHTML = totalNavbarAmt;
}


const calculateCartTotal = _ => {
    // get all the prices & amt
    // console.log(Array.from(document.querySelectorAll(".cart-item")))
    let nums = Array.from(document.querySelectorAll(".cart-item")).map(item =>
        item.children[2].children[1].innerHTML.slice(1) * item.children[3].children[1].innerHTML);

    let totalAmt = nums.reduce((prev, curr)=> prev + curr);

    // render the total cost to the DOM
    totalCost = totalAmt;
    /*totalCost in () because toFixed convert the totalCost to a string,
    and we want it to remain a number in case we need
    to do any math w/ the total in the future*/
    totalCostEl.innerHTML = `$${(totalCost.toFixed(2))}`;
}



export const cartModule = _ => {
    console.log("the cart module");

    // open / close cart
    cartIconNavbarEl.addEventListener("click", openCart);
    closeCartBtnEl.addEventListener("click", closeCart);



    // the cart top is the current amount of pixels scrolled
    const runOnScroll = _ => {
        cartContainer.style.top = `${window.pageYOffset}px`;
    }
    window.addEventListener("scroll", runOnScroll, {passive:true});



    updateCart()
}