var timerContainer = document.querySelector("#timer");
var timeLeft = 75;
// Anonymous function: anything with keyword function and nothing in parantheses
var intervalId = setInterval(function() {
    timerContainer.innerHTML = timeLeft; 
    //  Longway
    timeLeft = timeLeft - 1;
    // Shortway simlar to ++
    // timeLeft--;
}, 1000);

// Array Object of Questions
var questions = [{
    question: "what is 2+2?",
    answers: ["4", "5", "6", "7"],
    correctAnswer: "4"
}]