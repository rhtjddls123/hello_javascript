export * from "./array-utils.js";

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

export const range = (start, end, step) => {
  const arr = [];
  const tmp = start;
  end = end ?? (start === 0 ? ((start = 0), tmp) : (start = 1), tmp);
  step = step ?? (end > start ? 1 : -1);

  let count =
    (start > end && step > 0) || (start < end && step < 0)
      ? 0
      : step === 0
      ? 1
      : Math.floor(
          Math.abs((Math.abs(end) - Math.abs(start)) / Math.abs(step)) + 1
        );
  if (count === 1) return [start];

  for (; count > 0; count -= 1) {
    arr.push(end < 0 && start === 1 ? end : start);
    end < 0 && start === 1 ? (end -= step) : (start += step);
  }
  // console.log(arr);
  return arr;
};
