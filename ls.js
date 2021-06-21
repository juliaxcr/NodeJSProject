module.exports = function() {process.stdin.on('data', (data) => {
  const fs = require('fs');
  let input = data.toString().trim();
  if (input === 'ls') {
    process.stdout.write(fs.readdir('./', 'utf8', (err, files) => {
      if (err) {
        throw err;
      } else {
        process.stdout.write(files.join('\n'))
        process.stdout.write('prompt > ')
      }
    }
    ))
  }
})
}
