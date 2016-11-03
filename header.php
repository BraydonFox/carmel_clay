<!DOCTYPE html>
<html lang="en" ng-app="index">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1">
		<link href="<?php bloginfo('template_directory');?>/stylesheets/appstyle.css" rel="stylesheet">
		<title><?php echo get_bloginfo( 'name' );?></title>
		<?php
			wp_enqueue_style("carmel_clay_theme", get_template_directory_uri()."/stylesheets/style.css");
			wp_head();
		?>
		<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAGEaAlV9FVcxB2zi1RZSchOCiuaeFIjYc"></script>
	</head>
	<body ng-controller="IndexController">
		<header>
			<div id="header">
				<h1><?php echo get_bloginfo( 'name' ); ?></h1>
			</div>
		</header>