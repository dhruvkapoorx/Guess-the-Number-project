
let randomNumber = parseInt(Math.random() * 100 + 1 )
// setInterval(function(){
//   const randomNumber = parseInt(Math.random() * 100 + 1 )
//   hiToLo.innerHTML = randomNumber
// }, 1000)

const submit = document.querySelector('#subt')

const input = document.querySelector(".guessField")
const previousGuess = document.querySelector(".guesses")
const remaining = document.querySelector('.lastResult')
const hiToLo = document.querySelector(".lowOrHi")
const result = document.querySelector(".resultParas")

const p = document.createElement('p')

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
  submit.addEventListener('click', (e) => {
  e.preventDefault()
 const guess = parseInt(input.value)
 console.log(guess)
 validateGuess(guess)
  })
}

function validateGuess(guess){
 if(isNaN(guess)){
 alert(`Enter a number `)
 }
 else if (guess < 0){
  alert (`Enter a valid number < 1`)
 }
 else if (guess > 100 ){
  alert (`Enter a valid number > 100 `)
 }
 else {
  prevGuess.push(guess)
  if (numGuess === 11){
    displayGuess(guess)
    displayMessage(`Game over ! The Random Number was ${randomNumber}`)
    endGame()
  }
  else {
    displayGuess(guess)
    checkGuess(guess)
  }
 }
}
function checkGuess(guess){
 
  if (guess === randomNumber){
    displayMessage(`You guessed it right!`)
    endGame()
  }
  else if (guess < randomNumber){
    displayMessage(`Value too LOW!`)
  }
  else if (guess > randomNumber){
    displayMessage(`Value too High!`)
  }
 
}
function displayGuess(guess){
  input.value = '';
  previousGuess.innerHTML += `${guess}  `
  numGuess ++
  remaining.innerHTML = `${12 - numGuess }`

}
function displayMessage(message){
  hiToLo.innerHTML = `<h4 style = "color : #ffdf ">${message}</h4>`
}
function endGame(){
  input.value = '';
  input.setAttribute('disabled' , '')
  p.classList.add('button')
  p.innerHTML = `<h2 id = "newGame" style = " cursor : pointer "> Start new Game! </h2>`
  result.appendChild(p)
 playGame = false;
 newGame()
}
function newGame(){
 const startNewGame = document.querySelector('#newGame')
 startNewGame.addEventListener('click' , function (e){
 randomNumber =  parseInt(Math.random() * 100 + 1 )
  prevGuess = [];
  numGuess = 1;
  previousGuess.innerHTML = '';
  remaining.innerHTML = `${12 - numGuess }`
  input.removeAttribute('disabled')
  result.removeChild(p)
  playGame = true;
 })

}