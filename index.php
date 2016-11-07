<?php get_header(); ?>
	<div id="map" ng-init="init()"></div>
	<div id="myLocationContainer">
		<switch id="trackingSwitch" name="tracking" ng-model="isTrackingEnabled" on="On" off="Off" class="purple" ng-change="determineTracking"></switch>
		<label>Your Location</label>
	</div>
	<div ng-show="isLocationSelected" id="locationPage">
		<div id="locationInfo">
			<h1>{{ Location.title }}</h1>
			<p>{{ Location.description }}</p>
		</div>
	</div>
<?php get_footer(); ?>