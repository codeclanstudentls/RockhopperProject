var MapWrapper = function(container, coords, zoom, styles) {
  // var container = document.querySelector('#main-map');
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom,
    styles: styles
  });
}

MapWrapper.prototype = {
  addMarker: function(coords, info){
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap

    });

    var infoWindow = new google.maps.InfoWindow({
             content: info
             
           }); 
            infoWindow.open(this.googleMap, marker);             
  },

  addCustomMarker: function(feature, position){
  var customMarker = new google.maps.customMarker({
        position: feature.position,
        icon: icons[feature.type].icon,
        map: this.googleMap
  });
},

  addClickEvent: function() {
    google.maps.event.addListener(this.googleMap, 'click', 
      function(event) {
        console.log(event);
        console.log(event.latLng.lat());
          
    });
  },

  centerClick: function(coords) {
    this.googleMap.setCenter(coords);
  },

  styleMap: function(styles) {
    styledMapType = new google.maps.StyledMapType({
      
    });

  }


}


