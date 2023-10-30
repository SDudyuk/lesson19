function* fibonacci(n) {
    let number1 = 0;
    let number2 = 1;
    let numberNext;

    for (let i = 1; i <= n; i++) {
        yield number1;
        numberNext = number1 + number2;
        number1 = number2;
        number2 = numberNext;
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
