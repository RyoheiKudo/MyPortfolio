"use strict";

const MyLatLng = new google.maps.LatLng(35.660407, 139.709517);
const Options = {
  zoom: 15, //地図の縮尺値
  center: MyLatLng, //地図の中心座標
  mapTypeId: "roadmap", //地図の種類
};
const map = new google.maps.Map(document.getElementById("map"), Options);