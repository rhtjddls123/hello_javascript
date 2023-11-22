const $spanA = document.getElementById("spanA");
console.log("sadf", $spanA);

const $divs = document.getElementsByTagName("div");
console.log("div", $divs);

const $div = $divs[0];
console.log("div", $div);

const fc = $div.firstChild;
console.log("fc", fc);

const p = $div.firstElementChild;
//HTMLCollection
//NodeList
const spanX = document.getElementById("spanX");
/*spanX.innerText = "X";
const c = spanX.offsetWidth;
for (; spanX.offsetWidth <= 500; ) {
    spanX.innerText += "X";
}
p.insertBefore(document.createTextNode('X'),spanX) */

spanX.textContent = "XXXXX";
const width = spanX.offsetWidth;
/*while (spanX.offsetWidth <= 500) {
    spanX.textContent += "X";
}*/

spanX.textContent = "X".repeat(500 / (width / 5));
console.log(spanX.offsetWidth);

const $tmp = spanX.cloneNode();
$tmp.textContent = "XXXXXX";
console.log($tmp.offsetWidth);
