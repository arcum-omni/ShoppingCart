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
    alert("You clicked BUY");
}
