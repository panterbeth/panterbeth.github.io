const apiURL="https://api.openweathermap.org/data/2.5/weather?lat=48.0151&lon=-122.0637&appid=d211895bcb1310c1dd13ddc706b3bb98"
fetch(apiURL)
.then((response)=> response.json())
.then((jsObject)=>{
    console.log(jsObject)
    document.getElementById("weather").textContent=jsObject.weather[0].description;

    document.getElementById("current").textContent=((jsObject.main.temp-273.15)*(9/5)+32).toFixed(0);
    

    document.getElementById("high").textContent=((jsObject.main.temp_max-273.15)*(9/5)+32).toFixed(0);
    document.getElementById("humidity").textContent=jsObject.main.humidity+"%";
    document.getElementById("windspeed").textContent=jsObject.wind.speed;
    document.getElementById("windchill").textContent=doInputOutput(((jsObject.main.temp-273.15)*(9/5)+32),jsObject.wind.speed);
})


const forecastURL="https://api.openweathermap.org/data/2.5/forecast?lat=48.0151&lon=-122.0637&appid=d211895bcb1310c1dd13ddc706b3bb98"
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
document.querySelector("table").appendChild(card); 

document.querySelector("table").appendChild(card);

}


    
}

});