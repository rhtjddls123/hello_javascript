import moment from "moment-timezone";
moment.locale("ko");
const d0 = new Date(0);
const d1 = moment(d0);
console.log(moment(d0));
console.log(d1);
console.log(moment().tz("Asia/Seoul").local("ko").format("DD"));

const week = ["일", "월", "화", "수", "목", "금", "토"];
const day = new Date(2023, 11, 17, 9);
day.setDate(1);
let start = day.getDay();
day.setMonth(day.getMonth() + 1);
day.setDate(0);
const end = day.getDate();
const calendar = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
];
let j = 0;
console.log(start, end);
for (let i = 1; i <= end; i += 1) {
  if (start > 6) {
    j += 1;
    start = 0;
  }
  calendar[j][start] = i;
  start += 1;
}

let s = "";
console.log("일  월  화  수  목  금  토");
console.log("---------------------------");

for (let i = 0; i < calendar.length; i += 1) {
  for (let j = 0; j < calendar[i].length; j += 1) {
    if (calendar[i][j] !== 0) {
      s += calendar[i][j];
      if (calendar[i][j] < 10) {
        s += "   ";
      } else {
        s += "  ";
      }
    } else {
      s += "    ";
    }
  }
  console.log(s);
  s = "";
}

// console.log(calendar);
