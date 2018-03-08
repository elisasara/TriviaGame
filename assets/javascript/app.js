// create an object for each question, properties include question, an array of all possible answers, and correct answer

var q1 = {
    question: "Which Steven Spielberg film won Best Picture?",
    answers: ["Jaws", "Schindler's List", "Saving Private Ryan", "Jurassic Park"],
    correct: "Schindler's List",
    image: "<img src='assets/images/schindlersList.jpg' alt='Schindler's List'>",
    fact: "Spielberg has also won Best Director for Saving Private Ryan."
}

var q2 = {
    question: "Which actor is the youngest person to ever win a competitive acting Oscar?",
    answers: ["Shirley Temple", "Quvenzhane Wallis", "Tatum O'Neal", "Timothy Hutton"],
    correct: "Tatum O'Neal",
    image: "<img src='assets/images/tatumONeal.jpg' alt='Tatum O'Neal'>",
    fact: "Tatum O'Neal won Best Supporting Actress at the age of 10 for her role in Paper Moon."
}

var q3 = {
    question: "Which year were the Academy Awards first televised?",
    answers: ["1953", "1960", "1949", "1965"],
    correct: "1953",
    image: "<img src='assets/images/firstTvOscars.jpg' alt='First Televised Oscars'>",
    fact: "The first Academy Awards ceremony was held in 1929 but the event was not televised unil 1953."
}

var q4 = {
    question: "Which actor won an Oscar for protraying another Oscar winner?",
    answers: ["Cate Blanchett", "Tom Hanks", "Michelle Williams", "Robert Downey Jr."],
    correct: "Cate Blanchett",
    image: "<img src='assets/images/cateBlanchett.jpg' alt='Cate Blanchett'>",
    fact: "Cate Blanchett portrayed Audrey Hepburn in the movie The Aviator."

}

var q5 = {
    question: "Meryl Streep has been nominated for an Oscar a record 21 times, at what age did she win her first Oscar?",
    answers: ["37", "52", "22", "29"],
    correct: "29",
    image: "<img src='assets/images/merylStreep.jpg' alt='Meryl Streep'>",
    fact: "Meryl Streep won her first Oscar for her role in Sophie's Choice."
}

var q6 = {
    question: "Who is the oldest person to be nominated for an Academy Award in the acting or directing categories?",
    answers: ["Clint Eastwood", "Robert Altman", "Woody Allen", "Christopher Plummer"],
    correct: "Christopher Plummer",
    image: "<img src='assets/images/christopherPlummer.jpg' alt='Christopher Plummer'>",
    fact: "This year, Christopher Plummer became the oldest person nominated for an Oscar for his role in All The Money In The World."
}

var q7 = {
    question: "For which comedy did Tom Hanks receive his first Oscar nomination?",
    answers: ["A League of Their Own", "Sleepless in Seattle", "Splash", "Big"],
    correct: "Big",
    image: "<img src='assets/images/big.jpg' alt='Big'>",
    fact: "Tom Hanks has been nominated for a total of 5 Oscars."
}

var q8 = {
    question: "Which Oscar winner started her acceptance speech with, 'You like me. You really like me!'?",
    answers: ["Meryl Streep", "Diane Keaton", "Sally Field", "Annette Benning"],
    correct: "Sally Field",
    image: "<img src='assets/images/sallyField.jpg' alt='Sally Field'>",
    fact: "Sally Field won the 1985 Oscar for her role in Places in the Heart"
}

var q9 = {
    question: "In the 90 years of the Academy Awards, how many times has a musical won Best Picture?",
    answers: ["2", "10", "21", "14"],
    correct: "10",
    image: "<img src='assets/images/chicago.jpg' alt='Chicago'>",
    fact: "The most recent musical to win Best Picture was Chicago in 2002."
}

var q10 = {
    question: "Who has hosted the most Academy Awards?",
    answers: ["Bob Hope", "Johnny Carson", "Billy Crystal", "Whoopi Goldberg"],
    correct: "Bob Hope",
    image: "<img src='assets/images/bobHope.jpg' alt='Bob Hope'>",
    fact: "Bob Hope hosted the Academy Awards 19 times."
}

var q11 = {
    question: "Who has won the most Academy Awards ever?",
    answers: ["Walt Disney", "Katharine Hepburn", "Jack Nicholson", "Meryl Streep"],
    correct: "Walt Disney",
    image: "<img src='assets/images/waltDisney.jpg' alt='Walt Disney'>",
    fact: "Walt Disney has won a total of 26 Oscars, 22 competitive and 4 honorary."
}

var q12 = {
    question: "What was the last film to receive nominations in all four major acting categories?",
    answers: ["Bonnie and Clyde", "Three Billboards Outside Ebbing Missouri", "Titanic", "American Hustle"],
    correct: "American Hustle",
    image: "<img src='assets/images/americanHustle.jpg' alt='American Hustle'>",
    fact: "American Hustle was nominated for four Oscars but unfortunately did not win any."
}

var q13 = {
    question: "Who was the first female director to win Best Director?",
    answers: ["Lina Wertmuller", "Kathryn Bigelow", "Jane Campion", "Sofia Coppola"],
    correct: "Kathryn Bigelow",
    image: "<img src='assets/images/kathrynBigelow.jpg' alt='Kathryn Bigelow'>",
    fact: "Kathryn Bigelow won for The Hurt Locker in 2010. She is the only woman to ever win Best Direcor."
}

var q14 = {
    question: "Which film series has won more than one Academy Award for Best Picture?",
    answers: ["Rocky", "James Bond", "The Godfather", "The Lord of The Rings"],
    correct: "The Godfather",
    image: "<img src='assets/images/theGodfather.jpg' alt='The Godfather'>",
    fact: "The Godfather is the only series to win more than one Best Picture award, winning for The Godfather in 1972 and The Godfather: Part II in 1974."
}

var q15 = {
    question: "Who was the first African American to win an Academy Award?",
    answers: ["Halle Berry", "Dorothy Dandridge", "Denzel Washington", "Hattie McDaniel"],
    correct: "Hattie McDaniel",
    image: "<img src='assets/images/hattieMcDaniel.jpeg' alt='Hattie McDaniel'>",
    fact: "Hattie McDaniel was the first African American to win an Academy Award when she won Best Actress for Gone with the Wind in 1940. She accepted her award inside a segregated, 'no blacks' hotel."
}

// create array containing all objects  
var questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15];
// create an array to push the used questions into
var questionNumber = [];
// global variables
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

        // if the number is not in the question number array, run chooseQuestion function
        if (questionNumber.indexOf(qNum) === -1) {
            chooseQuestion();
            questionNumber.push(qNum);
        }

        // if the length of both arrays match that means there are no more questions to be asked without repeating so run the scorecard function
        else if (questionNumber.length === questions.length) {
            scoreCard();
        }

        // if the number is already in the array then rerun the randomNumber function to find one that is not
        else {
            randomNumber();
        }

    };

    function chooseQuestion() {
        // empty out the necessary divs
        $("#correctAnswer").empty();
        $("#correctImage").empty();
        $("#result").empty();
        $("#factArea").empty();

        // reset the time left to 30 seconds
        timeLeft = 30;

        // detach the start button
        $("#startButton").detach();

        // push that question index of the questions array and add it to the asked array
        qChosen = questions[qNum];

        // display the question  and answers in the appropriate div
        $("#question").html(qChosen.question);

        // display the timer
        $("#timer").html(timeLeft);

        shuffleAnswers();

        createButtons();

        runTimer();

    };

    // function to create buttons for each answer
    function createButtons() {
        for (var i = 0; i < qChosen.answers.length; i++) {
            var answerButton = $("<button>");
            answerButton.addClass("answer btn btn-block");
            answerButton.attr("value", qChosen.answers[i]);
            answerButton.html(qChosen.answers[i]);
            $("#answerOptions").append(answerButton);
        }
    };

    // start the interval for counting down each question
    function runTimer() {
        qTimer = setInterval(function () {
            $("#timer").html(--timeLeft);
        }, 1000);

        // start the timeout so that after 30 seconds it automatically runs the displayAnswer function
        timesUp = setTimeout(function () {
            totalWrong = totalWrong + 1;
            $("#result").html("<h2>Time's Up!</h2>");
            displayAnswer();
        }, 31 * 1000);
    };


    // function to shuffle the answer array in order to randomize the order in which the answer options show up
    function shuffleAnswers() {
        for (var i = 0; i < qChosen.answers.length; i++) {
            // choose another number between 0 and the length of the answers array
            var j = Math.floor(Math.random() * (i + 1));

            // swith the array items for i and j with each other
            var newPos = qChosen.answers[i];
            qChosen.answers[i] = qChosen.answers[j];
            qChosen.answers[j] = newPos;
        }
    };

    function checkCorrect(event) {
        // get the value of the button clicked
        var answerClicked = $(event.target).attr("value");

        // if the value of the button clicked is equal to the correct answer
        if (answerClicked === qChosen.correct) {
            // add one to the total correct
            totalCorrect = totalCorrect + 1;

            // display Right in the result div and run display answer
            $("#result").html("<h2>Right!</h2>");
            displayAnswer();
        }

        // if the value of the button does not match
        else {
            // add one to the total wrong
            totalWrong = totalWrong + 1;

            // display Wrong in the result div and run display answer
            $("#result").html("<h2>Wrong!</h2>");
            displayAnswer();
        }
    }

    // function to display answer
    function displayAnswer() {
        // stop the interval and timeout no matter where they are at
        clearInterval(qTimer);
        clearTimeout(timesUp);

        // empty out the necessary divs
        $("#question").empty();
        $("#timer").empty();
        $("#answerOptions").empty();

        // display the correct answer as well as the associate image
        $("#correctAnswer").html("The correct answer is <strong>" + qChosen.correct + "</strong>.");
        $("#correctImage").html(qChosen.image);
        $("#factArea").html(qChosen.fact);

        // set timeout for how long before going to the next question
        setTimeout(randomNumber, 7 * 1000);
    };

    // function to show the results at the end of the game
    function scoreCard() {
        // empty out the necessary divs
        $("#correctAnswer").empty();
        $("#correctImage").empty();
        $("#factArea").empty();

        // display the results of the game
        $("#result").html("<h2>Your Score: </h2><br />");
        $("#result").append("Total Correct: " + totalCorrect);
        $("#result").append("<br />Total Wrong: " + totalWrong);

        if (totalCorrect > 10) {
            $("#gameOverMessage").html("You're an Oscar Expert!");
        }

        else if (totalCorrect < 6) {
            $("#gameOverMessage").html("You've got a lot of Oscar learning to do!");
        }

        else {
            $("#gameOverMessage").html("You know a lot about the Oscars, but there's more to learn!");
        }

        // create a new button to play again
        var newGame = $("<button>");
        newGame.addClass("startNew");
        newGame.html("Play Again");
        $("#playAgain").append(newGame);
    };

    // reset function
    function reset() {
        questionNumber.length = 0;
        timeLeft = 30;
        qChosen = "";
        qTimer = "";
        timesUp = "";
        qNum = ""
        totalCorrect = 0;
        totalWrong = 0;
        $(".startNew").detach();
        $("#playAgain").empty();
        $("#gameOverMessage").empty();
        randomNumber();
    }

    // when play game is clicked, game begins
    $("#startButton").on("click", randomNumber);

    // when player clicks on an answer run the checkCorrect function
    $(document).on("click", ".answer", checkCorrect);

    // when player clickes to play again, run reset function
    $(document).on("click", ".startNew", reset);

});