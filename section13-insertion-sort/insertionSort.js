import { swap } from "../util/swap.js";
// we need to take first 2 element and we compare them, if one is bigger we swap them
// we move to the next element, if next is bigger than the previous we swap, and continue until previous is smaller than next
// continue this until the end

/**Insertion Sort. Builds the sort gradually creating a larger left half which is always sorted
 * @description Insertion Sort
 * @param {number[]} arr - unsorted array of numbers.
 * @returns {number[]} sorted array of numbers.  */
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    const currentValue = array[i];
    let j = i - 1;

    for (j; j >= 0 && array[j] > currentValue; j--) {
      array[j + 1] = array[j];
    }

    array[j + 1] = currentValue;
  }
  return array;
}

console.log(insertionSort([5, 3, 1, 4, 2, 0, -2, 10, 120]));
console.log(insertionSort([5, 1, 3, 4]));
console.log(insertionSort([5, -3, 1, -4, 1002, 2, 0, -2, 10, 120]));
