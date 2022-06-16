const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://aerodatabox.p.rapidapi.com/flights/number/ANE8863/2022-06-16',
  headers: {
    'X-RapidAPI-Key': '57fe8f8eb7msh82261eb4f369855p1fe5e5jsn4f53cd281531',
    'X-RapidAPI-Host': 'aerodatabox.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});