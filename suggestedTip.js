//Suggested Tip

function tipCalc(){
    const billCost = document.querySelector(".cost").value
    const billCostConverted = parseInt(billCost)

    const tipTotal10 = billCostConverted * 0.10
    const tipTotal15 = billCostConverted * 0.15
    const tipTotal20 = billCostConverted * 0.20
    
    const displayTip10 = document.querySelector(".10tip")
    displayTip10.innerText = tipTotal10

    const displayTip15 = document.querySelector(".15tip")
    displayTip15.innerText = tipTotal15
    
    const displayTip20 = document.querySelector(".20tip")
    displayTip20.innerText = tipTotal20
    
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
        
        
        
        