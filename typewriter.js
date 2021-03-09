const sentence = "hello there from lighthouse labs";
let timeout = 0;

// const typeDelay = (character,callback) => {
//   setTimeout(() => {
//     process.stdout.write(character)
// if (callback !== null) {
//   callback()
// }
//   }, 1000)

// }

for (let char of sentence) {
  setTimeout(() => {
    process.stdout.write(char)

  }, timeout);
  timeout += 50;
}
setTimeout(() => { // this needs to occur after all the scheduled tasks are complete, not din the main thread
  process.stdout.write('\n');
}, timeout + 1)
