process.stdout.write('prompt > ');

// pwd
const exportsFromPwd = require('./pwd')
exportsFromPwd()

// ls
const exportsFromLs = require('./ls')
exportsFromLs()

// cat
const exportsFromCat = require('./cat');
exportsFromCat();

// curl
const exportFromCurl = require('./curl');
exportFromCurl();

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');
})
