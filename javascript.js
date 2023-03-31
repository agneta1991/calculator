let topDisplay = document.getElementById('displayOne');
let bottomDisplay = document.getElementById('displayTwo');
let btn = document.querySelectorAll('button');



btn.forEach(individualBtn => {
    individualBtn.addEventListener('click', array);
    function array() {

        if (topDisplay.innerHTML.length >= 20) {
            topDisplay.innerHTML = '';
            bottomDisplay.innerHTML = 'Number is too long';
        };


        topDisplay.innerHTML += individualBtn.innerHTML;
        
        let numbers = topDisplay.innerHTML.split(/[/*+=%-]/g);
        let operators = topDisplay.innerHTML.split((/[0123456789]/g));
        let operatorArray = operators.filter(notNull);

        function notNull(oper) {
            return oper != '' && oper != 'undefine' && oper != '.' && oper != 'DEL';
        }
        console.log(operatorArray);

        let a = numbers[0];
        let b = numbers[1];
        let operator = operatorArray[0];

        let isNegative = Math.sign(topDisplay.innerHTML);
        if (isNegative<0){
            console.log('number is negative');
        }

        if (operator === '+') {
            let answer = parseFloat(a) + parseFloat(b);
            bottomDisplay.innerHTML = answer;
            if (bottomDisplay.innerHTML === 'NaN') {
                bottomDisplay.innerHTML = '';
            }

            console.log(numbers);
            if (operatorArray.length >= 2) {
                let y = operatorArray.pop();
                topDisplay.innerHTML = bottomDisplay.innerHTML + y;
            };


        } else if (operator === '-') {
            let answer = parseFloat(a) - parseFloat(b);
            bottomDisplay.innerHTML = answer;
            if (bottomDisplay.innerHTML === 'NaN') {
                bottomDisplay.innerHTML = '';
            }

            console.log(numbers);
            if (operatorArray.length >= 2) {
                let y = operatorArray.pop();
                topDisplay.innerHTML = bottomDisplay.innerHTML + y;
            };

        } else if (operator === '*') {
            let answer = parseFloat(a) * parseFloat(b);
            bottomDisplay.innerHTML = answer;
            if (bottomDisplay.innerHTML === 'NaN') {
                bottomDisplay.innerHTML = '';
            }

            console.log(numbers);
            if (operatorArray.length >= 2) {
                let y = operatorArray.pop();
                topDisplay.innerHTML = bottomDisplay.innerHTML + y;
            };


        } else if (operator === '/') {
            if (parseFloat(b) != 0){
                let answer = parseFloat(a) / parseFloat(b);
                bottomDisplay.innerHTML = answer.toFixed(2);
                } else bottomDisplay.innerHTML = 'Cannot divide by 0';
                
                
            if (bottomDisplay.innerHTML === 'NaN') {
                bottomDisplay.innerHTML = '';
            }

            console.log(numbers);
            if (operatorArray.length >= 2) {
                let y = operatorArray.pop();
                topDisplay.innerHTML = bottomDisplay.innerHTML + y;
            };

        } else if (operator === '%') {
            let answer = (parseFloat(a) / 100) * parseFloat(b);
            bottomDisplay.innerHTML = answer.toFixed(2);
            if (bottomDisplay.innerHTML === 'NaN') {
                bottomDisplay.innerHTML = '';
            }

        };
    };
});

let del = document.getElementById('delete');
del.addEventListener('click', dele);
function dele() {
    topDisplay.innerHTML = topDisplay.innerHTML.slice(0, -4);
    bottomDisplay.innerHTML = '';
}

let result = document.getElementById('equal');
result.addEventListener('click', equal);
function equal() {
    topDisplay.innerHTML = bottomDisplay.innerHTML;
    bottomDisplay.innerHTML = '';

}

function refresh() {
    location.reload();
}

////////////////////////////////////////////////////////////////////////////////////
///////////////////////////KRYBOARD CODE////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

document.addEventListener('keyup', (event) => {
    let keyName = event.key;
    let code = event.code;
    console.log(keyName, code);

    topDisplay.innerHTML += keyName;

    if (topDisplay.innerHTML.length >= 20) {
        topDisplay.innerHTML = '';
        bottomDisplay.innerHTML = 'Number is too long';
    };


    if (keyName === 'Backspace'){
        topDisplay.innerHTML = topDisplay.innerHTML.slice(0, -10);
        bottomDisplay.innerHTML='';
    };

    if (keyName === 'Delete'){
        topDisplay.innerHTML = topDisplay.innerHTML.slice(0, -7);
        bottomDisplay.innerHTML='';
    }

    if (keyName === 'Enter'){
        topDisplay.innerHTML = bottomDisplay.innerHTML;
        bottomDisplay.innerHTML='';
    }

    let numbers = topDisplay.innerHTML.split(/[/*+=%-]/g);
    console.log(numbers);
    let operators = topDisplay.innerHTML.split((/[0123456789]/g));
    let operatorArray = operators.filter(notNull);

    function notNull(oper) {
        return oper != '' && oper != 'undefine' && oper != '.' && oper != 'DEL';
    }
    console.log(operatorArray);

    let a = numbers[0];
    let b = numbers[1];
    let operator = operatorArray[0];





    
    if (operator === '+') {
        let answer = parseFloat(a) + parseFloat(b);
        bottomDisplay.innerHTML = answer;
        if (bottomDisplay.innerHTML === 'NaN') {
            bottomDisplay.innerHTML = '';
        }

        console.log(numbers);
        if (operatorArray.length >= 2) {
            let y = operatorArray.pop();
            topDisplay.innerHTML = bottomDisplay.innerHTML + y;
        };


    } else if (operator === '-') {
        let answer = parseFloat(a) - parseFloat(b);
        bottomDisplay.innerHTML = answer;
        if (bottomDisplay.innerHTML === 'NaN') {
            bottomDisplay.innerHTML = '';
        }

        console.log(numbers);
        if (operatorArray.length >= 2) {
            let y = operatorArray.pop();
            topDisplay.innerHTML = bottomDisplay.innerHTML + y;
        };

    } else if (operator === '*') {
        let answer = parseFloat(a) * parseFloat(b);
        bottomDisplay.innerHTML = answer;
        if (bottomDisplay.innerHTML === 'NaN') {
            bottomDisplay.innerHTML = '';
        }

        console.log(numbers);
        if (operatorArray.length >= 2) {
            let y = operatorArray.pop();
            topDisplay.innerHTML = bottomDisplay.innerHTML + y;
        };


    } else if (operator === '/') {
        if (parseFloat(b) != 0){
        let answer = parseFloat(a) / parseFloat(b);
        bottomDisplay.innerHTML = answer.toFixed(2);
        } else bottomDisplay.innerHTML = 'Cannot divide by 0';

        if (bottomDisplay.innerHTML === 'NaN') {
            bottomDisplay.innerHTML = '';
        }

        console.log(numbers);
        if (operatorArray.length >= 2) {
            let y = operatorArray.pop();
            topDisplay.innerHTML = bottomDisplay.innerHTML + y;
        };

    } else if (operator === '%') {
        let answer = (parseFloat(a) / 100) * parseFloat(b);
        bottomDisplay.innerHTML = answer.toFixed(2);
        if (bottomDisplay.innerHTML === 'NaN') {
            bottomDisplay.innerHTML = '';
        }

    };








}, false);

