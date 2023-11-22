// Collection 클래스를 상속받아 List 메소드들과 클래스 메소드 arrayToList, listToArray를 보유한 ArrayList 클래스를 구현하시오.
// ArrayList.listToArray({ value: 1, rest: { value: 2 } }) ⇒ [1,2]

class Collection {
  #dataArray = [];

  constructor(...args) {
    this.#dataArray = Array.isArray(args[0]) ? args[0] : args;
  }

  get _dataArray() {
    return this.#dataArray;
  }

  set _dataArray(value) {
    return (this.#dataArray = value);
  }

  clear() {
    this.#dataArray = [];
  }
  toArray() {
    return this.#dataArray;
  }
  remove() {
    this.#dataArray.pop();
  }
  print(flag) {
    // console.log(this.#dataArray);
    // console.table(this.#dataArray);
    console.log(
      `${flag ?? this.constructor.name}=${JSON.stringify(this.#dataArray)}`
    );
  }

  get isEmpty() {
    return this.length === 0;
  }

  get length() {
    return this.#dataArray.length;
  }

  get peek() {
    return this.#dataArray.at(-1);
  }

  get poll() {
    return this.#dataArray.pop();
  }

  *[Symbol.iterator]() {
    for (const i of this.#dataArray) {
      yield i;
    }
  }

  iterator() {
    return this[Symbol.iterator]();
  }

  toList() {
    return Collection.arrayToList(this.#dataArray);
  }

  static arrayToList(arr = []) {
    let node = { value: arr.at(-1) };
    for (let i = arr.length - 2; i >= 0; i -= 1) {
      node = { value: arr[i], rest: node };
    }
    return node;
  }

  static listToArray(list) {
    const arr = [];
    let node = list;
    while (true) {
      arr.push(node.value);
      node = node?.rest;

      if (!node) break;
    }
    return arr;
  }
}

class ArrayList extends Collection {
  constructor(...args) {
    super(...args);
  }

  add(val, idx) {
    this._dataArray.splice(idx ?? this.length, 0, val);
  }

  remove(val) {
    // this._dataArray.splice(this._dataArray.indexOf(val), 1);
    this._dataArray = this._dataArray.filter((a) => a !== val);
  }

  set(idx, val) {
    this._dataArray.splice(idx, 1, val);
  }

  get(idx) {
    return this._dataArray[idx];
  }

  get size() {
    return this.length;
  }

  indexOf(val) {
    return this._dataArray.indexOf(val);
  }

  contains(val) {
    return this._dataArray.includes(val);
  }

  printt() {
    console.log(this.toList());
  }
}

const alist = new ArrayList([1, 2, 3]); // alist.toString() ⇒ { value: 1, rest: { value: 2, rest: { value: 3 } } }
alist.add(4); // { value: 1, rest: { value: 2, rest: { value: 3, rest: { value: 4 } } } }
alist.remove(2); // { value: 1, rest: { value: 3, rest: { value: 4 } } } }
alist.add(22, 1); // { value: 1, rest: { value: 22, rest: { value: 3, rest: { value: 4 } } } }
alist.add(33, 1); // { value: 1, rest: { value: 33, rest: { value: 22, rest: { value: 3, rest: { value: 4 } } } } }
alist.set(1, 300); // { value: 1, rest: { value: 300, rest: { value: 22, rest: { value: 3, rest: { value: 4 } } } } }
alist.print();
alist.printt();
console.log(alist.get(2)); // 22
console.log(alist.size); // 5
console.log(alist.indexOf(300)); // 1
console.log(alist.contains(300)); //true
console.log(alist.contains(301)); // false
console.log(alist.isEmpty); // false
console.log(alist.peek); // 4
console.log(alist.toArray()); // [1, 300, 22, 3, 4]
console.log(alist.iterator().next()); // { value: 1, done: false }
alist.clear(); // all clear
console.log(alist.isEmpty); // true

console.log(ArrayList.listToArray({ value: 1, rest: { value: 2 } }));
