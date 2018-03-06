// create an object for each question, properties include question, an array of all possible answers, and correct answer

var q1 = {
    question: "Question 1",
    answers: ["a", "b", "c", "correct"],
    correct: "correct",
    image: "<img src='assets/images/placeholder1.jpg'>"
}

var q2 = {
    question: "Question 2",
    answers: ["a", "b", "c", "correct"],
    correct: "correct",
    image: "<img src='assets/images/placeholder2.jpg'>"
}

var q3 = {
    question: "Question 3",
    answers: ["a", "b", "c", "correct"],
    correct: "correct",
    image: "<img src='assets/images/placeholder3.jpg'>"
}

var q4 = {
    question: "Question 4",
    answers: ["a", "b", "c", "correct"],
    correct: "correct",
    image: "<img src='assets/images/placeholder4.jpg'>"

}

// create array containing all objects  
var questions = [q1, q2, q3, q4];
var asked = [];
var answers = [];
var timeLeft = 30;
var qChosen = "";
// var questionChosen = false;
var qTimer = "";
var timesUp = "";


$(document).ready(function () {

    // function to choose which question in the array will be displayed

    function chooseQuestion() {

        // clearInterval(qTimer);
        // clearTimeout(timesUp);

        $("#correctAnswer").html("");
        $("#correctImage").html("");

        timeLeft = 30;

        // choose random number between 0 and the length of the array
        var qNum = Math.floor(Math.random() * questions.length);

        // detach the start button
        $("#startButton").detach();

        if (asked.indexOf(questions[qNum]) < 0) {

            // push that question index of the questions array and add it to the asked array
            qChosen = questions[qNum];
            asked.push(qChosen);

            // display the question  and answers in the appropriate div
            $("#question").html(qChosen.question);

            // display the timer
            $("#timer").html(timeLeft);

            // // run the time function
            // runTimer();

            qTimer = setInterval(function () {
                $("#timer").html(timeLeft--);
            }, 1000);
    
            timesUp = setTimeout(displayAnswer, 31 * 1000);

        }

        if (asked.length === questions.length) {
            scoreCard();
        }


    };

    chooseQuestion();

    // function to run the timer, on click stop timer

    // function runTimer() {
    //     timeLeft = 30;

    //     var qTimer = setInterval(function () {
    //         $("#timer").html(timeLeft--);
    //     }, 1000);

    //     // if an answer is not chosen after 30 seconds then run the displayAnswer function
    //     var timesUp = setTimeout(displayAnswer, 31 * 1000);

    //     // if an answer is not chosen after 30 seconds then run the displayAnswer function

    // };

    // function to display answer
    function displayAnswer() {
        // stop the interval and timeout no matter where they are at
        clearInterval(qTimer);
        clearTimeout(timesUp);

        // update the html where needed
        $("#question").html("");
        $("#timer").html("");
        $("#correctAnswer").html(qChosen.correct);
        $("#correctImage").html(qChosen.image);

        // set timeout to go to next question
        setTimeout(chooseQuestion, 5 * 1000);
    };

    function scoreCard () {
        $("#result").html("Your Score:");

    };

});





// when play game is clicked, game begins

// when player clicks on an answer stop the time and switch to the next screen which shows the correct answer and the image
// if correct answer value equals answer of button clicked then correct

// if correct add one to total correct answers

// if incorrect or time runs out add one to total incorrect answers

// after showing correct answer for 5 seconds switch to the next question

// when through all questions, stop the game and display total correct and incorrect

// create array and use math.random to randomly order the buttons (create the buttons in js or html?)