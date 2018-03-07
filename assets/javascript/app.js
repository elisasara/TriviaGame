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
var questionNumber = [];
var timeLeft = 30;
var qChosen = "";
var qTimer = "";
var timesUp = "";
var qNum = ""
var totalCorrect = 0;
var totalWrong = 0;


$(document).ready(function () {

    // function to choose which question in the array will be displayed

    function randomNumber() {

        qNum = Math.floor(Math.random() * questions.length);

        if (questionNumber.indexOf(qNum) === -1) {
            chooseQuestion();
            questionNumber.push(qNum);
            console.log(qNum);
            console.log(questionNumber);
        }

        else if (questionNumber.length === questions.length) {
            scoreCard ();
        }

        else {
            randomNumber();
        }

    };

    function chooseQuestion() {;

        $("#correctAnswer").empty();
        $("#correctImage").empty();
        $("#result").empty();

        timeLeft = 30;

        // detach the start button
        $("#startButton").detach();

        // push that question index of the questions array and add it to the asked array
        qChosen = questions[qNum];

        // display the question  and answers in the appropriate div
        $("#question").html(qChosen.question);

        // display the timer
        $("#timer").html(timeLeft);

        // create buttons for each answer
        shuffleAnswers ();

        for (var i=0; i<qChosen.answers.length; i++) {
            var answerButton = $("<button>");
            answerButton.addClass("answer");
            answerButton.attr("value", qChosen.answers[i]);
            answerButton.html(qChosen.answers[i]);
            $("#answerOptions").append(answerButton);
        }

        // interval for counting down each question
        qTimer = setInterval(function () {
            $("#timer").html(timeLeft--);
        }, 1000);

        // after 30 seconds automatically switch to the answer screen
        timesUp = setTimeout(function (){
            totalWrong = totalWrong + 1;
            console.log("Total Wrong: " + totalWrong);
            $("#result").html("<h3>Time's Up!</h3>");
            displayAnswer ();
        }, 31 * 1000);

    };

    // function to shuffle the answer array in order to randomize the order in which the answer options show up
    function shuffleAnswers() {
        for (var i = 0; i < qChosen.answers.length; i++) {
            var j = Math.floor(Math.random() * (i + 1));
            var newPos = qChosen.answers[i];
            qChosen.answers[i] = qChosen.answers[j];
            qChosen.answers[j] = newPos;
        }
    };

    function checkCorrect(event) {
        var answerClicked = $(event.target).attr("value");

        // if the value of the button clicked is equal to the correct answer
        if (answerClicked === qChosen.correct) {
            // add one to the total correct
            totalCorrect = totalCorrect + 1;

            // display Correct in the result div and run display answer
            $("#result").html("<h3>Right!</h3>");
            displayAnswer();
            console.log("Total Correct: " + totalCorrect);
        }

        // if the value of the button does not match
        else {
            // add one to the total wrong
            totalWrong = totalWrong +1;

            // display Wrong in the result div and run display answer
            $("#result").html("<h3>Wrong!</h3>");
            displayAnswer();
            console.log("Total Wrong: " + totalWrong);
        }
    }

    // function to display answer
    function displayAnswer() {
        // stop the interval and timeout no matter where they are at
        clearInterval(qTimer);
        clearTimeout(timesUp);

        // update the html where needed
        $("#question").empty();
        $("#timer").empty();
        $("#answerOptions").empty();
        $("#correctAnswer").html("The correct answer is <br />" + qChosen.correct);
        $("#correctImage").html(qChosen.image);

        // set timeout to go to next question
        setTimeout(randomNumber, 5 * 1000);
    };

    function scoreCard () {
        $("#correctAnswer").empty();
        $("#correctImage").empty();

        $("#result").html("<h3>Your Score:</h3>");
        $("#result").append("Total Correct: " + totalCorrect);
        $("#result").append("<br />Total Wrong: " + totalWrong);
    };

    // when play game is clicked, game begins
    $("#startButton").on("click", randomNumber);

    // when player clicks on an answer run the checkCorrect function
    $(document).on("click", ".answer", checkCorrect);

});






// if correct answer value equals answer of button clicked then correct

// if correct add one to total correct answers

// if incorrect or time runs out add one to total incorrect answers

// after showing correct answer for 5 seconds switch to the next question

// when through all questions, stop the game and display total correct and incorrect

// create array and use math.random to randomly order the buttons (create the buttons in js or html?)