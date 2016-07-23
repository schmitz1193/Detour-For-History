var longitude = '';
var latitude = '';

// document.getElementById("submitCoords").addEventListener("event") {} );

document.getElementById("submitCoords").addEventListener("click", function(){
  longitude = document.getElementById("long").value;
  console.log("longitude ", longitude);

  latitude = document.getElementById("lat").value;
  console.log("latitude ", latitude);
  // alert("show coords??");
  console.log("send these coords to API");
  console.log(longitude + " " + latitude);
  document.getElementById("markerText").innerHTML = "this is the info";


});

console.log("What is happening?");


// document.getElementById("markerText").innerHTML = Text;



