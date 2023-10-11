

var colorPicker1 = document.getElementById("colorPicker1");
var colorPicker2 = document.getElementById("colorPicker2");
var colorPicker3 = document.getElementById("colorPicker3");
var colorPicker4 = document.getElementById("colorPicker4");
var colorPicker5 = document.getElementById("colorPicker5");

rgb1 = document.getElementById("rgb1");
hex1 = document.getElementById("hex1");

rgb2 = document.getElementById("rgb2");
hex2 = document.getElementById("hex2");

rgb3 = document.getElementById("rgb3");
hex3 = document.getElementById("hex3");

rgb4 = document.getElementById("rgb4");
hex4 = document.getElementById("hex4");

rgb5 = document.getElementById("rgb5");
hex5 = document.getElementById("hex5");


setColorPickerHandler(colorPicker1, rgb1, hex1, "background-color", "background-color");
setColorPickerHandler(colorPicker2, rgb2, hex2, "text-color", "color");
setColorPickerHandler(colorPicker3, rgb3, hex3, "sec-color", "background-color");
setColorPickerHandler(colorPicker4, rgb4, hex4, "pri-color", "color");
setColorPickerHandler(colorPicker5, rgb5, hex5, "spe-color", "background-color");


function setColorPickerHandler(colorPicker, rgbElement, hexElement, className, colorOperation) {
    colorPicker.addEventListener("input", function() {
      var color = colorPicker.value;
      rgbElement.innerHTML = hexToRGB(color);
      hexElement.innerHTML = "Hex: " + color;
      let domElements = document.getElementsByClassName(className);
      for (let i = 0; i < domElements.length; i++) {
        if(colorOperation == "background-color"){
          domElements[i].style.backgroundColor = colorPicker.value;
        }
        if(colorOperation == "color"){
          domElements[i].style.color = colorPicker.value;
        }
      }
    });

}

function hexToRGB(hex){
    let r = parseInt(hex.substring(1,3),16);
    let g = parseInt(hex.substring(3,5),16);
    let b = parseInt(hex.substring(5,7),16);
    let RGB = "rgb("+r+","+g+","+b+")";
    return RGB;
}

