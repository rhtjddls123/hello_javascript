const arr = [100, 200, 300, 400, 500, 600, 700];

// for-in문을 사용하여 배열의 인덱스를 출력하시오.
// for-in문을 사용하여 배열의 원소를 출력하시오.
for (let i in arr) {
  console.log(`arr의 ${i}번째 원소: ${arr[i]}`);
}
console.log("----------------------");

const obj = { name: "lim", addr: "Yongsan", level: 1, role: 9, receive: false };

// 3. for-in문을 사용하여 프로퍼티 이름을 출력하시오.
for (let i in obj) {
  console.log(i);
}
console.log("----------------------");
// 4. for-in문을 사용하여 프로퍼티 값을 출력하시오.
for (let i in obj) {
  console.log(obj[i]);
}
console.log("----------------------");
// 5. for-of문을 사용하여 프로퍼티 값을 출력하시오.
for (let i of Object.values(obj)) {
  console.log(i);
}
// 6. level 프로퍼티가 열거되지 않도록 설정하시오. // Object.defineProperty
console.log(Object.getOwnPropertyDescriptor(obj, "level"));
Object.defineProperty(obj, "level", { enumerable: false });
console.log(Object.getOwnPropertyDescriptor(obj, "level"));
// 7. role 프로퍼티는 읽기전용으로 설정하시오. // Object.defineProperty
console.log(Object.getOwnPropertyDescriptor(obj, "role"));
Object.defineProperty(obj, "role", { writable: false });
console.log(Object.getOwnPropertyDescriptor(obj, "role"));
