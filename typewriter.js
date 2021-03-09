const sentence = "hello there from lighthouse labs";

for (let char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, 1000)
}