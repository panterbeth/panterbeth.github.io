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
        if(towns[i].name=="Preston"){
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