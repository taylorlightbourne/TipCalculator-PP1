//Suggested Tip

function tipCalc(){
    const billAmount = document.querySelector("#cost").value;
    
    const billAmountNumber = parseFloat(billAmount);
    
    const totalAmountTen = (0.10 * billAmountNumber);
    const totalAmountFifteen = (0.15 * billAmountNumber);
    const totalAmountEighteen = (0.18 * billAmountNumber);
    const totalAmountTwenty = (0.20 * billAmountNumber);
    
    const tipTotalTen = document.querySelector(".ten-tip");
    tipTotalTen.innerHTML = "A 10% tip would be $" + (totalAmountTen).toFixed(2);
    
    const billTotalTen = document.querySelector(".ten-total");
    billTotalTen.innerHTML = "Total Bill: $" + (totalAmountTen + billAmountNumber);

    const tipTotalFifteen = document.querySelector(".fifteen-tip");
    tipTotalFifteen.innerHTML = "A 15% tip would be $" + (totalAmountFifteen).toFixed(2);

    const billTotalFifteen = document.querySelector(".fifteen-total");
    billTotalFifteen.innerHTML = "Total Bill: $" + (totalAmountFifteen + billAmountNumber);

    const tipTotalEighteen = document.querySelector(".eighteen-tip");
    tipTotalEighteen.innerHTML = "A 18% tip would be $" + (totalAmountEighteen).toFixed(2);

    const billTotalEighteen = document.querySelector(".eighteen-total");
    billTotalEighteen.innerHTML = "Total Bill: $" + (totalAmountEighteen + billAmountNumber);

    const tipTotalTwenty = document.querySelector(".twenty-tip");
    tipTotalTwenty.innerHTML = "A 20% tip would be $" + (totalAmountTwenty).toFixed(2);

    const billTotalTwenty = document.querySelector(".twenty-total");
    billTotalTwenty.innerHTML = "Total Bill: $" + (totalAmountTwenty + billAmountNumber);
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
        
        
        const input = document.getElementById("cost");
        input.addEventListener("keyup", function(event) {
          if (event.keyCode === 13) {
           event.preventDefault();
           document.getElementById("calculateBtn").click();
          }
        });
        