const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');

startButton.addEventListener('click', startGame);

function startGame() {
  console.log('started');
  startButton.classList.add('hide');
  questionContainerElement.classList.remove('hide');
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffleQuestions[currentQuestionIndex]);
}

function showQuestion() {
  questionContainerElement.innerHTML = question.question;
  question.answer.forEach((answer) => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
    answer.ButtonsElement.appenedChild(button);
  });
}
function resetState() {
  nextButton.classList.add('hide');
  while (answerButtonsElement.fristChild) {
    answerButtonsElement.removeChild(answerButtonsElement.fristChild);
  }
}

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
