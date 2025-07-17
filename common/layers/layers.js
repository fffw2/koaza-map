var wms_layers = [];

var lyr__0 = new ol.layer.Tile({
    title: '地理院淡色地図',
    type: 'base',
    opacity: 1.000000,
    source: new ol.source.XYZ({
        attributions: ' ',
        url: 'https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png'
    })
});

var lyr_OpenStreetMap_1 = new ol.layer.Tile({
    title: 'OpenStreetMap',
    type: 'base',
    opacity: 0.8,
    source: new ol.source.XYZ({
        attributions: ' ',
        url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
    })
});

var lyr__19741978_2 = new ol.layer.Tile({
    title: '地理院航空写真_1974-1978',
    type: 'base',
    opacity: 1.000000,
    source: new ol.source.XYZ({
        attributions: ' ',
        url: 'https://cyberjapandata.gsi.go.jp/xyz/gazo1/{z}/{x}/{y}.jpg'
    })
});

var lyr__19611969_3 = new ol.layer.Tile({
    title: '地理院航空写真_1961-1969',
    type: 'base',
    opacity: 1.000000,
    source: new ol.source.XYZ({
        attributions: ' ',
        url: 'https://cyberjapandata.gsi.go.jp/xyz/ort_old10/{z}/{x}/{y}.png'
    })
});

var lyr__2008_4 = new ol.layer.Tile({
    title: '地理院航空写真_2008',
    type: 'base',
    opacity: 1.000000,
    source: new ol.source.XYZ({
        attributions: ' ',
        url: 'https://cyberjapandata.gsi.go.jp/xyz/nendophoto2008/{z}/{x}/{y}.png'
    })
});

lyr__0.setVisible(false);
lyr_OpenStreetMap_1.setVisible(true);
lyr__19741978_2.setVisible(false);
lyr__19611969_3.setVisible(false);
lyr__2008_4.setVisible(false);

var commonLayersList = [lyr__0,lyr_OpenStreetMap_1,lyr__19741978_2,lyr__19611969_3,lyr__2008_4]