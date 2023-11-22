// 아래 users 배열에 대하여 추가/수정/삭제하는 순수 함수를 작성하시오.
const hong = { id: 1, name: "Hong" };
const choi = { id: 5, name: "Choi" };
const kim = { id: 2, name: "kim" };
const lee = { id: 3, name: "Lee" };
const park = { id: 4, name: "Park" };
const users = [kim, lee, park]; // 오염되면 안됨!!
addUser(hong); // [kim, lee, park, hong]
// removeUser(lee); // [kim, park]

console.log(users);

function addUser(obj) {
  // console.log([...users, obj]);
  return [...users, obj];
}

// function removeUser(obj) {
//   const tmp = [...users];
//   const idx = tmp.findIndex((o) => o === obj);
//   // console.log([...tmp.slice(0, idx), ...tmp.slice(idx + 1)]);
//   return [...tmp.slice(0, idx), ...tmp.slice(idx + 1)];
// }

const removeUser = (user) => users.filter((_users) => _users.id !== user.id);

// function changeUser(obj1, obj2) {
//   const tmp = [...users];
//   const idx = tmp.findIndex((o) => o === obj1);
//   // tmp[idx] = obj2;
//   // console.log(tmp);
//   return (tmp[idx] = obj2);
// }

const changeUser = (target, user) =>
  users.map((_user) => (_user.id === target.id ? user : _user));
console.log(changeUser(kim, choi)); // [choi, lee, park]
// function addUser(obj, arr) {
//   // console.log([...users, obj]);
//   return [...arr, obj];
// }

// function removeUser(obj, arr) {
//   const tmp = [...arr];
//   const idx = tmp.findIndex((o) => o === obj);
//   // console.log([...tmp.slice(0, idx), ...tmp.slice(idx + 1)]);
//   return [...tmp.slice(0, idx), ...tmp.slice(idx + 1)];
// }

// function changeUser(obj1, obj2, arr) {
//   const tmp = [...arr];
//   const idx = tmp.findIndex((o) => o === obj1);
//   // tmp[idx] = obj2;
//   // console.log(tmp);
//   return (tmp[idx] = obj2);
// }
