class Paper {
    constructor(x,y,radius){
    var options = {
    isStatic: true,
    'restituion':0.3,
    'friction':0.5,
    'density':1.2
    }
this.body= Bodies.rectangle(x,y,this.radius,options);
this.radius = radius

World.add(world.this.body);
    }
display(){
    ellipse.Model(RADIUS);

    fill = ("yellow");

    rect(this.body.postion.x,this.body.postion.y,this.radius);


}
}