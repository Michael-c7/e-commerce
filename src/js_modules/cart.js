const cartIconNavbarEl = document.querySelector(".navbar__item-cart");
const cartContainer = document.querySelector(".cart-container");
const cart = document.querySelector(".cart");
const closeCartBtnEl = document.querySelector(".close-cart-btn");




const openCart = _ => {
    document.body.classList.add("cart--open");
    cartContainer.classList.add("cart-container--active");
    cart.classList.add("cart--active");
}

const closeCart = _ => {
    document.body.classList.remove("cart--open");
    cartContainer.classList.remove("cart-container--active");
    cart.classList.remove("cart--active");
}


export const cartModule = _ => {
    console.log("the cart module");

    cartIconNavbarEl.addEventListener("click", openCart);
    closeCartBtnEl.addEventListener("click", closeCart);

    // the cart top is the current amount of pixels scrolled
    const runOnScroll = _ => {
        cartContainer.style.top = `${window.pageYOffset}px`;
    }
    window.addEventListener("scroll", runOnScroll, {passive:true});
}


