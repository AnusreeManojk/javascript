// function saveinptut(){
//     console.log("Button clicked from onclick attribute")
// }
// let myLeads=[]
// const inputEl=document.getElementById("input-el")
// const inputBtn =document.getElementById("input-btn")
// const ulEl=document.getElementById("ul-el")

// inputBtn.addEventListener("click",function(){
// myLeads.push("www.awesomelead.com")
// myLeads.push(inputEl.value)
// renderLeads()
// console.log(myLeads)
// })
// 8 create a my lead arrray and input
// 11.push the value from the input field                          
// function renderLeads(){
// let listItems=""
// for(let i=0;i<myLeads.length; i++){
//     // console.log(myLeads[i])
//   listItems+= "<li>"+myLeads[i]+"</li>"
// //   console.log(  listItems+= "<li>"+myLeads[i]+"</li>")
// //   const li=  document.createElement("li")
// //   li.textContent=myLeads[i]
// //   ulEl.append(li)
// }
// ulEl.innerHTML=listItems
// }
// 15 how to render <li> elements with innerHTML
// improving the performance of our app

//  21 cretae a render function

let myLeads = `["www.awesomelead.com"]`
// myLeads=JSON.parse(myLeads)
// myLeads.push("www.epiclead.com")
// myLeads =JSON.stringify(typeof myLeads)
// console.log(myLeads)

// 1.turn myleads string to an array
myLeads=JSON.parse(myLeads)
// 2.push new value to the array
myLeads.push("www.lead2.com")
// 3.turn the array in to string again
myLeads=JSON.stringify(myLeads)
// 4. Console.log the string using typeof to verify that it is astring
console.log(typeof myLeads)



const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

// localStorage.setItem("myLeads","www.examplelead.com")
// console.log(localStorage.getItem("myLeads"))

// localStorage.setItem("myName","Anusree Manoj")
// console.log(localStorage.getItem("myName"))
// let name=localStorage.getItem("myName")
// console.log(name)
localStorage.clear()


inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value)
  // 22clear the input field

  inputEl.value = ""
  renderLeads()
})
function renderLeads() {
  let listItems = ""
  for (let i = 0; i < myLeads.length; i++) {
    // 23Add the <a> tag

    // listItems += "<li> <a   target='_blank' href='" + myLeads[i] + "'>" + myLeads[i]+"</a></li>"
    // console.log(listItems)
    listItems +=`
      <li>
        <a target='_blank' href=' ${myLeads[i]}'>
           ${myLeads[i]}
        </a>
      </li>
    `
  }
  ulEl.innerHTML = listItems
}
// 30preparing the deployment
//34 storing arrays in localstorage 
// 35 save the leads to local storage 
   