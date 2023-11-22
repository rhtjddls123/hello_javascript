const before = () => console.log("before....");
const after = () => console.log("after...");

const someFn = (name, greeting) => console.log(`${greeting}, ${name}`);
const someFn2 = (id, nickname, email, level) =>
  console.log(`${id}/${nickname}/${email}/${level}`);

const template = function (fn) {
  return function (...args) {
    before();
    fn(...args);
    after();
  };
};

const temp = template(someFn);
const temp2 = template(someFn2);

temp("lnsol", "hello");
temp2(1, "lnsol", "lnsol@gmail.com", 5);
