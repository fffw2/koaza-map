var wms_layers = [];


        var lyr__0 = new ol.layer.Tile({
            'title': '地理院淡色地図',
            'type': 'base',
            'opacity': 0.600000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png'
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
                declutter: true,
                source:jsonSource_yasu_city_koaza_map_1, 
                style: style_yasu_city_koaza_map_1,
                interactive: true,
    title: 'yasu_city_koaza_map<br />\
    <img src="styles/legend/yasu_city_koaza_map_1_0.png" /> 行畑<br />\
    <img src="styles/legend/yasu_city_koaza_map_1_1.png" /> 市三宅<br />\
    <img src="styles/legend/yasu_city_koaza_map_1_2.png" /> 小篠原<br />\
    <img src="styles/legend/yasu_city_koaza_map_1_3.png" /> 久野部<br />\
    <img src="styles/legend/yasu_city_koaza_map_1_4.png" /> 野洲<br />\
    <img src="styles/legend/yasu_city_koaza_map_1_5.png" /> 川田<br />\
    <img src="styles/legend/yasu_city_koaza_map_1_6.png" /> 妙光寺<br />\
    <img src="styles/legend/yasu_city_koaza_map_1_7.png" /> 三上<br />\
    <img src="styles/legend/yasu_city_koaza_map_1_8.png" /> 北櫻<br />\
    <img src="styles/legend/yasu_city_koaza_map_1_9.png" /> 南櫻<br />\
    <img src="styles/legend/yasu_city_koaza_map_1_10.png" /> 五之里<br />\
    <img src="styles/legend/yasu_city_koaza_map_1_11.png" /> 冨波<br />\
    <img src="styles/legend/yasu_city_koaza_map_1_12.png" /> 辻町<br />\
    <img src="styles/legend/yasu_city_koaza_map_1_13.png" /> 上屋<br />\
    <img src="styles/legend/yasu_city_koaza_map_1_14.png" /> 北村<br />\
    <img src="styles/legend/yasu_city_koaza_map_1_15.png" /> 中北<br />\
    <img src="styles/legend/yasu_city_koaza_map_1_16.png" /> 永原<br />\
    <img src="styles/legend/yasu_city_koaza_map_1_17.png" /> 小南<br />\
    <img src="styles/legend/yasu_city_koaza_map_1_18.png" /> 高木<br />\
    <img src="styles/legend/yasu_city_koaza_map_1_19.png" /> 長島<br />\
    <img src="styles/legend/yasu_city_koaza_map_1_20.png" /> 入町<br />\
    <img src="styles/legend/yasu_city_koaza_map_1_21.png" /> 小堤<br />\
    <img src="styles/legend/yasu_city_koaza_map_1_22.png" /> 大篠原<br />'
        });
var format_yasu_city_koaza_points_2 = new ol.format.GeoJSON();
var features_yasu_city_koaza_points_2 = format_yasu_city_koaza_points_2.readFeatures(json_yasu_city_koaza_points_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_yasu_city_koaza_points_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_yasu_city_koaza_points_2.addFeatures(features_yasu_city_koaza_points_2);
var lyr_yasu_city_koaza_points_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_yasu_city_koaza_points_2, 
                style: style_yasu_city_koaza_points_2,
                interactive: true,
                title: 'yasu_city_koaza_points'
            });

lyr__0.setVisible(true);lyr_yasu_city_koaza_map_1.setVisible(true);lyr_yasu_city_koaza_points_2.setVisible(true);
var layersList = [lyr__0,lyr_yasu_city_koaza_map_1,lyr_yasu_city_koaza_points_2];
lyr_yasu_city_koaza_map_1.set('fieldAliases', {'小字': '小字', '大字': '大字', '旧村': '旧村', '備考': '備考', 'ID': 'ID', });
lyr_yasu_city_koaza_points_2.set('fieldAliases', {'小字': '小字', '大字': '大字', '旧村': '旧村', '備考': '備考', 'ID': 'ID', });
lyr_yasu_city_koaza_map_1.set('fieldImages', {'小字': 'TextEdit', '大字': 'TextEdit', '旧村': 'TextEdit', '備考': 'TextEdit', 'ID': 'TextEdit', });
lyr_yasu_city_koaza_points_2.set('fieldImages', {'小字': 'TextEdit', '大字': 'TextEdit', '旧村': 'TextEdit', '備考': 'TextEdit', 'ID': 'Range', });
lyr_yasu_city_koaza_map_1.set('fieldLabels', {'小字': 'inline label', '大字': 'inline label', '旧村': 'inline label', '備考': 'header label', 'ID': 'inline label', });
lyr_yasu_city_koaza_points_2.set('fieldLabels', {'小字': 'inline label', '大字': 'inline label', '旧村': 'inline label', '備考': 'header label', 'ID': 'inline label', });
lyr_yasu_city_koaza_points_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});