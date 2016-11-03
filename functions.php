<?php

	add_theme_support("post-thumbnails");
	add_action("wp_enqueue_scripts", 'enqueue_theme_scripts');
	add_action("wp_enqueue_scripts", 'get_all_locations');
	
	function enqueue_theme_scripts() {
		wp_enqueue_script("angular", "https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js");
		wp_enqueue_script("angular-routes", "https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular-route.min.js", array("angular"));
		wp_enqueue_script("app", get_template_directory_uri()."/js/app.js");
		wp_enqueue_script("angular-switch", get_template_directory_uri()."/angular-ui-switch-master/angular-ui-switch.js");
		wp_enqueue_style("switch-style", get_template_directory_uri()."/angular-ui-switch-master/angular-ui-switch.min.css");
	}
	
	function get_all_locations() {
		$json = file_get_contents(home_url()."/carmel_json");
		wp_localize_script("app", "locations", json_decode($json));
	}
	
	show_admin_bar(false);
?>