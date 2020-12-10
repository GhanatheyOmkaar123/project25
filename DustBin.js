class DustBin {
    constructor(x,y,width,height){
        var options = {
            isStatic:true
        }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.image = loadImage("images/dustBin.png");
    World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
        imageMode(CENTER);
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        image(this.image,0, 0, this.width, this.height);
        pop();
    }
}