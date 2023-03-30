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
            bottomDisplay.innerHTML = answer.toFixed(2);
            if (bottomDisplay.innerHTML === 'NaN') {
                bottomDisplay.innerHTML = '';
            }

            console.log(numbers);
            if(operatorArray.length >= 2){
                
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

let result = document.getElementById('equal');
result.addEventListener('click', equal);
function equal(){
    topDisplay.innerHTML=bottomDisplay.innerHTML;
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

        if (e.key === 'Enter'){
            topDisplay.innerHTML = bottomDisplay.innerHTML;
            bottomDisplay.innerHTML='';
        };

    }
});

window.addEventListener('keypress', keyArray);
function keyArray() {

    

        let numbers = topDisplay.innerHTML.split(/[/*+=%-]/g);
        let operators = topDisplay.innerHTML.split((/[0123456789]/g));
        let operatorArray = operators.filter(notNull);

        function notNull(oper) {
            return oper != '' && oper != 'undefine' && oper != '.' && oper != 'DEL';
        }
        console.log(operatorArray);

        let a = numbers[0];
        let b = numbers[1];
        

    if (keyCode = 107) {
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

    } else if (keyCode = 1095) {
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
            
    } else if (keyCode = 106) {
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

    } else if (keyCode = 111) {
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
    } else if (keyCode === 53 && shiftKey === 'true'){
        let answer = (parseFloat(a) / 100) * parseFloat(b);
            bottomDisplay.innerHTML = answer.toFixed(2);
            if (bottomDisplay.innerHTML === 'NaN') {
                bottomDisplay.innerHTML = '';
            }

            console.log(numbers);
            if(operatorArray.length >= 2){
                
            };
    };
}
