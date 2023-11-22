const kim = {
    nid: 3,
    addr: "Pusan",
    arr: [1, 2, 3, { aid: 1, a: 2 }, [10, 20]],
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
    const stackTable = {};
    const heapTable = {};
    let heapArr = 10;
    let heapObj = 1000;
    let heapFunc = 5000;

    function arr(ar) {
        const stackTable = {};
        for (const i in ar) {
            if (Array.isArray(ar[i])) {
                stackTable[heapArr] = heapArr;
                arr(ar[i]);
                heapArr++;
            } else if (typeof ar[i] === typeof {} && ar[i]) {
                stackTable[heapArr] = heapArr;
                obje(ar[i]);
                heapArr++;
            } else if (typeof ar[i] === "function") {
            } else {
                stackTable[heapArr++] = ar[i];
            }
        }
        console.log("aaa", stackTable);
    }

    function obje(ob) {
        const stackTable = {};
        for (const i in ob) {
            if (Array.isArray(ob[i])) {
                stackTable[heapArr] = heapArr;
                arr(ob[i]);
                heapArr++;
            } else if (typeof ob[i] === typeof {} && ob[i]) {
                stackTable[heapObj] = heapObj;
                arr(ob[i]);
                heapObj++;
            } else if (typeof ob[i] === "function") {
            } else {
                stackTable[i] = ob[i];
            }
        }
        console.log("bbb", stackTable);
    }

    for (const i of Reflect.ownKeys(obj)) {
        if (typeof obj[i] === typeof {} && obj[i]) {
            if (Array.isArray(obj[i])) {
                //array
                stackTable[i] = heapArr;
                arr(obj[i]);
                heapArr++;
            } else {
                stackTable[i] = heapObj;
                obje(obj[i]);
                heapObj++;
                //object
            }
        } else if (typeof obj[i] === "function") {
            stackTable[i] = heapFunc++;
        } else {
            stackTable[i] = obj[i];
        }
    }
    return [stackTable, heapTable];
}

const newKim = deep(kim);
console.log(newKim);
