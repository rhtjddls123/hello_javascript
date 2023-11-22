// 다음과 같이 부서와 직원 객체가 있을 때, deptMap과 empDept를 만들고,  개발팀 직원 이름 목록을 출력하시오. (key: id)
const hrTeam = { id: 1, dname: "인사팀" };
const devTeam = { id: 2, dname: "개발팀" };
const depts = [hrTeam, devTeam];
const hong = { id: 1, name: "Hong", dept: 1 };
const kim = { id: 2, name: "Kim", dept: 2 };
const emps = [
  hong,
  kim,
  { id: 3, name: "Park", dept: 2 },
  { id: 4, name: "Choi", dept: 2 },
];

const deptMap = new Map();
for (const i of depts) {
  deptMap.set(i.id, i);
}

const empMap = new Map();
for (const i of emps) {
  empMap.set(i.id, i);
}

const empDept = new Map(
  emps.map((a) => {
    const { dept } = a;
    delete a.dept;
    return [a, deptMap.get(dept)];
  })
);
//hrTeam은 id(dept)가 1이고 인사팀, devTeam은 id(dept)가 2고 개발팀
//hong은 dept가 1(인사팀) 나머지는 dept가 2(개발팀)
//hong, kim, emps[3], emps[4]에서 dept가 depts의 id랑 같은것들을 맵핑

console.log(deptMap); // Map(2) { 1 => { id: 1, dname: '인사팀' }, 2 => { id: 2, dname: '개발팀' } }  ⇐ deptMap.get(2)
console.log(empMap); // Map(4) { 1 => {id: 1, name: 'Hong', dept: 1}, 2 => {id: 2, name: 'Kim', dept: 2}, … }
console.log(empDept); // Map(4) { { id: 1, name: 'Hong' } => { id: 1, dname: '인사팀' }, { id: 2, name: 'Kim' } => { id: 2, dname: '개발팀' }, { id: 3, name: 'Park' } => { id: 2, dname: '개발팀' }, { id: 4, name: 'Choi' } => { id: 2, dname: '개발팀' } }

console.log(empDept.get(kim).dname); // '개발팀'
// console.log(emps);
// 개발팀 직원 목록 출력 ⇒ Kim, Park, Choi
