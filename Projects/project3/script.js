"use strict";


document.addEventListener("DOMContentLoaded", function () {
  var btn = document.getElementById("questionsBtn");
  if (btn) {
    btn.addEventListener("click", function () {
      alert("If you have questions, contact me at:\nsshafi1@hawk.illinoistech.edu");
    });
  }
});


function initMap() {
  var mapDiv = document.getElementById("map");
  if (!mapDiv) return; // not on the map page

  var myLocation = { lat: 43.6047, lng: 1.4442 }; // Toulouse, France

  var myMap = new google.maps.Map(mapDiv, {
    center: myLocation,
    zoom: 12,
  });

  var marker = new google.maps.Marker({
    position: myLocation,
    map: myMap,
    animation: google.maps.Animation.BOUNCE,
    icon: "images/map-icon.png",
    title: "Toulouse, France",
  });

  var contentString =
    "<h2>Toulouse, France</h2>" +
    "<p>Where I completed my aerospace engineering and software internship at Airbus.</p>";

  var infowindow = new google.maps.InfoWindow({
    content: contentString,
  });

  // Feature 3: info window opens on mouseover
  marker.addListener("mouseover", function () {
    infowindow.open(myMap, marker);
  });
}


window.initMap = initMap;