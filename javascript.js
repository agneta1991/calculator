let btn = document.querySelectorAll('button');
let topDisplay = document.getElementById('displayOne');
let bottomDisplay = document.getElementById('displayTwo');

let addition = document.getElementById('add');
let subtraction = document.getElementById('subtract');

function refresh() {
    location.reload();
}

btn.forEach(individualBtn => {
    individualBtn.addEventListener('click', show);
    function show() {
        topDisplay.innerHTML += individualBtn.innerHTML;
    }
}
);

function add(a, b) {
    ans = a + b;
    console.log(ans);
}


function subtract(a, b) {
    ans = a - b
    console.log(ans);
}


function multiply(a, b) {
    ans = a * b;
    console.log(ans);
}


function divide(a, b) {
    ans = a / b;
    console.log(ans);
}

function f(){
    console.log('y');
}



btn.forEach(individualBtn => {// to get an array of full numbers
    individualBtn.addEventListener('click', array);
    function array() {
        let splitting = topDisplay.innerHTML;
        let fullNumArray = splitting.split(/[-+*/%=]/);
        console.log(fullNumArray); //an array

        let a = fullNumArray[0];
        let b = fullNumArray[1];
        console.log(a, b);

        let arrOperand = individualBtn.className;
        if (arrOperand != 'number') {
            operand = individualBtn.innerHTML;
        }
        console.log(operand);
        bottomDisplay.innerHTML=add(a,b);
    }
}
);
