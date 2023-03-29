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
            return oper != '' && oper != 'undefine' && oper != '.';
        }
        console.log(operatorArray);

        let a = numbers[0];
        let b = numbers[1];
        let operator = operatorArray[0];
        
        
        if (operator === '+') {
            let answer = parseFloat(a) + parseFloat(b);
            console.log(answer);

            numbers.splice(0, 2);
            operatorArray.splice(0, 1);
            numbers.unshift(answer.toString());


            console.log(numbers);
            console.log(operatorArray);

        } else if (operator === '-') {
            let answer = parseFloat(a) - parseFloat(b);
            console.log(answer);

            numbers.splice(0, 2);
            operatorArray.splice(0, 1);
            numbers.unshift(answer);

            console.log(numbers);
            console.log(operatorArray);

        } else if (operator === '*') {
            let answer = parseFloat(a) * parseFloat(b);
            console.log(answer);

            numbers.splice(0, 2);
            operatorArray.splice(0, 1);
            numbers.unshift(answer);

            console.log(numbers);
            console.log(operatorArray);

        } else if (operator === '/') {
            let answer = parseFloat(a) + parseFloat(b);
            console.log(answer);

            numbers.splice(0, 2);
            operatorArray.splice(0, 1);
            numbers.unshift(answer);

            console.log(numbers);
            console.log(operatorArray);
        }


    };
});


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