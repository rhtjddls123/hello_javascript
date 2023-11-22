// const randTime = (val) => {
//   return new Promise((resolve, reject) => {
//     const r = Math.random() * 1000;
//     console.log("randTime>>", val, r);
//     setTimeout(() => {
//       resolve(val);
//     }, r);
//   });
// };

// const vals = [1, 2, 3];

// vals.forEach((a) => randTime(a).then(console.log));

// Promise.all(vals.map(randTime)).then(console.table);

// Promise.all([randTime(1), Promise.reject("Error!")])
//   .then(console.table)
//   .catch(console.error);

// Promise.race([randTime(1), Promise.reject("Error!"), randTime(2)])
//   .then(console.table)
//   .catch(console.error);
// Promise.any([randTime(1), Promise.reject("Error!"), randTime(2)])
//   .then((res) => console.log("res>>", res))
//   .catch(console.error);

// Promise.allSettled([randTime(1), Promise.reject("Error!"), randTime(2)])
//   .then(console.table)
//   .catch(console.error);

// 다음 코드를 병렬로 실행하여 3.x초에 수행되도록 promiseAll 함수를 재작성(refactoring)하시오.
const promiseAll = async (promises) => {
  const results = [];
  const fns = promises.map((p, i) => p(i + 1));
  for await (const fn of fns) {
    console.log(fn);
    results.push(fn);
  }
  return results;
};

const afterTime = (sec) => {
  console.log("afterTime>>", sec);
  if (sec < 1 || sec > 3)
    return Promise.reject(new Error("Not valid sec range!!"));
  return new Promise((resolve) => setTimeout(resolve, sec * 1000, `${sec}초`));
};

console.time("async-promiseAll");
const pfns = [afterTime, afterTime, afterTime];
const rets = await promiseAll(pfns);
console.log("rets>>>", rets);
console.timeEnd("async-promiseAll");

// const afterTime = (sec) =>
//   new Promise((resolve) => setTimeout(resolve, sec * 1000, sec));
// console.time("for-await-of");
// const arr = [afterTime(1), afterTime(2)];

// for (const fo of arr.values()) {
//   console.log("fo=", fo);
// }

// for await (const fao of arr.values()) {
//   console.log("fao=", fao);
// }

// console.timeEnd("for-await-of");
