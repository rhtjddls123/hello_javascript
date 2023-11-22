class stackQueue {
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
  print() {
    // console.log(this.#dataArray);
    // console.table(this.#dataArray);
    console.log(JSON.stringify(this.#dataArray));
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

  add(val, dataStructure) {
    if (dataStructure === "Stack") this.#dataArray.push(val);
    else if (dataStructure === "Queue") this.#dataArray.unshift(val);
  }
}
class Stack extends stackQueue {
  constructor(...args) {
    super(...args);
  }

  push(val) {
    this.add(val, "Stack");
  }
  pop() {
    return this.poll;
  }
}

class Queue extends stackQueue {
  constructor(...args) {
    super(...args);
  }

  enqueue(val) {
    this.add(val, "Queue");
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
if (!stack.isEmpty) stack.clear();
if (queue.length) queue.clear();
