// in javascript we need to specify everything because javascript is literal.
// for count specify,where should we start,where is the finish line,what is the stepsize we should use

//     START        FINISH    STEPSIZE
for (let count =1; count<21; count +=1){
    console.log(count)
}
for (let count =10; count<21; count +=1){
    console.log(count)
}
                                    
// 28
for(let count=10;count<100;count+=10)
{
    console.log(count)
}
for(let i=10;i<101;i+=10)
{
    console.log(i)
}
// 29:for loops and arrays
let messages=[
    "Hey, how's it going?",
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately.",
    "Same here!",
    "Great to hear"
]
// console.log(messages[0])
// console.log(messages[1])
// console.log(messages[2])
// console.log(messages[3])
// for(i=0;i<5;messages[i]+=1){
//     console.log(i)
// }
// 30:array based loop         

let cards=[7,3,9]         
for(let i=0;i<cards.length;i++) {
 console.log(cards[i])
}                   
let sentence =["Hello", "my ","name","is","Anu"]
let greetingEl =document.getElementById("greeting-el")
for(i=0;i<sentence.length;i++){
    greetingEl.tetxcontent =sentence[i]
}
  