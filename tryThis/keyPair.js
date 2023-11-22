// const keyPair = (arr, k) => {
//   const obj = {};

//   return function (arr, k) {
//     for (let i = 0; i < arr.length - 1; i += 1) {
//       for (j = i + 1; j < arr.length; j += 1) {
//         if (obj[k]) {
//           console.log(obj);
//           return obj[k];
//         }
//         obj[arr[i] + arr[j]] = [i, j];
//       }
//     }
//   };
// };

// keyPair([1, 4, 45, 6, 10, 8], 16) // [3, 4]

const keyPair = (arr, n) => {
  //O(n)??
  const cache = {};
  for (let i = 0; i < arr.length; i += 1) {
    //O(n)
    const val = arr[i];
    if (cache[val]) return [cache[val], i]; //O(1)
    cache[n - val] = i;
    // console.log(cache);
  }
};

//object에 요소가 들어있는지 검사하는 방법 object[key], object.hasOwnProperty(), key in object
//time complexity object.hasOwnProperty() O(1), object[key]도 access니까 O(1)이 아닐까 생각들지만 key in object는 의문

// function keyPair(arr, n) {
//   let tmp;
//   for (i of arr) {
//     tmp = arr.indexOf(n - i);
//     if (tmp != -1) {
//       // console.log([arr.indexOf(i), tmp]);
//       return [arr.indexOf(i), tmp];
//     }
//   }
// }

// function keyPair(arr, n) {
//   let tmp;
//   for (let i = 0; i < arr.length; i += 1) {
//     tmp = arr.indexOf(n - arr[i]);
//     if (tmp != -1) {
//       // console.log([arr.indexOf(i), tmp]);
//       return [i, tmp];
//     }
//   }
// }

console.log(
  keyPair([1, 4, 45, 6, 10, 8], 16) // [3, 4]
);
console.log(keyPair([1, 2, 4, 3, 6], 10)); // [2, 4]
console.log(keyPair([1, 2, 3, 4, 5], 9)); // [3, 4]
console.log(
  keyPair(
    Array.from({ length: 100 }, (_, i) => i + 1),
    199
  )
); // [3, 4]
