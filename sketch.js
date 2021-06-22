var canvas;
var music;
var block1,block2,block3,block4;
var ball,edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
 block1= createSprite(0,500,300,30)
 block1.shapecolor=rgb(0,0,255)

 block2= createSprite(295,500,200,30)
 block2.shapecolor=rgb(255,120,0)

 block3= createSprite(515,500,200,30)
 block3.shapecolor=rgb(153,0,76)

 block4= createSprite(740,500,220,30)
 block4.shapecolor=rgb(0,100,0)

    //create box sprite and give velocity
  ball =createSprite(random(20,750),100,40,40)
  ball.shapecolor=rgb(255,255,255)
  ball.velocityX=-4;
  ball.velocityY=-9;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
edges=createEdgeSprites();
ball.bounceOff(edges);

    //add condition to check if box touching surface and make it box
    if(block1.isTouching(ball)&&ball.bouceOff(block1)){
        ball.shapecolor=rgb(0,0,255)
        music.play();
         }
         if(block2.isTouching(ball)){
            ball.shapecolor=rgb(255,120,0)
            music.stop();
            ball.velocityX=-0;
            ball.velocityY=-0;
             }
         if(block3.isTouching(ball)&&ball.bouceOff(block3)){
            ball.shapecolor=rgb(153,0,76)
             }
             if(block4.isTouching(ball)&&ball.bouceOff(block4)){
                ball.shapecolor=rgb(0,100,0)
                 }
                 drawSprites();
}
