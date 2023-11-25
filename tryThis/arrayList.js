// Collection 클래스를 상속받아 List 메소드들과 클래스 메소드 arrayToList, listToArray를 보유한 ArrayList 클래스를 구현하시오.
// ArrayList.listToArray({ value: 1, rest: { value: 2 } }) ⇒ [1,2]
import { ArrayList } from "../utils/Collection.js";
import assert from "assert";

const alist = new ArrayList([1, 2, 3]); // alist.toString() ⇒ { value: 1, rest: { value: 2, rest: { value: 3 } } }
alist.add(4); // { value: 1, rest: { value: 2, rest: { value: 3, rest: { value: 4 } } } }
alist.remove(2); // { value: 1, rest: { value: 3, rest: { value: 4 } } } }
alist.add(22, 1); // { value: 1, rest: { value: 22, rest: { value: 3, rest: { value: 4 } } } }
alist.add(33, 1); // { value: 1, rest: { value: 33, rest: { value: 22, rest: { value: 3, rest: { value: 4 } } } } }
alist.set(1, 300); // { value: 1, rest: { value: 300, rest: { value: 22, rest: { value: 3, rest: { value: 4 } } } } }
alist.print();
alist.printList();
assert.deepStrictEqual(alist.get(2), 22);
assert.deepStrictEqual(alist.size, 5);
assert.deepStrictEqual(alist.indexOf(300), 1);
assert.deepStrictEqual(alist.contains(300), true);
assert.deepStrictEqual(alist.contains(301), false);
assert.deepStrictEqual(alist.isEmpty, false);
assert.deepStrictEqual(alist.peek, 4);
assert.deepStrictEqual(alist.toArray(), [1, 300, 22, 3, 4]);
assert.deepStrictEqual(alist.iterator().next(), { value: 1, done: false });
alist.clear(); // all clear
assert.deepStrictEqual(alist.isEmpty, true);
assert.deepStrictEqual(
  ArrayList.listToArray({ value: 1, rest: { value: 2 } }),
  [1, 2]
);
