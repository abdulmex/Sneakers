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


