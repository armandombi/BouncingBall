import Canvas from './canvas.js';
import Ball from './ball.js';
import './style.css';

function start() {
  var canvas = new Canvas(document.getElementById("myCanvas"));
  canvas.resizeCanvas();
}

window.onload = start;