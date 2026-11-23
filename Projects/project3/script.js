function initMap() {
  var mapDiv = document.getElementById("map");
  if (!mapDiv) return; // not on the map page

  var toulouse = { lat: 43.6047, lng: 1.4442 };

  var myMap = new google.maps.Map(mapDiv, {
    center: toulouse,
    zoom: 11,
  });

  
  var marker1 = new google.maps.Marker({
    position: toulouse,
    map: myMap,
    animation: google.maps.Animation.BOUNCE,
    title: "Toulouse, France",
    icon: {
      url: "images/toulouse.png",
      scaledSize: new google.maps.Size(45, 45),
    },
  });
  var info1 = new google.maps.InfoWindow({
    content: "<h2>Toulouse, France</h2><p>Where I completed my aerospace engineering and software internship at Airbus.</p>",
  });
  marker1.addListener("mouseover", function () {
    info1.open(myMap, marker1);
  });


  var marker2 = new google.maps.Marker({
    position: {lat: 43.5864, lng: 1.4934},
    map: myMap,
    title: "Cité de l'espace",
    icon: {
      url: "images/kitty.jpeg",
      scaledSize: new google.maps.Size(45, 45),
    },
  });
  var info2 = new google.maps.InfoWindow({
    content: "<h2>Cité de l'espace</h2><p>A space museum I visited in Toulouse.</p>",
  });
  marker2.addListener("mouseover", function () {
    info2.open(myMap, marker2);
  });

  
  var marker3 = new google.maps.Marker({
    position: {lat: 43.629, lng: 1.363},
    map: myMap,
    title: "Airbus",
    icon: {
      url: "images/Airbus.jpeg",
      scaledSize: new google.maps.Size(45, 45),
    },
  });
  var info3 = new google.maps.InfoWindow({
    content: "<h2>Airbus</h2><p>Where my internship took place.</p>",
  });
  marker3.addListener("mouseover", function () {
    info3.open(myMap, marker3);
  });
}