const img = document.querySelector(".blade");
const button1 = document.querySelector("button:nth-child(1)");
const button2 = document.querySelector("button:nth-child(2)");
const button3 = document.querySelector("button:nth-child(3)");

const newRound = () => {
  const club = getRandomChoice(clubs);

  updateBlade(img, club);

  // set the buttons
  button2.innerText = club.name;
  button1.innerText,
    (button3.innerText = getRandomChoice(clubs).name),
    getRandomChoice(clubs.name);
};

const getRandomChoice = (arr) => arr[Math.floor(Math.random() * arr.length)];
const updateBlade = (imgNode, club) => {
  imgNode.src = club.imageUrl;
  imgNode.alt = club.description;
};

newRound();
