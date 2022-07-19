// https://github.com/stebsnusch
/*
console.log("Hello world");

// document.getElementsByTagName('h1');

var heading1 = document.getElementsByTagName('h1')[0];
heading1.style.color = 'red';
*/

var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}