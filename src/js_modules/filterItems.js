const getCategories = async _ => {
    let endPoint = "https://fakestoreapi.com/products/categories";

    try {
        let request = await fetch(endPoint);
        let data = await request.json();
        return data;
    } catch(err) {
        console.log(err);
    }
}



// const categories = await getCategories();