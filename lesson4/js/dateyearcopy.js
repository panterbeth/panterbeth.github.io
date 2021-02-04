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