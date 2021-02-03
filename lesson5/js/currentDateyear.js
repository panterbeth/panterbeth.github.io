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
    if(dayOfWeek==6)
        {response="Saturday= Preston Pancakes in the Park!\n9:00a.m. Saturday at the city park pavilion.";
        document.getElementById("pancakes").innerHTML = response;}
        else{response="";
    document.getElementById("pancakes").style.display="none";}


//apple.setDate(new Date().getDate()+1);
var nextDay= new Date();
nextDay.setDate(day.getDate()+1);
var plusOne=dayNames[nextDay.getDay()];
document.getElementById("dayPlusOne").innerHTML=plusOne;
    
nextDay.setDate(day.getDate()+2);
var plusTwo=dayNames[nextDay.getDay()];
document.getElementById("dayPlusTwo").innerHTML=plusTwo;

nextDay.setDate(day.getDate()+3);
var plusThree=dayNames[nextDay.getDay()];
document.getElementById("dayPlusThree").innerHTML=plusThree;

nextDay.setDate(day.getDate()+4);
var plusFour=dayNames[nextDay.getDay()];
document.getElementById("dayPlusFour").innerHTML=plusFour;

nextDay.setDate(day.getDate()+5);
var plusFive=dayNames[nextDay.getDay()];
document.getElementById("dayPlusFive").innerHTML=plusFive;