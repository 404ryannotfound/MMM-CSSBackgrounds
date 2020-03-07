/* Magic Mirror
 * Module: MMM-CSSBackgrounds
 * 
 * By__________/\\\________/\\\\\\\_______________/\\\____________
 * ___________/\\\\\______/\\\/////\\\___________/\\\\\___________
 * __________/\\\/\\\_____/\\\____\//\\\________/\\\/\\\__________
 * _________/\\\/\/\\\____\/\\\_____\/\\\______/\\\/\/\\\_________     
 * ________/\\\/__\/\\\____\/\\\_____\/\\\____/\\\/__\/\\\________   
 * _______/\\\\\\\\\\\\\\\\_\/\\\_____\/\\\__/\\\\\\\\\\\\\\\\____
 * ________\///////////\\\//__\//\\\____/\\\__\///////////\\\//___
 * __________________\/\\\_____\///\\\\\\\/_____________\/\\\_____
 * ___________________\///________\///////_______________\///_____
 * ___________________________________________________ryannotfound
 *
 * MIT Licensed.
 */

Module.register("MMM-CSSBackgrounds", {

	// Default module config.
	defaults: {
		text: "Hello World!",
                theme: "particles"      
	},

	requiresVersion: "2.1.0", // Required version of MagicMirror


	themes: {
		"particles" : { 
			"effectPrefix"  : "particles"},		// Lots of small floating particles    
		"fireflies"   : { 
			"effectPrefix" : "fireflies"},		// Lots of small floating insects		 
		"rain"   : { 
			"effectPrefix" : "rain"},		// Raindrops witha unique splash effect
		"risingstars"   : { 
			"effectPrefix" : "risingstars"},	// Parallax stars rising from the bottom
		"animatedgradient"   : { 
			"effectPrefix" : "animatedgradient"},	// Colourful ever changing background color
		"slidingdiagonal"   : { 
			"effectPrefix" : "slidingdiagonal"},	// 3 layers sliding left/right on a diagnonal
		"lavalamp"   : { 
			"effectPrefix" : "lavalamp"},		// Floating and falling lava blobs
		"bokeh"   : { 
			"effectPrefix" : "bokeh"},		// Colourful bokeh blobs
		"bokehgrey"   : { 
			"effectPrefix" : "bokehgrey"},		// Grey bokeh blobs
		"risingcubes"   : { 
			"effectPrefix" : "risingcubes"},	// Slowly spinning cubes from the bottom
		"tritravelers"   : { 
			"effectPrefix" : "tritravelers"},	// Small triangles floating towards the center		
		"bubbles"   : { 
			"effectPrefix" : "bubbles"}		// Small bubbles rising from the bottom	
	
	},

	start: function() {
		Log.log("Starting module: " + this.name);
	},

	getScripts: function() {
		return [];
	},

	getStyles: function () {
		return [
			"MMM-CSSBackgrounds.css",
		];
	},

	getTemplate: function () {
		return "MMM-CSSBackgrounds.njk";
	},

	getTemplateData: function () {
		return this.config;
	}
	/*
	NOTE: getDom is breaking... even as an empty function ¯\_(?)_/¯
	,
    	getDom: function() {
		var themeSettings = this.themes[this.config.theme];
		var wrapper = document.createElement("div");
		
		wrapper.className = themeSettings.effectPrefix;
		
		// Target html and body and add CSS classes
		let html = document.getElementsByTagName("html")[0];
		let body = document.getElementsByTagName("body")[0];
		body.classList.add(themeSettings.effectPrefix);
		html.classList.add(themeSettings.effectPrefix);
		
		return wrapper;
	}*/

});
