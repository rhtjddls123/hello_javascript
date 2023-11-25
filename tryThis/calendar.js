import { calendar, WEEKS } from "../utils/data-utils.js";

let week = "";
for (let i = 0; i < WEEKS.length; i += 1) {
  week += WEEKS[i].toString().padStart(3);
}
console.log(week);
console.log("--------------------------".padStart(28));
console.log(calendar("2023-11-17"));
