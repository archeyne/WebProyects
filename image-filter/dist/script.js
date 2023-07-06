var fucImage;
var fucCanvas;
var origImage;

function loadImage() {
  var file = document.getElementById("upFile");
  fucImage = new SimpleImage(file);
  origImage = new SimpleImage(file);
  fucCanvas = document.getElementById("board");
  fucImage.drawTo(fucCanvas);
}

function makeGray(){
  for(var pixel of fucImage.values()){
    var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  fucImage.drawTo(fucCanvas);
}
function makeInverse(){
  for(var pixel of fucImage.values()){
    var invRed = 255 - pixel.getRed();
    var invGreen = 255 - pixel.getGreen();
    var invBlue = 255 - pixel.getBlue();
    pixel.setRed(invRed);
    pixel.setGreen(invGreen);
    pixel.setBlue(invBlue);
  }
  fucImage.drawTo(fucCanvas);
}


function restartImage() {
  origImage.drawTo(fucCanvas);
}