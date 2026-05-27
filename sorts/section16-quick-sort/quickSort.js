import { swap } from "../util/swap.js";

// we select the pivot as first element
// we count how many elements are smaller than the pivot and swap the smaller element with the element next to the pivot + 1
// at the end we swap the value from the pivot index we counted with the last pivotIndex value

function pivotHelper(array, start = 0, end = array.length - 1) {
  let pivot = array[start];
  let swapIndex = start;

  for (let index = start + 1; index <= end; index++) {
    if (pivot > array[index]) {
      swapIndex++;
      swap(array, index, swapIndex);
    }
  }

  swap(array, start, swapIndex);

  return swapIndex;
}

// console.log(pivotHelper([8, 10, 5, 20, 9909, 1, 2, 4, 5]));

const quickSort = (array, left = 0, right = array.length - 1) => {
  if (left < right) {
    let pivotIndex = pivotHelper(array, left, right);
    quickSort(array, left, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, right);
  }

  return array;
};

console.log(quickSort([4, 6, 9, 1, 2, 5, 3]));
