class Emp {
  firstName = "F";
  lastName = "L";
}
const _hong = new Emp();
const hong = new Proxy(_hong, {
  get(target, prop) {
    console.log(target, prop);
    if (prop === "fullName") return target.firstName + " " + target.lastName;
    return target[prop];
  },
});

console.log(hong.fullName);
