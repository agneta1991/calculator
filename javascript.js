let btn = document.querySelectorAll('button');
let topDisplay = document.getElementById('displayOne');
let bottomDisplay = document.getElementById('displayTwo');


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

//write a function for equal to display 
//the answer rather than bottom innerHTML as 
//parseFloat numbers being calculated and shown in 
//the answer(bottom display) only after another operator is pressed.





btn.forEach(individualBtn => {
    individualBtn.addEventListener('click', array);
    function array() {

        let fullNumArray = topDisplay.innerHTML.split(/[-+*/%=]/);
        console.log(fullNumArray);

        let a = fullNumArray[0];
        let b = fullNumArray[1];



        let arrOperator = individualBtn.className;
        if (arrOperator != 'number') {
            operator = individualBtn.innerHTML;
        }

        console.log(operator);

        if (operator === '+') {
            add(a, b);
        } else if (operator === '-') {
            subtract(a, b);
        } else if (operator === '*') {
            multiply(a, b);
        } else if (operator === '/') {
            divide(a, b);
        } else if (operator === '%') {
            percent(a, b);
        } else if (operator === '=') {
            equal();
        }

        for (let i = 1; i < fullNumArray.length; i++) {
            if (i == 2) {
                topDisplay.innerHTML = bottomDisplay.innerHTML;

            }
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

window.addEventListener('keypress', e=>{
    console.log(e);
    if (e.keyCode >= 112 || e.keyCode <= 95){
        console.log(e.keyCode);
        topDisplay.innerHTML += e.key;
    }
})

window.addEventListener('keypress', array);
    function array(){
       num = topDisplay.innerHTML.split(/[-+*/%=]/);
        console.log(num);

        a=num[0];
        b=num[1];

        if (keyCode = 107){
            add(a, b);
        } else if (keyCode =1095){
            subtract(a, b);
        } else if (keyCode = 106){
            multiply(a, b);
        } else if(keyCode = 111){
            divide(a, b);
        }
            }
        