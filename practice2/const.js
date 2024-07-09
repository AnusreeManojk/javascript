// const player="Anu"
// const opponent="Abhi"
// const game="AmazingFighter"
// let points=0
// let hasWon=false

// // playing the game
// points +=100
// hasWon=true
// // announsing the winner
// if (hasWon){
//     console.log(`
//    ${ player}  got ${points} points and won the ${game} game `)

// }else{``
//     console.log(`The winner is${opponent} !${player}lost the game`)
// }

// log out items in an array
// let  myCourses=["Learn  CSS Animations","UI Design Fundamentals","Intro to Clean Code"]
// function logItems(arr){
//     for (let i=0; i< arr.length;i++){
//         console.log(arr[i])
//     }
// }
// logItems(myCourses)
// save to local storage
// localStorage.setItem("myCredits","100")
// let myCredits= localStorage.getItem("myCredits")
// console.log(myCredits)
// addEventListener and object in array
let data=[
    {
        player:"Jane",
        score:52
    },
    {
        player:"Mark",
        score:41
    }
]

const janeBtn =document.getElementById("jane-Btn")
janeBtn.addEventListener("click",function(){
    console.log(data[0].score)
})