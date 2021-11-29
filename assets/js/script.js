const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click', startGame);

function startGame() {
  startButton.classList.add('hide');
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove('hide');
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}
function resetState() {
  nextButton.classList.add('hide');
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide');
  } else {
    startButton.innerText = 'Restart';
    startButton.classList.remove('hide');
  }
}

// scoreboard
var endGame = function () {
  window.alert("The game has now ended. Let's see how you did!");

  var highScore = localStorage.getItem('highscore');
  if (highScore === null) {
    highScore = 0;
  }

  if (playerInfo.money > highScore) {
    localStorage.setItem('highscore');
    localStorage.setItem('name');

    alert(playerInfo.name + ' now has the high score of ' + countdown + '!');
  } else {
    alert(
      playerInfo.name +
        ' did not beat the high score of ' +
        highScore +
        '. Maybe next time!'
    );
  }

  var playAgainConfirm = window.confirm('Would you like to play again?');

  if (playAgainConfirm) {
    startGame();
  } else {
    window.alert('Thanks for playing!');
  }
};

// questions and answers

const questions = [
  {
    question:
      'String values must be enclosed within ___ when being assigned to variables',
    answers: [
      { text: 'commas', correct: false },
      { text: 'curly brackets', correct: true },
      { text: 'quotes', correct: false },
      { text: 'parenthesis', correct: false },
    ],
  },

  {
    question:
      'Which of the following type of variable is visible everywhere in your JavaScript code?',
    answers: [
      { text: 'global variable', correct: true },
      { text: 'local variable', correct: false },
      { text: 'both', correct: false },
      { text: 'none', correct: false },
    ],
  },
  {
    question:
      'Which built-in method calls a function for each element in the array?',
    answers: [
      { text: 'while()', correct: false },
      { text: 'loop()', correct: false },
      { text: 'forEach()', correct: true },
      { text: 'none of the above', correct: false },
    ],
  },
];

// timer
const startingMinutes = 1;
let time = startingMinutes * 60;

const countdownEl = document.getElementById('countdown');
setInterval(updateCountdown, 1000);

function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? '0' + seconds : seconds;

  countdownEl.innerHTML = `${minutes}: ${seconds}`;
  time--;
  time = time < 0 ? 0 : time;
}
