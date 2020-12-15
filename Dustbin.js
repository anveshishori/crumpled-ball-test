class Dustbin{
constructor(x,y){


    this.x = x;
    this.y=y;
    this.width = 200;
    this.height = 100;
    this.thickness = 20;
    var options = {
        isStatic: true
    }

    this.bottomBody = Bodies.rectangle(this.x,this.y,this.width,this.thickness, options)
    World.add(myworld, this.bottomBody);

    this.leftBody = Bodies.rectangle(this.x-this.width/2, this.y-this.height/2,this.thickness, this.height,options);
    Matter.Body.setAngle(this.leftBody, this.angle)
    World.add(myworld, this.leftBody);

    this.rightBody = Bodies.rectangle(this.x+this.width/2, this.y-this.height/2,this.thickness, this.height,options);
    Matter.Body.setAngle(this.rightBody, -1*this.angle)
    
    World.add(myworld, this.rightBody);
    
}

display(){

var posbottom = this.bottomBody.position
var posleft = this.leftBody.position
var posright = this.rightBody.position

angleMode(RADIANS);

push()
translate(posbottom.x,posbottom.y)
fill("red")

stroke ("blue");
rect(0,0,this.width,this.thickness);

pop()


push()
translate(posleft.x,posleft.y)
rotate (this.angle);
fill("red")

stroke ("blue");
rect(0,0,this.thickness, this.height);

pop()


push()
translate(posright.x,posright.y)
rotate (-1*this.angle);
fill("red")

stroke ("blue");
rect(0,0,this.thickness, this.height);

pop()

}





}