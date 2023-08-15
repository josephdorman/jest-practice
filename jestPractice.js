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

function chipherCapital(letter, shift) {
  // Check if it needs to be wraped
  if (letter + shift > 90) {
    return String.fromCharCode((letter - 26) + shift);
  } 
  
  // Else just shift letter
  return String.fromCharCode(letter + shift);

}

function chipherLowercase(letter, shift) {
  // Check if it needs to be wraped
  if (letter + shift > 122) {
    return String.fromCharCode((letter - 26) + shift);
  } 
  
  // Else just shift letter
  return String.fromCharCode(letter + shift);

}

function caesarChipher (shift, string) {
  let newWord = '';

  for (let i = 0; i < string.length; i++) {
    // Deal with spaces and punctuation in string
    if (string.charCodeAt(i) === 32 || string[i].match(/[!?.]/)) {
      newWord += String.fromCharCode(string.charCodeAt(i));
    }
    // Else if the letter is capital
    else if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
      newWord += chipherCapital(string.charCodeAt(i), shift);
    }
    // Else letter is lowercase
    else {
      newWord += chipherLowercase(string.charCodeAt(i), shift);
    }
    
  }

  return newWord;
}

export {capitalize, reverse, calculator, caesarChipher};