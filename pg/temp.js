// 객체 kim을 깊은 복사하는 deepCopy 함수를 작성하시오.    cf. Map & Set
class Dog {
  constructor(name) {
    this.name = name;
  }
}

const lucy = new Dog("Lucy");

const kim = {
  nid: 3,
  addr: "Pusan",
  arr: [1, 2, 3, { aid: 1 }, [10, 20]],
  oo: { id: 1, name: "Hong", addr: { city: "Seoul" } },
  xx: null,
  yy: function ({ a }) {
    console.log(this.oo, a);
  },
  yyy() {
    console.log(this.oo);
  },
  [Symbol()]: 9,
  [Symbol()]: Symbol("symbol2"),
  [Symbol()]: [Symbol()],
  dog: lucy,
  sobj: new String("abc"),
  nobj: new Number(123),
  bobj: new Boolean(true),
  [Symbol()]: Object(Symbol("symbol3")),
};

function deepCopy(obj) {
  // if (typeof obj === "function") {
  //     return makeFunction(obj);
  // }
  if (typeof obj !== typeof {} || !obj) return obj;
  const value = obj.valueOf();
  if (obj.constructor.name === "Symbol") return Object(value);
  const copyObject = new obj.constructor(
    typeof value !== "object" ? value : {}
  );
  for (const i of Reflect.ownKeys(obj)) {
    copyObject[i] = deepCopy(obj[i]);
  }
  return copyObject;
}

import assert from "assert";
const newKim = deepCopy(kim);
// kim.oo.id = 2;
// newKim.yy({ a: 100 });
// kim.yy({ a: 100 });
// console.log(kim.yy === newKim.yy);
assert.deepStrictEqual(newKim, kim, "deepCopy equal fail!");
newKim.addr = "Daegu";
newKim.oo.name = "Kim";
assert.notDeepStrictEqual(newKim, kim, "Not Valid Deep Copy!");
newKim.arr[0] = 100;
newKim.arr[3].aid = 200;
newKim.arr[4][1] = 300;
newKim.oo.addr.city = "Daejeon";
assert.notStrictEqual(kim.arr[4][1], newKim.arr[4][1], "pass2: 다르지 않아요!");
assert.notStrictEqual(
  kim.oo.addr.city,
  newKim.oo.addr.city,
  "Not Pass3: city가 다르지 않아요!"
);

function makeFunction(func) {
  const sf = func.toString();
  console.log(sf);
  let parameters = sf.slice(sf.indexOf("(") + 1, sf.indexOf(")"));
  console.log(parameters);
  const newfunc = sf.slice(sf.indexOf("\n") + 1, sf.lastIndexOf("}"));
  console.log(newfunc);
  const tmpFunc = new Function(parameters, newfunc);
  return tmpFunc;
}

console.log(kim);
console.log(newKim);
