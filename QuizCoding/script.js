// Timer
// questions
// score

var indexQuestions = 0;

//getting all requiered elements
var startBtn = document.querySelector("#startBtn");
var timerEl = document.querySelector("#timer");
var questions = document.querySelector("#questons");
var choice = document.querySelector("a");
var choice = document.querySelector("b");
var choice = document.querySelector("c");
var continueBtn = document.querySelector("#continueBtn");
var questionnaire = document.querySelector("#questionnaire");
var question = document.querySelector("#question");
var answerA = document.querySelector("#answerA");
var answerB = document.querySelector("#answerB");
var answerC = document.querySelector("#answerC");
var scores = document.querySelector("#scores");
var scoreBoard = document.querySelector('#scoreBoard');

var rightAnswers = 0;
var wrongAnswers = 0;
// Creating an array of objects for questions, answers, and options.
var questions = [
  {
    question: "1)what is html used for?",
    answerIndex: 0,
    choices: [
      " Html is used to create electronic documents that are displayed on the World Wide Web.",
      " Html is hypertext.",
      " Html is microsoft word.",
    ],
  },
  {
    question: "2)what does Css stand for?",
    answerIndex: 1,
    choices: [
      " Css stands for collins safe and sorry.",
      " Css stands for Cascading Style Sheets.",
      " Css saves a lot of work.",
    ],
  },
  {
    question: "3)what is the fuction of Javascript?",
    answerIndex: 2,
    choices: [
      " Javascript adds styling.",
      " Javascript is the body of a Website.",
      " Javascript adds dynamic and intereactive elements to websites.",
    ],
  },
];

// WHEN I click on the Start button, the Start function will be executed.
// The Start button will hide and the displayQuestion function will be executed.
function start() {
  startBtn.classList.add("hide");
  setTime();
  displayQuestion();
}

function scoreboard() {
  //save current score
  var storage = localStorage.getItem("highScores");
  storage = storage + "," + rightAnswers;
  localStorage.setItem("highScores", storage);
  // displaying high scores

  var array = storage.split(",");
  console.log(array);
  for (var i = 0; i < array.length; i++) {
    var listTag = document.createElement("li");
    listTag.textContent = array[i];
    scores.appendChild(listTag);
    }
    scoreBoard.style.display = "block"; 
  }
  
  
var seconds = 0;

function setTime() {
  var interval = setInterval(function () {
    seconds++;
    timerEl.textContent = "Seconds: " + seconds;
    if (seconds === 10) {
      clearInterval(interval);
      // var questionnare to hide
      questionnaire.style.display = "none";
      // score board
      alert('Game Over!');
      scoreboard();
    }
  }, 1000);
}

function displayQuestion() {
  questionnaire.style.display = "block";
  question.textContent = questions[indexQuestions].question;
  answerA.textContent = questions[indexQuestions].choices[0];
  answerB.textContent = questions[indexQuestions].choices[1];
  answerC.textContent = questions[indexQuestions].choices[2];
}

answerA.addEventListener("click", function () {
  // show next question
  // check for correct or wrong answer
  if (0 === questions[indexQuestions].answerIndex) {
    alert("Correct");
    rightAnswers++;
  } else {
    alert("wrong");
    wrongAnswers++;
  }

  indexQuestions++;
  displayQuestion();
});

answerB.addEventListener("click", function () {
  // show next question
  if (1 === questions[indexQuestions].answerIndex) {
    alert("Correct");
    rightAnswers++;
  } else {
    alert("wrong");
    wrongAnswers++;
  }
  indexQuestions++;
  displayQuestion();
});

answerC.addEventListener("click", function () {
  // show next question
  if (2 === questions[indexQuestions].answerIndex) {
    alert("Correct");
    rightAnswers++;
  } else {
    alert("wrong");
    wrongAnswers++;
  }
  indexQuestions++;
  displayQuestion();
});

document.getElementById("startBtn").addEventListener("click", start);
