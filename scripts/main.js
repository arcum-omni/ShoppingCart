window.onload = function () {
    getYear();
    initBuyButtons();
    displayItemQuantity();
    var cartIcon = document.querySelector("#shopping-cart");
    cartIcon.onclick = showCartContents;
};
function showCartContents() {
    var displayDiv = document.querySelector("#display-cart");
    displayDiv.innerHTML = "";
    var allProds = ProductStorage.getAllProducts();
    for (var i = 0; i < allProds.length; i++) {
        var prod = allProds[i];
        /*
            <div class="display-product">
                <h2>Shopping Cart Contents</h2>
                <h3>Widget - $9.99</h3>
                <p>description</p>
            </div>
        */
        var prodDiv = document.createElement("div");
        prodDiv.classList.add("display-product");
        var h2 = document.createElement("h2");
        h2.innerHTML = "Item " + (i + 1);
        prodDiv.appendChild(h2);
        var h3 = document.createElement("h3");
        h3.innerHTML = prod.title + " - " + "$" + prod.price;
        prodDiv.appendChild(h3);
        //displayDiv.appendChild(prodDiv);
        var p = document.createElement("p");
        p.innerHTML = "" + prod.description; // js template literal
        prodDiv.appendChild(p);
        displayDiv.appendChild(prodDiv);
    }
}
/**
 * Displays current year (1999) in the copyright statement
 */
function getYear() {
    var today = new Date();
    var year = today.getFullYear();
    var spanMsg = document.getElementById("span");
    spanMsg.innerHTML = year.toString();
}
/**
 * Wire up all the "buy" buttons
 */
function initBuyButtons() {
    var buyBtns = document.querySelectorAll("div.buy");
    for (var i = 0; i < buyBtns.length; i++) {
        var currBtn = buyBtns[i];
        currBtn.onclick = buyProduct;
    }
}
function buyProduct() {
    var currBtn = this;
    var prod = getProduct(currBtn);
    saveProductToCart(prod);
    displayItemQuantity();
}
function displayItemQuantity() {
    var numItems = ProductStorage.getNumberOfProducts();
    var cartSpan = document.querySelector("div#shopping-cart > span");
    cartSpan.innerHTML = numItems.toString();
}
/**
 * Get currently selected product instance
 */
function getProduct(currBuyBtn) {
    console.log("The buy button that was clicked:");
    console.log(currBuyBtn);
    var currProdDiv = currBuyBtn.parentElement;
    console.log("The parent product div:");
    console.log(currProdDiv);
    var prod = new Product();
    prod.title = currProdDiv.querySelector("div.title").innerHTML;
    var price = currProdDiv.querySelector("div.price").innerHTML;
    price = price.replace("$", "");
    prod.price = parseFloat(price);
    prod.description = currProdDiv.querySelector("div.description").innerHTML;
    console.log(prod);
    return prod;
}
function saveProductToCart(p) {
    ProductStorage.addProduct(p);
    return ProductStorage.getAllProducts();
}
/**
 * Represents a single shopping cart item.
 */
var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());
//  Test Code
/*
    let prod = new Product();
    prod.title = "something";
    prod.description = "description";
    prod.price = 4.99;
*/ 
var ProductStorage = /** @class */ (function () {
    function ProductStorage() {
    }
    // Add Product
    ProductStorage.addProduct = function (p) {
        // Get existing products before adding new products
        var prods = ProductStorage.getAllProducts();
        prods.push(p);
        var data = JSON.stringify(prods);
        localStorage.setItem("prods", data);
    };
    /**
     * Returns all products or an empty array
     * if no products are stored
     */
    ProductStorage.getAllProducts = function () {
        // Read data out of storage
        var data = localStorage.getItem("prods"); // only stores strings
        if (data == null) {
            return new Array(); // empty array of type product
        }
        return JSON.parse(data);
    };
    // Get Number of Products
    ProductStorage.getNumberOfProducts = function () {
        var prods = ProductStorage.getAllProducts();
        return prods.length;
    };
    return ProductStorage;
}());
