import { Stack, Queue } from "../utils/Collection.js";
import assert from "assert";

const stack = new Stack([1, 2, 3]); // or new Stack([1,2]); // (1,2)
stack.push(5); // 추가하기
stack.push(6); // 추가하기
stack.print();
assert.deepStrictEqual(stack.pop(), 6);
stack.print();

const queue = new Queue();
queue.enqueue(1); // 추가하기
queue.enqueue(2); // 추가하기
queue.enqueue(3); // 추가하기
queue.print();
assert.deepStrictEqual(queue.dequeue(), 1);
queue.print();

assert.deepStrictEqual(stack.peek, 5);
assert.deepStrictEqual(queue.peek, 2);
const arr = queue.toArray();
assert.deepStrictEqual(arr, [3, 2]);
if (!stack.isEmpty) stack.clear();
assert.deepStrictEqual(stack.isEmpty, true);
assert.deepStrictEqual(stack.length, 0);
if (queue.length) queue.clear();
assert.deepStrictEqual(queue.isEmpty, true);
assert.deepStrictEqual(queue.length, 0);
