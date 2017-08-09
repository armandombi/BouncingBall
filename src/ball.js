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

    checkCollision(balls) {
        for (var i = 0; i < balls.length; i++) {
            var ball = balls[i];
            if (Physics.isCollision(this,ball)) {
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

    draw(context) {
        context.beginPath();
        context.fillStyle = Utility.getRandomColor();
        context.arc(this.posx, this.posy, this.radius, 0, 2 * Math.PI, false);
        context.fill();
    }
}

export default Ball;

