var map_object;

var happiness_raw = [[120.2, 30.25, 1000], [120.23, 30.2, 100]];


window.onload = function(){
    function init_map() {
        document.getElementById("map_container").style.height
            = window.innerHeight - document.getElementById("top_navi").offsetHeight + "px";
        map_object = new AMap.Map("map_container",{
            resizeEnable: true, zoom: 10, center:[120.2,30.25]
        });
        map_object.setMapStyle("blue_night");
    }
    init_map();
}

window.onresize = function(){
    document.getElementById("map_container").style.height
        = window.innerHeight - document.getElementById("top_navi").offsetHeight + "px";
}
