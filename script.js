
function initMap(){
  var options = {
      zoom: 13,
      center:{lat:16.4023,lng:120.5960}
  }

  var map = new google.maps.Map(document.getElementById('map'),options);
  
  //LISTEN FOR CLICKS ON MAP
  google.maps.event.addListener(map, 'click', 
      function(event){
          // add marker
          addMarker({coords:event.latLng})
  }
);

  // ARRAY OF MARKERS
  var markers = [
      {
      coords:{lat:16.4138,lng:120.5914},
      iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
      content:'<h6> BAGUIO CITY HALL </h6>'
      },
      {
      coords:{lat:16.4046,lng:120.5996},
      content:'<h6> BAGUIO CONVENTION CENTER </h6>'
      },
      {
      coords:{lat:16.4151,lng:120.5975},
      content:'<h6> UNIVERSITY OF BAGUIO </h6>'
      }
  ];

  // LOOP THROUGH MARKERS
  for(var i = 0; i < markers.length;i++){
      addMarker(markers[i]);
  }

  //ADD MARKER FUNCTION

  function addMarker(props){
      var marker = new google.maps.Marker({
      position:props.coords,
      map:map,
      icon:props.iconImage
  });
  
  // CHECK FOR CUSTOM ICON
  if(props.iconImage){
      //SET ICON IMAGE
      marker.setIcon(props.iconImage);
  }

  // CHECK CONTENT
  if(props.content){
      var infoWindow = new google.maps.InfoWindow({
          content:props.content
      });

      marker.addListener('click', function(){
          infoWindow.open(map, marker);
      });
  }
  }
}