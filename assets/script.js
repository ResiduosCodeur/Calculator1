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

const btns = document.querySelectorAll('.buttons button');

function press(number) {
    if (display.innerText === '0' || display.innerText === "ERROR") {
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
    display.innerText += '.';
}
percentage.onclick = function() {
    let currentValue = parseFloat(display.innerText);

    if (isNaN(currentValue)) {
        display.innerText = "ERROR";
        return;
    }
    
    let result = currentValue/100;
    display.innerText = result.toString();  
}

sign.onclick = function() {
    let currentValue = parseFloat(display.innerText);

    if (isNaN(currentValue)) {
        display.innerText = "ERROR";
        return;
    }
    currentValue = eval(currentValue);
    let result = currentValue * -1;
    display.innerText = result.toString();
}

equal.onclick = function() {
    let expression = display.innerText;

    try {
        expression = expression.replace(/×/g, '*');
        expression = expression.replace(/÷/g, '/');

        let result = eval(expression);

	    display.innerText = result.toString();
    }
    catch (e) {
        display.innerText = "ERROR";
    }

   
};


function onpress(event) {
    event.currentTarget.style.boxShadow = '-1px 1px 5px #aaaaaa';
    
}

function onrelease(event) {
    event.currentTarget.style.boxShadow = '-2px 2px 5px #aaaaaa';
}
btns.forEach(btn => { 
btn.addEventListener('mousedown', onpress);
btn.addEventListener('mouseup', onrelease);
btn.addEventListener('touchstart', onpress);
btn.addEventListener('touchend', onrelease);

});

