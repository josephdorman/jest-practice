import {capitalize, reverse, calculator, caesarChipher, analyzeArray} from "./jestPractice";

// Capitalize tests
test('Capitalize first letter (1)', () => {
  expect(capitalize('minecraft')).toBe('Minecraft');
});

test('Capitalize first letter (2)', () => {
  expect(capitalize('valorant')).toBe('Valorant');
});

// Reverse tests
test('Reverse string (1)', () => {
  expect(reverse('minecraft')).toBe('tfarcenim');
});

test('Reverse string (2)', () => {
  expect(reverse('valorant')).toBe('tnarolav');
});

// Calculator tests
test('Calculator add', () => {
  expect(calculator('add', 5, 5)).toBe(10);
});

test('Calculator subtract', () => {
  expect(calculator('subtract', 5, 5)).toBe(0);
});

test('Calculator divide', () => {
  expect(calculator('divide', 5, 5)).toBe(1);
});

test('Calculator multiply', () => {
  expect(calculator('multiply', 5, 5)).toBe(25);
});

// Caesar Chipher tests
test('CaesarChipher one letter', () => {
  expect(caesarChipher(5, 'a')).toBe('f');
});

test('CaesarChipher one word', () => {
  expect(caesarChipher(5, 'abc')).toBe('fgh');
});

test('CaesarChipher one sentence', () => {
  expect(caesarChipher(5, 'minecraft is fun')).toBe('rnsjhwfky nx kzs');
});

test('CaesarChipher wraps from z to a', () => {
  expect(caesarChipher(5, 'zombies')).toBe('etrgnjx');
});

test('CaesarChipher wraps from z to a in a sentence', () => {
  expect(caesarChipher(5, 'zombies are very scary')).toBe('etrgnjx fwj ajwd xhfwd');
});

test('CaesarChipher a capital letter', () => {
  expect(caesarChipher(5, 'A')).toBe('F');
});

test('CaesarChipher capitals in a word', () => {
  expect(caesarChipher(5, 'MineCraft')).toBe('RnsjHwfky');
});

test('CaesarChipher capitals in a sentence', () => {
  expect(caesarChipher(5, 'Zombies Are Very Scary')).toBe('Etrgnjx Fwj Ajwd Xhfwd');
});

test('CaesarChipher works with puncuation', () => {
  expect(caesarChipher(5, 'Zombies! Are Scary? Whoa.')).toBe('Etrgnjx! Fwj Xhfwd? Bmtf.');
});

// Analyze array tests
test('Analyze array returns average', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]))
  .toEqual(expect.objectContaining({
    average: 4
  }))
});

test('Analyze array returns length', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]))
  .toEqual(expect.objectContaining({
    length: 6
  }))
});

test('Analyze array returns min', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]))
  .toEqual(expect.objectContaining({
    min: 1
  }))
});






