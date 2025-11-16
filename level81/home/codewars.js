function sumTwoSmallestNumbers(numbers){  
  numbers = numbers.sort(function(a, b){return a - b; });
  return numbers[0] + numbers[1];
};
/////////////////////////////////////////////////////
function isSquare(n) {
  return Number.isInteger(Math.sqrt(n));
}
/////////////////////////////////////////////////////
function repeatStr (n, s) {
  return s.repeat(n);
}
/////////////////////////////////////////////////////
function isIsogram(str){
	return new Set(str.toUpperCase()).size == str.length;
}
/////////////////////////////////////////////////////
const sumNested = arr => {
  if (Array.isArray(arr)) {
    return arr.reduce(function(accumulator, currentValue) {
      return accumulator + sumNested(currentValue);
    }, 0);
  } else {
    return arr;
  }
};