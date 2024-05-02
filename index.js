
let wins = 0;
let losses = 0;
function Coin(choice) {
  const resultDisplay = document.getElementById("result");
  const scoreDisplay = document.getElementById("score");
  const randomNumber = Math.random(); 
  let coinSide;
  let coinImage;
  if (randomNumber < 0.5) {
    coinSide = "орёл";   
     coinImage = "https://pngimg.com/d/coin_PNG3561.png"; 
  } else {
    coinSide = "решка";   
     coinImage = "https://upload.wikimedia.org/wikipedia/commons/0/07/US_Half_Dollar_Obverse_2015.png"; // Путь к изображению решки

  
  }
  const result = coinSide === choice ? " You win!" : "You lose!";
  resultDisplay.innerHTML = `<p>${result}</p><img src="${coinImage}" alt="${coinSide}">`;
  if (coinSide === choice) {
    wins++;
  } else {
    losses++;
  }
  updateScore();
}
function updateScore() {
  const scoreDisplay = document.getElementById("score");
  scoreDisplay.textContent = `Wins: ${wins}, Loses: ${losses}`;
}