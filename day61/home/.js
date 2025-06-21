// function countElements(arr) {
//   return arr.length;
// }

// function concatenateArrays(arr1, arr2) {
//   return arr1.concat(arr2);
// }


// function pushValue(arr, value) {
//   return arr.push(value);
// }

// function popElement(arr) {
//   return arr.pop();
// }

// function concatAndPush(arr1, arr2, value) {
//   let newArray = arr1.concat(arr2);
//   newArray.push(value);
//   return newArray;
// }

// function concatAndPush(arr1, arr2, value) {
//   let newArray = arr1.concat(arr2);
//   newArray.push(value);
//   return newArray;
// }

// function sumArray(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

// function evenIndexedElements(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i += 2) {
//     result.push(arr[i]);
//   }
//   return result;
// }

function stringLengths(arr) {
  let lengths = [];
  for (let i = 0; i < arr.length; i++) {
    lengths.push(arr[i].length);
  }
  return lengths;
}
