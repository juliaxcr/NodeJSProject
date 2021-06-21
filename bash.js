process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {
  let input = data.toString().trim();

if (input === 'pwd') {
  const exportsFromPwd = require('./pwd')
  exportsFromPwd()
}

// const fs = require('fs').readdir;
const exportsFromLs = require('./ls')
exportsFromLs()

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');
})
