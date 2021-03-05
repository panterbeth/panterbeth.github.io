const apiURL="http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=d211895bcb1310c1dd13ddc706b3bb98"
fetch(apiURL)
.then((response)=> response.json())
.then((jsObject)=>{
    console.log(jsObject)
    document.getElementById("weather").textContent=jsObject.weather[0].description;

    document.getElementById("current").textContent=((jsObject.main.temp-273.15)*(9/5)+32).toFixed(2);
    

    document.getElementById("high").textContent=((jsObject.main.temp_max-273.15)*(9/5)+32).toFixed(2);
    document.getElementById("humidity").textContent=jsObject.main.humidity;
    document.getElementById("windspeed").textContent=jsObject.wind.speed;

})
/*const imagesrc="https://openweathermap.org/img/w/" + jsObject.weather[0].icon + ".png"; //note the concatenation
const desc =jsObject.weather[0].description; //note how we reference the weather array
document.getElementById("imagesrc").textContent=imagesrc; //informational specification only
document.getElementById("icon").setAttribute("src", imagesrc); //focus on the setAttribute() method
document.getElementById("icon").setAttribute("alt", desc);*/

const forecastURL="http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=d211895bcb1310c1dd13ddc706b3bb98"
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
        let p= document.createElement("p");
        p.textContent=((list[i].main.temp-273.15)*(9/5)+32).toFixed(0)+ "ºF";
       // ((jsObject.main.temp-273.15)*(9/5)+32).toFixed(2)
    card.appendChild(p);
document.querySelector("tr.temperature").appendChild(card);   }
     

      /*  let p=document.createElement("p");
        p.textContent="Date of Birth: "+ prophets[i].birthdate;
    card.appendChild(p);
document.querySelector("div.cards").appendChild(card);

let p1=document.createElement("p");
p1.textContent="Place of Birth: "+ prophets[i].birthplace;
card.appendChild(p1);
document.querySelector("div.cards").appendChild(card); 

        let image=document.createElement("img");
        image.setAttribute("src", prophets[i].imageurl);
        image.setAttribute("alt", prophets[i].name+" "+prophets[i].lastname+"-"+prophets[i].order);
        card.appendChild(image);
        document.querySelector("div.cards").appendChild(card);*/
}

});