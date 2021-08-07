class Dustbin{
    constructor(x,y,width,height,angle){
        var options = {
            isStatic: true,
            restitution: 1
        }
        this.body = Bodies.rectangle(x, y, width, height,options);
        this.height = height;
        this.weight = width;
        Matter.Body.setAngle(this.body,angle)
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("white");
        stroke("white")
        rect(0,0,this.width,this.height);
        pop();
    }

}

//box1 = createSprite(width/2-100,600,20,100)
//box2 = createSprite(width/2,640,200,20)
//box3 = createSprite(width/2+100,600,20,100)