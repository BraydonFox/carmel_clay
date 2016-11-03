var app = angular.module('index', ['uiSwitch']);

app.controller('IndexController', ['$scope', function($scope) {
	
	$scope.locations = locations.locations;
	$scope.isLocationSelected = false;
	
	$scope.isTrackingEnabled = false;
	$scope.userLocationMarker = null;
	$scope.watchID = null;
	
	$scope.init = function() {
		console.log("app.js loaded.");
		var mapOption = {
			center: {lat:39.9774625, lng:-86.1297371},
			minZoom: 16,
			zoom: 17,
			zoomControlOptions: {
				position: google.maps.ControlPosition.RIGHT_TOP
			},
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			mapTypeControlOptions: {
				mapTypeIds: [google.maps.MapTypeId.ROADMAP, google.maps.MapTypeId.SATELLITE]
			}
		};
		$scope.map = new google.maps.Map(document.getElementById('map'), mapOption);
		
		var infoWindow = new google.maps.InfoWindow({
			content:""
		});
		
		for (var i=0; i < $scope.locations.length; i++) {
			var location = $scope.locations[i];
			var latLng = new google.maps.LatLng (
				location.latitude,
				location.longitude
			);
			
			var marker = new google.maps.Marker ({
				position: latLng,
				map: $scope.map,
				title: location.title
			});
			
			google.maps.event.addListener(marker, 'click', function() {
				var div = document.createElement("div");
				div.innerHTML = this.title;
				div.id = this.data;
				infoWindow.setContent(div);
				infoWindow.open($scope.map, this);
			});
		}
	};
	
	$scope.determineTracking = function() {
		if($scope.isTrackingEnabled) {
			if(navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(drawPosition, handleError, {enableHighAccuracy: true});
				console.log("Tracking enabled.");
			} else {
				console.log("Location tracking not supported.");
			}
		} else {
			$scope.userLocationMarker.setMap(null);
			$scope.userLocationMarker = null;
			navigator.geolocation.clearWatch($scope.watchID);
			console.log("Tracking disabled.");
		}
	};
	
	var handleError = function() {
		console.log("Location tracking error.");
	};
	
	var drawPosition = function(position) {
		var geolocate = new google.maps.LatLng(
			position.coords.latitude,
			position.coords.longitude
		);
		createMarker(geolocate);
		startTracking();
	};
	
	var createMarker = function(geolocate) {
		$scope.userLocationMarker = new google.maps.Marker({
			icon:{
				path: google.maps.SymbolPath.CIRCLE,
				strokeColor: '#CCC',
				strokeOpacity: 1,
				strokeWeight: 3,
				fillColor: '#833',
				fillOpacity: 1,
				scale: 10
			},
			position: geolocate,
			map: $scope.map
		});
	}
	
	var startTracking = function() {
		var option = {
			enableHighAccuracy: true,
			maximumAge: 0
		};
		$scope.watchID = navigator.geolocation.watchPosition(userLocation, handleError, option);
	};
	
	var userLocation = function(position) {
		var latitude = position.coords.latitude;
		var longitude = position.coords.longitude;
	};
}]);