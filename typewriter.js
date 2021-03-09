const sentence = "hello there from lighthouse labs";
let time = 0;

// const typeDelay = (character) => {
//   setTimeout(() => {
//     process.stdout.write(character)
//   }, 1000)
// }

for (let char of sentence) {
  setTimeout(() => {
    process.stdout.write(char)

  }, time);
  time += 50;
}
