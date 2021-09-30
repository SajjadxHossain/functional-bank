function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const amountValue = inputField.value;
    
     // clear input field
     inputField.value = '';

     return amountValue;
}



    document.getElementById('deposit-button').addEventListener('click', function(){

    /* const depositInput = document.getElementById('deposit-input');
    const depositAmount = depositInput.value; */
    const depositAmount = getInputValue('deposit-input');
    
    // get current deposite
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    depositTotal.innerText =parseFloat(depositTotalText)  + parseFloat(depositAmount) ;

    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;

    balanceTotal.innerText = parseFloat(balanceTotalText) + parseFloat(depositAmount);
   
});

// handle withdraw button
document.getElementById('withdraw-button').addEventListener('click', function(){
    /* const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmount = withdrawInput.value; */
    const withdrawAmount = getInputValue('withdraw-input');

    // update withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalAmout = withdrawTotal.innerText;
    withdrawTotal.innerText = parseFloat(withdrawAmount) + parseFloat(withdrawTotalAmout);




    // update balance
    const totalBalance = document.getElementById('balance-total');
    const totalBalanceText = totalBalance.innerText;
    totalBalance.innerText = parseFloat(totalBalanceText) - parseFloat(withdrawAmount);

})