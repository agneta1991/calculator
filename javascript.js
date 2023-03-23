let btn = document.querySelectorAll('button');
let topDisplay = document.getElementById('displayOne');
let bottomDisplay = document.getElementById('displayTwo');


function refresh() {
    location.reload();
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
            console.log(num.length);
            
            if (bottomDisplay.innerHTML === 'NaN') {
                bottomDisplay.innerHTML = '';
            }
         
           if (num.length === 3){
            topDisplay.innerHTML = parseFloat(a)+parseFloat(b);
           }


        } else if (operator === '-') {

            let subtraction = num.reduce((accumulator, currentValue) =>
                parseFloat(accumulator) - parseFloat(currentValue));

            bottomDisplay.innerHTML = subtraction.toFixed(2);
            console.log(subtraction);

            if (bottomDisplay.innerHTML === 'NaN') {
                bottomDisplay.innerHTML = '';
            }
           

        } else if (operator === '*') {

            let multiplying = num.reduce((accumulator, currentValue) =>
                parseFloat(accumulator) * parseFloat(currentValue));

            bottomDisplay.innerHTML = multiplying.toFixed(2);
            console.log(multiplying);


            if (bottomDisplay.innerHTML === 'NaN') {
                bottomDisplay.innerHTML = '';
            }

        } else if (operator === '/') {

            let division = num.reduce((accumulator, currentValue) =>
                parseFloat(accumulator) / parseFloat(currentValue));

            bottomDisplay.innerHTML = division.toFixed(2);
            console.log(division);


            if (bottomDisplay.innerHTML === 'NaN') {
                bottomDisplay.innerHTML = '';
            }
        } else if (operator === '%') {

            let percentBtn = (a / 100) * b;

            bottomDisplay.innerHTML = percentBtn.toFixed(2);
            console.log(percentBtn);

          
            if (bottomDisplay.innerHTML === 'NaN') {
                bottomDisplay.innerHTML = '';
            }

        } else if (operator === '=') {
            topDisplay.innerHTML = bottomDisplay.innerHTML;
            bottomDisplay.innerHTML = '';
        }


    }


});

let del = document.getElementById('delete');
del.addEventListener('click', dele);
function dele() {
    topDisplay.innerHTML = topDisplay.innerHTML.slice(0, -4);
    bottomDisplay.innerHTML = '';
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
