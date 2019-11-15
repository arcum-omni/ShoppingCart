window.onload = function(){
    getYear();
    initBuyButtons();
    displayItemQuantity();

    let cartIcon = <HTMLElement>document.querySelector("#shopping-cart");
    cartIcon.onclick = showCartContents;
}

function showCartContents(){
    let displayDiv = document.querySelector("#display-cart");
    displayDiv.innerHTML = "";

    let allProds = ProductStorage.getAllProducts();

    for(let i=0; i<allProds.length; i++){
        const prod = allProds[i];
        /*
            <div class="display-product">
                <h2>Shopping Cart Contents</h2>
                <h3>Widget - $9.99</h3>
                <p>description</p>
            </div>
        */
        let prodDiv = document.createElement("div");
        prodDiv.classList.add("display-product");

        let h2 = document.createElement("h2");
        h2.innerHTML = "Item " + (i+1);
        prodDiv.appendChild(h2);
        
        let h3 = document.createElement("h3");
        h3.innerHTML = prod.title + " - " + "$" + prod.price;
        prodDiv.appendChild(h3);
        //displayDiv.appendChild(prodDiv);
        
        let p = document.createElement("p");
        p.innerHTML = `${prod.description}`; // js template literal
        prodDiv.appendChild(p);

        displayDiv.appendChild(prodDiv);
    }
}

/**
 * Displays current year (1999) in the copyright statement
 */
function getYear(){
    var today = new Date();
    var year = today.getFullYear();
    let spanMsg:HTMLElement = <HTMLElement>document.getElementById("span");
    spanMsg.innerHTML = year.toString();
}

/**
 * Wire up all the "buy" buttons
 */
function initBuyButtons() {
    let buyBtns = document.querySelectorAll("div.buy");
    for (let i = 0; i < buyBtns.length; i++) {
        let currBtn = <HTMLElement>buyBtns[i];
        currBtn.onclick = buyProduct;
    }
}

function buyProduct(){
    let currBtn = this;
    let prod = getProduct(currBtn);

    saveProductToCart(prod);

    displayItemQuantity();
}

function displayItemQuantity(){
    let numItems = ProductStorage.getNumberOfProducts();
    let cartSpan = document.querySelector("div#shopping-cart > span");
    cartSpan.innerHTML = numItems.toString();
}

/**
 * Get currently selected product instance 
 */
function getProduct(currBuyBtn:HTMLElement) {
    console.log("The buy button that was clicked:");
    console.log(currBuyBtn);

    let currProdDiv = currBuyBtn.parentElement;
    console.log("The parent product div:");
    console.log(currProdDiv);
    
    let prod = new Product();
    prod.title = currProdDiv.querySelector("div.title").innerHTML;
    
    let price = currProdDiv.querySelector("div.price").innerHTML;
    price = price.replace("$", "");
    prod.price = parseFloat(price);

    prod.description = currProdDiv.querySelector("div.description").innerHTML;
        console.log(prod);
    return prod;
}

function saveProductToCart(p:Product):Product[]{ // return an array of products
    ProductStorage.addProduct(p);
    return ProductStorage.getAllProducts();
}


