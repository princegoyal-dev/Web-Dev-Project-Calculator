var moduloButton = document.getElementById("modulo");

window.addEventListener('keydown', (event) => {
    if(event.key == "%" && event.shiftKey == true) {
        moduloButton.click();
    }
});

moduloButton.addEventListener('click', function() {

    var dataValue = this.getAttribute("data-value");
    
    if(display.innerText[display.innerText.length - 1] in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]){
        if(display.innerText < 0) {
            display.innerText = "(" + display.innerText + ")";
        }
        displayRecent.innerText += "" + display.innerText + "%";
        display.innerText = "";
        displayOperator.innerText = "%";

    } else {
        displayRecent.innerText = displayRecent.innerText.slice(0,displayRecent.innerText.length-1) + dataValue;
        displayOperator.innerText = "%";
        return;
    }
});