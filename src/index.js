import './style.scss';
/*
https://fakestoreapi.com/

https://apilist.fun/category/ecommerce
*/


let test = async _ => {
    let endPoint = "https://fakestoreapi.com/products/1";

    try {
        let request = await fetch(endPoint);
        let data = await request.json();
        console.log(data)
    }catch(err) {
        console.log(err);
    }

}

test()