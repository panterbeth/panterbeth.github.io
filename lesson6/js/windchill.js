function windChill(tempF, speed){
    let wc= 35.74+(0.6215*tempF)-35.75*(speed**0.16)+(0.4275*tempF*(speed**0.16));
    return wc;
}

function doInputOutput(){
    let t=parseFloat(document.getElementById("inputbox").value);
    let s=parseFloat(document.getElementById("inputbox2").value);
    var equal=windChill(t,s);





document.getElementById("output").innerHTML=equal;
}
