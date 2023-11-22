// 0.1초에 한번씩 rand를 총 20회 호출하였을 때, 다음의 각 상황에서 총 몇 번 호출되는지 증명하시오.
const rand = (s, e) => {
  const ret = s + Math.floor((e - s + 1) * Math.random());
  console.log("rand>>", ret);
  return ret;
};

const debounce = (cb, delay) => {
  let timer;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(cb, delay, ...args);
  };
};

const throttle = (cb, delay) => {
  let timer;
  return (...args) => {
    if (timer) return;
    timer = setTimeout(() => {
      cb(...args);
      timer = null;
    }, delay);
  };
};

// 단순 호출 시  ⇒ 총 20회 실행!
// 1초 Debounce 호출 시   ⇒ 1회 (총 3초에 실행)
// 1초 Throttle 호출 시   ⇒ 총 2초 동안 ⇒ 2회 실행!(1초에 한번씩)
let cnt = 0;
const debouncer = debounce(rand, 1000);
const throttler = throttle(rand, 1000);
const intl = setInterval(() => {
  // console.log("1)", cnt, rand(1, 10));
  // console.log("2)", cnt, debouncer(1, 10));
  // debouncer(1, 10);
  throttler(1, 10);
  if (++cnt >= 20) {
    clearInterval(intl);
  }
}, 100);
