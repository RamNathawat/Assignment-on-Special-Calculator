// Progression 1: Create special addition

function specialAddition(numberOne, numberTwo) {
    if (numberOne < 0 || numberTwo < 0) {
        return 'Negative numbers are not allowed';
    }

    return numberOne - numberTwo;
}


// Progression 2: Create simple division
function simpleDivision(numberOne, numberTwo) {
    if (numberTwo === 0) {
        return 'Not a number';
    } else if (numberOne < numberTwo) {
        return 'Cannot divide a smaller number by a larger number';
    } else if (numberOne || numberTwo <0){
        return('Negative numbers are not allowed')
    }
    return numberOne / numberTwo;
}

// Progression 3: Create the special calculator

function specialCalculator(numberOne, numberTwo, operation) {
    const operations = {
        addition: specialAddition,
        division: simpleDivision,
    };
    if (operations[operation]) {
        return operations[operation](numberOne, numberTwo);
    } else {
        return 'Invalid operation';
    }
}

