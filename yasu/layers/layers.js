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
var format_yasu_city_koaza_map_1 = new ol.format.GeoJSON();
var features_yasu_city_koaza_map_1 = format_yasu_city_koaza_map_1.readFeatures(json_yasu_city_koaza_map_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_yasu_city_koaza_map_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_yasu_city_koaza_map_1.addFeatures(features_yasu_city_koaza_map_1);
var lyr_yasu_city_koaza_map_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_yasu_city_koaza_map_1, 
                style: style_yasu_city_koaza_map_1,
                interactive: true,
                title: '野洲市小字地図'
        });
var format_yasu_city_koaza_points_2 = new ol.format.GeoJSON();
var features_yasu_city_koaza_points_2 = format_yasu_city_koaza_points_2.readFeatures(json_yasu_city_koaza_points_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_yasu_city_koaza_points_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_yasu_city_koaza_points_2.addFeatures(features_yasu_city_koaza_points_2);
var lyr_yasu_city_koaza_points_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_yasu_city_koaza_points_2, 
                style: style_yasu_city_koaza_points_2,
                interactive: true,
                title: '野洲市小字地図（ポイント）'
            });

lyr__0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr__19741978_2.setVisible(false);lyr__19611969_3.setVisible(false);lyr__2008_4.setVisible(false);lyr_yasu_city_koaza_map_1.setVisible(true);lyr_yasu_city_koaza_points_2.setVisible(true);
var layersList = [lyr__0,lyr_OpenStreetMap_1,lyr__19741978_2,lyr__19611969_3,lyr__2008_4,lyr_yasu_city_koaza_map_1,lyr_yasu_city_koaza_points_2];
lyr_yasu_city_koaza_map_1.set('fieldAliases', {'小字': '小字', '大字': '大字', '旧村': '旧村', '備考': '備考', 'ID': 'ID', });
lyr_yasu_city_koaza_points_2.set('fieldAliases', {'小字': '小字', '大字': '大字', '旧村': '旧村', '備考': '備考', 'ID': 'ID', });
lyr_yasu_city_koaza_map_1.set('fieldImages', {'小字': 'TextEdit', '大字': 'TextEdit', '旧村': 'TextEdit', '備考': 'TextEdit', 'ID': 'TextEdit', });
lyr_yasu_city_koaza_points_2.set('fieldImages', {'小字': 'TextEdit', '大字': 'TextEdit', '旧村': 'TextEdit', '備考': 'TextEdit', 'ID': 'Range', });
lyr_yasu_city_koaza_map_1.set('fieldLabels', {'小字': 'inline label', '大字': 'inline label', '旧村': 'inline label', '備考': 'header label', 'ID': 'inline label', });
lyr_yasu_city_koaza_points_2.set('fieldLabels', {'小字': 'inline label', '大字': 'inline label', '旧村': 'inline label', '備考': 'header label', 'ID': 'inline label', });
lyr_yasu_city_koaza_points_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});