// function newFunction(num) {
//     return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
// }

function tipCalc(){
const billCost = document.querySelector("#cost").value
const billCostConverted = parseInt(billCost)
const tipAmount = document.querySelector("#tip").value
const tipAmountConverted = parseInt(tipAmount)
const tipTotal = billCostConverted * (tipAmountConverted / 100)
const amountPaid = billCostConverted + tipTotal
const convertedAmountPaid = newFunction(amountPaid)

const displayTip = document.querySelector(".tipAmount")
displayTip.innerText = tipTotal

const displayTotal = document.querySelector(".total")
displayTotal.innerText = convertedAmountPaid

const grabList = document.querySelector(".prev-bill")
const listItem = document.createElement("li")
listItem.innerText = amountPaid
grabList.append(listItem)

}

const calcBtn = document.querySelector("#calculateBtn")
function alertMe(){
alert("ERROR!")
}

function changeButtonColor(){

let color = Math.floor(Math.random() * 16777215).toString(16)

calcBtn.style.backgroundColor = `#${color}`
}

calcBtn.addEventListener('click', function(e){
tipCalc()
changeButtonColor()
})



