/**
 * HighestTripleProduct returns the highest product between three of the numbers in a given list of integers
 * @param numbers is a list of integers
 */

function highestTripleProduct(numbers: number[]) {
  //Throws error if there is too few numbers in the list
  if (numbers.length <= 2) {
    throw new Error("Parameter numbers must contain at least 3 numbers");
  }

  //Sorts the list by highest to lowest
  let sorted: number[] = [...numbers].sort((a, b) => {
    return b - a;
  });

  //Returns the product of the first three numbers
  return sorted.slice(0, 3).reduce((a, b) => a * b);
}

module.exports = highestTripleProduct;
