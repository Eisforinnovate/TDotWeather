var UI = require('ui');
var ajax = require('ajax');

// Create a Card with title and subtitle
var card = new UI.Card({
  title:'T-Dot Weather',
  subtitle:'0 to 100 real quick....'
});

// Display the Card
card.show();

// Construct URL
var cityName = 'Toronto';
var URL = 'http://api.openweathermap.org/data/2.5/weather?q=Toronto,Ca' + cityName;

// Make the request
ajax(
  {
    url: URL,
    type: 'json'
  },
  function(data) {
    // Success!
    console.log("Successfully fetched weather data!");

    // Extract data
    var location = data.weather;
    var temperature = Math.round(data.main.temp - 273.15) + "C";

    // Always upper-case first letter of description
    var description = data.weather[0].description;
    description = description.charAt(0).toUpperCase() + description.substring(1);

    // Show to user
    card.subtitle(location + ", " + temperature);
    card.body(description);
  },
  function(error) {
    // Failure!
    console.log('Failed fetching weather data: ' + error);
  }
);
