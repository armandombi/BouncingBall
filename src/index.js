import Canvas from './canvas.js';
import Ball from './ball.js';
import './style.css';

function start() {
  
  /* var balls = [];
  var ball = new Ball(100,100)
  balls.push(ball);
  ball = new Ball(650,650);
  balls.push(ball); */

  var canvas = new Canvas(document.getElementById("myCanvas"));
  //canvas.resizeCanvas();
  //canvas.circle();
  
}

window.onload = start;