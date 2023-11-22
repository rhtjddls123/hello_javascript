// 다음과 같은 deleteArray와 deleteObjectArray를 순수 함수로 작성하시오.
const arr = [1, 2, 3, 4];
const deleteArray = (arr, start, end) => {
  return arr.filter((a, i) => i < start || i >= end);
};
console.log(deleteArray(arr, 2));
deleteArray(arr, 2); // [1, 2]
deleteArray(arr, 1, 3); // [1, 4]

const users = [
  { id: 1, name: "Hong" },
  { id: 2, name: "Kim" },
  { id: 3, name: "Lee" },
];

const deleteObjectArray = (obj, startOrKey, endOrValue) => {
  if (typeof startOrKey === "number")
    return deleteArray(obj, startOrKey, endOrValue);
  return obj.filter((obj) => obj[startOrKey] !== endOrValue);
};
deleteObjectArray(users, 2); // Hong, Kim
deleteObjectArray(users, 1, 2); // Hong, Lee
deleteObjectArray(users, "id", 2); // Hong, Lee
console.log(deleteObjectArray(users, "name", "Lee")); // Hong, Kim

const a = { id: 1, name: "HONG" };
// function deleteArray(arr, start, end) {
//   end = end ?? arr.length;
//   // console.log([...arr.slice(0, start), ...arr.slice(end)]);
//   return [...arr.slice(0, start), ...arr.slice(end)];
// }
// function deleteObjectArray(arr, key, value) {
//   const idx = !value ? key : arr.findIndex((a) => a[key] === value);
//   // console.log([...arr.slice(0, idx), ...arr.slice(idx + 1)]);
//   return [...arr.slice(0, idx), ...arr.slice(idx + 1)];
// }
