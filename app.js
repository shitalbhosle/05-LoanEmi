const amount = document.getElementById('amount');
const interest = document.getElementById('interest');
const time = document.getElementById('time');

const emi = document.getElementById('emi');
const principle = document.getElementById('principle');
const rate = document.getElementById('rate');
const total = document.getElementById('total');
const btn = document.getElementById('btn');

const calculateEMI = (amountValue, interestValue, timeValue) =>{
    let inter = ((interestValue/12)/100);
    let tenureReal = timeValue*12;
    return ((amountValue * inter * ((1 + inter) ** tenureReal)) / ((1 + inter) ** tenureReal -1));
    
}

const totalInterest = (monthlyemi, timeValue, amountValue) =>{
    return (monthlyemi * (timeValue * 12)) - amountValue;
}

const totalAmount = (amountValue, totalInterest) =>{
    return  (amountValue + totalInterest);
}
btn.addEventListener('click', function(){
    let amountValue = parseInt(amount.value);
    let interestValue = parseInt(interest.value);
    let timeValue = parseInt(time.value);
    
    let monthlyemi = calculateEMI(amountValue, interestValue, timeValue);
    emi.innerText = monthlyemi.toFixed(2);
    
    principle.innerText = amountValue;
    let totolRate = totalInterest(monthlyemi, timeValue, amountValue);
    rate.innerText = totolRate.toFixed(2);

    let totals = totalAmount(amountValue, totolRate);
    total.innerText = totals.toFixed(2); 
    
})