btn=document.querySelectorAll('button');


btn.forEach(individualBtn => {
    individualBtn.addEventListener('click', displayed);
    
    function displayed(){
            document.getElementById('displayOne').innerHTML=individualBtn.innerHTML;
        console.log(individualBtn);
        }
    }
);