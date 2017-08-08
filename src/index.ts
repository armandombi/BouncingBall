import Canvas from './canvas.js';

function start() {
  var canvas = new Canvas(<HTMLCanvasElement>document.getElementById("myCanvas")),
    ctx: CanvasRenderingContext2D,
    cx = 100,
    cy = 100,
    vx = 2,
    vy = 5,
    radius = 5,
    gravity = 0.2,
    damping = 0.9,
    traction = 0.8,
    paused = false;

  function init() {
    
    //canvas = <HTMLCanvasElement>document.getElementById("myCanvas");
    //ctx = canvas.getContext("2d");
    canvas.resizeCanvas();
    //canvas.width = 300;
    //canvas.height = 150;

    circle();
  }

  function circle() {
    ctx.clearRect(0, 0, canvas.setWidth(width), canvas.height);
    if (!paused)
      requestAnimationFrame(circle);

    if (cx + radius >= canvas.width) {
      vx = -vx * damping;
      cx = canvas.width - radius;
    } else if (cx - radius <= 0) {
      vx = -vx * damping;
      cx = radius;
    }
    if (cy + radius >= canvas.height) {
      vy = -vy * damping;
      cy = canvas.height - radius;
      // traction here
      vx *= traction;
    } else if (cy - radius <= 0) {
      vy = -vy * damping;
      cy = radius;
    }

    vy += gravity; // <--- this is it

    cx += vx;
    cy += vy;

    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'green';
    ctx.fill();
  }

  init();

  (function () {
    //var canvas = <HTMLCanvasElement>document.getElementById('myCanvas'),
    //context = canvas.getContext('2d');

    // resize the canvas to fill browser window dynamically
    window.addEventListener('resize', resizeCanvas, false);

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      drawStuff();
    }
    resizeCanvas();

    function drawStuff() {

    }
  })();

  // fancy/irrelevant mouse grab'n'throw stuff below
  canvas.addEventListener('mousedown', handleMouseDown);
  canvas.addEventListener('mouseup', handleMouseUp);

  function handleMouseDown(e: any) {
    cx = e.pageX - canvas.offsetLeft;
    cy = e.pageY - canvas.offsetTop;
    vx = vy = 0;
    paused = true;
  }

  function handleMouseUp(e: any) {
    vx = e.pageX - canvas.offsetLeft - cx;
    vy = e.pageY - canvas.offsetTop - cy;
    paused = false;
    circle();
  }
}

window.onload = start;