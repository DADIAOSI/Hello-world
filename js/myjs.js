/**
 * Created by yujin on 2017/6/30.
 */


function  loadbyll() {
    // 用经纬度设置地图中心点
   var  map = new BMap.Map("mapview");
    map.centerAndZoom(new BMap.Point(116.331398,39.897445),12);//经度，纬度，地图放大级别
    map.enableScrollWheelZoom(false);
}
function loadmapbybrower() {

    var  map = new BMap.Map("mapview");
    var point = new BMap.Point(116.331398,39.897445);
    map.centerAndZoom(point,12);

    var geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(function(r){
        if(this.getStatus() == BMAP_STATUS_SUCCESS){
            var mk = new BMap.Marker(r.point);
            map.addOverlay(mk);
            map.panTo(r.point);
            //alert('您的位置：'+r.point.lng+','+r.point.lat);
        }
        else {
            alert('failed'+this.getStatus());
        }
    },{enableHighAccuracy: true})

}
function backtoyilong() {
    //31.2761927436,106.3097289263,仪陇县经纬度
    var map = new BMap.Map("mapview");
    map.centerAndZoom(new BMap.Point(106.3097289263,31.2761927436),14);//经度，纬度，地图放大级别
    map.enableScrollWheelZoom(false);
}
function findbyinputwithparameter() {
    var input_r=$('#input1').val();
    var input_c=$('#inputcontent').val();
    var js;
    if(parseInt(input_r)/1000>=10){
        js=12;


    }
    else {
        js=15;
    }
    alert(input_c+input_r);
    var map = new BMap.Map("mapview");            // 创建Map实例
    var mPoint = new BMap.Point(116.404, 39.915);
    map.enableScrollWheelZoom();
    map.centerAndZoom(mPoint,js);

    var circle = new BMap.Circle(mPoint,parseInt(input_r),{fillColor:"blue", strokeWeight: 1 ,fillOpacity: 0.3, strokeOpacity: 0.3});
    map.addOverlay(circle);
    var local =  new BMap.LocalSearch(map, {renderOptions: {map: map, autoViewport: false}});
    local.searchNearby(input_c,mPoint,parseInt(input_r));

    
}
