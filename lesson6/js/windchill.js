function windChill(tempF, speed){
    let wc= 35.74+(0.6215*tempF)-35.75*(speed**0.16)+(0.4275*tempF*(speed**0.16));
    return wc;
}

function doInputOutput(){
    let t=parseFloat(document.getElementById("high").value);
    let s=parseFloat(document.getElementById("windspeed").value);
    if(t<=50&&s>3){

    var equal=windChill(t,s);
    }
    else{var equal="N/A";}




document.getElementById("windchill").innerHTML=equal.toFixed(0);
}
