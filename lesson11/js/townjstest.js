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

        let image=document.createElement("img");
            image.setAttribute("src", "images/"+towns[i].photo);
            image.setAttribute("alt", towns[i].photo);
            card.appendChild(image);
            document.querySelector("section.towndata").appendChild(card);

            let thing=document.createElement("article");
            
            document.querySelector("section.towndata").appendChild(card);
           


        let h2= document.createElement("h2");
        h2.textContent=towns[i].name;
    thing.appendChild(h2);
document.querySelector("section.towndata").appendChild(thing);  

let h3=document.createElement("h3");
h3.textContent=towns[i].motto;
thing.appendChild(h3);
document.querySelector("section.towndata").appendChild(thing);
     

        let p=document.createElement("p");
        p.textContent="Year Founded: "+ towns[i].yearFounded;
    thing.appendChild(p);
document.querySelector("section.towndata").appendChild(thing);

let p1=document.createElement("p");
p1.textContent="Population: "+ towns[i].currentPopulation;
thing.appendChild(p1);
document.querySelector("section.towndata").appendChild(thing); 

let p2=document.createElement("p");
p2.textContent="Annual Rain Fall: "+ towns[i].averageRainfall;
thing.appendChild(p2);
document.querySelector("section.towndata").appendChild(thing); 

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