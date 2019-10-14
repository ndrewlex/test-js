const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Input:  ", input => {
  // TODO: Log the answer in a database
  let stars = "";

  for (let row = 0; row < input; row++) {
    for (let col = 0; col < input; col++) {
      if (col + 1 < input - row) {
        stars += " ";
      } else {
        stars += "*";
      }
    }
    stars += "\n";
  }

  console.log(stars);

  rl.close();
});
