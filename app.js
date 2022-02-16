// this is for total expense
function getTotalExpense() {
  const foodExpenseInput = document.getElementById("food-feild");
  const foodExpense = foodExpenseInput.value;
  const rentExpenseInput = document.getElementById("rent-feild");
  const rentExpense = rentExpenseInput.value;
  const clotheExpenseInput = document.getElementById("clothes-feild");
  const clotheExpense = clotheExpenseInput.value;

  if (foodExpense < 0 || rentExpense < 0 || clotheExpense < 0) {
    return 1;
  } else if (isNaN(foodExpense) || isNaN(rentExpense) || isNaN(clotheExpense)) {
    return 2;
  } else {
    const totalExpense =
      parseFloat(foodExpense) +
      parseFloat(rentExpense) +
      parseFloat(clotheExpense);
    console.log(totalExpense);
    return totalExpense;
  }
}

// this is for calculate all value
document.getElementById("cal-btn").addEventListener("click", function () {
  // this is for total expense
  const totalExpense = getTotalExpense();
  if (totalExpense == 1) {
    document.getElementById("error").innerText =
      "Please enter positive number!";
    document.getElementById("total-expenses").innerText = 0;
  } else if (totalExpense == 2) {
    document.getElementById("error").innerText = "Please enter only number!";
    document.getElementById("total-expenses").innerText = 0;
  } else {
    document.getElementById("total-expenses").innerText = totalExpense;
    document.getElementById("error").innerText = "";
  }
  //   this is for balance
  const balance = getBalance(totalExpense);
  if (balance == -1) {
    document.getElementById("error").innerText =
      "Please enter valid number! Negative value isn't allowed.";
    document.getElementById("balance").innerText = "";
  } else if (balance == -2) {
    document.getElementById("error").innerText = "Please enter only number!";
    document.getElementById("balance").innerText = "";
  } else if (balance == -3) {
    document.getElementById("error").innerText = "You don't have enough money!";
    document.getElementById("balance").innerText = "";
  } else {
    document.getElementById("balance").innerText = balance;
    document.getElementById("error").innerText = "";
  }
});

// this is for total balance
function getBalance(totalExpense) {
  const incomeInput = document.getElementById("income-feild");
  const income = incomeInput.value;
  console.log(income);
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

//adding save parsentages
document.getElementById("save-btn").addEventListener("click", function () {
  //   this  save Persentage code
  const saveInput = document.getElementById("save-feild");
  const savePersentage = parseFloat(saveInput.value);
  const incomeInput = document.getElementById("income-feild");
  const income = parseFloat(incomeInput.value);

  if (typeof savePersentage != "number" || savePersentage < 0) {
    //   checking valid input
    console.log("something wrong in save input");
  } else {
    const saveAmount = (income * savePersentage) / 100;
    document.getElementById("saving-amount").innerText = saveAmount;

    //this remaining balance code
    const totalExpense = getTotalExpense();
    const balance = getBalance(totalExpense);

    if (saveAmount > balance) {
      // validation
      console.log("Not enough money to save");
    } else {
      const remainingBalance = balance - saveAmount;
      document.getElementById("remaining-balance").innerText = remainingBalance;
    }
  }
});
// function errorHandelar(message) {
//   document.getElementById("error").innerText = message;
// }
