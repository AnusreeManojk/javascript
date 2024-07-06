let player ={
  name:"Anu",
  chips:200,
   sayHello:function(){
    console.log("Heloo!")
   }
}
player.sayHello()
// let firstcard = getRandomCard()
// let secondcard = getRandomCard()
let cards = []
let sum = 0
hashBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let playerEl=document.getElementById("player-el")
playerEl.textContent= player.name+": $" + player.chips
// console.log(playerEl)
// let player = {
//   Name: "Anu",
//   Chips: 145
// }

// let playerEl = document.getElementById("player-el")
// playerEl.textContent = player.Name + ":$" + player.Chips
// console.log(cards)
function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1
  if (randomNumber > 10) {
    return 10
  } else if (randomNumber === 1) {
    return 11
  } else {
    return randomNumber
  }
}
function startGame() {
  isAlive = true
  let firstcard = getRandomCard()
  let secondcard = getRandomCard()
  cards = [firstcard + secondcard]
  sum=firstcard+secondcard
  renderGame()

}

function renderGame() {

  cardsEl.textContent = "Cards: "
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " "
  }
  sumEl.textContent = "Sum:" + sum
  if (sum <= 20) {
    message = "Do you want to draw a new card?"
    hashBlackJack = true
  }
  else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!"
  }

  else {
    message = "You are out of the game!"
    isAlive = false
  }
  messageEl.textContent = message
}

function newCard() {
  // console.log("Drawing a new card from the deck!")
  if (isAlive === true || hashBlackJack === false) {
    let card = getRandomCard()
    sum += card
    console.log(cards)
    cards.push(card)
    renderGame()
  }

}
// let randomNumber1=Math.floor(Math.random()*6)+1
// console.log(randomNumber1)

// function rollDice(){
//     let randomNumber1=Math.floor(Math.random()*6)+1
// return randomNumber1
// }
// console.log(rollDice())

// objezt sneakpeak
// 50intro to objects
                                        