import Ball from './ball.js';
import Physics from './physics.js';
import Utility from './util.js';

class Canvas {
    constructor(canvasElement, balls) {
        this.canvasElement = canvasElement;
        this.context = canvasElement.getContext('2d');
        this.initializeEventListeners();
        this.paused = false;
        this.balls = [];
        this.flag = false;
    }

    /**
   * Adds all the event listeners for the canvas interactions.
   */
    initializeEventListeners() {
        this.canvasElement.addEventListener('mousedown', this.handleMouseDown.bind(this));
        this.canvasElement.addEventListener('mouseup', this.handleMouseUp.bind(this));
        this.canvasElement.addEventListener('mousemove', this.handleMouseMove.bind(this));
        window.addEventListener('resize', this.resizeCanvas.bind(this), false);
    }
    /**
    * Makes the canvas size equal to the window current size.
    */
    resizeCanvas() {
        this.canvasElement.width = window.innerWidth;
        this.canvasElement.height = window.innerHeight;
    }
    /**
   * Runs an animation process over a ball.
   */
    animation() {
        this.context.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
        this.balls.unshift(this.balls.shift().checkCollision(this.balls));
        for (var i = 0; i < this.balls.length; i++) {
            Physics.simulateMovement(this.balls[i], this.canvasElement);
            this.balls[i].draw(this.context);
        }
        if (!this.paused)
            requestAnimationFrame(this.animation.bind(this));
    }
    /**
   * Functionality added to the mouse movement event, to determine if a mouse drag has occurred.
   */
    handleMouseMove(e) {
        this.flag = true;
    }
    /**
   * Functionality added to the mouse down event, to generate a new ball whith a random velocity.
   */
    handleMouseDown(e) {
        this.flag = false;
        const pos = Utility.getCurrentPosition(e, this.canvasElement);
        const vel = Physics.getRandomVel(-Utility.getSetting("velocity", 30), Utility.getSetting("velocity", 50));
        const ball = new Ball(pos.x, pos.y, vel.vx, vel.vy, Utility.getSetting("gravity", 0.2), Utility.getSetting("radius", 5), Utility.getSetting("damping", 0.9), Utility.getSetting("traction", 0.8));
        this.balls.push(ball);
        this.paused = true;
    }
    /**
   * Functionality added to the mouse up event, to verify if the drag event occured and call the ball animation.
   */
    handleMouseUp(e) {
        if (this.flag) {
            var ball = this.balls.pop();
            ball.velx = e.pageX - this.canvasElement.offsetLeft - ball.posx;
            ball.vely = e.pageY - this.canvasElement.offsetTop - ball.posy;
            this.balls.push(ball);
        }
        this.paused = false;
        this.animation(this.paused);
    }
}

export default Canvas;
