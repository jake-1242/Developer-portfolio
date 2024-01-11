

const form = document.getElementById("calculator")

 

form.onsubmit=function(event){
    event.preventDefault()

// input
let cost = document.getElementById("totalBeforeTip")
let whatTip = document.getElementById("tipPercentage")
let noPeople = document.getElementById('numberToSplit')

let preTipTotal =parseFloat(cost.value)
let tipPercentage =parseFloat(whatTip.value)

// output
let totalBill = document.getElementById('total-bill')

let totalValue=tipCalculator(preTipTotal,tipPercentage)
totalBill.value=totalValue

}


function tipCalculator(total,percentage){
    let preTipAmount=(total/100) * percentage;
    let tipAmount=preTipAmount.toFixed(2);
    let totalWithTip=preTipAmount;
    totalWithTip += total;
    let grandTotal = totalWithTip.toFixed(2)
    return `Your tip is £${tipAmount}, which added to your bill comes to a grand total of £${grandTotal}`   
  }
  