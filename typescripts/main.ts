window.onload = function(){
    getYear();
    initBuyButtons();
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
    let currBuyBtn = <HTMLElement>this;
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
}
