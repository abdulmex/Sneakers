// Get the cart element.
const cart = document.querySelector(".cart");
// Get the product element that was clicked.
const product = event.target.closest(".product");
// Get the product name and price.
const name = product.querySelector(".name").textContent;
const price = product.querySelector(".price").textContent;
// Create a new cart item object.
const cartItem = {
  name: name,
  price: price,
  quantity: 1,
};
// Add the cart item to the cart.
cart.appendChild(cartItem);
const total = cart.querySelector(".total");
total.textContent = cart.querySelectorAll(".cart-item").length * price;