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
let year= nD.getFullYear();
let fulldate= dayName + ", " + nD.getDate() +", " + monthName + ", " +year;
document.getElementById("currentdate").textContent=fulldate;