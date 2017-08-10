
class Physics {
    /**
   * Validates if a collision between 2 balls has occurred 
   *
   * @param {Ball} firstBall - The first ball to verify.
   * @param {Ball} secondBall - The second ball to verify.
   * @returns true if a collision has occurred, otherwise false.
   */
    static isCollision(firstBall,secondBall) {
        var dx = firstBall.posx - secondBall.posx;
        var dy = firstBall.posy - secondBall.posy;
        var distance = Math.sqrt(dx * dx + dy * dy);
        return ((distance < firstBall.radius + secondBall.radius) ? true : false);
    }
    /**
   * Simulates a collision between 2 balls 
   *
   * @param {Ball} firstBall - The first ball that collides.
   * @param {Ball} secondBall - The second ball that collides.
   * @returns The modified balls with the new velocities.
   */
    static simulateCollision(firstBall, secondBall) {
        firstBall.velx += secondBall.velx * firstBall.traction;
        firstBall.vely += secondBall.vely * firstBall.damping;
        secondBall.velx = -secondBall.velx * firstBall.traction;
        secondBall.vely = -secondBall.vely * firstBall.damping;
    }
    /**
   * Simulates the ball's movement, verifying if the position of the ball has exceeded the borders, in order to make it bound back into the canvas. 
   * This function also accounts for the effects of gravity, traction and damping over the ball 
   *
   * @param {Ball} ball - The ball moving through the canvas.
   * @param {Object} canvas - The canvas.
   * @returns The modified ball's velocity and direction.
   */
    static simulateMovement(ball, canvas) {
        //Verifies if the ball has reached the right window limit and makes it bounce back
        if (ball.posx + ball.radius >= canvas.width) {
            ball.velx = -ball.velx * ball.damping;
            ball.posx = canvas.width - ball.radius;
        //Verifies if the ball has reached the left window limit and makes it bounce back
        } else if (ball.posx - ball.radius <= 0) {
            ball.velx = -ball.velx * ball.damping;
            ball.posx = ball.radius;
        }
        //Verifies if the ball has reached the bottom window limit and makes it bounce back
        if (ball.posy + ball.radius >= canvas.height) {
            ball.vely = -ball.vely * ball.damping;
            ball.posy = canvas.height - ball.radius;
            ball.velx *= ball.traction;
        //Verifies if the ball has reached the top window limit and makes it bounce back
        } else if (ball.posy - ball.radius <= 0) {
            ball.vely = -ball.vely * ball.damping;
            ball.posy = ball.radius;
        }
        //Introduces the gravity effect to the ball's movement and changes its position based on the current velocity
        ball.vely += ball.gravity;
        ball.posx += ball.velx;
        ball.posy += ball.vely;
    }
    /**
   * Generates a random set of velocity for a ball
   *
   * @param {number} min - The lowest value allowed to be generated.
   * @param {number} max - The highest value allowed to be generated.
   * @returns A random value of velocity for vx and vy.
   */
    static getRandomVel(min,max){
        return {
            vx: Math.floor(Math.random() * (max - min + 1)) + min,
            vy: Math.floor(Math.random() * (max - min + 1)) + min
        }
    }
}

export default Physics;

