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
  
  button2 = createButton('Vibrate Once')
 button2.position(400,300)
 button2.style('width','200')
 button2.style('height','42')
 button2.style('background','red')
   button2.mousePressed(()=>{
 vibratePattern();
 })
}



function draw() {
  background(255,255,255);  
  drawSprites();
}

function vibrate(ms){
  navigator.vibrate(ms)
}

function vibratePattern(){
  navigator.vibrate([300,200,400,100,1000])
}
