import Physics from './physics.js';

class Ball {
    constructor(cx, cy) {
        this.posx = cx;
        this.posy = cy;
        this.velx = 3;
        this.vely = 6;
        this.radius = 5;
        this.damping = 0.9,
        this.traction = 0.8;
        this.collisionForce = 0.5;
    }

    checkCollision(balls) {
        for (var i = 0; i < balls.length; i++) {
            var ball = balls[i];
            if (this.isCollision(ball)) {
                const physics = new Physics();
                physics.simulateCollision(this,ball);
            }
        }
        if (balls.length > 0) {
            balls.unshift(balls.shift().checkCollision(balls));
            return this;
        } else {
            return this;
        }
    }

    isCollision(ball){
            var dx = this.posx - ball.posx;
            var dy = this.posy - ball.posy;
            var distance = Math.sqrt(dx * dx + dy * dy);
            return ((distance < this.radius + ball.radius) ? true: false);
    }
}

export default Ball;

