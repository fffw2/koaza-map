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

lyr_yasu_city_koaza_map_1.setVisible(true);lyr_yasu_city_koaza_points_2.setVisible(true);
var layersList = commonLayersList.concat([lyr_yasu_city_koaza_map_1,lyr_yasu_city_koaza_points_2]);
lyr_yasu_city_koaza_map_1.set('fieldAliases', {'小字': '小字', '大字': '大字', '旧村': '旧村', '備考': '備考', 'ID': 'ID', });
lyr_yasu_city_koaza_points_2.set('fieldAliases', {'小字': '小字', '大字': '大字', '旧村': '旧村', '備考': '備考', 'ID': 'ID', });
lyr_yasu_city_koaza_map_1.set('fieldImages', {'小字': 'TextEdit', '大字': 'TextEdit', '旧村': 'TextEdit', '備考': 'TextEdit', 'ID': 'TextEdit', });
lyr_yasu_city_koaza_points_2.set('fieldImages', {'小字': 'TextEdit', '大字': 'TextEdit', '旧村': 'TextEdit', '備考': 'TextEdit', 'ID': 'Range', });
lyr_yasu_city_koaza_map_1.set('fieldLabels', {'小字': 'inline label', '大字': 'inline label', '旧村': 'inline label', '備考': 'header label', 'ID': 'inline label', });
lyr_yasu_city_koaza_points_2.set('fieldLabels', {'小字': 'inline label', '大字': 'inline label', '旧村': 'inline label', '備考': 'header label', 'ID': 'inline label', });
lyr_yasu_city_koaza_map_1.set('fieldDisplayKeys', ['小字', '大字', '旧村', '備考']);
lyr_yasu_city_koaza_points_2.set('fieldDisplayKeys', ['小字', '大字', '旧村', '備考']);
lyr_yasu_city_koaza_points_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});