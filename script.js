
var userGuess = document.querySelector(".gues");
var guessBtn = document.querySelector(".guess-button");
var guessNum = document.querySelector(".guess-number");
var random = randomNumber();
var highLow = document.querySelector(".too-high-low");
var clearBtn = document.querySelector(".clear-btn")
var resetBtn = document.querySelector(".reset-button")

clearBtn.addEventListener("click", function(event){
  event.preventDefault()
  clearText()
  console.log(userGuess.value)
})

guessBtn.addEventListener("click", function(event){
  event.preventDefault()
  guessdisplay()
  checkGuess()
})

resetBtn.addEventListener("click", function(){
  window.location.reload(true);
})

function randomNumber(){
  return Math.floor((Math.random() * 100) + 1);}
function clearText(){
  userGuess.value = ""
};
function guessdisplay(){
  var val = parseInt(userGuess.value)
  guessNum.innerText = val
};
function minMax(){
  parseInt(min.value, max.value)
  event.preventDefault();
  Math.min("min, max");
  Math.max("max, min");
  console.log("i can see")
};
function checkGuess(){
  var val = parseInt(userGuess.value);
  if (val < random){
    highLow.innerText = "thats too low"
  }
  else if (val > random){
    highLow.innerText = "thats too high"
  }
  else {
    highLow.innerText = "BOOM das right!"
  }
};

console.log(random)
