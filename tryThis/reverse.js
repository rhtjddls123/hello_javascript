// Array.reverse 함수를 비순수 함수와 순수 함수로 각각 구현하시오.
// ex1) 순수 함수
const a11 = [1, 2, 3, 4, 5];
makeReverseArray(a11); // [5, 4, 3, 2, 1] 반환, a11은 변함 없음!!
console.log(a11);
// ex2) 비순수 함수
const a22 = [1, 2, 3, 4, 5];
reverseArray(a22); // [5, 4, 3, 2, 1] 반환, a11도 이 값으로 변경됨!
console.log(a22);

function makeReverseArray(arr) {
  const tmp = [];
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    tmp.push(arr[i]);
  }
  // console.log(tmp);
  return tmp;
}

function makeReverseArray2(arr) {
  const tmp = [];
  for (i of arr) {
    tmp.unshift(i);
  }
  // console.log(tmp);
  return tmp;
}

function reverseArray(arr) {
  const length = arr.length;
  let len = length - 1;
  for (let i = 0; i < length / 2; i += 1) {
    const tmp = arr[len];
    arr[len] = arr[i];
    arr[i] = tmp;
    len -= 1;
  }
  // console.log(arr);
  return arr;
}

function reverseArray2(arr) {
  const length = arr.length;
  for (let i = length; i > 0; i -= 1) {
    arr.push(i);
    arr.shift();
  }
  return arr;
}
