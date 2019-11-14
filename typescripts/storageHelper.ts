
class ProductStorage{
    // Add Product
    static addProduct(p:Product){
        // Get existing products before adding new products
        let prods = ProductStorage.getAllProducts();
        prods.push(p);

        let data = JSON.stringify(prods);
        localStorage.setItem("prods", data);
    }

    /**
     * Returns all products or an empty array
     * if no products are stored
     */
    static getAllProducts():Product[]{
        // Read data out of storage
        let data = localStorage.getItem("prods"); // only stores strings
        
        if(data == null){
            return new Array<Product>(); // empty array of type product
        }

        return <Product[]>JSON.parse(data);
    }

    // Get Number of Products
    static getNumberOfProducts(){
        let prods = ProductStorage.getAllProducts();
        return prods.length;
    }

}