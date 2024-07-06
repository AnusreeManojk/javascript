let course = {
    title: "Learn CSS Gridbfor free",
    lesson:16,
    creator:"Anusree ",
    length:63,
    isFree:true,
    tags:["Html","Css"]
  }  
  console.log(course.length) 
  console.log(course.tags) 
  console.log(course.creator) 
            //    bracket notation
console.log(course["tags"])    

 let castle={
    title:"airbnb",
    price:156,
    isSuperhost:true,
    Image:["bg-image","object image"]
 }
 console.log(castle.title) 
 console.log(castle.Image) 
// methods on objects

let person={
    name:"Anu",
    age:23,
    country:"India"
}
function logData(){
console.log(person.name +"  is "+ person.age+" years of  old and lives in "+person.country)
}
console.log(logData())
                                                 