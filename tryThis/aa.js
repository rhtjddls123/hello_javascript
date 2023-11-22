class ArrayList {
  #arrayList;
  #cnt = 0;
  constructor(...args) {
    // super();
    this.args = args[0];
    this.#arrayList = { value: this.args.at(-1) };
    for (let i = this.args.length - 2; i >= 0; i -= 1) {
      this.#arrayList = { value: this.args[i], rest: this.#arrayList };
      this.#cnt += 1;
    }
  }

  add(val, value) {
    let preNode = this.#arrayList;
    let nextNode = this.#arrayList.rest;
    for (let i = 0; i < this.#cnt; i += 1) {
      if (preNode.value === value) {
        preNode.rest = { value: val };
        preNode.rest.rest = nextNode;
        this.#cnt += 1;
        return;
      }
      preNode = preNode.rest;
      nextNode = nextNode.rest;
    }
    preNode.rest = { value: val };
    this.#cnt += 1;
  }

  remove(val) {
    let preNode = this.#arrayList;
    let nextNode = this.#arrayList.rest;

    if (preNode.value === val) {
      this.#arrayList = preNode.rest;
      this.#cnt -= 1;
      return;
    }

    for (let i = 0; i < this.#cnt; i += 1) {
      if (preNode.rest.value === val) {
        preNode.rest = nextNode.rest;
        this.#cnt -= 1;
        return;
      }
      preNode = preNode.rest;
      nextNode = nextNode.rest;
    }
  }

  set(idx, val) {
    let preNode = this.#arrayList;
    let nextNode = this.#arrayList.rest;
    for (let i = 0; i < idx; i += 1) {
      preNode = preNode.rest;
      nextNode = nextNode.rest;
    }
    preNode.value = val;
  }

  get(idx) {
    let preNode = this.#arrayList;
    let nextNode = this.#arrayList.rest;
    for (let i = 0; i < idx - 1; i += 1) {
      preNode = preNode.rest;
      nextNode = nextNode.rest;
    }
    console.log(nextNode.value);
  }

  get size() {
    console.log(this.#cnt + 1);
  }

  indexOf(val) {
    let preNode = this.#arrayList;
    let nextNode = this.#arrayList.rest;
    for (let i = 0; i < this.#cnt; i += 1) {
      if (preNode.value === val) {
        console.log(i);
        return i;
      }
      preNode = preNode.rest;
      nextNode = nextNode.rest;
    }
  }

  contains(val) {
    let preNode = this.#arrayList;
    let nextNode = this.#arrayList.rest;
    for (let i = 0; i < this.#cnt; i += 1) {
      if (preNode.value === val) {
        console.log(true);
        return true;
      }
      preNode = preNode.rest;
      nextNode = nextNode.rest;
    }
    console.log(false);
    return false;
  }

  get isEmpty() {
    console.log(this.#cnt === 0);
    return this.#cnt === 0;
  }

  get peek() {
    let preNode = this.#arrayList;
    let nextNode = this.#arrayList.rest;
    for (let i = 0; i < this.#cnt; i += 1) {
      preNode = preNode.rest;
      nextNode = nextNode.rest;
    }
    console.log(preNode.value);
  }

  toArray() {
    const arr = [];
    let node = this.#arrayList;
    while (true) {
      arr.push(node.value);
      node = node?.rest;

      if (!node) break;
    }
    return arr;
  }

  *[Symbol.iterator]() {
    const arr = this.toArray();
    for (const i of arr) {
      yield i;
    }
  }

  iterator() {
    return this[Symbol.iterator]();
  }

  clear() {
    this.#arrayList = {};
    this.#cnt = 0;
    console.log("all clear");
  }

  toString() {
    return this.#arrayList;
  }

  print() {
    console.log(`ArrayList(${this.#cnt + 1})`, this.toString());
  }
}

const alist = new ArrayList([1, 2, 3]); // alist.toString() ⇒ { value: 1, rest: { value: 2, rest: { value: 3 } } }
alist.add(4); // { value: 1, rest: { value: 2, rest: { value: 3, rest: { value: 4 } } } }
alist.remove(2); // { value: 1, rest: { value: 3, rest: { value: 4 } } } }
alist.add(22, 1); // { value: 1, rest: { value: 22, rest: { value: 3, rest: { value: 4 } } } }
alist.add(33, 1); // { value: 1, rest: { value: 33, rest: { value: 22, rest: { value: 3, rest: { value: 4 } } } } }
alist.print(); // ArrayList(5) { value: 1, rest: { value: 33, rest: { value: 22, rest: { value: 3, rest: { value: 4 } } } } }
alist.set(1, 300); // { value: 1, rest: { value: 300, rest: { value: 22, rest: { value: 3, rest: { value: 4 } } } } }
alist.get(2); // 22
alist.size; // 5
alist.indexOf(300); // 1
console.log(alist.toString());
alist.contains(300); //true
alist.contains(301); // false
alist.isEmpty; // false
alist.peek; // 4
console.log(alist.toArray()); // [1, 300, 22, 3, 4]
console.log(alist.iterator().next()); // { value: 1, done: false }
alist.clear(); // all clear
alist.isEmpty; // true
