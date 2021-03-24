const apiURL="https://api.openweathermap.org/data/2.5/onecall?lat=48.0151&lon=-122.0637&appid=d211895bcb1310c1dd13ddc706b3bb98"
fetch(apiURL)
.then((response)=> response.json())
.then((jsObject)=>{
    console.log(jsObject)
    document.getElementById("weather").textContent=jsObject.current.weather[0].description;

    document.getElementById("current").textContent=((jsObject.current.temp-273.15)*(9/5)+32).toFixed(0);
    

    document.getElementById("high").textContent=((jsObject.daily[0].temp.max-273.15)*(9/5)+32).toFixed(0);
    document.getElementById("humidity").textContent=jsObject.current.humidity+"%";
    document.getElementById("windspeed").textContent=jsObject.current.wind_speed;
    document.getElementById("windchill").textContent=doInputOutput(((jsObject.current.temp-273.15)*(9/5)+32),jsObject.current.wind_speed);
})


/*const forecastURL="https://api.openweathermap.org/data/2.5/forecast?lat=48.0151&lon=-122.0637&appid=d211895bcb1310c1dd13ddc706b3bb98"
fetch(forecastURL)
.then(function(response){
    return response.json();
})
.then(function (jsonObject){
    console.table(jsonObject);
    const list = jsonObject["list"];
    for(let i=0; i<(list.length-16); i++){
      
        let extract=list[i].dt_txt.substr(11);
        if(extract=="12:00:00"){
            
        
        let card= document.createElement("th");
        

const imagesrc="https://openweathermap.org/img/w/" + jsonObject.list[i].weather[0].icon + ".png"; //note the concatenation
const desc =jsonObject.list[i].weather[0].description;
let image=document.createElement("img");
        image.setAttribute("src", imagesrc);
        image.setAttribute("alt", desc);
        card.appendChild(image);
       

        let td= document.createElement("td");
        td.textContent=((list[i].main.temp-273.15)*(9/5)+32).toFixed(0)+ "ºF";
       
    card.appendChild(td);
document.querySelector("table.threeday").appendChild(card); 

document.querySelector("table.threeday").appendChild(card);

}


    
}

});*/

const forecastURL="https://api.openweathermap.org/data/2.5/onecall?lat=48.0151&lon=-122.0637&appid=d211895bcb1310c1dd13ddc706b3bb98"
fetch(forecastURL)
.then(function(response){
    return response.json();
})
.then(function (jsonObject){
    console.table(jsonObject);
    const daily = jsonObject["daily"];
    for(let i=0; i<(daily.length-5); i++){
      
        let extract=daily[i].temp.day;
        //if(extract=="12:00:00"){
            
        
        let card= document.createElement("th");
        

/*const imagesrc="https://openweathermap.org/img/w/" + jsonObject.list[i].weather[0].icon + ".png"; //note the concatenation
const desc =jsonObject.list[i].weather[0].icon;
let image=document.createElement("img");
        image.setAttribute("src", imagesrc);
        image.setAttribute("alt", desc);
        card.appendChild(image);*/
       

        let td= document.createElement("td");
        td.textContent=((daily[i].temp.day-273.15)*(9/5)+32).toFixed(0)+ "ºF";
       
    card.appendChild(td);
document.querySelector("table.threeday").appendChild(card); 

document.querySelector("table.threeday").appendChild(card);

//}


    
}

});