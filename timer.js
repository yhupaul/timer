// const args = process.argv.slice(2);
// console.log(args)
// //each element in args is time set number to beep
// let timeArr = args.sort((a, b) => {
//   return a - b;
// });

// let iterator = 1000;
// for (const time of timeArr) {
//   setTimeout(() => {
//     process.stdout.write('beep');
//   }, iterator * time);
// }

const beep = function() {
  process.stdout.write('beep');
}

// delay is expected in seconds
const scheduleBeep = function(delay) {
  delay = Number(delay);
  if (!isNaN(delay) && delay > 0) {
    setTimeout(beep, delay * 1000);
  }
}

const numbers = process.argv.slice(2);
for (const num of numbers) {
  scheduleBeep(num);
}

// const stdin = process.stdin;
// // don't worry about these next two lines of setup work.
// stdin.setRawMode(true);
// stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////

// on any input from stdin (standard input), output a "." to stdout
// stdin.on('data', (key) => {
//   process.stdout.write('.');
//   if (key === '\u0003') {
//     process.exit();
//   }
// });

// console.log('after callback');

