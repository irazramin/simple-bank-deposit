// bank
const depositInput = document.getElementById('deposit-input');
const withdrawInput = document.getElementById('withdraw-input');
const depositBtn = document.getElementById('deposit-btn');
const withdrawBtn = document.getElementById('withdraw-btn');
const totalWithdrawText = document.getElementById('total-withdraw');
const totalDepositText = document.getElementById('total-deposit');
const totalMoneyText = document.getElementById('total-money');

// get input from user and convert value
function getInputFromAndConvert(inputValue) {
  const amountText = inputValue.value;
  const convertAmountTextToFloat = parseFloat(amountText);
  inputValue.value = ' ';
  return convertAmountTextToFloat;
}


// set amount to field
function setAmountToField(amount, totalAmountField) {
  //  amount = deposit / withdraw / ......n
  // totalAmountField = over all total money field
  const convertTotalFieldAmount = parseFloat(totalAmountField.innerText);
  let totalAmount = convertTotalFieldAmount + amount;
  totalAmountField.innerText = totalAmount;
}

// calculate total amount
function calculateTotalMoney(inputFieldValue,totalMoneyField,isAdd){
  // inputFieldValue  = deposit / withdraw / ......n
  if(isAdd){
    let convertTotalMoneyText = parseFloat(totalMoneyField.innerText);
    const calculateTotalMoney = convertTotalMoneyText + inputFieldValue;
    totalMoneyField.innerText = calculateTotalMoney;
  }else{
    let convertTotalMoneyText = parseFloat(totalMoneyField.innerText);
    const calculateTotalMoney = convertTotalMoneyText - inputFieldValue;
    totalMoneyField.innerText = calculateTotalMoney;
  }
}


// deposit
depositBtn.addEventListener('click', function () {
  // //get value from user
  const convertDepositInputValue = getInputFromAndConvert(depositInput);

  // set amount to field
  setAmountToField(convertDepositInputValue, totalDepositText);

  // calculate total amount
  calculateTotalMoney(convertDepositInputValue, totalMoneyText, true);
});

// withdraw
withdrawBtn.addEventListener('click', function () {
  // get value from user
  const convertWithdrawInputValue = getInputFromAndConvert(withdrawInput);

  //set amount to field
  setAmountToField(convertWithdrawInputValue, totalWithdrawText);

  // calculate total amount
  calculateTotalMoney(convertWithdrawInputValue, totalMoneyText,false);
});
