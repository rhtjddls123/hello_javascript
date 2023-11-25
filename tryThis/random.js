import { rand } from "../utils/math-utils.js";
import assert from "assert";

const rand_1_to_10 = rand(1, 10);
const rand_0_to_9 = rand(0, 9);
const rand_100_to_200 = rand(100, 200);
assert.deepStrictEqual(1 <= rand_1_to_10 && rand_1_to_10 <= 10, true);
assert.deepStrictEqual(0 <= rand_0_to_9 && rand_0_to_9 <= 9, true);
assert.deepStrictEqual(100 <= rand_100_to_200 && rand_100_to_200 <= 200, true);
