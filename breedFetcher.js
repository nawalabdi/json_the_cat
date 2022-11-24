const request = require('request');
const args = process.argv.slice(2);
const breedName = args[0];


request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, response, body) {
  if (error) {
    console.log("error", error);
    return;
  }

  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // // console.log('body:', body); // Print the HTML for the Google homepage.
  // console.log(typeof body)
  const data = JSON.parse(body);
  const breedObj = data[0];
  if (!breedObj) {
    console.log("breed name is not found");
    return;
  }

  console.log(data[0].description);

});
