import { swap } from "../util/swap.js";

/**Unoptimized Bubble Sort that will loop based on the length of the array for the outer and the inner loop.
 * Making it a much slower version.
 * @param {number[]} arr - unsorted array of numbers.
 * @returns {number[]} sorted array of numbers.  */
function bubbleSortUnoptimized(arr) {
  for (let index = 0; index < arr.length; index++) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
      }
    }
  }
  return arr;
}

/**Optimized Bubble Sort. We shrink the first loop size by omitting the last value since we know that the last value will be the highest. 
This optimization reduced the loops made by the outer loop by shrinking it and the inner loop that is based on the outer loop.
 * @description Bubble Sort
 * @param {number[]} arr - unsorted array of numbers.
 * @returns {number[]} sorted array of numbers.  */
function bubbleSort(arr) {
  for (let index = arr.length; index >= 0; index--) {
    for (let i = 0; i < index - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
      }
    }
  }
  return arr;
}

/**Optimized Bubble Sort with Early Return. If no swaps were made in the last iteration we break the loop since no more swaps will happen in the next iterations either
 * @description Bubble Sort
 * @param {number[]} arr - unsorted array of numbers.
 * @returns {number[]} sorted array of numbers.  */
function bubbleSortEarly(arr) {
  for (let index = arr.length; index >= 0; index--) {
    let noSwaps = true;
    for (let i = 0; i < index - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

console.log("optimized", bubbleSort([10, 12, 124, 123, 1000]));
console.log("optimized early", bubbleSortEarly([10, 12, 124, 123, 1000]));
console.log("unoptimized", bubbleSortUnoptimized([1, 10, 12, 124, 123, 1000]));
