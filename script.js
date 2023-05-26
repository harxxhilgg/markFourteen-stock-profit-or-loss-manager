var initialPrice = document.querySelector('#initial-price');
var stockQuantity = document.querySelector('#stocks-quantity');
var currentPrice = document.querySelector('#current-price');

var checkBtn = document.querySelector('#checkBtn');

checkBtn.addEventListener('click', () => {
    calculateProfit();
    currentValueColor()
})

function calculateProfit() {
    if ( initialPrice.value > currentPrice.value ) {
        var loss = ( initialPrice.value - currentPrice.value ) * stockQuantity.value;
        var lossPercent = ( loss / initialPrice.value ) * 100;
        outputHandler("the loss is " + loss + " and the percent is " + lossPercent + "%");
    }
    else if ( currentPrice.value > initialPrice.value ) {
        var profit = ( currentPrice.value - initialPrice.value ) * stockQuantity.value;
        var profitPercent = ( profit / initialPrice.value ) * 100;
        outputHandler("the profit is "+ profit +" and the percent is " + profitPercent +"%");
    }
    else {
        outputHandler("INVALID INPUT!");
    }
}

function outputHandler(message) {
    document.querySelector('#outputBox').innerHTML = message;
}

function currentValueColor() {
    var color = "";
    if ( initialPrice.value > currentPrice.value) {
        outputBox.style.color = "red"; 
    }
    else if ( currentPrice.value > initialPrice.value ) {
        outputBox.style.color = "green";
    }
    else {
        outputBox.style.color = "red";
    }
}