const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Input:  ", input => {
  // TODO: Log the answer in a database
  let stars = "";
  let middle = Math.round(input / 2);
  let startPos = middle;
  let totalRow = startPos * 2 + 1;
  for (let row = 0; row < totalRow; row++) {
    if (startPos < 0) {
      startPos = 0;
    }

    if (row <= middle) {
      for (let col = 0; col < input; col++) {
        if (col >= startPos && col < input - startPos) {
          stars += "*";
        } else {
          stars += " ";
        }
      }
      startPos -= 1;
    }

    if (row > middle) {
      for (let col = 0; col < input; col++) {
        if (col >= startPos && col < input - startPos) {
          stars += "*";
        } else {
          stars += " ";
        }
      }
      startPos += 1;
    }
    stars += "\n";
  }

  console.log(stars);

  rl.close();
});
