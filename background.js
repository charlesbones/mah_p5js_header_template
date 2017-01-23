//VARIABLES
var x=0;
var y=0;
var a=new arrowX();
// Please don't change this variables
var divHeader;
var bodySize;
//ADD YOUR NAME AN ANY EXTERNAL LINK TO YOUR PORTFOLIO
//Note: please use any url shortener for the link to the protfolio
var authorName="Mario Rodriguez";
var authorSite="http://bones.sikuani.net";
function setup() {
  //Leave this functions here
  canvasSetup();
  authorInfo();
  //-------------------------
  background(200);
}

function draw() {
  fill(200,10);
  rect(0,0,width,height);
  for (var i=0; i<100; i++) {
    a.render();
  }
}
/*-----------
Example of a class
-----------*/
function arrowX() {
  this.x=0;
  this.y=100;
  this.render=function() {
    stroke(255);
    point(this.x, this.y);
    this.x++;
    if (this.x>width) {
      this.x=0;
      this.y=random(0, height);
    }
  }
}
/*-----------
Author's Information formating function
PLEASE DON'T MODIFY THIS FUNCTION
-----------*/
function authorInfo(){
  var author= createP(authorName);
  var authorContact= createA(authorSite,authorSite);
  author.style("position","absolute");
  author.style("right","1%");
  author.style("bottom",'0%');
  author.style("font-size","80%");
  author.parent("p5Gallery");
  authorContact.style("position","absolute");
  authorContact.style("right","1%");
  authorContact.style("bottom",'0%');
  authorContact.style("font-size","70%");
  authorContact.parent("p5Gallery");
}
/*-----------
Canvas setup function
PLEASE DON'T MODIFY THIS FUNCTION
-----------*/
function canvasSetup(){
  divHeader=select('#p5Gallery');
  bodySize=select('body');
  var canvas= createCanvas(bodySize.width , divHeader.height);
  canvas.parent("p5Gallery");
}
/*-----------
Window resize function
PLEASE DON'T MODIFY THIS FUNCTION
-----------*/
function windowResized(){
  divHeader=select('#p5Gallery');
  bodySize=select('body');
  resizeCanvas(bodySize.width, divHeader.height);
}
