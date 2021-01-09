// Timer
// questions
// score

var indexQuestions = 0;

//getting all requiered elements
var starBtn = document.querySelector("#startBtn");
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
// Creating an array of objects for questions, answers, and options.
var questions = [
  {
    question: "what is html coding used for?",
    answerIndex: 0,
    choices: [
      "html is used to create electronic documents that are displayed on the World Wide Web",
      "html is hypertext",
      "html is microsoft word",
    ],
  },
  {
    question: "what does Css stand for?",
    answerIndex: 1,
    choices: [
      "css stands for collins safe and sorry",
      "Css stands for Cascading Style Sheets",
      "Css saves a lot pf work",
    ],
  },
  {
    question: "what is the fuction of Javascript?",
    answerIndex: 2,
    choices: [
      "Js adds styling",
      "Js is the body of a Website",
      "Js adds dynamic and intereactive elements to websites",
    ],
  },
];
function displayQuestion() {
  questionnaire.style.display = "block";
  question.textContent = questions[indexQuestions].question;
  answerA.textContent = questions[indexQuestions].choices[0];
  answerB.textContent = questions[indexQuestions].choices[1];
  answerC.textContent = questions[indexQuestions].choices[2];
}

function start() {
  displayQuestion();
}

answerA.addEventListener("click", function () {
  // show next question
  // check for correct or wrong answer
  if (0 === questions[indexQuestions].answerIndex) {
    console.log("correct");
  } else {
    console.log("wrong");
  }
  indexQuestions++;
  displayQuestion();
});
answerB.addEventListener("click", function () {
  // show next question
  if (1 === questions[indexQuestions].answerIndex) {
    console.log("correct");
  } else {
    console.log("wrong");
  }
  indexQuestions++;
  displayQuestion();
});
answerC.addEventListener("click", function () {
  // show next question
  if (2 === questions[indexQuestions].answerIndex) {
    console.log("correct");
  } else {
    console.log("wrong");
  }
  indexQuestions++;
  displayQuestion();
});

document.getElementById("startBtn").addEventListener("click", start);
