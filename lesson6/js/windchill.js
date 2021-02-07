function windChill(tempF, speed){
    let wc= 35.74+(0.6215*tempF)-35.75*(speed**0.16)+(0.4275*tempF*(speed**0.16));
    return wc;
}
  function doInputOutput(){
    let t=parseFloat(document.getElementById("high").value);
    let s=parseFloat(document.getElementById("windspeed").value);
    if(t<=50&&s>3){

    var output=windChill(t,s);
      var equal=output.toFixed(0)+"&#176F";
    }
    else{var equal="N/A";}




document.getElementById("windchill").innerHTML=equal;
}


function doInputOutput2(){
    let t1=parseFloat(document.getElementById("high2").value);
    let s1=parseFloat(document.getElementById("windspeed2").value);
    if(t1<=50&&s1>3){

    var output1=windChill(t1,s1);
      var equal1=output1.toFixed(0)+"&#176F";
    }
    else{var equal1="N/A";}




document.getElementById("windchill2").innerHTML=equal1;
}