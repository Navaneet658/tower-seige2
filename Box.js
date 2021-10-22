class Box
{
    constructor(x,y,width,height)
    {
        var option={
            'restitution' : 0.8,
            'friction': 1.0,
            'density': 0.1
        }
        this.body=Bodies.rectangle(x,y,width,height,option);
        World.add(world,this.body);
        
        this.width=width;
        this.height=height;
    }

    display()
    {
        if((this.body.speed)<3){
 var pos=this.body.position;
    var angle=this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    pop(); 
}else{
    World.remove(world,this.body) 
    }
}
}