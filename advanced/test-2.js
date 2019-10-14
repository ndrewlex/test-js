const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Input:  ", input => {
  // TODO: Log the answer in a database

  let number = [1];
  let lastNumber = number[number.length - 1];

  while (lastNumber < input) {
    const beforeLastNumber = number[number.length - 2];
    const total = lastNumber + beforeLastNumber;
    const addedNumber = !beforeLastNumber ? lastNumber : total;

    addedNumber < input && number.push(addedNumber);
    lastNumber = addedNumber;
  }

  number.forEach(element => {
    console.log(element);
  });

  rl.close();
});
