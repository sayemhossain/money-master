// this is for total expense
function getTotalExpense() {
  const foodExpenseInput = document.getElementById("food-feild");
  const foodExpense = parseFloat(foodExpenseInput.value);
  const rentExpenseInput = document.getElementById("rent-feild");
  const rentExpense = parseFloat(rentExpenseInput.value);
  const clotheExpenseInput = document.getElementById("clothes-feild");
  const clotheExpense = parseFloat(clotheExpenseInput.value);

  if (
    // validation check
    typeof foodExpense != "number" ||
    typeof rentExpense != "number" ||
    typeof clotheExpense != "number" ||
    foodExpense < 0 ||
    rentExpense < 0 ||
    clotheExpense < 0
  ) {
    return "Something wrong in expense input";
  } else {
    const totalExpense = foodExpense + rentExpense + clotheExpense;
    return totalExpense;
  }
}

// this is for total balance
function getBalance(totalExpense) {
  const incomeInput = document.getElementById("income-feild");
  const income = parseFloat(incomeInput.value);
  if (typeof income != "number" || income < 0) {
    //   validation
    return "something wrong in income input";
  } else {
    if (income < totalExpense) {
      //validation
      return "not avaiable money";
    } else {
      const balance = income - totalExpense;
      return balance;
    }
  }
}

// this is for calculate all value
document.getElementById("cal-btn").addEventListener("click", function () {
  const totalExpense = getTotalExpense();
  const balance = getBalance(totalExpense);

  document.getElementById("total-expenses").innerText = totalExpense;
  document.getElementById("balance").innerText = balance;
});

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
