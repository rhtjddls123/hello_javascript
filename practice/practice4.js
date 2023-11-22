const before = () => console.log("before....");
const after = () => console.log("after...");

const someFn = (name, greeting) => console.log(`${greeting}, ${name}`);

const template = function (fn) {
  return function (...args) {
    before();
    fn(...args);
    after();
  };
};

const temp = template(someFn);

temp("lnsol", "hello");
