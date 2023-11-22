// [[‘A’, 10, 20], [‘B’, 30, 40], [‘C’, 50, 60, 70]] 배열을 객체로 만드시오.
// => { ‘A’: [10, 20], ‘B’: [30, 40], ‘C’: [50, 60, 70] }

const arr = [
    ["A", 10, 20],
    ["B", 30, 40],
    ["C", 50, 60, 70],
];

const obj = {};
for (let i of arr) {
    obj[i[0]] = i.slice(1, i.length);
}
console.log(obj);
console.log("----------------------------------------------------");

// 위에서 만든 객체를 다시 배열로 만드시오.
// { ‘A’: [10, 20], ‘B’: [30, 40], ‘C’: [50, 60, 70] }
// => [[‘A’, 10, 20], [‘B’, 30, 40], [‘C’, 50, 60, 70]]

const arr2 = [];
for (let i in obj) {
    const tmp = [];
    tmp.push(i);
    for (let j of obj[i]) {
        tmp.push(j);
    }
    arr2.push(tmp);
}
console.log(arr2);
