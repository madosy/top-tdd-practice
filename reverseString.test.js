import reverseString from "./reverseString";

test("Returns a string", () => {
  const resultType = typeof reverseString("hello");
  expect(resultType).toBe("string");
});

test("'hello' should return 'olleh'", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("works with numbers", () => {
  expect(reverseString(1234)).toBe("4321");
});

test("Capitalization is maintained", () => {
  expect(reverseString("Racecar")).toBe("racecaR");
});

test("symbols, spaces and special characters are maintained", () => {
  expect(reverseString("Les Misérables")).toBe("selbarésiM seL");
});
