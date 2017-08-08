import Canvas from './canvas.js';

function start() {
  var canvas = new Canvas(document.getElementById("myCanvas")),
  paused = false;



  //canvas = <HTMLCanvasElement>document.getElementById("myCanvas");
  //ctx = canvas.getContext("2d");
  canvas.resizeCanvas();
  //canvas.width = 300;
  //canvas.height = 150;

  canvas.circle(paused);


  canvas.canvasElement.addEventListener('mousedown', ev => this.handleMouseDown(ev));
  canvas.canvasElement.addEventListener('mouseup', ev => this.handleMouseUp(ev));


}

window.onload = start;