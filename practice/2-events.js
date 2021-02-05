function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1
}

window.addEventListener('DOMContentLoaded', function () {

  // 1. use final code from practice/1-dom.js to modify dice
  // 2. add event listener when user clicks "Roll"
  // 3. on click event:
  //    a. get the user-entered player name from the input
  //    b. insert <li> with player name and dice total: `<li>______ rolled __</li>

  // ⬇️ ⬇️ ⬇️ YOUR CODE GOES HERE ⬇️ ⬇️ ⬇️
  let die1  = getRandomInt(6)
  let die2 = getRandomInt(6)
  let value = die1 + die2

  let dice = document.querySelector('.dice')
  console.log(dice)

  dice.innerHTML = `
  <img src="../images/dice/${die1}.png" class="die w-1/2 md:w-1/6">
  <img src="../images/dice/${die2}.png" class="die w-1/2 md:w-1/6">`

  let rollButton = document.querySelector('#roll-button')
    rollButton.addEventListener(`click`, function(event){
    let outputElement = document.querySelector('.result')
    outputElement.insertAdjacentHTML('beforeend', `
    <div>
    </div>
    <p> ${value} </p>`)
    
})
  // ⬆️ ⬆️ ⬆️ YOUR CODE ENDS HERE. DON'T CHANGE ANY OTHER CODE ⬆️ ⬆️ ⬆️
})
