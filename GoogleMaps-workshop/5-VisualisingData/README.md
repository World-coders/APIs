# 5. Visualising Data

![](https://developers.google.com/maps/documentation/javascript/tutorials/images/visualization_3maps.png)

We are going to create a map that displays real-time earthquake data from United States Geological Survey (USGS), including magnitude. Click [here](http://earthquake.usgs.gov/earthquakes/feed/) to learn more about USGS.

We are going to use the same code from the tutorial [3. Add a Google Map](https://github.com/FAC-QMUL/APIs/tree/master/GoogleMaps-workshop/4-StyleMaps), as a quick start.


## Importing your dataset

+ Open your ```main.js``` file.

+ We will request a ```JSONP API``` directly from the USGS servers:

```javascript
var map;

function initialize() {
  var mapOptions = {
    zoom: 2,
    center: {lat: -33.865427, lng: 151.196123},
    mapTypeId: google.maps.MapTypeId.TERRAIN
  };

  map = new google.maps.Map(document.getElementById('map'),
      mapOptions);

  // Create a <script> tag and set the USGS URL as the source.
  var script = document.createElement('script');

  script.src = 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp';
  document.getElementsByTagName('head')[0].appendChild(script);
}

```

+ Let's add a style to the Data Layer which calls the ```getCircle()``` function to create a custom image for the point.

```javascript
map.data.setStyle(function(feature) {
  var magnitude = feature.getProperty('mag');
  return {
    icon: getCircle(magnitude)
  };
});

```

Finally, the icon specified is a function, ```getCircle()```, to which we pass the magnitude property of the earthquake. ```getCircle()``` draws a circle whose size is defined by the magnitude value, and sends that circle back to be used as the earthquake's custom marker:

```javascript
function getCircle(magnitude) {
  var circle = {
    path: google.maps.SymbolPath.CIRCLE,
    scale: magnitude
  };
  return circle;
}

```

This is what you should see:

![readme_md_ __users_mypitit_desktop_apis_and_index_html](https://cloud.githubusercontent.com/assets/2573931/15993252/7b2adf94-30d7-11e6-9706-4c3c756e72dc.png)

## Further learning
+ [JSONP](https://en.wikipedia.org/wiki/JSONP)
+ [Symbols](https://developers.google.com/maps/documentation/javascript/symbols)
+ [Circle size](https://developers.google.com/maps/documentation/javascript/tutorials/earthquakes#circle_size)
+ [Heatmaps](https://developers.google.com/maps/documentation/javascript/tutorials/earthquakes#heatmaps)

# Next...
## Project Time!!

[![](https://cdn.meme.am/instances/500x/56008633.jpg)](https://github.com/FAC-QMUL/APIs/tree/master/GoogleMaps-workshop/Project)
