// 다음과 같은 정수 배열을 생성하는 range 함수를 구현하시오.
import assert from "assert";
import { range } from "../utils/array-utils.js";

assert.deepStrictEqual(range(1, 10, 1), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
assert.deepStrictEqual(range(1, 10, 2), [1, 3, 5, 7, 9]);

assert.deepStrictEqual(range(5, 5), [5]);
assert.deepStrictEqual(range(5, 5, 1), [5]);
assert.deepStrictEqual(range(0, 0), [0]);
assert.deepStrictEqual(range(0), [0]);
assert.deepStrictEqual(range(0, 0, 5), [0]);
assert.deepStrictEqual(range(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
assert.deepStrictEqual(range(10, 1), [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
assert.deepStrictEqual(range(10, 1, -2), [10, 8, 6, 4, 2]);
assert.deepStrictEqual(range(10, 1, -3), [10, 7, 4, 1]);
assert.deepStrictEqual(range(5), [1, 2, 3, 4, 5]);
assert.deepStrictEqual(
  range(100),
  Array.from({ length: 100 }, (_, i) => i + 1)
);
assert.deepStrictEqual(range(-5), [-5, -4, -3, -2, -1]);
assert.deepStrictEqual(range(5, 5, 0), [5]);
assert.deepStrictEqual(range(5, 5, -1), [5]);
assert.deepStrictEqual(range(5, 1, 1), []);
assert.deepStrictEqual(range(1, 5, -1), []);
assert.deepStrictEqual(range(1, 5, 6), [1]);
assert.deepStrictEqual(range(2, 1, -5), [2]);
assert.deepStrictEqual(range(0, -1, -5), [0]);
assert.deepStrictEqual(range(0, -1, 0), [0]);
assert.deepStrictEqual(range(1, 5, 0), [1]);
assert.deepStrictEqual(range(0, 5), [0, 1, 2, 3, 4, 5]);
assert.deepStrictEqual(range(0, -1), [0, -1]);
assert.deepStrictEqual(range(0, -3), [0, -1, -2, -3]);
assert.deepStrictEqual(range(-3, 0), [-3, -2, -1, 0]);
assert.deepStrictEqual(range(5, 1), [5, 4, 3, 2, 1]);
