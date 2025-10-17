document.addEventListener('DOMContentLoaded', function() {

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
const add = document.getElementById('addition');
const subtract = document.getElementById('subtract');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const percentage = document.getElementById('percentage');
const clear = document.getElementById('clear');
const sign = document.getElementById('sign');
const equal = document.getElementById('equal');
const point = document.getElementById('point');
const display = document.getElementById('display');

function press(number) {
    if (display.innerText === '0') {
        display.innerText = number;
    }
    else {
        display.innerText += number;
    }
}

seven.onclick = function() {
	press('7');

};
eight.onclick = function() {
	press('8');
};
nine.onclick = function() {
	press('9');
};
one.onclick = function() {
	press('1');
};
two.onclick = function() {
	press('2');
};
three.onclick = function() {
	press('3');
};
four.onclick = function() {
	press('4');
};
five.onclick = function() {
	press('5');
};
six.onclick = function() {
	press('6');
};
zero.onclick = function() {
	press('0');
};
add.onclick = function() {
    press('+');
}
subtract.onclick = function() {
    press('-');

}
multiply.onclick = function() {
    press('×');
}
divide.onclick = function() {
    press('÷');
}
clear.onclick = function() {
    display.innerText = '';
}
point.onclick = function() {
    press('.');
}
percentage.onclick = function() {
    press('%');
}
equal.onclick = function() {
	display.innerText = eval(display.innerText);
};
})