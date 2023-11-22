// // Emp type의 hong 객체에 fullName 기능을 Accessor Property를 사용하지 말고, proxy 생성자 함수를 이용하여 구현하시오.

// class Emp {
//   firstName;
//   lastName;
// }

// const hong = new Proxy(new Emp(), {
//   set(target, prop, value) {
//     if (prop === "fullName") {
//       const [f, l] = value.split(" ");
//       target.firstName = f;
//       target.lastName = l;
//     }
//   },
//   get(target, prop) {
//     if (prop === "fullName") {
//       return `${target.firstName} ${target.lastName}`;
//     }
//   },
// });

// hong.fullName = "Kildong Hong"; // split하여 firstName, lastName 셋
// console.log(hong.fullName); // 'Kildong HONG' 출력하면 통과!

// Emp type의 hong 객체에 fullName 기능을 Accessor Property를 사용하지 말고, proxy 생성자 함수를 이용하여 구현하시오.

class Emp {
  constructor() {
    return new Proxy(this, {
      set(target, prop, value) {
        if (prop === "fullName") {
          const [f, l] = value.split(" ");
          if (!l) {
            target.lastName = f?.toUpperCase();
            return;
          }
          target.firstName = f;
          target.lastName = l?.toUpperCase();
        } else {
          target[prop] = value;
        }
      },
      get(target, prop) {
        if (prop === "fullName") {
          return `${target.firstName} ${target.lastName}`;
        } else {
          console.log(prop);
          return target[prop];
        }
      },
    });
  }

  firstName;
  lastName;
}

const hong = new Emp();
hong.fullName = "Kildong Hong"; // split하여 firstName, lastName 셋
console.log(hong.fullName); // 'Kildong HONG' 출력하면 통과!
hong.fullName = "Lee";
console.log(hong.firstName, hong.lastName); // 'Kildong LEE' 출력하면 통과!
