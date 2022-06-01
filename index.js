function add(a, b) {
    return (a + b);
}
console.log(add(1100, 84))

function subtract(a, b) {
    return (a - b);
}
console.log(subtract(-484, -2))

function multiply(a, b) {
    return (a * b);
}
console.log(multiply(828920, 1))

function divide(a, b) {
    return (a / b);
}
console.log(divide(.8602941176470589, 1))



function increment(n) {
    let num = n
    n = ++n
    return (n)
}
console.log(increment(548))

function decrement(n) {
    let num = n
    num = --n
    return (n)
}
console.log(decrement(548))

function makeInt(n) {
    let newNum = parseInt(n)
    return (newNum)
}
console.log(makeInt("2.5"))

function makeInt(n) {
    let newNum = parseInt(n, 10)
    return (newNum)
}
console.log(makeInt("0x2328"))

function makeint(n) {
    let num = isNaN(n)
    if (num = 'NaN') {
      return("True");
    }
}
console.log(makeint("sldkjflksjf", 10))

function preserveDecimal(n) {
    let newNum = parseFloat(n)
    return (newNum)
}
console.log(preserveDecimal(2.2222))

function preserveDecimal2(n, l) {
    let num = parseInt(n)
    if (num = 'NaN') {
      return("True");
    }
}
console.log(preserveDecimal2("sldkjflksjf", 10))
