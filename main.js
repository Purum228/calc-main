const firstMoney = document.getElementById('income-salary'),
    secondMoney = document.getElementById('income-freelance'),
    thirdMoney = document.getElementById('income-extra-1'),
    fourthMoney = document.getElementById('income-extra-2'),
    firstCosts = document.getElementById('income-flat'),
    secondCosts = document.getElementById('income-house-services'),
    thirdCosts = document.getElementById('income-transport'),
    fourthCosts = document.getElementById('income-credit'),
    totalMonthInput = document.getElementById('total-month')

let totalDay, totalMonth, totalYear;

const moneyBoxRange = document.getElementById('money-box-range')
      accumulationInput = document.getElementById('accumulation')
      totalSpend = document.getElementById('spend')

let accumulation = 0
let totalPersent = 0

const inputs = document.querySelectorAll('.input')

for (input of inputs) {
    input.addEventListener('input', () =>{
        countingAvailibleMoney()    
    })
}

const countingAvailibleMoney = () =>{
    const totalPerMonth = firstMoney.value*1 + secondMoney.value*1+ thirdMoney.value*1 +fourthMoney.value*1
    totalMonthInput.value = totalPerMonth

}
