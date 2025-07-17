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

lyr_kusatsu_city_koaza_map_5.setVisible(true);
var layersList = commonLayersList.concat([lyr_kusatsu_city_koaza_map_5]);
lyr_kusatsu_city_koaza_map_5.set('fieldAliases', {'Name': '小字', '大字': '大字', 'ID': 'ID', '備考': '備考', '旧村': '旧村', '読み': '読み', 'AZA_NO': 'AZA_NO', '登記存在フラグ': '登記存在フラグ', });
lyr_kusatsu_city_koaza_map_5.set('fieldImages', {'Name': 'TextEdit', '大字': 'TextEdit', 'ID': 'TextEdit', '備考': 'TextEdit', '旧村': 'TextEdit', '読み': 'TextEdit', 'AZA_NO': 'TextEdit', '登記存在フラグ': 'TextEdit', });
lyr_kusatsu_city_koaza_map_5.set('fieldLabels', {'Name': 'inline label', '大字': 'inline label', 'ID': 'inline label', '備考': 'header label', '旧村': 'inline label', '読み': 'inline label', 'AZA_NO': 'inline label', '登記存在フラグ': 'inline label', });
lyr_kusatsu_city_koaza_map_5.set('fieldDisplayKeys', ['Name', '読み', '大字', '旧村', '備考']);
lyr_kusatsu_city_koaza_map_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});