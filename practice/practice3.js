const before = () => console.log("before....");
const after = () => console.log("after...");

const someFn = () => console.log("do something...1");

const template = function (fn) {
  return function () {
    before();
    fn();
    after();
  };
};

const temp = template(someFn);

temp();
