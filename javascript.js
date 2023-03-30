let topDisplay = document.getElementById('displayOne');
let bottomDisplay = document.getElementById('displayTwo');
let btn = document.querySelectorAll('button');



btn.forEach(individualBtn => {
    individualBtn.addEventListener('click', array);
    function array() {

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

        if (operator === '+') {
            let answer = parseFloat(a) + parseFloat(b);
            bottomDisplay.innerHTML = answer;
            if (bottomDisplay.innerHTML === 'NaN') {
                bottomDisplay.innerHTML = '';
            }

            console.log(numbers);
            if(operatorArray.length >= 2){
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
            if(operatorArray.length >= 2){
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
            if(operatorArray.length >= 2){
                let y = operatorArray.pop();
                topDisplay.innerHTML = bottomDisplay.innerHTML + y;
            };


        } else if (operator === '/') {
            let answer = parseFloat(a) / parseFloat(b);
            bottomDisplay.innerHTML = answer;
            if (bottomDisplay.innerHTML === 'NaN') {
                bottomDisplay.innerHTML = '';
            }

            console.log(numbers);
            if(operatorArray.length >= 2){
                let y = operatorArray.pop();
                topDisplay.innerHTML = bottomDisplay.innerHTML + y;
            };

        } else if (operator === '%') {
            let answer = (parseFloat(a) / 100) * parseFloat(b);
            bottomDisplay.innerHTML = answer;
            if (bottomDisplay.innerHTML === 'NaN') {
                bottomDisplay.innerHTML = '';
            }

            console.log(numbers);
            if(operatorArray.length >= 2){
                let y = operatorArray.pop();
                topDisplay.innerHTML = bottomDisplay.innerHTML + y;
            };
           
        };
    };
});

let del = document.getElementById('delete');
del.addEventListener('click', dele);
function dele() {
    topDisplay.innerHTML = topDisplay.innerHTML.slice(0, -4);
    bottomDisplay.innerHTML = '';
}

function refresh() {
    location.reload();
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
});

window.addEventListener('keypress', array);
function array() {

    let num = topDisplay.innerHTML.split(/[/*+=%-]/g);
    let operatorArray = topDisplay.innerHTML.split(/[0-9]/g);
    console.log(num);
    console.log(operatorArray);
    let a = num[0];
    let b = num[1];

    if (keyCode = 107) {
        add(a, b);
        if (num.length > 2) {
            let y = operatorArray.pop();
            let newArr = answer + y;
            topDisplay.innerHTML = newArr;
        }
    } else if (keyCode = 1095) {
        subtract(a, b);
        if (num.length > 2) {
            let y = operatorArray.pop();
            let newArr = answer + y;
            topDisplay.innerHTML = newArr;
        }
    } else if (keyCode = 106) {
        multiply(a, b);
        if (num.length > 2) {
            let y = operatorArray.pop();
            let newArr = answer + y;
            topDisplay.innerHTML = newArr;
        }
    } else if (keyCode = 111) {
        divide(a, b);
        if (num.length > 2) {
            let y = operatorArray.pop();
            let newArr = answer + y;
            topDisplay.innerHTML = newArr;
        }
    }
}