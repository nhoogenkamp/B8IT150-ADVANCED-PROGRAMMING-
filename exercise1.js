function sumMultiples(n, a, b) {
  let sum = 0;

  for (let i = 1; i < n; i++) {
    if (i % a === 0 || i % b === 0) {
      sum += i;
    }
  }

  return sum;
}
console.log(sumMultiples(10, 3, 5));
