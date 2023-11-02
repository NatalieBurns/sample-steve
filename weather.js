// This function will be called once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Fetch the weather data from the API
    fetch('https://api.weather.gov/gridpoints/ILN/40,72/forecast/hourly')
      .then(function(response) {
        // Check if the request was successful
        if (response.ok) {
          return response.json(); // Parse the JSON in the response
        } else {
          throw new Error('Failed to retrieve weather data');
        }
      })
      .then(function(data) {
        // Extract the necessary data
        const temperature = data.properties.periods[0].temperature + ' ' + data.properties.periods[0].temperatureUnit;
        const description = data.properties.periods[0].shortForecast;
  
        // Plug the values into the HTML snippet
        document.getElementById('temperature').textContent = temperature;
        document.getElementById('description').textContent = description;
      })
      .catch(function(error) {
        console.error('Error:', error);
      });
  });
