function setup() {
  createCanvas(800,400);
 button = createButton('Vibrate Once')
 button.position(400,200)
 button.style('width','200')
 button.style('height','42')
 button.style('background','red')
 button.mousePressed(()=>{
   vibrate(1000)
 })
}

function draw() {
  background(255,255,255);  
  drawSprites();
}

function vibrate(ms){
  navigator.vibrate(ms)
}