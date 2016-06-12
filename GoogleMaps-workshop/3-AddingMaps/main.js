//Create and configure the map
function initMap() {

  // A reference to the div that the map will be loaded in (getElementById)
  var mapDiv = document.getElementById('map');
  // Here we create a new Goggle Maps object
  var map = new google.maps.Map(mapDiv , {
    // Options for the map: center and zoom
    center: {lat: 44.540, lng: -78.546},
    zoom: 8
  });
}