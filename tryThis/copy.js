// 원시값(primitive)만을 갖는 객체 kim을 복사하는 프로그램을 Object의 클래스 메소드 / spread(...) 연산자를 사용하지 말고 작성하시오.

const kim = {
    nid: 3,
    nm: "Hong",
    addr: "Pusan",
    arr: [1, 2, 3, { aid: 1 }, [10, 20]],
    x: null,
};

function copyObject(obj) {
    const tmp = {};
    for (let i in obj) {
        tmp[i] = obj[i];
    }
    return tmp;
}

const newKim = copyObject(kim);
newKim.addr = "Daegu";
console.log(kim.addr !== newKim.addr); // true면 통과!
kim.addr = 123;
console.log(newKim);
console.log(kim);
