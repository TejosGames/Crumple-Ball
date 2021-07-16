class Ground{
    constructor(x,y,width,height){
        var ground_options={
            isStatic:true
         }
         this.body=Bodies.rectangle(x,y,width,height,ground_options);
         World.add(world,this.body)
        this.w=width;
        this.h=height;
    }
    display(){
        var pos=this.body.position;
        fill("yellow");
        rectMode(CENTER);
         rect(pos.x,pos.y,this.w,this.h)
         
    }
}