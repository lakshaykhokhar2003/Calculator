function btnplus() {
    document.Calculator.display.value += "+"; document.Calculator.display.style.textAlign = "center";
}
function btnsub() {
    document.Calculator.display.value += "-"; document.Calculator.display.style.textAlign = "center";
}
function btnmult() {
    document.Calculator.display.value += "*"; document.Calculator.display.style.textAlign = "center";
}
function btndot() {
    document.Calculator.display.value += "."; document.Calculator.display.style.textAlign = "center";
}
function btndiv() {
    document.Calculator.display.value += "/"; document.Calculator.display.style.textAlign = "center";
}
function btnclear() {
    document.Calculator.display.value = ""; document.Calculator.display.style.textAlign = "center";
}