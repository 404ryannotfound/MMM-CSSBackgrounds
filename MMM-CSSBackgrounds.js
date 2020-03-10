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

	config:null,

	// Default module config.
	defaults: {
		text: "Hello World!",
                theme: "particles"      
	},

	requiresVersion: "2.1.0", // Required version of MagicMirror


	themes: {
		"particles" : { 
			"effectPrefix"  : "particles"},		// Lots of floating colorful particles    
		"fireflies"   : { 
			"effectPrefix" : "fireflies"},		// Lots of small floating insects		 
		"rain"   : { 
			"effectPrefix" : "rain"},		// Raindrops witha unique splash effect
		"risingstars"   : { 
			"effectPrefix" : "risingstars"},	// Parallax stars rising from the bottom
		"animatedgradient"   : { 
			"effectPrefix" : "animatedgradient"},	// Colourful ever changing gradient background color
		"animatedbgcolor"   : { 
			"effectPrefix" : "animatedbgcolor"},	// Colourful ever changing background color (9 colors)
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
		"snowflakes"   : { 
			"effectPrefix" : "snowflakes"},		// A scattering of snow falling from te top	
		"bubbles"   : { 
			"effectPrefix" : "bubbles"},		// Small bubbles rising from the bottom	
		"bubblescoloredbg"   : { 
			"effectPrefix" : "bubblescoloredbg"},	// Small bubbles rising from the bottom, but with a changing blue background	
		"beer"   : { 
			"effectPrefix" : "beer"},		// Small bubbles rising from the bottom, beer colored background	
		"blobs"   : { 
			"effectPrefix" : "blobs"}		// Two blobs animatying on the screen
	
	},

	init: function(){
		Log.log(this.name + " is in initialising...");
	},
	
	start: function() {
		Log.log(this.name + " is starting...");
	},
	
	loaded: function(callback) {
		Log.log(this.name + " has loaded.");
		callback();
	},

	getScripts: function() {
		return [];
	},

	getStyles: function () {
		return [
			"MMM-CSSBackgrounds.css",
		];
	},

	// this is the major worker of the module, it provides the displayable content for this module
	getDom: function() {
		var wrapper = document.createElement("div");
		
		var theme = this.config.theme;
				
		var root = document.getElementsByTagName( 'html' )[0];

		// if user selected a theme in config, use it
		if(this.config.hasOwnProperty("theme")){
                        wrapper.className = this.config.theme;
                        root.setAttribute( 'class', this.config.theme );
		}
		else{
			root.setAttribute( 'class', "particles");
		}

                var BGOutput = document.createElement("div");
		BGOutput.classList.add(this.config.theme);

                if (this.config.theme === "particles"){
			BGOutput.innerHTML =   "<div id='particle-container'><div class='particle'></div><div class='particle'></div><div class='particle'></div><div class='particle'></div><div class='particle'></div><div class='particle'></div><div class='particle'></div><div class='particle'></div><div class='particle'></div><div class='particle'></div><div class='particle'></div><div class='particle'></div><div class='particle'></div><div class='particle'></div><div class='particle'></div><div class='particle'></div><div class='particle'></div><div class='particle'></div><div class='particle'></div><div class='particle'></div><div class='particle'></div><div class='particle'></div><div class='particle'></div><div class='particle'></div><div class='particle'></div><div class='particle'></div><div class='particle'></div><div class='particle'></div><div class='particle'></div><div class='particle'></div></div>";
			} else if (this.config.theme === "firefly") {
			BGOutput.innerHTML =   "<div class='fireflies'><div class='firefly'></div><div class='firefly'></div><div class='firefly'></div><div class='firefly'></div><div class='firefly'></div><div class='firefly'></div><div class='firefly'></div><div class='firefly'></div><div class='firefly'></div><div class='firefly'></div></div>";
			} else if (this.config.theme === "risingparticles") {
			BGOutput.innerHTML =   "<div class='animation-wrapper'><div class='particle particle-1'></div><div class='particle particle-2'></div><div class='particle particle-3'></div><div class='particle particle-4'></div></div>";
			} else if (this.config.theme === "animatedgradient") {
			BGOutput.innerHTML =   "";
			} else if (this.config.theme === "animatedbgcolor") {
			BGOutput.innerHTML =   "";
			} else if (this.config.theme === "slidingdiagonal") {
			BGOutput.innerHTML =   "<div class='bg'></div><div class='bg bg2'></div><div class='bg bg3'></div>";
			} else if (this.config.theme === "lavalamp") {
			BGOutput.innerHTML =   "<div class='lamp'><div class='lava'><div class='blob'></div><div class='blob'></div><div class='blob'></div><div class='blob'></div><div class='blob'></div><div class='blob'></div><div class='blob'></div><div class='blob'></div><div class='blob top'></div><div class='blob bottom'></div></div></div> <svg xmlns='http://www.w3.org/2000/svg' version='1.1'> <defs> <filter id='goo'> <feGaussianBlur in='SourceGraphic' stdDeviation='10' result='blur' /> <feColorMatrix in='blur' mode='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 18 -7' result='goo' /> <feBlend in='SourceGraphic' in2='goo' /> </filter> </defs> </svg>";
			} else if (this.config.theme === "bokeh") {
			BGOutput.innerHTML =   "<div class='background'> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span></div>";
			} else if (this.config.theme === "bokehgrey") {
			BGOutput.innerHTML =   "<div class='background'> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span></div>";
			} else if (this.config.theme === "risingcubes") {
			BGOutput.innerHTML =   "<div class='area'><ul class='circles'><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul></div>";
			} else if (this.config.theme === "tritravelers") {
			BGOutput.innerHTML =   "<div class='triangleouter'><div class='wrap'><div class='tri'></div><div class='tri'></div><div class='tri'></div><div class='tri'></div><div class='tri'></div><div class='tri'></div><div class='tri'></div><div class='tri'></div><div class='tri'></div><div class='tri'></div><div class='tri'></div><div class='tri'></div><div class='tri'></div><div class='tri'></div><div class='tri'></div></div></div>";	
			} else if (this.config.theme === "bubbles") {
			BGOutput.innerHTML =   "<div class='bottom-particles'><div class='bubble'></div><div class='bubble'></div><div class='bubble'></div><div class='bubble'></div><div class='bubble'></div><div class='bubble'></div><div class='bubble'></div><div class='bubble'></div><div class='bubble'></div><div class='bubble'></div><div class='bubble'></div><div class='bubble'></div><div class='bubble'></div><div class='bubble'></div><div class='bubble'></div><div class='bubble'></div><div class='bubble'></div><div class='bubble'></div><div class='bubble'></div><div class='bubble'></div></div>";					
			} else if (this.config.theme === "bubblescoloredbg") {
			BGOutput.innerHTML =   "<div class='bottom-particles'><div class='bubble'></div><div class='bubble'></div><div class='bubble'></div><div class='bubble'></div><div class='bubble'></div><div class='bubble'></div><div class='bubble'></div><div class='bubble'></div><div class='bubble'></div><div class='bubble'></div><div class='bubble'></div><div class='bubble'></div><div class='bubble'></div><div class='bubble'></div><div class='bubble'></div><div class='bubble'></div><div class='bubble'></div><div class='bubble'></div><div class='bubble'></div><div class='bubble'></div></div>";					
			} else if (this.config.theme === "beer") {
			BGOutput.innerHTML =   "<div id='foam'><div class='bottom-particles'><div class='bubble'></div><div class='bubble'></div><div class='bubble'></div><div class='bubble'></div><div class='bubble'></div><div class='bubble'></div><div class='bubble'></div><div class='bubble'></div><div class='bubble'></div><div class='bubble'></div><div class='bubble'></div><div class='bubble'></div><div class='bubble'></div><div class='bubble'></div><div class='bubble'></div><div class='bubble'></div><div class='bubble'></div><div class='bubble'></div><div class='bubble'></div><div class='bubble'></div></div></div>";					
			} else if (this.config.theme === "snowflakes") {
			BGOutput.innerHTML =  "<div class='snowflakes' aria-hidden='true'><div class='snowflake snowflake1'></div><div class='snowflake snowflake1'></div><div class='snowflake snowflake3'></div><div class='snowflake snowflake2'></div><div class='snowflake snowflake1'></div><div class='snowflake snowflake4'></div><div class='snowflake snowflake2'></div><div class='snowflake snowflake1'></div><div class='snowflake snowflake4'></div><div class='snowflake snowflake2'></div></div>";
			} else if (this.config.theme === "blobs") {
			BGOutput.innerHTML =  "<div class='blobpit'></div>";
			} else {
			//Default to particles
			BGOutput.innerHTML =   "Default to particles<div class='animation-wrapper'><div class='particle particle-1'></div><div class='particle particle-2'></div><div class='particle particle-3'></div><div class='particle particle-4'></div></div>";
		}

		return BGOutput;

		// pass the created content back to MM to add to DOM.
		return wrapper;
	},
	
});
