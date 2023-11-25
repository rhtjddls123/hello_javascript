import assert from "assert";
import "../utils/array-utils.js";

const arr = [1, 2, 3, 4, 5];
arr.firstObject; // 1
arr.lastObject; // 5

const hong = { id: 1, name: "Hong" };
const kim = { id: 2, name: "Kim" };
const lee = { id: 3, name: "Lee" };

const users = [hong, kim, lee]; // {id:1, name: 'Hong'}, …

assert.deepStrictEqual(users.mapBy("id"), [1, 2, 3]);
assert.deepStrictEqual(users.mapBy("name"), ["Hong", "Kim", "Lee"]);
assert.deepStrictEqual(users.filterBy("id", 2), [{ id: 2, name: "Kim" }]);
assert.deepStrictEqual(users.findBy("name", "Kim"), { id: 2, name: "Kim" });
assert.deepStrictEqual(users.firstObject, { id: 1, name: "Hong" });
assert.deepStrictEqual(users.lastObject, { id: 3, name: "Lee" });
assert.deepStrictEqual(arr.firstObject, 1);
assert.deepStrictEqual(arr.lastObject, 5);
