class generatorCollection {
  #dataArray = [];

  constructor(...args) {
    this.#dataArray = Array.isArray(args[0]) ? args[0] : args;
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

  add(val) {
    if (this.constructor.name === "Stack") {
      this.#dataArray.push(val);
    } else if (this.constructor.name === "Queue") {
      this.#dataArray.unshift(val);
    }
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
class Stack extends generatorCollection {
  constructor(...args) {
    super(...args);
  }

  push(val) {
    this.add(val);
  }
  pop() {
    return this.poll;
  }
}

class Queue extends generatorCollection {
  constructor(...args) {
    super(...args);
  }

  enqueue(val) {
    this.add(val);
  }
  dequeue() {
    return this.poll;
  }
}

const stack = new Stack([1, 2, 3]); // or new Stack([1,2]); // (1,2)
stack.push(5); // 추가하기
stack.push(6); // 추가하기
stack.print();
console.log(stack.pop()); // 마지막에 추가된 하나 꺼내기
stack.print();

const queue = new Queue();
queue.enqueue(1); // 추가하기
queue.enqueue(2); // 추가하기
queue.enqueue(3); // 추가하기
queue.print();
console.log(queue.dequeue()); // 추가한지 가장 오래된 - 먼저 들어간 - 하나 꺼내기
queue.print();

console.log(stack.peek, queue.peek); // 마지막(다음에 나올) 원소
const arr = queue.toArray().map((a) => console.log(a));
stack.print();
queue.print();
for (const s of stack) console.log("s", s);
for (const q of queue) console.log("q", q);
const itStack = stack[Symbol.iterator]();
console.log(itStack.next());
console.log(itStack.next());
console.log(itStack.next());
console.log(itStack.next());
console.log(itStack.next());
const itQueue = queue.iterator();
console.log(itQueue.next());
console.log(itQueue.next());
console.log(itQueue.next());
