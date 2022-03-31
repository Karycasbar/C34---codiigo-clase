constructor(x,y,width,height){
    var options = {
        isStatic: true
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world,this.body);
}

//---------------------------------
display(){
    var pos = this.body.position;
    rectMode(CENTER);
    fill("brown");
    rect(pos.x,pos.y,this.width,this.height);
}

//----------------------------------
engine = Engine.create();
  world = engine.world;

//-------------------------------
Engine.update(engine);


//----------------
var options = {
    'restitution':0.8,
    'friction':1.0,
    'density':0.04,
}

//----------------
display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("green");
    fill(255);
    rect(0, 0, this.width, this.height);
    pop();
  }

//---------------------------------
box = new Box(700,100,70,70);

//------------------------------
box.display();
//-----------------------------
constructor(x,y, radio){
    var options = {
        'density': 0.04,
        'frictionAir': 0.005
    }
    this.body = Bodies.circle(x,y,radio,options);
    this.radio = radio;        
    World.add(world, this.body);
}
//--------------------------------
display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(RADIUS);
    fill("black");
    ellipse(0, 0, this.radio, this.radio);
    pop();
}

//-------------------------------
ball = new Ball(200,200,60);

//-------------------------
ball.display();

//--------------------
constructor(bodyA, pointB){
    var options = {
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 1.2,
        length: 250
    }
    this.pointB = pointB;
    this.rope = Constraint.create(options);
    World.add(world, this.rope);
}

//---------------------------------
display(){
    if(this.rope.bodyA){
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        push();
        strokeWeight(3);
        stroke("white");
        line(pointB.x, pointB.y, pointA.x, pointA.y);
        pop();            
    }
}
//--------------------------------------
rope = new Rope(ball.body, {x: 500, y:50});
//------------------------------------------
rope.display();
//--------------------------------------------
function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX, y:mouseY});
  }