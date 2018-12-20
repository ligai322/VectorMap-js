// base map layer
let satelliteLayer = new ol.layer.Tile({
    source: new ol.source.XYZ({
        url: "https://cloud.thinkgeo.com/api/v1/maps/raster/dark/x1/3857/512/{z}/{x}/{y}.png" +
            "?apiKey=Yy6h5V0QY4ua3VjqdkJl7KTXpxbKgGlFJWjMTGLc_8s~",
        tileSize: 512,
    }),
});

//creat map

let map = new ol.Map({
    loadTilesWhileAnimating: true,
    loadTilesWhileInteracting: true,
    layers: [satelliteLayer],
    target: 'map',
    view: new ol.View({
        center: ol.proj.fromLonLat([-95.940014, 36.031607]),
        maxZoom: 19,
        maxResolution: 40075016.68557849 / 512,
        zoom: 4
    })
});

// pie chart
let pieChartOvery = (id, data, pt) => {
    option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series: [{
            type: 'pie',
            radius: '35%',
            data: data,
            itemStyle: {
                emphasis: {
                    shadowBlur: 0,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }]
    };

    let chart = echarts.init(document.getElementById(id));
    chart.setOption(option);
    return new ol.Overlay({
        position: pt,
        positioning: 'center-center',
        element: document.getElementById(id),
        stopEvent: false
    });
}

for (let i = 0; i < 26; i++) {
    let aqiDiv = document.createElement("div");
    aqiDiv.id = `pieChart${i}`;
    aqiDiv.style = "height:22vh;width:600px";
    document.querySelector("#pieChart").appendChild(aqiDiv)
}

const getJson = () => {
    let readTextFile = new Promise(function (resolve, reject) {
        let file = "../data/education.geojson";
        let rawFile = new XMLHttpRequest();
        rawFile.overrideMimeType("application/json");
        rawFile.open("GET", file, true);
        rawFile.onreadystatechange = function (ERR) {
            if (rawFile.readyState === 4) {
                if (rawFile.status == "200") {
                    resolve(rawFile.responseText);
                } else {
                    reject(new Error(ERR));
                }
            }
        }
        rawFile.send(null);
    });
    return readTextFile;
}

let stateArr = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
];

getJson().then(function (data) {
    let resultFeatures = JSON.parse(data)['features'];
    for (let i = 0, l = resultFeatures.length; i < l; i++) {
        let item = resultFeatures[i]['properties'];
        let coor = resultFeatures[i]['geometry']['coordinates'];
        let bcav = item.Bcav;
        let Col = item.Col;
        let HS = item.HS;
        let UHSC = item.UHSC;

        stateArr[i].push({
            value: UHSC,
            name: `Under high school `,
            itemStyle: {
                color: '#fe0100',
            }
        });
        stateArr[i].push({
            value: HS,
            name: 'High school ',
            itemStyle: {
                color: '#f9ff00'
            }
        });
        stateArr[i].push({
            value: Col,
            name: `College`,
            itemStyle: {
                color: '#a4e601'
            }
        });
        stateArr[i].push({
            value: bcav,
            name: `Bachelor degree and above`,
            itemStyle: {
                color: '#1e86fe'
            }
        });

        let index = `pieChart${i}`;
        console.log(index);
        console.log(stateArr[i]);
        console.log(ol.proj.fromLonLat(coor));
        map.addOverlay(pieChartOvery(index, stateArr[i], ol.proj.fromLonLat(coor)));
    }
})