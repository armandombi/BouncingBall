
class Physics {
    static isCollision(firstBall,secondBall) {
        var dx = firstBall.posx - secondBall.posx;
        var dy = firstBall.posy - secondBall.posy;
        var distance = Math.sqrt(dx * dx + dy * dy);
        return ((distance < firstBall.radius + secondBall.radius) ? true : false);
    }
    
    static simulateCollision(firstBall, secondBall) {
        firstBall.velx += secondBall.velx * firstBall.traction;
        firstBall.vely += secondBall.vely * firstBall.damping;
        secondBall.velx = -secondBall.velx * firstBall.traction;
        secondBall.vely = -secondBall.vely * firstBall.damping;
    }

    static simulateMovement(ball, canvas) {
        if (ball.posx + ball.radius >= canvas.width) {
            ball.velx = -ball.velx * ball.damping;
            ball.posx = canvas.width - ball.radius;
        } else if (ball.posx - ball.radius <= 0) {
            ball.velx = -ball.velx * ball.damping;
            ball.posx = ball.radius;
        }
        if (ball.posy + ball.radius >= canvas.height) {
            ball.vely = -ball.vely * ball.damping;
            ball.posy = canvas.height - ball.radius;
            ball.velx *= ball.traction;
        } else if (ball.posy - ball.radius <= 0) {
            ball.vely = -ball.vely * ball.damping;
            ball.posy = ball.radius;
        }

        ball.vely += ball.gravity;
        ball.posx += ball.velx;
        ball.posy += ball.vely;
    }

    static getRandomVel(min,max){
        return {
            vx: Math.floor(Math.random() * (max - min + 1)) + min,
            vy: Math.floor(Math.random() * (max - min + 1)) + min
        }
    }
}

export default Physics;

