function makeArray(n) {
    if (n === 1) return [n];
    return [...makeArray(n - 1), n];
}

console.log(makeArray(1000));

function makeArrayTco(n, acc = []) {
    if (n === 1) return [n, ...acc];
    return makeArrayTco(n - 1, [n, ...acc]);
}

console.log(makeArrayTco(1000));
