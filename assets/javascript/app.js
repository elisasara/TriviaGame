// create an object for each question, properties include question, an array of all possible answers, and correct answer

var q1 = {
    question: "Question 1",
    answers: ["a", "b", "c", "correct"],
    correct: "correct",
}

var q2 = {
    question: "Question 2",
    answers: ["a", "b", "c", "correct"],
    correct: "correct",
}

var q3 = {
    question: "Question 3",
    answers: ["a", "b", "c", "correct"],
    correct: "correct",
}

// create array containing all objects  
var questions = [q1, q2, q3];
var asked = [];


// function to choose which question in the array will be displayed

function chooseQuestion () {
    var qNum = Math.floor(Math.random()* questions.length);
    console.log(qNum);
    var qChosen = questions[qNum];
    console.log(qChosen);
    asked.push(qChosen);
    console.log(asked)
}

chooseQuestion ();

// function to run the timer, on click stop timer

// when play game is clicked, game begins

// question is chosen based on math.random for length of array

// begin timer counting down from 30 seconds

// when player clicks on an answer stop the time and switch to the next screen which shows the correct answer and the image
// if correct answer value equals answer of button clicked then correct

// if time runs out before player clicks on an answer then switch to the next screen showing the correct answer and image

// if correct add one to total correct answers

// if incorrect or time runs out add one to total incorrect answers

// after showing correct answer for 5 seconds switch to the next question