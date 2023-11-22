// 1) mapBy(), findBy(), filterBy()
//   Array.prototype.mapBy = function(k) {...}
// 2) firstObject, lastObject

import assert from "assert";

Object.defineProperties(Array.prototype, {
  firstObject: {
    get() {
      // console.log(this.at(0));
      return this.at(0);
    },
    set(value) {
      this[0] = value;
    },
  },
  lastObject: {
    get() {
      // console.log(this.at(-1));
      return this.at(-1);
    },
    set(value) {
      this[-1] = value;
    },
  },
});

Array.prototype.mapBy = function (key) {
  // const valArr = [];
  // this.key = key;
  // for (i of this) {
  //   valArr.push(i[this.key]);
  // }
  // console.log(valArr);
  // return valArr;
  return this.map((a) => a[key]);
};

Array.prototype.filterBy = function (k, v) {
  // this.key = k;
  // this.value = v;
  // const arr = [];
  // for (i of this) {
  //   if (i[this.key] === this.value) {
  //     arr.push(i);
  //   }
  // }
  // console.log(arr);
  // return arr;
  return this.filter((a) => a[k] === v);
};

Array.prototype.findBy = function (k, v) {
  // this.key = k;
  // this.value = v;
  // for (i of this) {
  //   if (i[this.key] === this.value) {
  //     console.log(i);
  //     return i;
  //   }
  // }
  return this.find((a) => a[k] === v);
};

const arr = [1, 2, 3, 4, 5];
arr.firstObject; // 1
arr.lastObject; // 5

const hong = { id: 1, name: "Hong" };
const kim = { id: 2, name: "Kim" };
const lee = { id: 3, name: "Lee" };

const users = [hong, kim, lee]; // {id:1, name: 'Hong'}, …
users.mapBy("id"); // [1, 2, 3]
users.mapBy("name"); // ['Hong', 'Kim', 'Lee']
users.filterBy("id", 2); // [{id: 2, name: 'Kim'}]
users.findBy("name", "Kim"); // {id: 2, name: 'Kim'}
users.firstObject; // {id: 1, name: 'Hong'}

arr.firstObject; // 1
arr.lastObject; // 5

assert.deepStrictEqual(users.mapBy("id"), [1, 2, 3]);
assert.deepStrictEqual(users.mapBy("name"), ["Hong", "Kim", "Lee"]);
assert.deepStrictEqual(users.filterBy("id", 2), [{ id: 2, name: "Kim" }]);
assert.deepStrictEqual(users.findBy("name", "Kim"), { id: 2, name: "Kim" });
assert.deepStrictEqual(users.firstObject, { id: 1, name: "Hong" });
assert.deepStrictEqual(users.lastObject, { id: 3, name: "Lee" });
