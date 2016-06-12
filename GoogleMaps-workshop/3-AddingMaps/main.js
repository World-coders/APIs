//This is our function called initMap
function initMap() {
    // Here we reference to the <div> that the map will be loaded into by using getElementById
    var mapDiv = document.getElementById('map');
   //Now we set our custom options for ur map, which are 'center' -> tells the API where to center the map and 'zoom' -> sets the zoom level
   var map = new google.maps.Map(mapDiv, {
       center: {lat: 44.540, lng: -78.546},
       zoom: 8
   });
}
