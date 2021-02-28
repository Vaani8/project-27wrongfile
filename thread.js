class Thread {
    constructor(bodyA,bodyB){
        var options={
            stiffness:0.04,
            length:10,
            bodyA:bodyA,
            bodyB:bodyB
        }
        this.Thread=Constraint.create(options)
        World.add(world,this.Thread)
    }
    display(){

var pointA = this.Thread.bodyA.position; 
var pointB = this.Thread.bodyB.position; 
strokeWeight(4); 
line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}