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
    ans = ~~a + ~~b;
    bottomDisplay.innerHTML = ans;
}


function subtract(a, b) {
    ans = ~~a - ~~b
    bottomDisplay.innerHTML = ans;
}


function multiply(a, b) {
    ans = ~~a * ~~b;
    bottomDisplay.innerHTML = ans;
}


function divide(a, b) {
    ans = ~~a / ~~b;
    bottomDisplay.innerHTML = ans;
}

function percent (a,b){
    ans = (~~a / 100)*~~b;
    bottomDisplay.innerHTML = ans;
}






btn.forEach(individualBtn => {// to get an array of full numbers
    individualBtn.addEventListener('click', array);
    function array() {
        let top = topDisplay.innerHTML;
        let fullNumArray = top.split(/[-+*/%=]/);
        console.log(fullNumArray); //separated numbers in an array

        let a = fullNumArray[0];
        let b = fullNumArray[1];
        

        let arrOperand = individualBtn.className;
        if (arrOperand != 'number') {
            operand = individualBtn.innerHTML;
        }

        console.log(operand);

        if (operand ==='+'){
            add(a,b);
        } else if(operand === '-'){
            subtract(a,b);
        } else if (operand === '*'){
            multiply(a,b);
        } else if (operand === '/'){
            divide(a,b);
        }else if(operand ==='%'){
            percent(a, b);
        } else if(operand === '='){
            topDisplay.innerHTML=bottomDisplay.innerHTML;
            bottomDisplay.innerHTML='';
        }


for (i = 1; i< fullNumArray.length; i++){
    if (i==2){
        topDisplay.innerHTML=bottomDisplay.innerHTML;
        bottomDisplay.innerHTML='';
    }
}
    }


    });
