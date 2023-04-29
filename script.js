var cartButton = document.getElementById("cart-btn");
var targetDiv = document.getElementById("target-div");

cartButton.addEventListener("click", function () {
  // creating new Element\
  var newDiv = document.createElement("div");
  newDiv.innerHTML = "New Div";

  // Append the new div to the existing div
  targetDiv.appendChild(newDiv);
});

// ------------------------
