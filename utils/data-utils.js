export const WEEKS = "일월화수목금토".split("");

export const calendar = (dateStr) => {
  const [year, month] = dateStr.split("-");
  const d = new Date(year, Number(month), 1);
  d.setDate(0);
  const end = d.getDate();
  d.setDate(1);
  let calendarStr = "    ".repeat(d.getDay());
  for (let i = 0; i < end; i += 1) {
    calendarStr += d.getDate().toString().padStart(4);
    if (d.getDay() === 6) calendarStr += "\n";
    d.setDate(d.getDate() + 1);
  }

  return calendarStr;
};
