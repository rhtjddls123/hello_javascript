//1,1,2,3,5,8,13,21

function fibonacci(n) {
    if (n <= 2) return 1;
    return fibonacci(n - 2) + fibonacci(n - 1);
}

console.log(fibonacci(10));

function fibonacci2(n, p = 1, pp = 1) {
    if (n <= 2) return p;
    return fibonacci2(n - 1, p + pp, p);
}
//f(3) => f(2, 2, 1)
//f(2, 2, 1) => 2

//f(5) => f(4, 2, 1)
//f(4, 2, 1) => f(3, 3, 2)
//f(3, 3, 2) => f(2, 5, 3)
//f(2, 5, 3) => 5
console.log(fibonacci2(1));
console.log(fibonacci2(2));
console.log(fibonacci2(3));
console.log(fibonacci2(4));
console.log(fibonacci2(5));
console.log(fibonacci2(6));
console.log(fibonacci2(7));
console.log(fibonacci2(8));
console.log(fibonacci2(9));
console.log(fibonacci2(6000));
