let myLeads = []
let oldLeads=[]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const tabBtn=document.getElementById("tab-btn")

const deleteBtn=document.getElementById("delete-btn")
// localStorage.clear()
const leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"))
if (leadsFromLocalStorage){
  myLeads=leadsFromLocalStorage
  render(myLeads)
}
// const tabs=[
//   {url:"https://www.linkedin.com/in/per-harald borgen/"}
// ]
 
tabBtn.addEventListener("click",function(){
  // chrome.tabs.query({active:true,currentWindow:true},function(tabs){
    chrome.tab.query({active:true,currentwindow:true},function(tabs){
      // console.log(tabs)
      myLeads.push(tabs[0].url)
      localStorage.setItem("myLeads", JSON.stringify( myLeads ))  
      render(myLeads)
    })
  
  // console.log(tabs[0].url) 
 

})
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
// 49 crete the tab btn
// save the tab url
// 52 Use the chrome API to get the tab
