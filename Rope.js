class Rope {
    constructor(objectA,objectB){
        var options= {
            bodyA:objectA,
            bodyB:objectB,
            stiffness:0.04,
            length:10
        }
    
        var rope= Constraint.create(options)
        World.add(world,rope);
    }
    display(){
        var pointA=this.rope.bodyA.position
        var pointB=this.rope.bodyB.position
        strokeWeight(10);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}