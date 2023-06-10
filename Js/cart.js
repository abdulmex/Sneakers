// Get the cart element.
const cart = document.querySelector(".cart");
// Get the product element that was clicked.
const product = event.target.closest(".product");
// Get the product name and price.
const name = product.querySelector(".name").textContent;
const price = product.querySelector(".price").textContent;
// Create a new cart item object.