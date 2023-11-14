var wms_layers = [];


        var lyr__0 = new ol.layer.Tile({
            'title': '地理院淡色地図',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 0.8,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr__19741978_2 = new ol.layer.Tile({
            'title': '地理院航空写真_1974-1978',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://cyberjapandata.gsi.go.jp/xyz/gazo1/{z}/{x}/{y}.jpg'
            })
        });

        var lyr__19611969_3 = new ol.layer.Tile({
            'title': '地理院航空写真_1961-1969',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://cyberjapandata.gsi.go.jp/xyz/ort_old10/{z}/{x}/{y}.png'
            })
        });

        var lyr__2008_4 = new ol.layer.Tile({
            'title': '地理院航空写真_2008',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://cyberjapandata.gsi.go.jp/xyz/nendophoto2008/{z}/{x}/{y}.png'
            })
        });
var format_kusatsu_city_koaza_map_5 = new ol.format.GeoJSON();
var features_kusatsu_city_koaza_map_5 = format_kusatsu_city_koaza_map_5.readFeatures(json_kusatsu_city_koaza_map_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kusatsu_city_koaza_map_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kusatsu_city_koaza_map_5.addFeatures(features_kusatsu_city_koaza_map_5);
var lyr_kusatsu_city_koaza_map_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kusatsu_city_koaza_map_5, 
                style: style_kusatsu_city_koaza_map_5,
                interactive: true,
                title: '草津市小字地図'
        });

lyr__0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr__19741978_2.setVisible(false);lyr__19611969_3.setVisible(false);lyr__2008_4.setVisible(false);lyr_kusatsu_city_koaza_map_5.setVisible(true);
var layersList = [lyr__0,lyr_OpenStreetMap_1,lyr__19741978_2,lyr__19611969_3,lyr__2008_4,lyr_kusatsu_city_koaza_map_5];
lyr_kusatsu_city_koaza_map_5.set('fieldAliases', {'Name': '小字', '大字': '大字', 'ID': 'ID', '備考': '備考', '旧村': '旧村', '読み': '読み', 'AZA_NO': 'AZA_NO', '登記存在フラグ': '登記存在フラグ', });
lyr_kusatsu_city_koaza_map_5.set('fieldImages', {'Name': 'TextEdit', '大字': 'TextEdit', 'ID': 'TextEdit', '備考': 'TextEdit', '旧村': 'TextEdit', '読み': 'TextEdit', 'AZA_NO': 'TextEdit', '登記存在フラグ': 'TextEdit', });
lyr_kusatsu_city_koaza_map_5.set('fieldLabels', {'Name': 'inline label', '大字': 'inline label', 'ID': 'inline label', '備考': 'header label', '旧村': 'inline label', '読み': 'inline label', 'AZA_NO': 'inline label', '登記存在フラグ': 'inline label', });
lyr_kusatsu_city_koaza_map_5.set('fieldDisplayKeys', ['Name', '読み', '大字', '旧村', '備考']);
lyr_kusatsu_city_koaza_map_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});