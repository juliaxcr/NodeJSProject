module.exports = function() {process.stdin.on('data', (data) => {
  let input = data.toString().trim();
  let url = input.substring(5, input.length);
  let command = input.substring(0, 4);
  if (command === 'curl') {
    const request = require('request');
    request(url, function (error, response, body) {
      // console.error('error:', error); // Print the error if one occurred
      // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      if (error) {
        throw error;
      } else {
      console.log('body:', body); // Print the HTML for the Google homepage.
      }
    })
  }
})}