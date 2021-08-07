class Paper{
    constructor(x,y){
        var options = {
            restitution: 1
        }
        //this.body = Bodies.circle(x, y, width, height,options);
        this.radius = 20;
        this.body = Bodies.circle(x, y, this.radius,options);
        
        //Matter.Body.setAngle(this.body,angle)
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        //rectMode(CENTER);
        fill("white");
        stroke("white");
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius)
        //rect(0,0,this.width,this.height);

        
        pop();
    }
    
}