//toLocaleDateString
//const options ={weekday: "long", day: "numeric", month: "numeric", year:"numeric"};
//document.getElementById("currentdate").textContent= new Date ().toLocaleDateString("en-US", options);
// const todaysdate = new Date();

let d= new Date();
let year= d.getFullYear();
document.getElementById("currentyear").textContent= year;
var lastUpdated= document.lastModified;
document.getElementById("currentdate").textContent= lastUpdated;