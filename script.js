// Buttoms

let btnRoll = document.querySelector(".btn--roll");
let btnHold = document.querySelector(".btn--hold");
let btnNew = document.querySelector(".btn--new");

// Dice Image

let diceImage = document.querySelector(".dice");
diceImage.style.display = "none";

// Variables

let currentScore = 0;
let activePlayer = 0;
let score = [0, 0];
let gameOver = true;


function switchPlayer(){
  currentScore = 0
  document.getElementById(`current--${activePlayer}`).textContent = currentScore


  activePlayer = activePlayer == 0 ? 1 : 0

  document.querySelector(".player--0").classList.toggle("player--active")
  document.querySelector(".player--1").classList.toggle("player--active")

}




btnRoll.addEventListener("click", () => {

  if(gameOver){

    diceImage.style.display = "block";
  
    let random = Math.floor(Math.random() * 6 + 1)
    diceImage.src = `dice-${random}.png`
  
    if(random !== 1){
  
      currentScore += random;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore
  
    }else{
      switchPlayer()
    }

  }

})



btnHold.addEventListener("click", () => {
  if(gameOver){
    score[activePlayer] += currentScore
    document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer]
    
    if(score[activePlayer] >= 10){
      document.querySelector(`.player--${activePlayer}`).classList.toggle("player--winner")
      gameOver = false
    }else{
      switchPlayer()
    }

  }
})



btnNew.addEventListener("click", () => {
  document.querySelector(".player--0").classList.add("player--active")
  document.querySelector(".player--1").classList.remove("player--active")
  document.getElementById(`current--0`).textContent = 0
  document.getElementById(`current--1`).textContent = 0
  document.getElementById(`score--0`).textContent = 0
  document.getElementById(`score--1`).textContent = 0
  document.querySelector(`.player--${activePlayer}`).classList.remove("player--winner")
})






