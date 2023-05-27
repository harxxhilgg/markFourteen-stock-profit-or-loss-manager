const initialPrice = document.getElementById('initial-price');
const stockQuantity = document.getElementById('stocks-quantity');
const currentPrice = document.getElementById('current-price');

const checkBtn = document.querySelector('#checkBtn');

const initial = Number(initialPrice.value);
const current = Number(currentPrice.value);
const stock = Number(stockQuantity.value);

checkBtn.addEventListener('click', () => {
    calculateProfit();
})

function calculateProfit() {
    if ( initialPrice.value.length === 0 || currentPrice.value.length === 0 || stockQuantity.value.length === 0 ) {
        outputHandler('PLEASE FILL OUT ALL FIELDS!');
        outputBox.style.color = "red";
    }
    else {
        if ( initial > current ) {
            const loss = ( initial - current );
            const lossPercent = (loss / current)*100;
            outputHandler('loss is ' + loss + ' and percent is ' + lossPercent + '%');
            outputBox.style.color = "red";
        }
        else if ( current > initial ) {
            const profit = Number( current - initial );
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