// 테스트를 위한 임의의 시간(1초 미만)에 resolve를 실행하는 randTime 함수를 작성하시오.
export const randTime = (val) => {
  return new Promise((resolve, reject) => {
    const r = Math.random() * 1000;
    console.log("randTime>>", val, r);
    setTimeout(() => {
      resolve(val);
    }, r);
  });
};
// randTime(100).then(console.log);

[1, 2, 3, 4, 5].forEach((a) => randTime(a).then(console.log));
