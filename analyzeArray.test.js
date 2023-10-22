import analyzeArray from "./analyzeArray";

test("result is an object with 4 required properties", () => {
  expect(analyzeArray([1, 2])).toEqual(
    expect.objectContaining({
      average: expect.any(Number),
      min: expect.any(Number),
      max: expect.any(Number),
      length: expect.any(Number),
    })
  );
});

test("[1]", () => {
  expect(analyzeArray([1])).toEqual({
    average: 1,
    min: 1,
    max: 1,
    length: 1,
  });
});

test("[1,2,3]", () => {
  expect(analyzeArray([1, 2, 3])).toEqual({
    average: 2,
    min: 1,
    max: 3,
    length: 3,
  });
});

test("[80,77,88,95,68]", () => {
  expect(analyzeArray([80, 77, 88, 95, 68])).toEqual({
    average: 81.6,
    min: 68,
    max: 95,
    length: 5,
  });
});
