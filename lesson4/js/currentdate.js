let d= new Date();
let year= d.getFullYear();
document.getElementById("currentyear").textContent= year;
/*var lastUpdated= document.lastModified;
document.getElementById("currentdate").textContent= lastUpdated;*/
//toLocaleDateString 

let todaysdate = new Date();
let options ={
    weekday: "long", 
    year:"numeric",
     month: "long",
    day: "numeric",
    };

document.getElementById("currentdate").textContent= new Date ().toLocaleDateString("en-US", options);

/*let d= new Date();
let weekday=
document.getElementById("currentdate").textContent=fulldate*/