# MAH Ixd master program p5js header template
This is a template for those who want to be part of the p5js gallery part at the header of the landing page of the MAH Interaction design master programme website.

If you download this template you can run the file "template.html" and it will execute the "background.js" file, however there are a couple of things you should take into account if you want your sketch to be part of the gallery.

If your sketch is ready to be part of the gallery, send it to bones.charles@gmail.com, specifying if any external library needs to be added for your sketch to run.

## P5js
[P5js](https://p5js.org/) is a project created by [Lauren McCarthy](http://lauren-mccarthy.com/) with support from the [Processing Foundation](https://processingfoundation.org/) and the [NYC ITP](https://tisch.nyu.edu/itp) which aims to merge the possibilities and the communities of two big ones, the [Processing language](https://processing.org/) and Javascript, in order to bring the creative qualities of one into the world wild web :p

For the first timers, we suggest to read the documentation in the [P5js](https://p5js.org/) website and the amazing Daniel Shiffman's [youtube channel](https://www.youtube.com/user/shiffman/videos).

## background.js

The file "background.js" is the main file and it is there where you can write you amazing sketch, however be aware that there are some element that you should not modify, or it will change the behavior of the sketch in the gallery.

### Variable section

In the variable section there are two lines a you should modify with your name and the url to your portfolio.

```
var authorName="Mario Rodriguez";
var authorSite="bones.sikuani.net";
```

Please use a url shortener if the link is too long.

### Setup section

In the setup there are two functions which should not be moved or deleted.

```
//Leave this functions here
canvasSetup();
authorInfo();
//-------------------------
```

### Additional functions

At the bottom of the code there are three functions which should not be deleted or moved since they are connected to the formating and placement of the author's name, the setup of the canvas in the HTML file and the resize function in case the browser size changes.

## template.html and style.css

Please don't modify this file, except if it is stricly necessary, for instance , adding a library and if so, please notify these issues when you send the file to us.
