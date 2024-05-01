const btnInc = document.querySelector(".inc");
const btnReset = document.querySelector(".reset");
const btnDec = document.querySelector(".dec");

const clsNum = document.querySelector(".num");
var num = 0;

btnInc.onclick = function() {
    num = num + 1;
    clsNum.innerText = num;
}
btnReset.onclick = function() {
    num = 0;
    clsNum.innerText = num;
}
btnDec.onclick = function() {
    num = num - 1;
    clsNum.innerText = num;
}
