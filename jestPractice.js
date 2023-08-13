function capitalize (string) {
  const capLetter = string[0].toUpperCase();
  const restStr = string.slice(1);
  return capLetter + restStr;
}

export {capitalize};