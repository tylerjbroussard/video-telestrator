//the 'export' keyword doesn't work in IE 11
var temperature;
(function (temperature) {
    temperature[temperature["cold"] = 33] = "cold";
    temperature[temperature["hot"] = 99] = "hot";
    temperature[temperature["mid"] = 56] = "mid";
})(temperature || (temperature = {}));
;
var HelloWorld = /** @class */ (function () {
    function HelloWorld(element, phrase) {
        this.element = element;
        this.element.innerHTML = phrase;
    }
    HelloWorld.prototype.sayHi = function () {
        alert("Hello World , the temperature is " + temperature.cold.toString() + " C.");
    };
    return HelloWorld;
}());
var StringExamples = /** @class */ (function () {
    function StringExamples(name, address) {
        this.name = name;
        this.address = address;
        this.Name = name;
        this.Address = address;
    }
    StringExamples.prototype.Print = function (element) {
        this.Element = element;
        var appendString = this.Name + " lives here at " + this.Address + " and it's " + temperature[33].toString();
        this.Element.innerHTML = appendString;
    };
    return StringExamples;
}());
var BoolExample = /** @class */ (function () {
    function BoolExample(bool, element) {
        this.bool = bool;
        this.element = element;
        this.Element = element;
        if (bool == true) {
            this.Bool = bool;
        }
        else {
            this.Bool = false;
        }
    }
    //USE back ticks to call a variable in a string with the dollar sign and this
    BoolExample.prototype.Print = function () {
        this.Element.innerHTML = "The answer is " + this.Bool;
    };
    return BoolExample;
}());
var AddWithRest = function (value1, value2) {
    var numbers = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        numbers[_i - 2] = arguments[_i];
    }
    var result = value1 + value2;
    for (var i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }
    return result;
};
window.onload = function () {
    var divElement = document.getElementById('02_types');
    //var hello = new HelloWorld(divElement, "hello again");
    var helloWorld = new HelloWorld(divElement, "hello again!!!");
    helloWorld.sayHi();
    var stringElement = document.getElementById('02_string');
    var stringInject = new StringExamples("Tyler Broussard", "1416 Tacoma, Wa");
    stringInject.Print(stringElement);
    var boolElement = document.getElementById("02_bool");
    var boolTest = new BoolExample(false, boolElement);
    boolTest.Print();
    alert(AddWithRest(55, 66, 99, 88, 77, 56));
};
//# sourceMappingURL=notes.js.map