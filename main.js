const userInput = document.querySelector('.input');
const submitButton = document.querySelector('.submit-btn');
const userOutput = document.querySelector('.output');
const form = document.querySelector('.form');
const showIfEmpty = document.querySelector('.show');

form.addEventListener('submit', messagePrint);

function messagePrint (event){
    event.preventDefault();
    let value = userInput.value;
    if(value == ''){
        showIfEmpty.textContent = "please insert a value!";
  
    }else{
        showIfEmpty.textContent = "Last Message Delivered!";
        userOutput.textContent = value;
        userInput.value = '';
    }
}
