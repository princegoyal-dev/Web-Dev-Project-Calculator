// Retrieving all buttons in an array
var buttons = document.querySelectorAll('button');

// Display object containing reference to the html tag having id display-span
var display = document.getElementById('display-span');

// Display object containing reference to the html tag having id display-span-operator
var displayOperator = document.getElementById('display-span-operator');

// Display object containing reference to the html tag having id display-recent (showing history calculations)
var displayRecent = document.getElementById('display-recent')

var operand = 0;

//for referencing the equal sign composition with previous history
var counter = 0;



window.addEventListener('keydown', (event) => {
    
    if(event.key == "0") {
        var clickButton = document.getElementById("zero");
        clickButton.click();

    } else if(event.key == "1") {
        var clickButton = document.getElementById("1");
        clickButton.click();

    } else if(event.key == "2") {
        var clickButton = document.getElementById("2");
        clickButton.click();

    } else if(event.key == "3") {
        var clickButton = document.getElementById("3");
        clickButton.click();

    } else if(event.key == "4") {
        var clickButton = document.getElementById("4");
        clickButton.click();

    } else if(event.key == "5") {
        var clickButton = document.getElementById("5");
        clickButton.click();

    } else if(event.key == "6") {
        var clickButton = document.getElementById("6");
        clickButton.click();

    } else if(event.key == "7") {
        var clickButton = document.getElementById("7");
        clickButton.click();

    } else if(event.key == "8") {
        var clickButton = document.getElementById("8");
        clickButton.click();

    } else if(event.key == "9") {
        var clickButton = document.getElementById("9");
        clickButton.click();

    } else if(event.key == "/") {
        var clickButton = document.getElementById("divide");
        clickButton.click();

    } else if(event.key == "*") {
        var clickButton = document.getElementById("multiply");
        clickButton.click();

    } else if(event.key == "-") {
        var clickButton = document.getElementById("subtract");
        clickButton.click();

    } else if(event.key == "+") {
        var clickButton = document.getElementById("plus");
        clickButton.click();

    } else if(event.key == "Enter") {
        var clickButton = document.getElementById("equal");
        clickButton.click();

    } else if(event.key == ".") {
        var clickButton = document.getElementById("dot");
        clickButton.click();
    }
});

// function to clear all clear the calculator
function ac() {
    display.innerText = "";
    displayOperator.innerText = "";
    displayRecent.innerText = "";
    operand = 0;
}

//iterating over each button for every click to match the event
for(var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(){
        
        
        // After using equal(=) button to get the counter 0 and setting previous history to output of new one
        if(counter == 1 ) {
            displayRecent.innerText = "";
            counter = 0;
        }

        // getting the value of the button, ie. to identify which button is pressed by retrieving its attribute data-value
        var dataValue = this.getAttribute("data-value");

        //checking for number in the input
        if(dataValue in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]){
            display.innerText += dataValue;
        
        // for all clear
        } else if(dataValue == 'ac') {
            ac();

        // for plus sign binary operator
        } else if(dataValue == "+") {
            //for checking if the typed letters are numbers ie. last value is a number, if so then add it to the display recent.
            if(display.innerText[display.innerText.length - 1] in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]){
                // for the values lesser than 0 ie having -ve signs at front
                //so to deal with cases like 4 - -5 
                //Adding braces to the -ve value
                if(display.innerText < 0) {
                    display.innerText = "(" + display.innerText + ")";
                }
                displayRecent.innerText += "" + display.innerText + "+";
                display.innerText = "";
                displayOperator.innerText = "+";
            
            // if an operator, then take the recent history from 0th element to n-1th element and add that operator to the display recent
            } else {
                displayRecent.innerText = displayRecent.innerText.slice(0,displayRecent.innerText.length-1) + dataValue;
                displayOperator.innerText = "+";
                return;
            }
        
        //same as it is also a binary operator
        } else if(dataValue == "-") {
            if(display.innerText[display.innerText.length - 1] in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]){
                if(display.innerText < 0) {
                    display.innerText = "(" + display.innerText + ")";
                }
                displayRecent.innerText += "" + display.innerText + "-";
                display.innerText = "";
                displayOperator.innerText = "-";

            } else {
                displayRecent.innerText = displayRecent.innerText.slice(0,displayRecent.innerText.length-1) + dataValue;
                displayOperator.innerText = "-";
                return;
            }
        //same as it is also a binary operator
        } else if(dataValue == "/") {
            if(display.innerText[display.innerText.length - 1] in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]){
                if(display.innerText < 0) {
                    display.innerText = "(" + display.innerText + ")";
                }
                displayRecent.innerText += "" + display.innerText + "/";
                display.innerText = "";
                displayOperator.innerText = "/";

            } else {
                displayRecent.innerText = displayRecent.innerText.slice(0,displayRecent.innerText.length-1) + dataValue;
                displayOperator.innerText = "/";
                return;
            }
        //same as it is also a binary operator
        } else if(dataValue == "*") {
            if(display.innerText[display.innerText.length - 1] in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]){
                if(display.innerText < 0) {
                    display.innerText = "(" + display.innerText + ")";
                }
                displayRecent.innerText += "" + display.innerText + "*";
                display.innerText = "";
                displayOperator.innerText = "*";

            } else {
                displayRecent.innerText = displayRecent.innerText.slice(0,displayRecent.innerText.length-1) + dataValue;
                displayOperator.innerText = "*";
                return;
            }
        //unary +/- operator, logic doing with slice operator just toggling things
        } else if(dataValue == "signoperator") {
            if(display.innerText[0] == "-") {
                display.innerText = display.innerText.slice(1, display.innerText.length);
            } else {
                display.innerText = "-" + display.innerText;
            }
        // decmial adding for the number
        } else if(dataValue == ".") {
            display.innerText = display.innerText + ".";
        
        //clearing the current display(not the history one)
        } else if(dataValue == "ce") {
                display.innerText = "";

        //Evaluating the expression
        } else if(dataValue == "=") {
            //same as we are proving braces for -ve values
            if(display.innerText < 0) {
                display.innerText = "(" + display.innerText + ")";
            }
            //Adding current text to the history one
            displayRecent.innerText += display.innerText;
            //checking if the history expression contains any operator at the last
            //if so then delete than operator
            if(displayRecent.innerText[displayRecent.innerText.length - 1] == "-" ||
            displayRecent.innerText[displayRecent.innerText.length - 1] == "+" ||
            displayRecent.innerText[displayRecent.innerText.length - 1] == "/" ||
            displayRecent.innerText[displayRecent.innerText.length - 1] == "*") {
                //if history has just one operator and you are evaluating that
                //to handle this exception we are returning the call
                if(displayRecent.innerText.length == 1) {
                    return;
                }

                //Taking out unwanted operator from the last
                displayRecent.innerText = displayRecent.innerText.slice(0,displayRecent.innerText.length-1);
                //evaluating the expressiong stored in history using eval function
                display.innerText = eval(displayRecent.innerText);
                displayOperator.innerText = "=";
                //assigning counter to one ie. equal has been pressed so clear the previous history and take its result for next expression
                counter = 1;
                return;
                
            }
            //if we try to use equal with empty expression 
            //to handle this exception
            if(displayRecent.innerText == "") {
                return;
            }
            //evaluating the expression
            display.innerText = eval(displayRecent.innerText);
            displayOperator.innerText = "=";
            counter = 1;
        }
    });
}