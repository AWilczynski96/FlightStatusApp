const axios = require("axios");
const { response } = require("express");
const express = require("express");
const app = express();
app.use(express.json());

const options = {
  method: "GET",
  url: "https://aerodatabox.p.rapidapi.com/flights/number/ANE8863/2022-06-16",
  headers: {
    "X-RapidAPI-Key": "57fe8f8eb7msh82261eb4f369855p1fe5e5jsn4f53cd281531",
    "X-RapidAPI-Host": "aerodatabox.p.rapidapi.com",
  },
};

// axios
//   .request(options)
//   .then(function (response) {
//     const data = response;
//   })
//   .catch(function (error) {
//     console.error(error);
//   });
// async function getData() {
//   try {
//     const { data } = await axios.request(options).then
//     return data;
//   } catch (err) {
//     console.log(err);
//   }
// }

app.get("/flightData", (req, res) => {
  res.json("coscoscos");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
