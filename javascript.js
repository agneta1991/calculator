let btn = document.querySelectorAll('button');
let topDisplay = document.getElementById('displayOne');
let bottomDisplay = document.getElementById('displayTwo');

function refresh() {
    location.reload();
}

function add(a, b) {
    answer = parseFloat(a) + parseFloat(b);
    bottomDisplay.innerHTML = answer;
    if (bottomDisplay.innerHTML === 'NaN') {
        bottomDisplay.innerHTML = '';
    }
    return answer;
}

function subtract(a, b) {
    answer = parseFloat(a) - parseFloat(b);
    bottomDisplay.innerHTML = answer;
    if (bottomDisplay.innerHTML === 'NaN') {
        bottomDisplay.innerHTML = '';
    }
}

function multiply(a, b) {
    answer = parseFloat(a) * parseFloat(b);
    bottomDisplay.innerHTML = answer;
    if (bottomDisplay.innerHTML === 'NaN') {
        bottomDisplay.innerHTML = '';
    }
}

function divide(a, b) {
    answer = parseFloat(a) / parseFloat(b);
    bottomDisplay.innerHTML = answer;
    if (bottomDisplay.innerHTML === 'NaN') {
        bottomDisplay.innerHTML = '';
    }
}

function percent(a, b) {
    answer = (parseFloat(a) / 100) * parseFloat(b);
    bottomDisplay.innerHTML = answer;

}

function equal(a, b) {
    answer=
    bottomDisplay.innerHTML=answer;
    if (bottomDisplay.innerHTML === 'NaN') {
        bottomDisplay.innerHTML = '';
    }
    
}

btn.forEach(individualBtn => {
    individualBtn.addEventListener('click', array);


    function array() {
        topDisplay.innerHTML += individualBtn.innerHTML;

        let num = topDisplay.innerHTML.split(/[/*+=%-]/g)
        let operatorArray = topDisplay.innerHTML.split(/[0-9]/g);
        console.log(num, operatorArray);
        

        let a = num[0];
        let b = num[1];
        let operatorName = individualBtn.className;

        switch (operatorName) {
            case 'add':
                if (topDisplay.innerHTML.includes('+')){
                add(a, b);}
                if (num.length > 2) {
                    let y = operatorArray.pop();
                    let newArr = answer + y;
                    topDisplay.innerHTML = newArr;
                
                } break;

            case 'subtract':
                subtract(a, b);
                if (num.length > 2) {
                    let y = operatorArray.pop();
                    let newArr = answer + y;
                    topDisplay.innerHTML = newArr;
                }
                break;

            case 'multiply':
                multiply(a, b);
                if (num.length > 2) {
                    let y = operatorArray.pop();
                    topDisplay.innerHTML = answer + y;
                }
                break;

            case 'divide':
                divide(a, b);
                if (num.length > 2) {
                    let y = operatorArray.pop();
                    topDisplay.innerHTML = answer + y;
                }
                break;

            case 'percent':
                percent(a, b);
                if (num.length > 2) {
                    topDisplay.innerHTML = answer;
                }
                break;

            case 'equal':
                equal(a,b);
                
                break;
        }
    }


}
)
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
