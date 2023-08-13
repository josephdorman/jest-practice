function capitalize (string) {
  const capLetter = string[0].toUpperCase();
  const restStr = string.slice(1);
  return capLetter + restStr;
}

function reverse (string) {
  const reverseString = string.split("").reverse().join("");

  return reverseString;
}

function calculator (operator, num1, num2) {
  if (operator === 'add') {
    return num1 + num2;
  }
  if (operator === 'subtract') {
    return num1 - num2;
  }
  if (operator === 'divide') {
    return num1 / num2;
  }
  if (operator === 'multiply') {
    return num1 * num2;
  }
  
  return 'Operator doesnt exist';
}

export {capitalize, reverse, calculator};