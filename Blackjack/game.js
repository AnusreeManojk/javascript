// 2 Add the firstcard, secondcard, and sum
let firstcard=10
let secondcard=4
let cards=[firstcard, secondcard]                                
let sum= firstcard+ secondcard
hashBlackJack=false
let isAlive=true
let message=""
// console.log(sum)
    // 3 if...else conditionals
// if(sum<21) {
//     console.log("Do you want to draw a new card?")
// }   else if( sum === 21)  {
//     console.log("Wohoo! You've got Blackjack!")
// }      else    {
//     console.log("You are out of the game!")
// }     
// firs if...else
// if (sum<=20){
//     console.log("Do you want to draw a new card?")
//     hashBlackJack=true
// }
// else if( sum === 21)  {
//     console.log("Wohoo! You've got Blackjack!")
// }    

// else    {
//     console.log("You are out of the game!")
//     isAlive=false
// }     

// console.log(hashBlackJack)     
// console.log(isAlive)
                                                                                                                                           

// add isAlive variable
// 13:make the start button work
let messageEl=document.getElementById("message-el")
// console.log(messageEl)
let sumEl=document.getElementById("sum-el")
// store the cards paragraph in a variable called cardsEl
let cardsEl=document.getElementById("cards-el")

function startGame(){
    renderGame()
}

function renderGame(){
    // render out  firstCard and secondCard
    // cardsEl.textContent="Cards: "+cards[0] + " "+cards[1]
    cardsEl.textContent="Cards: "
    // render out all the cards we have


    // create a for loop that render out all the carrds instead of just two
    for(let i=0;i < cards.length; i++){
        cardsEl.textContent += card[i]
    }
    sumEl.textContent="Sum:" +sum
    if (sum<=20){
        message="Do you want to draw a new card?"
        hashBlackJack=true  
    }
    else if( sum === 21)  {
        message="Wohoo! You've got Blackjack!"
    }    
    
    else    {
        message="You are out of the game!"
        isAlive=false
    }  
    messageEl.textContent=message   
}
                      
// 14:display the message
    //   15:display the sum
// 16:display the cards
// new card button
function newCard(){
    console.log("Drawing a new card from the deck!")
    // create a card variable
    let card=6
    // 2. add the new card to the sum variable
    sum+=card
    console.log(cards)
    cards.push(card)
    // 3.startgame
    renderGame()
}         
// solving our cards problem with an array
// Arrays are ordered list of items
// 25:creating the cards array  
// 26: push a new card to the  array  
// counting in javascript

