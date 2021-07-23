const merge = (arr1, arr2) => {
  if (arr1.length === 0) {
    return arr2;
  } else if (arr2.length === 0) {
    return arr1;
  }
  let mergedArray = [];
  
  let first = arr1.shift();
  let second = arr2.shift();


  while (first !== undefined && second !== undefined) {
    if (first < second) {
      mergedArray.push(first);
      first = arr1.shift();
    } else {
      mergedArray.push(second);
      second = arr2.shift();
    }
  }
  
  if (first == undefined) {
    mergedArray.push(second);
    for (let num of arr2) {
      mergedArray.push(num);
    }
  } else if (second == undefined) {
    mergedArray.push(first);
    for (let num of arr1) {
      mergedArray.push(num);
    }
  }

  return mergedArray;
}

// Test
console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);