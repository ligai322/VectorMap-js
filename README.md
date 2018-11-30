
# VectorMap.js 
<img src="https://img.shields.io/npm/dt/vectormap-js.svg">[![Build Status](https://travis-ci.org/ThinkGeo/vectormap.svg?branch=master)](https://travis-ci.org/ThinkGeo/vectormap-js)
HTML5, WebGL Vector mapping library with any vector data – EsriJSON, GML, GPX, GeoJSON, KML, Vector Tile (MVT), WFS, WKT or WMS, can be beautifully rendered with CSS similar style file – [StyleJSON](https://thinkgeo.gitbooks.io/map-suite-stylejson-specification/content/) schema. It’s an extension of [OpenLayers](https://openlayers.org/ "OpenLayers"), and fits any requirements in browsers and mobile devices. 

With Map Suite VectorMap.js, you will have full access to [OpenLayers](https://openlayers.org/ "OpenLayers"), as well as any plugins or extensions created based on [OpenLayers](https://openlayers.org/ "OpenLayers"), for example, the "[3rd party libraries](http://openlayers.org/3rd-party/)" published on https://openlayers.org. With the help of them, you can easily create any styled map and put it anywhere, and build a customized geocoding or routings from other providers.

## Documentation:

* [Getting Started](https://github.com/ThinkGeo/VectorMap-js/wiki)
* [Community & Support](https://github.com/ThinkGeo/VectorMap-js/issues)
* [API Documentation](https://thinkgeo.gitbooks.io/map-suite-vector-map-js/api-reference.html)
* [Vector StyleJSON Specification](https://thinkgeo.gitbooks.io/map-suite-stylejson-specification/)
* [World Streets Vector Tile Schema](https://thinkgeo.gitbooks.io/map-suite-world-streets-data-schema)
* [Wolrd Street Styles Predefined](https://github.com/ThinkGeo/WorldStreets-Styles/tree/develop)

## Examples:

__Light Map__  - [View It Online](https://maps.thinkgeo.com/?id=bfffbab0fbc991422dcceae808171cdc) ([Edit On CodePen](https://codepen.io/thinkgeo/pen/BGjbRG))

<img src="https://thinkgeo.com/image/gallery/LightMap.png">

__Dark Map__  - [View It Online](https://maps.thinkgeo.com/?id=38de0c3315677eca2b05d2b8dfe11a99)

<img src="https://thinkgeo.com/image/gallery/DarkMap.png">

__Hybrid Map__  - [View It Online](https://maps.thinkgeo.com/?id=49bca9b0bbc306e0da6d740b1ca992b2)

<img src="https://thinkgeo.com/image/gallery/HybridMap.png">

## Install

> The official guide assumes intermediate level knowledge of HTML, CSS, and JavaScript, and have some experience of any front-end development editor, such as [Visual Studio Code](https://code.visualstudio.com/), [Webstorm](https://www.jetbrains.com/webstorm/), [Sublime Text](https://www.sublimetext.com/) or some similars. if you are totally new to frontend development, the easiest way to try out this library which is the "[Hello World](https://codepen.io/thinkgeo/pen/BGjbRG)" example on CodePen. Feel free to open it in another tab and follow along as we go through some features.

### CDN
Load from CDN in your project:

```html
<!-- style sheet for vectormap.js -->
<link rel="stylesheet" href="https://cdn.thinkgeo.com/vectormap-js/1.0.2/vectormap.css"></link>
	
<!-- latest minified version of vectormap.js -->
<script src="https://cdn.thinkgeo.com/vectormap-js/1.0.2/vectormap.js"></script>
```

### NPM

- Install the package:
```
npm i vectormap-js
``` 

Development Version
```
npm i vectormap-js-dev
``` 
- Include it to your page:
```html
<!-- style sheet for vectormap.js -->
<link rel="stylesheet" href="path/to/dist/vectormap.css"></link>
	
<!-- latest minified version of vectormap.js -->
<script src="path/to/dist/vectormap.js"></script>
```
 
## How to use
Set up a basic map with VectorMap.js in 6 steps (here take [Visual Studio Code](https://code.visualstudio.com/) for example).

__Step 1__. Create a html page with name "index.html "

__Step 2__. In the `<head>`of your HTML page, import the vectormap.js and related css file.

```html
<!-- style sheet for vectormap.js -->
<link rel="stylesheet" href="https://cdn.thinkgeo.com/vectormap-js/1.0.2/vectormap.css"></link>
	
<!-- latest minified version of vectormap.js -->
<script src="https://cdn.thinkgeo.com/vectormap-js/1.0.2/vectormap.js"></script>
```
 
__Step 3__. In the `<body>` of your HTML page, add a div with "id=`"map"`".
```html
<div id="map" style="width:800px;height:600px;"></div>
```

__Step 4__. At the bottom of the html page, add a JavaScript section to create an instance of map control with one vector layer created. 
```javascript
<script>
    var worldstreetsStyle = "http://cdn.thinkgeo.com/worldstreets-styles/1.0.0/light.json";    
    var worldstreets = new ol.mapsuite.VectorTileLayer(worldstreetsStyle, 
        {
            apiKey:'your-ThinkGeo-Cloud-Service-key'
        });
    let map = new ol.Map({
        layers: [worldstreets],
        target: 'map',
        view: new ol.View({
            center: ol.proj.fromLonLat([-96.79620, 32.79423]),
            zoom: 4,
        }),
    });
</script>
```
 
__NOTE:__
 
 * __ThinkGeo Cloud Service key__
 
 Access to ThinkGeo Cloud services, including Vector Tile data, requires an `API Key` that connects API requests to your account, Please check [here](https://thinkgeo.gitbooks.io/map-suite-vector-map-js/content/sign-up-thinkgeo-account.html) on how to create your own `ThinkGeo Cloud Service key` __FOR FREE__.
 
 * World Streets Styles
 
`World Streets Style` is a syntax of map styling language, similar to CSS. It's define the styles of your vector data. `Map Suite World Streets Styles` is professionally designed map styles from ThinkGeo experts, you can use it in your application without any changes, if you are consuming the Vector Tile data from ThinkGeo Cloud Service.

__Step 5 (Option)__. If `Map Suite World Streets Styles` is referenced in  your demo, please load __[ThinkGeo Map Icons](https://github.com/ThinkGeo/VectorMap-icons)__ as an  requirement, as all icons are drawn with.


```
<script src="https://cdn.thinkgeo.com/vectormap-icons/1.0.0/webfontloader.js"></script>
<script>
    WebFont.load({
        custom: {
            families: ["vectormap-icons"],
            urls: ["https://cdn.thinkgeo.com/vectormap-icons/1.0.0/vectormap-icons.css"]
        }
    });
</script>
```

After all the above steps completed, your HTML page should be:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Vector World Map</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- style sheet for vectormap.js -->
        <link rel="stylesheet" href="https://cdn.thinkgeo.com/vectormap-js/1.0.2/vectormap.css"></link>
        
        <!-- latest minified version of vectormap.js -->
        <script src="https://cdn.thinkgeo.com/vectormap-js/1.0.2/vectormap.js"></script>

        <!-- option: Map Suite World Streets Styles -->
        <script src="https://cdn.thinkgeo.com/vectormap-icons/1.0.0/webfontloader.js"></script>
        <script>
            WebFont.load({
                custom: {
                    families: ["vectormap-icons"],
                    urls: ["https://cdn.thinkgeo.com/vectormap-icons/1.0.0/vectormap-icons.css"]
                }
            });
        </script>
    </head>
    <body>
        <div id="map" style="width:800px;height:600px;"></div>
        <script>
            var worldstreetsStyle = "https://cdn.thinkgeo.com/worldstreets-styles/1.0.0/light.json";    
            var worldstreets = new ol.mapsuite.VectorTileLayer(worldstreetsStyle, 
            {
                apiKey:'your-ThinkGeo-Cloud-Service-key'      // please go to https://cloud.thinkgeo.com to create
            });
            let map = new ol.Map({
                layers: [worldstreets],
                target: 'map',
                view: new ol.View({
                    center: ol.proj.fromLonLat([-96.79620, 32.79423]),
                    zoom: 4,
                }),
            });
        </script>
    </body>
</html>
```

__Step 6__. Run the page and a beautiful map is there.

## ThinkGeo Map Icons

__[ThinkGeo Map Icons](https://github.com/ThinkGeo/VectorMap-icons)__ is a pack of more than 200 beautifully crafted Open Source icons for common mapping. 

## Vector Data Supported

Besides loading the traditional KML, GeoJSON, bitmap tiles etc., __`VectorMap.js`__ can work with [Vector Tiles](https://en.wikipedia.org/wiki/Vector_tiles). 

[Map Suite Cloud Service](https://Cloud.thinkgeo.com) provides a free vector tile service (*.mvt) based on open data from [OpenStreetMap](https://openstreetmap.org/), [Natural Earth](http://www.naturalearthdata.com/) and some other data providers, with global  coverage updated continuously. - sign up for an [API Key](https://cloud.thinkgeo.com) for free.

## Styling

Map Suite vector styling schema - [Vector StyleJSON](https://thinkgeo.gitbooks.io/map-suite-stylejson-specification/content/) is designed for you to specify data sources, layers and how to define and apply styles to layers. Please check the demo from "[Predefined open source styles](https://github.com/ThinkGeo/WorldStreets-Styles)" or check related documentation at https://thinkgeo.gitbooks.io/map-suite-stylejson-specification/content/. 


## Browser Support
__VectorMap.js__ is officially supported and tested on the last two versions of these browsers:

* __Mac OS__: Chrome, Firefox, and Safari
* __Windows__: Chrome, Firefox, IE11, and IE Edge
* __iOS__: Safari, Chrome, Firefox
* __Android__: Chrome

__VectorMap.js__ should also run in any brower with HTML5 support.

## License
__VectorMap.js__ is licensed under the [Apache 2.0](https://github.com/ThinkGeo/MapSuiteGisEditor/blob/master/LICENSE). 
