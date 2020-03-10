# Module: MMM-CSSBackgrounds

Pure animated CSS backgrounds for use with Magic Mirror 2 on a Raspberry Pi.
 
The MMM-CSSBackgrounds module allows you to display an animation in the background. All animations are CSS (Cascading Style Sheet) based with no dependencies on Javascript frameworks.

## Screenshots

![Particles screenshot](/public/particles.png)
View the [screenshots](https://github.com/404ryannotfound/MMM-CSSBackgrounds/tree/master/public) or [Codepen collection](https://codepen.io/collection/nJOabE) to see the animations (also directly linked below).

## Themes

Name | Description | Preview
------------ | ------------- | -------------
particles|Lots of small floating particles| [View on Codepen](https://codepen.io/404ryannotfound/full/bGdYEwG)
fireflies|Lots of small floating insects| [View on Codepen](https://codepen.io/404ryannotfound/full/wvapBLK)
risingstars|Parallax stars rising from the bottom| [View on Codepen](https://codepen.io/404ryannotfound/full/NWqXPRQ)
animatedgradient|Colourful ever changing gradient background color| [View on Codepen](https://codepen.io/404ryannotfound/full/XWbzmZd)
animatedbgcolor|Colourful ever changing background color (9 colors)|[View on Codepen](https://codepen.io/404ryannotfound/full/XWbzmZd)
slidingdiagonal|3 layers sliding left/right on a diagnonal| [View on Codepen](https://codepen.io/404ryannotfound/full/wvaPPjQ)
lavalamp|Floating and falling lava blobs| [View on Codepen](https://codepen.io/404ryannotfound/full/gOpXpMM)
bokeh|Colourful bokeh blobs| [View on Codepen](https://codepen.io/404ryannotfound/full/abOEEaV)
bokehgrey|Grey bokeh blobs| [View on Codepen](https://codepen.io/404ryannotfound/full/YzXYYdR)
risingcubes|Slowly spinning cubes from the bottom| [View on Codepen](https://codepen.io/404ryannotfound/full/XWbzZRx)
tritravelers|Small triangles floating towards the center| [View on Codepen](https://codepen.io/404ryannotfound/full/zYGpGXX)
bubbles|Small bubbles rising from the bottom| [View on Codepen](https://codepen.io/404ryannotfound/full/OJVzQJP)
bubblescoloredbg|Smallbubbles rising from the bottom, blue color changing background|[View on codepen](https://codepen.io/404ryannotfound/full/VwLyyRV)
beer|Turn your screen into a beer vestibule| [View on Codepen](https://codepen.io/404ryannotfound/full/poJpadd)

## Dependencies / Requirements
This module requires no special dependencies, however, it was tested using the Raspberry Pi 4 2GG. Performance cannot be guaranteed on older devices with less memory.

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
	theme: "animatedgradient"       
	/* Choose from: particles, firefly, risingparticles animatedgradient, animatedbgcolor, slidingdiagonal, lavalamp, bokeh, bokehgrey, risingcubes, tritravelers, bubbles, bubblescoloredbg, beer, snowflakes, blobs */

  }   
 }, 
];
```
## CSS Modifications

To assist with accessibuility & readability, All fonts and screen items have been set to #ffffff (white) in the CSS.
If you wish to modify, simply edit the ```MMM-CSSBackgrounds.css file```. You can also modify the ```html``` color also, if you wish to change the background from a blue circular gradient to black.

**Lavalamp** color can also be changed in the CSS, with sample colors given. (These may be configurable via config.js moving forward).

## Issues known/contributing

Log any issues to the [Issues](https://github.com/404ryannotfound/MMM-CSSBackgrounds/issues) page.

### Known issues/Limitations

Whilst care has been taken to avoid excessive animation that would degrade the Pi's performance, please test and monitor your usage of this module. **Lavalamp** in particular seems slightly intensive on the rendering, so please take care if you Pi is prone to overheating.


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
* [Animated Color Cycle](https://codepen.io/404ryannotfound/pen/XWbzmZd) by 404ryannotfound
* [Shooting Stars](https://codepen.io/YusukeNakaya/pen/XyOaBj/) by Yuseke Nakaya 
* [Sliding Diagonal](https://codepen.io/chris22smith/pen/RZogMa) by Chris Smith (Slightly modified)
* [Lava Lamp](https://codepen.io/Rosefae/pen/XPaMYL) by Rose Liu (Heavily modified)
* [Bokeh](https://codepen.io/keithclark/pen/ZjrwpW/) by Keith Clark (Slightly modified, 2 versions available)
* [Rising Cubes](https://codepen.io/mohaiman/pen/MQqMyo) by Mohammed Abdul Mohaiman (Modified slightly)
* [Tri Travelers](https://codepen.io/natewiley/pen/WvEwej) by Nate Wiley (Modified slightly)
* [Bubbles](https://codepen.io/Paolo-Duzioni/pen/MQmbJo) by Paulo Duzioni (Modified slightly)
* [Beer](https://codepen.io/404ryannotfound/full/poJpadd) by 404ryannotfound (bubbles by Paulo Duzioni)
