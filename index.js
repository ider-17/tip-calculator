// function fiveP(n) {
//     n += n * 0.05
//     return n
// }
// fiveP(1000);



// function tenP(n) {
//     n += n * 0.1
//     return n
// }

// tenP(1000);



// function fifteenP(n) {
//     n += n * 0.15
//     return n
// }

// fifteenP(1000);



// function twentyFiveP(n) {
//     n += n * 0.25
//     return n
// }

// twentyFiveP(1000);



// function thirtyFiveP(n) {
//     n += n * 0.35
//     return n
// }

// thirtyFiveP(1000);



// function fiftyP(n) {
//     n += n * 0.5
//     return n
// }

// fiftyP(1000);



// function sixtyFiveP(n) {
//     n += n * 0.65
//     return n
// }

// sixtyFiveP(1000);



// function eightyP(n) {
//     n += n * 0.8
//     return n
// }

// eightyP(1000);



const inputElRef = document.getElementById("input-dis");
const totalElRef = document.getElementById("total");
const button5P = document.getElementById("but5%");
const button10P = document.getElementById("but10%");
const button15P = document.getElementById("but15%");
const button25P = document.getElementById("but25%");
const button35P = document.getElementById("but35%");
const button50P = document.getElementById("but50%");
const button65P = document.getElementById("but65%");
const button80P = document.getElementById("but80%");


inputElRef.value = "0"


button5P.addEventListener("click", function () {
    // totalElRef.innerHTML = inputElRef.value
    const num = Number(inputElRef.value)
    totalElRef.innerHTML = "Total " + (num * 0.05 + num) + "₮"
})

button10P.addEventListener("click", function () {
    const num = Number(inputElRef.value)
    totalElRef.innerHTML = "Total " + (num * 0.1 + num) + "₮"

})

button15P.addEventListener("click", function () {
    const num = Number(inputElRef.value)
    totalElRef.innerHTML = "Total " + (num * 0.15 + num) + "₮"

})

button25P.addEventListener("click", function () {
    const num = Number(inputElRef.value)
    totalElRef.innerHTML = "Total " + (num * 0.25 + num) + "₮"

})

button35P.addEventListener("click", function () {
    const num = Number(inputElRef.value)
    totalElRef.innerHTML = "Total " + (num * 0.35 + num) + "₮"
})

button50P.addEventListener("click", function () {
    const num = Number(inputElRef.value)
    totalElRef.innerHTML = "Total " + (num * 0.5 + num) + "₮"

})

button65P.addEventListener("click", function () {
    const num = Number(inputElRef.value)
    totalElRef.innerHTML = "Total " + (num * 0.65 + num) + "₮"

})

button80P.addEventListener("click", function () {
    const num = Number(inputElRef.value)
    totalElRef.innerHTML = "Total " + (num * 0.8 + num) + "₮"

})

const resetButRef = document.getElementById("reset");
resetButRef.addEventListener("click", function () {
    totalElRef.innerHTML = "Total 0.00 ₮"
    inputElRef.value = "0"
})