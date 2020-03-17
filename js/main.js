let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let lizard = document.getElementById('lizard');
let spock = document.getElementById('spock');
let playerChoice;
let botChoice;

const chooseItem = (buttonItem, playerItem, botItem) =>{
buttonItem.addEventListener('click', () =>{
    playerChoice = playerItem;
    checkWinner(playerChoice);
  });
};

chooseItem(rock, 'rock');
chooseItem(paper, 'paper');
chooseItem(scissors, 'scissors');
chooseItem(spock, 'spock');
chooseItem(lizard, 'lizard');

function checkWinner(choice){
  fetch(`/calculateWinner?playerChoice=${choice}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      console.log(playerChoice);
      console.log(botChoice);
      document.getElementById('displayBotChoice').innerHTML =

    });
  };
