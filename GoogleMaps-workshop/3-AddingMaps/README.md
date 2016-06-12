# 3. Add a Google Map

![index_html](https://cloud.githubusercontent.com/assets/2573931/15991718/15c2e468-30b3-11e6-9420-2f4d58f6bf7d.png)


For this tutorial we are **not** going to use our ```API key```.

## Create an HTML file to hold the maps

The following code creates a simple web page, where we are going to display our map. Keep in mind that this code is not something specific from ```Google Maps```, this is the basics for any ```HTML``` page.

Create a file called ```index.html``` and add the ```HTML``` code:

```HTML
<!DOCTYPE html>
<html>
  <head></head>
  <body>
  </body>
</html>
```

Now we are going to create a ```<div>``` inside the ```<body>``` tag with am ```id``` attribute of ```map```. We need this ```<div>``` because ```Google Map``` requires a page element (```<div>```), to display the map into our page.

```HTML
<div id="map"></div>
```

Let's create another file called ```style.css```, to being able to add some style to the ```<div>``` tag to display our map nicely.

We need to link our ```style.css``` to our ```index.html```, in order to being able to run our ```CSS```code into our page.

We are going to style the size of our map, with a ```width of 500 pixels``` and a ```height of 400 pixels```.

Here is the code:

```css
#map {
       width: 500px;
       height: 400px;
     }
```
We need to add ```#``` before ```map```because it is an ```id```. If we have a ```class```, instead of ```#``` you need ```.```. Click [here](http://www.w3schools.com/cssref/css_selectors.asp) to learn more about ```CSS``` ```Selector Reference```.

## Loading the API
We need to add a ```<script>``` tag into our ```HMTL```, right at the end of the ```<body``` tag. This ```<script>``` downloads the code required to display the map on your page.

```HTML
<script src="https://maps.googleapis.com/maps/api/js" async defer></script>
```

## Create and configure the map
Create a ```JavaScript``` file called ```main.js```.

Now we need to link our ```main.js``` to our ```index.html```, otherwise our ```JavaScript``` will not be running into your page.

We need to add the following ```<script>``` tag into our ```index.html``` right at the end of the ```<body``` tag, like we did it before to load the ```API```.

```HTML
<script type="text/javascript" src="main.js"></script>
```

In your ```main.js``` file, let's create a function to run once the page has loaded. We call this function ```initMap```.

```javascript
function initMap() {

}
```

## google.maps.Map object

We are going to create an object, which the ```Map``` object contructor will take two arguments:
+ A reference to the ```<div>``` by using ```getElementById```.
+ Options for the map.

```javascript
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
```

You can have a look [here](https://developers.google.com/maps/documentation/javascript/reference#MapOptions) to see more options, like ```backgroundColor```, ```heading```...

Finally open your ```index.html``` file into browser to see the magic! :sparkles:

![](http://s.quickmeme.com/img/1e/1e316e8b30384c27aa347055973c419a658e6673e630d193304482261ef5de28.jpg)

## Further Learning
+ [Maps API Tutorials](https://developers.google.com/maps/documentation/javascript/tutorials/)
+ [Developers Guide](https://developers.google.com/maps/documentation/javascript/tutorial)

# Next...
## 4. Style your Google Map
Well done! Now we konw how to implement a Google Map into our website. Let's get crazy with colours and other styles! Click [here](https://github.com/FAC-QMUL/APIs/tree/master/GoogleMaps-workshop/4-StyleMaps) to get started :bowtie:
