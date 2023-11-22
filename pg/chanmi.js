const kim = {
    nid: 3,
    addr: "Pusan",
    arr: [1, 2, 3, { aid: 1 }, [10, 20]],
    oo: { id: 1, name: "Hong", addr: { city: "Seoul" } },
    x: { dd: 123 },
    xx: null,
    yy: function () {
        console.log(this.oo);
    },
    yyy() {
        console.log(this.oo);
    },
    [Symbol()]: 9,
    [Symbol()]: Symbol("symbol2"),
};

function deep(obj) {
    if (!obj || typeof obj !== "object") return obj;
    const stackTable = {};
    const heapTable = {};
    let i = 0,
        j = 500,
        u = 1000,
        f = 2000;

    for (const el of Reflect.ownKeys(obj)) {
        // 배열인경우
        if (Array.isArray(obj[el])) {
            stackTable[el] = i;
            for (let k = 0; k < obj[el].length; k += 1) {
                heapTable[i++] = obj[el][k];
                // heapTable[i++] = deep(obj[el][k]);
            }
            // 객체인경우
        } else if (typeof obj[el] === "object" && obj[el] !== null) {
            stackTable[el] = i;
            for (const y of Reflect.ownKeys(obj[el])) {
                heapTable[i++] = j;
                heapTable[j++] = [y, u];
                heapTable[u++] = obj[el][y];
            }
            // 함수인경우
        } else if (typeof obj[el] === "function") {
            stackTable[el] = f;
            heapTable[f++] = obj[el];
            // 나머지 primitive
        } else {
            stackTable[el] = obj[el];
        }
    }
    return [stackTable, heapTable];
}

function arr(i, j, u, f) {
    if (Array.isArray(obj[el])) {
        stackTable[el] = i;
        for (let k = 0; k < obj[el].length; k += 1) {
            heapTable[i++] = obj[el][k];
            // heapTable[i++] = deep(obj[el][k]);
        }
        // 객체인경우
    } else if (typeof obj[el] === "object" && obj[el] !== null) {
        stackTable[el] = i;
        for (const y of Reflect.ownKeys(obj[el])) {
            heapTable[i++] = j;
            heapTable[j++] = [y, u];
            heapTable[u++] = obj[el][y];
        }
        // 함수인경우
    } else if (typeof obj[el] === "function") {
        stackTable[el] = f;
        heapTable[f++] = obj[el];
        // 나머지 primitive
    } else {
        stackTable[el] = obj[el];
    }
}

const newKim = deep(kim);
console.log(newKim);
