import capitalize from "./capitalize";

test("Throw when input is not a string", () => {
  expect(() => {
    capitalize(1);
  }).toThrow();

  expect(() => {
    capitalize("1");
  }).toThrow();

  expect(() => {
    capitalize("1a");
  }).not.toThrow();
});

test("Return same characters", () => {
  expect(capitalize("HELLO").toLowerCase()).toBe("hello");
  expect(capitalize("1$TRING?").toLowerCase()).toBe("1$tring?");
});

test("Only first alphabet in string is capitalized", () => {
  expect(capitalize("hello")).toBe("Hello");
  expect(capitalize("heLLo")).toBe("Hello");
  expect(capitalize("1maCh5")).toBe("1Mach5");
  expect(capitalize("this is a serious TEST.")).toBe("This is a serious test.");
  expect(capitalize("a")).toBe("A");
});
