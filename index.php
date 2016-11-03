<?php get_header(); ?>
	<div id="map" ng-init="init()"></div>
	<div id="myLocationContainer">
		<switch id="trackingSwitch" name="tracking" ng-model="isTrackingEnabled" on="On" off="Off" class="purple" ng-change="determineTracking"></switch>
		<label>My Location: {{ isTrackingEnabled }}</label>
	</div>
	<div ng-show="isLocationSelected">
		
	</div>
<?php get_footer(); ?>