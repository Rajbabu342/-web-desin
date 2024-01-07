

function isArmstrongNumber(number) {
  const numString = number.toString();
  const numDigits = numString.length;
  let sum = 0;

  for (let i = 0; i < numDigits; i++) {
    sum += Math.pow(parseInt(numString[i]), numDigits);
  }

  return sum === number;
}

rl.question('Enter a number to check if it is an Armstrong number: ', (inputNumber) => {
  const number = parseInt(inputNumber);

  if (isNaN(number)) {
    console.log('Invalid input. Please enter a valid number.');
    rl.close();
  } else {
    const result = isArmstrongNumber(number);
    console.log(`${number} is ${result ? '' : 'not '}an Armstrong number.`);
    rl.close();
  }
});node