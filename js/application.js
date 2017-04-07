$(document).ready(function () {
  map();
});

function map() {
  var mapProp = {
    center:new google.maps.LatLng(37.434499, -121.902226),
    zoom:20,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var myLatLng= {lat: 37.434499,lng: -121.902226}
  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
  var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: "Koong's"
        });

}
