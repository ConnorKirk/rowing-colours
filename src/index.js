const img = document.querySelector(".blade");
const button1 = document.querySelector("button:nth-child(1)");
const button2 = document.querySelector("button:nth-child(2)");
const button3 = document.querySelector("button:nth-child(3)");
const attemptsCounter = document.querySelector("span.attempts");
const scoreCounter = document.querySelector("span.correct");

let score = 0;
let attempts = 0;

const incrementScore = () => {
  score++;
  scoreCounter.innerText = score;
};

const incrementAttempts = () => {
  attempts++;
  attemptsCounter.innerText = attempts;
};

const shuffle = (a) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const checkAnswer = (event) => {
  event.preventDefault();

  incrementAttempts();

  if (event.target.value === answer) {
    console.log("victory!");
    incrementScore();
    newRound();
  } else {
    console.log("fail");
  }
};

const buttons = document.querySelectorAll("button.choice");
buttons.forEach((button) => {
  button.addEventListener("click", checkAnswer);
});

let answer = "";

const newRound = () => {
  const club = getRandomChoice(clubs);
  const wrongChoice1 = getRandomChoice(clubs);
  const wrongChoice2 = getRandomChoice(clubs);

  answer = club.name;
  updateBlade(img, club);

  const arr = [club, wrongChoice1, wrongChoice2];
  shuffle(arr);

  // set the buttons

  button1.innerText = arr[0].name;
  button1.value = arr[0].name;

  button2.innerText = arr[1].name;
  button2.value = arr[1].name;

  button3.innerText = arr[2].name;
  button3.value = arr[2].name;
};

const getRandomChoice = (arr) => arr[Math.floor(Math.random() * arr.length)];
const updateBlade = (imgNode, club) => {
  imgNode.src = club.imageUrl;
  imgNode.alt = club.description;
};



newRound();
