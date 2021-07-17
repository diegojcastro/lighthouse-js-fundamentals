function range(start, end, step) {
  let arr = [];

  // Return empty array if given wrong parameters
  if (start > end || step <= 0 || start === undefined || end === undefined || step === undefined) {
    return [];
  }

  let num = start;
  while (num <= end) {
    arr.push(num);
    num += step;
  }

  return arr;

}

// Testing
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));