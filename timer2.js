const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  if (key === '\u0062') {
    process.stdout.write('\x07');
  }

  if (key === '\u0003') {
    console.log('Thanks for using me, ciao!');
    process.exit();
  }

  if (isNumber(key)) {
    console.log(`Setting timer for ${key} seconds...`);
    setTimeout(() => {
      process.stdout.write('\x07');
    }, parseInt(key) * 1000);
  }
});

const isNumber = (key) => {
  return parseInt(key) > 0 && parseInt(key) < 10;
};