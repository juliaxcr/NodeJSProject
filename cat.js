module.exports = function() {process.stdin.on('data', (data) => {
  const fs = require('fs');
  let input = data.toString().trim();
  let fileName = input.substring(4, input.length);
  let command = input.substring(0, 3);
  if (command === 'cat') {
    fs.readFile(fileName, (err, files) => {
      if (err) {
        throw err;
      } else {
        process.stdout.write(files);
        process.stdout.write('prompt > ')
      }
    })
  }
})
}