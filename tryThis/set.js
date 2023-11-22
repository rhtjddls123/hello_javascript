// 1) mapBy(), findBy(), filterBy()
//   Array.prototype.mapBy = function(k) {...}
// 2) firstObject, lastObject

import assert from "assert";

Object.defineProperties(Array.prototype, {
  firstObject: {
    get() {
      return this.at(0);
    },
    set(value) {
      this[0] = value;
    },
  },
  lastObject: {
    get() {
      return this.at(-1);
    },
    set(value) {
      this[-1] = value;
    },
  },
});

Array.prototype.mapBy = function (key) {
  return this.map((a) => a[key]);
};

Array.prototype.filterBy = function (k, v) {
  return this.filter((a) => a[k] === v);
};

Array.prototype.findBy = function (k, v) {
  return this.find((a) => a[k] === v);
};

Array.prototype.uniqBy = function (k) {
  return new Set(this.map((a) => a[k]));
};

// 이전 Array.prototype에 Set을 이용하여 uniqBy() 함수도 추가하시오.
const hong = { id: 1, name: "Hong", dept: "HR" };
const kim = { id: 2, name: "Kim", dept: "Server" };
const lee = { id: 3, name: "Lee", dept: "Front" };
const park = { id: 4, name: "Park", dept: "HR" };
const ko = { id: 7, name: "Ko", dept: "Server" };
const loon = { id: 6, name: "Loon", dept: "Sales" };
const choi = { id: 5, name: "Choi", dept: "Front" };
const users = [hong, kim, lee, park, ko, loon, choi];
console.log(users.uniqBy("dept")); // [ 'HR', 'Server', 'Front', 'Sales' ]
