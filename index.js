

var colorPicker1 = document.getElementById("colorPicker1");
var colorPicker2 = document.getElementById("colorPicker2");
var colorPicker3 = document.getElementById("colorPicker3");
var colorPicker4 = document.getElementById("colorPicker4");
var colorPicker5 = document.getElementById("colorPicker5");

var box1 = document.getElementById("color-box-1");
var box2 = document.getElementById("color-box-2");
var box3 = document.getElementById("color-box-3");
var box4 = document.getElementById("color-box-4");
var box5 = document.getElementById("color-box-5");

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


setColorPickerHandler(colorPicker1, box1, rgb1, hex1);
setColorPickerHandler(colorPicker2, box2, rgb2, hex2);
setColorPickerHandler(colorPicker3, box3, rgb3, hex3);
setColorPickerHandler(colorPicker4, box4, rgb4, hex4);
setColorPickerHandler(colorPicker5, box5, rgb5, hex5);


function setColorPickerHandler(colorPicker, box, rgbElement, hexElement) {
    colorPicker.addEventListener("input", function() {
      var color = colorPicker.value;
      box.style.backgroundColor = color;
      rgbElement.innerHTML = hexToRGB(color);
      hexElement.innerHTML = "Hex: " + color;
      if(box == document.getElementById("color-box-1")){
        document.body.style.background = color;
      }
      if(box == document.getElementById("color-box-2")){
        document.body.style.color = color;
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

