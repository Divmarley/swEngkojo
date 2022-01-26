'use strict'; 
let secretNumber= Math.trunc(Math.random()*20)+1;
const checkBtn=document.querySelector('.check');
const inputfield=document.querySelector('.guess');

const message = document.querySelector('.message') ;
const mybody = document.querySelector('body') ;
const hiddenNumber = document.querySelector('.number') ;
hiddenNumber.innerHTML =secretNumber;
// mybody.style.backgroundColor='green';
// mybody.style.backgroundColor='red';


function displayMessage(msg) {
    return  message.innerHTML=msg
}
// displayMessage("correct")
// displayMessage("nt correct")



checkBtn.addEventListener('click',function() {
    const guess = inputfield.value;
    if (!guess) {
      console.log(  displayMessage("no number"));
        
    }
})