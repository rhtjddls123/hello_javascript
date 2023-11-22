function memoized(fn) {
    const memoizedTable = {};
    return function (k) {
        if (memoizedTable[k]) {
            return memoizedTable[k];
        } else {
            memoizedTable[k] = fn(k);
            console.log(memoizedTable);
            return memoizedTable[k];
        }
    };
}

const memoizedFibo = memoized(function (n) {
    if (n <= 1) return n;
    return memoizedFibo(n - 1) + memoizedFibo(n - 2);
});

console.log(memoizedFibo(5));
console.log(memoizedFibo(7));

function fibo() {
    const arr = [0, 1];
    return function (n) {
        for (let i = 2; i <= n; i += 1) {
            arr[i] = arr[i - 1] + arr[i - 2];
        }
        if (arr[n]) return arr.slice(0, n + 1);
        return arr[n];
    };
}

const f = fibo();
console.log(f(5));
console.log(f(2));
console.log(f(100000000));

// function loopFibo(n) {
//     const arr = [0, 1];
//     for (let i = 2; i <= n; i += 1) {
//         arr[i] = arr[i - 1] + arr[i - 2];
//     }
//     return arr[n];
// }

// console.time("LOOP");
// console.log(loopFibo(100000000));
// console.timeEnd("LOOP");
// console.time("LOOP");
// console.log(loopFibo(100000000));
// console.timeEnd("LOOP");
