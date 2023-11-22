const arr = [1, 2, 3];

const a1 = arr.concat(4, 5);
console.log(a1);
const a2 = arr.join(":");
console.log(a2);
// const values = arr.values();
console.log([...arr.values()]);
console.log([...arr.keys()]);
// console.log(arr);
console.log(arr.at(1));
console.log(
  arr.indexOf(2),
  arr.findIndex((a) => a === 2)
);

const hong = { id: 1, name: "Hong" };
const kim = { id: 2, name: "Kim" };
const lee = { id: 3, name: "Lee" };
const users = [hong, kim, lee];

console.log(users.findIndex((a) => a.id === 3));

console.log(arr.findLastIndex((a) => a === 1));

const e = Object.entries(arr);
console.log(e);
console.log(e.flat());
console.log(arr.flatMap((a) => (a === 2 ? [2, 2] : a)));
console.log(users.find((a) => a.id === 3));
console.log(arr.some((a) => a > 2)); //하나만 만족해도 true
console.log(arr.every((a) => a > 2)); //모두 만족해야 true
console.log(arr.map((a) => a * 10));
console.log(arr.filter((a) => a > 1));
arr.forEach((a, i, arr) => console.log(i, a, arr));
console.log(arr.unshift(1, 2, 3, 4)); //맨 앞에 넣을때 사용
console.log(arr);

const o1 = new Array(arr);
const o2 = Array(arr);
console.log(o1, o2, o1 === o2);

const arr5 = Array(5).fill(0, -4, -1);
// arr5[2] = 9;
console.log(arr5);
console.log(arr5.length);

const s = "abc";
const arr6 = Array.from(arr);
arr[0] = 1231231;
console.log(arr, arr6);
console.log(Array.from({ length: 5 }));
const a5 = Array(5);
a5[3] = 2;
a5[0] = 1;
console.log(a5.map((a) => a + 1));

console.log(
  Array(5)
    .fill()
    .map((a, i) => i + 1)
);

console.log(Array.from(Array(5).keys()));
console.log(...arr5.values());

const queue = [1, 2, 3, 4];
console.log([1, ...queue]);
console.log([1, 2, ...queue]);
console.log(queue.at(-1), queue.slice(0, -1));
