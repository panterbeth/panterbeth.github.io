var now = new Date();
    var dayOfWeek = now.getDay();
    let response;
    if(dayOfWeek==6)
        {response="Saturday";}
        else{response="Get up!";}


    document.getElementById("pancakes").innerHTML = response;
