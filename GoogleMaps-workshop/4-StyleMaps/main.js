//Create and configure the map
function initMap() {
  // Here we define the style for our map into this array
  var customMapType = new google.maps.StyledMapType([
      {
        stylers: [
          {hue: '#ff0055'},
          {visibility: 'simplified'},
          {gamma: 0.5},
          {weight: 0.5}
        ]
      },
      {
        elementType: 'labels',
        stylers: [{visibility: 'off'}]
      },
      {
        featureType: 'landscape.natural.landcover',
        stylers: [{color: '#ff0055'}]
      }
    ], {
      name: 'Custom Style'
  });
  var customMapTypeId = 'custom_style';

  // Here we create a new Goggle Maps object
  var map = new google.maps.Map(document.getElementById('map'), {
    // Options for the map
    zoom: 12,
    center: {lat: 40.674, lng: -73.946},  // Brooklyn.
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.TERRAIN, customMapTypeId]
    }
  });

  map.mapTypes.set(customMapTypeId, customMapType);
  map.setMapTypeId(customMapTypeId);
}