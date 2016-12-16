/**
 * @class Style
 * 
 * This class wraps common UI styling options. Instances of Style
 * class can be set to style property of any UI object. For same
 * style object different UI objects can behave different. 
 * 
 *      @example
 *      var label = new Label({
 *          width: "80%",
 *          height: "10%"
 *      });
 *      label.style = new Style({
 *          borderColor: "#000000",
 *          borderWidth: 2
 *      });
 */
function Style(params) {
    /**
     * Sets/gets border color of bounded view.
     * 
     * @property {Color} borderColor Border color
     */
    var borderColor = "";
    Object.defineProperty(this, 'borderColor', {
        get: function() {
            return borderColor;
        },
        set: function(value) {
            borderColor = value;
            changeHandlers.forEach(function(handler) {
                handler('borderColor', value);
            });
        }
    });

    /**
     * Sets/gets border thickness of bounded view. Accepts unsigned
     * numbers, 0 means no border.
     * 
     * @property {Number} borderWidth Border width
     */
    var borderWidth = 0;
    Object.defineProperty(this, 'borderWidth', {
        get: function() {
            return borderWidth;
        },
        set: function(value) {
            borderWidth = value;
            changeHandlers.forEach(function(handler) {
                handler('borderWidth', value);
            });
        }
    });

    var changeHandlers = [];
    this.addChangeHandler = function(handler) {
        changeHandlers.push(handler);
    }
    this.removeChangeHandler = function(handler) {
        for (var i = 0; i < changeHandlers.length; ++i) {
            if (changeHandlers[i] == handler) {
                changeHandlers.splice(i, 1);
            }
        }
    }
}

module.exports = Style;