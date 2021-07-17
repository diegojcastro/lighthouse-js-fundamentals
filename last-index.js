function lastIndexOf(array, num) {
  if (array.length === 0) {
    return -1;
  }

  let lastEntry = -1;
  array.forEach( function(elem, index) {
    if (elem === num) {
      lastEntry = index;
    }
  });
  return lastEntry;
}

// Test
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);