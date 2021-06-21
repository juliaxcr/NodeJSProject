module.exports = function() {process.stdin.on('data', (data) => {
  let input = data.toString().trim();
  if (input === 'pwd') {  
    process.stdout.write(process.execPath);
    process.stdout.write('\nprompt > ');
  }
})
}