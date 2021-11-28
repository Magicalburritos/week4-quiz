const startButton = document.getElementById('start-btn');
const questionContainerElement = document.getElementById('question-container');

startButton.addEventListener('click', startGame);

function startGame() {
  console.log('started');
  startButton.classList.add('hide');
  questionContainerElement.classList.remove('hide');
  setNextQuestion();
}
function setNextQuestion() {}

function selectAnswer() {}

const questions = [
  {
    question:
      'string values must be enclosed within ___ when being assigned to variables',
    answers: [
      { text: 'commas', correct: false },
      { text: 'curly brackets', correct: true },
      { text: 'quotes', correct: false },
      { text: 'parenthesis', correct: false },
    ],
  },
];
