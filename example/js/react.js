let streetMap;

//Render map
function renderStreetMap() {
	let layer = new ol.mapsuite.VectorTileLayer('https://cdn.thinkgeo.com/worldstreets-styles/1.0.0/light.json', {
		apiKey: 'WPLmkj3P39OPectosnM1jRgDixwlti71l8KYxyfP2P0~'
	});
	let initializeMap = function() {
		streetMap = new ol.Map({
			loadTilesWhileAnimating: true,
			loadTilesWhileInteracting: true,
			layers: [ layer ],
			target: 'map',
			view: new ol.View({
				center: ol.proj.fromLonLat([ -77.043745, 38.88902 ]),
				maxZoom: 19,
				maxResolution: 40075016.68557849 / 512,
				zoom: 14,
				minZoom: 2
			})
		});

		streetMap.addControl(new ol.control.FullScreen());
	};
	WebFont.load({
		custom: {
			families: [ 'vectormap-icons' ],
			urls: [ 'https://cdn.thinkgeo.com/vectormap-icons/2.0.0/vectormap-icons.css' ]
		},
		// The "active" property defines a function to call when the font has
		// finished downloading.  Here, we'll call our initializeMap method.
		active: initializeMap
	});
}
class StreetMap extends React.Component {
	constructor(props) {
		super(props);

		//Define state
		this.state = {
			parkColor: '#a7da7a59',
			placement: 'Line',
			maskType: 'Circle',
			poiSize: '40',
			json: {
				styles: []
			},
			newLayer: ''
		};
		this.clickRefresh = this.clickRefresh.bind(this);
		this.parkFillColorHandleChange = this.parkFillColorHandleChange.bind(this);
		this.placementHandleChange = this.placementHandleChange.bind(this);
		this.maskTypeHandleChange = this.maskTypeHandleChange.bind(this);
		this.poiSizeHandleChange = this.poiSizeHandleChange.bind(this);
		this.getJson = this.getJson.bind(this);
	}

	componentDidMount() {
		renderStreetMap();
		this.getJson().then((data) => {
			this.setState({
				json: JSON.parse(data)
			});
		});
	}
	//Get value
	parkFillColorHandleChange(event) {
		this.setState({
			parkColor: event.target.value
		});
	}

	placementHandleChange(event) {
		this.setState({
			placement: event.target.value
		});
	}

	maskTypeHandleChange(event) {
		this.setState({
			maskType: event.target.value
		});
	}

	poiSizeHandleChange(event) {
		this.setState({
			poiSize: event.target.value
		});
	}

	//Get geojson data
	getJson() {
		let readTextFile = new Promise(function(resolve, reject) {
			let file = 'https://cdn.thinkgeo.com/worldstreets-styles/1.0.0/light.json';
			var rawFile = new XMLHttpRequest();
			rawFile.overrideMimeType('application/json');
			rawFile.open('GET', file, true);
			rawFile.onreadystatechange = function(ERR) {
				if (rawFile.readyState === 4) {
					if (rawFile.status == '200') {
						resolve(rawFile.responseText);
					} else {
						reject(new Error(ERR));
					}
				}
			};
			rawFile.send(null);
		});
		return readTextFile;
	}

	//Updated style
	clickRefresh() {
		let layers = streetMap.getLayers().getArray();
		streetMap.removeLayer(layers[0]);
		let newLayer = new ol.mapsuite.VectorTileLayer(this.state.json, {
			apiKey: 'WPLmkj3P39OPectosnM1jRgDixwlti71l8KYxyfP2P0~'
		});
		streetMap.addLayer(newLayer);
	}

	//Updated road name placement
	changePlacement() {
		let styles = this.state.json.styles;
		let stylesLength = styles.length;
		for (let i = 0; i < stylesLength; i++) {
			if (styles[i].filter.match("layerName='road_name'")) {
				switch (this.state.placement) {
					case 'Line':
						styles[i]['text-force-horizontal-for-line'] = false;
						break;
					case 'Point':
						styles[i]['text-force-horizontal-for-line'] = true;
						styles[i]['text-spacing'] = 5;
						styles[i]['text-min-distance'] = 5;
						styles[i]['text-min-padding'] = 5;
						break;
					default:
						return;
				}
			}
		}
	}

	//Updated park color
	changeParkColor() {
		let styles = this.state.json.styles;
		let stylesLength = styles.length;
		for (let i = 0; i < stylesLength; i++) {
			if (styles[i].id === 'landcover') {
				let length = styles[i]['style'].length;
				for (let j = 0; j < length; j++) {
					let innerStyle = styles[i]['style'];
					if (innerStyle[j]['filter'] === "class='park'") {
						innerStyle[j]['polygon-fill'] = this.state.parkColor;
					}
				}
			}
		}
	}

	//Updated road number mask type
	changeMaskType() {
		let styles = this.state.json.styles;
		let stylesLength = styles.length;
		for (let i = 0; i < stylesLength; i++) {
			if (styles[i].id === 'road_number') {
				styles[i]['text-mask-type'] = this.state.maskType;
			}
		}
	}

	//Updated POI size
	changePoiSize() {
		let styles = this.state.json.styles;
		let stylesLength = styles.length;
		for (let i = 0; i < stylesLength; i++) {
			if (styles[i].id === 'poi_icon') {
				styles[i]['point-size'] = this.state.poiSize;
			}
		}
	}

	//Render html
	render() {
		this.changePlacement();
		this.changeParkColor();
		this.changeMaskType();
		this.changePoiSize();

		return (
			<div id="mapWrap">
				<div id="map">
					<div className="controlPanel">
						<div>
							<label>Road Name Placement:</label>{' '}
							<select onChange={this.placementHandleChange}>
								<option value="Line"> Line </option> <option value="Point"> Point </option>{' '}
							</select>{' '}
						</div>
						<div>
							<label>Road Number Mask Type:</label>{' '}
							<select onChange={this.maskTypeHandleChange}>
								<option value="Circle"> Circle </option> <option value="Rectangle"> Rectangle </option>{' '}
								<option value="Default"> Default </option>{' '}
								<option value="RoundedCorners"> RoundedCorners </option>{' '}
								<option value="RoundedEnds"> RoundedEnds </option>{' '}
							</select>{' '}
						</div>
						<div>
							<label>Park Color:</label>{' '}
							<select onChange={this.parkFillColorHandleChange}>
								<option value="#a7da7a59"> #a7da7a59 </option> <option value="#25ff00"> #25ff00</option>
								<option value="#4ea440"> #4ea440</option>
								<option value="#a29708"> #a29708 </option> <option value="#fe6c00"> #fe6c00 </option>{' '}
							</select>{' '}
						</div>
						<div>
							<label>POI Size:</label>{' '}
							<input type="number" value={this.state.poiSize} onChange={this.poiSizeHandleChange} />{' '}
						</div>
						<div className="refresh-btn">
							<button onClick={this.clickRefresh}> Refresh </button>{' '}
						</div>{' '}
					</div>{' '}
				</div>{' '}
			</div>
		);
	}
}
ReactDOM.render(<StreetMap />, document.getElementById('root'));
