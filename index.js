const form = document.getElementById('calculator')

console.log (form)

form.onsubmit= function (event){
    event.preventDefault()
    

// inputs
    let howMuch = document.getElementById('totalBeforeTip')
    let tipAmount = document.getElementById('tipPercentage')
    let noPeople = document.getElementById('numberToSplit')

// outputs
    let totalBill = document.getElementById('total-bill')
    let totalPercentage = document.getElementById('total-tip')
    let totalPerPerson = document.getElementById('total-per-person')


    let cost = parseFloat(howMuch.value)
    let customers =parseInt(noPeople.value)
    let tip =parseFloat(tipAmount.value)
    let percentage = 0

    if (tipAmount.value !== ''){
        percentage = parseFloat(tipAmount.value)
    }

    
    let percentageAmount =calculatePercentageAmount(cost,tip)
    totalPercentage.value =percentageAmount.toFixed(2)

    let totalValue = calculateTotalValue(cost,percentageAmount)
    totalBill.value = totalValue.toFixed(2)

    let totalPerCustomer = calculatePerCustomer(totalValue,customers)
    totalPerPerson.value=totalPerCustomer.toFixed(2)


    return false

}

function calculatePercentageAmount(cost,tip){
    return ((cost/100)*tip)
}

function calculateTotalValue(cost,percentageAmount){
    return (cost + percentageAmount)
}

function calculatePerCustomer(totalValue,customers){
    return (totalValue /customers)

}

// let totalBeforeTip = (document.getElementById('preTipTotal')).value

// let tipPercentage =(document.getElementById("tipPercentage")).value

// let tipToAdd = (preTipTotal/100)*tipPercentage

// let finalTotal = (preTipTotal + tipToAdd)

// const tipMessage =("Your total bill with tip is £")

// outputTotal = () => {
//     return document.getElementById("total").innerHTML=(`${tipMessage}${finalTotal}`)
// }

//  function resetFunction() {
//     document.getElementById("total").reset();
     
//  }

//  alert("hello world")