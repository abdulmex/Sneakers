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


function additemToCart(item) {
    // Get the cart object.
    let cart = localStorage.getItem("cart") || [];
    // Add the item to the cart.
    cart.push(item);
    // Save the cart object.
    localStorage.setItem("cart", JSON.stringify(cart));
    // Add a click listener to the "add to cart" button.
    document.querySelector(".add-to-cart").addEventListener("click", () => {
        // Get the product ID from the button.
        let productId = this.dataset.productId;
        // Get the product details from the server
    }
}