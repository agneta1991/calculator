let btn = document.querySelectorAll('button');
let topDisplay = document.getElementById('displayOne');
let bottomDisplay = document.getElementById('displayTwo');


function refresh() {
    location.reload();
}


function add(a, b) {
    ans = parseFloat(a) + parseFloat(b);
    console.log(ans);
    bottomDisplay.innerHTML = ans;
    if (bottomDisplay.innerHTML === 'NaN') {
        bottomDisplay.innerHTML = topDisplay.innerHTML.slice(0, -1);
    }
}


function subtract(a, b) {
    ans = parseFloat(a) - parseFloat(b)
    bottomDisplay.innerHTML = ans;
    if (bottomDisplay.innerHTML === 'NaN') {
        bottomDisplay.innerHTML = topDisplay.innerHTML.slice(0, -1);
    }
}


function multiply(a, b) {
    ans = parseFloat(a) * parseFloat(b);
    bottomDisplay.innerHTML = ans;
    if (bottomDisplay.innerHTML === 'NaN') {
        bottomDisplay.innerHTML = topDisplay.innerHTML.slice(0, -1);
    }
}


function divide(a, b) {
    ans = a / b;
    bottomDisplay.innerHTML = ans;
    if (bottomDisplay.innerHTML === 'NaN') {
        bottomDisplay.innerHTML = topDisplay.innerHTML.slice(0, -1);
    }
}

function percent(a, b) {
    ans = ((parseFloat(a) / 100) * parseFloat(b)).toFixed(2);
    bottomDisplay.innerHTML = ans;
    if (bottomDisplay.innerHTML === 'NaN') {
        bottomDisplay.innerHTML = topDisplay.innerHTML.slice(0, -1);
    }
}

function equal() {

}




btn.forEach(individualBtn => {
    individualBtn.addEventListener('click', array);
    function array() {

        topDisplay.innerHTML += individualBtn.innerHTML;

        let num = topDisplay.innerHTML.split(/[-+*/%=]/);
        console.log(num);
        let a = num[0];
        let b = num[1];

        let arrOperator = individualBtn.className;


        if (arrOperator != 'number') {
            operator = individualBtn.innerHTML;
        }



        if (operator === '+') {
            let sum = num.reduce((accumulator, currentValue) => {
                return parseFloat(accumulator) + parseFloat(currentValue);
            }, 0);
            bottomDisplay.innerHTML = sum;
            console.log(sum);
            if (sum > 0) {
                topDisplay.innerHTML = sum;
            }
            if (bottomDisplay.innerHTML === 'NaN') {
                bottomDisplay.innerHTML = '';
            }


        } else if (operator === '-') {
            let subtraction = num.reduce((accumulator, currentValue) =>
                parseFloat(accumulator) - parseFloat(currentValue));
            bottomDisplay.innerHTML = subtraction;
            console.log(subtraction);
            if (subtraction > 0) {
                topDisplay.innerHTML = subtraction;
            }
            if (bottomDisplay.innerHTML === 'NaN') {
                bottomDisplay.innerHTML = topDisplay.innerHTML.slice(0, -1);
            }

        } else if (operator === '*') {
            let multiplying = num.reduce((accumulator, currentValue) =>
                parseFloat(accumulator) * parseFloat(currentValue));
            bottomDisplay.innerHTML = multiplying;
            console.log(multiplying);
            if (multiplying > 0) {
                topDisplay.innerHTML = multiplying;
            }
            if (bottomDisplay.innerHTML === 'NaN') {
                bottomDisplay.innerHTML = topDisplay.innerHTML.slice(0, -1);
            }
        } else if (operator === '/') {
            let division = num.reduce((accumulator, currentValue) =>
                parseFloat(accumulator) / parseFloat(currentValue));
            bottomDisplay.innerHTML = division;
            console.log(division);
            if (division > 0) {
                topDisplay.innerHTML = division;
            }
            if (bottomDisplay.innerHTML === 'NaN') {
                bottomDisplay.innerHTML = topDisplay.innerHTML.slice(0, -1);
            }
        } else if (operator === '%') {
            let percentBtn = num.reduce((accumulator, currentValue) =>
                (parseFloat(accumulator) / 100) * parseFloat(currentValue)).toFixed(2)
            bottomDisplay.innerHTML = percentBtn;
            console.log(percentBtn);
            if (percentBtn > 0) {
                topDisplay.innerHTML = percentBtn;
            }
            if (bottomDisplay.innerHTML === 'NaN') {
                bottomDisplay.innerHTML = topDisplay.innerHTML.slice(0, -1);
            }
        } else if (operator === '=') {
            topDisplay.innerHTML = '';
        }


    }


});

let del = document.getElementById('delete');
del.addEventListener('click', dele);
function dele() {
    topDisplay.innerHTML = topDisplay.innerHTML.slice(0, -4);
}

////////////////////////////////////////////////////////////////////////////////////
///////////////////////////KRYBOARD CODE////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

window.addEventListener('keypress', e => {
    console.log(e);
    if (e.keyCode >= 112 || e.keyCode <= 95) {
        console.log(e.keyCode);
        topDisplay.innerHTML += e.key;
    }
})

window.addEventListener('keypress', array);
function array() {
    num = topDisplay.innerHTML.split(/[-+*/%=]/);
    console.log(num);

    a = num[0];
    b = num[1];

    if (keyCode = 107) {
        add(a, b);
    } else if (keyCode = 1095) {
        subtract(a, b);
    } else if (keyCode = 106) {
        multiply(a, b);
    } else if (keyCode = 111) {
        divide(a, b);
    }
}
