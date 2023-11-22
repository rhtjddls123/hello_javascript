// 다음과 같은 집합 A, B, C가 있을 때,
// 각 집합의 교집합, 차집합, 합집합을 구하는 함수를 작성하시오.

function intersect(x, y) {
  // console.log([...new Set(x.filter((a) => y.includes(a)))]);
  return [...new Set(x.filter((a) => y.includes(a)))];
}

function diff(x, y) {
  // console.log([...new Set(x.filter((a) => !y.includes(a)))]);
  return [...new Set(x.filter((a) => !y.includes(a)))];
}

function union(x, y) {
  // console.log([...new Set([...x, ...y])]);
  return [...new Set([...x, ...y])];
}

const A = [1, 2, 3, 4, 5, 3];
const B = [1, 22, 3, 44, 5];
const C = [11, 222, 3, 4, 555];
intersect(A, B); // [1, 3, 5]
intersect(A, C); // [3, 4]
diff(A, B); // [2, 4]
diff(B, A); // [22, 44]
diff(A, C); // [1, 2, 5]
diff(B, C); // [1, 22, 44, 5]
union(A, B); // [1, 2, 3, 4, 5, 22, 44]
union(A, C); // [1, 2, 3, 4, 5, 11, 222, 555]
