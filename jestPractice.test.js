import {capitalize, reverse} from "./jestPractice";

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