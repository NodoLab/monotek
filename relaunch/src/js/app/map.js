$(function(){

	// Is there a map on this page?
	var $map = $('#map');
	if (!$map.length) {
		return;
	}

	var centerLat,
		centerLng,
		defaultLat = 55.710864,
		defaultLng = 37.656329;

	// Get the markers
	var $markers = $('.contact__marker');

	// Centermap on first marker found
	if ($markers.length) {
		centerLat = $markers.eq(0).data('lat');
		centerLng = $markers.eq(0).data('lng');
	} else {
		centerLat = defaultLat;
		centerLng = defaultLng;
	}

	var mapOptions = {
		center: new google.maps.LatLng(defaultLat, defaultLng),
		scrollwheel: false,
		zoom: 16
	};

	var gMap = new google.maps.Map(document.getElementById("map"), mapOptions);

	// Add markers to the map
	$markers.each(function(index, item){
		var $marker = $(item),
			lat = $marker.data('lat'),
			lng = $marker.data('lng'),
			title = $marker.data('title'),
			content = $marker.html();

		var gLatLng = new google.maps.LatLng(lat, lng);
		var gMarker = new google.maps.Marker({
			position: gLatLng,
			map: gMap,
			title: title
		});

		var gInfoWindow = new google.maps.InfoWindow({
			content: content
		});

		google.maps.event.addListener(gMarker, 'click', function(){
			gInfoWindow.open(gMap, gMarker);
		});

	})

});