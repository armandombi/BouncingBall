class Utility {
    static getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    static getCurrentPosition(e,canvas) {
        return {
            x: e.pageX - canvas.offsetLeft,
            y: e.pageY - canvas.offsetTop
        }
    }

    static getSetting(element,defultValue){
        return Number(document.getElementById(element) !== null && document.getElementById(element).value !== "" ? document.getElementById(element).value : defultValue);
    }
}
export default Utility;