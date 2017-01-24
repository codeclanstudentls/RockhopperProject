var initialize = function(){
  var center = {lat: 51.507351, lng: -0.127758 };
  var mapDiv = document.querySelector('#main-map');

  var mainMap = new MapWrapper(mapDiv, center, 10);
  mainMap.addMarker(center);

  var heathrow = {lat: 51.470022, lng: 0.454295};
  mainMap.addMarker(heathrow, 'Looky here'); 
  mainMap.addClickEvent();

  var button = document.querySelector('button');
  button.onclick = function() {
    console.log('Helloooo');
    var centerCoords = {lat: 41.878114, lng: -87.629798};
    mainMap.centerClick(centerCoords);

  }

}




window.onload = initialize;

