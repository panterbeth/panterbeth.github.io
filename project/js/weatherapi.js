const apiURL="http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=d211895bcb1310c1dd13ddc706b3bb98"
fetch(apiURL)
.then((response)=> response.json())
.then((jsObject)=>{
    console.log(jsObject)
    document.getElementById("current-temp").textContent=((jsObject.main.temp-273.15)*(9/5)+32).toFixed(2)
    //(0K − 273.15) × 9/5 + 32 = -459.7°F
    ;
const imagesrc="https://openweathermap.org/img/w/" + jsObject.weather[0].icon + ".png"; //note the concatenation
const desc =jsObject.weather[0].description; //note how we reference the weather array
document.getElementById("imagesrc").textContent=imagesrc; //informational specification only
document.getElementById("icon").setAttribute("src", imagesrc); //focus on the setAttribute() method
document.getElementById("icon").setAttribute("alt", desc);
}
);
