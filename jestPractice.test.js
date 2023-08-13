import capitalize from "./jestPractice";

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