var initialize = function(){
  var center = {lat: 59.2907, lng: -4.2026 };
  var mapDiv = document.querySelector('#main-map');

  var mainMap = new MapWrapper(mapDiv, center, 6);
  mainMap.addMarker(center);

  var shetland = {lat: 60.5297, lng: 1.2659};
  mainMap.addMarker(heathrow, 'Looky here'); 
  mainMap.addClickEvent();

  var button = document.querySelector('button');
  button.onclick = function() {
    console.log('This is Isle of Skye');
    var centerCoords = {lat: 57.5359, lng: 6.2263};
    mainMap.centerClick(centerCoords);

  }

}




window.onload = initialize;

