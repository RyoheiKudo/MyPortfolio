function initMap() {
  "use strict";

  var target = document.getElementById("target");
  var map;
  var tokyo = {
    lat: 35.681167,
    lang: 139.767052,
  };

  map = new google.maps.Map(target, {
    center: tokyo,
    // zoom:0,
    // zoom:6,
    zoom: 15,
    // disableDefaultUI: true,
    // zoomControl: true,
    // //mapTyped:"satellite",
    // mapTyped: "hybrid",
    // clickableIcons: false,
  });

  // map.addLister("click", function (e)
  // {
  //   console.log(e.latLng.lat());
  //   console.log(e.latLng.lng());
  //   console.log(e.latLng.toStriong());
  //   //this.setCenter(e.latLng)
  //   this.panTo(e.latLng);
  // })

  // maker = new google.maps.Marker({
  //   position: tokyo,
  //   map: map,
  //   title: "tokyo!",
  //   //ison:"icon.png"
  //   ison: {
  //     url: "icon.png",
  //     scaledSize: new google.maps.Size.(24,24),
  //   },
  //   animation: google.maps.Animation.BOUNCE,
  //   animation: google.maps.Animation.DROP,
  // });

  // map.addLister("click", function (e) {
  //   var maker = new google.maps.Maker({
  //     position: e.latLng,
  //     map: map,
  //     title: e.latLng.toString(),
  //     animation: google.maps.Animation.DROP,
  //   });
  //   maker.addLister("click", function () {
  //     this.Map(null);
  //   });
  //   console.log(e.latLng.lat());
  //   console.log(e.latLng.lng());
  //   console.log(e.latLng.toStriong());
  //   //this.setCenter(e.latLng)
  //   this.panTo(e.latLng);
  // });

  // infoWindow = new google.maps.InfoWindow({
  //   position: tokyo,
  //   // content: "Hello!Hello!Hello!Hello!Hello!Hello!"
  //   // content: "<strong>>Hello!</strong>Hello!Hello!Hello!Hello!Hello!"

  //   content: document.getElementById("info"),
  //   maxWidth: 100,
  // });

  
}
