let hasCompletedCourse=true
let givesCertificate=true


if(hasCompletedCourse==true && givesCertificate===true){
    // if(givesCertificate==true){
        generateCertificate()
    // }
}
function generateCertificate(){
    console.log("Generating certificate....")
}  
  
let hasSolvedChallenge=false
let hasHintsLeft=false

if (hasSolvedChallenge==false&& hasHintsLeft===false){
    showSolution()
}
function showSolution(){
    console.log("Showing the solution...")
}

if (hasSolvedChallenge==true|| hasHintsLeft===false){
    showSolution()
}
function showSolution(){
    console.log("Showing the solution...")
}

let likesDocumentaries=true
let likesstartups=false
if(likesDocumentaries==true||likesstartups==true){
    recommendMovie()
}
function recommendMovie(){
    console.log("Hey, check out this new film we think you will like!")
}

let dayOfMonth=13
let weekday="Friday"
  if(dayOfMonth===13 && weekday==="Friday"){
    console.log(" it is a week day")
  }

  let hands=["rock","paper","scissor"]
  function randomItem(){
    let randomIndex=Math.floor(Math.random()*3)
    return hands[randomIndex]
  }
console.log(randomItem())
