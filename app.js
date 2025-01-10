// 2 variables for the display and buttons section from the HTML
let display = document.querySelector('.Display');
let buttons = document.querySelectorAll('button');

// 5 variables one for the current Input then for first, second and finally the operator
let currentInput = "";    // variable with empty string to wait for the currentInput
let equation = "";        // variable with empty string to have it where you can do a whole equation like 5+5+5.. continously
let firstOperand = "";    // variable with empty string to have you select your first number
let secondOperand = "";   // variable with empty string to have you select your second number
let operator = "";        // variable for the operator (/,x,-,+,%)
let maxLength = 6;

buttons.forEach((button) => {           // for each button run the below function 
    button.addEventListener("click", () => {  // adding event listener to listen for clicks on a button
        const value = button.textContent;  // variable value for the buttons text stores to value

        if((value >= "0" && value <= "9" || value === ".") && currentInput.length < maxLength){   // if the value is a number or decimal point run this
            currentInput += value;      // the currentInput will change while calling value which is the button text
            equation += value;          // the continued equation will change when calling value
            
            display.textContent = equation;     // the display will reconfigure and display for the equation length
            
        } else if (value === "AC"){     // if the value is equal to "AC" (clear) run this
            currentInput = "";          // current input is back to empty string to reset it
            equation = "";              // equation is back to empty string to reset it
            display.textContent = "0";  // the display will have text of 0 when cleared
            firstOperand = "";        // the first operand will be cleared
            secondOperand = "";       // the second operand will be cleared
            operator = "";            // the operator will be cleared

        } else if (value === "="){      // if the value selected is (=) then run this
            if (firstOperand && operator) { // if first number and operator have been inputted then run this
                secondOperand = parseFloat(currentInput);   // second number can now be in the currentInput
                let result;         // created variable result

                if(operator === "+"){               // if operator is + then run this
                    result = firstOperand + secondOperand;  // result is equal to the first number + the second number
                } else if(operator === "-"){
                    result = firstOperand - secondOperand;
                } else if(operator === "x"){
                    result = firstOperand * secondOperand;
                } else if(operator === "/"){
                    result = firstOperand / secondOperand;
                } else if(operator === "%"){
                    result = firstOperand *  (secondOperand / 100);
                } else {                // else if the result is not first number then result in error
                    result = "Error";
                }

                // shows the results
                display.textContent = result;

            }
        } else {
            // Handle operator input specifically for continued equation like 5x5x5 = 125
            if (currentInput) {        // if currentInput is true
                if (firstOperand) {         // if there is a first number inputted
                    // If there is already a first operand, calculate intermediate result
                    secondOperand = parseFloat(currentInput);   // second number can now be entered if first number is entered
                    if (operator === "+") {     // if operator is + then...
                        firstOperand = firstOperand + secondOperand;    // first number assigned to first number + second, for continued equation after like 5x5x5
                    } else if (operator === "-") {
                        firstOperand = firstOperand - secondOperand;
                    } else if (operator === "x") {
                        firstOperand = firstOperand * secondOperand;
                    } else if (operator === "/") {
                        firstOperand = firstOperand / secondOperand;
                    } else if (operator === "%") {
                        firstOperand = firstOperand * (secondOperand / 100);
                    }
                } else {
                    // If no first operand, set it
                    firstOperand = parseFloat(currentInput);
                }

                operator = value;       // Set the operator
                equation += value;      // Update the equation
                currentInput = "";      // Reset current input for the next number
                display.textContent = equation; // Display full equation
            }
        }
    });
});

let toggleBtn = document.querySelector('.toggleBtn');
let mainContainer = document.querySelector('.mainContainer');
let calculator = document.querySelector('.calcContainer');

toggleBtn.addEventListener("click", () => {

    mainContainer.classList.toggle('toggleChange');
    toggleBtn.classList.toggle('toggleBtnChange');
    calculator.classList.toggle('toggleCalcBackgroundChange');
    display.classList.toggle('toggleDisplayChange');
    if(toggleBtn.textContent === "Dark Mode"){
        toggleBtn.textContent = "Light Mode";
    }
    else{
        toggleBtn.textContent = "Dark Mode"
    }
});




