import capitalize from "./jestPractice";

test('Capitalize first letter', () => {
  expect(capitalize('minecraft')).toBe('Minecraft');
});