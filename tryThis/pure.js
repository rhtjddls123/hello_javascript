// const weeks = ["일", "월", "화", "수", "목", "금", "토"];
// const getNextWeek = () => {
//     let widx = -1;
//     return function () {
//         widx += 1;
//         if (widx >= weeks.length) widx = 0;
//         return `${weeks[widx]}요일`;
//     };
// };

// const a = getNextWeek();
// let cnt = 0;
// const intl = setInterval(() => {
//     console.log("call", cnt, a());
//     if ((cnt += 1) === 8) clearInterval(intl);
// }, 1000);

const weeks = ["일", "월", "화", "수", "목", "금", "토"];
const getNextWeek = (() => {
  let widx = 0;
  return () => {
    return `${weeks[widx >= weeks.length ? (widx = 0) : widx++]}요일`;
  };
})();

const intl = setInterval(
  (() => {
    let cnt = 0;
    return () => {
      console.log("call", cnt, getNextWeek());
      if ((cnt += 1) === 8) clearInterval(intl);
    };
  })(),
  100
);
