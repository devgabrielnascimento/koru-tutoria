function sum(a, b) {
  return a + b;
}
console.log(sum(1 / 0, -1 + 3));

//With Arrow Function:
const sum2 = (a, b) => a + b;
console.log(sum2(4, 5));
