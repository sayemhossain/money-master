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
  const income = parseFloat(incomeInput.value);
  const balance = income - totalExpense;

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

  const incomeInput = document.getElementById("income-feild");
  const income = parseFloat(incomeInput.value);
  const saveValue = (income * parseFloat(savePersentage)) / 100;
  document.getElementById("saving-amount").innerText = saveValue;
  const totalExpense = getTotalExpense();
  const balance = getBalance(totalExpense);
  const remainingBalance = balance - saveValue;
  document.getElementById("remaining-balance").innerText = remainingBalance;
});
