var mainImg = null;
var grayScale = null;
var red = null;
var rainbow = null;
var indian = null;
var blur = null;

function loadMainImg() {
  var imgFile = document.getElementById("imgInput");
  var fileName = imgFile.value;
  
  mainImg = new SimpleImage(imgFile);
  garyScale = new SimpleImage(imgFile);
  red = new SimpleImage(imgFile);
  rainbow = new SimpleImage(imgFile);
  indian = new SimpleImage(imgFile);
  blur = new SimpleImage(imgFile);
  
  alert("You Chose " + fileName);
  var mainCanvas = document.getElementById("imgContainer");
  var imgFilCanvas = document.getElementById("imgFilContainer");
  var ctx = mainCanvas.getContext("2d");
  var ctx2 = imgFilCanvas.getContext("2d");
  ctx.clearRect(0,0,mainCanvas.width,mainCanvas.height);
  ctx2.clearRect(0,0,imgFilCanvas.width,imgFilCanvas.height);
  mainImg.drawTo(mainCanvas);
}

function grayscaleFilter() {
  if(mainImg == null || !mainImg.complete()) {
    alert("NO Image Selected, Please Choose one");
    return;
  }
  
  if(grayScale != null) {
    for(var pixel of grayScale.values()) {
      var avg = ((pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3);
      pixel.setRed(avg);
      pixel.setGreen(avg);
      pixel.setBlue(avg);
     }
    var imgFilCanvas = document.getElementById("imgFilContainer");
    var ctx = imgFilCanvas.getContext("2d");
    ctx.clearRect(0,0,imgFilCanvas.width,imgFilCanvas.height);
    grayScale.drawTo(imgFilCanvas);
   }
}

function redFilter() {
  if(mainImg == null || !mainImg.complete()) {
    alert("NO Image Selected, Please Choose one");
    return;
  }
  
  if(red != null) {
    for(var pixel of red.values()) {
      var avg = ((pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3);

      if(avg < 128) {
        pixel.setRed(avg * 2);
        pixel.setGreen(0);
        pixel.setBlue(0);
      }
      else {
        pixel.setRed(255);
        pixel.setGreen((avg * 2) - 255);
        pixel.setBlue((avg * 2) - 255);
      }
    }
    var imgFilCanvas = document.getElementById("imgFilContainer");
    var ctx = imgFilCanvas.getContext("2d");
    ctx.clearRect(0,0,imgFilCanvas.width,imgFilCanvas.height);
    red.drawTo(imgFilCanvas);
  }
}

function rainbowFilter() {
  if(mainImg == null || !mainImg.complete()) {
    alert("NO Image Selected, Please Choose one");
    return;
  }
  
  for(var pixel of rainbow.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    
    if(pixel.getY() <= rainbow.getHeight() * (1/7)) {
       if(avg < 128) {
          pixel.setRed(avg * 2);
          pixel.setGreen(0);
          pixel.setBlue(0);
       }
      else {
          pixel.setRed(255);
          pixel.setGreen((avg * 2) - 255);
          pixel.setBlue((avg * 2) - 255);
      }
    }
    
    if(pixel.getY() > rainbow.getHeight() * (1/7) && pixel.getY() <= rainbow.getHeight() * (2/7)) {
      if(avg < 128) {
        pixel.setRed(avg * 2);
        pixel.setGreen(avg * 0.8);
        pixel.setBlue(0);
      }
      else {
        pixel.setRed(255);
        pixel.setGreen((avg * 1.2) - 51);
        pixel.setBlue((avg * 2) - 255);
      }
    }
    
    if(pixel.getY() > rainbow.getHeight() * (2/7) && pixel.getY() <= rainbow.getHeight() * (3/7)) {
      if(avg < 128) {
        pixel.setRed(avg * 2);
        pixel.setGreen(avg * 2);
        pixel.setBlue(0);
      }
      else {
        pixel.setRed(255);
        pixel.setGreen(255);
        pixel.setBlue((avg * 2) - 255);
      }
    }
    
    if(pixel.getY() > rainbow.getHeight() * (3/7) && pixel.getY() <= rainbow.getHeight() * (4/7)) {
      if(avg < 128) {
        pixel.setRed(0);
        pixel.setGreen(avg * 2);
        pixel.setBlue(0);
      }
      else {
        pixel.setRed((avg * 2) - 255);
        pixel.setGreen(255);
        pixel.setBlue((avg * 2) - 255);
      }
    }
    
    if(pixel.getY() > rainbow.getHeight() * (4/7) && pixel.getY() <= rainbow.getHeight() * (5/7)) {
      if(avg < 128) {
        pixel.setRed(0);
        pixel.setGreen(0);
        pixel.setBlue(avg * 2);
      }
      else {
        pixel.setRed((avg * 2) - 255);
        pixel.setGreen((avg * 2) - 255);
        pixel.setBlue(255);
      }
    }
    
    if(pixel.getY() > rainbow.getHeight() * (5/7) && pixel.getY() <= rainbow.getHeight() * (6/7)) {
      if(avg < 128) {
        pixel.setRed((avg * 0.8));
        pixel.setGreen(0);
        pixel.setBlue(avg * 2);
      }
      else {
        pixel.setRed((avg * 1.2) - 51);
        pixel.setGreen((avg * 2) - 255);
        pixel.setBlue(255);
      }
    }
    
    if(pixel.getY() > rainbow.getHeight() * (6/7) && pixel.getY() <= rainbow.getHeight() * (7/7)) {
      if(avg < 128) {
        pixel.setRed(avg * 1.6);
        pixel.setGreen(0);
        pixel.setBlue(avg * 1.6);
      }
      else {
        pixel.setRed((avg * 0.4) + 153);
        pixel.setGreen((avg * 2) - 255);
        pixel.setBlue((avg * 0.4) +153);
      }
    }
  }
  
  var imgFilCanvas = document.getElementById("imgFilContainer");
  var ctx = imgFilCanvas.getContext("2d");
  ctx.clearRect(0,0,imgFilCanvas.width,imgFilCanvas.height);
  rainbow.drawTo(imgFilCanvas);
}

function indianFilter() {
  if(mainImg == null || !mainImg.complete()) {
    alert("NO Image Selected, Please Choose one");
    return;
  }
  
  for(var pixel of indian.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if(pixel.getY() <= indian.getHeight() * (1/3)) {
       if(avg < 128) {
          pixel.setRed((255 / 127.5) * avg);
          pixel.setGreen((153 / 127.5) * avg);
          pixel.setBlue((51 / 127.5) * avg);
       }
      else {
          pixel.setRed(255);
          pixel.setGreen(173);
          pixel.setBlue(10);
      }
    }
    
    if(pixel.getY() > indian.getHeight() * (1/3) && pixel.getY() <= indian.getHeight() * (2/3)) {
      if(avg < 128) {
          pixel.setRed((255 / 127.5) * avg);
          pixel.setGreen((255 / 127.5) * avg);
          pixel.setBlue((255 / 127.5) * avg);
       }
      else {
          pixel.setRed(255);
          pixel.setGreen(255);
          pixel.setBlue(255);
      } 
    }
    
    if(pixel.getY() > indian.getHeight() * (2/3) && pixel.getY() <= indian.getHeight() * (3/3)) {
       if(avg < 128) {
          pixel.setRed(8);
          pixel.setGreen(57);
          pixel.setBlue(3);
       }
      else {
          pixel.setRed((2 - 19 / 127.5) * avg + 2 * 19 - 255);
          pixel.setGreen((2 - 136 / 127.5) * avg + 2 * 136 - 255);
          pixel.setBlue((2 - 8 / 127.5) * avg + 2 * 8 - 255);
      }
    }
  }
  var imgFilCanvas = document.getElementById("imgFilContainer");
  var ctx = imgFilCanvas.getContext("2d");
  ctx.clearRect(0,0,imgFilCanvas.width,imgFilCanvas.height);
  indian.drawTo(imgFilCanvas);
}

function blurFilter(){
  if(blur == null || !blur.complete()){
    alert("Image not uploaded!");
    return;
  }
  
  var blurValue = 50;
  
  for(var pix of blur.values()){
    if(Math.random() > 0.5){
      var x = pix.getX();
      var y = pix.getY();
      
      var newX = x + (2*Math.floor(Math.random()*(blurValue + 1)) - blurValue);
      var newY = y + (2*Math.floor(Math.random()*(blurValue + 1)) - blurValue);
      
      if((newX < blur.getWidth() && newX >= 0) && (newY < blur.getHeight() && newY >= 0)){
        var pixNew = mainImg.getPixel(newX, newY);
        blur.setPixel(x,y,pixNew);
      }
    }
  }
  var imgFilCanvas = document.getElementById("imgFilContainer");
  var ctx = imgFilCanvas.getContext("2d");
  ctx.clearRect(0,0,imgFilCanvas.width, imgFilCanvas.height);
  blur.drawTo(imgFilCanvas);
}

function resetCanvas() {
  //var c = document.getElementById("imgFilContainer");
  //var ctx = c.getContext("2d");
  //ctx.clearRect(0,0,c.width,c.height);
  var imgFilCanvas = document.getElementById("imgFilContainer");
  var ctx = imgFilCanvas.getContext("2d");
  ctx.clearRect(0,0,imgFilCanvas.width,imgFilCanvas.height);
  mainImg.drawTo(imgFilCanvas);
  var imgFile = document.getElementById("imgInput");
  grayScale = new SimpleImage(imgFile);
  red = new SimpleImage(imgFile);
  rainbow = new SimpleImage(imgFile);
  indian = new SimpleImage(imgFile);
}

function getDistance(x,y,w,h){
    var dist = Math.sqrt(Math.pow(w*0.5 - x,2) + Math.pow(h*0.5 - y,2));
    return dist;
}