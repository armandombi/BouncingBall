import Physics from './physics.js';
import Utility from './util.js';

class Ball {
    constructor(cx, cy, vx, vy, grav, rad, damp, trac) {
        this.posx = cx;
        this.posy = cy;
        this.velx = vx;
        this.vely = vy;
        this.gravity = grav;
        this.radius = rad;
        this.damping = damp,
        this.traction = trac;
    }

   /**
   * Runs the collision of one ball with and array of balls 
   *
   * @param {Array} balls - The array containing the balls.
   * @return {Ball} the ball being checked for collisions.
   */
    checkCollision(balls) {
        for (let i = 0; i < balls.length; i++) {
            let ball = balls[i];
            if (Physics.isCollision(this, ball)) {
                Physics.simulateCollision(this, ball);
            }
        }
        if (balls.length > 0) {
            balls.unshift(balls.shift().checkCollision(balls));
            return this;
        } else {
            return this;
        }
    }
    /**
   * Function to draw the ball in the current context 
   *
   * @param {Object} context - The current canvas context.
   */
    draw(context) {
        context.beginPath();
        context.fillStyle = Utility.getRandomColor();
        context.arc(this.posx, this.posy, this.radius, 0, 2 * Math.PI, false);
        context.fill();
    }
}

export default Ball;

