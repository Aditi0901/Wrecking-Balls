class Ball{

    constructor(x, y, radius){
        var options = {
                restitution : 0.8, 
                density : 1,
                frictionAir: 0.005
        };

        this.body = Bodies.circle(x, y, radius, options);
        this.myradius = radius; 
        World.add(world, this.body);
    }

    display(){

        var position  = this.body.position;
        var angle = this.body.angle;
        push();
        translate(position.x , position.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill("pink");
        stroke("red");
        strokeWeight(5);
        ellipse(0, 0, this.myradius, this.myradius);
        pop();
    }

}