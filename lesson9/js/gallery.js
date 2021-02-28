let day= new Date();
let year= day.getFullYear();
document.getElementById("currentyear").textContent= year;

let dayNames=[
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
let apple= new Date();
let dayName= dayNames[apple.getDay()];
let monthName= months[apple.getMonth()];
let fullYear= apple.getFullYear();
let fullDate= dayName + ", " + apple.getDate() +", " + monthName + ", " +fullYear;
document.getElementById("currentdate").textContent=fullDate;

var now = new Date();
    var dayOfWeek = now.getDay();
    let response;
    if(dayOfWeek==5)
        {response="Saturday= Preston Pancakes in the Park!\n9:00a.m. Saturday at the city park pavilion.";
        document.getElementById("pancakes").innerHTML = response;}
        else{response="";
    document.getElementById("pancakes").style.display="none";}
