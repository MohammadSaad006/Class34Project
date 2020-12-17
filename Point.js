class Point{
    constructor(x,y,color){
        var options={
            isStatic: true,
            restitution:1,
            friction:0,
            frictionAir:0.0,
            slop:1,
            initria:Infinity
        };
        this.body=Bodies.rectangle(x,y,10,10,options)
        this.x=x
        this.y=y
        this.color=color
        World.add(world,this.body);
    }
     display(){
         var angle=this.body.angle;
         var pos=this.body.position;
         push();
         translate(pos.x,pos.y)
         rotate(angle);
         stroke(255,255,255);
         ellipse(0,0,10,10)
        pop();
     }

}