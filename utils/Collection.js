export { ArrayList, Stack, Queue };

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

  printList() {
    console.log(this.toList());
  }

  toList() {
    return ArrayList.arrayToList(this._dataArray);
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

class Stack extends Collection {
  constructor(...args) {
    super(...args);
  }

  push(val) {
    this._dataArray.push(val);
  }
  pop() {
    return this.poll;
  }
}

class Queue extends Collection {
  constructor(...args) {
    super(...args);
  }

  enqueue(val) {
    this._dataArray.unshift(val);
  }
  dequeue() {
    return this.poll;
  }
}
