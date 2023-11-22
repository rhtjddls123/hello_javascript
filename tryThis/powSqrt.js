// 주어진 정수 배열에서 각 요소를 제곱한 값들과 제곱근 값들을 반환하는 함수를 for-of, forEach, map을 사용하여 각각 작성하시오.
arr = [1, 4, 9];
console.log(powSqrtByForOf(arr)); // [[1, 16, 81], [1, 2, 3]]
console.log(powSqrtByForEach(arr)); // [[1, 16, 81], [1, 2, 3]]
console.log(powSqrtByMap(arr)); // [[1, 16, 81], [1, 2, 3]]

function powSqrtByForOf(arr) {
  const pow = [];
  const sqrt = [];
  for (const i of arr) {
    pow.push(i ** 2);
    sqrt.push(Math.sqrt(i));
  }
  return [pow, sqrt];
}

function powSqrtByForEach(arr) {
  const pow = [];
  const sqrt = [];
  arr.forEach((e) => {
    pow.push(e ** 2);
    sqrt.push(Math.sqrt(e));
  });
  return [pow, sqrt];
}

function powSqrtByMap(arr) {
  const pow = arr.map((a) => Math.pow(a, 2));
  const sqrt = arr.map((a) => Math.sqrt(a));
  return [pow, sqrt];
}
