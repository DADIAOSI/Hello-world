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
function findroadofbus() {
    var map = new BMap.Map("mapview");            // 创建Map实例
    map.centerAndZoom(new BMap.Point(116.404, 39.915), 12);

    var busName;
    busName=$('#input_bus').val();
    var busline = new BMap.BusLineSearch(map,{
        renderOptions:{map:map,panel:"bussites"},
        onGetBusListComplete: function(result){
            if(result) {
                var fstLine = result.getBusListItem(0);//获取第一个公交列表显示到map上
                busline.getBusLine(fstLine);
            }
        }
    });
    function busSearch(){
        // var busName = 331;
        busline.getBusList(busName);
    }
    setTimeout(function(){
        busSearch();
    },1500);
    location.href="#mapview";//定位到锚点出
}
function roadbystartend() {
    var map = new BMap.Map("mapview");
    var start = $('#start').val();
    var end = $('#end').val();
    alert(start);
    map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
    //三种驾车策略：最少时间，最短距离，避开高速
    var routePolicy = [BMAP_DRIVING_POLICY_LEAST_TIME,BMAP_DRIVING_POLICY_LEAST_DISTANCE,BMAP_DRIVING_POLICY_AVOID_HIGHWAYS];
    map.clearOverlays();
    var i=$("#selectop").val();
    alert(i);
    search(start,end,routePolicy[i]);
    function search(start,end,route){
        var driving = new BMap.DrivingRoute(map, {renderOptions:{map: map, autoViewport: true},policy: route});
        driving.search(start,end);
    }
    location.href="#mapview";
}
function recovery() {
    $('input').val("");//清空input输入的值

}
function onoffquanjin() {

    var map = new BMap.Map('mapview');
    map.centerAndZoom(new BMap.Point(120.305456, 31.570037), 12);
    map.enableScrollWheelZoom(true);
    // 覆盖区域图层测试
    map.addTileLayer(new BMap.PanoramaCoverageLayer());

    var stCtrl = new BMap.PanoramaControl();
    stCtrl.setOffset(new BMap.Size(20, 20));
    map.addControl(stCtrl);//添加全景控件

}
