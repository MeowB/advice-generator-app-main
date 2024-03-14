// Define a function to fetch data from the API
function fetchData(callback) {
	// Make an API request using fetch
	fetch('https://api.adviceslip.com/advice')
	  .then(response => {
		// Check if the request was successful
		if (!response.ok) {
		  throw new Error('Network response was not ok');
		}
		// Parse the JSON response
		return response.json();
	  })
	  .then(data => {
		// Call the callback function with the retrieved data
		callback(null, data);
	  })
	  .catch(error => {
		// Call the callback function with the error
		callback(error, null);
	  });
  }
  
  // Define a callback function to handle the data
  function handleData(error, data) {
	if (error) {
	  console.error('Error fetching data:', error);
	} else {
		// Insert the advice in the page
		const targetId = document.querySelector("#targetId");
		const targetP = document.querySelector("#targetP");
		
		targetId.innerHTML = data.slip.id;
		targetP.innerHTML = `“${data.slip.advice}”`;
	}
  }
  
  const button = document.querySelector("button");

  button.addEventListener("click", () => fetchData(handleData));
  fetchData(handleData)
  // Call the fetchData function with the callback
  
  