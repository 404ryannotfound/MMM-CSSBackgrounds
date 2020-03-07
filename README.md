# Module: MMM-CSSBackgrounds

Pure animated CSS backgrounds for use with Magic Mirror 2 on a Raspberry Pi.
 
The MMM-CSSBackgrounds module allows you to display an animation in the background. All animations are CSS (Cascading Style Sheet) based with no dependencies on Javascript frameworks.

## IMPORTANT NOTE
> This module is currently not functioning, please DO NOT INSTALL :frowning_face:

## Screenshots

COMING SOON!


## Themes

Name | Description | Preview
------------ | ------------- | -------------
particles|Lots of small floating particles| Link coming soon...
fireflies|Lots of small floating insects| Link coming soon...
rain|Raindrops witha unique splash effect| Link coming soon...
risingstars|Parallax stars rising from the bottom| Link coming soon...
animatedgradient|Colourful ever changing background color| Link coming soon...
slidingdiagonal|3 layers sliding left/right on a diagnonal| Link coming soon...
lavalamp|Floating and falling lava blobs| Link coming soon...
bokeh|Colourful bokeh blobs| Link coming soon...
bokehgrey|Grey bokeh blobs| Link coming soon...
risingcubes|Slowly spinning cubes from the bottom| Link coming soon...
tritravelers|Small triangles floating towards the center| Link coming soon...
bubbles|Small bubbles rising from the bottom| Link coming soon...

## Dependencies / Requirements
This module requires no special dependencies. 

## Operation
This module simply adds CSS classes to the Magic Mirror `index.html` template, and uses minimal markup to create the animated backgrounds.

## Installation

To install, cd into the `modules` directory, clone, cd into the newly created `MMM-CSSBackgrounds` directory, then install.
```
cd MagicMirror/modules
git clone https://github.com/404ryannotfound/MMM-CSSBackgrounds.git
cd MMM-CSSBackgrounds
npm install
```
Alternatively:

Download the zip file https://github.com/404ryannotfound/MMM-CSSBackgrounds/archive/master.zip. Unzip the contents into the modules directory of your Magic Mirror install. Rename the '```MMM-CSSBackgrounds-master```' folder to '```MMM-CSSBackgrounds```'.

## Loading the module
Once downloaded, add the module to the modules array in the ```config/config.js``` file:

### Example:
```
modules: [
   {
   module: "MMM-CSSBackgrounds", 
   position: "fullscreen_below",
   config: {
    text: "Hello world =)!" 
  }   
 }, 
];
```

## Contributing

Contributors are more than welcome! :hugs: Please read [CONTRIBUTING.md](https://gist.github.com/404ryannotfound/0ca9e2841326f3b115b437008fec5233) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

* **404ryannotfound** - *Initial work* - [404ryannotfound](https://github.com/404ryannotfound)

See also the list of [contributors](https://github.com/404ryannotfound/MMM-CSSBackgrounds/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* [Magic Mirror](https://github.com/MichMich/MagicMirror) For the awesome MagicMirror²
* [PurpleBooth](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2) for the wonderful Github templates

### CSS Inspiration and code
* [Particles](https://codepen.io/robinselmer/pen/mRjoXr) by Robin Selmer
* [Fireflies](https://codepen.io/mikegolus/pen/Jegvym)  by Mike Golus
* [Rain](https://codepen.io/Coderesting/pen/RwwLPZM)  by Yannick Brandt (slightly modified)
* [Rising Stars](https://codepen.io/saransh/pen/BKJun/) by  Saransh Sinha 
* [Animated Gradient](https://codepen.io/P1N2O/pen/pyBNzX/) by Manuel Pinto 
* [Shooting Stars](https://codepen.io/YusukeNakaya/pen/XyOaBj/) by Yuseke Nakaya 
* [Sliding Diagonal](https://codepen.io/chris22smith/pen/RZogMa) by Chris Smith (Slightly modified)
* [Lava Lamp](https://codepen.io/Rosefae/pen/XPaMYL) by Rose Liu (Heavily modified)
* [Bokeh](https://codepen.io/keithclark/pen/ZjrwpW/) by Keith Clark (Slightly modified, 2 versions available)
* [Rising Cubes](https://codepen.io/mohaiman/pen/MQqMyo) by Mohammed Abdul Mohaiman (Modified slightly)
* [Tri Travelers](https://codepen.io/natewiley/pen/WvEwej) by Nate Wiley (Modified slightly)
* [Bubbles](https://codepen.io/Paolo-Duzioni/pen/MQmbJo) by Paulo Duzioni (Modified slightly)
