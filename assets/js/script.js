const startButton = document.getElementById('start-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const startText = document.getElementById('start-txt');
let currentQuestionIndex;
const startingMinutes = 1;
let time = startingMinutes * 60;
const countdownEl = document.getElementById('countdown');
let previous;
startButton.addEventListener('click', startGame);

function startGame() {
  startButton.classList.add('hide');
  startText.style.display = 'none';
  updateCountdown;
  setInterval(updateCountdown, 1000);
  questionContainerElement.classList.remove('hide');
  setNextQuestion();
}

function setNextQuestion() {
  while (previous === currentQuestionIndex) {
    currentQuestionIndex = Math.floor(Math.random() * questions.length);
  }

  previous = currentQuestionIndex;
  showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
  resetState();
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    if (answer.correct) {
      button.classList.add('correct');
    }
    button.addEventListener('click', selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correctAnwser = selectedButton.classList.contains('correct');

  if (correctAnwser === true) {
    setNextQuestion();
  } else {
    time -= 10;
  }
}

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
function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? '0' + seconds : seconds;

  countdownEl.innerHTML = `${minutes}: ${seconds}`;
  time--;
  time = time < 0 ? 0 : time;
}
