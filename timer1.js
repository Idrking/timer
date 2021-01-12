let timers = process.argv.slice(2);

timers = timers.filter(e => (e > 0 && !isNaN(e))).map(e => Number(e));

if (timers.length === 0) {
  return;
}

for (const times of timers) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, times * 1000);
}