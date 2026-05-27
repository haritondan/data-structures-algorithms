/**Function will take 2 sorted arrays and return one sorted array with all the values.
 * @description Merge sorted arrays
 * @param {number[]} first - first sorted array of numbers.
 * @param {number[]} second - second sorted array of numbers.
 * @returns {number[]} sorted array of numbers.  */
const merge = (arr1, arr2) => {
  const sortedArr = [];

  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    const arr1Element = arr1[i];
    const arr2Element = arr2[j];

    if (arr1Element < arr2Element) {
      sortedArr.push(arr1Element);
      i++;
    } else {
      sortedArr.push(arr2Element);
      j++;
    }
  }

  while (i < arr1.length) {
    sortedArr.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    sortedArr.push(arr2[j]);
    j++;
  }

  return sortedArr;
};

// console.log(merge([1, 2, 7, 9], [3, 4, 5]));

/**Merge sort will take an array of unsorted numbers and return a sorted array of numbers
 * @description Merge Sort
 * @param {number[]} array - first sorted array of numbers.
 * @returns {number[]} sorted array of numbers.  */
const mergeSort = (array) => {
  if (array.length <= 1) return array;

  let midpoint = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, midpoint));
  const right = mergeSort(array.slice(midpoint));

  return merge(left, right);
};

console.log(mergeSort([1, 3, 5, 4, 9, -1, 0, 290]));
