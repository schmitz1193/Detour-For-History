
document.getElementById("submitCoords").addEventListener("click", function(){
  alert("show coords??");
var longitude = document.getElementById("long").value;
console.log("longitude ", longitude);
alert("show long" + longitude);

var latitude = document.getElementById("lat").value;
// values are showing in url but the following two lines are not working!!??
alert("show lat" + latitude);
console.log("latitude ", latitude);


});

// console.log("What is happening?");


// document.getElementById("markerText").innerHTML = Text;



