
// cache the DOM
const cartIconNavbarEl = document.querySelector(".navbar__item-cart");
const cartContainer = document.querySelector(".cart-container");
const cartEl = document.querySelector(".cart");
const closeCartBtnEl = document.querySelector(".close-cart-btn");
let totalCostEl = document.querySelector(".total-price");
let cartNavbarAmt = document.querySelector(".navbar__item-cart__amt");

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

        let data = {itemId, itemName, itemPrice, amountOfItem:1};
        productDataToCart = data;
    }


    /*check if the item your currently adding is
    the same as an item thats already been added*/
    cart.forEach((product) => {
        // if the products the same
        if(productDataToCart.itemId == product.itemId) {
            productDataToCart.amountOfItem++;
        } else {
            // if the products diffrent
        }
    });
    cart.push(productDataToCart);


    const removeDuplicates = _ => {
        // Declare a new array
        let newArray = [];

        // Declare an empty object
        let uniqueObject = {};

        // Loop for the array elements
        for (var i in cart) {
            // Extract the title
            let objTitle = cart[i]['itemName'];

            // Use the title as the index
            uniqueObject[objTitle] = cart[i];
        }

        // Loop to push unique object into array
        for (i in uniqueObject) {
            newArray.push(uniqueObject[i]);
        }

        // Display the unique objects
        console.log(newArray);
    }


    if(cart.length > 1) {
        removeDuplicates()
    }

    // console.log(cart)
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



    //
    updateCart()
}




/*
<li class="cart-item">
    <button class="delete-cart-item-btn">
        <span>&times;</span>
    </button>
    <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="">
    <div class="cart-item__info">
        <h3>Blue bag</h3>
        <div>$33.32</div>
    </div>
    <div class="amount-container">
        <button class="cart-amt-btn cart-amt-btn__decrease"><i class="fa fa-angle-down" aria-hidden="true"></i></button>
        <div class="amount-container__amt">1</div>
        <button class="cart-amt-btn cart-amt-btn__increase"><i class="fa fa-angle-up" aria-hidden="true"></i></button>
    </div>
</li>
*/