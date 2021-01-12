class Box{

    constructor(x, y, width, height){
        var options = {
                restitution : 0.8, 
                density : 0.5
        };

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.mywidth = width;
        this.myheight = height; 
        World.add(world, this.body);
    }

    display(){
console.log("display function");
        var position  = this.body.position;
        var angle = this.body.angle;
        push();
        translate(position.x , position.y);
        rotate(angle);
        rectMode(CENTER);
        fill("blue");
        stroke("yellow");
        strokeWeight(5);
        rect(0, 0, this.mywidth, this.myheight);
        pop();
    }

}