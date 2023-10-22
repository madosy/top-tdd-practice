import caesarCipher from "./caesarCipher";

test("lowercase character", () => {
  expect(caesarCipher("a", 0)).toBe("a");
  expect(caesarCipher("a", 1)).toBe("b");
  expect(caesarCipher("z", 1)).toBe("a");
});

test("uppercase character", () => {
  expect(caesarCipher("Z", 1)).toBe("A");
  expect(caesarCipher("C", 1)).toBe("D");
});

test("word test", () => {
  expect(caesarCipher("test", 1)).toBe("uftu");
  expect(caesarCipher("wallaby", 21)).toBe("rvggvwt");
  expect(caesarCipher("Zimbabwe", 25)).toBe("Yhlazavd");
});

test("spaces and special characters", () => {
  expect(caesarCipher(" ", 1)).toBe(" ");
  expect(caesarCipher("!", 2)).toBe("!");
  expect(caesarCipher("'", 25)).toBe("'");
});

test("phrase test", () => {
  expect(caesarCipher("Defend the east wall of the castle!", 25)).toBe(
    "Cdedmc sgd dzrs vzkk ne sgd bzrskd!"
  );
});
