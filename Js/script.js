// Make a GET request to the Sneakers API
fetch('https://api.sneakers.com/sneakers')
  .then(response => response.json())
  .then(data => {
    // Process the response data
    const sneakers = data.results;

    // Use the sneakers data as needed
    console.log(sneakers);
  })
  .catch(error => {
    console.error('Error:', error);
  });
