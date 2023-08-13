function capitalize (string) {
  const capLetter = string[0].toUpperCase();
  const restStr = string.slice(1);
  return capLetter + restStr;
}

function reverse (string) {
  const reverseString = string.split("").reverse().join("");

  return reverseString;
}

export {capitalize, reverse};