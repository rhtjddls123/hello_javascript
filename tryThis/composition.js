// 다음과 같은 정수 배열이 주어졌을 때, reduce를 이용하여, 각 요소를 다음의 순서로 처리하시오.
//  → 배열의 각 요소를 제곱   n => n ** 2
//  → 배열 각 요소의 제곱근   n => Math.sqrt(n)
//  → 배열의 각 요소를 세제곱  n => n ** 3
const arr = [1, 2, 3, 4, 5];
// cf. arr.map(a => a ** 2).map(a => Math.sqrt(a)).map(a => a ** 3);
const pow = (a) => a ** 2;
const pow3 = (a) => a ** 3;
console.log(arr.map(pow).map(Math.sqrt).map(pow3));
const y = [pow, Math.sqrt, pow3].reduce((acc, f) => arr.map(f));
console.log(y);
const z = (n) => [pow, Math.sqrt, pow3].reduce((acc, f) => f(acc), n);
console.log(z(4));
const z2 = (n, fns) => fns.reduce((acc, f) => f(acc), n);
console.log(z2(4, [pow, Math.sqrt, pow3]));
console.log(z2(9, [pow]));
// ⇒⇒⇒ 결과 => [ 1, 8, 27, 64, 125 ]
console.log(
  arr
    .reduce((a, b) => {
      a.push(b ** 2);
      return a;
    }, [])
    .reduce((a, b) => {
      a.push(Math.sqrt(b));
      return a;
    }, [])
    .reduce((a, b) => {
      a.push(b ** 3);
      return a;
    }, [])
);
