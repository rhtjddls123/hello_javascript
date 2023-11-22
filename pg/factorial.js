function factorial(n) {
    console.log(n);
    if (n === 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(10));
console.log(factorial(11));

function memoized(fn) {
    const memoizedTable = {};
    return function (k) {
        return memoizedTable[k] || (memoizedTable[k] = fn(k));
    };
}

const memo = memoized(function (n) {
    console.log(n);
    if (n === 1) return 1;
    return n * memo(n - 1);
});

console.log(memo(10));
console.log(memo(11));

function factorialTCO(n, acc = 1) {
    if (n === 0) return acc;
    return factorialTCO(n - 1, n * acc);
}

console.log(factorialTCO(8372));
