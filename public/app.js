// var ajax = require('./ajax.js');

var initialize = function(){
  var center = {lat: 58.1907, lng: -4.2026 };
  var mapDiv = document.querySelector('#main-map');

  var mainMap = new MapWrapper(mapDiv, center, 6);
  // mainMap.addMarker(center);

  
  var shetland = {lat: 60.1530, lng: -1.1493};
  mainMap.addMarker(shetland, 'Shetland Isles'); 
  mainMap.addClickEvent(center);

  
  var orkney = {lat:58.9847, lng: -2.9622};
  mainMap.addMarker(orkney, "Orkney Isles");
  mainMap.addClickEvent(center);

  
  var western_isles = {lat:57.7695, lng: -7.0084};
  mainMap.addMarker(western_isles, "Western Isles");
  mainMap.addClickEvent(center);

  
  var origin = document.querySelector('#origin');
  var destination = document.querySelector('#destination');
  

ajax.getRequest('http://localhost:5000/islands', function(){
    if (this.status !== 200){
      return
    } else {
    var jsonString = this.responseText;
    var data = JSON.parse(jsonString);
    }
    for (var island of data) {
      var option1 = document.createElement('option');
      option1.innerText = island.placename;
      option1.value = JSON.stringify(island);
      origin.appendChild(option1);

      var option2 = document.createElement('option');
      option2.innerText = island.placename;
      option2.value = JSON.stringify(island);
      origin.appendChild(option2);
      destination.appendChild(option2);


    }
  })

// var ul = document.querySelector('#todo-ul');
// ajax.getRequest('http://localhost:5000/todos', function(){
//   if (this.status !== 200){
//     return
//   } else {
  
//   var jsonString = this.responseText;
//   var data = JSON.parse(jsonString);
//   for (var item of data){
//     var li = document.createElement('li');
//     li.innerText = item.item;
//     ul.appendChild(li);

//     var addButton = document.createElement("button");
//     addButton.className = 'btn';
//     addButton.innerText = '+';
//     addButton.onclick = function(event){
  
//     }

//     var removeButton = document.createElement("button");
//     removeButton.className = 'btn';
//     removeButton.innerText = '-';
//     removeButton.onclick = function(event){

//     }

//     li.appendChild(addButton);
//     li.appendChild(removeButton);

//     }
    
//   }
// });
  
  
  var locateButton = document.querySelector("#my-location");
  locateButton.onclick = function(event){
    mainMap.googleMap.setCenter({lat: 55.947034 ,lng: -3.201905});
    mainMap.addMarker({lat: 55.947034 ,lng: -3.201905}, "You are here!");
    mainMap.addClickEvent(center);
    
  }
  var geolocate = function(){
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude

      };

      mainMap.googleMap.setCenter(pos);
      

    })
  }
    

  var routeButton = document.querySelector('#choice');
  routeButton.onclick = function() {
    var start = JSON.parse(origin.value);
    var end = JSON.parse(destination.value);
    var startLatLong = {
      lat: parseFloat(start.lat),
      lng: parseFloat(start.long)
    }
    var endLatLong = {
      lat: parseFloat(end.lat),
      lng: parseFloat(end.long)
    }
    mainMap.addRouteCalculator(startLatLong, endLatLong);



    console.log('Whats happening', startLatLong, endLatLong );

  }
}







window.onload = initialize;

