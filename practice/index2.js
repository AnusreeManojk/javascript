let cards =[7,3,9]
for(let i=0; i<cards.length;i++){
    console.log(cards[i])
}

// 31:for loops, arrays and DOM
let sentence=["Hello","my","name","is","Per"]
let greetingEl=document.getElementById("greeting-el")
for (let i=0; i<sentence.length;i++){
    greetingEl.textContent +=sentence[i] + " "
}