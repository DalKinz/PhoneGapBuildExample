var map;
var watchID;

function onGetGeolocationSuccess(position) {
    // Centre the map on the new location
    var coords = position.coords || position.coordinate || position;
    var latLng = new google.maps.LatLng(coords.latitude, coords.longitude);
    map.setCenter(latLng);
    map.setZoom(12);
    var marker = new google.maps.Marker({
	    map: map,
	    position: latLng,
	    title: 'Why, there you are!'
    });
    document.getElementById('info').innerHTML = 'Looking for <b>' +
        coords.latitude + ', ' + coords.longitude + '</b>...';

    // And reverse geocode.
    (new google.maps.Geocoder()).geocode({latLng: latLng}, function(resp) {
		  var place = "You're around here somewhere!";
		  if (resp[0]) {
			  var bits = [];
			  for (var i = 0, I = resp[0].address_components.length; i < I; ++i) {
				  var component = resp[0].address_components[i];
				  if (contains(component.types, 'political')) {
					  bits.push('<b>' + component.long_name + '</b>');
					}
				}
				if (bits.length) {
					place = bits.join(' > ');
				}
				marker.setTitle(resp[0].formatted_address);
			}
			document.getElementById('info').innerHTML = place;
	  });
    
    
   /* $('#')
    var element = document.getElementById('geolocation');
    element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
                        'Longitude: ' + position.coords.longitude     + '<br />' +
                        '<hr />'      + element.innerHTML;*/
}
function onGetGeolocationError(error) {
    var msg;
    switch(error.code) {
      case error.UNKNOWN_ERROR:
        msg = "Unable to find your location";
        break;
      case error.PERMISSION_DENINED:
        msg = "Permission denied in finding your location";
        break;
      case error.POSITION_UNAVAILABLE:
        msg = "Your location is currently unknown";
        break;
      case error.BREAK:
        msg = "Attempt to find location took too long";
        break;
      default:
        msg = "Location detection not supported in browser";
    }
    
    document.getElementById('info').innerHTML = msg;
    
    $('#popupMessage').html('code: ' + error.code    + '<br />' +
                            'message: ' + error.message + '<br />');
    $('#popupMessage').popup('open');
}

function getGeolocation(){
    return navigator.geolocation.watchPosition(onGetGeolocationSuccess, onGetGeolocationError, { timeout: 30000 });
}


function onDeviceReady(){
    alert('device ready');
    
    watchId = getGeoLocation();
}

function init(){
    document.addEventListener("deviceready", onDeviceReady,false);
    
    var latlng = new google.maps.LatLng(-25.363882,131.044922);
    var myOptions = {
      zoom: 4,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.TERRAIN,
      disableDefaultUI: true
    }
    map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
}

function contains(array, item) {
    for (var i = 0, I = array.length; i < I; ++i) {
        if (array[i] == item) return true;
    }
    return false;
}