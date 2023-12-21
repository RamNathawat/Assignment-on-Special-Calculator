// Progression 1: Create special addition

function specialAddition(num1, num2) {
    if (num1 < 0 || num2 < 0) {
      return 'Negative numbers are not allowed';
    }
    return num1 + num2;
  }


// Progression 2: Create simple division
function simpleDivision(numberOne, numberTwo) {
    if (numberTwo === 0) {
      return 'Not a number';
    }
    if (numberTwo > numberOne) {
      return 'Cannot divide a smaller number by a larger number';
    }
    if (numberOne < 0 || numberTwo < 0) {
      return 'Negative numbers are not allowed';
    }
    return numberOne / numberTwo;
  }  

// Progression 3: Create the special calculator

function specialCalculator(numberOne, numberTwo, operation) {
    return operation(numberOne, numberTwo);
  }

