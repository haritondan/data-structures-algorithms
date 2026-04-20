import { swap } from "../util/swap.js";

const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let min = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[min] > array[j]) {
        min = j;
      }
    }

    if (min !== i) {
      swap(array, i, min);
    }
  }
  return array;
};

console.log(selectionSort([3, 1, 5, 7, 6, 20, 35, 1, 23, 123, 4, 8, 9]));
console.log(selectionSort([3, 1, 5, 7, 6, 10, 2]));
