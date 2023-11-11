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
            'opacity': 1.000000,
            
            
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
                declutter: true,
                source:jsonSource_kusatsu_city_koaza_map_5, 
                style: style_kusatsu_city_koaza_map_5,
                interactive: true,
    title: 'kusatsu_city_koaza_map<br />\
    <img src="styles/legend/kusatsu_city_koaza_map_5_0.png" /> 芦浦町<br />\
    <img src="styles/legend/kusatsu_city_koaza_map_5_1.png" /> 岡本町<br />\
    <img src="styles/legend/kusatsu_city_koaza_map_5_2.png" /> 下笠町<br />\
    <img src="styles/legend/kusatsu_city_koaza_map_5_3.png" /> 下寺町<br />\
    <img src="styles/legend/kusatsu_city_koaza_map_5_4.png" /> 下物町<br />\
    <img src="styles/legend/kusatsu_city_koaza_map_5_5.png" /> 橋岡町<br />\
    <img src="styles/legend/kusatsu_city_koaza_map_5_6.png" /> 駒井沢町<br />\
    <img src="styles/legend/kusatsu_city_koaza_map_5_7.png" /> 穴村町<br />\
    <img src="styles/legend/kusatsu_city_koaza_map_5_8.png" /> 御倉町<br />\
    <img src="styles/legend/kusatsu_city_koaza_map_5_9.png" /> 山寺町<br />\
    <img src="styles/legend/kusatsu_city_koaza_map_5_10.png" /> 山田町<br />\
    <img src="styles/legend/kusatsu_city_koaza_map_5_11.png" /> 志那中町<br />\
    <img src="styles/legend/kusatsu_city_koaza_map_5_12.png" /> 志那町<br />\
    <img src="styles/legend/kusatsu_city_koaza_map_5_13.png" /> 集町<br />\
    <img src="styles/legend/kusatsu_city_koaza_map_5_14.png" /> 渋川町<br />\
    <img src="styles/legend/kusatsu_city_koaza_map_5_15.png" /> 上笠町<br />\
    <img src="styles/legend/kusatsu_city_koaza_map_5_16.png" /> 上寺町<br />\
    <img src="styles/legend/kusatsu_city_koaza_map_5_17.png" /> 新堂町<br />\
    <img src="styles/legend/kusatsu_city_koaza_map_5_18.png" /> 新浜町<br />\
    <img src="styles/legend/kusatsu_city_koaza_map_5_19.png" /> 青地町<br />\
    <img src="styles/legend/kusatsu_city_koaza_map_5_20.png" /> 川原町<br />\
    <img src="styles/legend/kusatsu_city_koaza_map_5_21.png" /> 草津町<br />\
    <img src="styles/legend/kusatsu_city_koaza_map_5_22.png" /> 大路井町<br />\
    <img src="styles/legend/kusatsu_city_koaza_map_5_23.png" /> 長束町<br />\
    <img src="styles/legend/kusatsu_city_koaza_map_5_24.png" /> 追分町<br />\
    <img src="styles/legend/kusatsu_city_koaza_map_5_25.png" /> 南笠町<br />\
    <img src="styles/legend/kusatsu_city_koaza_map_5_26.png" /> 南山田町<br />\
    <img src="styles/legend/kusatsu_city_koaza_map_5_27.png" /> 馬場町<br />\
    <img src="styles/legend/kusatsu_city_koaza_map_5_28.png" /> 平井町<br />\
    <img src="styles/legend/kusatsu_city_koaza_map_5_29.png" /> 片岡町<br />\
    <img src="styles/legend/kusatsu_city_koaza_map_5_30.png" /> 北山田町<br />\
    <img src="styles/legend/kusatsu_city_koaza_map_5_31.png" /> 北大萱町<br />\
    <img src="styles/legend/kusatsu_city_koaza_map_5_32.png" /> 木川町<br />\
    <img src="styles/legend/kusatsu_city_koaza_map_5_33.png" /> 野村町<br />\
    <img src="styles/legend/kusatsu_city_koaza_map_5_34.png" /> 野路町<br />\
    <img src="styles/legend/kusatsu_city_koaza_map_5_35.png" /> 矢橋町<br />\
    <img src="styles/legend/kusatsu_city_koaza_map_5_36.png" /> 矢倉町<br />\
    <img src="styles/legend/kusatsu_city_koaza_map_5_37.png" /> <br />'
        });

lyr__0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr__19741978_2.setVisible(true);lyr__19611969_3.setVisible(true);lyr__2008_4.setVisible(true);lyr_kusatsu_city_koaza_map_5.setVisible(true);
var layersList = [lyr__0,lyr_OpenStreetMap_1,lyr__19741978_2,lyr__19611969_3,lyr__2008_4,lyr_kusatsu_city_koaza_map_5];
lyr_kusatsu_city_koaza_map_5.set('fieldAliases', {'Name': 'Name', '大字': '大字', 'ID': 'ID', '備考': '備考', '旧村': '旧村', '読み': '読み', 'AZA_NO': 'AZA_NO', '登記存在フラグ': '登記存在フラグ', });
lyr_kusatsu_city_koaza_map_5.set('fieldImages', {'Name': 'TextEdit', '大字': 'TextEdit', 'ID': 'TextEdit', '備考': 'TextEdit', '旧村': 'TextEdit', '読み': 'TextEdit', 'AZA_NO': 'TextEdit', '登記存在フラグ': 'TextEdit', });
lyr_kusatsu_city_koaza_map_5.set('fieldLabels', {'Name': 'header label', '大字': 'header label', 'ID': 'header label', '備考': 'header label', '旧村': 'header label', '読み': 'header label', 'AZA_NO': 'header label', '登記存在フラグ': 'header label', });
lyr_kusatsu_city_koaza_map_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});