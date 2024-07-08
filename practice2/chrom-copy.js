
let myLeads = []
let oldLeads=[]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

const deleteBtn=document.getElementById("delete-btn")
// localStorage.clear()
const leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"))
if (leadsFromLocalStorage){
  myLeads=leadsFromLocalStorage
  render(myLeads)
}

function render(leads) {
  let listItems = ""
  for (let i = 0; i < leads.length; i++) {
    listItems +=`
      <li>
        <a target='_blank' href=' ${leads[i]}'>
           ${leads[i]}
        </a>
      </li>
    `
  }
  ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick",function(){
  console.log("double clicked")
  localStorage.clear()
  myLeads=[]
  render(myLeads)
})
// console.log(leadsFromLocalStrage)

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""

    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)
    console.log(localStorage.getItem("myLeads"))
  })

  
// 36 get the leads from localstorage
                                           
// truthy and falsy statemnets
// 40 style the delete button
// 48 refactor  renderLeads() to use a parameter
