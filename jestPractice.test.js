import capitalize from "./jestPractice";

test('Capitalize first letter (1)', () => {
  expect(capitalize('minecraft')).toBe('Minecraft');
});

test('Capitalize first letter (2)', () => {
  expect(capitalize('valorant')).toBe('Valorant');
});