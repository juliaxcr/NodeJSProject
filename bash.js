process.stdout.write('prompt > ');

// pwd
const exportsFromPwd = require('./pwd')
exportsFromPwd()

// const fs = require('fs').readdir;
const exportsFromLs = require('./ls')
exportsFromLs()

// cat
const exportsFromCat = require('./cat');
exportsFromCat();

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');
})
