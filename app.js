function getTotalExpense() {
  const foodExpenseInput = document.getElementById("food-feild");
  const foodExpense = foodExpenseInput.value;
  const rentExpenseInput = document.getElementById("rent-feild");
  const rentExpense = rentExpenseInput.value;
  const clotheExpenseInput = document.getElementById("clothes-feild");
  const clotheExpense = clotheExpenseInput.value;
  const totalExpense =
    parseFloat(foodExpense) +
    parseFloat(rentExpense) +
    parseFloat(clotheExpense);
  return totalExpense;
}
function getBalance(totalExpense) {
  const incomeInput = document.getElementById("income-feild");
  const income = incomeInput.value;
  const balance = parseFloat(income) - totalExpense;
  console.log("Balance in get balanse: " + balance);

  return balance;
}
document.getElementById("cal-btn").addEventListener("click", function () {
  const totalExpense = getTotalExpense();
  const balance = getBalance(totalExpense);
  document.getElementById("total-expenses").innerText = totalExpense;
  document.getElementById("balance").innerText = balance;
});

document.getElementById("save-btn").addEventListener("click", function () {
  const saveInput = document.getElementById("save-feild");
  const savePersentage = saveInput.value;
  const totalExpense = getTotalExpense();
  console.log("total expense: " + totalExpense);
  const saveValue = totalExpense / parseFloat(savePersentage);
  document.getElementById("saving-amount").innerText = saveValue;
  const balance = getBalance(totalExpense);
  console.log("Balance: " + balance);
  const remainingBalance = balance - saveValue;
  document.getElementById("remaining-balance").innerText = remainingBalance;
});
