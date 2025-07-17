var size = 0;
var placement = 'point';

var style_yasu_city_koaza_points_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    ''
    var labelText = "";
    if (feature.get("小字") !== null) {
        labelText = String(feature.get("小字"));
    }
    size = 0;
    var zoom = map.getView().getZoom();
    var fontSize;
    if (zoom >= 12 && zoom < 14) {
        labelText = "";
    } else if (zoom >= 14 && zoom < 16) {
        fontSize = zoom * 5 - 67; // 3〜13
    } else if (zoom >= 16 && zoom <= 18) {
        fontSize = 13;
    }
    var labelFont = fontSize + "px \'Hiragino Maru Gothic Pro\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#fafafa";
    var bufferWidth = 3.0;
    var placement = 'point';
    
    var style = [ new ol.style.Style({
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor, bufferWidth)
    })];;

    return style;
};
