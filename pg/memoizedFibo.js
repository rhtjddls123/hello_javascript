function memoized(fn) {
    const memoizedTable = {};
    return function (k) {
        if (memoizedTable[k]) {
            return memoizedTable[k];
        } else {
            memoizedTable[k] = fn(k);
            return memoizedTable[k];
        }
    };
}

const memoizedFibo = memoized(function (n) {
    if (n < 2) return n;
    return memoizedFibo(n - 2) + memoizedFibo(n - 1);
});

function neverFullStack(n) {
    if (n > 1000) {
        const m = n / 1000;
        for (let i = 1; i <= m; i += 1) {
            memoizedFibo(1000 * i);
        }
    }
    return memoizedFibo(n);
}
console.log(neverFullStack(1500));

console.log(memoizedFibo(1000));
