var initialPrice = document.querySelector("#initialPrice");
var stockQuantity = document.querySelector("#stocksQuantity");
var currentPrice = document.querySelector("#currentPrice");
var checkBtn = document.querySelector("#checkBtn");

checkBtn.addEventListener("click", () => {
  var initialpce = Number(initialPrice.value);
  var stockqntty = Number(stockQuantity.value);
  var currentpce = Number(currentPrice.value);

  calculateProfit(initialpce, stockqntty, currentpce);
});

function calculateProfit(initial, quantity, current) {
  if (
    initialPrice.value.length === 0 ||
    currentPrice.value.length === 0 ||
    stockQuantity.value.length === 0
  ) {
    outputHandler("PLEASE FILL OUT ALL FIELDS!");
    outputBox.style.color = "red";
  } else {
    if (initial > current) {
      var loss = (initial - current) * quantity;
      var l_loss = loss.toFixed(2);
      var lossPercent = (loss / initial) * 100;
      var l_percent = lossPercent.toFixed(2);
      outputHandler(
        "absolute loss is " + l_loss + " and percent is " + l_percent + "%"
      );
      lossColorHandler();
    } else if (current > initial) {
      var profit = Number(current - initial) * quantity;
      var p_profit = profit.toFixed(2);
      var profitPercent = (profit / initial) * 100;
      var p_percent = profitPercent.toFixed(2);
      outputHandler(
        "absolute profit is " + p_profit + " and percent is " + p_percent + "%"
      );
      profitColorHandler();
    } else {
      outputHandler("INVALID INPUT!");
      outputBox.style.color = "red";
    }
  }
}

function outputHandler(message) {
  document.querySelector("#outputBox").innerHTML = message;
}

function profitColorHandler() {
  outputBox.style.color = "green";
}

function lossColorHandler() {
  outputBox.style.color = "red";
}
