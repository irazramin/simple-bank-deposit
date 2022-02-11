// bank
const depositInput = document.getElementById('deposit-input');
const withdrawInput = document.getElementById('withdraw-input');
const depositBtn = document.getElementById('deposit-btn');
const withdrawBtn = document.getElementById('withdraw-btn');
const totalWithdrawText = document.getElementById('total-withdraw');
const totalDepositText = document.getElementById('total-deposit');
const totalMoneyText = document.getElementById('total-money');
// deposit
depositBtn.addEventListener('click', function () {
  //get value from user
  const depositAmountText = depositInput.value;
  // current money from deposit
  const convertDepositTextToFloat = parseFloat(depositAmountText);

  // previous + current
  let totalAmount = parseFloat(totalDepositText.innerText) + convertDepositTextToFloat;
  totalDepositText.innerText = totalAmount;

  // previous total amount
  const prevAmount = parseFloat(totalMoneyText.innerText);
  totalMoneyText.innerText = convertDepositTextToFloat + prevAmount;

  depositInput.value = '';
});

// withdraw
withdrawBtn.addEventListener('click', function () {
  //get value from user
  const depositWithdrawAmountText = withdrawInput.value;
  // current money from depositWithdraw
  const convertWithdrawTextToFloat = parseFloat(depositWithdrawAmountText);
  
  // previous total amount
  
  // previous + current
  let totalAmount =
  parseFloat(totalWithdrawText.innerText) + convertWithdrawTextToFloat;
  totalWithdrawText.innerText = totalAmount;
  
  let prevAmount = parseFloat(totalMoneyText.innerText);
  totalMoneyText.innerText = prevAmount - convertWithdrawTextToFloat;

  withdrawInput.value = '';
});
