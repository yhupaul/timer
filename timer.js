const args = process.argv.slice(1);
//each element in args is time set number to beep
let timeArr = args.sort((a, b)=> {
  return a - b;
});

let iterator = 1000;
for (const time of timeArr) {
  setTimeout(() => {
    process.stdout.write('beep');
  }, iterator * time)
};
