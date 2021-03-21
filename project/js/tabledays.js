let day2= new Date();
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
var nextDay= new Date();
nextDay.setDate(day2.getDate()+1);
var plusOne=dayNames[nextDay.getDay()];
document.getElementById("dayPlusOne").innerHTML=plusOne;
    
nextDay.setDate(day2.getDate()+2);
var plusTwo=dayNames[nextDay.getDay()];
document.getElementById("dayPlusTwo").innerHTML=plusTwo;

nextDay.setDate(day2.getDate()+3);
var plusThree=dayNames[nextDay.getDay()];
document.getElementById("dayPlusThree").innerHTML=plusThree;