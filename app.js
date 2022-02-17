// this is the function for total expenses
function getTotalExpense() {
  const foodExpenseInput = document.getElementById("food-feild");
  const foodExpense = foodExpenseInput.value;
  const rentExpenseInput = document.getElementById("rent-feild");
  const rentExpense = rentExpenseInput.value;
  const clotheExpenseInput = document.getElementById("clothes-feild");
  const clotheExpense = clotheExpenseInput.value;

  if (foodExpense < 0 || rentExpense < 0 || clotheExpense < 0) {
    // checking validation for negative value
    return 1;
  } else if (isNaN(foodExpense) || isNaN(rentExpense) || isNaN(clotheExpense)) {
    // checking validation for number input
    return 2;
  } else {
    // here I return total expenses
    const totalExpense =
      parseFloat(foodExpense) +
      parseFloat(rentExpense) +
      parseFloat(clotheExpense);
    return totalExpense;
  }
}

// this is for calculate income and expenses value
document.getElementById("cal-btn").addEventListener("click", function () {
  // this is for total expense
  const totalExpense = getTotalExpense();
  if (totalExpense == 1) {
    document.getElementById("error").innerText =
      "Please enter positive number...!";
    document.getElementById("total-expenses").innerText = 0;
  } else if (totalExpense == 2) {
    document.getElementById("error").innerText = "Please enter only number...!";
    document.getElementById("total-expenses").innerText = 0;
  } else {
    document.getElementById("total-expenses").innerText = totalExpense;
    document.getElementById("error").innerText = "";
  }
  // this is for balance
  const balance = getBalance(totalExpense);
  if (balance == -1) {
    document.getElementById("error").innerText =
      "Please enter positive number...!";
    document.getElementById("balance").innerText = 0;
  } else if (balance == -2) {
    document.getElementById("error").innerText = "Please enter only number...!";
    document.getElementById("balance").innerText = 0;
  } else if (balance == -3) {
    document.getElementById("error").innerText =
      "You don't have enough money...!";
    document.getElementById("balance").innerText = 0;
  } else {
    document.getElementById("balance").innerText = balance;
  }
});

// this is the function for total balance
function getBalance(totalExpense) {
  const incomeInput = document.getElementById("income-feild");
  const income = incomeInput.value;
  if (income < 0) {
    return -1;
  } else if (isNaN(income)) {
    return -2;
  } else if (income < totalExpense) {
    return -3;
  } else {
    const balance = parseFloat(income) - totalExpense;
    return balance;
  }
}

// adding saveing parsentages
document.getElementById("save-btn").addEventListener("click", function () {
  //  this is for save Persentage
  const saveInput = document.getElementById("save-feild");
  const savePersentage = saveInput.value;
  const incomeInput = document.getElementById("income-feild");
  const income = parseFloat(incomeInput.value);

  if (isNaN(savePersentage)) {
    // checking valid input
    document.getElementById("saveing-error").innerText =
      "Please enter only number...!";
  } else if (savePersentage < 0) {
    document.getElementById("saveing-error").innerText =
      "Please enter positive number...!";
  } else {
    const saveAmount = (income * parseFloat(savePersentage)) / 100;
    document.getElementById("saving-amount").innerText = saveAmount;

    // this remaining balance code
    const totalExpense = getTotalExpense();
    const balance = getBalance(totalExpense);

    if (saveAmount > balance) {
      document.getElementById("saveing-error").innerText =
        "You want to save " +
        savePersentage +
        "% but not enough money in your account...!";
      document.getElementById("remaining-balance").innerText = 0;
    } else {
      const remainingBalance = balance - saveAmount;
      document.getElementById("remaining-balance").innerText = remainingBalance;
      document.getElementById("saveing-error").innerText = "";
    }
  }
});
