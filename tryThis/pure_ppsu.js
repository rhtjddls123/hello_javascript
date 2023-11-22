// 다음과 같은 push, pop, shift, unshift 를 순수 함수로 작성하시오.
// (단, 입력값은 다음 예시로 한정함)
const arr = [1, 2, 3, 4];
console.log(push(arr, 5, 6)); // [1, 2, 3, 4, 5, 6]
console.log(pop(arr)); // 4
console.log(pop(arr, 2)); // 2개 팝! ⇒ [3, 4]
console.log(unshift(arr, 0)); // [0, 1, 2, 3, 4]
console.log(unshift(arr, 7, 8)); // [7, 8, 1, 2, 3, 4]
console.log(shift(arr)); // [2, 3, 4]
console.log(shift(arr, 2)); // [3, 4]
console.log(arr); // [1, 2, 3, 4]

function push(arr, ...args) {
  return [...arr, ...args];
}
function pop(arr, count = -1) {
  return arr.slice(count);
}
function shift(arr, count = 1) {
  return arr.slice(count);
}
function unshift(arr, ...args) {
  return [...args, ...arr];
}
