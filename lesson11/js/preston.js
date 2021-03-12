const requestURL= 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
.then(function(response){
    return response.json();
})
.then(function (jsonObject){
    console.table(jsonObject);
    const towns = jsonObject["towns"];
    towns.shift();
    towns.splice(1, 3);
    let events=towns[1].events;
    let pres=document.createElement("div");
    for(let i=0; i<events.length; i++){

    


let p5=document.createElement("p");
p5.textContent=events[i];
pres.appendChild(p5);
document.querySelector("section.presevent").appendChild(pres);}

});