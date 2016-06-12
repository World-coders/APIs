# 4. Styling Google Maps

![index_html](https://cloud.githubusercontent.com/assets/2573931/15991805/b21c38ee-30b5-11e6-827a-8042df8f2da1.png)

In this tutorial you are going to learn how to style a map.

We are going to use the same code from our last tutorial [3. Add a Google Map](https://github.com/FAC-QMUL/APIs/tree/master/GoogleMaps-workshop/4-StyleMaps).

## Changing colours
We are going to use the API's [Styled Maps](https://developers.google.com/maps/documentation/javascript/styling) feature. Each style consists of a ```featureType```, and an optional ```elementType``` which can be used to specify sub-features, and a ```stylers array```, which contains the values for hue, lightness, visibility, etc.

We only need to change our ```main.js``` file and the ```<script>``` tag from your ```index.html```.

+ Replace your ```<script>``` tag from your ```index.html```:

```html
<script src="https://maps.googleapis.com/maps/api/js?callback=initialize" async defer></script>

```
+ Now we are going to to create an ```array of styles``` in our our ```main.js```:

```javascript
// Create an array of styles.
  var styles = [
    {
      stylers: [
        { hue: "#00ffe6" },
        { saturation: -20 }
      ]
    },{
      featureType: "road",
      elementType: "geometry",
      stylers: [
        { lightness: 100 },
        { visibility: "simplified" }
      ]
    },{
      featureType: "road",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    }
  ];

```

+ The next step is to create a new ```StyleMapType``` object:

```javascript
// Create a new StyledMapType object, passing it the array of styles,
// as well as the name to be displayed on the map type control.
var styledMap = new google.maps.StyledMapType(styles,
  {name: "Styled Map"});
```

+ Once we have our ```StyleMapType``` object, we need to create a map object and include the ```MapTypeId``` to add to the map type control.

```javascript
// Create a map object, and include the MapTypeId to add
// to the map type control.
var mapOptions = {
  zoom: 11,
  center: new google.maps.LatLng(55.6468, 37.581),
  mapTypeControlOptions: {
    mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
  }
};
var map = new google.maps.Map(document.getElementById('map'),
  mapOptions);

```

+ Finally we need to associate the styled map with the ```MapTypeId``` and set it to display:

```javascript
//Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');
}

```


+ Once you have added this code into your ```main.js``` file, open your ```index.html```into your browser to see the results.

You should be able to see something like this:

![index_html](https://cloud.githubusercontent.com/assets/2573931/15992952/e8c923dc-30d0-11e6-90c3-676644811d1a.png)


## Further learning
+ [Styled Maps Wizard](http://googlemaps.github.io/js-samples/styledmaps/wizard/index.html) - This a very cool tool that you can use to style your map easily.
+ [Styled Maps](https://developers.google.com/maps/documentation/javascript/styling#stylers)
+ [Customizing Google Maps](https://developers.google.com/maps/documentation/javascript/tutorials/customizing#overview)

# Next...
## 5. Visualising Data
Well done! Now we know how to implement a Google Map into our website. Let's get crazy with colours and other styles! Click [here](https://github.com/FAC-QMUL/APIs/tree/master/GoogleMaps-workshop/5-ImportData) to get started :bowtie:
