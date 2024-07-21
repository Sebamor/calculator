const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');
const adder = document.getElementById('plus');
const subtracter = document.getElementById('minus');
const divider = document.getElementById('divide');
const multiplier = document.getElementById('multiply');
const equals = document.getElementById('equals');
const decimal = document.getElementById('decimal');
const present = document.getElementById('present');


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let firstNum;
let secondNum;
let operators;
let endValue;

zero.addEventListener('click', () => {
	if (operators === undefined) {
        if (firstNum === undefined) {
            firstNum = '0';
            present.innerHTML = firstNum;
        } else {
            firstNum += '0';
            present.innerHTML = firstNum;
        }
    } else {
        if (secondNum === undefined) {
            secondNum = '0';
            present.innerHTML = firstNum + operators + secondNum;
        } else {
            secondNum += '0';
            present.innerHTML = firstNum + operators + secondNum;
        }
    }
})

one.addEventListener('click', () => {
	if (operators === undefined) {
        if (firstNum === undefined) {
            firstNum = '1';
            present.innerHTML = firstNum;
        } else {
            firstNum += '1';
            present.innerHTML = firstNum;
        }
    } else {
        if (secondNum === undefined) {
            secondNum = '1';
            present.innerHTML = firstNum + operators + secondNum;
        } else {
            secondNum += '1';
            present.innerHTML = firstNum + operators + secondNum;
        }
    }
})


two.addEventListener('click', () => {
	if (operators === undefined) {
        if (firstNum === undefined) {
            firstNum = '2';
            present.innerHTML = firstNum;
        } else {
            firstNum += '2';
            present.innerHTML = firstNum;
        }
    } else {
        if (secondNum === undefined) {
            secondNum = '2';
            present.innerHTML = firstNum + operators + secondNum;
        } else {
            secondNum += '2';
            present.innerHTML = firstNum + operators + secondNum;
        }
    }
})

three.addEventListener('click', () => {
    if (operators === undefined) {
        if (firstNum === undefined) {
            firstNum = '3';
            present.innerHTML = firstNum;
        } else {
            firstNum += '3';
            present.innerHTML = firstNum;
        }
    } else {
        if (secondNum === undefined) {
            secondNum = '3';
            present.innerHTML = firstNum + operators + secondNum;
        } else {
            secondNum += '3';
            present.innerHTML = firstNum + operators + secondNum;
        }
    }
})

four.addEventListener('click', () => {
	if (operators === undefined) {
        if (firstNum === undefined) {
            firstNum = '4';
            present.innerHTML = firstNum;
        } else {
            firstNum += '4';
            present.innerHTML = firstNum;
        }
    } else {
        if (secondNum === undefined) {
            secondNum = '4';
            present.innerHTML = firstNum + operators + secondNum;
        } else {
            secondNum += '4';
            present.innerHTML = firstNum + operators + secondNum;
        }
    }
})

five.addEventListener('click', () => {
	if (operators === undefined) {
        if (firstNum === undefined) {
            firstNum = '5';
            present.innerHTML = firstNum;
        } else {
            firstNum += '5';
            present.innerHTML = firstNum;
        }
    } else {
        if (secondNum === undefined) {
            secondNum = '5';
            present.innerHTML = firstNum + operators + secondNum;
        } else {
            secondNum += '5';
            present.innerHTML = firstNum + operators + secondNum;
        }
    }
})

six.addEventListener('click', () => {
	if (operators === undefined) {
        if (firstNum === undefined) {
            firstNum = '6';
            present.innerHTML = firstNum;
        } else {
            firstNum += '6';
            present.innerHTML = firstNum;
        }
    } else {
        if (secondNum === undefined) {
            secondNum = '6';
            present.innerHTML = firstNum + operators + secondNum;
        } else {
            secondNum += '6';
            present.innerHTML = firstNum + operators + secondNum;
        }
    }
})

seven.addEventListener('click', () => {
	if (operators === undefined) {
        if (firstNum === undefined) {
            firstNum = '7';
            present.innerHTML = firstNum;
        } else {
            firstNum += '7';
            present.innerHTML = firstNum;
        }
    } else {
        if (secondNum === undefined) {
            secondNum = '7';
            present.innerHTML = firstNum + operators + secondNum;
        } else {
            secondNum += '7';
            present.innerHTML = firstNum + operators + secondNum;
        }
    }
})

eight.addEventListener('click', () => {
	if (operators === undefined) {
        if (firstNum === undefined) {
            firstNum = '8';
            present.innerHTML = firstNum;
        } else {
            firstNum += '8';
            present.innerHTML = firstNum;
        }
    } else {
        if (secondNum === undefined) {
            secondNum = '8';
            present.innerHTML = firstNum + operators + secondNum;
        } else {
            secondNum += '8';
            present.innerHTML = firstNum + operators + secondNum;
        }
    }
})

nine.addEventListener('click', () => {
	if (operators === undefined) {
        if (firstNum === undefined) {
            firstNum = '9';
            present.innerHTML = firstNum;
        } else {
            firstNum += '9';
            present.innerHTML = firstNum;
        }
    } else {
        if (secondNum === undefined) {
            secondNum = '9';
            present.innerHTML = firstNum + operators + secondNum;
        } else {
            secondNum += '9';
            present.innerHTML = firstNum + operators + secondNum;
        }
    }
})

decimal.addEventListener('click', () => {
	if (operators === undefined) {
        if (firstNum === undefined) {
            firstNum = '0.';
            present.innerHTML = firstNum;
        } else if (!firstNum.includes('.')){
            firstNum += '.';
            present.innerHTML = firstNum;
        }
    } else {
        if (secondNum === undefined) {
            secondNum = '.';
            present.innerHTML = firstNum + operators + secondNum;
        } else if (!secondNum.includes('.')) {
            secondNum += '.';
            present.innerHTML = firstNum + operators + secondNum;
        }
    }
})

adder.addEventListener('click', () => {
	operators = '+';
    present.innerHTML = firstNum + operators;
})

subtracter.addEventListener('click', () => {
	operators = '-';
    present.innerHTML = firstNum + operators;
})

multiplier.addEventListener('click', () => {
	operators = 'x';
    present.innerHTML = firstNum + operators;
})

divider.addEventListener('click', () => {
	operators = '/';
    present.innerHTML = firstNum + operators;
})

equals.addEventListener('click', () => {
	if (operators === "+") {
        endValue = add(parseFloat(firstNum), parseFloat(secondNum));
        present.innerHTML = endValue;
    }
    else if (operators === '-') {
        endValue = subtract(parseFloat(firstNum), parseFloat(secondNum));
        present.innerHTML = endValue;
    }
    else if (operators === 'x') {
        endValue = multiply(parseFloat(firstNum), parseFloat(secondNum));
        present.innerHTML = endValue;
    }
    else if (operators === '/') {
        endValue = divide(parseFloat(firstNum), parseFloat(secondNum));
        present.innerHTML = endValue;
    }

    firstNum = undefined;
    secondNum = undefined;
    operators = undefined;
})

// TODO Fix operators starting undefined when clicked with no firstNum
// TODO Add clear button
// TODO Add equals turning final number into firstNum to then continue operations on number
