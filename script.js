let buttons = document.querySelectorAll("button");
let input = document.getElementById('inputBox');

let string ="";
let arr = Array.from(buttons);   //Array.from makes an array of buttons 
arr.forEach(button => {
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value=string;
        }
        else if (e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            let operators = ['+','-','*','/','%'];

            if (operators.includes(e.target.innerHTML) && operators.includes(string.slice(-1))){
                string = string.slice(0, -1) + e.target.innerHTML;
            }else{
                string += e.target.innerHTML;
            }
            input.value = string;
        }
    });
});