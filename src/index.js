const img = document.querySelector(".blade");
const button1 = document.querySelector("button:nth-child(1)");
const button2 = document.querySelector("button:nth-child(2)");
const button3 = document.querySelector("button:nth-child(3)");

const checkAnswer = (event) => {
  event.preventDefault();

  if (event.target.value === answer) {
    console.log("victory!");
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

  // set the buttons

  button1.innerText = wrongChoice1.name;
  button1.value = wrongChoice1.name;

  button2.innerText = club.name;
  button2.value = club.name;

  button3.innerText = wrongChoice2.name;
  button3.value = wrongChoice2.name;
};

const getRandomChoice = (arr) => arr[Math.floor(Math.random() * arr.length)];
const updateBlade = (imgNode, club) => {
  imgNode.src = club.imageUrl;
  imgNode.alt = club.description;
};



newRound();
