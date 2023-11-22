// 앞에서 작성한 다음 코드를 Promise를 이용하여 refactoring 하시오.
// setTimeout(function () {
//   console.log("depth1", new Date());
//   setTimeout(function () {
//     console.log("depth2", new Date());
//     setTimeout(function () {
//       console.log("depth3", new Date());
//       throw new Error("Already 3-depth!!");
//     }, 3000);
//   }, 2000);
// }, 1000);

console.log("START!", new Date());

const depth_timer = (depth) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (depth >= 3) reject(new Error("Already 3-depth!!"));
      console.log("depth" + depth, new Date());
      resolve(depth + 1);
    }, 1000);
  });
};
depth_timer(1)
  .then((res) => depth_timer(res))
  .then(depth_timer)
  .then(depth_timer)
  .then(depth_timer)
  .then(depth_timer)
  .catch((err) => console.error(err));
