
class Canvas {
    constructor(canvasElement) {
        this.canvasElement = canvasElement;
        this.context = canvasElement.getContext('2d');
        //this.width = 100;
        //this.height = 100;
    }
   
    resizeCanvas() {
        window.addEventListener('resize', resizeE, false);

        function resizeE() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
    }

    circle(paused) {
        var cx = 100,
            cy = 100,
            vx = 2,
            vy = 5,
            radius = 5,
            gravity = 0.2,
            damping = 0.9,
            traction = 0.8;

        this.context.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
        if (!paused)
            requestAnimationFrame(this.circle);

        if (cx + radius >= this.canvasElement.width) {
            vx = -vx * damping;
            cx = canvas.width - radius;
        } else if (cx - radius <= 0) {
            vx = -vx * damping;
            cx = radius;
        }
        if (cy + radius >= this.canvasElement.height) {
            vy = -vy * damping;
            cy = canvasElement.height - radius;
            
            vx *= traction;
        } else if (cy - radius <= 0) {
            vy = -vy * damping;
            cy = radius;
        }

        vy += gravity; 

        cx += vx;
        cy += vy;

        this.context.beginPath();
        this.context.arc(cx, cy, radius, 0, 2 * Math.PI, false);
        this.context.fillStyle = 'green';
        this.context.fill();
    }

    handleMouseDown(e) {
        cx = e.pageX - canvas.offsetLeft;
        cy = e.pageY - canvas.offsetTop;
        vx = vy = 0;
        paused = true;
    }

    handleMouseUp(e) {
        vx = e.pageX - canvas.offsetLeft - cx;
        vy = e.pageY - canvas.offsetTop - cy;
        paused = false;
        circle(paused);
    }

}

export default Canvas;
