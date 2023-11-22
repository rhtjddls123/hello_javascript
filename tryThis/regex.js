upperToLower("Senior Coding Learning JS");
// ⇒ '*s*-enior *c*-oding *l*-earning *j*-*s*-'

export function upperToLower(str) {
  console.log(str.replace(/[A-Z]/g, (a) => `*${a.toLowerCase()}*-`));
  return str.replace(/[A-Z]/g, (a) => `*${a.toLowerCase()}*-`);
}
console.log(
  upperToLower("Senior Coding Learning JS") ===
    "*s*-enior *c*-oding *l*-earning *j*-*s*-"
);

// 전화번호를 정확한 형식으로 출력하는 함수를 작성하시오.
telfmt("0101234567"); // '010-123-4567' 10
telfmt("01012345678"); // '010-1234-5678' 11
telfmt("0212345678"); // '02-1234-5678' 10
telfmt("021234567"); // '02-123-4567' 9
telfmt("0331234567"); // '033-123-4567' 10
telfmt("15771577"); // '1577-1577' 8
telfmt("07012341234"); // '070-1234-1234' 11

function telfmt(str) {
  //11, 10, 9, 8
  if (str.length === 8) {
    console.log(str.replace(/(\d{4})(\d{4})/, "$1-$2"));
  } else if (str.length === 9) {
    console.log(str.replace(/(\d{2})(\d{3,4})(\d{4})$/, "$1-$2-$3"));
  } else if (str.length === 10) {
    console.log(str.replace(/(\d{2,3})(\d{3,4})(\d{4})$/, "$1-$2-$3"));
  } else if (str.length === 11) {
    console.log(str.replace(/(\d{3})(\d{4})(\d{4})$/, "$1-$2-$3"));
  }
}
