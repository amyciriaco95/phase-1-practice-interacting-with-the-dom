//creating variables by selecting elements in tbe DOM
const counter = document.getElementById('counter');
const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const submitButton = document.getElementById('submit');
const heartButton = document.getElementById('heart');
const pauseButton = document.getElementById('pause');
const commentForm = document.getElementById('comment-form');

//defining time as 0
let counterStartNumber = 0;

//counter automatically running on page after being loaded//
const automaticCounter = setInterval(function() {
        counter.innerHTML = counterStartNumber++;
    }, 1000);


//creating a function for the buttons
function timerButtons() {
minusButton.addEventListener('click', function() {
    counterStartNumber--;
    counter.innerHTML = counterStartNumber;
})
plusButton.addEventListener('click', function(){
    counterStartNumber++;
    counter.innerHTML = counterStartNumber;
})
//pausing
pauseButton.addEventListener('click', function() {
    
})
}