function memoized(fn) {
    const memoizedTable = {};
    return function (k) {
        return memoizedTable[k] || (memoizedTable[k] = fn(k));
    };
}

function factorial(n) {
    if (n == 1) return 1;
    return n * factorial(n - 1);
}

const memoizedFactorial = memoized(function (n) {
    console.log("a", n);
    if (n == 1) return 1;
    return n * memoizedFactorial(n - 1);
});

console.log(memoizedFactorial(100));
