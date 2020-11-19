const highestTripleProduct = require("./1-algoritme");

test("Returns the correct product", () => {
  let numbers: number[] = [1, 10, 2, 6, 5, 3];
  expect(highestTripleProduct(numbers)).toStrictEqual(300);
});

test("Doesn't change the original list of numbers", () => {
  let numbers: number[] = [1, 10, 2, 6, 5, 3];
  highestTripleProduct(numbers);
  expect(numbers).toStrictEqual([1, 10, 2, 6, 5, 3]);
});

test("Throws error for arrays that are shorter than 3 elements", () => {
  let numbers: number[] = [1, 10];
  expect(() => {
    highestTripleProduct(numbers);
  }).toThrowError("Parameter numbers must contain at least 3 numbers");
});
