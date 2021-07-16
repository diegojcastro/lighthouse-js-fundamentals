function howManyHundreds (num) {
  let surplus = num % 100;
  let containerMult = num - surplus;
  return containerMult / 100;
}

// Testing the function
console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);