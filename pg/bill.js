const MENU = {
    짜장: { price: 7000 },
    짬뽕: { price: 9900 },
    탕슉: { price: 25000, taxfree: 1 },
};

function bill(tableNo) {
    const menuList = {};
    const total = { allPrice: 0, allTax: 0, allCount: 0 };
    const pad = 7;

    function printLine(s = "=") {
        console.log(s.repeat(pad * 3));
    }

    function calcTax(price) {
        return Math.round((price / 1.1) * 0.1);
    }

    function f([label, unit], price) {
        const strs = [];
        console.log(
            `${label.padEnd(pad, " ")} ${price
                .toLocaleString()
                .padStart(pad, " ")}${unit}`
        );
    }

    function order(menu) {
        const price = MENU[menu]["price"];
        const free = MENU[menu]["taxfree"];
        let tax;
        free === 1 ? (tax = 0) : (tax = calcTax(price));
        if (menu in menuList) {
            menuList[menu]["공급가액"] += price;
            menuList[menu]["부가세액"] += tax;
            menuList[menu]["수량"] += 1;
        } else {
            menuList[menu] = {
                공급가액: price,
                부가세액: free === 1 ? 0 : tax,
                수량: 1,
            };
        }
        total.allPrice += price;
        total.allTax += tax;
        total.allCount += 1;
    }

    function printBill() {
        console.log(`\n\ntalbeNo. ${tableNo}`);
        const keyList = Object.keys(menuList);
        printLine();
        for (const key of keyList) {
            const price = menuList[key]["공급가액"];
            const count = menuList[key]["수량"];
            const tax = menuList[key]["부가세액"];
            console.log(`* ${key}`);
            // console.log(`공급가액: ${print(price)}원`);
            // console.log(`부가세액: ${print(tax)}원`);
            // console.log(`주문수량: ${print(count)}개`);
            f`공급가액: ${price}원`;
            f`부가세액: ${tax}원`;
            f`주문수량: ${count}개`;
            printLine("-");
        }
        // console.log(`주문합계: ${print(total.allPrice)}원`);
        // console.log(`세액합계: ${print(total.allTax)}원`);
        // console.log(`전체수량: ${print(total.allCount)}개`);
        f`주문합계: ${total.allPrice}원`;
        f`세액합계: ${total.allTax}원`;
        f`전체수량: ${total.allCount}개`;
        printLine();
    }

    function cancel(menu) {
        const price = MENU[menu]["price"];
        const free = MENU[menu]["taxfree"];
        let tax;
        free === 1 ? (tax = 0) : (tax = calcTax(price));
        if (!menuList[menu]) {
            console.log("Not ordered yet!!");
        }
        menuList[menu]["수량"] -= 1;
        menuList[menu]["공급가액"] -= price;
        menuList[menu]["부가세액"] -= tax;
        total.allCount -= 1;
        total.allPrice -= price;
        total.allTax -= tax;
        if (menuList[menu]["수량"] === 0) {
            delete menuList[menu];
        }
    }

    return {
        order,
        printBill,
        cancel,
    };
}

const table1 = bill(1);
table1.order("짜장");
table1.order("짬뽕");
table1.order("짬뽕");
table1.order("짬뽕");
table1.printBill();

const table2 = bill(2);
table2.order("짜장");
table2.printBill();

table1.order("탕슉");
table1.printBill();

table1.cancel("탕슉");
table1.cancel("짬뽕");
table1.printBill();
