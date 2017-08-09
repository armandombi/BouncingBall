import Ball from './ball.js';
import Physics from './physics.js';

class Canvas {
    constructor(canvasElement, balls) {
        this.canvasElement = canvasElement;
        this.context = canvasElement.getContext('2d');
        this.initializeEventListeners();
        this.gravity = 0.2;
        this.paused = false;
        this.balls = [];
        this.flag = false;
    }

    initializeEventListeners() {
        this.canvasElement.addEventListener('mousedown', this.handleMouseDown.bind(this));
        this.canvasElement.addEventListener('mouseup', this.handleMouseUp.bind(this));
        this.canvasElement.addEventListener('mousemove', this.handleMouseMove.bind(this));
        window.addEventListener('resize', this.resizeCanvas.bind(this), false);
    }

    resizeCanvas() {
        this.canvasElement.width = window.innerWidth;
        this.canvasElement.height = window.innerHeight;
    }

    circle() {
        this.context.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
        this.balls.unshift(this.balls.shift().checkCollision(this.balls));
        for (var i = 0; i < this.balls.length; i++) {
            var ball = this.balls[i];
            if (ball.posx + ball.radius >= this.canvasElement.width) {
                ball.velx = -ball.velx * ball.damping;
                ball.posx = this.canvasElement.width - ball.radius;
            } else if (ball.posx - ball.radius <= 0) {
                ball.velx = -ball.velx * ball.damping;
                ball.posx = ball.radius;
            }
            if (ball.posy + ball.radius >= this.canvasElement.height) {
                ball.vely = -ball.vely * ball.damping;
                ball.posy = this.canvasElement.height - ball.radius;

                ball.velx *= ball.traction;
            } else if (ball.posy - ball.radius <= 0) {
                ball.vely = -ball.vely * ball.damping;
                ball.posy = ball.radius;
            }

            ball.vely += this.gravity;

            ball.posx += ball.velx;
            ball.posy += ball.vely;

            this.context.beginPath();

            this.context.fillStyle = this.getRandomColor();
            this.context.arc(ball.posx, ball.posy, ball.radius, 0, 2 * Math.PI, false);
            this.context.fill();
        }
        if (!this.paused)
            requestAnimationFrame(this.circle.bind(this));

    }

    getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    getCurrentPosition(e) {
        return {
            x: e.pageX - this.canvasElement.offsetLeft,
            y: e.pageY - this.canvasElement.offsetTop
        }
    }

    handleMouseMove(e) {
        this.flag = true;
    }

    handleMouseDown(e) {
        this.flag = false;
        var pos = this.getCurrentPosition(e);
        var ball = new Ball(pos.x, pos.y);

        ball.velx = ball.vely = 0;
        this.balls.push(ball);
        this.paused = true;
    }

    handleMouseUp(e) {
        if (this.flag) {
            var ball = this.balls.pop();
            ball.velx = e.pageX - this.canvasElement.offsetLeft - ball.posx;
            ball.vely = e.pageY - this.canvasElement.offsetTop - ball.posy;
            this.balls.push(ball);
        }
        this.paused = false;
        this.circle(this.paused);
    }



}

export default Canvas;
