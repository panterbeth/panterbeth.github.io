let d= new Date();
let year= d.getFullYear();
document.getElementById("currentyear").textContent= year;

let daynames=[
    "Sunday", 
    "Monday", 
    "Tuesday", 
    "Wednesday", 
    "Thursday", 
    "Friday", 
    "Saturday"
];
let months=[
    "January", 
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
let nD= new Date();
let dayName= daynames[nD.getDay()];
let monthName= months[nD.getMonth()];
let y= nD.getFullYear();
let fulldate= dayName + ", " + nD.getDate() +", " + monthName + ", " +y;
document.getElementById("currentdate").textContent=fulldate;

var now = new Date();
    var dayOfWeek = now.getDay();
    let response;
    if(dayOfWeek==6)
        {response="Preston Pancakes in the Park!\n9:00a.m. Saturday at the city park.";}
        else{response="Get up!";}


    document.getElementById("pancakes").innerHTML = response;