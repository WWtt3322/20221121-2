function setup() {
  createCanvas(windowWidth, windowHeight);
  text("老師不要當我")
  angleMode(DEGREES)
}
var x=25
var y=25
var v_x=3
var v_y=3
function draw() {
  background("#f7ede2");
  textSize(20)
  text("X:"+mouseX+"Y:"+mouseY,50,50)
  push()
  fill("#f5cac3")
  translate(width/2,height/2)
  ellipse(-150+mouseX/80,-150+mouseY/60,150)
  ellipse(150+mouseX/80,-150+mouseY/60,150)
  ellipse(-150+mouseX/80,-150+mouseY/60,90)
  ellipse(150+mouseX/80,-150+mouseY/60,90)
  ellipse(0,0,400)
  fill("#f15bb5")
  ellipse(40,-200,70)
  ellipse(-40,-200,70)
  ellipse(0,-200,40)
  fill("#e0afa0")
  ellipse(0,0,200,100)//鼻子
  ellipse(-40+mouseX/80,0+mouseY/60,30)
  ellipse(40+mouseX/80,0+mouseY/60,30)
  ellipse(-80,-100,50)//左眼
  ellipse(80,-100,50)//右眼
  fill(0)
  ellipse(-80+mouseX/80,-100+mouseY/60,30)//左眼珠
  fill(0)
  ellipse(80+mouseX/80,-100+mouseY/60,30)//右眼
  noFill()
  //嘴
  fill(255,0,0)
  arc(0,100,200,100,0,180)
  fill("#f5cac3")
  if(mouseIsPressed)
    {
      arc (0,99,200,40,0,180)
    }
    else
    {
      arc(0,99,200,90,0,180)
    }
  noFill()
  pop()

  ellipse(x,y,50)
  text("老師不要當我",x+50,y+random(-5,5))
  x= x+v_x
  y= y+ v_y
  v_y=v_y+0.2//上下速度，每次增加0.2
  if(y>height){
    v_y=-v_y*0.8
    y=height
  }

  if(mouseIsPressed){
    fill(255,0,0)
  }
  else
  {
    fill(255,255,0)
  }

}
