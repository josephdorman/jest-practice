import {capitalize, reverse, calculator, caesarChipher} from "./jestPractice";

test('Capitalize first letter (1)', () => {
  expect(capitalize('minecraft')).toBe('Minecraft');
});

test('Capitalize first letter (2)', () => {
  expect(capitalize('valorant')).toBe('Valorant');
});

test('Reverse string (1)', () => {
  expect(reverse('minecraft')).toBe('tfarcenim');
});

test('Reverse string (2)', () => {
  expect(reverse('valorant')).toBe('tnarolav');
});

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







