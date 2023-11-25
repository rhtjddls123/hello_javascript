// 1970년 1월 1일과 1970년 1월 2일의 차이를 초로 나타내시오.
import { rand } from "../utils/math-utils.js";
import { WEEKS } from "../utils/data-utils.js";
import assert from "assert";
const d1 = new Date(0);
const d2 = new Date(1970, 0, 2, 9);
const result = (d2 - d1) / 1000;
assert.deepStrictEqual(result, 86400);

// 이 달의 날짜 5개를 무작위로 만들어 역순으로 정렬하시오.
const lastDay = new Date();
lastDay.setMonth(lastDay.getMonth() + 1);
lastDay.setDate(0);
const days = new Array(5).fill(0).map((_) => new Date());
days.forEach((a) => a.setDate(rand(1, lastDay.getDate())));
console.log(days);

// 내년(2024년)의 오늘(8월 30일)의 요일을 출력하시오.
const day = new Date();
day.setFullYear(day.getFullYear() + 1);
console.log(`${WEEKS[day.getDay()]}요일`);

// 오늘(10월 30일)로 부터 100일 후의 날짜는?
const now = new Date();
now.setDate(now.getDate() + 100);
console.log(now);
