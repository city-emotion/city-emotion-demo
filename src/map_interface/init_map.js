var map_object = {};

window.onload = function(){
    function init_map() {
        map_object.dom = document.getElementById("map_container");
        map_object.dom.style.height
            = window.innerHeight - document.getElementById("top_navi").offsetHeight + "px";
        map_object.obj = new qq.maps.Map(map_object.dom, {
            center: new qq.maps.LatLng(39.916527,116.397128), 
            zoom:8
        });
    }
    init_map();
}

window.onresize = function(){
    map_object.dom.style.height
            = window.innerHeight - document.getElementById("top_navi").offsetHeight + "px";
}