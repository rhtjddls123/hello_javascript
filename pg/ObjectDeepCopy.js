// 객체 kim을 깊은 복사하는 deepCopy 함수를 작성하시오.    cf. Map & Set
const kim = {
  nid: 3,
  addr: "Pusan",
  arr: [1, 2, 3, { aid: 1 }, [10, 20]],
  oo: { id: 1, name: "Hong", addr: { city: "Seoul" } },
  xx: null,
  yy: function () {
    console.log(this.oo);
  },
  yyy() {
    console.log(this.oo);
  },
  [Symbol()]: 9,
  [Symbol()]: Symbol("symbol2"),
};

function deepCopy(obj) {
  const newObj = {};
  for (let i of Reflect.ownKeys(obj)) {
    if (typeof obj[i] === typeof {} && obj[i]) {
      if (Array.isArray(obj[i])) {
        newObj[i] = tmpArr(obj[i]);
      } else {
        newObj[i] = tmpObj(obj[i]);
      }
    } else {
      newObj[i] = obj[i];
    }
  }
  return newObj;
}
function tmpObj(obj) {
  const tmp = {};
  for (let i of Reflect.ownKeys(obj)) {
    if (typeof obj[i] === typeof {} && obj[i]) {
      if (Array.isArray(obj[i])) {
        tmp[i] = tmpArr(obj[i]);
      } else {
        tmp[i] = tmpObj(obj[i]);
      }
    } else {
      tmp[i] = obj[i];
    }
  }
  return tmp;
}
function tmpArr(arr) {
  const tmp = [];
  for (let i in arr) {
    if (typeof arr[i] === typeof {} && arr[i]) {
      if (Array.isArray(arr[i])) {
        tmp[i] = tmpArr(arr[i]);
      } else {
        tmp[i] = tmpObj(arr[i]);
      }
    } else {
      tmp[i] = arr[i];
    }
  }
  return tmp;
}

import assert from "assert";
const newKim = deepCopy(kim);
assert.deepStrictEqual(newKim, kim, "deepCopy equal fail!");
newKim.addr = "Daegu";
newKim.oo.name = "Kim";
assert.notDeepStrictEqual(newKim, kim, "Not Valid Deep Copy!");
newKim.arr[0] = 100;
newKim.arr[3].aid = 200;
newKim.arr[4][1] = 300;
newKim.oo.addr.city = "Daejeon";
console.log(
  "Pass1?",
  kim.arr[0] !== newKim.arr[0] && kim.arr[3].aid !== newKim.arr[3].aid
);
assert.notStrictEqual(kim.arr[4][1], newKim.arr[4][1], "pass2: 다르지 않아요!");
assert.notStrictEqual(
  kim.oo.addr.city,
  newKim.oo.addr.city,
  "Not Pass3: city가 다르지 않아요!"
);
