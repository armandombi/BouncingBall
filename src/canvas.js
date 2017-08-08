
class Canvas {
    constructor(canvasElement, balls) {
        this.canvasElement = canvasElement;
        this.context = canvasElement.getContext('2d');

        this.canvasElement.addEventListener('mousedown', this.handleMouseDown.bind(this));
        this.canvasElement.addEventListener('mouseup', this.handleMouseUp.bind(this));

        this.vx = 2;
        this.vy = 5;
        this.radius = 5,
            this.gravity = 0.2,
            this.damping = 0.9,
            this.traction = 0.8;
        this.paused = false;
        this.balls = balls;
    }

    resizeCanvas() {
        window.addEventListener('resize', resizeE.bind(this), false);

        function resizeE() {
            this.canvasElement.width = window.innerWidth;
            this.canvasElement.height = window.innerHeight;
        }
    }

    circle() {
        this.context.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
        for (var i = 0; i < this.balls.length; i++) {
            if (this.balls[i].cx + this.radius >= this.canvasElement.width) {
                this.vx = -this.vx * this.damping;
                this.balls[i].cx = this.canvasElement.width - this.radius;
            } else if (this.balls[i].cx - this.radius <= 0) {
                this.vx = -this.vx * this.damping;
                this.balls[i].cx = this.radius;
            }
            if (this.balls[i].cy + this.radius >= this.canvasElement.height) {
                this.vy = -this.vy * this.damping;
                this.balls[i].cy = this.canvasElement.height - this.radius;

                this.vx *= this.traction;
            } else if (this.cy - this.radius <= 0) {
                this.vy = -this.vy * this.damping;
                this.balls[i].cy = this.radius;
            }

            this.vy += this.gravity;

            this.balls[i].cx += this.vx;
            this.balls[i].cy += this.vy;

            this.context.beginPath();
            this.context.fillStyle = 'red';
            this.context.arc(this.balls[i].cx, this.balls[i].cy, this.radius, 0, 2 * Math.PI, false);
            this.context.fill();
        }
        if (!this.paused)
                requestAnimationFrame(this.circle.bind(this));
    }

    handleMouseDown(e) {
        this.cx = e.pageX - this.canvasElement.offsetLeft;
        this.cy = e.pageY - this.canvasElement.offsetTop;
        this.vx = this.vy = 0;
        this.paused = true;
    }

    handleMouseUp(e) {
        this.vx = e.pageX - this.canvasElement.offsetLeft - this.cx;
        this.vy = e.pageY - this.canvasElement.offsetTop - this.cy;
        this.paused = false;
        this.circle(this.paused);
    }

}

export default Canvas;
