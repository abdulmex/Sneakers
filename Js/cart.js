// Get the cart element.
// const cart = document.querySelector(".cart");
// // Get the product element that was clicked.
// const product = event.target.closest(".product");
// // Get the product name and price.
// const name = product.querySelector(".name").textContent;
// const price = product.querySelector(".price").textContent;
// // Create a new cart item object.
// const cartItem = {
//   name: name,
//   price: price,
//   quantity: 1,
// };
// // Add the cart item to the cart.
// cart.appendChild(cartItem);
// const total = cart.querySelector(".total");
// total.textContent = cart.querySelectorAll(".cart-item").length * price;


function addItemToCart(item) {
  // Get the cart object.
  let cart = localStorage.getItem("cart") || [];

  // Add the item to the cart.
  cart.push(item);

  // Save the cart object.
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Add a click listener to the "add to cart" button.
document.querySelector(".add-to-cart").addEventListener("click", () => {
  // Get the product ID from the button.
  let productId = this.dataset.productId;

  // Get the product details from the server.
  fetch(`/api/products/${productId}`)
    .then(response => response.json())
    .then(product => {
      // Add the product to the cart.
      addItemToCart(product);

      // Show a success message.
      alert("Product added to cart!");
    });
});

// The addItemToCart() function takes an item as its argument. The item can be any object that has a name and price property.
// The addItemToCart() function first gets the cart object from local storage. If the cart object does not exist, it creates a new one.
// The addItemToCart() function then adds the item to the cart object.
// The addItemToCart() function then saves the cart object to local storage.
// The add-to-cart button has an event listener attached to it. When the button is clicked, the event listener will be triggered.
// The event listener gets the product ID from the button.
// The event listener then makes a request to the server to get the product details.
// The event listener then parses the response from the server and gets the product object.
// The event listener then calls the addItemToCart() function and passes the product object as an argument.
// The addItemToCart() function adds the product to the cart and shows a success message.