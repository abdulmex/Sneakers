// Step 1: Create an HTML file with a placeholder element
// <div id="result"></div>

// Step 2: Create a JavaScript file and link it to your HTML file using a <script> tag

// Step 3: JavaScript code
const apiUrl = "https://fakestoreapi.com/products";

// Function to display the fetched data
function displayData(data) {
  const resultElement = document.getElementById("result");

  // Clear previous data
  resultElement.innerHTML = "";

  // Create a div for each product
  data.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.innerHTML = `
      <h2>${product.title}</h2>
      <p>Price: $${product.price}</p>
      <p>Category: ${product.category}</p>
      <img src="${product.image}" alt="${product.title}" />
    `;
    resultElement.appendChild(productDiv);
  });
}

// Fetch data from the API
fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    displayData(data);
  })
  .catch((error) => {
    console.log("An error occurred:", error);
  });
