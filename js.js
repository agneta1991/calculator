let btn = document.querySelectorAll('button');
let display = document.getElementById('displayTwo');
let display1 = document.getElementById('displayOne');

btn.forEach(individualBtn => {
    individualBtn.addEventListener('click', array);


function array(){

    display.innerHTML += individualBtn.innerHTML;
    let numArray = display.innerHTML;
    let num = numArray.split(/[-+*/%=]/);
    console.log(num);
    a = parseFloat(num[0]);
    b = parseFloat(num[1]);
    
    if (individualBtn.className != ('number')){
        let operator = individualBtn.innerHTML
        console.log(operator);


        if (operator === '+'){
            ans = a+b;
        console.log(ans);
        display1.innerHTML = ans;
        
        }
        
        };


    }

    }
);

