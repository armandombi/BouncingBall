class Utility {
    /**
   * Generates a random Hex color code
   *
   * @return {string} A Hex color code.
   */
    static getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    /**
   * Returns the mouse current position 
   *
   * @param {Object} e - The captured mouse event.
   * @param {Object} canvas - The current working canvas.
   * @return {Object} The object's current position in the canvas.
   */
    static getCurrentPosition(e,canvas) {
        return {
            x: e.pageX - canvas.offsetLeft,
            y: e.pageY - canvas.offsetTop
        }
    }
    /**
   * Helper to read the ball's configuration settings and set them to the assigned value or a default. 
   *
   * @param {Object} element - The ID of the element containing the setting information.
   * @param {Object} defultValue - The default value for the setting.
   * @return {Object} The assigned value when the value is set and the object is valid, and the default value when the field is empty or invalid.
   */
    static getSetting(element,defultValue){
        return Number(document.getElementById(element) !== null && document.getElementById(element).value !== "" ? document.getElementById(element).value : defultValue);
    }
}
export default Utility;