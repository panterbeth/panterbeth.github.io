const requestURL= 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
.then(function(response){
    return response.json();
})
.then(function (jsonObject){
    console.table(jsonObject);
    const towns = jsonObject["towns"];
   // towns.shift();
    //towns.splice(1, 3);

    //let events=towns[1].events;
    for(let i=0; i<towns.length; i++){
        if(towns[i].name=="Fish Haven"){
        let events=towns[i].events;
        let h3=document.createElement("h3");
        h3.textContent="Upcoming Events";
        document.querySelector("section.upcomingevent").appendChild(h3);
    let div=document.createElement("div");
    for(let i=0; i<events.length; i++){

    


let p5=document.createElement("p");
p5.textContent=events[i];
div.appendChild(p5);
document.querySelector("section.upcomingevent").appendChild(div);}}}

});


const apiURL="https://api.openweathermap.org/data/2.5/weather?lat=42.037&lon=-111.396&appid=d211895bcb1310c1dd13ddc706b3bb98"
//const apiURL="https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=d211895bcb1310c1dd13ddc706b3bb98"
fetch(apiURL)
.then((response)=> response.json())
.then((jsObject)=>{
    console.log(jsObject)
    document.getElementById("weather").textContent=jsObject.weather[0].description;

    document.getElementById("current").textContent=((jsObject.main.temp-273.15)*(9/5)+32).toFixed(2);
    

    document.getElementById("high").textContent=((jsObject.main.temp_max-273.15)*(9/5)+32).toFixed(2);
    document.getElementById("humidity").textContent=jsObject.main.humidity+"%";
    document.getElementById("windspeed").textContent=jsObject.wind.speed;
    document.getElementById("windchill").textContent=doInputOutput(((jsObject.main.temp-273.15)*(9/5)+32),jsObject.wind.speed);
})
/*const imagesrc="https://openweathermap.org/img/w/" + jsObject.weather[0].icon + ".png"; //note the concatenation
const desc =jsObject.weather[0].description; //note how we reference the weather array
document.getElementById("imagesrc").textContent=imagesrc; //informational specification only
document.getElementById("icon").setAttribute("src", imagesrc); //focus on the setAttribute() method
document.getElementById("icon").setAttribute("alt", desc);*/


const forecastURL="https://api.openweathermap.org/data/2.5/forecast?lat=42.037&lon=-111.396&appid=d211895bcb1310c1dd13ddc706b3bb98"
fetch(forecastURL)
.then(function(response){
    return response.json();
})
.then(function (jsonObject){
    console.table(jsonObject);
    const list = jsonObject["list"];
    for(let i=0; i<list.length; i++){
        let extract=list[i].dt_txt.substr(11);
        if(extract=="18:00:00"){
        //let card2=document.createElement("tr");
        let card= document.createElement("th");
        

const imagesrc="https://openweathermap.org/img/w/" + jsonObject.list[i].weather[0].icon + ".png"; //note the concatenation
const desc =jsonObject.list[i].weather[0].description;
let image=document.createElement("img");
        image.setAttribute("src", imagesrc);
        image.setAttribute("alt", desc);
        card.appendChild(image);
       // document.querySelector("tr.temperature").appendChild(card);

        let td= document.createElement("td");
        td.textContent=((list[i].main.temp-273.15)*(9/5)+32).toFixed(0)+ "ºF";
       // ((jsObject.main.temp-273.15)*(9/5)+32).toFixed(2)
    card.appendChild(td);
document.querySelector("table").appendChild(card); 
//card2.appendChild(card);
document.querySelector("table").appendChild(card);
}
     

    
}

});