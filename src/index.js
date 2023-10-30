function* fibonacci(n) {
  let n1 = 0;
  let n2 = 1;
  let next;

  for (let i = 1; i<=n; i++)  {
    yield n1;
    next = n1 + n2;
    n1 = n2;
    n2 = next;
  }
}

const fibGen = fibonacci(10);

console.log(fibGen.next().value);
console.log(fibGen.next().value);
console.log(fibGen.next().value);
console.log(fibGen.next().value);
console.log(fibGen.next().value);
console.log(fibGen.next().value);
console.log(fibGen.next().value);
console.log(fibGen.next().value);
console.log(fibGen.next().value);
console.log(fibGen.next().value);
console.log(fibGen.next().value);