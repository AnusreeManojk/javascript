let fruit=["Aplle","orange","Aplle","oraange","Apple","Orange"]
let appleShelf=document.getElementById("apple-shelf")
let orangeShelf=document.getElementById("orange-shelf")

function sortFruits(){
    for(let i=0;i<fruit.length;i++){
        if(fruit[i]==="Aplle"){
            appleShelf.textContent+="Apple"
        }else if(fruit[i]==="orange"){
            orangeShelf.textContent+="orange"
        }
    }
}  

sortFruits()
