// 다음 코드에서 promiseAll 함수를 작성하시오.
import assert from "assert";

const promiseAll = (arr) => {
  const a = [];
  let len = arr.length;
  return new Promise((resolve, reject) => {
    for (let i = 0; i < arr.length; i += 1) {
      arr[i]
        .then((res) => {
          a[i] = res;
          len -= 1;
          if (len === 0) {
            resolve(a);
          }
        })
        .catch((err) => reject(err));
    }
  });
};

const vals = [1, 2, 3];
const randTime = (val) => {
  return new Promise((resolve, reject) => {
    const r = Math.random() * 1000;
    console.log("randTime>>", val, r);
    setTimeout(() => {
      resolve(val);
    }, r);
  });
};

promiseAll([randTime(1), randTime(2), randTime(3)])
  .then((arr) => {
    console.table(arr);
    assert.deepStrictEqual(arr, vals);
  })
  .catch(console.error);

promiseAll([randTime(11), Promise.reject("RRR"), randTime(33)])
  .then((array) => {
    console.log("여긴 과연 호출될까?!");
  })
  .catch((error) => {
    console.log("reject!!!!!!>>", error);
  });
