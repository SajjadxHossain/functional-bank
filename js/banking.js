function getInputValue(){
    const depositInput = document.getElementById('deposit-input');
    const depositAmount = depositInput.value;
    
     // clear input field
     depositInput.value = '';

     return depositAmount;
}



    document.getElementById('deposit-button').addEventListener('click', function(){

    /* const depositInput = document.getElementById('deposit-input');
    const depositAmount = depositInput.value; */
    const depositAmount = getInputValue();
    
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
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmount = withdrawInput.value;

    // update withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalAmout = withdrawTotal.innerText;
    withdrawTotal.innerText = parseFloat(withdrawAmount) + parseFloat(withdrawTotalAmout);




    // update balance
    const totalBalance = document.getElementById('balance-total');
    const totalBalanceText = totalBalance.innerText;
    totalBalance.innerText = parseFloat(totalBalanceText) - parseFloat(withdrawAmount);

    // clear withdraw input field
    withdrawInput.value = '';

})