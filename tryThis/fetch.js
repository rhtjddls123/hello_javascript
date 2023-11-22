// const f = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, 10);
//   });
// };
// f().then((res) => console.log(res * 100));

// try {
//   const res = await f();
//   console.log(res * 100);
// } catch (error) {
//   console.error(error);
// }

// const sampleUrl = "https://jsonplaceholder.typicode.com/users/1";
// const myFetch = (url) => fetch(url);
// const res = myFetch(sampleUrl);

// console.log(res);
// res
//   .then((res2) => {
//     const j = res2.json();
//     console.log(j);
//     return j;
//   })
//   .then((j) => console.log(j));

// myFetch(sampleUrl).then((user) => {
//   console.log("user>>", user);
// });

// 단, next, getRow는 동기 함수!
// https://npmtrends.com/mysql-vs-mysql2

const getAllUsers = (sql) =>
  new Promise((resolve, reject) =>
    query.execute(sql, (err, rs) => {
      if (err) reject(err);

      const results = [];
      while (rs.next()) results.push(rs.getRow());

      resolve(results);
    })
  );
function execute(sqlStr, cb) {
  conn
    .query(sqlStr)
    .then((res) => cb(null, res))
    .catch((err) => cb(err));
}
