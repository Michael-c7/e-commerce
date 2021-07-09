import './style.scss';
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