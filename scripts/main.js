window.onload = function () {
    getYear();
    initBuyButtons();
};
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
    alert("You clicked BUY");
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
