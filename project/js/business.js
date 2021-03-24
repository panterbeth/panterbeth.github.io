const requestURL= 'json/businesses.json';
fetch(requestURL)
.then(function(response){
    return response.json();
})
.then(function (jsonObject){
    console.table(jsonObject);
    const business = jsonObject["business"];
    for(let i=0; i<business.length; i++){
        let card= document.createElement("section");
        let h3= document.createElement("h3");
        h3.textContent=business[i].name;
    card.appendChild(h3);
document.querySelector("div.cards").appendChild(card);   
     

        let p=document.createElement("p");
        p.textContent=business[i].streetaddress;
    card.appendChild(p);
document.querySelector("div.cards").appendChild(card);

let p1=document.createElement("p");
p1.textContent=business[i].city;
card.appendChild(p1);
document.querySelector("div.cards").appendChild(card); 

/*let p3=document.createElement("p");
p3.textContent=business[i].zip;
card.appendChild(p3);
document.querySelector("div.cards").appendChild(card);*/

let p4=document.createElement("p");
p4.textContent=business[i].phone;
card.appendChild(p4);
document.querySelector("div.cards").appendChild(card); 

let abc=document.createElement("a");
let link=document.createTextNode(business[i].web);
abc.appendChild(link);
abc.title="This is Link";
abc.href=business[i].url;
abc.target="blank";
//abc.setAttribute("href",business[i].url);
//abc.textContent=business[i].url;
card.appendChild(abc);

/*let p5=document.createElement("p");
p5.textContent=business[i].url;
card.appendChild(p5);
document.querySelector("div.cards").appendChild(card); */

        let image=document.createElement("img");
        image.setAttribute("src", business[i].imageurl);
        image.setAttribute("alt", business[i].name+" "+business[i].lastname+"-"+business[i].order);
        card.appendChild(image);
        document.querySelector("div.cards").appendChild(card);
}

});
