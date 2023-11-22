function once(func, thisValue) {
  let o = 1;
  return (...args) => {
    return o > 1
      ? undefined
      : ((o += 1), func.call(thisValue || this, ...args));
  };
}

const user = { id: 1, name: "Hong" };
const fn = once(function (x, y) {
  return `금일 운행금지 차량은 끝번호 ${x}, ${y}입니다! - ${this.id}`;
}, user);

console.log(fn(1, 6)); // 금일 운행금지 차량은 끝번호 1, 6입니다!
console.log(fn(2, 7)); // undefined
console.log(fn(3, 8)); // undefined
