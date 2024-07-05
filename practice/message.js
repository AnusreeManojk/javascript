  let firstcard=18
  let secondcard=3
  let sum= firstcard+ secondcard
  
  let message=""
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
console.log(message)
   