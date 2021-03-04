const apiURL="http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=d211895bcb1310c1dd13ddc706b3bb98"
fetch(apiURL)
.then((response)=> response.json())
.then((jsObject)=>{
    console.log(jsObject)
}
);