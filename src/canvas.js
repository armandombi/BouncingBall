
class Canvas {
    constructor(canvasElement) {
        this.canvasElement = canvasElement;
        this.context = canvasElement.getContext('2d');
        this.width = 100;
        this.height = 100;
    }

    resizeCanvas() {
        // resize the canvas to fill browser window dynamically
        window.addEventListener('resize', resizeE, false);

        function resizeE() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            //drawStuff();
        }
        //resizeCanvas();
    }

    setWidth(width){
        this.width = width;
    }

    setHeight(height){
        this.height = height;
    }

}

export default Canvas;
