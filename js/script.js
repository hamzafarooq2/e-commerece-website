// --------------
var cartButton = document.getElementById("cart-btn");
cartButton.addEventListener("click", function () {
  const params = new URL(location).searchParams;
  // const image = params.get("image");
  const productTitle = document.getElementById("productTitle").innerText.trim();
  const productPrice = document.getElementById("productPrice").innerText.trim();
  const productQuantity = document.getElementById("quantity").value;
  // const productImage =(document.getElementById(
  //   "product-main-image"
  // ).innerHTML = `<img src ='./images/${image}' />`;

  let products = window.localStorage.getItem("products") || "[]";

  products = JSON.parse(products); // converted to javascript object
  const newProduct = {
    title: productTitle,
    price: productPrice,
    quantity: productQuantity,
    productId: new Date().valueOf(),
    // image,
  };
  products.push(newProduct);

  window.localStorage.setItem("products", JSON.stringify(products)); // one is key and other is value, create json string of object and array
  window.location.href = "cartPage.html";
});

function productsLoad() {
  var grandTotal = 0;
  let products = window.localStorage.getItem("products") || "[]";
  products = JSON.parse(products);
  console.log(products);
  products.forEach((p) => {
    document.getElementById("productRow").innerHTML += `
        <tr class="main-row">
       
          <td class="pic"><img src="images/1ss.webp" ; /></td>
          <td>${p.title}</td>
          <td>${p.price}</td>
          <td>${p.quantity} </td>
          <td>${p.quantity * p.price}</td>
          <td><button style="cursor:pointer"  onclick="deleteRow('${
            p.productId
          }')">Delete</button></td>
        </tr>
      `;

    grandTotal += p.quantity * p.price;
    document.getElementById("grandPrice").innerHTML = grandTotal;
  });
}
function deleteRow(productId) {
  console.log(productId);
  const storedData = localStorage.getItem("products"); // Retrieve existing data
  const parsedData = JSON.parse(storedData); // Parse existing data into a JS object
  const rowIndex = parsedData.findIndex((row) => row.productId == productId); // Find the index of the row to delete
  parsedData.splice(rowIndex, 1); // Remove the row from the array
  const updatedData = JSON.stringify(parsedData); // Stringify the updated data
  localStorage.setItem("products", updatedData); // Store the updated data back into local storage
  location.reload();
}

// -----------Displaying userInfo Data------

function showData() {
  const userName = document.getElementById("name").value;
  const userEmail = document.getElementById("email").value;
  const userPassword = document.getElementById("password").value;
  const userPhone = document.getElementById("phone").value;
  const userAddress = document.getElementById("address").value;

  let userInfo = window.localStorage.getItem("userInfo") || "[]";
  userInfo = JSON.parse(userInfo);
  const newUser = {
    name: userName,
    email: userEmail,
    password: userPassword,
    phone: userPhone,
    address: userAddress,
  };
  userInfo.push(newUser);
  window.localStorage.setItem("userInfo", JSON.stringify(userInfo)); // one is key and other is value
}
