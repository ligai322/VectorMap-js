// ol namespace
import { stableSort as _ol_array$stableSort } from './ol/array';
import $ol$Collection from './ol/Collection';
import { asString as _ol_color$asString } from './ol/color';
import { asArray as _ol_color$asArray } from './ol/color';
import { asColorLike as _ol_colorlike$asColorLike } from './ol/colorlike';
import $ol$control$Attribution from './ol/control/Attribution';
import { render as _ol_control_Attribution$render } from './ol/control/Attribution';
import $ol$control$Control from './ol/control/Control';
import $ol$control$FullScreen from './ol/control/FullScreen';
import $ol$control$MousePosition from './ol/control/MousePosition';
import { render as _ol_control_MousePosition$render } from './ol/control/MousePosition';
import $ol$control$OverviewMap from './ol/control/OverviewMap';
import { render as _ol_control_OverviewMap$render } from './ol/control/OverviewMap';
import $ol$control$Rotate from './ol/control/Rotate';
import { render as _ol_control_Rotate$render } from './ol/control/Rotate';
import $ol$control$ScaleLine from './ol/control/ScaleLine';
import { render as _ol_control_ScaleLine$render } from './ol/control/ScaleLine';
import { defaults as _ol_control$defaults } from './ol/control';
import $ol$control$Zoom from './ol/control/Zoom';
import $ol$control$ZoomSlider from './ol/control/ZoomSlider';
import { render as _ol_control_ZoomSlider$render } from './ol/control/ZoomSlider';
import $ol$control$ZoomToExtent from './ol/control/ZoomToExtent';
import { add as _ol_coordinate$add } from './ol/coordinate';
import { createStringXY as _ol_coordinate$createStringXY } from './ol/coordinate';
import { format as _ol_coordinate$format } from './ol/coordinate';
import { rotate as _ol_coordinate$rotate } from './ol/coordinate';
import { toStringHDMS as _ol_coordinate$toStringHDMS } from './ol/coordinate';
import { toStringXY as _ol_coordinate$toStringXY } from './ol/coordinate';
import { easeIn as _ol_easing$easeIn } from './ol/easing';
import { easeOut as _ol_easing$easeOut } from './ol/easing';
import { inAndOut as _ol_easing$inAndOut } from './ol/easing';
import { linear as _ol_easing$linear } from './ol/easing';
import { upAndDown as _ol_easing$upAndDown } from './ol/easing';
import { altKeyOnly as _ol_events_condition$altKeyOnly } from './ol/events/condition';
import { altShiftKeysOnly as _ol_events_condition$altShiftKeysOnly } from './ol/events/condition';
import { focus as _ol_events_condition$focus } from './ol/events/condition';
import { always as _ol_events_condition$always } from './ol/events/condition';
import { click as _ol_events_condition$click } from './ol/events/condition';
import { never as _ol_events_condition$never } from './ol/events/condition';
import { pointerMove as _ol_events_condition$pointerMove } from './ol/events/condition';
import { singleClick as _ol_events_condition$singleClick } from './ol/events/condition';
import { doubleClick as _ol_events_condition$doubleClick } from './ol/events/condition';
import { noModifierKeys as _ol_events_condition$noModifierKeys } from './ol/events/condition';
import { platformModifierKeyOnly as _ol_events_condition$platformModifierKeyOnly } from './ol/events/condition';
import { shiftKeyOnly as _ol_events_condition$shiftKeyOnly } from './ol/events/condition';
import { targetNotEditable as _ol_events_condition$targetNotEditable } from './ol/events/condition';
import { mouseOnly as _ol_events_condition$mouseOnly } from './ol/events/condition';
import { primaryAction as _ol_events_condition$primaryAction } from './ol/events/condition';
import { boundingExtent as _ol_extent$boundingExtent } from './ol/extent';
import { buffer as _ol_extent$buffer } from './ol/extent';
import { containsCoordinate as _ol_extent$containsCoordinate } from './ol/extent';
import { containsExtent as _ol_extent$containsExtent } from './ol/extent';
import { containsXY as _ol_extent$containsXY } from './ol/extent';
import { createEmpty as _ol_extent$createEmpty } from './ol/extent';
import { equals as _ol_extent$equals } from './ol/extent';
import { extend as _ol_extent$extend } from './ol/extent';
import { getArea as _ol_extent$getArea } from './ol/extent';
import { getBottomLeft as _ol_extent$getBottomLeft } from './ol/extent';
import { getBottomRight as _ol_extent$getBottomRight } from './ol/extent';
import { getCenter as _ol_extent$getCenter } from './ol/extent';
import { getHeight as _ol_extent$getHeight } from './ol/extent';
import { getIntersection as _ol_extent$getIntersection } from './ol/extent';
import { getSize as _ol_extent$getSize } from './ol/extent';
import { getTopLeft as _ol_extent$getTopLeft } from './ol/extent';
import { getTopRight as _ol_extent$getTopRight } from './ol/extent';
import { getWidth as _ol_extent$getWidth } from './ol/extent';
import { intersects as _ol_extent$intersects } from './ol/extent';
import { isEmpty as _ol_extent$isEmpty } from './ol/extent';
import { applyTransform as _ol_extent$applyTransform } from './ol/extent';
import $ol$Feature from './ol/Feature';
import { xhr as _ol_featureloader$xhr } from './ol/featureloader';
import $ol$format$EsriJSON from './ol/format/EsriJSON';
import $ol$format$Feature from './ol/format/Feature';
import $ol$format$filter$Bbox from './ol/format/filter/Bbox';
import $ol$format$filter$Contains from './ol/format/filter/Contains';
import $ol$format$filter$During from './ol/format/filter/During';
import $ol$format$filter$EqualTo from './ol/format/filter/EqualTo';
import $ol$format$filter$GreaterThan from './ol/format/filter/GreaterThan';
import $ol$format$filter$GreaterThanOrEqualTo from './ol/format/filter/GreaterThanOrEqualTo';
import $ol$format$filter$Intersects from './ol/format/filter/Intersects';
import $ol$format$filter$IsBetween from './ol/format/filter/IsBetween';
import $ol$format$filter$IsLike from './ol/format/filter/IsLike';
import $ol$format$filter$IsNull from './ol/format/filter/IsNull';
import $ol$format$filter$LessThan from './ol/format/filter/LessThan';
import $ol$format$filter$LessThanOrEqualTo from './ol/format/filter/LessThanOrEqualTo';
import $ol$format$filter$Not from './ol/format/filter/Not';
import $ol$format$filter$NotEqualTo from './ol/format/filter/NotEqualTo';
import $ol$format$filter$Or from './ol/format/filter/Or';
import $ol$format$filter$Within from './ol/format/filter/Within';
import { and as _ol_format_filter$and } from './ol/format/filter';
import { or as _ol_format_filter$or } from './ol/format/filter';
import { not as _ol_format_filter$not } from './ol/format/filter';
import { bbox as _ol_format_filter$bbox } from './ol/format/filter';
import { contains as _ol_format_filter$contains } from './ol/format/filter';
import { intersects as _ol_format_filter$intersects } from './ol/format/filter';
import { within as _ol_format_filter$within } from './ol/format/filter';
import { equalTo as _ol_format_filter$equalTo } from './ol/format/filter';
import { notEqualTo as _ol_format_filter$notEqualTo } from './ol/format/filter';
import { lessThan as _ol_format_filter$lessThan } from './ol/format/filter';
import { lessThanOrEqualTo as _ol_format_filter$lessThanOrEqualTo } from './ol/format/filter';
import { greaterThan as _ol_format_filter$greaterThan } from './ol/format/filter';
import { greaterThanOrEqualTo as _ol_format_filter$greaterThanOrEqualTo } from './ol/format/filter';
import { isNull as _ol_format_filter$isNull } from './ol/format/filter';
import { between as _ol_format_filter$between } from './ol/format/filter';
import { like as _ol_format_filter$like } from './ol/format/filter';
import { during as _ol_format_filter$during } from './ol/format/filter';
import $ol$format$GeoJSON from './ol/format/GeoJSON';
import $ol$format$GML from './ol/format/GML';
import $ol$format$GML2 from './ol/format/GML2';
import $ol$format$GML3 from './ol/format/GML3';
import $ol$format$GML32 from './ol/format/GML32';
import $ol$format$GPX from './ol/format/GPX';
import $ol$format$IGC from './ol/format/IGC';
import $ol$format$KML from './ol/format/KML';
import $ol$format$MVT from './ol/format/MVT';
import $ol$format$OSMXML from './ol/format/OSMXML';
import $ol$format$Polyline from './ol/format/Polyline';
import { encodeDeltas as _ol_format_Polyline$encodeDeltas } from './ol/format/Polyline';
import { decodeDeltas as _ol_format_Polyline$decodeDeltas } from './ol/format/Polyline';
import { encodeFloats as _ol_format_Polyline$encodeFloats } from './ol/format/Polyline';
import { decodeFloats as _ol_format_Polyline$decodeFloats } from './ol/format/Polyline';
import $ol$format$TopoJSON from './ol/format/TopoJSON';
import $ol$format$WFS from './ol/format/WFS';
import { writeFilter as _ol_format_WFS$writeFilter } from './ol/format/WFS';
import $ol$format$WKT from './ol/format/WKT';
import $ol$format$WMSCapabilities from './ol/format/WMSCapabilities';
import $ol$format$WMSGetFeatureInfo from './ol/format/WMSGetFeatureInfo';
import $ol$format$WMTSCapabilities from './ol/format/WMTSCapabilities';
import $ol$Geolocation from './ol/Geolocation';
import $ol$geom$Circle from './ol/geom/Circle';
import $ol$geom$Geometry from './ol/geom/Geometry';
import $ol$geom$GeometryCollection from './ol/geom/GeometryCollection';
import $ol$geom$LinearRing from './ol/geom/LinearRing';
import $ol$geom$LineString from './ol/geom/LineString';
import $ol$geom$MultiLineString from './ol/geom/MultiLineString';
import $ol$geom$MultiPoint from './ol/geom/MultiPoint';
import $ol$geom$MultiPolygon from './ol/geom/MultiPolygon';
import $ol$geom$Point from './ol/geom/Point';
import $ol$geom$Polygon from './ol/geom/Polygon';
import { circular as _ol_geom_Polygon$circular } from './ol/geom/Polygon';
import { fromExtent as _ol_geom_Polygon$fromExtent } from './ol/geom/Polygon';
import { fromCircle as _ol_geom_Polygon$fromCircle } from './ol/geom/Polygon';
import $ol$geom$SimpleGeometry from './ol/geom/SimpleGeometry';
import $ol$Graticule from './ol/Graticule';
import { DEVICE_PIXEL_RATIO as _ol_has$DEVICE_PIXEL_RATIO } from './ol/has';
import { GEOLOCATION as _ol_has$GEOLOCATION } from './ol/has';
import { TOUCH as _ol_has$TOUCH } from './ol/has';
import $ol$interaction$DoubleClickZoom from './ol/interaction/DoubleClickZoom';
import $ol$interaction$DragAndDrop from './ol/interaction/DragAndDrop';
import $ol$interaction$DragBox from './ol/interaction/DragBox';
import $ol$interaction$DragPan from './ol/interaction/DragPan';
import $ol$interaction$DragRotate from './ol/interaction/DragRotate';
import $ol$interaction$DragRotateAndZoom from './ol/interaction/DragRotateAndZoom';
import $ol$interaction$DragZoom from './ol/interaction/DragZoom';
import $ol$interaction$Draw from './ol/interaction/Draw';
import { createRegularPolygon as _ol_interaction_Draw$createRegularPolygon } from './ol/interaction/Draw';
import { createBox as _ol_interaction_Draw$createBox } from './ol/interaction/Draw';
import $ol$interaction$Extent from './ol/interaction/Extent';
import $ol$interaction$Interaction from './ol/interaction/Interaction';
import $ol$interaction$KeyboardPan from './ol/interaction/KeyboardPan';
import $ol$interaction$KeyboardZoom from './ol/interaction/KeyboardZoom';
import $ol$interaction$Modify from './ol/interaction/Modify';
import $ol$interaction$MouseWheelZoom from './ol/interaction/MouseWheelZoom';
import $ol$interaction$PinchRotate from './ol/interaction/PinchRotate';
import $ol$interaction$PinchZoom from './ol/interaction/PinchZoom';
import $ol$interaction$Pointer from './ol/interaction/Pointer';
import $ol$interaction$Select from './ol/interaction/Select';
import $ol$interaction$Snap from './ol/interaction/Snap';
import $ol$interaction$Translate from './ol/interaction/Translate';
import { defaults as _ol_interaction$defaults } from './ol/interaction';
import $ol$Kinetic from './ol/Kinetic';
import $ol$layer$Base from './ol/layer/Base';
import $ol$layer$Group from './ol/layer/Group';
import $ol$layer$Heatmap from './ol/layer/Heatmap';
import $ol$layer$Image from './ol/layer/Image';
import $ol$layer$Tile from './ol/layer/Tile';
import $ol$layer$Vector from './ol/layer/Vector';
import $ol$layer$VectorTile from './ol/layer/VectorTile';
import { all as _ol_loadingstrategy$all } from './ol/loadingstrategy';
import { bbox as _ol_loadingstrategy$bbox } from './ol/loadingstrategy';
import { tile as _ol_loadingstrategy$tile } from './ol/loadingstrategy';
import $ol$Map from './ol/Map';
import $ol$Object from './ol/Object';
import $ol$Observable from './ol/Observable';
import { unByKey as _ol_Observable$unByKey } from './ol/Observable';
import $ol$Overlay from './ol/Overlay';
import $ol$PluggableMap from './ol/PluggableMap';
import { register as _ol_proj_proj4$register } from './ol/proj/proj4';
import $ol$proj$Projection from './ol/proj/Projection';
import { METERS_PER_UNIT as _ol_proj_Units$METERS_PER_UNIT } from './ol/proj/Units';
import { addProjection as _ol_proj$addProjection } from './ol/proj';
import { get as _ol_proj$get } from './ol/proj';
import { getPointResolution as _ol_proj$getPointResolution } from './ol/proj';
import { addEquivalentProjections as _ol_proj$addEquivalentProjections } from './ol/proj';
import { addCoordinateTransforms as _ol_proj$addCoordinateTransforms } from './ol/proj';
import { fromLonLat as _ol_proj$fromLonLat } from './ol/proj';
import { toLonLat as _ol_proj$toLonLat } from './ol/proj';
import { equivalent as _ol_proj$equivalent } from './ol/proj';
import { getTransform as _ol_proj$getTransform } from './ol/proj';
import { transform as _ol_proj$transform } from './ol/proj';
import { transformExtent as _ol_proj$transformExtent } from './ol/proj';
import { labelCache as _ol_render_canvas$labelCache } from './ol/render/canvas';
import $ol$render$VectorContext from './ol/render/VectorContext';
import { toContext as _ol_render$toContext } from './ol/render';
import $ol$renderer$canvas$ImageLayer from './ol/renderer/canvas/ImageLayer';
import $ol$renderer$canvas$Map from './ol/renderer/canvas/Map';
import $ol$renderer$canvas$TileLayer from './ol/renderer/canvas/TileLayer';
import $ol$renderer$canvas$VectorLayer from './ol/renderer/canvas/VectorLayer';
import $ol$renderer$canvas$VectorTileLayer from './ol/renderer/canvas/VectorTileLayer';
import $ol$renderer$webgl$ImageLayer from './ol/renderer/webgl/ImageLayer';
import $ol$renderer$webgl$Map from './ol/renderer/webgl/Map';
import $ol$renderer$webgl$TileLayer from './ol/renderer/webgl/TileLayer';
import $ol$renderer$webgl$VectorLayer from './ol/renderer/webgl/VectorLayer';
import { toSize as _ol_size$toSize } from './ol/size';
import $ol$source$BingMaps from './ol/source/BingMaps';
import $ol$source$CartoDB from './ol/source/CartoDB';
import $ol$source$Cluster from './ol/source/Cluster';
import $ol$source$Image from './ol/source/Image';
import $ol$source$ImageArcGISRest from './ol/source/ImageArcGISRest';
import $ol$source$ImageCanvas from './ol/source/ImageCanvas';
import $ol$source$ImageMapGuide from './ol/source/ImageMapGuide';
import $ol$source$ImageStatic from './ol/source/ImageStatic';
import $ol$source$ImageWMS from './ol/source/ImageWMS';
import { ATTRIBUTION as _ol_source_OSM$ATTRIBUTION } from './ol/source/OSM';
import $ol$source$OSM from './ol/source/OSM';
import $ol$source$Raster from './ol/source/Raster';
import $ol$source$Source from './ol/source/Source';
import $ol$source$Stamen from './ol/source/Stamen';
import $ol$source$Tile from './ol/source/Tile';
import $ol$source$TileArcGISRest from './ol/source/TileArcGISRest';
import $ol$source$TileDebug from './ol/source/TileDebug';
import $ol$source$TileImage from './ol/source/TileImage';
import $ol$source$TileJSON from './ol/source/TileJSON';
import $ol$source$TileWMS from './ol/source/TileWMS';
import $ol$source$UTFGrid from './ol/source/UTFGrid';
import $ol$source$Vector from './ol/source/Vector';
import $ol$source$VectorTile from './ol/source/VectorTile';
import $ol$source$WMTS from './ol/source/WMTS';
import { optionsFromCapabilities as _ol_source_WMTS$optionsFromCapabilities } from './ol/source/WMTS';
import $ol$source$XYZ from './ol/source/XYZ';
import $ol$source$Zoomify from './ol/source/Zoomify';
import { getDistance as _ol_sphere$getDistance } from './ol/sphere';
import { getLength as _ol_sphere$getLength } from './ol/sphere';
import { getArea as _ol_sphere$getArea } from './ol/sphere';
import $ol$style$AtlasManager from './ol/style/AtlasManager';
import $ol$style$Circle from './ol/style/Circle';
import $ol$style$Fill from './ol/style/Fill';
import $ol$style$Icon from './ol/style/Icon';
import { shared as _ol_style_IconImageCache$shared } from './ol/style/IconImageCache';
import $ol$style$Image from './ol/style/Image';
import $ol$style$RegularShape from './ol/style/RegularShape';
import $ol$style$Stroke from './ol/style/Stroke';
import $ol$style$Style from './ol/style/Style';
import $ol$style$Text from './ol/style/Text';
import $ol$tilegrid$TileGrid from './ol/tilegrid/TileGrid';
import $ol$tilegrid$WMTS from './ol/tilegrid/WMTS';
import { createFromCapabilitiesMatrixSet as _ol_tilegrid_WMTS$createFromCapabilitiesMatrixSet } from './ol/tilegrid/WMTS';
import { createXYZ as _ol_tilegrid$createXYZ } from './ol/tilegrid';
import { inherits as _ol$inherits } from './ol';
import { getUid as _ol$getUid } from './ol';
import $ol$View from './ol/View';
import $ol$WebGLMap from './ol/WebGLMap';
import { getAllTextContent as _ol_xml$getAllTextContent } from './ol/xml';
import { parse as _ol_xml$parse } from './ol/xml';

var ol = {};

ol.array = {};
ol.color = {};
ol.colorlike = {};
ol.control = {};
ol.coordinate = {};
ol.easing = {};
ol.events = {};
ol.events.condition = {};
ol.extent = {};
ol.featureloader = {};
ol.format = {};
ol.format.filter = {};
ol.geom = {};
ol.has = {};
ol.interaction = {};
ol.layer = {};
ol.loadingstrategy = {};
ol.proj = {};
ol.proj.Units = {};
ol.proj.proj4 = {};
ol.render = {};
ol.render.canvas = {};
ol.renderer = {};
ol.renderer.canvas = {};
ol.renderer.webgl = {};
ol.size = {};
ol.source = {};
ol.sphere = {};
ol.style = {};
ol.style.IconImageCache = {};
ol.tilegrid = {};
ol.xml = {};
ol.Collection = $ol$Collection;
ol.Feature = $ol$Feature;
ol.Geolocation = $ol$Geolocation;
ol.Graticule = $ol$Graticule;
ol.Kinetic = $ol$Kinetic;
ol.Map = $ol$Map;
ol.Object = $ol$Object;
ol.Observable = $ol$Observable;
ol.Observable.unByKey = _ol_Observable$unByKey;
ol.Overlay = $ol$Overlay;
ol.PluggableMap = $ol$PluggableMap;
ol.View = $ol$View;
ol.WebGLMap = $ol$WebGLMap;
ol.array.stableSort = _ol_array$stableSort;
ol.color.asArray = _ol_color$asArray;
ol.color.asString = _ol_color$asString;
ol.colorlike.asColorLike = _ol_colorlike$asColorLike;
ol.control.Attribution = $ol$control$Attribution;
ol.control.Attribution.render = _ol_control_Attribution$render;
ol.control.Control = $ol$control$Control;
ol.control.FullScreen = $ol$control$FullScreen;
ol.control.MousePosition = $ol$control$MousePosition;
ol.control.MousePosition.render = _ol_control_MousePosition$render;
ol.control.OverviewMap = $ol$control$OverviewMap;
ol.control.OverviewMap.render = _ol_control_OverviewMap$render;
ol.control.Rotate = $ol$control$Rotate;
ol.control.Rotate.render = _ol_control_Rotate$render;
ol.control.ScaleLine = $ol$control$ScaleLine;
ol.control.ScaleLine.render = _ol_control_ScaleLine$render;
ol.control.Zoom = $ol$control$Zoom;
ol.control.ZoomSlider = $ol$control$ZoomSlider;
ol.control.ZoomSlider.render = _ol_control_ZoomSlider$render;
ol.control.ZoomToExtent = $ol$control$ZoomToExtent;
ol.control.defaults = _ol_control$defaults;
ol.coordinate.add = _ol_coordinate$add;
ol.coordinate.createStringXY = _ol_coordinate$createStringXY;
ol.coordinate.format = _ol_coordinate$format;
ol.coordinate.rotate = _ol_coordinate$rotate;
ol.coordinate.toStringHDMS = _ol_coordinate$toStringHDMS;
ol.coordinate.toStringXY = _ol_coordinate$toStringXY;
ol.easing.easeIn = _ol_easing$easeIn;
ol.easing.easeOut = _ol_easing$easeOut;
ol.easing.inAndOut = _ol_easing$inAndOut;
ol.easing.linear = _ol_easing$linear;
ol.easing.upAndDown = _ol_easing$upAndDown;
ol.events.condition.altKeyOnly = _ol_events_condition$altKeyOnly;
ol.events.condition.altShiftKeysOnly = _ol_events_condition$altShiftKeysOnly;
ol.events.condition.always = _ol_events_condition$always;
ol.events.condition.click = _ol_events_condition$click;
ol.events.condition.doubleClick = _ol_events_condition$doubleClick;
ol.events.condition.focus = _ol_events_condition$focus;
ol.events.condition.mouseOnly = _ol_events_condition$mouseOnly;
ol.events.condition.never = _ol_events_condition$never;
ol.events.condition.noModifierKeys = _ol_events_condition$noModifierKeys;
ol.events.condition.platformModifierKeyOnly = _ol_events_condition$platformModifierKeyOnly;
ol.events.condition.pointerMove = _ol_events_condition$pointerMove;
ol.events.condition.primaryAction = _ol_events_condition$primaryAction;
ol.events.condition.shiftKeyOnly = _ol_events_condition$shiftKeyOnly;
ol.events.condition.singleClick = _ol_events_condition$singleClick;
ol.events.condition.targetNotEditable = _ol_events_condition$targetNotEditable;
ol.extent.applyTransform = _ol_extent$applyTransform;
ol.extent.boundingExtent = _ol_extent$boundingExtent;
ol.extent.buffer = _ol_extent$buffer;
ol.extent.containsCoordinate = _ol_extent$containsCoordinate;
ol.extent.containsExtent = _ol_extent$containsExtent;
ol.extent.containsXY = _ol_extent$containsXY;
ol.extent.createEmpty = _ol_extent$createEmpty;
ol.extent.equals = _ol_extent$equals;
ol.extent.extend = _ol_extent$extend;
ol.extent.getArea = _ol_extent$getArea;
ol.extent.getBottomLeft = _ol_extent$getBottomLeft;
ol.extent.getBottomRight = _ol_extent$getBottomRight;
ol.extent.getCenter = _ol_extent$getCenter;
ol.extent.getHeight = _ol_extent$getHeight;
ol.extent.getIntersection = _ol_extent$getIntersection;
ol.extent.getSize = _ol_extent$getSize;
ol.extent.getTopLeft = _ol_extent$getTopLeft;
ol.extent.getTopRight = _ol_extent$getTopRight;
ol.extent.getWidth = _ol_extent$getWidth;
ol.extent.intersects = _ol_extent$intersects;
ol.extent.isEmpty = _ol_extent$isEmpty;
ol.featureloader.xhr = _ol_featureloader$xhr;
ol.format.EsriJSON = $ol$format$EsriJSON;
ol.format.Feature = $ol$format$Feature;
ol.format.GML = $ol$format$GML;
ol.format.GML2 = $ol$format$GML2;
ol.format.GML3 = $ol$format$GML3;
ol.format.GML32 = $ol$format$GML32;
ol.format.GPX = $ol$format$GPX;
ol.format.GeoJSON = $ol$format$GeoJSON;
ol.format.IGC = $ol$format$IGC;
ol.format.KML = $ol$format$KML;
ol.format.MVT = $ol$format$MVT;
ol.format.OSMXML = $ol$format$OSMXML;
ol.format.Polyline = $ol$format$Polyline;
ol.format.Polyline.decodeDeltas = _ol_format_Polyline$decodeDeltas;
ol.format.Polyline.decodeFloats = _ol_format_Polyline$decodeFloats;
ol.format.Polyline.encodeDeltas = _ol_format_Polyline$encodeDeltas;
ol.format.Polyline.encodeFloats = _ol_format_Polyline$encodeFloats;
ol.format.TopoJSON = $ol$format$TopoJSON;
ol.format.WFS = $ol$format$WFS;
ol.format.WFS.writeFilter = _ol_format_WFS$writeFilter;
ol.format.WKT = $ol$format$WKT;
ol.format.WMSCapabilities = $ol$format$WMSCapabilities;
ol.format.WMSGetFeatureInfo = $ol$format$WMSGetFeatureInfo;
ol.format.WMTSCapabilities = $ol$format$WMTSCapabilities;
ol.format.filter.Bbox = $ol$format$filter$Bbox;
ol.format.filter.Contains = $ol$format$filter$Contains;
ol.format.filter.During = $ol$format$filter$During;
ol.format.filter.EqualTo = $ol$format$filter$EqualTo;
ol.format.filter.GreaterThan = $ol$format$filter$GreaterThan;
ol.format.filter.GreaterThanOrEqualTo = $ol$format$filter$GreaterThanOrEqualTo;
ol.format.filter.Intersects = $ol$format$filter$Intersects;
ol.format.filter.IsBetween = $ol$format$filter$IsBetween;
ol.format.filter.IsLike = $ol$format$filter$IsLike;
ol.format.filter.IsNull = $ol$format$filter$IsNull;
ol.format.filter.LessThan = $ol$format$filter$LessThan;
ol.format.filter.LessThanOrEqualTo = $ol$format$filter$LessThanOrEqualTo;
ol.format.filter.Not = $ol$format$filter$Not;
ol.format.filter.NotEqualTo = $ol$format$filter$NotEqualTo;
ol.format.filter.Or = $ol$format$filter$Or;
ol.format.filter.Within = $ol$format$filter$Within;
ol.format.filter.and = _ol_format_filter$and;
ol.format.filter.bbox = _ol_format_filter$bbox;
ol.format.filter.between = _ol_format_filter$between;
ol.format.filter.contains = _ol_format_filter$contains;
ol.format.filter.during = _ol_format_filter$during;
ol.format.filter.equalTo = _ol_format_filter$equalTo;
ol.format.filter.greaterThan = _ol_format_filter$greaterThan;
ol.format.filter.greaterThanOrEqualTo = _ol_format_filter$greaterThanOrEqualTo;
ol.format.filter.intersects = _ol_format_filter$intersects;
ol.format.filter.isNull = _ol_format_filter$isNull;
ol.format.filter.lessThan = _ol_format_filter$lessThan;
ol.format.filter.lessThanOrEqualTo = _ol_format_filter$lessThanOrEqualTo;
ol.format.filter.like = _ol_format_filter$like;
ol.format.filter.not = _ol_format_filter$not;
ol.format.filter.notEqualTo = _ol_format_filter$notEqualTo;
ol.format.filter.or = _ol_format_filter$or;
ol.format.filter.within = _ol_format_filter$within;
ol.geom.Circle = $ol$geom$Circle;
ol.geom.Geometry = $ol$geom$Geometry;
ol.geom.GeometryCollection = $ol$geom$GeometryCollection;
ol.geom.LineString = $ol$geom$LineString;
ol.geom.LinearRing = $ol$geom$LinearRing;
ol.geom.MultiLineString = $ol$geom$MultiLineString;
ol.geom.MultiPoint = $ol$geom$MultiPoint;
ol.geom.MultiPolygon = $ol$geom$MultiPolygon;
ol.geom.Point = $ol$geom$Point;
ol.geom.Polygon = $ol$geom$Polygon;
ol.geom.Polygon.circular = _ol_geom_Polygon$circular;
ol.geom.Polygon.fromCircle = _ol_geom_Polygon$fromCircle;
ol.geom.Polygon.fromExtent = _ol_geom_Polygon$fromExtent;
ol.geom.SimpleGeometry = $ol$geom$SimpleGeometry;
ol.getUid = _ol$getUid;
ol.has.DEVICE_PIXEL_RATIO = _ol_has$DEVICE_PIXEL_RATIO;
ol.has.GEOLOCATION = _ol_has$GEOLOCATION;
ol.has.TOUCH = _ol_has$TOUCH;
ol.inherits = _ol$inherits;
ol.interaction.DoubleClickZoom = $ol$interaction$DoubleClickZoom;
ol.interaction.DragAndDrop = $ol$interaction$DragAndDrop;
ol.interaction.DragBox = $ol$interaction$DragBox;
ol.interaction.DragPan = $ol$interaction$DragPan;
ol.interaction.DragRotate = $ol$interaction$DragRotate;
ol.interaction.DragRotateAndZoom = $ol$interaction$DragRotateAndZoom;
ol.interaction.DragZoom = $ol$interaction$DragZoom;
ol.interaction.Draw = $ol$interaction$Draw;
ol.interaction.Draw.createBox = _ol_interaction_Draw$createBox;
ol.interaction.Draw.createRegularPolygon = _ol_interaction_Draw$createRegularPolygon;
ol.interaction.Extent = $ol$interaction$Extent;
ol.interaction.Interaction = $ol$interaction$Interaction;
ol.interaction.KeyboardPan = $ol$interaction$KeyboardPan;
ol.interaction.KeyboardZoom = $ol$interaction$KeyboardZoom;
ol.interaction.Modify = $ol$interaction$Modify;
ol.interaction.MouseWheelZoom = $ol$interaction$MouseWheelZoom;
ol.interaction.PinchRotate = $ol$interaction$PinchRotate;
ol.interaction.PinchZoom = $ol$interaction$PinchZoom;
ol.interaction.Pointer = $ol$interaction$Pointer;
ol.interaction.Select = $ol$interaction$Select;
ol.interaction.Snap = $ol$interaction$Snap;
ol.interaction.Translate = $ol$interaction$Translate;
ol.interaction.defaults = _ol_interaction$defaults;
ol.layer.Base = $ol$layer$Base;
ol.layer.Group = $ol$layer$Group;
ol.layer.Heatmap = $ol$layer$Heatmap;
ol.layer.Image = $ol$layer$Image;
ol.layer.Tile = $ol$layer$Tile;
ol.layer.Vector = $ol$layer$Vector;
ol.layer.VectorTile = $ol$layer$VectorTile;
ol.loadingstrategy.all = _ol_loadingstrategy$all;
ol.loadingstrategy.bbox = _ol_loadingstrategy$bbox;
ol.loadingstrategy.tile = _ol_loadingstrategy$tile;
ol.proj.Projection = $ol$proj$Projection;
ol.proj.Units.METERS_PER_UNIT = _ol_proj_Units$METERS_PER_UNIT;
ol.proj.addCoordinateTransforms = _ol_proj$addCoordinateTransforms;
ol.proj.addEquivalentProjections = _ol_proj$addEquivalentProjections;
ol.proj.addProjection = _ol_proj$addProjection;
ol.proj.equivalent = _ol_proj$equivalent;
ol.proj.fromLonLat = _ol_proj$fromLonLat;
ol.proj.get = _ol_proj$get;
ol.proj.getPointResolution = _ol_proj$getPointResolution;
ol.proj.getTransform = _ol_proj$getTransform;
ol.proj.proj4.register = _ol_proj_proj4$register;
ol.proj.toLonLat = _ol_proj$toLonLat;
ol.proj.transform = _ol_proj$transform;
ol.proj.transformExtent = _ol_proj$transformExtent;
ol.render.VectorContext = $ol$render$VectorContext;
ol.render.canvas.labelCache = _ol_render_canvas$labelCache;
ol.render.toContext = _ol_render$toContext;
ol.renderer.canvas.ImageLayer = $ol$renderer$canvas$ImageLayer;
ol.renderer.canvas.Map = $ol$renderer$canvas$Map;
ol.renderer.canvas.TileLayer = $ol$renderer$canvas$TileLayer;
ol.renderer.canvas.VectorLayer = $ol$renderer$canvas$VectorLayer;
ol.renderer.canvas.VectorTileLayer = $ol$renderer$canvas$VectorTileLayer;
ol.renderer.webgl.ImageLayer = $ol$renderer$webgl$ImageLayer;
ol.renderer.webgl.Map = $ol$renderer$webgl$Map;
ol.renderer.webgl.TileLayer = $ol$renderer$webgl$TileLayer;
ol.renderer.webgl.VectorLayer = $ol$renderer$webgl$VectorLayer;
ol.size.toSize = _ol_size$toSize;
ol.source.BingMaps = $ol$source$BingMaps;
ol.source.CartoDB = $ol$source$CartoDB;
ol.source.Cluster = $ol$source$Cluster;
ol.source.Image = $ol$source$Image;
ol.source.ImageArcGISRest = $ol$source$ImageArcGISRest;
ol.source.ImageCanvas = $ol$source$ImageCanvas;
ol.source.ImageMapGuide = $ol$source$ImageMapGuide;
ol.source.ImageStatic = $ol$source$ImageStatic;
ol.source.ImageWMS = $ol$source$ImageWMS;
ol.source.OSM = $ol$source$OSM;
ol.source.OSM.ATTRIBUTION = _ol_source_OSM$ATTRIBUTION;
ol.source.Raster = $ol$source$Raster;
ol.source.Source = $ol$source$Source;
ol.source.Stamen = $ol$source$Stamen;
ol.source.Tile = $ol$source$Tile;
ol.source.TileArcGISRest = $ol$source$TileArcGISRest;
ol.source.TileDebug = $ol$source$TileDebug;
ol.source.TileImage = $ol$source$TileImage;
ol.source.TileJSON = $ol$source$TileJSON;
ol.source.TileWMS = $ol$source$TileWMS;
ol.source.UTFGrid = $ol$source$UTFGrid;
ol.source.Vector = $ol$source$Vector;
ol.source.VectorTile = $ol$source$VectorTile;
ol.source.WMTS = $ol$source$WMTS;
ol.source.WMTS.optionsFromCapabilities = _ol_source_WMTS$optionsFromCapabilities;
ol.source.XYZ = $ol$source$XYZ;
ol.source.Zoomify = $ol$source$Zoomify;
ol.sphere.getArea = _ol_sphere$getArea;
ol.sphere.getDistance = _ol_sphere$getDistance;
ol.sphere.getLength = _ol_sphere$getLength;
ol.style.AtlasManager = $ol$style$AtlasManager;
ol.style.Circle = $ol$style$Circle;
ol.style.Fill = $ol$style$Fill;
ol.style.Icon = $ol$style$Icon;
ol.style.IconImageCache.shared = _ol_style_IconImageCache$shared;
ol.style.Image = $ol$style$Image;
ol.style.RegularShape = $ol$style$RegularShape;
ol.style.Stroke = $ol$style$Stroke;
ol.style.Style = $ol$style$Style;
ol.style.Text = $ol$style$Text;
ol.tilegrid.TileGrid = $ol$tilegrid$TileGrid;
ol.tilegrid.WMTS = $ol$tilegrid$WMTS;
ol.tilegrid.WMTS.createFromCapabilitiesMatrixSet = _ol_tilegrid_WMTS$createFromCapabilitiesMatrixSet;
ol.tilegrid.createXYZ = _ol_tilegrid$createXYZ;
ol.xml.getAllTextContent = _ol_xml$getAllTextContent;
ol.xml.parse = _ol_xml$parse;


// export ol/events/listenOnce
import { listenOnce, listen, unlisten } from './ol/events';
ol.events.listenOnce = listenOnce;
ol.events.listen = listen;

// custome ol mmethod
import { zoomByDelta as $ol$interaction$Interaction$zoomByDelta } from './ol/interaction/Interaction';

ol.interaction.MouseWheelZoom.prototype.handleWheelZoom_ = function handleWheelZoom_(map) {
    var view = map.getView();
    if (view.getAnimating()) {
        view.cancelAnimations();
    }
    if (view.progressiveZoom) {
        var maxDelta = 1;

        var delta = this.delta_ / 100;
        if (delta > 0) {
            delta = delta * 2 - 1;
        }
        else {
            delta = delta * 2 + 1;
        }
        delta *= 0.15;

        var delta = Math.min(Math.max(delta, -maxDelta), maxDelta);
        $ol$interaction$Interaction$zoomByDelta(view, -delta, this.lastAnchor_, this.duration_);
    }
    else {
        var maxDelta = 1;
        var delta = Math.min(Math.max(this.delta_, -maxDelta), maxDelta);
        $ol$interaction$Interaction$zoomByDelta(view, -delta, this.lastAnchor_, this.duration_);
    }
    this.mode_ = undefined;
    this.delta_ = 0;
    this.lastAnchor_ = null;
    this.startTime_ = undefined;
    this.timeoutId_ = undefined;
};

ol.control.Zoom.prototype.zoomByDelta_ = function (delta) {
    var map = this.getMap();
    var view = map.getView();
    if (!view) {
        // the map does not have a view, so we can't act
        // upon it
        return;
    }
    var currentResolution = view.getResolution();
    if (currentResolution) {
        var newResolution;
        if (view.progressiveZoom) {
            var oldZoom = view.getZoom();
            // MapSuite:
            if (oldZoom !== undefined) {
                var zoom = Math.round(oldZoom);
                zoom = zoom + delta;
                delta = zoom - oldZoom;
            }
            newResolution = view.constrainResolution(currentResolution, delta);
        }
        else {
            newResolution = view.constrainResolution(currentResolution, delta);
        }

        if (this.duration_ > 0) {
            if (view.getAnimating()) {
                view.cancelAnimations();
            }
            view.animate({
                resolution: newResolution,
                duration: this.duration_,
                easing: ol.easing.easeOut
            });
        } else {
            view.setResolution(newResolution);
        }
    }
};

import TileQueue from './ol/TileQueue';
import TileState from './ol/TileState';
import EventType from './ol/events/EventType';

TileQueue.prototype.handleTileChange = function (event) {
    const tile = /** @type {import("./Tile.js").default} */ (event.target);
    const state = tile.getState();
    if (state === TileState.LOADED || state === TileState.ERROR ||
        state === TileState.EMPTY || state === TileState.ABORT ||
        state === TileState.CANCEL) {
        if (tile.isGeoVectorTile) {
            if (tile.replayCreated) {
                unlisten(tile, EventType.CHANGE, this.handleTileChange, this);
            }
        }
        else {
            unlisten(tile, EventType.CHANGE, this.handleTileChange, this);
        }

        const tileKey = tile.getKey();
        if (tileKey in this.tilesLoadingKeys_) {
            delete this.tilesLoadingKeys_[tileKey];
            --this.tilesLoading_;
        }
        this.tileChangeCallback_();
    }
}

// ol.mapsiute namespace
import GeoVectorTileLayer from "./layer/GeoVectorTileLayer";
import GeoVectorLayer from "./layer/GeoVector";

ol.mapsuite = {};
ol.mapsuite.VectorTileLayer = GeoVectorTileLayer;
ol.mapsuite.VectorLayer = GeoVectorLayer;
ol.mapsuite.version = "2.0.2";
ol.mapsuite.devVersion = "2.0.0-beta044";

import CanvasImageLayerRenderer from './ol/renderer/canvas/ImageLayer';
import CanvasTileLayerRenderer from './renderer/canvas/TileLayer';
import CanvasVectorTileLayerRenderer from './renderer/canvas/VectorTileLayer';
import CanvasVectorLayerRenderer from './renderer/canvas/VectorLayer';
import GeoCanvasVectorTileLayerRenderer from "./renderer/canvas/GeoVectorTileLayer";
import GeoCanvasVectorLayerRenderer from "./renderer/canvas/GeoVectorLayer";

ol.Map.prototype.createRenderer = function createRenderer() {
    var renderer = new ol.renderer.canvas.Map(this);
    renderer.registerLayerRenderers([
        CanvasImageLayerRenderer,
        CanvasTileLayerRenderer,
        CanvasVectorLayerRenderer,
        CanvasVectorTileLayerRenderer,
        GeoCanvasVectorTileLayerRenderer,
        GeoCanvasVectorLayerRenderer
    ]);
    return renderer;
};

export default ol;