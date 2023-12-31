// Array.reduce 함수를 고차 함수로 직접 구현하시오.
const reduce = (arr, fn, initValue) => {
  let i = 0;
  let result = initValue ?? ((i += 1), arr[0]);
  for (; i < arr.length; i++) {
    result = fn(result, arr[i]);
  }
  console.log(result);
  return result;
};

//a는 이전 결과 b는 이번 값 initValue 초기 값
reduce([1, 2, 3], (a, b) => a + b, 0); // 6이면 통과!
[1, 2, 3].reduce((a, b) => a + b, 0); // 6
reduce([1, 2, 3, 4, 5], (a, b) => a + b); // 15면 통과!
reduce([1, 2, 3, 4, 5], (a, b) => a * b, 1); // 120이면 통과!
reduce([2, 2, 2], (a, b) => a * b); // 8이면 통과!
reduce([3, 3, 3], (a, b) => a * b, 0); // 0이면 통과!
