//the 'export' keyword doesn't work in IE 11

enum temperature { cold = 33, hot = 99, mid = 56 };


class HelloWorld {

    //field declaration

    element: HTMLElement;
    span: HTMLElement;

    constructor(element: HTMLElement, phrase: string) {
        this.element = element;
        this.element.innerHTML = phrase;
    }

    sayHi() {
        alert("Hello World , the temperature is " + temperature.cold.toString() + " C.");
    }
}

class StringExamples {

    //using 'let' instead of 'var' allows scoping of the field to the code block and not globally
    //const is like 'let' but prevents re-assignment ot a var

    Name: string;
    Address: string;
    Element: HTMLElement;

    constructor(public name: string, public address: string) {
        this.Name = name;
        this.Address = address;
    }

    Print(element: HTMLElement) {
        this.Element = element;
        let appendString: string = this.Name + " lives here at " + this.Address + " and it's " + temperature[33].toString();
        this.Element.innerHTML = appendString;
    }
}

class BoolExample {

    //Name: string;
    //Address: string;
    Bool: boolean;
    Element: HTMLElement;


    constructor(public bool: boolean, public element: HTMLElement) {

        this.Element = element;

        if (bool == true) {
            this.Bool = bool;
        }
        else {
            this.Bool = false;
        }
    }


    //USE back ticks to call a variable in a string with the dollar sign and this
    Print() {
        this.Element.innerHTML = `The answer is ${this.Bool}`;
    }

}


var AddWithRest = function (value1: number, value2: number, ...numbers: number[]): number {
    var result = value1 + value2;
    for (var i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }
    return result;
}




window.onload = () => {

    var divElement = document.getElementById('02_types');
    //var hello = new HelloWorld(divElement, "hello again");
    let helloWorld = new HelloWorld(divElement, "hello again!!!");
    helloWorld.sayHi();


    var stringElement = document.getElementById('02_string');

    let stringInject = new StringExamples("Tyler Broussard", "1416 Tacoma, Wa");
    stringInject.Print(stringElement);

    var boolElement = document.getElementById("02_bool");
    let boolTest = new BoolExample(false, boolElement);

    boolTest.Print();

    alert(AddWithRest(55, 66, 99, 88, 77, 56));

};