var info = document.getElementById("info");
var button = document.getElementById("btn");


button.addEventListener("click", function() {
  var ourRequest = new XMLHttpRequest();

  ourRequest.open('GET','https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139');
  
  ourRequest.onload = function(){
    //console.log(ourRequest.responseText);
    var ourData = JSON.parse(ourRequest.responseText);
    //console.log(ourData.coord);
     renderHTML(ourData);
  };
  
  ourRequest.send();
});

function renderHTML(data){
  var htmlString = "";

  htmlString += "<p>" + data.weather + "</p>";
  

  info.insertAdjacentHTML('beforeend', htmlString);
}