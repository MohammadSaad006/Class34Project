class SlingShot {
    constructor(bodyA,pointB){
        var option ={
            bodyA:bodyA,
            pointB :pointB,
            stiffness:1,
            angularStiffness:1,
            lenght:220
            
        }
        this.pointB=pointB
        this.pointX=bodyA.x
        this.pointY=bodyA.y-250;
        this.rope =Constraint.create (option)
        this.pointB=pointB
        World.add(world,this.rope)
    }
    display() {
        push();
        if (this.rope.bodyA){
     var pointA= this.rope.bodyA.position
     var pointB=this.pointB
     push();
     strokeWeight(3.5);
     stroke("FFFEFF")
     line(pointA.x,pointA.y,pointB.x,pointB.y)
     pop();
    }
    }    
}
