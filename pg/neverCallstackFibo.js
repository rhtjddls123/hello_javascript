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
    if (BigInt(n) < 2n) return BigInt(n);
    return memoizedFibo(BigInt(n) - 2n) + memoizedFibo(BigInt(n) - 1n);
});

function neverFullStack(n, fn) {
    if (n > 1000) {
        const m = n / 1000;
        for (let i = 1; i <= m; i += 1) {
            fn(1000 * i);
        }
    }
    return fn(n);
}
//console.log(neverFullStack(1000, memoizedFibo));

function neverFullCS(fn) {
    const maxCallable = 5000n;
    let step = 0n;
    let n = 0n;

    return function A(k) {
        console.log("A=", k);
        if (k < maxCallable || (n != 0 && k >= n)) {
            const ret = fn(k < maxCallable ? k : n);
            n = 0n;
            step = 0n;
            return ret;
        }
        if (n === 0n) n = k;
        step += 1n;
        fn(step * maxCallable);
        return A(step * maxCallable);
    };
}

const neverFullFibo = neverFullCS(memoizedFibo);
//console.log(neverFullFibo(4));
//console.log(neverFullFibo(8));
//console.log(neverFullFibo(100000n));

console.log(neverFullStack(100000, memoizedFibo) === neverFullFibo(100000));
