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
    
    for(let i=0; i<towns.length; i++){
        let card= document.createElement("div");

        //let section=document.getElementsByClassName("towndata");
        let image=document.createElement("img");
        image.setAttribute("src", "images/"+towns[i].photo);
        image.setAttribute("alt", towns[i].photo);
        //section.appendChild(image);
        //document.querySelector("section.towndata").appendChild(section);
        card.appendChild(image);
        document.querySelector("section.towndata").appendChild(card);

        let h2= document.createElement("h2");
        h2.textContent=towns[i].name;
    card.appendChild(h2);
document.querySelector("section.towndata").appendChild(card);  

let h5=document.createElement("h5");
h5.textContent=towns[i].motto;
card.appendChild(h5);
document.querySelector("section.towndata").appendChild(card);
     

        let p=document.createElement("p");
        p.textContent="Year Founded: "+ towns[i].yearFounded;
    card.appendChild(p);
document.querySelector("section.towndata").appendChild(card);

let p1=document.createElement("p");
p1.textContent="Population: "+ towns[i].currentPopulation;
card.appendChild(p1);
document.querySelector("section.towndata").appendChild(card); 

let p2=document.createElement("p");
p2.textContent="Annual Rain Fall: "+ towns[i].averageRainfall;
card.appendChild(p2);
document.querySelector("section.towndata").appendChild(card); 

/*const photos=["images/placeholder.png", "images/sunandrain.gif", "images/pexels-simon-berger-500.jpg"];
for(let i=0; i<photos.length; i++){
let image=document.createElement("img");
        image.setAttribute("src", photos[0]);
        image.setAttribute("alt", "notworking" );
        card.appendChild(image);
        document.querySelector("div.towndata").appendChild(card);}*/

        /*const photos=["images/placeholder.png", "images/sunandrain.gif", "images/pexels-simon-berger-500.jpg"];
        for(let i=0; i<photos.length; i++){
            let pic=i};*/


            //this works
          
            
        }

});
/*const photos=["images/placeholder.png", "images/sunandrain.gif", "images/pexels-simon-berger-500.jpg"];
for(let i=0; i<photos.length; i++){
    return i;
}*/