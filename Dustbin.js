class Dustbin {
    constructor(x,y,width,height){
    var options = {
    isStatic: true,
    'restituion':0,
    'friction':0,
    'density':0.1
    }
this.body= Bodies.rectangle(x,y,width,height,options);
this.width = width;
this.height = height;

World.add(world.this.body);
    }
display(){
    rect.Model(CENTER);

    fill = 255;

    rect(this.body.postion.x,this.body.postion.y,this.width,this.height)


}
}