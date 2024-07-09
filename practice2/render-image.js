const imgs=[
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd58judYx225Niz5uRBaJc1UJi4DFHjOZNJA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJA32WU4rBpx7maglqeEtt3ot1tPIRWptxA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPfO37MK81JIyR1ptwqr_vYO3w4VR-iC2wqQ&s"
]
const container=document.getElementById("container")
function renderImages(){
    let imgsDOM=""
    for (let i=0;i< imgs.length;i++){
        container.innerHTML += `<img class="team-img" src="${imgs[i]}">`
    }
    container.innerHTML=imgsDOM
}
renderImages()
