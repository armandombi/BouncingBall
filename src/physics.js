
class Physics {
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
            if (isCollision(ball)) {

            }
        }
        if (balls.length > 0) {
            balls.unshift(balls.shift().checkCollision(balls));
            return this;
        } else {
            return this;
        }
    }

    simulateCollision(firstBall, secondBall) {
        firstBall.velx += secondBall.velx * firstBall.traction;
        firstBall.vely += secondBall.vely * firstBall.damping;
        secondBall.velx = -secondBall.velx * firstBall.traction;
        secondBall.vely = -secondBall.vely * firstBall.damping;
    }
}

export default Physics;

