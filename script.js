var initialPrice = document.querySelector('#initial-price');
var stockQuantity = document.querySelector('#stocks-quantity');
var currentPrice = document.querySelector('#current-price');

var checkBtn = document.querySelector('#checkBtn');

checkBtn.addEventListener('click', () => {
    var initialpce = Number(initialPrice.value);
    var stockqntty = Number(stockQuantity.value);
    var currentpce = Number(currentPrice.value);

    calculateProfit(initialpce, stockqntty, currentpce);
})

function calculateProfit(initial, quantity, current) {
    if ( initialPrice.value.length === 0 || currentPrice.value.length === 0 || stockQuantity.value.length === 0 ) {
        outputHandler('PLEASE FILL OUT ALL FIELDS!');
        outputBox.style.color = "red";
    }
    else {
        if ( initial > current ) {
            const loss = ( initial - current ) * quantity;
            const lossPercent = (loss / initial)*100;
            outputHandler('loss is ' + loss + ' and percent is ' + lossPercent + '%');
            outputBox.style.color = "red";
        }
        else if ( current > initial ) {
            const profit = Number( current - initial ) * quantity;
            const profitPercent = (profit / initial)*100;
            outputHandler('profit is ' + profit + ' and percent is ' + profitPercent + '%');
            outputBox.style.color = "green";
        }
        else {
            outputHandler('INVALID INPUT!');
            outputBox.style.color = "red";
        }
    }
}

function outputHandler(message) {
    document.querySelector('#outputBox').innerHTML = message;
}