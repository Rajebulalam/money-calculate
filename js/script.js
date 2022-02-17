// Input Value Taken
function getInput(inputId){
    const input = document.getElementById(inputId);
    const inputText = input.value;
    const inputFloat = parseFloat(inputText);
    const inputValue = inputFloat;
    input.value = '';
    return inputValue;
}

// Income Input Without Clearing Value
function getIncomeInput(inputId){
    const input = document.getElementById(inputId);
    const inputText = input.value;
    const inputFloat = parseFloat(inputText);
    const inputValue = inputFloat;
    return inputValue;
}

// Calculate Total Expenses
function getTotalExpenses(foodInputValue, rentInputValue, clothInputValue){
    const totalExpenses = foodInputValue + rentInputValue + clothInputValue;
    return totalExpenses; 
}

// Calculate Total Balance
function getBalance(incomeInputValue, totalExpenses){
    const totalBalance = incomeInputValue - totalExpenses;
    return totalBalance;
}

// Calculate Button Event Handler
document.getElementById('calculate-btn').addEventListener('click', function(){

    // Income Value
    const incomeInputValue = getIncomeInput('income-input');

    // Food Value
    const foodInputValue = getInput('food-input');

    // Rent Value
    const rentInputValue = getInput('rent-input');

    // Cloth Input
    const clothInputValue = getInput('cloth-input');

    // Total Expenses
    const totalExpenses = getTotalExpenses(foodInputValue, rentInputValue, clothInputValue);

    // Total Balance
    const totalBalance = getBalance(incomeInputValue, totalExpenses);

    if(incomeInputValue > 0 && foodInputValue > 0 && rentInputValue > 0 && clothInputValue > 0){
        if(incomeInputValue > totalExpenses){
            // Display Expenses
            document.getElementById('total-expense').innerText = totalExpenses;
            // Display Balance
            document.getElementById('total-balance').innerText = totalBalance; 
        }
        else{
            alert("Expenses Can't Be More From Income");
        }
    }else if(incomeInputValue < 0 || foodInputValue < 0 || rentInputValue < 0 || clothInputValue < 0){
        alert("Input Value can't Be Negative");
    }else if(typeof incomeInputValue != 'string' || typeof foodInputValue != 'string' || typeof rentInputValue != 'string' || typeof clothInputValue != 'string'){
        alert('Please!! Give only Positive Number');
    }
})

// Save Button Event Handler
document.getElementById('save-btn').addEventListener('click', function(){

    // Saving Value
    const savingInputValue = getInput('percentage-input');

    // Income Value
    const incomeInputValue = getIncomeInput('income-input');

    // Calculate Percentage
    const calculatePecentage = incomeInputValue * ( savingInputValue / 100);

    // Total Balance
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceText = totalBalance.innerText;
    const totalBalanceFloat = parseFloat(totalBalanceText);
    const totalBalanceAmount = totalBalanceFloat;

    // Calculate Remaining Balance
    const remainingBalance = totalBalanceAmount - calculatePecentage;

    if(calculatePecentage < totalBalanceAmount){
        if(savingInputValue > 0){
            document.getElementById('saving-amount').innerText = calculatePecentage;
            document.getElementById('remaining-balance').innerText = remainingBalance;
        }else if(savingInputValue < 0){
            alert('Please!! Give Posititve Number');
        }
    }else{
        alert("Sory!! You Doesn't Have Enough Money To Saving")
    }
})