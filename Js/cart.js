// // Define the cart object
// const cart = {
//     items: [],
  
//     // Add an item to the cart
//     addItem: function (item) {
//       this.items.push(item);
//     },
  
//     // Remove an item from the cart
//     removeItem: function (item) {
//       const index = this.items.indexOf(item);
//       if (index !== -1) {
//         this.items.splice(index, 1);
//       }
//     },
  
//     // Get the total number of items in the cart
//     getTotalItems: function () {
//       return this.items.length;
//     },
  
//     // Get the total price of all items in the cart
//     getTotalPrice: function () {
//       let totalPrice = 0;
//       for (let i = 0; i < this.items.length; i++) {
//         totalPrice += this.items[i].price;
//       }
//       return totalPrice;
//     },
  
//     // Print the contents of the cart
//     printCart: function () {
//       console.log("Cart Contents:");
//       for (let i = 0; i < this.items.length; i++) {
//         console.log(
//           `${this.items[i].name} - $${this.items[i].price.toFixed(2)}`
//         );
//       }
//       console.log(`Total Items: ${this.getTotalItems()}`);
//       console.log(`Total Price: $${this.getTotalPrice().toFixed(2)}`);
//     },
//   };
  
//   // Example usage
//   const item1 = { name: "Item 1", price: 10.99 };
//   const item2 = { name: "Item 2", price: 5.99 };
//   const item3 = { name: "Item 3", price: 7.99 };
  
//   cart.addItem(item1);
//   cart.addItem(item2);
//   cart.addItem(item3);
//   cart.printCart();
  
//   cart.removeItem(item2);
//   cart.printCart();
  
